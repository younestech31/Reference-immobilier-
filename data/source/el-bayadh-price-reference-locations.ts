import { PriceRefCommune } from '../types';

// EL BAYADH - Locations (Auto-generated from FTR PDF data)
const createRange = (min: number, max: number) => ({ min, max });

export const elBayadhPriceReferenceLocations: PriceRefCommune[] = [
  {
    commune: "EL BAYADH",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        centreVille: createRange(94, 108),
        zonePeripherique: createRange(66, 75),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(67, 77),
        zonePeripherique: createRange(55, 63),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(46, 53),
        zonePeripherique: createRange(37, 43),
        zoneEloignement: createRange(11, 13),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(37, 43),
        zonePeripherique: createRange(28, 32),
        zoneEloignement: createRange(6, 6),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(56, 64),
        zonePeripherique: createRange(45, 51),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(37, 43),
        zonePeripherique: createRange(28, 32),
        zoneEloignement: createRange(9, 11),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(33, 38),
        zonePeripherique: createRange(22, 25),
        zoneEloignement: createRange(8, 9),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(110, 127),
        zonePeripherique: createRange(110, 127),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(89, 103),
        zonePeripherique: createRange(89, 103),
        zoneEloignement: createRange(16, 18),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(56, 64),
        zonePeripherique: createRange(66, 75),
        zoneEloignement: createRange(9, 10),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(34, 39),
        zonePeripherique: createRange(34, 39),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(34, 39),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(45, 51),
        zonePeripherique: createRange(45, 51),
        zoneEloignement: createRange(11, 12),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(21, 24),
        zonePeripherique: createRange(21, 24),
        zoneEloignement: createRange(5, 6),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(26, 30),
        zonePeripherique: createRange(24, 27),
        zoneEloignement: createRange(13, 15),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(18, 21),
        zonePeripherique: createRange(16, 18),
        zoneEloignement: createRange(5, 6),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(16, 18),
        zonePeripherique: createRange(16, 18),
        zoneEloignement: createRange(8, 9),
      },
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(26, 30),
        zonePeripherique: createRange(26, 30),
        zoneEloignement: createRange(11, 12),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(788, 906),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(656, 755),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(525, 604),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(656, 755),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(525, 604),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(263, 302),
      },
    ],
  },
  {
    commune: "BOUGTOUB",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(56, 64),
        zonePeripherique: createRange(45, 51),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(37, 43),
        zonePeripherique: createRange(28, 32),
        zoneEloignement: createRange(8, 9),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(28, 32),
        zonePeripherique: createRange(19, 21),
        zoneEloignement: createRange(4, 5),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(45, 51),
        zonePeripherique: createRange(33, 38),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(33, 38),
        zonePeripherique: createRange(19, 21),
        zoneEloignement: createRange(7, 9),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(28, 32),
        zonePeripherique: createRange(15, 17),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(89, 103),
        zonePeripherique: createRange(89, 103),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(67, 77),
        zonePeripherique: createRange(67, 77),
        zoneEloignement: createRange(12, 14),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(45, 51),
        zonePeripherique: createRange(45, 51),
        zoneEloignement: createRange(7, 8),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(26, 30),
        zonePeripherique: createRange(26, 30),
        zoneEloignement: createRange(0, 0),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(26, 30),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(26, 30),
        zonePeripherique: createRange(24, 27),
        zoneEloignement: createRange(13, 15),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(18, 21),
        zonePeripherique: createRange(18, 21),
        zoneEloignement: createRange(2, 2),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(24, 27),
        zonePeripherique: createRange(21, 24),
        zoneEloignement: createRange(4, 5),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(16, 18),
        zonePeripherique: createRange(12, 14),
        zoneEloignement: createRange(2, 2),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(20, 23),
        zonePeripherique: createRange(13, 15),
        zoneEloignement: createRange(2, 2),
      },
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(22, 26),
        zonePeripherique: createRange(20, 23),
        zoneEloignement: createRange(13, 15),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(788, 906),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(656, 755),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(525, 604),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(656, 755),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(525, 604),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(263, 302),
      },
    ],
  },
  {
    commune: "EL ABIODH SIDI CHEIKH",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(38, 44),
        zonePeripherique: createRange(33, 38),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(22, 26),
        zonePeripherique: createRange(22, 26),
        zoneEloignement: createRange(7, 8),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(13, 15),
        zonePeripherique: createRange(13, 15),
        zoneEloignement: createRange(4, 4),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(33, 38),
        zonePeripherique: createRange(33, 38),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(20, 24),
        zonePeripherique: createRange(19, 21),
        zoneEloignement: createRange(5, 6),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(17, 19),
        zonePeripherique: createRange(13, 15),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(67, 77),
        zonePeripherique: createRange(40, 46),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(45, 51),
        zonePeripherique: createRange(33, 38),
        zoneEloignement: createRange(10, 11),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(33, 38),
        zonePeripherique: createRange(16, 18),
        zoneEloignement: createRange(6, 6),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(24, 27),
        zonePeripherique: createRange(22, 26),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(22, 26),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(24, 27),
        zonePeripherique: createRange(13, 15),
        zoneEloignement: createRange(2, 3),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(18, 21),
        zonePeripherique: createRange(11, 12),
        zoneEloignement: createRange(2, 2),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(23, 26),
        zonePeripherique: createRange(22, 26),
        zoneEloignement: createRange(13, 15),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(16, 18),
        zonePeripherique: createRange(12, 14),
        zoneEloignement: createRange(2, 2),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(16, 18),
        zonePeripherique: createRange(8, 9),
        zoneEloignement: createRange(1, 2),
      },
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(22, 26),
        zonePeripherique: createRange(17, 20),
        zoneEloignement: createRange(9, 11),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(788, 906),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(656, 755),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(525, 604),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(656, 755),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(525, 604),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(263, 302),
      },
    ],
  },
  {
    commune: "BOUALEM",
    individuels: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(10, 11),
        zonePeripherique: createRange(6, 7),
        zoneEloignement: createRange(4, 4),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(6, 7),
        zonePeripherique: createRange(4, 4),
        zoneEloignement: createRange(3, 3),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(10, 12),
        zonePeripherique: createRange(6, 7),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(5, 6),
        zonePeripherique: createRange(2, 2),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(14, 16),
        zonePeripherique: createRange(8, 9),
        zoneEloignement: createRange(7, 8),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(8, 9),
        zonePeripherique: createRange(6, 7),
        zoneEloignement: createRange(5, 5),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(18, 20),
        zonePeripherique: createRange(16, 19),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(15, 17),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(3, 4),
        zonePeripherique: createRange(3, 3),
        zoneEloignement: createRange(2, 2),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(3, 3),
        zonePeripherique: createRange(2, 2),
        zoneEloignement: createRange(1, 1),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(3, 3),
        zonePeripherique: createRange(2, 2),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(2, 2),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(18, 20),
        zonePeripherique: createRange(16, 19),
        zoneEloignement: createRange(5, 6),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(750, 863),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(625, 719),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(500, 575),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(625, 719),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(500, 575),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(250, 288),
      },
    ],
  },
  {
    commune: "BREZINA",
    individuels: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(10, 12),
        zonePeripherique: createRange(6, 7),
        zoneEloignement: createRange(4, 5),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(6, 7),
        zonePeripherique: createRange(4, 5),
        zoneEloignement: createRange(3, 4),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(7, 8),
        zonePeripherique: createRange(5, 6),
        zoneEloignement: createRange(4, 5),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(5, 6),
        zonePeripherique: createRange(4, 5),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(15, 17),
        zonePeripherique: createRange(9, 10),
        zoneEloignement: createRange(7, 8),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(9, 10),
        zonePeripherique: createRange(6, 7),
        zoneEloignement: createRange(5, 6),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(13, 15),
        zonePeripherique: createRange(13, 15),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(13, 15),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(2, 2),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(1, 2),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 2),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(1, 2),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(2, 2),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(788, 906),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(656, 755),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(525, 604),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(656, 755),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(525, 604),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(263, 302),
      },
    ],
  },
  {
    commune: "GHASSOUL",
    individuels: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(10, 11),
        zonePeripherique: createRange(6, 7),
        zoneEloignement: createRange(4, 4),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(6, 7),
        zonePeripherique: createRange(4, 4),
        zoneEloignement: createRange(3, 3),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(6, 7),
        zonePeripherique: createRange(5, 6),
        zoneEloignement: createRange(4, 5),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(5, 6),
        zonePeripherique: createRange(4, 4),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(14, 16),
        zonePeripherique: createRange(8, 9),
        zoneEloignement: createRange(7, 8),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(8, 9),
        zonePeripherique: createRange(6, 7),
        zoneEloignement: createRange(5, 5),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(13, 14),
        zonePeripherique: createRange(13, 14),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(13, 14),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(2, 2),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 1),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(2, 2),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(750, 863),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(625, 719),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(500, 575),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(625, 719),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(500, 575),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(250, 288),
      },
    ],
  },
  {
    commune: "EL KHEITER",
    individuels: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(10, 11),
        zonePeripherique: createRange(6, 7),
        zoneEloignement: createRange(4, 4),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(6, 7),
        zonePeripherique: createRange(4, 4),
        zoneEloignement: createRange(3, 3),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(9, 11),
        zonePeripherique: createRange(5, 6),
        zoneEloignement: createRange(4, 5),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(5, 6),
        zonePeripherique: createRange(4, 4),
        zoneEloignement: createRange(3, 4),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(8, 9),
        zonePeripherique: createRange(8, 9),
        zoneEloignement: createRange(7, 8),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(6, 7),
        zonePeripherique: createRange(6, 6),
        zoneEloignement: createRange(5, 5),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(15, 17),
        zonePeripherique: createRange(15, 17),
        zoneEloignement: createRange(16, 19),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(16, 19),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(2, 2),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(2, 2),
        zoneEloignement: createRange(2, 2),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(750, 863),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(625, 719),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(500, 575),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(625, 719),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(500, 575),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(250, 288),
      },
    ],
  },
  {
    commune: "KEF EL AHMAR",
    individuels: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(10, 11),
        zonePeripherique: createRange(6, 7),
        zoneEloignement: createRange(4, 4),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(6, 7),
        zonePeripherique: createRange(4, 4),
        zoneEloignement: createRange(3, 3),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(9, 11),
        zonePeripherique: createRange(5, 6),
        zoneEloignement: createRange(4, 5),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(5, 6),
        zonePeripherique: createRange(4, 4),
        zoneEloignement: createRange(3, 4),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(8, 9),
        zonePeripherique: createRange(8, 9),
        zoneEloignement: createRange(7, 8),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(6, 7),
        zonePeripherique: createRange(6, 6),
        zoneEloignement: createRange(5, 5),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(15, 17),
        zonePeripherique: createRange(15, 17),
        zoneEloignement: createRange(16, 19),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(16, 19),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(2, 2),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(2, 2),
        zoneEloignement: createRange(2, 2),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(750, 863),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(625, 719),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(500, 575),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(625, 719),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(500, 575),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(250, 288),
      },
    ],
  },
  {
    commune: "ARBAOUAT",
    individuels: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(10, 11),
        zonePeripherique: createRange(6, 7),
        zoneEloignement: createRange(4, 4),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(6, 7),
        zonePeripherique: createRange(4, 4),
        zoneEloignement: createRange(3, 3),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(9, 11),
        zonePeripherique: createRange(5, 6),
        zoneEloignement: createRange(4, 5),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(8, 9),
        zonePeripherique: createRange(8, 9),
        zoneEloignement: createRange(7, 8),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(6, 7),
        zonePeripherique: createRange(6, 7),
        zoneEloignement: createRange(5, 5),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(15, 17),
        zonePeripherique: createRange(6, 6),
        zoneEloignement: createRange(16, 19),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(16, 19),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(2, 2),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(2, 2),
        zoneEloignement: createRange(2, 2),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(750, 863),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(625, 719),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(500, 575),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(625, 719),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(500, 575),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(250, 288),
      },
    ],
  },
  {
    commune: "SIDI SLIMANE",
    individuels: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(6, 7),
        zonePeripherique: createRange(5, 6),
        zoneEloignement: createRange(4, 4),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(4, 4),
        zonePeripherique: createRange(4, 4),
        zoneEloignement: createRange(2, 3),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(6, 7),
        zonePeripherique: createRange(4, 4),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(5, 6),
        zonePeripherique: createRange(3, 4),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(9, 11),
        zonePeripherique: createRange(7, 8),
        zoneEloignement: createRange(5, 5),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(7, 8),
        zonePeripherique: createRange(5, 5),
        zoneEloignement: createRange(4, 4),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(13, 14),
        zonePeripherique: createRange(13, 14),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(13, 14),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(2, 2),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(2, 2),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 1),
        zonePeripherique: createRange(1, 1),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 2),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(2, 2),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(750, 863),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(625, 719),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(500, 575),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(625, 719),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(500, 575),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(250, 288),
      },
    ],
  },
  {
    commune: "SIDI TIFOUR",
    individuels: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(6, 7),
        zonePeripherique: createRange(5, 6),
        zoneEloignement: createRange(4, 4),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(4, 4),
        zonePeripherique: createRange(4, 4),
        zoneEloignement: createRange(2, 3),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(6, 7),
        zonePeripherique: createRange(4, 4),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(5, 6),
        zonePeripherique: createRange(3, 4),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(9, 11),
        zonePeripherique: createRange(7, 8),
        zoneEloignement: createRange(5, 5),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(7, 8),
        zonePeripherique: createRange(5, 5),
        zoneEloignement: createRange(4, 4),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(13, 14),
        zonePeripherique: createRange(13, 14),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(13, 14),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(2, 2),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(2, 2),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 1),
        zonePeripherique: createRange(1, 1),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 2),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(2, 2),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(750, 863),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(625, 719),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(500, 575),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(625, 719),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(500, 575),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(250, 288),
      },
    ],
  },
  {
    commune: "STITTEN",
    individuels: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(6, 7),
        zonePeripherique: createRange(5, 6),
        zoneEloignement: createRange(4, 4),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(4, 4),
        zonePeripherique: createRange(4, 4),
        zoneEloignement: createRange(2, 3),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(6, 7),
        zonePeripherique: createRange(4, 4),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(5, 6),
        zonePeripherique: createRange(3, 4),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(9, 11),
        zonePeripherique: createRange(7, 8),
        zoneEloignement: createRange(5, 5),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(7, 8),
        zonePeripherique: createRange(5, 5),
        zoneEloignement: createRange(4, 4),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(13, 14),
        zonePeripherique: createRange(13, 14),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(13, 14),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(2, 2),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(2, 2),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 1),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(0, 0),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 2),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(2, 2),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(750, 863),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(625, 719),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(500, 575),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(625, 719),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(500, 575),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(250, 288),
      },
    ],
  },
  {
    commune: "TOUSMOULINE",
    individuels: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(6, 7),
        zonePeripherique: createRange(5, 6),
        zoneEloignement: createRange(4, 4),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(4, 4),
        zonePeripherique: createRange(4, 4),
        zoneEloignement: createRange(2, 3),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(5, 5),
        zonePeripherique: createRange(4, 4),
        zoneEloignement: createRange(3, 4),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(4, 4),
        zonePeripherique: createRange(3, 4),
        zoneEloignement: createRange(3, 3),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(9, 11),
        zonePeripherique: createRange(7, 8),
        zoneEloignement: createRange(5, 5),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(7, 8),
        zonePeripherique: createRange(5, 5),
        zoneEloignement: createRange(4, 4),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(13, 14),
        zonePeripherique: createRange(13, 14),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(13, 14),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 1),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 1),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 1),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 1),
      },
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 2),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(750, 863),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(625, 719),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(500, 575),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(625, 719),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(500, 575),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(250, 288),
      },
    ],
  },
  {
    commune: "ROGASSA",
    individuels: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(6, 7),
        zonePeripherique: createRange(5, 6),
        zoneEloignement: createRange(4, 4),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(4, 5),
        zonePeripherique: createRange(4, 4),
        zoneEloignement: createRange(2, 3),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(5, 6),
        zonePeripherique: createRange(4, 5),
        zoneEloignement: createRange(4, 4),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(4, 5),
        zonePeripherique: createRange(4, 4),
        zoneEloignement: createRange(3, 3),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(10, 11),
        zonePeripherique: createRange(7, 8),
        zoneEloignement: createRange(5, 6),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(8, 9),
        zonePeripherique: createRange(5, 6),
        zoneEloignement: createRange(4, 4),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(13, 15),
        zonePeripherique: createRange(13, 15),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(13, 15),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 1),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 1),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 1),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 1),
      },
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 2),
        zonePeripherique: createRange(1, 2),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(788, 906),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(656, 755),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(525, 604),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(656, 755),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(525, 604),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(263, 302),
      },
    ],
  },
  {
    commune: "CHEGUIG",
    individuels: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(6, 7),
        zonePeripherique: createRange(5, 6),
        zoneEloignement: createRange(4, 4),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(4, 4),
        zonePeripherique: createRange(4, 4),
        zoneEloignement: createRange(2, 3),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(5, 5),
        zonePeripherique: createRange(4, 4),
        zoneEloignement: createRange(3, 4),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(4, 4),
        zonePeripherique: createRange(3, 4),
        zoneEloignement: createRange(3, 3),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(9, 11),
        zonePeripherique: createRange(7, 8),
        zoneEloignement: createRange(5, 5),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(7, 8),
        zonePeripherique: createRange(5, 5),
        zoneEloignement: createRange(4, 4),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(13, 14),
        zonePeripherique: createRange(13, 14),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(13, 14),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 1),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 1),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 1),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 1),
      },
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 2),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(750, 863),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(625, 719),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(500, 575),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(625, 719),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(500, 575),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(250, 288),
      },
    ],
  },
  {
    commune: "KRAKDA",
    individuels: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(6, 7),
        zonePeripherique: createRange(5, 6),
        zoneEloignement: createRange(4, 4),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(4, 4),
        zonePeripherique: createRange(4, 4),
        zoneEloignement: createRange(2, 3),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(5, 5),
        zonePeripherique: createRange(4, 4),
        zoneEloignement: createRange(3, 4),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(4, 4),
        zonePeripherique: createRange(3, 4),
        zoneEloignement: createRange(3, 3),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(9, 11),
        zoneEloignement: createRange(5, 5),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(7, 8),
        zoneEloignement: createRange(4, 4),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(13, 14),
        zonePeripherique: createRange(13, 14),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(13, 14),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 1),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 1),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 1),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 1),
      },
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 2),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(750, 863),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(625, 719),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(500, 575),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(625, 719),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(500, 575),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(250, 288),
      },
    ],
  },
  {
    commune: "SIDI AMEUR",
    individuels: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(6, 7),
        zonePeripherique: createRange(5, 6),
        zoneEloignement: createRange(4, 4),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(4, 4),
        zonePeripherique: createRange(4, 4),
        zoneEloignement: createRange(2, 3),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(5, 5),
        zonePeripherique: createRange(4, 4),
        zoneEloignement: createRange(3, 4),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(4, 4),
        zonePeripherique: createRange(4, 4),
        zoneEloignement: createRange(3, 3),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(9, 11),
        zonePeripherique: createRange(7, 8),
        zoneEloignement: createRange(5, 5),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(7, 8),
        zonePeripherique: createRange(5, 5),
        zoneEloignement: createRange(4, 4),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(13, 14),
        zonePeripherique: createRange(13, 14),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(13, 14),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 1),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 1),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 1),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 1),
      },
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 2),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(750, 863),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(625, 719),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(500, 575),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(625, 719),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(500, 575),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(250, 288),
      },
    ],
  },
  {
    commune: "EL BNOUD",
    individuels: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(6, 7),
        zonePeripherique: createRange(5, 6),
        zoneEloignement: createRange(4, 4),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(4, 4),
        zonePeripherique: createRange(4, 4),
        zoneEloignement: createRange(2, 3),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(4, 5),
        zonePeripherique: createRange(4, 4),
        zoneEloignement: createRange(3, 3),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(4, 4),
        zonePeripherique: createRange(3, 4),
        zoneEloignement: createRange(2, 3),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(9, 11),
        zonePeripherique: createRange(7, 8),
        zoneEloignement: createRange(5, 5),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(7, 8),
        zonePeripherique: createRange(5, 5),
        zoneEloignement: createRange(4, 4),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(10, 12),
        zonePeripherique: createRange(10, 12),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(11, 13),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 1),
        zonePeripherique: createRange(1, 1),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 1),
        zonePeripherique: createRange(1, 1),
      },
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 1),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(750, 863),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(625, 719),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(500, 575),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(625, 719),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(500, 575),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(250, 288),
      },
    ],
  },
  {
    commune: "EL MEHARA",
    individuels: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(6, 7),
        zonePeripherique: createRange(5, 6),
        zoneEloignement: createRange(4, 4),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(4, 4),
        zonePeripherique: createRange(4, 4),
        zoneEloignement: createRange(2, 3),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(4, 5),
        zonePeripherique: createRange(4, 4),
        zoneEloignement: createRange(3, 3),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(4, 4),
        zonePeripherique: createRange(3, 4),
        zoneEloignement: createRange(2, 3),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(9, 11),
        zonePeripherique: createRange(7, 8),
        zoneEloignement: createRange(5, 5),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(7, 8),
        zonePeripherique: createRange(5, 5),
        zoneEloignement: createRange(4, 4),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(10, 12),
        zonePeripherique: createRange(10, 12),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(11, 13),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 1),
        zonePeripherique: createRange(1, 1),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 1),
        zonePeripherique: createRange(1, 1),
      },
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 1),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(750, 863),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(625, 719),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(500, 575),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(625, 719),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(500, 575),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(250, 288),
      },
    ],
  },
  {
    commune: "AIN EL ORAK",
    individuels: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(6, 7),
        zonePeripherique: createRange(5, 6),
        zoneEloignement: createRange(4, 4),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(4, 4),
        zonePeripherique: createRange(4, 4),
        zoneEloignement: createRange(2, 3),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(4, 5),
        zonePeripherique: createRange(4, 4),
        zoneEloignement: createRange(3, 3),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(4, 4),
        zonePeripherique: createRange(3, 4),
        zoneEloignement: createRange(2, 3),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(9, 11),
        zonePeripherique: createRange(7, 8),
        zoneEloignement: createRange(5, 5),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(7, 8),
        zonePeripherique: createRange(5, 5),
        zoneEloignement: createRange(4, 4),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(10, 12),
        zonePeripherique: createRange(10, 12),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(11, 13),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 1),
        zonePeripherique: createRange(1, 1),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 1),
        zonePeripherique: createRange(1, 1),
      },
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 1),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(750, 863),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(625, 719),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(500, 575),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(625, 719),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(500, 575),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(250, 288),
      },
    ],
  },
  {
    commune: "BOUSSEMGHOUN",
    individuels: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(10, 11),
        zonePeripherique: createRange(6, 7),
        zoneEloignement: createRange(4, 4),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(6, 7),
        zonePeripherique: createRange(4, 4),
        zoneEloignement: createRange(3, 3),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(5, 6),
        zonePeripherique: createRange(5, 6),
        zoneEloignement: createRange(3, 4),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(4, 5),
        zonePeripherique: createRange(3, 4),
        zoneEloignement: createRange(3, 3),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(14, 16),
        zonePeripherique: createRange(8, 9),
        zoneEloignement: createRange(7, 8),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(8, 9),
        zonePeripherique: createRange(6, 7),
        zoneEloignement: createRange(5, 5),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(10, 12),
        zonePeripherique: createRange(10, 12),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(11, 13),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 1),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 1),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 1),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(2, 2),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(750, 863),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(625, 719),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(500, 575),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(625, 719),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(500, 575),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(250, 288),
      },
    ],
  },
  {
    commune: "CHELLALA",
    individuels: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(10, 11),
        zonePeripherique: createRange(6, 7),
        zoneEloignement: createRange(4, 4),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(6, 7),
        zonePeripherique: createRange(4, 4),
        zoneEloignement: createRange(3, 3),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(5, 6),
        zonePeripherique: createRange(5, 6),
        zoneEloignement: createRange(3, 4),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(4, 5),
        zonePeripherique: createRange(3, 4),
        zoneEloignement: createRange(3, 3),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(14, 16),
        zonePeripherique: createRange(8, 9),
        zoneEloignement: createRange(7, 8),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(8, 9),
        zonePeripherique: createRange(6, 7),
        zoneEloignement: createRange(5, 5),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(10, 12),
        zonePeripherique: createRange(10, 12),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(11, 13),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 1),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 1),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(1, 1),
        zonePeripherique: createRange(1, 1),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(2, 2),
        zonePeripherique: createRange(2, 2),
        zoneEloignement: createRange(1, 1),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(750, 863),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(625, 719),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(500, 575),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(625, 719),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(500, 575),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(250, 288),
      },
    ],
  },
];
