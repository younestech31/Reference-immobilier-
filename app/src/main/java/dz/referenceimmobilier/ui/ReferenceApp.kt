package dz.referenceimmobilier.ui

import android.content.ClipData
import android.content.ClipboardManager
import android.content.Context
import android.content.Intent
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowDropDown
import androidx.compose.material.icons.filled.ContentCopy
import androidx.compose.material.icons.filled.Share
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.LocalLayoutDirection
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.LayoutDirection
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import dz.referenceimmobilier.data.*
import dz.referenceimmobilier.domain.PriceCalculator
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import java.text.NumberFormat
import java.util.Locale

private fun tr(ar: String, fr: String, isAr: Boolean) = if (isAr) ar else fr

@Composable
fun ReferenceApp() {
    val context = LocalContext.current
    var language by rememberSaveable { mutableStateOf("ar") }
    val isAr = language == "ar"
    var wilayas by remember { mutableStateOf(emptyList<WilayaOption>()) }
    var wilayaCode by rememberSaveable { mutableStateOf("oran") }
    var modeName by rememberSaveable { mutableStateOf("sale") }
    val mode = if (modeName == "rent") ReferenceMode.RENT else ReferenceMode.SALE
    var dataset by remember { mutableStateOf<WilayaReference?>(null) }
    var isLoading by remember { mutableStateOf(true) }
    var hasError by remember { mutableStateOf(false) }
    var regionName by rememberSaveable { mutableStateOf("") }
    var categoryKey by rememberSaveable { mutableStateOf("") }
    var typeIndex by rememberSaveable { mutableIntStateOf(-1) }
    var zoneKey by rememberSaveable { mutableStateOf("") }
    var areaText by rememberSaveable { mutableStateOf("") }

    LaunchedEffect(Unit) {
        wilayas = withContext(Dispatchers.IO) {
            runCatching { ReferenceRepository.loadWilayas(context) }.getOrDefault(emptyList())
        }
    }
    LaunchedEffect(wilayaCode, modeName) {
        isLoading = true
        hasError = false
        dataset = null
        try {
            val loaded = withContext(Dispatchers.IO) {
                ReferenceRepository.loadWilaya(context, wilayaCode, mode)
            }
            dataset = loaded
            regionName = loaded.regions.firstOrNull()?.commune.orEmpty()
            categoryKey = ""
            typeIndex = -1
            zoneKey = ""
            areaText = ""
        } catch (_: Exception) {
            hasError = true
        } finally {
            isLoading = false
        }
    }

    val region = dataset?.regions?.firstOrNull { it.commune == regionName }
    val category = region?.categories?.firstOrNull { it.key == categoryKey }
    val propertyType = category?.types?.getOrNull(typeIndex)
    val zone = propertyType?.zones?.firstOrNull { it.key == zoneKey }
    val area = areaText.replace(',', '.').toDoubleOrNull()
    val estimate = if (zone != null && area != null) PriceCalculator.calculate(zone.range, area) else null

    CompositionLocalProvider(LocalLayoutDirection provides if (isAr) LayoutDirection.Rtl else LayoutDirection.Ltr) {
        Surface(Modifier.fillMaxSize(), color = MaterialTheme.colorScheme.background) {
            Column(
                Modifier.fillMaxSize().statusBarsPadding().navigationBarsPadding()
                    .verticalScroll(rememberScrollState()).padding(horizontal = 16.dp).padding(bottom = 24.dp),
                verticalArrangement = Arrangement.spacedBy(15.dp)
            ) {
                Row(
                    Modifier.fillMaxWidth().padding(top = 8.dp),
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.SpaceBetween
                ) {
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        Surface(Modifier.size(44.dp), color = MaterialTheme.colorScheme.primary, shape = MaterialTheme.shapes.large) {
                            Box(contentAlignment = Alignment.Center) {
                                Text("R", color = MaterialTheme.colorScheme.onPrimary, fontSize = 22.sp, fontWeight = FontWeight.Bold)
                            }
                        }
                        Spacer(Modifier.width(10.dp))
                        Column {
                            Text(tr("المرجع العقاري الجزائري", "Référentiel immobilier algérien", isAr), fontWeight = FontWeight.Bold)
                            Text(tr("نطاقات الأسعار المرجعية", "Fourchettes de prix de référence", isAr), style = MaterialTheme.typography.bodySmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
                        }
                    }
                    TextButton(onClick = { language = if (isAr) "fr" else "ar" }) {
                        Text(if (isAr) "FR" else "عربي", fontWeight = FontWeight.Bold)
                    }
                }

                Card(colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.primaryContainer), shape = MaterialTheme.shapes.extraLarge) {
                    Column(Modifier.padding(18.dp), verticalArrangement = Arrangement.spacedBy(7.dp)) {
                        Text(tr("اعرف النطاق المرجعي لعقارك", "Consultez la fourchette de référence de votre bien", isAr), style = MaterialTheme.typography.titleLarge, fontWeight = FontWeight.Bold, color = MaterialTheme.colorScheme.onPrimaryContainer)
                        Text(
                            tr("اختر الولاية والبلدية ونوع العقار لعرض حدود الأسعار الواردة في قاعدة البيانات.", "Choisissez la wilaya, la commune et le type de bien pour consulter les bornes de prix de la base.", isAr),
                            color = MaterialTheme.colorScheme.onPrimaryContainer,
                            style = MaterialTheme.typography.bodyMedium,
                            lineHeight = 21.sp
                        )
                        Text(tr("يعمل دون إنترنت", "Disponible hors connexion", isAr), color = MaterialTheme.colorScheme.primary, fontWeight = FontWeight.Bold, style = MaterialTheme.typography.labelMedium)
                    }
                }

                Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                    ModeChip(Modifier.weight(1f), mode == ReferenceMode.SALE, tr("بيع العقار", "Vente", isAr)) {
                        modeName = "sale"
                        categoryKey = ""; typeIndex = -1; zoneKey = ""; areaText = ""
                    }
                    ModeChip(Modifier.weight(1f), mode == ReferenceMode.RENT, tr("إيجار العقار", "Location", isAr)) {
                        modeName = "rent"
                        categoryKey = ""; typeIndex = -1; zoneKey = ""; areaText = ""
                    }
                }

                Card(colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface)) {
                    Column(Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(13.dp)) {
                        Text(tr("بيانات العقار", "Informations du bien", isAr), style = MaterialTheme.typography.titleMedium, fontWeight = FontWeight.Bold)

                        ChoiceField(
                            tr("الولاية", "Wilaya", isAr),
                            wilayas.firstOrNull { it.code == wilayaCode }?.let { if (isAr) it.nameAr else it.nameFr }.orEmpty(),
                            wilayas.filter { it.isSupported }.map { it.code to if (isAr) it.nameAr else it.nameFr },
                            wilayas.isNotEmpty()
                        ) {
                            wilayaCode = it
                            regionName = ""; categoryKey = ""; typeIndex = -1; zoneKey = ""; areaText = ""
                        }

                        if (isLoading) {
                            Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.Center, verticalAlignment = Alignment.CenterVertically) {
                                CircularProgressIndicator(Modifier.size(22.dp), strokeWidth = 2.dp)
                                Spacer(Modifier.width(9.dp))
                                Text(tr("جارٍ تحميل البيانات المحلية...", "Chargement des données locales...", isAr))
                            }
                        } else if (hasError) {
                            Text(
                                tr("تعذر تحميل بيانات الولاية. تحقق من حزمة البيانات المضمّنة.", "Impossible de charger les données locales de cette wilaya.", isAr),
                                color = MaterialTheme.colorScheme.error
                            )
                        } else {
                            ChoiceField(
                                tr("البلدية / المنطقة", "Commune / Secteur", isAr),
                                region?.let { cleanRegion(it.commune) }.orEmpty(),
                                dataset?.regions?.map { it.commune to cleanRegion(it.commune) }.orEmpty()
                            ) {
                                regionName = it
                                categoryKey = ""; typeIndex = -1; zoneKey = ""; areaText = ""
                            }
                            ChoiceField(
                                tr("طبيعة العقار", "Nature du bien", isAr),
                                category?.let { if (isAr) it.labelAr else it.labelFr }.orEmpty(),
                                region?.categories?.map { it.key to if (isAr) it.labelAr else it.labelFr }.orEmpty(),
                                region != null
                            ) {
                                categoryKey = it
                                typeIndex = -1; zoneKey = ""; areaText = ""
                            }
                            ChoiceField(
                                tr("صنف العقار", "Catégorie du bien", isAr),
                                propertyType?.label.orEmpty(),
                                category?.types?.mapIndexed { index, entry -> index.toString() to entry.label }.orEmpty(),
                                category != null
                            ) {
                                typeIndex = it.toIntOrNull() ?: -1
                                zoneKey = ""; areaText = ""
                            }
                            ChoiceField(
                                tr("المنطقة العمرانية", "Situation / Zone", isAr),
                                zone?.let { if (isAr) it.labelAr else it.labelFr }.orEmpty(),
                                propertyType?.zones?.map { it.key to if (isAr) it.labelAr else it.labelFr }.orEmpty(),
                                propertyType != null
                            ) {
                                zoneKey = it
                                areaText = ""
                            }

                            OutlinedTextField(
                                value = areaText,
                                onValueChange = { areaText = it.filter { char -> char.isDigit() || char == '.' || char == ',' }.take(14) },
                                modifier = Modifier.fillMaxWidth(),
                                enabled = zone != null,
                                singleLine = true,
                                label = {
                                    Text(
                                        if (propertyType?.unit?.contains("Ha", true) == true)
                                            tr("المساحة (بالهكتار Ha)", "Superficie (hectares Ha)", isAr)
                                        else tr("المساحة (بالمتر المربع m²)", "Superficie (m²)", isAr)
                                    )
                                },
                                placeholder = { Text(tr("أدخل المساحة", "Saisir la superficie", isAr)) },
                                keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Decimal)
                            )
                            Text(
                                tr("نحافظ على وحدة القياس الواردة في المرجع، بما فيها الهكتار.", "L'unité de mesure d'origine est conservée, y compris l'hectare.", isAr),
                                style = MaterialTheme.typography.bodySmall,
                                color = MaterialTheme.colorScheme.onSurfaceVariant
                            )
                        }
                    }
                }

                if (estimate != null && zone != null && propertyType != null) {
                    ResultCard(estimate, zone, propertyType, mode, area ?: 0.0, isAr, {
                        val message = shareText(region, propertyType, zone, estimate, area ?: 0.0, mode, isAr)
                        val clipboard = context.getSystemService(Context.CLIPBOARD_SERVICE) as ClipboardManager
                        clipboard.setPrimaryClip(ClipData.newPlainText("Reference estimate", message))
                    }, {
                        val intent = Intent(Intent.ACTION_SEND).apply {
                            type = "text/plain"
                            putExtra(Intent.EXTRA_TEXT, shareText(region, propertyType, zone, estimate, area ?: 0.0, mode, isAr))
                        }
                        context.startActivity(Intent.createChooser(intent, tr("مشاركة النتيجة", "Partager le résultat", isAr)))
                    })
                } else {
                    Card(colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surfaceVariant)) {
                        Text(
                            tr("أكمل اختيار الموقع والعقار والمنطقة، ثم أدخل المساحة لعرض النطاق المرجعي.", "Sélectionnez la localisation, le bien et la zone, puis saisissez la superficie.", isAr),
                            Modifier.padding(16.dp),
                            color = MaterialTheme.colorScheme.onSurfaceVariant,
                            lineHeight = 22.sp
                        )
                    }
                }

                Card(colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface)) {
                    Column(Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(7.dp)) {
                        Text(tr("تنبيه مهم", "Avis important", isAr), color = MaterialTheme.colorScheme.secondary, fontWeight = FontWeight.Bold, style = MaterialTheme.typography.titleMedium)
                        Text(
                            tr(
                                "تعرض هذه الأداة نطاقات القيم الواردة في المرجع الإداري للمديرية العامة للضرائب للفترة 2025–2026، وفق البيانات المتاحة داخل التطبيق. النتائج استرشادية فقط وليست تقييماً فردياً أو سعراً ملزماً، ولا تحتسب ضريبة IRG أو حقوق التسجيل أو أتعاب الموثق. يرجى الرجوع إلى المرجع الرسمي والإدارة الجبائية المختصة.",
                                "Cet outil présente les fourchettes du référentiel administratif de la Direction Générale des Impôts pour 2025–2026. Les résultats sont indicatifs et ne constituent ni une évaluation individuelle ni un prix obligatoire. L'outil ne calcule pas l'IRG, les droits d'enregistrement ou les honoraires du notaire. Consultez le référentiel officiel et le service fiscal compétent.",
                                isAr
                            ),
                            style = MaterialTheme.typography.bodySmall,
                            color = MaterialTheme.colorScheme.onSurfaceVariant,
                            lineHeight = 20.sp
                        )
                    }
                }
                Text(
                    tr("البيانات مضمّنة داخل التطبيق — البحث والحساب دون إنترنت", "Données intégrées — recherche et calcul hors connexion", isAr),
                    Modifier.fillMaxWidth(),
                    textAlign = TextAlign.Center,
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
                Text("Source : Direction Générale des Impôts • Référentiel 2025–2026",
                    Modifier.fillMaxWidth(), textAlign = TextAlign.Center,
                    style = MaterialTheme.typography.labelSmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
            }
        }
    }
}

