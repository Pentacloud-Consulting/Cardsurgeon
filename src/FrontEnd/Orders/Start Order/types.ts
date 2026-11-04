export type ServiceType = "restoration" | "pregrade";

export type RestorationTierId = 
  | "economy" 
  | "standard" 
  | "express" 
  | "high_value" 
  | "super_saiyan" 
  | "light_speed";

export type PregradeTierId = 
  | "standard_pregrade" 
  | "high_value_pregrade" 
  | "same_day_pregrade";

export interface CardItem {
  id: string;
  cardName: string;
  setName: string;
  year: string;
  cardNumber: string;
  gameSport: string;
  variation: string;
  currentHolder: string;
  knownDefects: string;
  declaredValue: number;
  notes: string;
  serviceTier: RestorationTierId | PregradeTierId;
  addOnCrackOut: boolean;
  addOnHiResPhotos: boolean;
  frontPhoto: string | null;
  backPhoto: string | null;
  detailPhoto: string | null;
}

export interface CustomerInfo {
  fullName: string;
  email: string;
  phone: string;
  streetAddress: string;
  apartmentSuite: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export type InboundShippingOption = "prepaid_label" | "self_ship";
export type ReturnShippingOption = "standard_tracked" | "express_tracked";

export interface ShippingDetails {
  inboundOption: InboundShippingOption;
  returnOption: ReturnShippingOption;
  transitInsurance: boolean;
}

export interface OrderState {
  currentStep: number; // 1 to 7
  serviceType: ServiceType;
  termsAcknowledged: boolean;
  cards: CardItem[];
  customerInfo: CustomerInfo;
  shipping: ShippingDetails;
  signature: {
    fullName: string;
    acceptedTerms: boolean;
    date: string;
  };
  orderNumber?: string;
  isCompleted?: boolean;
}
