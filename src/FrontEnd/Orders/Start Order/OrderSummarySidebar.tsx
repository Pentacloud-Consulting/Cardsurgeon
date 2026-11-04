"use client";

import React from "react";
import { ShieldCheck, Package, RotateCcw, Info } from "lucide-react";
import { OrderState } from "./types";

interface OrderSummarySidebarProps {
  orderState: OrderState;
  onClearOrder: () => void;
}

export const getTierPrice = (tierId: string, declaredValue: number): number => {
  switch (tierId) {
    case "economy":
      return 50;
    case "standard":
      return 75;
    case "express":
      return 110;
    case "high_value":
      return Math.max(75, declaredValue * 0.03);
    case "super_saiyan":
      return Math.max(150, declaredValue * 0.05);
    case "light_speed":
      return 175;
    case "standard_pregrade":
      return declaredValue >= 1500 ? Math.max(25, declaredValue * 0.015) : 25;
    case "high_value_pregrade":
      return Math.max(25, declaredValue * 0.015);
    case "same_day_pregrade":
      return 30;
    default:
      return 50;
  }
};

export const getTierName = (tierId: string): string => {
  switch (tierId) {
    case "economy":
      return "Economy Restoration (30d)";
    case "standard":
      return "Standard Restoration (21–30d)";
    case "express":
      return "Express Restoration (10–14d)";
    case "high_value":
      return "High Value (3% DV)";
    case "super_saiyan":
      return "Super Saiyan (5% DV)";
    case "light_speed":
      return "Light Speed (5–8d)";
    case "standard_pregrade":
      return "Pre-Grade Prep Standard";
    case "high_value_pregrade":
      return "Pre-Grade Prep High Value (1.5%)";
    case "same_day_pregrade":
      return "Pre-Grade Prep Same Day";
    default:
      return "Restoration Service";
  }
};