@Composable
private fun ModeChip(modifier: Modifier, selected: Boolean, label: String, onClick: () -> Unit) {
    FilterChip(selected, onClick, label = {
        Text(label, Modifier.fillMaxWidth(), textAlign = TextAlign.Center, fontWeight = FontWeight.SemiBold)
    }, modifier = modifier)
}

@Composable
private fun ChoiceField(
    label: String,
    value: String,
    options: List<Pair<String, String>>,
    enabled: Boolean = true,
    onSelect: (String) -> Unit
) {
    var expanded by remember { mutableStateOf(false) }
    Column(verticalArrangement = Arrangement.spacedBy(5.dp)) {
        Text(label, style = MaterialTheme.typography.labelLarge, fontWeight = FontWeight.SemiBold)
        Box(Modifier.fillMaxWidth()) {
            OutlinedTextField(
                value = value.ifBlank { label },
                onValueChange = {},
                readOnly = true,
                enabled = enabled,
                singleLine = true,
                modifier = Modifier.fillMaxWidth(),
                trailingIcon = { Icon(Icons.Default.ArrowDropDown, contentDescription = null) }
            )
            if (enabled) Box(Modifier.matchParentSize().clickable { expanded = true })
            DropdownMenu(expanded = expanded, onDismissRequest = { expanded = false }, modifier = Modifier.heightIn(max = 300.dp)) {
                Column(Modifier.heightIn(max = 290.dp).verticalScroll(rememberScrollState())) {
                    options.forEach { option ->
                        DropdownMenuItem(text = { Text(option.second) }, onClick = {
                            onSelect(option.first)
                            expanded = false
                        })
                    }
                }
            }
        }
    }
}

