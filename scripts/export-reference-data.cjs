#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const ts = require("typescript");

const ROOT = path.resolve(__dirname, "..");
const SOURCE_DIR = path.join(ROOT, "data", "source");
const OUTPUT_DIR = path.join(ROOT, "app", "src", "main", "assets", "reference");
const SOURCE_COMMIT = "fc2e85f0cb4d20fd3eb2961a95a5aed42cca3309";
const EXPECTED_FILES = 116;

function loadTypeScriptModule(filePath) {
  const source = fs.readFileSync(filePath, "utf8");
  const result = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
      removeComments: true
    },
    reportDiagnostics: true
  });

  const errors = (result.diagnostics || []).filter(d => d.category === ts.DiagnosticCategory.Error);
  if (errors.length) {
    throw new Error("TypeScript conversion failed for " + filePath + ": " +
      errors.map(d => ts.flattenDiagnosticMessageText(d.messageText, "\n")).join("; "));
  }

  const module = { exports: {} };
  const sandbox = {
    module,
    exports: module.exports,
    require: () => ({})
  };
  vm.runInNewContext(result.outputText, sandbox, { timeout: 10000, filename: filePath });
  return module.exports;
}

function validateRanges(value, location, counts) {
  if (!value || typeof value !== "object") return;
  if (Object.prototype.hasOwnProperty.call(value, "min") ||
      Object.prototype.hasOwnProperty.call(value, "max")) {
    const min = value.min;
    const max = value.max;
    if (!Number.isFinite(min) || !Number.isFinite(max) || min <= 0 || max <= 0 || min > max) {
      throw new Error("Invalid range at " + location + ": " + JSON.stringify(value));
    }
    counts.ranges += 1;
    return;
  }
  for (const [key, child] of Object.entries(value)) {
    validateRanges(child, location + "." + key, counts);
  }
}

function writeJson(fileName, data) {
  const destination = path.join(OUTPUT_DIR, fileName);
  fs.writeFileSync(destination, JSON.stringify(data), "utf8");
}

function main() {
  if (!fs.existsSync(SOURCE_DIR)) throw new Error("Missing source directory: " + SOURCE_DIR);
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const wilayaModule = loadTypeScriptModule(path.join(SOURCE_DIR, "wilayas.ts"));
  const wilayas = wilayaModule.WILAYAS;
  if (!Array.isArray(wilayas) || wilayas.length !== 58) {
    throw new Error("Expected 58 wilayas, found " + (wilayas?.length ?? "none"));
  }
  writeJson("wilayas.json", wilayas);

  const sourceFiles = fs.readdirSync(SOURCE_DIR)
    .filter(name => /^[a-z0-9-]+-price-reference-(transactions|locations)\.ts$/.test(name))
    .sort();

  if (sourceFiles.length !== EXPECTED_FILES) {
    throw new Error("Expected " + EXPECTED_FILES + " price files, found " + sourceFiles.length);
  }

  const codes = new Set(wilayas.map(w => w.code));
  const counts = { files: 0, regions: 0, ranges: 0 };
  const manifest = {
    schemaVersion: 1,
    sourceRepository: "https://github.com/younestech31/Lattab",
    sourceCommit: SOURCE_COMMIT,
    wilayaCount: wilayas.length,
    datasetFileCount: sourceFiles.length,
    generatedFiles: []
  };

  for (const fileName of sourceFiles) {
    const match = fileName.match(/^([a-z0-9-]+)-price-reference-(transactions|locations)\.ts$/);
    const code = match[1];
    const mode = match[2] === "transactions" ? "sale" : "rent";
    if (!codes.has(code)) throw new Error("Unknown wilaya code in " + fileName);

    const exported = loadTypeScriptModule(path.join(SOURCE_DIR, fileName));
    const regions = Object.values(exported).find(Array.isArray);
    if (!Array.isArray(regions) || regions.length === 0) {
      throw new Error("No region array exported by " + fileName);
    }

    const localCounts = { ranges: 0 };
    validateRanges(regions, fileName, localCounts);
    const wilaya = wilayas.find(item => item.code === code);
    const outputName = code + "-" + mode + ".json";
    writeJson(outputName, {
      schemaVersion: 1,
      wilaya,
      mode,
      sourceFile: fileName,
      regions
    });

    counts.files += 1;
    counts.regions += regions.length;
    counts.ranges += localCounts.ranges;
    manifest.generatedFiles.push(outputName);
  }

  manifest.regionCount = counts.regions;
  manifest.rangeCount = counts.ranges;
  writeJson("manifest.json", manifest);

  const generated = fs.readdirSync(OUTPUT_DIR).filter(name => name.endsWith(".json")).length;
  if (generated !== EXPECTED_FILES + 2) {
    throw new Error("Expected " + (EXPECTED_FILES + 2) + " JSON outputs, found " + generated);
  }

  console.log("Reference data export successful:");
  console.log(JSON.stringify({ ...counts, wilayas: wilayas.length, outputFiles: generated }, null, 2));
}

try {
  main();
} catch (error) {
  console.error(error);
  process.exit(1);
}
