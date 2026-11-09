import { PriceRefCommune } from '../types';

// SIDI BEL ABBES - Locations (Auto-generated from FTR PDF data)
const createRange = (min: number, max: number) => ({ min, max });

export const sidiBelAbbesPriceReferenceLocations: PriceRefCommune[] = [
  {
    commune: "SIDI BEL ABBES",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(595, 700),
        centreVille: createRange(510, 600),
        zonePeripherique: createRange(382, 450),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(467, 550),
        centreVille: createRange(340, 400),
        zonePeripherique: createRange(357, 420),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(340, 400),
        centreVille: createRange(297, 350),
        zonePeripherique: createRange(255, 300),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(255, 300),
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(510, 600),
        centreVille: createRange(467, 550),
        zonePeripherique: createRange(382, 450),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(340, 400),
        centreVille: createRange(297, 350),
        zonePeripherique: createRange(255, 300),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(255, 300),
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(221, 260),
        centreVille: createRange(204, 240),
        zonePeripherique: createRange(170, 200),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(2125, 2500),
        centreVille: createRange(1275, 1500),
        zonePeripherique: createRange(850, 1000),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(1275, 1500),
        centreVille: createRange(850, 1000),
        zonePeripherique: createRange(595, 700),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(850, 1000),
        centreVille: createRange(680, 800),
        zonePeripherique: createRange(425, 500),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(1020, 1200),
        centreVille: createRange(935, 1100),
        zonePeripherique: createRange(765, 900),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(850, 1000),
        centreVille: createRange(680, 800),
        zonePeripherique: createRange(400, 600),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(595, 700),
        centreVille: createRange(425, 500),
        zonePeripherique: createRange(340, 400),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(467, 550),
        centreVille: createRange(357, 420),
        zonePeripherique: createRange(289, 340),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(340, 400),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(425, 500),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(425, 500),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(51000, 60000),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(42500, 50000),
      },
    ],
  },
  {
    commune: "AIN EL BERD",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(221, 260),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(127, 150),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
        zonePeripherique: createRange(85, 100),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(119, 140),
        zonePeripherique: createRange(102, 120),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(51, 60),
        zonePeripherique: createRange(42, 50),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(850, 1000),
        zonePeripherique: createRange(680, 800),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(765, 900),
        zonePeripherique: createRange(595, 700),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(595, 700),
        zonePeripherique: createRange(425, 500),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(425, 500),
        zonePeripherique: createRange(382, 450),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(382, 450),
        zonePeripherique: createRange(297, 350),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(467, 550),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(272, 320),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        centreVille: createRange(25500, 30000),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        centreVille: createRange(25500, 30000),
        zonePeripherique: createRange(21250, 25000),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        centreVille: createRange(21250, 25000),
        zonePeripherique: createRange(17000, 20000),
      },
    ],
  },
  {
    commune: "SIDI BRAHIM",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(255, 300),
        zonePeripherique: createRange(212, 250),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(221, 260),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(127, 150),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(850, 1000),
        zonePeripherique: createRange(680, 800),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(765, 900),
        zonePeripherique: createRange(595, 700),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(595, 700),
        zonePeripherique: createRange(425, 500),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(425, 500),
        zonePeripherique: createRange(382, 450),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(382, 450),
        zonePeripherique: createRange(297, 350),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(400, 550),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(272, 320),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        centreVille: createRange(25500, 30000),
        zonePeripherique: createRange(21250, 25000),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        centreVille: createRange(21250, 25000),
        zonePeripherique: createRange(17000, 20000),
      },
    ],
  },
  {
    commune: "SIDI HAMADOUCHE",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(221, 260),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(127, 150),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
        zonePeripherique: createRange(85, 100),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(119, 140),
        zonePeripherique: createRange(102, 120),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(51, 60),
        zonePeripherique: createRange(42, 50),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(850, 1000),
        zonePeripherique: createRange(680, 800),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(765, 900),
        zonePeripherique: createRange(595, 700),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(595, 700),
        zonePeripherique: createRange(425, 500),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(425, 500),
        zonePeripherique: createRange(382, 450),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(382, 450),
        zonePeripherique: createRange(297, 350),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(467, 550),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(272, 320),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        centreVille: createRange(25500, 30000),
        zonePeripherique: createRange(21250, 25000),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        centreVille: createRange(21250, 25000),
        zonePeripherique: createRange(17000, 20000),
      },
    ],
  },
  {
    commune: "MAKKEDRA",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(221, 260),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(127, 150),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
        zonePeripherique: createRange(85, 100),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(119, 140),
        zonePeripherique: createRange(102, 120),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(51, 60),
        zonePeripherique: createRange(42, 50),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(850, 1000),
        zonePeripherique: createRange(680, 800),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(765, 900),
        zonePeripherique: createRange(595, 700),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(595, 700),
        zonePeripherique: createRange(425, 500),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(425, 500),
        zonePeripherique: createRange(382, 450),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(382, 450),
        zonePeripherique: createRange(297, 350),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(467, 550),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(272, 320),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        centreVille: createRange(25500, 30000),
        zonePeripherique: createRange(21250, 25000),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        centreVille: createRange(21250, 25000),
        zonePeripherique: createRange(17000, 20000),
      },
    ],
  },
  {
    commune: "SIDI LAHCEN",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(255, 300),
        zonePeripherique: createRange(212, 250),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(221, 260),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(127, 150),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(850, 1000),
        zonePeripherique: createRange(680, 800),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(765, 900),
        zonePeripherique: createRange(595, 700),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(595, 700),
        zonePeripherique: createRange(425, 500),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(425, 500),
        zonePeripherique: createRange(382, 450),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(382, 450),
        zonePeripherique: createRange(297, 350),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(400, 550),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(272, 320),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        centreVille: createRange(25500, 30000),
        zonePeripherique: createRange(21250, 25000),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        centreVille: createRange(21250, 25000),
        zonePeripherique: createRange(17000, 20000),
      },
    ],
  },
  {
    commune: "SIDI KHALED",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
        zonePeripherique: createRange(85, 100),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(850, 1000),
        zonePeripherique: createRange(680, 800),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(765, 900),
        zonePeripherique: createRange(595, 700),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(595, 700),
        zonePeripherique: createRange(425, 500),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(425, 500),
        zonePeripherique: createRange(382, 450),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(382, 450),
        zonePeripherique: createRange(297, 350),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(350, 400),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(297, 350),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(272, 320),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        centreVille: createRange(25500, 30000),
        zonePeripherique: createRange(21250, 25000),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        centreVille: createRange(21250, 25000),
        zonePeripherique: createRange(17000, 20000),
      },
    ],
  },
  {
    commune: "SIDI YAGOUB",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
        zonePeripherique: createRange(85, 100),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(850, 1000),
        zonePeripherique: createRange(680, 800),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(765, 900),
        zonePeripherique: createRange(595, 700),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(595, 700),
        zonePeripherique: createRange(425, 500),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(425, 500),
        zonePeripherique: createRange(382, 450),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(382, 450),
        zonePeripherique: createRange(297, 350),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(350, 400),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(297, 350),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(272, 320),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        centreVille: createRange(25500, 30000),
        zonePeripherique: createRange(21250, 25000),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        centreVille: createRange(21250, 25000),
        zonePeripherique: createRange(17000, 20000),
      },
    ],
  },
  {
    commune: "AMARNAS",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(255, 300),
        zonePeripherique: createRange(212, 250),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(221, 260),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(127, 150),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(850, 1000),
        zonePeripherique: createRange(680, 800),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(765, 900),
        zonePeripherique: createRange(595, 700),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(595, 700),
        zonePeripherique: createRange(425, 500),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(425, 500),
        zonePeripherique: createRange(382, 450),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(382, 450),
        zonePeripherique: createRange(297, 350),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(400, 550),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(272, 320),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        centreVille: createRange(25500, 30000),
        zonePeripherique: createRange(21250, 25000),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        centreVille: createRange(21250, 25000),
        zonePeripherique: createRange(17000, 20000),
      },
    ],
  },
  {
    commune: "TESSALA",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(221, 260),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(127, 150),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
        zonePeripherique: createRange(85, 100),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(119, 140),
        zonePeripherique: createRange(102, 120),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(51, 60),
        zonePeripherique: createRange(42, 50),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(850, 1000),
        zonePeripherique: createRange(680, 800),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(765, 900),
        zonePeripherique: createRange(595, 700),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(595, 700),
        zonePeripherique: createRange(425, 500),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(425, 500),
        zonePeripherique: createRange(382, 450),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(382, 450),
        zonePeripherique: createRange(297, 350),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(467, 550),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(272, 320),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        centreVille: createRange(25500, 30000),
        zonePeripherique: createRange(21250, 25000),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        centreVille: createRange(21250, 25000),
        zonePeripherique: createRange(17000, 20000),
      },
    ],
  },
  {
    commune: "AIN TRID",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
        zonePeripherique: createRange(85, 100),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(850, 1000),
        zonePeripherique: createRange(680, 800),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(765, 900),
        zonePeripherique: createRange(595, 700),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(595, 700),
        zonePeripherique: createRange(425, 500),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(425, 500),
        zonePeripherique: createRange(382, 450),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(382, 450),
        zonePeripherique: createRange(297, 350),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(350, 400),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(297, 350),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(272, 320),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        centreVille: createRange(25500, 30000),
        zonePeripherique: createRange(21250, 25000),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        centreVille: createRange(21250, 25000),
        zonePeripherique: createRange(17000, 20000),
      },
    ],
  },
  {
    commune: "SEHALA",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
        zonePeripherique: createRange(85, 100),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(850, 1000),
        zonePeripherique: createRange(680, 800),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(765, 900),
        zonePeripherique: createRange(595, 700),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(595, 700),
        zonePeripherique: createRange(425, 500),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(425, 500),
        zonePeripherique: createRange(382, 450),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(382, 450),
        zonePeripherique: createRange(297, 350),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(350, 400),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(297, 350),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(272, 320),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        centreVille: createRange(25500, 30000),
        zonePeripherique: createRange(21250, 25000),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        centreVille: createRange(21250, 25000),
        zonePeripherique: createRange(17000, 20000),
      },
    ],
  },
  {
    commune: "SFISEF",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(255, 300),
        zonePeripherique: createRange(212, 250),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(221, 260),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(127, 150),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(850, 1000),
        zonePeripherique: createRange(680, 800),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(765, 900),
        zonePeripherique: createRange(595, 700),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(595, 700),
        zonePeripherique: createRange(425, 500),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(425, 500),
        zonePeripherique: createRange(382, 450),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(382, 450),
        zonePeripherique: createRange(297, 350),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(400, 550),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(272, 320),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        centreVille: createRange(255, 300),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        centreVille: createRange(25500, 30000),
        zonePeripherique: createRange(21250, 25000),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        centreVille: createRange(21250, 25000),
        zonePeripherique: createRange(17000, 20000),
      },
    ],
  },
  {
    commune: "AIN ADEN",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
        zonePeripherique: createRange(85, 100),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(850, 1000),
        zonePeripherique: createRange(680, 800),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(765, 900),
        zonePeripherique: createRange(595, 700),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(595, 700),
        zonePeripherique: createRange(425, 500),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(425, 500),
        zonePeripherique: createRange(382, 450),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(382, 450),
        zonePeripherique: createRange(297, 350),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(350, 400),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(297, 350),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(272, 320),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        centreVille: createRange(25500, 30000),
        zonePeripherique: createRange(21250, 25000),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        centreVille: createRange(21250, 25000),
        zonePeripherique: createRange(17000, 20000),
      },
    ],
  },
  {
    commune: "BENACHIBA CHELIA",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
        zonePeripherique: createRange(85, 100),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(850, 1000),
        zonePeripherique: createRange(680, 800),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(765, 900),
        zonePeripherique: createRange(595, 700),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(595, 700),
        zonePeripherique: createRange(425, 500),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(425, 500),
        zonePeripherique: createRange(382, 450),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(382, 450),
        zonePeripherique: createRange(297, 350),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(350, 400),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(297, 350),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(272, 320),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        centreVille: createRange(25500, 30000),
        zonePeripherique: createRange(21250, 25000),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        centreVille: createRange(21250, 25000),
        zonePeripherique: createRange(17000, 20000),
      },
    ],
  },
  {
    commune: "M'CID",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
        zonePeripherique: createRange(85, 100),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(850, 1000),
        zonePeripherique: createRange(680, 800),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(765, 900),
        zonePeripherique: createRange(595, 700),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(595, 700),
        zonePeripherique: createRange(425, 500),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(425, 500),
        zonePeripherique: createRange(382, 450),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(382, 450),
        zonePeripherique: createRange(297, 350),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(350, 400),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(297, 350),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(272, 320),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        centreVille: createRange(25500, 30000),
        zonePeripherique: createRange(21250, 25000),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        centreVille: createRange(21250, 25000),
        zonePeripherique: createRange(17000, 20000),
      },
    ],
  },
  {
    commune: "TENIRA",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
        zonePeripherique: createRange(85, 100),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(850, 1000),
        zonePeripherique: createRange(680, 800),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(765, 900),
        zonePeripherique: createRange(595, 700),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(595, 700),
        zonePeripherique: createRange(425, 500),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(425, 500),
        zonePeripherique: createRange(382, 450),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(382, 450),
        zonePeripherique: createRange(297, 350),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(350, 400),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(297, 350),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(272, 320),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        centreVille: createRange(25500, 30000),
        zonePeripherique: createRange(21250, 25000),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        centreVille: createRange(21250, 25000),
        zonePeripherique: createRange(17000, 20000),
      },
    ],
  },
  {
    commune: "BOUDJEBHA EL BORDJ",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
        zonePeripherique: createRange(85, 100),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(850, 1000),
        zonePeripherique: createRange(680, 800),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(765, 900),
        zonePeripherique: createRange(595, 700),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(595, 700),
        zonePeripherique: createRange(425, 500),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(425, 500),
        zonePeripherique: createRange(382, 450),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(382, 450),
        zonePeripherique: createRange(297, 350),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(350, 400),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(297, 350),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(272, 320),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        centreVille: createRange(25500, 30000),
        zonePeripherique: createRange(21250, 25000),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        centreVille: createRange(21250, 25000),
        zonePeripherique: createRange(17000, 20000),
      },
    ],
  },
  {
    commune: "HASSI DAHOU",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
        zonePeripherique: createRange(85, 100),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(850, 1000),
        zonePeripherique: createRange(680, 800),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(765, 900),
        zonePeripherique: createRange(595, 700),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(595, 700),
        zonePeripherique: createRange(425, 500),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(425, 500),
        zonePeripherique: createRange(382, 450),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(382, 450),
        zonePeripherique: createRange(297, 350),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(350, 400),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(297, 350),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(272, 320),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        centreVille: createRange(25500, 30000),
        zonePeripherique: createRange(21250, 25000),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        centreVille: createRange(21250, 25000),
        zonePeripherique: createRange(17000, 20000),
      },
    ],
  },
  {
    commune: "MOSTEFA BEN BRAHIM",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(221, 260),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(127, 150),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
        zonePeripherique: createRange(85, 100),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(119, 140),
        zonePeripherique: createRange(102, 120),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(51, 60),
        zonePeripherique: createRange(42, 50),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(850, 1000),
        zonePeripherique: createRange(680, 800),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(765, 900),
        zonePeripherique: createRange(595, 700),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(595, 700),
        zonePeripherique: createRange(425, 500),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(425, 500),
        zonePeripherique: createRange(382, 450),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(382, 450),
        zonePeripherique: createRange(297, 350),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(467, 550),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(272, 320),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        centreVille: createRange(255, 300),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        centreVille: createRange(25500, 30000),
        zonePeripherique: createRange(21250, 25000),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        centreVille: createRange(21250, 25000),
        zonePeripherique: createRange(17000, 20000),
      },
    ],
  },
  {
    commune: "OUED SEFIOUN",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
        zonePeripherique: createRange(85, 100),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(850, 1000),
        zonePeripherique: createRange(680, 800),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(765, 900),
        zonePeripherique: createRange(595, 700),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(595, 700),
        zonePeripherique: createRange(425, 500),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(425, 500),
        zonePeripherique: createRange(382, 450),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(382, 450),
        zonePeripherique: createRange(297, 350),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(350, 400),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(297, 350),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(272, 320),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        centreVille: createRange(25500, 30000),
        zonePeripherique: createRange(21250, 25000),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        centreVille: createRange(21250, 25000),
        zonePeripherique: createRange(17000, 20000),
      },
    ],
  },
  {
    commune: "ZEROUALA",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
        zonePeripherique: createRange(85, 100),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(850, 1000),
        zonePeripherique: createRange(680, 800),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(765, 900),
        zonePeripherique: createRange(595, 700),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(595, 700),
        zonePeripherique: createRange(425, 500),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(425, 500),
        zonePeripherique: createRange(382, 450),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(382, 450),
        zonePeripherique: createRange(297, 350),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(350, 400),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(297, 350),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(272, 320),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        centreVille: createRange(25500, 30000),
        zonePeripherique: createRange(21250, 25000),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        centreVille: createRange(21250, 25000),
        zonePeripherique: createRange(17000, 20000),
      },
    ],
  },
  {
    commune: "BELARBI",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
        zonePeripherique: createRange(85, 100),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(850, 1000),
        zonePeripherique: createRange(680, 800),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(765, 900),
        zonePeripherique: createRange(595, 700),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(595, 700),
        zonePeripherique: createRange(425, 500),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(425, 500),
        zonePeripherique: createRange(382, 450),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(382, 450),
        zonePeripherique: createRange(297, 350),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(350, 400),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(297, 350),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(272, 320),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        centreVille: createRange(25500, 30000),
        zonePeripherique: createRange(21250, 25000),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        centreVille: createRange(21250, 25000),
        zonePeripherique: createRange(17000, 20000),
      },
    ],
  },
  {
    commune: "TILMOUNI",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(221, 260),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(127, 150),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
        zonePeripherique: createRange(85, 100),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(119, 140),
        zonePeripherique: createRange(102, 120),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(51, 60),
        zonePeripherique: createRange(42, 50),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(850, 1000),
        zonePeripherique: createRange(680, 800),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(765, 900),
        zonePeripherique: createRange(595, 700),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(595, 700),
        zonePeripherique: createRange(425, 500),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(425, 500),
        zonePeripherique: createRange(382, 450),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(382, 450),
        zonePeripherique: createRange(297, 350),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(467, 550),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(272, 320),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        centreVille: createRange(25500, 30000),
        zonePeripherique: createRange(21250, 25000),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        centreVille: createRange(21250, 25000),
        zonePeripherique: createRange(17000, 20000),
      },
    ],
  },
  {
    commune: "TELAGH",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(255, 300),
        zonePeripherique: createRange(212, 250),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(221, 260),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(127, 150),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(850, 1000),
        zonePeripherique: createRange(680, 800),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(765, 900),
        zonePeripherique: createRange(595, 700),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(595, 700),
        zonePeripherique: createRange(425, 500),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(425, 500),
        zonePeripherique: createRange(382, 450),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(382, 450),
        zonePeripherique: createRange(297, 350),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(400, 550),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(272, 320),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        centreVille: createRange(255, 300),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        centreVille: createRange(25500, 30000),
        zonePeripherique: createRange(21250, 25000),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        centreVille: createRange(21250, 25000),
        zonePeripherique: createRange(17000, 20000),
      },
    ],
  },
  {
    commune: "MEZAOUROU",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(102, 120),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(76, 90),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(110, 130),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(85, 100),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(59, 70),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(110, 130),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(144, 170),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(59, 70),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(187, 220),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(153, 180),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(144, 170),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(178, 210),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        centreVille: createRange(5100, 6000),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zonePeripherique: createRange(5100, 6000),
      },
    ],
  },
  {
    commune: "DHAYA",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(102, 120),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(76, 90),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(110, 130),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(85, 100),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(59, 70),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(110, 130),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(144, 170),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(59, 70),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(187, 220),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(153, 180),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(144, 170),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(178, 210),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        centreVille: createRange(5100, 6000),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zonePeripherique: createRange(5100, 6000),
      },
    ],
  },
  {
    commune: "MERINE",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
        zonePeripherique: createRange(85, 100),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(850, 1000),
        zonePeripherique: createRange(680, 800),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(765, 900),
        zonePeripherique: createRange(595, 700),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(595, 700),
        zonePeripherique: createRange(425, 500),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(425, 500),
        zonePeripherique: createRange(382, 450),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(382, 450),
        zonePeripherique: createRange(297, 350),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(350, 400),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(297, 350),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(272, 320),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        centreVille: createRange(25500, 30000),
        zonePeripherique: createRange(21250, 25000),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        centreVille: createRange(21250, 25000),
        zonePeripherique: createRange(17000, 20000),
      },
    ],
  },
  {
    commune: "TEFESSOUR",
    individuels: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(110, 130),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(85, 100),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(76, 90),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(59, 70),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(136, 160),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(110, 130),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(68, 80),
      },
    ],
    hangars: [
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(144, 170),
      },
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        centreVille: createRange(144, 170),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zonePeripherique: createRange(8500, 10000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zonePeripherique: createRange(5950, 7000),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zonePeripherique: createRange(4250, 5000),
      },
    ],
  },
  {
    commune: "TAOUDMOUNT",
    individuels: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(110, 130),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(85, 100),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(76, 90),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(59, 70),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(136, 160),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(110, 130),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(68, 80),
      },
    ],
    hangars: [
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(144, 170),
      },
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        centreVille: createRange(144, 170),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zonePeripherique: createRange(8500, 10000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zonePeripherique: createRange(5950, 7000),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zonePeripherique: createRange(4250, 5000),
      },
    ],
  },
  {
    commune: "TAOURIRA",
    individuels: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(110, 130),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(85, 100),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(76, 90),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(59, 70),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(136, 160),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(110, 130),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(68, 80),
      },
    ],
    hangars: [
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(144, 170),
      },
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        centreVille: createRange(144, 170),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zonePeripherique: createRange(8500, 10000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zonePeripherique: createRange(5950, 7000),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zonePeripherique: createRange(4250, 5000),
      },
    ],
  },
  {
    commune: "TEGHALIMET",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
        zonePeripherique: createRange(85, 100),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(850, 1000),
        zonePeripherique: createRange(680, 800),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(765, 900),
        zonePeripherique: createRange(595, 700),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(595, 700),
        zonePeripherique: createRange(425, 500),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(425, 500),
        zonePeripherique: createRange(382, 450),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(382, 450),
        zonePeripherique: createRange(297, 350),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(350, 400),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(297, 350),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(272, 320),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        centreVille: createRange(25500, 30000),
        zonePeripherique: createRange(21250, 25000),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        centreVille: createRange(21250, 25000),
        zonePeripherique: createRange(17000, 20000),
      },
    ],
  },
  {
    commune: "BEN BADIS",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(255, 300),
        zonePeripherique: createRange(212, 250),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(221, 260),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(127, 150),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(850, 1000),
        zonePeripherique: createRange(680, 800),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(765, 900),
        zonePeripherique: createRange(595, 700),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(595, 700),
        zonePeripherique: createRange(425, 500),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(425, 500),
        zonePeripherique: createRange(382, 450),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(382, 450),
        zonePeripherique: createRange(297, 350),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(400, 550),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(272, 320),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        centreVille: createRange(25500, 30000),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        centreVille: createRange(25500, 30000),
        zonePeripherique: createRange(21250, 25000),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        centreVille: createRange(21250, 25000),
        zonePeripherique: createRange(17000, 20000),
      },
    ],
  },
  {
    commune: "AIN KADA",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
        zonePeripherique: createRange(85, 100),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(850, 1000),
        zonePeripherique: createRange(680, 800),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(765, 900),
        zonePeripherique: createRange(595, 700),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(595, 700),
        zonePeripherique: createRange(425, 500),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(425, 500),
        zonePeripherique: createRange(382, 450),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(382, 450),
        zonePeripherique: createRange(297, 350),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(350, 400),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(297, 350),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(272, 320),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        centreVille: createRange(25500, 30000),
        zonePeripherique: createRange(21250, 25000),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        centreVille: createRange(21250, 25000),
        zonePeripherique: createRange(17000, 20000),
      },
    ],
  },
  {
    commune: "BEDRABINE",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
        zonePeripherique: createRange(85, 100),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(850, 1000),
        zonePeripherique: createRange(680, 800),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(765, 900),
        zonePeripherique: createRange(595, 700),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(595, 700),
        zonePeripherique: createRange(425, 500),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(425, 500),
        zonePeripherique: createRange(382, 450),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(382, 450),
        zonePeripherique: createRange(297, 350),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(350, 400),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(297, 350),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(272, 320),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        centreVille: createRange(25500, 30000),
        zonePeripherique: createRange(21250, 25000),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        centreVille: createRange(21250, 25000),
        zonePeripherique: createRange(17000, 20000),
      },
    ],
  },
  {
    commune: "LAMTAR",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
        zonePeripherique: createRange(85, 100),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(850, 1000),
        zonePeripherique: createRange(680, 800),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(765, 900),
        zonePeripherique: createRange(595, 700),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(595, 700),
        zonePeripherique: createRange(425, 500),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(425, 500),
        zonePeripherique: createRange(382, 450),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(382, 450),
        zonePeripherique: createRange(297, 350),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(350, 400),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(297, 350),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(272, 320),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        centreVille: createRange(25500, 30000),
        zonePeripherique: createRange(21250, 25000),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        centreVille: createRange(21250, 25000),
        zonePeripherique: createRange(17000, 20000),
      },
    ],
  },
  {
    commune: "SIDI DAHO",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
        zonePeripherique: createRange(85, 100),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(850, 1000),
        zonePeripherique: createRange(680, 800),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(765, 900),
        zonePeripherique: createRange(595, 700),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(595, 700),
        zonePeripherique: createRange(425, 500),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(425, 500),
        zonePeripherique: createRange(382, 450),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(382, 450),
        zonePeripherique: createRange(297, 350),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(350, 400),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(297, 350),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(272, 320),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        centreVille: createRange(25500, 30000),
        zonePeripherique: createRange(21250, 25000),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        centreVille: createRange(21250, 25000),
        zonePeripherique: createRange(17000, 20000),
      },
    ],
  },
  {
    commune: "TABIA",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
        zonePeripherique: createRange(85, 100),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(850, 1000),
        zonePeripherique: createRange(680, 800),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(765, 900),
        zonePeripherique: createRange(595, 700),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(595, 700),
        zonePeripherique: createRange(425, 500),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(425, 500),
        zonePeripherique: createRange(382, 450),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(382, 450),
        zonePeripherique: createRange(297, 350),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(350, 400),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(297, 350),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(272, 320),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        centreVille: createRange(25500, 30000),
        zonePeripherique: createRange(21250, 25000),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        centreVille: createRange(21250, 25000),
        zonePeripherique: createRange(17000, 20000),
      },
    ],
  },
  {
    commune: "BOUKHANIFIS",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
        zonePeripherique: createRange(85, 100),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(850, 1000),
        zonePeripherique: createRange(680, 800),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(765, 900),
        zonePeripherique: createRange(595, 700),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(595, 700),
        zonePeripherique: createRange(425, 500),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(425, 500),
        zonePeripherique: createRange(382, 450),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(382, 450),
        zonePeripherique: createRange(297, 350),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(350, 400),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(297, 350),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(272, 320),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        centreVille: createRange(25500, 30000),
        zonePeripherique: createRange(21250, 25000),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        centreVille: createRange(21250, 25000),
        zonePeripherique: createRange(17000, 20000),
      },
    ],
  },
  {
    commune: "HASSI ZAHANA",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
        zonePeripherique: createRange(85, 100),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(850, 1000),
        zonePeripherique: createRange(680, 800),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(765, 900),
        zonePeripherique: createRange(595, 700),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(595, 700),
        zonePeripherique: createRange(425, 500),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(425, 500),
        zonePeripherique: createRange(382, 450),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(382, 450),
        zonePeripherique: createRange(297, 350),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(350, 400),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(297, 350),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(272, 320),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        centreVille: createRange(25500, 30000),
        zonePeripherique: createRange(21250, 25000),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        centreVille: createRange(21250, 25000),
        zonePeripherique: createRange(17000, 20000),
      },
    ],
  },
  {
    commune: "SIDI ALI BOUSSIDI",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
        zonePeripherique: createRange(85, 100),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(850, 1000),
        zonePeripherique: createRange(680, 800),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(765, 900),
        zonePeripherique: createRange(595, 700),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(595, 700),
        zonePeripherique: createRange(425, 500),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(425, 500),
        zonePeripherique: createRange(382, 450),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(382, 450),
        zonePeripherique: createRange(297, 350),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(350, 400),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(297, 350),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(272, 320),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        centreVille: createRange(25500, 30000),
        zonePeripherique: createRange(21250, 25000),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        centreVille: createRange(21250, 25000),
        zonePeripherique: createRange(17000, 20000),
      },
    ],
  },
  {
    commune: "CHETOUANE",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
        zonePeripherique: createRange(85, 100),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(850, 1000),
        zonePeripherique: createRange(680, 800),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(765, 900),
        zonePeripherique: createRange(595, 700),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(595, 700),
        zonePeripherique: createRange(425, 500),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(425, 500),
        zonePeripherique: createRange(382, 450),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(382, 450),
        zonePeripherique: createRange(297, 350),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(350, 400),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(297, 350),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(272, 320),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        centreVille: createRange(25500, 30000),
        zonePeripherique: createRange(21250, 25000),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        centreVille: createRange(21250, 25000),
        zonePeripherique: createRange(17000, 20000),
      },
    ],
  },
  {
    commune: "SIDI ALI BENYOUB",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(212, 250),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(127, 150),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
        zonePeripherique: createRange(85, 100),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(850, 1000),
        zonePeripherique: createRange(680, 800),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(765, 900),
        zonePeripherique: createRange(595, 700),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(595, 700),
        zonePeripherique: createRange(425, 500),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(425, 500),
        zonePeripherique: createRange(382, 450),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(382, 450),
        zonePeripherique: createRange(297, 350),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(340, 400),
        zonePeripherique: createRange(170, 200),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
        zonePeripherique: createRange(85, 100),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(350, 400),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(297, 350),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(272, 320),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        centreVille: createRange(25500, 30000),
        zonePeripherique: createRange(21250, 25000),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        centreVille: createRange(21250, 25000),
        zonePeripherique: createRange(17000, 20000),
      },
    ],
  },
  {
    commune: "RAS EL MA",
    individuels: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(102, 120),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(76, 90),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(110, 130),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(85, 100),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(59, 70),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(110, 130),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(144, 170),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(59, 70),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        centreVille: createRange(187, 220),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(153, 180),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(144, 170),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        centreVille: createRange(178, 210),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        centreVille: createRange(255, 300),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zonePeripherique: createRange(5100, 6000),
      },
    ],
  },
  {
    commune: "MOULAY SLISSEN",
    individuels: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(110, 130),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(85, 100),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(76, 90),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(59, 70),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(136, 160),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(110, 130),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(68, 80),
      },
    ],
    hangars: [
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(144, 170),
      },
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        centreVille: createRange(144, 170),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zonePeripherique: createRange(8500, 10000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zonePeripherique: createRange(5950, 7000),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zonePeripherique: createRange(4250, 5000),
      },
    ],
  },
  {
    commune: "AIN TINDAMIN",
    individuels: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(110, 130),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(85, 100),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(76, 90),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(59, 70),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(136, 160),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(110, 130),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(68, 80),
      },
    ],
    hangars: [
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(144, 170),
      },
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        centreVille: createRange(144, 170),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zonePeripherique: createRange(8500, 10000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zonePeripherique: createRange(5950, 7000),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zonePeripherique: createRange(4250, 5000),
      },
    ],
  },
  {
    commune: "EL HECAIBA",
    individuels: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(110, 130),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(85, 100),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(76, 90),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(59, 70),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(136, 160),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(110, 130),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(68, 80),
      },
    ],
    hangars: [
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(144, 170),
      },
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        centreVille: createRange(144, 170),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zonePeripherique: createRange(8500, 10000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zonePeripherique: createRange(5950, 7000),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zonePeripherique: createRange(4250, 5000),
      },
    ],
  },
  {
    commune: "OUED SEBAA",
    individuels: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(110, 130),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(85, 100),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(76, 90),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(59, 70),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(136, 160),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(110, 130),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(68, 80),
      },
    ],
    hangars: [
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(144, 170),
      },
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        centreVille: createRange(144, 170),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zonePeripherique: createRange(8500, 10000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zonePeripherique: createRange(5950, 7000),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zonePeripherique: createRange(4250, 5000),
      },
    ],
  },
  {
    commune: "MARHOUM",
    individuels: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(110, 130),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(85, 100),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(76, 90),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(59, 70),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(136, 160),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(110, 130),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(68, 80),
      },
    ],
    hangars: [
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(144, 170),
      },
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        centreVille: createRange(144, 170),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zonePeripherique: createRange(8500, 10000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zonePeripherique: createRange(5950, 7000),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zonePeripherique: createRange(4250, 5000),
      },
    ],
  },
  {
    commune: "BIR HMAM",
    individuels: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(110, 130),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(85, 100),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(76, 90),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(59, 70),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(136, 160),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(110, 130),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(68, 80),
      },
    ],
    hangars: [
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(144, 170),
      },
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        centreVille: createRange(144, 170),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zonePeripherique: createRange(8500, 10000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zonePeripherique: createRange(5950, 7000),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zonePeripherique: createRange(4250, 5000),
      },
    ],
  },
  {
    commune: "REDJEM DEMOUCH",
    individuels: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(110, 130),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(85, 100),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(76, 90),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(59, 70),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(136, 160),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(110, 130),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(68, 80),
      },
    ],
    hangars: [
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(144, 170),
      },
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        centreVille: createRange(144, 170),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zonePeripherique: createRange(8500, 10000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zonePeripherique: createRange(5950, 7000),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zonePeripherique: createRange(4250, 5000),
      },
    ],
  },
  {
    commune: "SIDI CHAIB",
    individuels: [
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(110, 130),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(85, 100),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(76, 90),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(59, 70),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(136, 160),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(110, 130),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(68, 80),
      },
    ],
    hangars: [
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(127, 150),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(144, 170),
      },
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 200),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        centreVille: createRange(144, 170),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zonePeripherique: createRange(8500, 10000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zonePeripherique: createRange(5950, 7000),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zonePeripherique: createRange(4250, 5000),
      },
    ],
  },
];
