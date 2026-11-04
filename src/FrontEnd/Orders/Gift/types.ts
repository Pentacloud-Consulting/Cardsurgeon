export interface GiftFormData {
  amount: number;
  isCustom: boolean;
  customAmount: string;
  sendToSomeoneElse: boolean;
  recipientName: string;
  recipientEmail: string;
  giftMessage: string;
  senderEmail: string;
  promoCode: string;
  termsAgreed: boolean;
  esignConsent: boolean;
  fullName: string;
  dontFeatureCards: boolean;
  termsScrolled: boolean;
}