export default function OrderSummarySidebar({
  orderState,
  onClearOrder,
}: OrderSummarySidebarProps) {
  const { cards, shipping } = orderState;

  // Calculate card services
  const cardServicesTotal = cards.reduce((sum, card) => {
    let price = getTierPrice(card.serviceTier, card.declaredValue);
    if (card.addOnCrackOut) price += 5;
    if (card.addOnHiResPhotos) price += 10;
    return sum + price;
  }, 0);

  const totalDeclaredValue = cards.reduce((sum, card) => sum + (Number(card.declaredValue) || 0), 0);

  // Inbound shipping
  const inboundCost = orderState.currentStep >= 4
    ? shipping.inboundOption === "prepaid_label"
      ? 15.00
      : 0.00
    : 0;

  // Return shipping
  const returnCost = orderState.currentStep >= 4
    ? shipping.returnOption === "express_tracked"
      ? 25.00
      : 12.00
    : 0;

  // Transit insurance (e.g., $1.50 per $100 declared value)
  const insuranceCost = orderState.currentStep >= 4 && shipping.transitInsurance
    ? Math.max(5, Math.ceil(totalDeclaredValue / 100) * 1.5)
    : 0;

  const totalCost = cardServicesTotal + (orderState.currentStep >= 4 ? inboundCost + returnCost + insuranceCost : 0);

  return (
    <aside className="w-full lg:w-84 xl:w-88 flex-shrink-0 lg:sticky lg:top-24 self-start z-20">
      <div className="bg-gradient-to-b from-[#ffffff] via-[#f8fbfe] to-[#edf4fc] rounded-[32px] p-6 sm:p-7 border-2 border-white shadow-[0_22px_44px_-10px_rgba(80,135,185,0.22),0_6px_16px_rgba(90,145,195,0.1),inset_0_3px_6px_rgba(255,255,255,1),inset_0_-5px_10px_rgba(160,195,230,0.35)] space-y-5 max-h-[calc(100vh-7rem)] overflow-y-auto no-scrollbar">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200/60">
          <div className="flex items-center gap-2">
            <Package className="w-5 h-5 text-emerald-600" />
            <h3 className="font-black text-slate-900 tracking-wide text-sm uppercase">
              Order Summary
            </h3>
          </div>
          {cards.length > 0 && (
            <button
              type="button"
              onClick={onClearOrder}
              className="text-xs text-rose-500 hover:text-rose-700 font-bold flex items-center gap-1 transition-colors px-2 py-1 rounded-lg hover:bg-rose-50"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Clear</span>
            </button>
          )}
        </div>

        {/* Itemized Card Breakdown */}
        <div className="space-y-3 text-sm">
          <div className="flex items-center justify-between text-slate-700 font-medium">
            <span>Card services:</span>
            <span className="font-bold text-slate-900">
              ${cardServicesTotal.toFixed(2)}
            </span>
          </div>

          {cards.length > 0 && (
            <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
              {cards.map((c, idx) => (
                <div key={c.id || idx} className="bg-white/90 rounded-2xl p-3 border border-white shadow-[0_3px_8px_rgba(90,140,185,0.06),inset_0_1px_2px_rgba(255,255,255,0.98)] flex justify-between items-start gap-2">
                  <div className="truncate">
                    <span className="font-bold text-slate-800">#{idx + 1} {c.cardName || "Untitled Card"}</span>
                    <div className="text-[11px] text-slate-500">
                      {getTierName(c.serviceTier)}
                    </div>
                    {(c.addOnCrackOut || c.addOnHiResPhotos) && (
                      <div className="text-[10px] text-emerald-700 font-semibold">
                        {c.addOnCrackOut && "+ Crack-out ($5) "}
                        {c.addOnHiResPhotos && "+ Photos ($10)"}
                      </div>
                    )}
                  </div>
                  <span className="font-black text-slate-800 flex-shrink-0">
                    ${(
                      getTierPrice(c.serviceTier, c.declaredValue) +
                      (c.addOnCrackOut ? 5 : 0) +
                      (c.addOnHiResPhotos ? 10 : 0)
                    ).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Shipping Row */}
          <div className="flex items-center justify-between text-slate-700 font-medium">
            <span>Shipping:</span>
            <span className="font-bold text-slate-800">
              {orderState.currentStep >= 4 ? `$${(inboundCost + returnCost).toFixed(2)}` : "At step 4"}
            </span>
          </div>

          {/* Insurance Row */}
          <div className="flex items-center justify-between text-slate-700 font-medium">
            <span>Transit insurance:</span>
            <span className="font-bold text-slate-800">
              {orderState.currentStep >= 4 
                ? insuranceCost > 0 ? `$${insuranceCost.toFixed(2)}` : "Declined" 
                : "Optional"}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-dashed border-slate-200 pt-4">
          <div className="flex items-baseline justify-between mb-2">
            <span className="text-base font-black text-slate-900 tracking-tight">TOTAL:</span>
            <span className="text-2xl font-black text-emerald-700 drop-shadow-xs">
              ${totalCost.toFixed(2)}
            </span>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
            <span>{cards.length} card(s)</span>
            <span>Declared: ${totalDeclaredValue.toFixed(2)}</span>
          </div>
        </div>

        {/* Draft Notice */}
        <div className="bg-gradient-to-b from-[#fffbeb] to-[#fef3c7] rounded-2xl p-3.5 border border-amber-300/80 shadow-[0_4px_12px_rgba(245,158,11,0.12),inset_0_2px_3px_rgba(255,255,255,0.95),inset_0_-2px_4px_rgba(217,119,6,0.15)] flex items-start gap-2.5 text-xs text-amber-950 leading-relaxed">
          <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <span>
            <strong>Evaluation on arrival:</strong> Pricing and turnaround depend on physical card inspection at TCS Athens, GA.
          </span>
        </div>

        {/* Security badge */}
        <div className="pt-2 flex items-center justify-center gap-1.5 text-[11px] text-slate-500 font-medium">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>TCS Insured Facility · Georgia, USA</span>
        </div>
      </div>
    </aside>
  );
}
