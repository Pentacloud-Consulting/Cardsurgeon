"use client";

import React from "react";
import { ArrowLeft, ArrowRight, PenTool, CheckCircle, FileText, ShieldAlert } from "lucide-react";
import { OrderState } from "./types";

interface Step6SignProps {
  orderState: OrderState;
  onUpdateSignature: (sig: { fullName: string; acceptedTerms: boolean }) => void;
  onBack: () => void;
  onContinue: () => void;
}

export default function Step6Sign({
  orderState,
  onUpdateSignature,
  onBack,
  onContinue,
}: Step6SignProps) {
  const { signature, customerInfo } = orderState;

  const isValid = signature.acceptedTerms && signature.fullName.trim().length >= 3;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
          TERMS & ELECTRONIC SIGNATURE
        </h2>
        <p className="text-slate-600 text-sm">
          Please review the Terms of Service, liability limits, and provide your electronic signature.
        </p>
      </div>

      {/* Terms Scrollbox */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-4">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100 text-slate-900 font-bold text-sm">
          <FileText className="w-4 h-4 text-emerald-600" />
          <span>The Card Surgeon — Service Terms & Conditions (§8 & §9)</span>
        </div>

        <div className="h-56 overflow-y-auto p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-700 space-y-3 leading-relaxed">
          <p>
            <strong>§8A Included & Excluded Restoration:</strong> The Card Surgeon provides physical restorative treatments including crease reduction, dent minimization, edge/corner lifts, and surface polishing. We strictly do NOT provide color retouching, trimming, or whitening concealment. Cards submitted containing excluded defects will be returned without treatment. Shipping is non-refundable.
          </p>
          <p>
            <strong>§8B.6 Care, Custody & Liability Limitation:</strong> While your collectibles are in our physical possession at our Athens, GA studio, damage is exceptionally rare. In the event of documented in-house loss or damage directly caused by gross negligence, liability is strictly limited to the declared value listed on this submission form or actual market replacement cost, whichever is lower.
          </p>
          <p>
            <strong>Transit & Carrier Policy:</strong> The Card Surgeon is not an insurer or carrier. We hold zero liability for lost, stolen, delayed, or damaged packages while in carrier transit. Transit insurance purchased at checkout provides direct coverage through third-party logistics underwriters.
          </p>
          <p>
            <strong>No Grade Guarantee:</strong> Pre-grade estimates and restorative work represent professional collector opinions only and do not constitute a guarantee of any numerical grade from PSA, BGS, CGC, or SGC.
          </p>
          <p>
            <strong>Governing Law:</strong> All transactions, submissions, and disputes are governed exclusively under the laws of the State of Georgia, USA.
          </p>
        </div>

        {/* Checkbox */}
        <label className="flex items-start gap-3 cursor-pointer select-none pt-2">
          <input
            type="checkbox"
            checked={signature.acceptedTerms}
            onChange={(e) => onUpdateSignature({ ...signature, acceptedTerms: e.target.checked })}
            className="mt-1 w-5 h-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
          />
          <div className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
            <strong>I acknowledge and accept the full Card Surgeon Terms & Conditions.</strong>{" "}
            I understand that results vary by card, no third-party grade is promised, and liability is capped at declared value.
          </div>
        </label>
      </div>

      {/* Electronic Signature Input Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-4">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-100 text-slate-900 font-bold text-sm">
          <PenTool className="w-4 h-4 text-emerald-600" />
          <span>Electronic Signature</span>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
            Type Your Full Legal Name to Sign *
          </label>
          <input
            type="text"
            placeholder={customerInfo.fullName || "Full Legal Name"}
            value={signature.fullName}
            onChange={(e) => onUpdateSignature({ ...signature, fullName: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-base font-serif italic text-slate-900 bg-slate-50/50"
          />
          <span className="text-[11px] text-slate-500 mt-1 block">
            By typing your name, you certify this acts as your legally binding electronic signature under the U.S. Electronic Signatures in Global and National Commerce Act (E-SIGN).
          </span>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
          <span>Date: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
          <span>Location: Athens, GA Server Time</span>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="pt-4 flex items-center justify-between border-t border-slate-200">
        <button
          type="button"
          onClick={onBack}
          className="bg-white hover:bg-slate-100 text-slate-700 font-bold px-6 py-3 rounded-full text-sm border border-slate-300 shadow-sm flex items-center gap-2 cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <button
          type="button"
          disabled={!isValid}
          onClick={onContinue}
          className={`px-8 py-3.5 rounded-full font-black text-sm tracking-wide flex items-center gap-2 transition-all ${
            isValid
              ? "clay-btn-gold text-amber-950 cursor-pointer shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              : "bg-slate-200 text-slate-400 cursor-not-allowed border border-slate-300"
          }`}
        >
          <span>PROCEED TO PAYMENT</span>
          <ArrowRight className="w-4 h-4 stroke-[3]" />
        </button>
      </div>
    </div>
  );
}
