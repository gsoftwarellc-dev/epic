export type BrandType = "epic" | "terminator";

export type RentalType = "full_day" | "hourly" | "fixed_slot";

export interface Product {
  id: number;
  name: string;
  slug: string;
  brandType: BrandType;
  shortDescription: string;
  description: string;
  priceCents: number;
  depositCents: number;
  rentalType: RentalType;
  images: string[];
  features: string[];
  specs: {
    size?: string;
    ageRange?: string;
    wetDry?: string;
    setupTime?: string;
    powerRequired?: string;
  };
  isActive: boolean;
}
