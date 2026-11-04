"use client";

import React from "react";
import { ArrowLeft, ArrowRight, Truck, Mail, ShieldAlert, CheckCircle2, ShieldCheck, MapPin } from "lucide-react";
import { ShippingDetails, InboundShippingOption, ReturnShippingOption } from "./types";

interface Step4ShippingProps {
  shipping: ShippingDetails;
  totalDeclaredValue: number;
  onUpdateShipping: (updated: Partial<ShippingDetails>) => void;
  onBack: () => void;
  onContinue: () => void;
}

export default function Step4Shipping({
  shipping,
  totalDeclaredValue,
  onUpdateShipping,
  onBack,
  onContinue,
}: Step4ShippingProps) {
  const insuranceFee = Math.max(5, Math.ceil(totalDeclaredValue / 100) * 1.5);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
          SHIPPING & TRANSIT OPTIONS
        </h2>
        <p className="text-slate-600 text-sm">
          Choose how you will send your cards to our facility and how you'd like them returned when completed.
        </p>
      </div>

      {/* Inbound Shipping Section */}
      <div className="space-y-4">
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
          1. Inbound Shipping (To Our Athens, GA Facility)
        </label>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Prepaid Label */}
          <div
            onClick={() => onUpdateShipping({ inboundOption: "prepaid_label" })}
            className={`p-6 rounded-[28px] border-2 cursor-pointer transition-all ${
              shipping.inboundOption === "prepaid_label"
                ? "bg-gradient-to-b from-[#f0fdf4] to-[#dcfce7] border-emerald-500 shadow-[0_12px_24px_-4px_rgba(16,185,129,0.32),inset_0_2px_4px_rgba(255,255,255,0.98),inset_0_-2px_4px_rgba(5,150,105,0.22)] scale-[1.01]"
                : "bg-gradient-to-b from-white to-[#f4f8fe] border-white shadow-[0_8px_20px_rgba(90,140,185,0.1),inset_0_2px_3px_rgba(255,255,255,0.95)] hover:border-slate-200"
            }`}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-emerald-600" />
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                  Prepaid 2-Way Shipping Label
                </h4>
              </div>
              <span className="font-black text-emerald-700 text-sm">$15.00</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              We email you a fully tracked, insured shipping label addressed directly to TCS Athens, GA. Just print, adhere to your box, and drop off.
            </p>
          </div>

          {/* Self Ship */}
          <div
            onClick={() => onUpdateShipping({ inboundOption: "self_ship" })}
            className={`p-6 rounded-[28px] border-2 cursor-pointer transition-all ${
              shipping.inboundOption === "self_ship"
                ? "bg-gradient-to-b from-[#f0fdf4] to-[#dcfce7] border-emerald-500 shadow-[0_12px_24px_-4px_rgba(16,185,129,0.32),inset_0_2px_4px_rgba(255,255,255,0.98),inset_0_-2px_4px_rgba(5,150,105,0.22)] scale-[1.01]"
                : "bg-gradient-to-b from-white to-[#f4f8fe] border-white shadow-[0_8px_20px_rgba(90,140,185,0.1),inset_0_2px_3px_rgba(255,255,255,0.95)] hover:border-slate-200"
            }`}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-slate-700" />
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                  I will ship cards myself
                </h4>
              </div>
              <span className="font-black text-slate-500 text-sm">$0.00</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Ship with your carrier of choice (USPS, FedEx, UPS). You must provide tracking and insert your order packing slip inside the package.
            </p>
          </div>
        </div>

        {/* Shipping address reminder */}
        <div className="bg-gradient-to-b from-white to-[#f4f8fe] rounded-2xl p-4 border border-white shadow-[0_4px_12px_rgba(90,140,185,0.08),inset_0_1px_2px_rgba(255,255,255,0.95)] text-xs text-slate-700 flex items-start gap-2.5">
          <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-slate-900">Destination Address: </span>
            <span>TCS, 1860 Barnett Shoals Rd Ste 103, Athens, GA 30605 · (706) 765-4280</span>
          </div>
        </div>
      </div>

      {/* Return Shipping Section */}
      <div className="space-y-4">
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
          2. Return Shipping (Back To You)
        </label>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            onClick={() => onUpdateShipping({ returnOption: "standard_tracked" })}
            className={`p-6 rounded-[28px] border-2 cursor-pointer transition-all ${
              shipping.returnOption === "standard_tracked"
                ? "bg-gradient-to-b from-[#f0fdf4] to-[#dcfce7] border-emerald-500 shadow-[0_12px_24px_-4px_rgba(16,185,129,0.32),inset_0_2px_4px_rgba(255,255,255,0.98),inset_0_-2px_4px_rgba(5,150,105,0.22)] scale-[1.01]"
                : "bg-gradient-to-b from-white to-[#f4f8fe] border-white shadow-[0_8px_20px_rgba(90,140,185,0.1),inset_0_2px_3px_rgba(255,255,255,0.95)] hover:border-slate-200"
            }`}
          >
            <div className="flex items-start justify-between mb-2">
              <span className="font-bold text-slate-900 text-sm sm:text-base">
                Standard Tracked Return
              </span>
              <span className="font-black text-emerald-700 text-sm">$12.00</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              USPS Priority Mail with tracking (3–5 business days transit). Rigid protective packaging included.
            </p>
          </div>

          <div
            onClick={() => onUpdateShipping({ returnOption: "express_tracked" })}
            className={`p-6 rounded-[28px] border-2 cursor-pointer transition-all ${
              shipping.returnOption === "express_tracked"
                ? "bg-gradient-to-b from-[#f0fdf4] to-[#dcfce7] border-emerald-500 shadow-[0_12px_24px_-4px_rgba(16,185,129,0.32),inset_0_2px_4px_rgba(255,255,255,0.98),inset_0_-2px_4px_rgba(5,150,105,0.22)] scale-[1.01]"
                : "bg-gradient-to-b from-white to-[#f4f8fe] border-white shadow-[0_8px_20px_rgba(90,140,185,0.1),inset_0_2px_3px_rgba(255,255,255,0.95)] hover:border-slate-200"
            }`}
          >
            <div className="flex items-start justify-between mb-2">
              <span className="font-bold text-slate-900 text-sm sm:text-base">
                Express Tracked Return
              </span>
              <span className="font-black text-emerald-700 text-sm">$25.00</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              UPS 2nd Day Air / USPS Priority Express with signature confirmation (1–2 business days transit).
            </p>
          </div>
        </div>
      </div>

      {/* Transit Insurance Section */}
      <div className="bg-gradient-to-b from-[#ffffff] via-[#f7fbfd] to-[#edf4fc] rounded-[30px] p-6 sm:p-7 border-2 border-white shadow-[0_18px_36px_-6px_rgba(90,140,185,0.18),inset_0_3px_5px_rgba(255,255,255,0.98),inset_0_-3px_6px_rgba(160,190,225,0.3)] space-y-4">
        <label className="flex items-start gap-3.5 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={shipping.transitInsurance}
            onChange={(e) => onUpdateShipping({ transitInsurance: e.target.checked })}
            className="mt-1 w-5 h-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
          />
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span className="font-bold text-slate-900 text-sm sm:text-base">
                Add Transit Insurance (+${insuranceFee.toFixed(2)})
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Provides full carrier loss, theft, and damage protection covering your cards up to their declared value (${totalDeclaredValue.toFixed(2)}) during inbound and return transit.
            </p>
          </div>
        </label>

        <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200/70 text-xs text-amber-900 leading-relaxed flex items-start gap-2">
          <ShieldAlert className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <span>
            <strong>Carrier Liability Terms:</strong> We hold no liability for cards or collectibles while in transit to us or after they leave our facility. If you decline transit insurance, claims for lost or stolen packages must be handled directly with the carrier under standard carrier limits.
          </span>
        </div>
      </div>

      {/* Navigation Buttons */}
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
          onClick={onContinue}
          className="clay-btn-gold px-8 py-3.5 rounded-full font-black text-amber-950 text-sm tracking-wide flex items-center gap-2 cursor-pointer shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          <span>CONTINUE TO REVIEW</span>
          <ArrowRight className="w-4 h-4 stroke-[3]" />
        </button>
      </div>
    </div>
  );
}