@Composable
private fun ResultCard(
    result: PriceEstimate,
    zone: PriceZoneOption,
    type: PriceType,
    mode: ReferenceMode,
    area: Double,
    ar: Boolean,
    onCopy: () -> Unit,
    onShare: () -> Unit
) {
    val unit = if (ar) {
        (if (type.unit.contains("Ha", true)) "دج/هكتار" else "دج/م²") + if (mode == ReferenceMode.RENT) "/شهرياً" else ""
    } else {
        (if (type.unit.contains("Ha", true)) "DZD/Ha" else "DZD/m²") + if (mode == ReferenceMode.RENT) "/mois" else ""
    }
    Card(colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface), elevation = CardDefaults.cardElevation(2.dp)) {
        Column(Modifier.padding(18.dp), verticalArrangement = Arrangement.spacedBy(12.dp)) {
            Text(tr("النطاق المرجعي", "Fourchette de référence", ar), style = MaterialTheme.typography.titleLarge, fontWeight = FontWeight.Bold)
            Text((if (ar) zone.labelAr else zone.labelFr) + " • " + type.label, style = MaterialTheme.typography.bodySmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
            Surface(color = MaterialTheme.colorScheme.primaryContainer.copy(alpha = 0.7f), shape = MaterialTheme.shapes.large) {
                Column(Modifier.fillMaxWidth().padding(16.dp), horizontalAlignment = Alignment.CenterHorizontally, verticalArrangement = Arrangement.spacedBy(5.dp)) {
                    Text(tr("السعر المرجعي للوحدة", "Prix de référence unitaire", ar), style = MaterialTheme.typography.labelMedium)
                    Text(formatNumber(result.unitMin, ar) + " – " + formatNumber(result.unitMax, ar), style = MaterialTheme.typography.headlineSmall, color = MaterialTheme.colorScheme.primary, fontWeight = FontWeight.ExtraBold)
                    Text(unit, style = MaterialTheme.typography.bodySmall)
                }
            }
            HorizontalDivider()
            Text(tr("القيمة الإجمالية التقديرية", "Valeur totale estimative", ar), style = MaterialTheme.typography.labelLarge, fontWeight = FontWeight.SemiBold)
            Text(formatNumber(result.totalMin, ar) + " – " + formatNumber(result.totalMax, ar) + if (ar) " دج" else " DZD",
                style = MaterialTheme.typography.titleLarge, fontWeight = FontWeight.Bold, color = MaterialTheme.colorScheme.primary)
            Text(tr("المساحة: ", "Superficie : ", ar) + formatNumber(area, ar) + if (type.unit.contains("Ha", true)) " Ha" else " m²",
                style = MaterialTheme.typography.bodySmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
            Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                Button(onClick = onCopy, modifier = Modifier.weight(1f)) {
                    Icon(Icons.Default.ContentCopy, null, Modifier.size(17.dp))
                    Spacer(Modifier.width(6.dp))
                    Text(tr("نسخ", "Copier", ar))
                }
                Button(onClick = onShare, modifier = Modifier.weight(1f), colors = ButtonDefaults.buttonColors(containerColor = MaterialTheme.colorScheme.secondary)) {
                    Icon(Icons.Default.Share, null, Modifier.size(17.dp))
                    Spacer(Modifier.width(6.dp))
                    Text(tr("مشاركة", "Partager", ar))
                }
            }
        }
    }
}

