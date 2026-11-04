"use client";

import React, { useState, useRef, useEffect } from "react";
import GiftHero from "./GiftHero";
import GiftCardPreview from "./GiftCardPreview";
import GiftAmountSelector from "./GiftAmountSelector";
import GiftRecipientSection from "./GiftRecipientSection";
import GiftTermsAgreement from "./GiftTermsAgreement";
import GiftCheckoutAction from "./GiftCheckoutAction";
import { GiftFormData } from "./types";

export default function GiftPageContent() {
  const [formData, setFormData] = useState<GiftFormData>({
    amount: 25,
    isCustom: false,
    customAmount: "",
    sendToSomeoneElse: false,
    recipientName: "",
    recipientEmail: "",
    giftMessage: "",
    senderEmail: "",
    promoCode: "",
    termsAgreed: false,
    esignConsent: false,
    fullName: "",
    dontFeatureCards: false,
    termsScrolled: false,
  });

  const leftColumnRef = useRef<HTMLDivElement>(null);
  const [stickyTop, setStickyTop] = useState<number>(-70);

  useEffect(() => {
    function updateStickyPosition() {
      if (leftColumnRef.current) {
        const height = leftColumnRef.current.offsetHeight;
        const windowHeight = window.innerHeight;
        // If content is taller than viewport (e.g. laptop screens in Image 1/2),
        // stick when the entire bottom ("HOW IT WORKS" card) is completely in view!
        // On taller screens, stick at 88px (comfortable distance below navbar).
        const targetTop = Math.min(88, windowHeight - height - 24);
        setStickyTop(targetTop);
      }
    }

    updateStickyPosition();
    window.addEventListener("resize", updateStickyPosition);
    return () => window.removeEventListener("resize", updateStickyPosition);
  }, []);

  return (
    <div className="pt-24 sm:pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* 2-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Hero & Sticky Luxury Card Slab Preview */}
        <div
          ref={leftColumnRef}
          style={{ top: `${stickyTop}px` }}
          className="lg:col-span-5 flex flex-col gap-5 lg:sticky self-start"
        >
          <GiftHero />
          <GiftCardPreview formData={formData} />
        </div>

        {/* Right Column: Checkout & Configuration Form Container */}
        <div className="lg:col-span-7">
          <div className="clay-footer-card rounded-[32px] sm:rounded-[36px] p-6 sm:p-9 shadow-xl border border-white/80 flex flex-col gap-6">
            {/* 1. Choose Amount */}
            <GiftAmountSelector formData={formData} setFormData={setFormData} />

            {/* 2. Delivery & Details */}
            <GiftRecipientSection
              formData={formData}
              setFormData={setFormData}
            />

            {/* 3. Terms of Service & E-Signature Agreement */}
            <GiftTermsAgreement
              formData={formData}
              setFormData={setFormData}
            />

            {/* 4. Buy Action & Notices */}
            <GiftCheckoutAction formData={formData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export {
  GiftHero,
  GiftCardPreview,
  GiftAmountSelector,
  GiftRecipientSection,
  GiftTermsAgreement,
  GiftCheckoutAction,
};
