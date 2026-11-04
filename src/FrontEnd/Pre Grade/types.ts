export interface PrepTier {
  id: string;
  name: string;
  badge?: string;
  badgeColor?: string;
  tagline: string;
  priceDisplay: string;
  priceSub: string;
  discountNote?: string;
  turnaround: string;
  cardValue: string;
  features: string[];
  recommended?: boolean;
}

export interface IncludedItem {
  name: string;
  shortDesc: string;
  iconName: "Wrench" | "Award" | "Layers" | "ShieldCheck" | "Box" | "FileSearch";
}

export interface ExcludedItem {
  name: string;
  desc: string;
}
