"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Check, ShieldCheck, ExternalLink, ArrowDownCircle, CheckCircle2 } from "lucide-react";
import { GiftFormData } from "./types";

interface GiftTermsAgreementProps {
  formData: GiftFormData;
  setFormData: React.Dispatch<React.SetStateAction<GiftFormData>>;
}

export default function GiftTermsAgreement({
  formData,
  setFormData,
}: GiftTermsAgreementProps) {
  const termsContainerRef = useRef<HTMLDivElement>(null);

  // Handle scroll detection in terms box
  const handleTermsScroll = () => {
    if (!termsContainerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = termsContainerRef.current;
    if (scrollTop + clientHeight >= scrollHeight - 35) {
      if (!formData.termsScrolled) {
        setFormData((prev) => ({ ...prev, termsScrolled: true }));
      }
    }
  };

  const handleUnlockTerms = () => {
    if (termsContainerRef.current) {
      termsContainerRef.current.scrollTo({
        top: termsContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
    setFormData((prev) => ({ ...prev, termsScrolled: true }));
  };

  return (
    <div className="flex flex-col gap-5 pt-3 border-t border-slate-200">
      {/* Terms Header Row */}
      <div className="flex items-center justify-between">
        <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-800">
          Terms of Service v0.14-DRAFT
        </h4>
        <Link
          href="/terms"
          target="_blank"
          className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 hover:underline"
        >
          <span>Open full Terms page</span>
          <ExternalLink className="w-3 h-3" />
        </Link>
      </div>

      {/* Scrollable Terms Box */}
      <div className="relative rounded-2xl border-2 border-slate-300 bg-slate-50/70 p-1">
        <div
          ref={termsContainerRef}
          onScroll={handleTermsScroll}
          className="h-44 sm:h-48 overflow-y-auto p-4 text-[11px] sm:text-xs text-slate-600 font-medium leading-relaxed space-y-3.5 scroll-smooth"
        >
          <div className="font-black italic uppercase text-slate-900 text-xs sm:text-sm border-b pb-1.5">
            1. ACCEPTANCE OF THESE TERMS
          </div>
          <p>
            By placing an order with The Card Surgeon LLC, a Georgia limited liability company (&quot;The Card Surgeon&quot; or the &quot;Shop&quot;), browsing this website, or clicking that you agree at checkout, you accept these Terms of Service (&quot;Terms&quot;). If you do not agree, do not place an order or use our services. We may update these Terms from time to time; the version shown at checkout (v0.14-DRAFT) is the one that applies to that order.
          </p>

          <div className="font-black italic uppercase text-slate-900 text-xs sm:text-sm border-b pb-1.5 pt-2">
            2. SCOPE OF WORK
          </div>
          <p>
            We provide trading-card restoration and Pre-Grade Prep, our &quot;Get Your Estimated Grade&quot; photo service, plus related shop products and gift cards, as described on this site and in your order summary. Restoration means cosmetic and surface work described in Section 8A; work not described there is not included. Pre-Grade Prep is a condition assessment, a surface clean, a penny sleeve, and a semi-rigid holder. It does not include crease work, dent removal, edge or corner work, or any other restorative work.
          </p>

          <div className="font-black italic uppercase text-slate-900 text-xs sm:text-sm border-b pb-1.5 pt-2">
            2A. GET YOUR ESTIMATED GRADE AND PRE-GRADE OPINIONS
          </div>
          <p>
            Photo pre-grades are an estimate only. They can&apos;t replace an in-person pre-grade, and photos only show so much detail. Pre-grades are estimates, not guarantees of any grade or value, and nothing here is financial advice. We do not guarantee or promise grades. No guarantee of a third-party grade. We can&apos;t guarantee that any third-party grading company would assign the same grade as an Estimated Grade.
          </p>

          <div className="font-black italic uppercase text-slate-900 text-xs sm:text-sm border-b pb-1.5 pt-2">
            2B. THIRD-PARTY MARKET ESTIMATES
          </div>
          <p>
            Card Ladder figures shown at checkout, in your collection, and on My account are third-party market data. They are not an appraisal by The Card Surgeon, not your declared value, and not a grade.
          </p>

          <div className="font-black italic uppercase text-slate-900 text-xs sm:text-sm border-b pb-1.5 pt-2">
            3. WHO MAY ORDER
          </div>
          <p>
            You must be able to form a binding contract in your place of residence and have authority to bind the ordering party. Services and shipping described on this site are intended for the United States unless expressly agreed otherwise in writing.
          </p>

          <div className="font-black italic uppercase text-slate-900 text-xs sm:text-sm border-b pb-1.5 pt-2">
            4. DECLARED VALUES AND LIABILITY
          </div>
          <p>
            You must enter a good-faith declared value for each card. To the fullest extent allowed by law, if a card is damaged while in our care, our liability is limited to the declared value for that card on the submission form, subject to Section 8B.6.
          </p>

          <div className="font-black italic uppercase text-slate-900 text-xs sm:text-sm border-b pb-1.5 pt-2">
            5. SHIPPING, TRANSIT RISK, AND INSURANCE
          </div>
          <p>
            You choose either a prepaid two-way label or ship cards yourself. We hold no liability for collectibles while in transit to or from our facility. Optional shipping insurance purchased at checkout is subject solely to the carrier&apos;s terms.
          </p>

          <div className="font-black italic uppercase text-slate-900 text-xs sm:text-sm border-b pb-1.5 pt-2">
            8A. WHAT RESTORATION INCLUDES AND DOES NOT INCLUDE
          </div>
          <p>
            <strong>8A.1 Included:</strong> light creases, dents, edge lifts, corner lifts, surface scratches, and hazes. <strong>8A.2 Excluded:</strong> whitening repair, recoloring, trimming/cutting, severe creases. Cards submitted for excluded work are subject to Return on Arrival.
          </p>

          <div className="font-black italic uppercase text-slate-900 text-xs sm:text-sm border-b pb-1.5 pt-2">
            8B. SHIPPING, HANDLING AND RISK OF LOSS
          </div>
          <p>
            We handle cards with reasonable care. To the fullest extent allowed by law, our total liability for loss of or damage to a card while in our shop is limited to the declared value. High-value cards over $10,000 require prior approval before shipment.
          </p>

          <div className="font-black italic uppercase text-slate-900 text-xs sm:text-sm border-b pb-1.5 pt-2">
            9. REFUNDS, CANCELLATIONS, AND GIFT CARDS
          </div>
          <p>
            Gift cards are non-refundable and cannot be exchanged for cash except where required by law. Gift card balances can be used toward eligible purchases on our website until depleted. We do not charge inactivity or maintenance fees that reduce balances. Lost or stolen codes cannot be replaced.
          </p>

          <div className="font-black italic uppercase text-slate-900 text-xs sm:text-sm border-b pb-1.5 pt-2">
            14. DISPUTES AND BINDING ARBITRATION
          </div>
          <p>
            Disputes will be resolved only by binding individual arbitration administered by the American Arbitration Association (AAA), not in court. You and we waive class actions. You may opt out within 30 days by emailing admin@thecardsurgeon.com.
          </p>

          <div className="font-black italic uppercase text-slate-900 text-xs sm:text-sm border-b pb-1.5 pt-2">
            16. CONTACT
          </div>
          <p>
            The Card Surgeon LLC, 1860 Barnett Shoals Rd Ste 103, Athens, GA 30605. Email: admin@thecardsurgeon.com. Version: 0.14-DRAFT.
          </p>
          <div className="text-center font-bold text-slate-400 py-1">
            — End of Terms v0.14-DRAFT —
          </div>
        </div>

        {/* Scroll status helper indicator */}
        <div className="px-3 py-1.5 border-t border-slate-200/80 bg-white/90 flex items-center justify-between text-[11px] rounded-b-xl">
          {formData.termsScrolled ? (
            <span className="text-emerald-700 font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Terms reviewed — checkboxes unlocked
            </span>
          ) : (
            <span className="text-red-600 font-bold flex items-center gap-1.5">
              <ArrowDownCircle className="w-3.5 h-3.5 text-red-500 animate-bounce" />
              Scroll the Terms to unlock the checkboxes
            </span>
          )}

          {!formData.termsScrolled && (
            <button
              type="button"
              onClick={handleUnlockTerms}
              className="text-[11px] font-bold text-blue-600 hover:text-blue-800 underline cursor-pointer"
            >
              Skip to bottom & unlock
            </button>
          )}
        </div>
      </div>

      {/* Key Terms at Checkout Box */}
      <div className="rounded-2xl border-2 border-slate-900/10 bg-white p-4 shadow-sm flex flex-col gap-2.5">
        <h5 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-amber-500" />
          Key terms at checkout
        </h5>
        <ul className="text-xs text-slate-600 font-medium space-y-1.5 pl-1">
          <li className="flex items-start gap-1.5">
            <span className="text-slate-400 font-black">•</span>
            <span>
              <strong className="text-slate-800">Estimates, not guarantees.</strong> Pre-Grades and Estimated Grades are our opinion. We don&apos;t guarantee any grade or value (Terms §2A).
            </span>
          </li>
          <li className="flex items-start gap-1.5">
            <span className="text-slate-400 font-black">•</span>
            <span>
              <strong className="text-slate-800">Shipping and risk of loss.</strong> Your cards travel at your risk, to us and back to you. We are not liable for loss or damage in shipping. Our liability for a card in our shop is limited to declared value. Single cards over $10,000 need approval (Terms §§4, 5 and 8B).
            </span>
          </li>
          <li className="flex items-start gap-1.5">
            <span className="text-slate-400 font-black">•</span>
            <span>
              <strong className="text-slate-800">Insurance is your choice.</strong> We recommend declared-value or shipping insurance, and signature delivery where available (Terms §8B).
            </span>
          </li>
          <li className="flex items-start gap-1.5">
            <span className="text-slate-400 font-black">•</span>
            <span>
              <strong className="text-slate-800">Some charges are non-refundable.</strong> Shipping is not refundable, and service fees generally aren&apos;t once we receive cards or start work, except as stated in Terms §§8A and 9.
            </span>
          </li>
          <li className="flex items-start gap-1.5">
            <span className="text-slate-400 font-black">•</span>
            <span>
              <strong className="text-slate-800">Arbitration and class waiver.</strong> Disputes go to binding individual arbitration, not court, and you give up class actions. You can opt out within 30 days (Terms §14).
            </span>
          </li>
        </ul>
      </div>

      <p className="text-[11px] text-slate-500 italic">
        By checking the box below, you agree to the full Terms of Service v0.14-DRAFT shown above and at thecardsurgeon.com/terms. The summary above is for convenience. The full Terms control.
      </p>

      {/* Checkbox 1: Terms Agreement */}
      <label
        className={`flex items-start gap-2.5 cursor-pointer select-none ${
          !formData.termsScrolled ? "opacity-60 cursor-not-allowed" : ""
        }`}
      >
        <input
          type="checkbox"
          disabled={!formData.termsScrolled}
          checked={formData.termsAgreed}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, termsAgreed: e.target.checked }))
          }
          className="w-4 h-4 rounded border-2 border-slate-300 text-blue-600 focus:ring-blue-500 mt-0.5 cursor-pointer disabled:cursor-not-allowed"
        />
        <span className="text-xs font-semibold text-slate-700 leading-snug">
          I have read and agree to the Terms of Service (version 0.14-DRAFT), including Shipping, Handling and Risk of Loss (§8B) and the agreement to binding individual arbitration and class-action waiver (§14). I can opt out of arbitration within 30 days by emailing admin@thecardsurgeon.com. <span className="text-red-500">*</span>
        </span>
      </label>

      {/* Checkbox 2: E-Sign Consent */}
      <label
        className={`flex items-start gap-2.5 cursor-pointer select-none ${
          !formData.termsScrolled ? "opacity-60 cursor-not-allowed" : ""
        }`}
      >
        <input
          type="checkbox"
          disabled={!formData.termsScrolled}
          checked={formData.esignConsent}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, esignConsent: e.target.checked }))
          }
          className="w-4 h-4 rounded border-2 border-slate-300 text-blue-600 focus:ring-blue-500 mt-0.5 cursor-pointer disabled:cursor-not-allowed"
        />
        <span className="text-xs font-semibold text-slate-700 leading-snug">
          I consent to use electronic records and signatures for this order. <span className="text-red-500">*</span>
        </span>
      </label>

      {/* Full Legal Name (Electronic Signature) */}
      <div>
        <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
          Full legal name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          required
          placeholder="First and Last Legal Name"
          value={formData.fullName}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, fullName: e.target.value }))
          }
          className="w-full px-4 py-2.5 rounded-xl text-sm font-medium bg-white border-2 border-slate-300 focus:border-slate-800 focus:ring-1 focus:ring-slate-800 outline-none transition-all shadow-sm"
        />
        <p className="mt-1 text-[11px] text-slate-500">
          Typing your name is your electronic signature. We record the signing time and IP on the server.
        </p>
      </div>

      {/* Optional Checkbox 3: Social Media Opt-Out */}
      <div className="p-3.5 rounded-2xl border-2 border-slate-200 bg-white shadow-sm">
        <label className="flex items-start gap-2.5 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={formData.dontFeatureCards}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                dontFeatureCards: e.target.checked,
              }))
            }
            className="w-4 h-4 rounded border-2 border-slate-300 text-slate-700 focus:ring-slate-500 mt-0.5 cursor-pointer"
          />
          <div className="flex flex-col">
            <span className="text-xs sm:text-[13px] font-bold text-slate-800">
              Don&apos;t feature my cards on The Card Surgeon social media
            </span>
            <span className="text-[11px] text-slate-500">
              Optional. Saved on this order only. It does not change the price.
            </span>
          </div>
        </label>
      </div>
    </div>
  );
}
