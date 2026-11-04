"use client";

import React, { useState } from "react";
import { Lock, Check, Gift, ArrowRight } from "lucide-react";
import { GiftFormData } from "./types";

interface GiftCheckoutActionProps {
  formData: GiftFormData;
}

export default function GiftCheckoutAction({
  formData,
}: GiftCheckoutActionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");

  const finalAmount = formData.isCustom
    ? Number(formData.customAmount) || 0
    : formData.amount;

  const isFormValid =
    finalAmount > 0 &&
    formData.senderEmail.trim().length > 3 &&
    formData.senderEmail.includes("@") &&
    formData.termsAgreed &&
    formData.esignConsent &&
    formData.fullName.trim().length > 2 &&
    (!formData.sendToSomeoneElse ||
      (formData.recipientName.trim().length > 1 &&
        formData.recipientEmail.includes("@")));

  const handleBuy = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const randomCode =
        "TCS-" +
        Math.random().toString(36).substring(2, 6).toUpperCase() +
        "-" +
        Math.random().toString(36).substring(2, 6).toUpperCase() +
        "-2026";
      setGeneratedCode(randomCode);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div className="flex flex-col gap-4 pt-2">
      {/* BUY GIFT CARD BUTTON */}
      <button
        type="button"
        disabled={!isFormValid || isSubmitting}
        onClick={handleBuy}
        className={`w-full py-4 px-8 rounded-full text-sm sm:text-base font-black italic uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2.5 ${
          isFormValid
            ? "clay-hero-btn-yellow text-[#3d2400] cursor-pointer"
            : "clay-hero-btn-white text-slate-400 border border-white/80 cursor-not-allowed opacity-75"
        }`}
      >
        {isSubmitting ? (
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 border-2 border-[#3d2400] border-t-transparent rounded-full animate-spin" />
            <span>Processing Order...</span>
          </div>
        ) : (
          <>
            <Gift className="w-5 h-5 text-[#3d2400]" />
            <span>Buy Gift Card • ${finalAmount.toFixed(2)}</span>
          </>
        )}
      </button>

      {/* Validation Helper Hint if not valid */}
      {!isFormValid && (
        <p className="text-center text-[11px] font-semibold text-slate-500">
          Scroll and accept the Terms, sign your name, and complete required fields.
        </p>
      )}

      {/* Bottom Legal / Redemption Note */}
      <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-3 text-center text-xs text-slate-500 leading-relaxed">
        The code is emailed after payment and can be redeemed on the Review step of any order. Gift card terms are a placeholder — confirm with state law.
      </div>

      {/* Security & Processor Footnote */}
      <div className="flex items-center justify-center gap-4 text-[11px] font-bold text-slate-400 select-none">
        <span className="flex items-center gap-1">
          <Lock className="w-3 h-3 text-emerald-600" /> 256-Bit SSL Encrypted
        </span>
        <span>•</span>
        <span>Stripe Checkout</span>
        <span>•</span>
        <span>Zero Expiration Fees</span>
      </div>

      {/* Simulated Order Success Modal */}
      {isSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border-2 border-amber-300 flex flex-col items-center text-center gap-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 border-2 border-emerald-300 flex items-center justify-center text-emerald-600 shadow-md">
              <Check className="w-7 h-7" />
            </div>

            <h3 className="text-xl sm:text-2xl font-black italic tracking-wide text-slate-900">
              GIFT CARD CREATED!
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
              Your gift certificate for{" "}
              <strong className="text-slate-900">${finalAmount.toFixed(2)}</strong> has been generated and sent to{" "}
              <strong className="text-blue-600">
                {formData.sendToSomeoneElse ? formData.recipientEmail : formData.senderEmail}
              </strong>.
            </p>

            {/* Generated Code Display Box */}
            <div className="w-full bg-slate-900 text-amber-300 rounded-2xl p-4 border border-amber-400/40 shadow-inner flex flex-col items-center gap-1">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                Unique Redemption Code
              </span>
              <span className="font-mono text-lg sm:text-xl font-bold tracking-widest select-all">
                {generatedCode}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setIsSuccess(false)}
              className="mt-2 w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-colors cursor-pointer"
            >
              Done & Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
