"use client";

import React from "react";
import { ArrowLeft, ArrowRight, Check, Package, User, MapPin, Truck, ShieldCheck, Clock } from "lucide-react";
import { OrderState } from "./types";
import { getTierPrice, getTierName } from "./OrderSummarySidebar";

interface Step5ReviewProps {
  orderState: OrderState;
  onBack: () => void;
  onContinue: () => void;
}

export default function Step5Review({
  orderState,
  onBack,
  onContinue,
}: Step5ReviewProps) {
  const { cards, customerInfo, shipping, serviceType } = orderState;

  const cardServicesTotal = cards.reduce((sum, card) => {
    let price = getTierPrice(card.serviceTier, card.declaredValue);
    if (card.addOnCrackOut) price += 5;
    if (card.addOnHiResPhotos) price += 10;
    return sum + price;
  }, 0);

  const totalDeclaredValue = cards.reduce((sum, c) => sum + (Number(c.declaredValue) || 0), 0);
  const inboundCost = shipping.inboundOption === "prepaid_label" ? 15 : 0;
  const returnCost = shipping.returnOption === "express_tracked" ? 25 : 12;
  const insuranceCost = shipping.transitInsurance ? Math.max(5, Math.ceil(totalDeclaredValue / 100) * 1.5) : 0;
  const grandTotal = cardServicesTotal + inboundCost + returnCost + insuranceCost;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
          REVIEW YOUR ORDER
        </h2>
        <p className="text-slate-600 text-sm">
          Please confirm all cards, services, contact details, and shipping preferences before proceeding to terms sign-off.
        </p>
      </div>

      {/* Cards Breakdown Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
            <Package className="w-4 h-4 text-emerald-600" />
            <span>Cards Submitted ({cards.length})</span>
          </div>
          <span className="text-xs font-bold text-slate-500 uppercase">
            Service: {serviceType === "restoration" ? "Restoration" : "Pre-Grade Prep"}
          </span>
        </div>

        <div className="space-y-3">
          {cards.map((c, idx) => (
            <div
              key={c.id || idx}
              className="bg-slate-50 rounded-2xl p-4 border border-slate-200/70 flex flex-col sm:flex-row justify-between sm:items-center gap-3 text-xs"
            >
              <div className="space-y-1">
                <div className="font-bold text-slate-900 text-sm">
                  #{idx + 1} {c.cardName}
                </div>
                <div className="text-slate-600 flex flex-wrap gap-2">
                  <span><strong>Set:</strong> {c.setName || "N/A"}</span>
                  <span>•</span>
                  <span><strong>Year:</strong> {c.year || "N/A"}</span>
                  <span>•</span>
                  <span><strong>Game/Sport:</strong> {c.gameSport}</span>
                  <span>•</span>
                  <span><strong>Holder:</strong> {c.currentHolder}</span>
                </div>
                <div className="text-emerald-800 font-semibold">
                  {getTierName(c.serviceTier)}
                  {c.addOnCrackOut && " · +Crack-out"}
                  {c.addOnHiResPhotos && " · +Hi-Res Photos"}
                </div>
              </div>

              <div className="text-left sm:text-right border-t sm:border-0 pt-2 sm:pt-0">
                <div className="text-sm font-black text-slate-900">
                  ${(
                    getTierPrice(c.serviceTier, c.declaredValue) +
                    (c.addOnCrackOut ? 5 : 0) +
                    (c.addOnHiResPhotos ? 10 : 0)
                  ).toFixed(2)}
                </div>
                <div className="text-[11px] text-slate-500">
                  Declared: ${Number(c.declaredValue || 0).toFixed(2)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact & Shipping Summary Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Customer Address */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100 text-slate-900 font-bold text-sm">
            <User className="w-4 h-4 text-emerald-600" />
            <span>Customer & Return Address</span>
          </div>
          <div className="text-xs text-slate-700 space-y-1 leading-relaxed">
            <div className="font-bold text-slate-900 text-sm">{customerInfo.fullName}</div>
            <div>{customerInfo.email} · {customerInfo.phone}</div>
            <div className="pt-1 text-slate-600">
              {customerInfo.streetAddress} {customerInfo.apartmentSuite && `, ${customerInfo.apartmentSuite}`}
              <br />
              {customerInfo.city}, {customerInfo.state} {customerInfo.zipCode}
            </div>
          </div>
        </div>

        {/* Shipping Preferences */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm space-y-3">
          <div className="flex items-center gap-2 pb-2 border-b border-slate-100 text-slate-900 font-bold text-sm">
            <Truck className="w-4 h-4 text-emerald-600" />
            <span>Shipping & Transit Protection</span>
          </div>
          <div className="text-xs text-slate-700 space-y-2">
            <div>
              <span className="font-bold text-slate-900">Inbound: </span>
              <span>{shipping.inboundOption === "prepaid_label" ? "Prepaid Label ($15.00)" : "Self-Ship ($0.00)"}</span>
            </div>
            <div>
              <span className="font-bold text-slate-900">Return: </span>
              <span>{shipping.returnOption === "express_tracked" ? "Express Tracked ($25.00)" : "Standard Tracked ($12.00)"}</span>
            </div>
            <div>
              <span className="font-bold text-slate-900">Transit Insurance: </span>
              <span>{shipping.transitInsurance ? `Added ($${insuranceCost.toFixed(2)})` : "Declined"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Estimated Turnaround Time Callout */}
      <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200/80 flex items-center gap-3 text-xs sm:text-sm text-emerald-950 font-medium">
        <Clock className="w-5 h-5 text-emerald-600 flex-shrink-0" />
        <span>
          <strong>Estimated turnaround time:</strong> Turnaround clock starts on the business day your cards are checked into our Athens, GA office.
        </span>
      </div>

      {/* Final Cost Summary Table */}
      <div className="bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-sm space-y-3 text-sm">
        <div className="flex justify-between text-slate-700">
          <span>Card Services Subtotal:</span>
          <span className="font-bold text-slate-900">${cardServicesTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-slate-700">
          <span>Inbound Shipping:</span>
          <span className="font-semibold text-slate-900">${inboundCost.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-slate-700">
          <span>Return Tracked Shipping:</span>
          <span className="font-semibold text-slate-900">${returnCost.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-slate-700">
          <span>Transit Insurance Coverage:</span>
          <span className="font-semibold text-slate-900">${insuranceCost.toFixed(2)}</span>
        </div>
        <div className="border-t border-slate-200 pt-3 flex justify-between items-baseline">
          <span className="text-base font-black text-slate-900">ORDER TOTAL:</span>
          <span className="text-2xl font-black text-emerald-700">${grandTotal.toFixed(2)}</span>
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
          onClick={onContinue}
          className="clay-btn-gold px-8 py-3.5 rounded-full font-black text-amber-950 text-sm tracking-wide flex items-center gap-2 cursor-pointer shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          <span>CONTINUE TO SIGN</span>
          <ArrowRight className="w-4 h-4 stroke-[3]" />
        </button>
      </div>
    </div>
  );
}
