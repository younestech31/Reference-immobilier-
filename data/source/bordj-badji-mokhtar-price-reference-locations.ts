import { PriceRefCommune } from '../types';

// BORDJ BADJI MOKHTAR - Locations (Auto-generated from FTR PDF data)
const createRange = (min: number, max: number) => ({ min, max });

export const bordjBadjiMokhtarPriceReferenceLocations: PriceRefCommune[] = [
  {
    commune: "BOURDJ BADJI MOKHTAR",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 196),
        zonePeripherique: createRange(120, 138),
        zoneEloignement: createRange(80, 92),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(90, 104),
        zonePeripherique: createRange(50, 58),
        zoneEloignement: createRange(40, 46),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(35, 40),
        zonePeripherique: createRange(20, 23),
        zoneEloignement: createRange(20, 23),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(135, 155),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(70, 81),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(500, 575),
        zonePeripherique: createRange(180, 207),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(225, 259),
        zonePeripherique: createRange(160, 184),
        zoneEloignement: createRange(130, 150),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(180, 207),
        zonePeripherique: createRange(140, 161),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(230, 265),
        zonePeripherique: createRange(160, 184),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(180, 207),
        zonePeripherique: createRange(140, 161),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(2300, 2645),
      },
    ],
  },
  {
    commune: "TIMIAOUINE",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(60, 69),
        zonePeripherique: createRange(40, 46),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(40, 46),
        zonePeripherique: createRange(30, 35),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(25, 29),
        zonePeripherique: createRange(10, 12),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(135, 155),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(70, 81),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(60, 69),
        zonePeripherique: createRange(30, 35),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(50, 58),
        zonePeripherique: createRange(30, 35),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(2300, 2645),
      },
    ],
  },
];
