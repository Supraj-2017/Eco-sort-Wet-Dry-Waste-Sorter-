export interface ClassificationResult {
  id: string;
  itemName: string;
  category: 'wet' | 'dry' | 'hazardous' | 'recyclable' | 'unknown';
  confidence: number;
  reason: string;
  disposalInstructions: string;
  sustainabilityTip: string;
  timestamp: string; // ISO string
}

export interface WasteCategoryMeta {
  id: 'wet' | 'dry' | 'hazardous' | 'recyclable';
  name: string;
  colorClass: string;
  borderColorClass: string;
  bgClass: string;
  accentColorClass: string;
  icon: string; // lucide icon name
  description: string;
  examples: string[];
  disposalGuideline: string;
}

export interface WasteSorterStats {
  wet: number;
  dry: number;
  hazardous: number;
  recyclable: number;
  total: number;
}
