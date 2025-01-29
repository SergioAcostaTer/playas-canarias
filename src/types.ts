// types.ts
export interface Beach {
  id: number;
  name: string;
  classification: BeachClassification;
  location: Location;
  dimensions: Dimensions;
  composition: Composition;
  conditions: Conditions;
  facilities: Facilities;
  accessibility: Accessibility;
  safety: Safety;
  status: Status;
}

export interface BeachClassification {
  protectionLevel: string;
  riskLevel: string;
  zbm: boolean;
  beach: boolean;
}

export interface Location {
  municipality: string;
  province: string;
  island: string;
  coordinates: Coordinates;
  access: AccessDetails;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Dimensions {
  length: number;
  width: number;
  sizeCategory: string;
}

export interface Composition {
  primaryMaterial: string;
  secondaryMaterials: string[];
  sandColor: string;
}

export interface Conditions {
  bathingCondition: string;
  environmentCondition: string;
  annualMaxOccupancy: string;
  windy: boolean;
}

export interface Facilities {
  hasBlueFlag: boolean;
  umbrellaRentals: boolean;
  sunbedRentals: boolean;
  waterSportsRentals: boolean;
  kidsArea: boolean;
  sportsArea: boolean;
  sanitation: Sanitation;
}

export interface Sanitation {
  hasShowers: boolean;
  hasAdaptedShowers: boolean;
  hasToilets: boolean;
  hasFootShowers: boolean;
}

export interface Accessibility {
  wheelchairAccess: boolean;
  adaptedShower: boolean;
  assistedBathing: boolean;
  pmrShade: boolean;
}

export interface Safety {
  lifeguardService: string;
  emergencyContacts: string;
}

export interface Status {
  lastUpdated: string;
}

export interface Page<T> {
  totalElements: number;
  totalPages: number;
  content: T[];
  size: number;
  number: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}

export interface ErrorResponse {
  status: number;
  message: string;
  timestamp: number;
}

export interface AccessDetails {
  byCar: boolean;
  byShip: boolean;
  byFootDescription: string;
}

export interface BeachPreview {
  id: number;
  name: string;
  island: string;
  province: string;
  municipality: string;
  latitude: number;
  longitude: number;
  distance: number;
  imageUrl: string | null;
}
