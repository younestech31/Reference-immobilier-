export interface PriceZone {
  min: number;
  max: number;
}

export interface TypeEntry {
  label: string;
  unit?: string;
  zoneResidentielle?: PriceZone;
  centreVille?: PriceZone;
  zonePeripherique?: PriceZone;
  zoneEloignement?: PriceZone;
}

export type CategoryKey = 
  | 'individuels' 
  | 'collectifsSemiCollectifs' 
  | 'locauxCommerciaux' 
  | 'locauxUsageProfessionnels' 
  | 'hangars' 
  | 'terrainsNus' 
  | 'terrainsAgricolesPlaine' 
  | 'terrainsAgricolesPente';

export interface PriceRefCommune {
  commune: string;
  region?: string;
  individuels?: TypeEntry[];
  collectifsSemiCollectifs?: TypeEntry[];
  locauxCommerciaux?: TypeEntry[];
  locauxUsageProfessionnels?: TypeEntry[];
  hangars?: TypeEntry[];
  terrainsNus?: TypeEntry[];
  terrainsAgricolesPlaine?: TypeEntry[];
  terrainsAgricolesPente?: TypeEntry[];
}

export interface LocationEntry {
  commune: string;
  region?: string;
  individuels?: TypeEntry[];
  collectifsSemiCollectifs?: TypeEntry[];
  locauxCommerciaux?: TypeEntry[];
  locauxUsageProfessionnels?: TypeEntry[];
  hangars?: TypeEntry[];
  terrainsNus?: TypeEntry[];
  terrainsAgricolesPlaine?: TypeEntry[];
  terrainsAgricolesPente?: TypeEntry[];
}

export interface CalculatorZoneResult {
  min?: number;
  max?: number;
  rent_min?: number;
  rent_max?: number;
}

export interface CalculatorTypeResult {
  type: string;
  unit?: string;
  zones: Record<string, CalculatorZoneResult>;
}

export interface CalculatorCategoryResult {
  categorie: string;
  types: CalculatorTypeResult[];
}

export interface CalculatorResult {
  categories: CalculatorCategoryResult[];
}