private fun cleanRegion(name: String): String {
    var result = name.trim()
    if (result.contains(":")) {
        val parts = result.split(":")
        val before = parts.first().trim()
        val after = parts.drop(1).joinToString(":").trim()
        val prefixOnly = before.isBlank() || Regex("^(COMMUNES?\\s*(DE)?\\s*)?$", RegexOption.IGNORE_CASE).matches(before)
        result = if (prefixOnly) after else before
    }
    result = result.replace(Regex("^(COMMUNES?\\s+DE\\s+|COMMUNES?\\s+)", RegexOption.IGNORE_CASE), "")
    result = result.replace(Regex("^[dD]['’\\s]+"), "")
    return result.trimEnd('.').replace(Regex("\\s+"), " ")
}

private fun formatNumber(value: Double, ar: Boolean): String =
    NumberFormat.getNumberInstance(if (ar) Locale("ar", "DZ") else Locale("fr", "DZ"))
        .apply { maximumFractionDigits = 2 }.format(value)

private fun shareText(
    region: CommuneReference?,
    type: PriceType,
    zone: PriceZoneOption,
    result: PriceEstimate,
    area: Double,
    mode: ReferenceMode,
    ar: Boolean
): String {
    val location = cleanRegion(region?.commune.orEmpty())
    val unit = if (type.unit.contains("Ha", true)) "Ha" else "m²"
    val operationAr = if (mode == ReferenceMode.SALE) "بيع" else "إيجار"
    val operationFr = if (mode == ReferenceMode.SALE) "Vente" else "Location"
    return if (ar) {
        "المرجع العقاري الجزائري — " + operationAr + "\n" +
            "المنطقة: " + location + "\nالصنف: " + type.label + "\nالموقع: " + zone.labelAr + "\n" +
            "سعر الوحدة: من " + formatNumber(result.unitMin, true) + " إلى " + formatNumber(result.unitMax, true) + "\n" +
            "المساحة: " + formatNumber(area, true) + " " + unit + "\n" +
            "القيمة الإجمالية: من " + formatNumber(result.totalMin, true) + " إلى " + formatNumber(result.totalMax, true) + " دج\n" +
            "نتيجة استرشادية وفق مرجع المديرية العامة للضرائب 2025–2026."
    } else {
        "Référentiel immobilier algérien — " + operationFr + "\n" +
            "Secteur : " + location + "\nType : " + type.label + "\nZone : " + zone.labelFr + "\n" +
            "Prix unitaire : de " + formatNumber(result.unitMin, false) + " à " + formatNumber(result.unitMax, false) + "\n" +
            "Superficie : " + formatNumber(area, false) + " " + unit + "\n" +
            "Valeur totale : de " + formatNumber(result.totalMin, false) + " à " + formatNumber(result.totalMax, false) + " DZD\n" +
            "Estimation indicative selon le référentiel DGI 2025–2026."
    }
}
