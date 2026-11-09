import { PriceRefCommune } from '../types';

// BATNA - Locations (Auto-generated from FTR PDF data)
const createRange = (min: number, max: number) => ({ min, max });

export const batnaPriceReferenceLocations: PriceRefCommune[] = [
  {
    commune: "BATNA",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(350, 403),
        centreVille: createRange(400, 460),
        zonePeripherique: createRange(300, 345),
        zoneEloignement: createRange(250, 288),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(300, 345),
        centreVille: createRange(360, 414),
        zonePeripherique: createRange(260, 299),
        zoneEloignement: createRange(200, 230),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(260, 299),
        centreVille: createRange(300, 345),
        zonePeripherique: createRange(230, 265),
        zoneEloignement: createRange(180, 207),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(160, 184),
        centreVille: createRange(230, 265),
        zonePeripherique: createRange(150, 173),
        zoneEloignement: createRange(100, 115),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(350, 403),
        centreVille: createRange(450, 518),
        zonePeripherique: createRange(280, 322),
        zoneEloignement: createRange(200, 230),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(290, 334),
        centreVille: createRange(330, 380),
        zonePeripherique: createRange(260, 299),
        zoneEloignement: createRange(180, 207),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(300, 345),
        zonePeripherique: createRange(220, 253),
        zoneEloignement: createRange(150, 173),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(230, 265),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(600, 690),
        centreVille: createRange(2000, 2300),
        zonePeripherique: createRange(480, 552),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(500, 575),
        centreVille: createRange(1600, 1840),
        zonePeripherique: createRange(350, 403),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(300, 345),
        centreVille: createRange(900, 1035),
        zonePeripherique: createRange(220, 253),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(480, 552),
        centreVille: createRange(700, 805),
        zonePeripherique: createRange(300, 345),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(300, 345),
        centreVille: createRange(600, 690),
        zonePeripherique: createRange(250, 288),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(70, 81),
        zoneEloignement: createRange(50, 58),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(40, 46),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(300, 345),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(250, 288),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(200, 230),
      },
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(100, 115),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(80, 92),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(80, 92),
        zoneEloignement: createRange(50, 58),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(29000, 33350),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(28000, 32200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(12000, 13800),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "BARIKA",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(350, 403),
        centreVille: createRange(400, 460),
        zonePeripherique: createRange(300, 345),
        zoneEloignement: createRange(250, 288),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(300, 345),
        centreVille: createRange(360, 414),
        zonePeripherique: createRange(260, 299),
        zoneEloignement: createRange(200, 230),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(260, 299),
        centreVille: createRange(300, 345),
        zonePeripherique: createRange(230, 265),
        zoneEloignement: createRange(180, 207),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(160, 184),
        centreVille: createRange(230, 265),
        zonePeripherique: createRange(150, 173),
        zoneEloignement: createRange(100, 115),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(350, 403),
        centreVille: createRange(450, 518),
        zonePeripherique: createRange(280, 322),
        zoneEloignement: createRange(200, 230),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(290, 334),
        centreVille: createRange(330, 380),
        zonePeripherique: createRange(260, 299),
        zoneEloignement: createRange(180, 207),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(300, 345),
        zonePeripherique: createRange(220, 253),
        zoneEloignement: createRange(150, 173),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(230, 265),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(600, 690),
        centreVille: createRange(2000, 2300),
        zonePeripherique: createRange(480, 552),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(500, 575),
        centreVille: createRange(1600, 1840),
        zonePeripherique: createRange(350, 403),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(300, 345),
        centreVille: createRange(900, 1035),
        zonePeripherique: createRange(220, 253),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(480, 552),
        centreVille: createRange(700, 805),
        zonePeripherique: createRange(300, 345),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(300, 345),
        centreVille: createRange(600, 690),
        zonePeripherique: createRange(250, 288),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(70, 81),
        zoneEloignement: createRange(50, 58),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(40, 46),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(300, 345),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(250, 288),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(200, 230),
      },
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(100, 115),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(80, 92),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(80, 92),
        zoneEloignement: createRange(50, 58),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(29000, 33350),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(28000, 32200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(12000, 13800),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "TAZOULT",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(300, 345),
        centreVille: createRange(350, 403),
        zonePeripherique: createRange(270, 311),
        zoneEloignement: createRange(180, 207),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(280, 322),
        centreVille: createRange(320, 368),
        zonePeripherique: createRange(250, 288),
        zoneEloignement: createRange(120, 138),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(270, 311),
        zonePeripherique: createRange(230, 265),
        zoneEloignement: createRange(100, 115),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(140, 161),
        centreVille: createRange(190, 219),
        zonePeripherique: createRange(140, 161),
        zoneEloignement: createRange(80, 92),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(260, 299),
        centreVille: createRange(300, 345),
        zonePeripherique: createRange(230, 265),
        zoneEloignement: createRange(160, 184),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(280, 322),
        zonePeripherique: createRange(200, 230),
        zoneEloignement: createRange(140, 161),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(140, 161),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(350, 403),
        centreVille: createRange(500, 575),
        zonePeripherique: createRange(300, 345),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(320, 368),
        centreVille: createRange(400, 460),
        zonePeripherique: createRange(230, 265),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(200, 230),
        centreVille: createRange(350, 403),
        zonePeripherique: createRange(200, 230),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(320, 368),
        centreVille: createRange(500, 575),
        zonePeripherique: createRange(300, 345),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(120, 138),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(50, 58),
        zoneEloignement: createRange(40, 46),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(30, 35),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(150, 173),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(100, 115),
      },
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(70, 81),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(70, 81),
        zoneEloignement: createRange(50, 58),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "AIN TOUTA",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(300, 345),
        centreVille: createRange(350, 403),
        zonePeripherique: createRange(270, 311),
        zoneEloignement: createRange(180, 207),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(280, 322),
        centreVille: createRange(320, 368),
        zonePeripherique: createRange(250, 288),
        zoneEloignement: createRange(120, 138),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(270, 311),
        zonePeripherique: createRange(230, 265),
        zoneEloignement: createRange(100, 115),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(140, 161),
        centreVille: createRange(190, 219),
        zonePeripherique: createRange(140, 161),
        zoneEloignement: createRange(80, 92),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(260, 299),
        centreVille: createRange(300, 345),
        zonePeripherique: createRange(230, 265),
        zoneEloignement: createRange(160, 184),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(280, 322),
        zonePeripherique: createRange(200, 230),
        zoneEloignement: createRange(140, 161),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(140, 161),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(350, 403),
        centreVille: createRange(500, 575),
        zonePeripherique: createRange(300, 345),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(320, 368),
        centreVille: createRange(400, 460),
        zonePeripherique: createRange(230, 265),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(600, 690),
        zonePeripherique: createRange(120, 138),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(320, 368),
        centreVille: createRange(500, 575),
        zonePeripherique: createRange(300, 345),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(120, 138),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(50, 58),
        zoneEloignement: createRange(40, 46),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(30, 35),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(200, 230),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(150, 173),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(100, 115),
      },
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(70, 81),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(70, 81),
        zoneEloignement: createRange(50, 58),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "MEROUANA",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(300, 345),
        centreVille: createRange(350, 403),
        zonePeripherique: createRange(270, 311),
        zoneEloignement: createRange(180, 207),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(280, 322),
        centreVille: createRange(320, 368),
        zonePeripherique: createRange(250, 288),
        zoneEloignement: createRange(120, 138),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(270, 311),
        zonePeripherique: createRange(230, 265),
        zoneEloignement: createRange(100, 115),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(140, 161),
        centreVille: createRange(190, 219),
        zonePeripherique: createRange(140, 161),
        zoneEloignement: createRange(80, 92),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(260, 299),
        centreVille: createRange(300, 345),
        zonePeripherique: createRange(230, 265),
        zoneEloignement: createRange(160, 184),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(280, 322),
        zonePeripherique: createRange(200, 230),
        zoneEloignement: createRange(140, 161),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(140, 161),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(350, 403),
        centreVille: createRange(500, 575),
        zonePeripherique: createRange(300, 345),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(320, 368),
        centreVille: createRange(400, 460),
        zonePeripherique: createRange(230, 265),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(600, 690),
        zonePeripherique: createRange(120, 138),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(320, 368),
        centreVille: createRange(500, 575),
        zonePeripherique: createRange(300, 345),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(120, 138),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(50, 58),
        zoneEloignement: createRange(40, 46),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(30, 35),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (2 façades) avec raccordements",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(200, 230),
      },
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(150, 173),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(100, 115),
      },
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(70, 81),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(70, 81),
        zoneEloignement: createRange(50, 58),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "EL MADHER",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(300, 345),
        centreVille: createRange(350, 403),
        zonePeripherique: createRange(270, 311),
        zoneEloignement: createRange(180, 207),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(280, 322),
        centreVille: createRange(320, 368),
        zonePeripherique: createRange(250, 288),
        zoneEloignement: createRange(120, 138),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(270, 311),
        zonePeripherique: createRange(230, 265),
        zoneEloignement: createRange(100, 115),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(140, 161),
        centreVille: createRange(190, 219),
        zonePeripherique: createRange(140, 161),
        zoneEloignement: createRange(80, 92),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(260, 299),
        centreVille: createRange(300, 345),
        zonePeripherique: createRange(230, 265),
        zoneEloignement: createRange(160, 184),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(280, 322),
        zonePeripherique: createRange(200, 230),
        zoneEloignement: createRange(140, 161),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(140, 161),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(350, 403),
        centreVille: createRange(500, 575),
        zonePeripherique: createRange(300, 345),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(320, 368),
        centreVille: createRange(400, 460),
        zonePeripherique: createRange(230, 265),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(200, 230),
        centreVille: createRange(350, 403),
        zonePeripherique: createRange(200, 230),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(320, 368),
        centreVille: createRange(500, 575),
        zonePeripherique: createRange(300, 345),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(120, 138),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(50, 58),
        zoneEloignement: createRange(40, 46),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(30, 35),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(150, 173),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(100, 115),
      },
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(70, 81),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(70, 81),
        zoneEloignement: createRange(50, 58),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "RAS EL AIOUN",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(300, 345),
        centreVille: createRange(350, 403),
        zonePeripherique: createRange(270, 311),
        zoneEloignement: createRange(180, 207),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(280, 322),
        centreVille: createRange(320, 368),
        zonePeripherique: createRange(250, 288),
        zoneEloignement: createRange(120, 138),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(270, 311),
        zonePeripherique: createRange(230, 265),
        zoneEloignement: createRange(100, 115),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(140, 161),
        centreVille: createRange(190, 219),
        zonePeripherique: createRange(140, 161),
        zoneEloignement: createRange(80, 92),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(260, 299),
        centreVille: createRange(300, 345),
        zonePeripherique: createRange(230, 265),
        zoneEloignement: createRange(160, 184),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(280, 322),
        zonePeripherique: createRange(200, 230),
        zoneEloignement: createRange(140, 161),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(140, 161),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(350, 403),
        centreVille: createRange(500, 575),
        zonePeripherique: createRange(300, 345),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(320, 368),
        centreVille: createRange(400, 460),
        zonePeripherique: createRange(230, 265),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(200, 230),
        centreVille: createRange(350, 403),
        zonePeripherique: createRange(200, 230),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(320, 368),
        centreVille: createRange(500, 575),
        zonePeripherique: createRange(300, 345),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(120, 138),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(50, 58),
        zoneEloignement: createRange(40, 46),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(30, 35),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(150, 173),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(100, 115),
      },
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(70, 81),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(70, 81),
        zoneEloignement: createRange(50, 58),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "ARRIS",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(280, 322),
        centreVille: createRange(320, 368),
        zonePeripherique: createRange(270, 311),
        zoneEloignement: createRange(180, 207),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(260, 299),
        centreVille: createRange(280, 322),
        zonePeripherique: createRange(250, 288),
        zoneEloignement: createRange(120, 138),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(240, 276),
        centreVille: createRange(260, 299),
        zonePeripherique: createRange(210, 242),
        zoneEloignement: createRange(100, 115),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(140, 161),
        centreVille: createRange(190, 219),
        zonePeripherique: createRange(140, 161),
        zoneEloignement: createRange(80, 92),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(270, 311),
        zonePeripherique: createRange(240, 276),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(230, 265),
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(200, 230),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(140, 161),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(350, 403),
        centreVille: createRange(500, 575),
        zonePeripherique: createRange(300, 345),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(320, 368),
        centreVille: createRange(400, 460),
        zonePeripherique: createRange(230, 265),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(120, 138),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(320, 368),
        centreVille: createRange(400, 460),
        zonePeripherique: createRange(230, 265),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(120, 138),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(50, 58),
        zoneEloignement: createRange(40, 46),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(30, 35),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(150, 173),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(100, 115),
      },
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(70, 81),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(70, 81),
        zoneEloignement: createRange(50, 58),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "N'GAOUS",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(280, 322),
        centreVille: createRange(320, 368),
        zonePeripherique: createRange(270, 311),
        zoneEloignement: createRange(180, 207),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(260, 299),
        centreVille: createRange(280, 322),
        zonePeripherique: createRange(250, 288),
        zoneEloignement: createRange(120, 138),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(240, 276),
        centreVille: createRange(260, 299),
        zonePeripherique: createRange(210, 242),
        zoneEloignement: createRange(100, 115),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(140, 161),
        centreVille: createRange(190, 219),
        zonePeripherique: createRange(140, 161),
        zoneEloignement: createRange(80, 92),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(270, 311),
        zonePeripherique: createRange(240, 276),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(230, 265),
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(200, 230),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(140, 161),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(350, 403),
        centreVille: createRange(500, 575),
        zonePeripherique: createRange(300, 345),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(320, 368),
        centreVille: createRange(400, 460),
        zonePeripherique: createRange(230, 265),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(120, 138),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(320, 368),
        centreVille: createRange(400, 460),
        zonePeripherique: createRange(230, 265),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(120, 138),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(50, 58),
        zoneEloignement: createRange(40, 46),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(30, 35),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (1 façade) avec raccordements",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(150, 173),
      },
      {
        label: "Pleine propriété (2 façades) sans raccordements",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(100, 115),
      },
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(70, 81),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(70, 81),
        zoneEloignement: createRange(50, 58),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "SERIANA",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(340, 391),
        zonePeripherique: createRange(220, 253),
        zoneEloignement: createRange(180, 207),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(165, 190),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(145, 167),
        zoneEloignement: createRange(120, 138),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(145, 167),
        centreVille: createRange(150, 173),
        zonePeripherique: createRange(135, 155),
        zoneEloignement: createRange(85, 98),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(130, 150),
        zonePeripherique: createRange(80, 92),
        zoneEloignement: createRange(60, 69),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(160, 184),
        centreVille: createRange(180, 207),
        zonePeripherique: createRange(130, 150),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(130, 150),
        centreVille: createRange(140, 161),
        zonePeripherique: createRange(125, 144),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(95, 109),
        centreVille: createRange(120, 138),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(300, 345),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(200, 230),
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(50, 58),
        zoneEloignement: createRange(40, 46),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(30, 35),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(64, 73),
        zoneEloignement: createRange(50, 58),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "CHEMORA",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(340, 391),
        zonePeripherique: createRange(220, 253),
        zoneEloignement: createRange(180, 207),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(165, 190),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(145, 167),
        zoneEloignement: createRange(120, 138),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(145, 167),
        centreVille: createRange(150, 173),
        zonePeripherique: createRange(135, 155),
        zoneEloignement: createRange(85, 98),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(130, 150),
        zonePeripherique: createRange(80, 92),
        zoneEloignement: createRange(60, 69),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(160, 184),
        centreVille: createRange(180, 207),
        zonePeripherique: createRange(130, 150),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(130, 150),
        centreVille: createRange(140, 161),
        zonePeripherique: createRange(125, 144),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(95, 109),
        centreVille: createRange(120, 138),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(300, 345),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(200, 230),
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(200, 230),
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(60, 69),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(50, 58),
        zoneEloignement: createRange(40, 46),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(30, 35),
      },
    ],
    terrainsNus: [
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(64, 73),
        zoneEloignement: createRange(50, 58),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "TIMGAD",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(340, 391),
        zonePeripherique: createRange(220, 253),
        zoneEloignement: createRange(180, 207),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(165, 190),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(145, 167),
        zoneEloignement: createRange(120, 138),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(145, 167),
        centreVille: createRange(150, 173),
        zonePeripherique: createRange(135, 155),
        zoneEloignement: createRange(85, 98),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(130, 150),
        zonePeripherique: createRange(80, 92),
        zoneEloignement: createRange(60, 69),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(160, 184),
        centreVille: createRange(180, 207),
        zonePeripherique: createRange(130, 150),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(130, 150),
        centreVille: createRange(140, 161),
        zonePeripherique: createRange(125, 144),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(95, 109),
        centreVille: createRange(120, 138),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(300, 345),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(200, 230),
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(50, 58),
        zoneEloignement: createRange(40, 46),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(30, 35),
      },
    ],
    terrainsNus: [
      {
        label: "Pleine propriété (1 façade) sans raccordements",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(64, 73),
        zoneEloignement: createRange(50, 58),
      },
      {
        label: "Terrain dans l'indivision",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "EL DJEZAR",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(340, 391),
        zonePeripherique: createRange(220, 253),
        zoneEloignement: createRange(180, 207),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(165, 190),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(145, 167),
        zoneEloignement: createRange(120, 138),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(145, 167),
        centreVille: createRange(150, 173),
        zonePeripherique: createRange(135, 155),
        zoneEloignement: createRange(85, 98),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(130, 150),
        zonePeripherique: createRange(80, 92),
        zoneEloignement: createRange(60, 69),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(160, 184),
        centreVille: createRange(180, 207),
        zonePeripherique: createRange(130, 150),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(130, 150),
        centreVille: createRange(140, 161),
        zonePeripherique: createRange(125, 144),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(95, 109),
        centreVille: createRange(120, 138),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(300, 345),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(200, 230),
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(200, 230),
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(60, 69),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(50, 58),
        zoneEloignement: createRange(40, 46),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(30, 35),
      },
    ],
    terrainsNus: [
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(64, 73),
        zoneEloignement: createRange(50, 58),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "TKOUT",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(340, 391),
        zonePeripherique: createRange(220, 253),
        zoneEloignement: createRange(180, 207),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(165, 190),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(145, 167),
        zoneEloignement: createRange(120, 138),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(145, 167),
        centreVille: createRange(150, 173),
        zonePeripherique: createRange(135, 155),
        zoneEloignement: createRange(85, 98),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(130, 150),
        zonePeripherique: createRange(80, 92),
        zoneEloignement: createRange(60, 69),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(160, 184),
        centreVille: createRange(180, 207),
        zonePeripherique: createRange(130, 150),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(130, 150),
        centreVille: createRange(140, 161),
        zonePeripherique: createRange(125, 144),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(95, 109),
        centreVille: createRange(120, 138),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(300, 345),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(200, 230),
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(200, 230),
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(60, 69),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(50, 58),
        zoneEloignement: createRange(40, 46),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(30, 35),
      },
    ],
    terrainsNus: [
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(64, 73),
        zoneEloignement: createRange(50, 58),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "AIN DJASSER",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(340, 391),
        zonePeripherique: createRange(220, 253),
        zoneEloignement: createRange(180, 207),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(165, 190),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(145, 167),
        zoneEloignement: createRange(120, 138),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(145, 167),
        centreVille: createRange(150, 173),
        zonePeripherique: createRange(135, 155),
        zoneEloignement: createRange(85, 98),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(130, 150),
        zonePeripherique: createRange(80, 92),
        zoneEloignement: createRange(60, 69),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(160, 184),
        centreVille: createRange(180, 207),
        zonePeripherique: createRange(130, 150),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(130, 150),
        centreVille: createRange(140, 161),
        zonePeripherique: createRange(125, 144),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(95, 109),
        centreVille: createRange(120, 138),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(300, 345),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(200, 230),
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(200, 230),
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(60, 69),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(50, 58),
        zoneEloignement: createRange(40, 46),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(30, 35),
      },
    ],
    terrainsNus: [
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(64, 73),
        zoneEloignement: createRange(50, 58),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "BOUZINA",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(340, 391),
        zonePeripherique: createRange(220, 253),
        zoneEloignement: createRange(180, 207),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(165, 190),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(145, 167),
        zoneEloignement: createRange(120, 138),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(145, 167),
        centreVille: createRange(150, 173),
        zonePeripherique: createRange(135, 155),
        zoneEloignement: createRange(85, 98),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(130, 150),
        zonePeripherique: createRange(80, 92),
        zoneEloignement: createRange(60, 69),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(160, 184),
        centreVille: createRange(180, 207),
        zonePeripherique: createRange(130, 150),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(130, 150),
        centreVille: createRange(140, 161),
        zonePeripherique: createRange(125, 144),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(95, 109),
        centreVille: createRange(120, 138),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(300, 345),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(200, 230),
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(200, 230),
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(60, 69),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(50, 58),
        zoneEloignement: createRange(40, 46),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(30, 35),
      },
    ],
    terrainsNus: [
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(64, 73),
        zoneEloignement: createRange(50, 58),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "SEGGANA",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(340, 391),
        zonePeripherique: createRange(220, 253),
        zoneEloignement: createRange(180, 207),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(165, 190),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(145, 167),
        zoneEloignement: createRange(120, 138),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(145, 167),
        centreVille: createRange(150, 173),
        zonePeripherique: createRange(135, 155),
        zoneEloignement: createRange(85, 98),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(130, 150),
        zonePeripherique: createRange(80, 92),
        zoneEloignement: createRange(60, 69),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(160, 184),
        centreVille: createRange(180, 207),
        zonePeripherique: createRange(130, 150),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(130, 150),
        centreVille: createRange(140, 161),
        zonePeripherique: createRange(125, 144),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(95, 109),
        centreVille: createRange(120, 138),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(300, 345),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(200, 230),
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(200, 230),
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(60, 69),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(50, 58),
        zoneEloignement: createRange(40, 46),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(30, 35),
      },
    ],
    terrainsNus: [
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(64, 73),
        zoneEloignement: createRange(50, 58),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "MENAA",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(340, 391),
        zonePeripherique: createRange(220, 253),
        zoneEloignement: createRange(180, 207),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(165, 190),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(145, 167),
        zoneEloignement: createRange(120, 138),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(145, 167),
        centreVille: createRange(150, 173),
        zonePeripherique: createRange(135, 155),
        zoneEloignement: createRange(85, 98),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(130, 150),
        zonePeripherique: createRange(80, 92),
        zoneEloignement: createRange(60, 69),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(160, 184),
        centreVille: createRange(180, 207),
        zonePeripherique: createRange(130, 150),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(130, 150),
        centreVille: createRange(140, 161),
        zonePeripherique: createRange(125, 144),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(95, 109),
        centreVille: createRange(120, 138),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(300, 345),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(200, 230),
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(200, 230),
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(60, 69),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(50, 58),
        zoneEloignement: createRange(40, 46),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(30, 35),
      },
    ],
    terrainsNus: [
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(64, 73),
        zoneEloignement: createRange(50, 58),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "ICHEMOUL",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(340, 391),
        zonePeripherique: createRange(220, 253),
        zoneEloignement: createRange(180, 207),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(165, 190),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(145, 167),
        zoneEloignement: createRange(120, 138),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(145, 167),
        centreVille: createRange(150, 173),
        zonePeripherique: createRange(135, 155),
        zoneEloignement: createRange(85, 98),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(130, 150),
        zonePeripherique: createRange(80, 92),
        zoneEloignement: createRange(60, 69),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(160, 184),
        centreVille: createRange(180, 207),
        zonePeripherique: createRange(130, 150),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(130, 150),
        centreVille: createRange(140, 161),
        zonePeripherique: createRange(125, 144),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(95, 109),
        centreVille: createRange(120, 138),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(300, 345),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(200, 230),
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(200, 230),
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(60, 69),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(50, 58),
        zoneEloignement: createRange(40, 46),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(30, 35),
      },
    ],
    terrainsNus: [
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(64, 73),
        zoneEloignement: createRange(50, 58),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "THENIET EL ABED",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(340, 391),
        zonePeripherique: createRange(220, 253),
        zoneEloignement: createRange(180, 207),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(165, 190),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(145, 167),
        zoneEloignement: createRange(120, 138),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(145, 167),
        centreVille: createRange(150, 173),
        zonePeripherique: createRange(135, 155),
        zoneEloignement: createRange(85, 98),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(130, 150),
        zonePeripherique: createRange(80, 92),
        zoneEloignement: createRange(60, 69),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(160, 184),
        centreVille: createRange(180, 207),
        zonePeripherique: createRange(130, 150),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(130, 150),
        centreVille: createRange(140, 161),
        zonePeripherique: createRange(125, 144),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(95, 109),
        centreVille: createRange(120, 138),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(300, 345),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(200, 230),
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(200, 230),
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(60, 69),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(50, 58),
        zoneEloignement: createRange(40, 46),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(30, 35),
      },
    ],
    terrainsNus: [
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(64, 73),
        zoneEloignement: createRange(50, 58),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "OULED SI SLIMAN",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(340, 391),
        zonePeripherique: createRange(220, 253),
        zoneEloignement: createRange(180, 207),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(165, 190),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(145, 167),
        zoneEloignement: createRange(120, 138),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(145, 167),
        centreVille: createRange(150, 173),
        zonePeripherique: createRange(135, 155),
        zoneEloignement: createRange(85, 98),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(130, 150),
        zonePeripherique: createRange(80, 92),
        zoneEloignement: createRange(60, 69),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(160, 184),
        centreVille: createRange(180, 207),
        zonePeripherique: createRange(130, 150),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(130, 150),
        centreVille: createRange(140, 161),
        zonePeripherique: createRange(125, 144),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(95, 109),
        centreVille: createRange(120, 138),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(300, 345),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(200, 230),
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(200, 230),
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(60, 69),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(50, 58),
        zoneEloignement: createRange(40, 46),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(30, 35),
      },
    ],
    terrainsNus: [
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(64, 73),
        zoneEloignement: createRange(50, 58),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "FISDIS",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(210, 242),
        zoneEloignement: createRange(180, 207),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(220, 253),
        zonePeripherique: createRange(150, 173),
        zoneEloignement: createRange(120, 138),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(180, 207),
        zonePeripherique: createRange(100, 115),
        zoneEloignement: createRange(85, 98),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(100, 115),
        zonePeripherique: createRange(80, 92),
        zoneEloignement: createRange(60, 69),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(200, 230),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(170, 196),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(300, 345),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(130, 150),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(300, 345),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(60, 69),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(50, 58),
        zoneEloignement: createRange(40, 46),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(30, 35),
      },
    ],
    terrainsNus: [
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(64, 73),
        zoneEloignement: createRange(50, 58),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "OUED CHAABA",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(210, 242),
        zoneEloignement: createRange(180, 207),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(220, 253),
        zonePeripherique: createRange(150, 173),
        zoneEloignement: createRange(120, 138),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(180, 207),
        zonePeripherique: createRange(100, 115),
        zoneEloignement: createRange(85, 98),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(100, 115),
        zonePeripherique: createRange(80, 92),
        zoneEloignement: createRange(60, 69),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(200, 230),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(170, 196),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(300, 345),
        centreVille: createRange(150, 173),
        zonePeripherique: createRange(250, 288),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(100, 115),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(60, 69),
        zonePeripherique: createRange(130, 150),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(300, 345),
        centreVille: createRange(100, 115),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(60, 69),
        zonePeripherique: createRange(130, 150),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(50, 58),
        zoneEloignement: createRange(40, 46),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(30, 35),
      },
    ],
    terrainsNus: [
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(64, 73),
        zoneEloignement: createRange(50, 58),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "DJEARMA",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        centreVille: createRange(300, 345),
        zonePeripherique: createRange(210, 242),
        zoneEloignement: createRange(180, 207),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(150, 173),
        zoneEloignement: createRange(120, 138),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(165, 190),
        zonePeripherique: createRange(120, 138),
        zoneEloignement: createRange(85, 98),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(130, 150),
        zonePeripherique: createRange(80, 92),
        zoneEloignement: createRange(60, 69),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(200, 230),
        zonePeripherique: createRange(140, 161),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(170, 196),
        zonePeripherique: createRange(100, 115),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(300, 345),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(130, 150),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(60, 69),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(50, 58),
        zoneEloignement: createRange(40, 46),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(30, 35),
      },
    ],
    terrainsNus: [
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(64, 73),
        zoneEloignement: createRange(50, 58),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "AINE YAGOUT",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        centreVille: createRange(300, 345),
        zonePeripherique: createRange(210, 242),
        zoneEloignement: createRange(180, 207),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(150, 173),
        zoneEloignement: createRange(120, 138),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(165, 190),
        zonePeripherique: createRange(120, 138),
        zoneEloignement: createRange(85, 98),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(130, 150),
        zonePeripherique: createRange(80, 92),
        zoneEloignement: createRange(60, 69),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(200, 230),
        zonePeripherique: createRange(140, 161),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(170, 196),
        zonePeripherique: createRange(100, 115),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère hautement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(300, 345),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(130, 150),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(250, 288),
        centreVille: createRange(250, 288),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(60, 69),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(50, 58),
        zoneEloignement: createRange(40, 46),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(30, 35),
      },
    ],
    terrainsNus: [
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(64, 73),
        zoneEloignement: createRange(50, 58),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "M'DOUKAL",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(230, 265),
        centreVille: createRange(260, 299),
        zonePeripherique: createRange(184, 212),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(196, 225),
        zonePeripherique: createRange(122, 140),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(130, 150),
        zonePeripherique: createRange(85, 98),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(70, 81),
        centreVille: createRange(100, 115),
        zonePeripherique: createRange(60, 69),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(140, 161),
        centreVille: createRange(180, 207),
        zonePeripherique: createRange(120, 138),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(120, 138),
        zonePeripherique: createRange(80, 92),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(40, 46),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(30, 35),
      },
    ],
    terrainsNus: [
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(63, 72),
        zoneEloignement: createRange(50, 58),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "BITAM",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(230, 265),
        centreVille: createRange(260, 299),
        zonePeripherique: createRange(184, 212),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(196, 225),
        zonePeripherique: createRange(122, 140),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(130, 150),
        zonePeripherique: createRange(85, 98),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(70, 81),
        centreVille: createRange(100, 115),
        zonePeripherique: createRange(60, 69),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(140, 161),
        centreVille: createRange(180, 207),
        zonePeripherique: createRange(120, 138),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(120, 138),
        zonePeripherique: createRange(80, 92),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(40, 46),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(30, 35),
      },
    ],
    terrainsNus: [
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(63, 72),
        zoneEloignement: createRange(50, 58),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "BOUMEGUEUR",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(230, 265),
        centreVille: createRange(260, 299),
        zonePeripherique: createRange(184, 212),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(196, 225),
        zonePeripherique: createRange(122, 140),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(130, 150),
        zonePeripherique: createRange(85, 98),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(70, 81),
        centreVille: createRange(100, 115),
        zonePeripherique: createRange(60, 69),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(140, 161),
        centreVille: createRange(180, 207),
        zonePeripherique: createRange(120, 138),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(120, 138),
        zonePeripherique: createRange(80, 92),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(40, 46),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(30, 35),
      },
    ],
    terrainsNus: [
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(63, 72),
        zoneEloignement: createRange(50, 58),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "Z A NAT EL BEIDHA",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(230, 265),
        centreVille: createRange(260, 299),
        zonePeripherique: createRange(184, 212),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(196, 225),
        zonePeripherique: createRange(122, 140),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(130, 150),
        zonePeripherique: createRange(85, 98),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(70, 81),
        centreVille: createRange(100, 115),
        zonePeripherique: createRange(60, 69),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(140, 161),
        centreVille: createRange(180, 207),
        zonePeripherique: createRange(120, 138),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(120, 138),
        zonePeripherique: createRange(80, 92),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(40, 46),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(30, 35),
      },
    ],
    terrainsNus: [
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(63, 72),
        zoneEloignement: createRange(50, 58),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "SEFIANE",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(230, 265),
        centreVille: createRange(260, 299),
        zonePeripherique: createRange(184, 212),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(196, 225),
        zonePeripherique: createRange(122, 140),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(130, 150),
        zonePeripherique: createRange(85, 98),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(70, 81),
        centreVille: createRange(100, 115),
        zonePeripherique: createRange(60, 69),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(140, 161),
        centreVille: createRange(180, 207),
        zonePeripherique: createRange(120, 138),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(120, 138),
        zonePeripherique: createRange(80, 92),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(40, 46),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(30, 35),
      },
    ],
    terrainsNus: [
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(63, 72),
        zoneEloignement: createRange(50, 58),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "AZIL ABDELKADER",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(230, 265),
        centreVille: createRange(260, 299),
        zonePeripherique: createRange(184, 212),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(196, 225),
        zonePeripherique: createRange(122, 140),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(130, 150),
        zonePeripherique: createRange(85, 98),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(70, 81),
        centreVille: createRange(100, 115),
        zonePeripherique: createRange(60, 69),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(140, 161),
        centreVille: createRange(180, 207),
        zonePeripherique: createRange(120, 138),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(120, 138),
        zonePeripherique: createRange(80, 92),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(40, 46),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(30, 35),
      },
    ],
    terrainsNus: [
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(63, 72),
        zoneEloignement: createRange(50, 58),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "OUED EL MA",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(230, 265),
        centreVille: createRange(260, 299),
        zonePeripherique: createRange(184, 212),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(196, 225),
        zonePeripherique: createRange(122, 140),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(130, 150),
        zonePeripherique: createRange(85, 98),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(70, 81),
        centreVille: createRange(100, 115),
        zonePeripherique: createRange(60, 69),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(140, 161),
        centreVille: createRange(180, 207),
        zonePeripherique: createRange(120, 138),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(120, 138),
        zonePeripherique: createRange(80, 92),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(40, 46),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(30, 35),
      },
    ],
    terrainsNus: [
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(63, 72),
        zoneEloignement: createRange(50, 58),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "OUED TAGA",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(230, 265),
        centreVille: createRange(260, 299),
        zonePeripherique: createRange(184, 212),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(196, 225),
        zonePeripherique: createRange(122, 140),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(130, 150),
        zonePeripherique: createRange(85, 98),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(70, 81),
        centreVille: createRange(100, 115),
        zonePeripherique: createRange(60, 69),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(140, 161),
        centreVille: createRange(180, 207),
        zonePeripherique: createRange(120, 138),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(120, 138),
        zonePeripherique: createRange(80, 92),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    hangars: [
      {
        label: "En zone urbaine",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(40, 46),
      },
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(30, 35),
      },
    ],
    terrainsNus: [
      {
        label: "Terrain industriel",
        unit: "DA/m²/Mois",
        zonePeripherique: createRange(63, 72),
        zoneEloignement: createRange(50, 58),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "TILATOU",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(170, 196),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(120, 138),
        centreVille: createRange(158, 182),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(75, 86),
        centreVille: createRange(98, 113),
        zonePeripherique: createRange(70, 81),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(50, 58),
        centreVille: createRange(55, 63),
        zonePeripherique: createRange(40, 46),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(158, 182),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(70, 81),
        centreVille: createRange(92, 106),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    hangars: [
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(20, 23),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "RAHBAT",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(170, 196),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(120, 138),
        centreVille: createRange(158, 182),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(75, 86),
        centreVille: createRange(98, 113),
        zonePeripherique: createRange(70, 81),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(50, 58),
        centreVille: createRange(55, 63),
        zonePeripherique: createRange(40, 46),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(158, 182),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(70, 81),
        centreVille: createRange(92, 106),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    hangars: [
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(20, 23),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "BOULHILET",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(170, 196),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(120, 138),
        centreVille: createRange(158, 182),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(75, 86),
        centreVille: createRange(98, 113),
        zonePeripherique: createRange(70, 81),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(50, 58),
        centreVille: createRange(55, 63),
        zonePeripherique: createRange(40, 46),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(158, 182),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(70, 81),
        centreVille: createRange(92, 106),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    hangars: [
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(20, 23),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "BOUMIA",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(170, 196),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(120, 138),
        centreVille: createRange(158, 182),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(75, 86),
        centreVille: createRange(98, 113),
        zonePeripherique: createRange(70, 81),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(50, 58),
        centreVille: createRange(55, 63),
        zonePeripherique: createRange(40, 46),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(158, 182),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(70, 81),
        centreVille: createRange(92, 106),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    hangars: [
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(20, 23),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "TAXLENT",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(170, 196),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(120, 138),
        centreVille: createRange(158, 182),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(75, 86),
        centreVille: createRange(98, 113),
        zonePeripherique: createRange(70, 81),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(50, 58),
        centreVille: createRange(55, 63),
        zonePeripherique: createRange(40, 46),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(158, 182),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(70, 81),
        centreVille: createRange(92, 106),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    hangars: [
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(20, 23),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "GHASSIRA",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(170, 196),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(120, 138),
        centreVille: createRange(158, 182),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(75, 86),
        centreVille: createRange(98, 113),
        zonePeripherique: createRange(70, 81),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(50, 58),
        centreVille: createRange(55, 63),
        zonePeripherique: createRange(40, 46),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(158, 182),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(70, 81),
        centreVille: createRange(92, 106),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    hangars: [
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(20, 23),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "AYOUN EL ASSAFIR",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(170, 196),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(120, 138),
        centreVille: createRange(158, 182),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(75, 86),
        centreVille: createRange(98, 113),
        zonePeripherique: createRange(70, 81),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(50, 58),
        centreVille: createRange(55, 63),
        zonePeripherique: createRange(40, 46),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(158, 182),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(70, 81),
        centreVille: createRange(92, 106),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    hangars: [
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(20, 23),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "TAIKHEMPT",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(170, 196),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(120, 138),
        centreVille: createRange(158, 182),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(75, 86),
        centreVille: createRange(98, 113),
        zonePeripherique: createRange(70, 81),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(50, 58),
        centreVille: createRange(55, 63),
        zonePeripherique: createRange(40, 46),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(158, 182),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(70, 81),
        centreVille: createRange(92, 106),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    hangars: [
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(20, 23),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "KSAR BELEZMA",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(170, 196),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(120, 138),
        centreVille: createRange(158, 182),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(75, 86),
        centreVille: createRange(98, 113),
        zonePeripherique: createRange(70, 81),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(50, 58),
        centreVille: createRange(55, 63),
        zonePeripherique: createRange(40, 46),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(158, 182),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(70, 81),
        centreVille: createRange(92, 106),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    hangars: [
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(20, 23),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "FOUM ETOUB",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(170, 196),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(120, 138),
        centreVille: createRange(158, 182),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(75, 86),
        centreVille: createRange(98, 113),
        zonePeripherique: createRange(70, 81),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(50, 58),
        centreVille: createRange(55, 63),
        zonePeripherique: createRange(40, 46),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(158, 182),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(70, 81),
        centreVille: createRange(92, 106),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    hangars: [
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(20, 23),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "GUIGBA",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(170, 196),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(120, 138),
        centreVille: createRange(158, 182),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(75, 86),
        centreVille: createRange(98, 113),
        zonePeripherique: createRange(70, 81),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(50, 58),
        centreVille: createRange(55, 63),
        zonePeripherique: createRange(40, 46),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(158, 182),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(70, 81),
        centreVille: createRange(92, 106),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    hangars: [
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(20, 23),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "TIGHARGHAR",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(170, 196),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(120, 138),
        centreVille: createRange(158, 182),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(75, 86),
        centreVille: createRange(98, 113),
        zonePeripherique: createRange(70, 81),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(50, 58),
        centreVille: createRange(55, 63),
        zonePeripherique: createRange(40, 46),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(158, 182),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(70, 81),
        centreVille: createRange(92, 106),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    hangars: [
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(20, 23),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "OULED AMAR",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(170, 196),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(120, 138),
        centreVille: createRange(158, 182),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(75, 86),
        centreVille: createRange(98, 113),
        zonePeripherique: createRange(70, 81),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(50, 58),
        centreVille: createRange(55, 63),
        zonePeripherique: createRange(40, 46),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(158, 182),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(70, 81),
        centreVille: createRange(92, 106),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    hangars: [
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(20, 23),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "HIDOUSSA",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(170, 196),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(120, 138),
        centreVille: createRange(158, 182),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(75, 86),
        centreVille: createRange(98, 113),
        zonePeripherique: createRange(70, 81),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(50, 58),
        centreVille: createRange(55, 63),
        zonePeripherique: createRange(40, 46),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(158, 182),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(70, 81),
        centreVille: createRange(92, 106),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    hangars: [
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(20, 23),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "INOUGHISSEN",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(170, 196),
        centreVille: createRange(200, 230),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(120, 138),
        centreVille: createRange(158, 182),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(75, 86),
        centreVille: createRange(98, 113),
        zonePeripherique: createRange(70, 81),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(50, 58),
        centreVille: createRange(55, 63),
        zonePeripherique: createRange(40, 46),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(100, 115),
        centreVille: createRange(158, 182),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(70, 81),
        centreVille: createRange(92, 106),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère moyennement commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(150, 173),
        centreVille: createRange(180, 200),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Artère secondaire",
        unit: "DA/m²/Mois",
        zoneResidentielle: createRange(110, 127),
        centreVille: createRange(140, 150),
        zonePeripherique: createRange(70, 81),
      },
    ],
    hangars: [
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(20, 23),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "CHIR",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 196),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(120, 138),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(75, 86),
        zonePeripherique: createRange(70, 81),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(50, 58),
        zonePeripherique: createRange(40, 46),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(100, 115),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(70, 81),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(120, 138),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(120, 138),
      },
    ],
    hangars: [
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(20, 23),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "GOSBAT",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 196),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(120, 138),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(75, 86),
        zonePeripherique: createRange(70, 81),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(50, 58),
        zonePeripherique: createRange(40, 46),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(100, 115),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(70, 81),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(120, 138),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(120, 138),
      },
    ],
    hangars: [
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(20, 23),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "KIMEL",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 196),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(120, 138),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(75, 86),
        zonePeripherique: createRange(70, 81),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(50, 58),
        zonePeripherique: createRange(40, 46),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(100, 115),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(70, 81),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(120, 138),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(120, 138),
      },
    ],
    hangars: [
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(20, 23),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "LARBAA",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 196),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(120, 138),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(75, 86),
        zonePeripherique: createRange(70, 81),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(50, 58),
        zonePeripherique: createRange(40, 46),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(100, 115),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(70, 81),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(120, 138),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(120, 138),
      },
    ],
    hangars: [
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(20, 23),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "LAZROU",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 196),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(120, 138),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(75, 86),
        zonePeripherique: createRange(70, 81),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(50, 58),
        zonePeripherique: createRange(40, 46),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(100, 115),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(70, 81),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(120, 138),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(120, 138),
      },
    ],
    hangars: [
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(20, 23),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "LAMCEN",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 196),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(120, 138),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(75, 86),
        zonePeripherique: createRange(70, 81),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(50, 58),
        zonePeripherique: createRange(40, 46),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(100, 115),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(70, 81),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(120, 138),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(120, 138),
      },
    ],
    hangars: [
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(20, 23),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "MAAFA",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 196),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(120, 138),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(75, 86),
        zonePeripherique: createRange(70, 81),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(50, 58),
        zonePeripherique: createRange(40, 46),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(100, 115),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(70, 81),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(120, 138),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(120, 138),
      },
    ],
    hangars: [
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(20, 23),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "OULED SALAM (M'CIL)",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 196),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(120, 138),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(75, 86),
        zonePeripherique: createRange(70, 81),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(50, 58),
        zonePeripherique: createRange(40, 46),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(100, 115),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(70, 81),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(120, 138),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(120, 138),
      },
    ],
    hangars: [
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(20, 23),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "OUELD AOUF",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 196),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(120, 138),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(75, 86),
        zonePeripherique: createRange(70, 81),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(50, 58),
        zonePeripherique: createRange(40, 46),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(100, 115),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(70, 81),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(120, 138),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(120, 138),
      },
    ],
    hangars: [
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(20, 23),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "OUELD FADHEL",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 196),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(120, 138),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(75, 86),
        zonePeripherique: createRange(70, 81),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(50, 58),
        zonePeripherique: createRange(40, 46),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(100, 115),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(70, 81),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(120, 138),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(120, 138),
      },
    ],
    hangars: [
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(20, 23),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "BENI FADHALA ELHAKANIA",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 196),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(120, 138),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(75, 86),
        zonePeripherique: createRange(70, 81),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(50, 58),
        zonePeripherique: createRange(40, 46),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(100, 115),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(70, 81),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(120, 138),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(120, 138),
      },
    ],
    hangars: [
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(20, 23),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "TIGHANIMINE",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 196),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(120, 138),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(75, 86),
        zonePeripherique: createRange(70, 81),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(50, 58),
        zonePeripherique: createRange(40, 46),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(100, 115),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(70, 81),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(120, 138),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(120, 138),
      },
    ],
    hangars: [
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(20, 23),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
  {
    commune: "EL HASSI",
    individuels: [
      {
        label: "Standing",
        unit: "DA/m²/Mois",
        centreVille: createRange(170, 196),
        zonePeripherique: createRange(150, 173),
      },
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(120, 138),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(75, 86),
        zonePeripherique: createRange(70, 81),
      },
      {
        label: "Précaire",
        unit: "DA/m²/Mois",
        centreVille: createRange(50, 58),
        zonePeripherique: createRange(40, 46),
      },
    ],
    collectifsSemiCollectifs: [
      {
        label: "Amélioré",
        unit: "DA/m²/Mois",
        centreVille: createRange(100, 115),
        zonePeripherique: createRange(100, 115),
      },
      {
        label: "Economique",
        unit: "DA/m²/Mois",
        centreVille: createRange(70, 81),
        zonePeripherique: createRange(60, 69),
      },
    ],
    locauxCommerciaux: [
      {
        label: "Artère peu commerciale",
        unit: "DA/m²/Mois",
        centreVille: createRange(120, 138),
      },
    ],
    locauxUsageProfessionnels: [
      {
        label: "Artère principale",
        unit: "DA/m²/Mois",
        centreVille: createRange(120, 138),
      },
    ],
    hangars: [
      {
        label: "En zone rurale",
        unit: "DA/m²/Mois",
        zoneEloignement: createRange(20, 23),
      },
    ],
    terrainsAgricolesPlaine: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(25000, 28750),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(20000, 23000),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(15000, 17250),
      },
    ],
    terrainsAgricolesPente: [
      {
        label: "Potentialité élevée",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(10000, 11500),
      },
      {
        label: "Potentialité moyenne",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(8000, 9200),
      },
      {
        label: "Potentialité faible",
        unit: "DA/Ha/Mois",
        zoneEloignement: createRange(6000, 6900),
      },
    ],
  },
];
