"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CreditCard,
  Lock,
  CheckCircle2,
  Printer,
  Package,
  MapPin,
  ArrowLeft,
  Tag,
  ShieldCheck,
  Download,
} from "lucide-react";
import { OrderState } from "./types";
import { getTierPrice } from "./OrderSummarySidebar";

interface Step7PayProps {
  orderState: OrderState;
  onBack: () => void;
  onCompleteOrder: (orderNum: string) => void;
}

export default function Step7Pay({
  orderState,
  onBack,
  onCompleteOrder,
}: Step7PayProps) {
  const { cards, shipping, customerInfo, signature, isCompleted, orderNumber } = orderState;

  const [creatorCode, setCreatorCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Form fields
  const [cardNumber, setCardNumber] = useState("•••• •••• •••• 4242");
  const [expiry, setExpiry] = useState("12/28");
  const [cvc, setCvc] = useState("888");
  const [postal, setPostal] = useState(customerInfo.zipCode || "30605");

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
  const subTotal = cardServicesTotal + inboundCost + returnCost + insuranceCost;
  const discountAmount = discountApplied ? subTotal * 0.1 : 0; // 10% creator discount
  const finalTotal = Math.max(0, subTotal - discountAmount);

  const handleApplyCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (creatorCode.trim().length > 0) {
      setDiscountApplied(true);
    }
  };

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      const generatedOrder = `TCS-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
      setIsProcessing(false);
      onCompleteOrder(generatedOrder);
    }, 1500);
  };

  // SUCCESS SCREEN
  if (isCompleted && orderNumber) {
    return (
      <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-emerald-500 shadow-[0_20px_50px_rgba(5,150,105,0.15)] text-center space-y-8 animate-fade-in">
        <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/30">
          <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80">
            Order Submitted & Confirmed
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
            Thank You, {customerInfo.fullName || "Collector"}!
          </h2>
          <p className="text-slate-600 text-sm max-w-md mx-auto">
            Your submission has been created. A confirmation receipt and instructions have been emailed to{" "}
            <strong className="text-slate-900">{customerInfo.email}</strong>.
          </p>
        </div>

        {/* Order Number Medallion */}
        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 max-w-sm mx-auto">
          <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">
            Your Order Tracking ID
          </div>
          <div className="text-2xl font-mono font-black text-emerald-800 tracking-wider">
            {orderNumber}
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-emerald-50/60 rounded-3xl p-6 border border-emerald-200/80 text-left space-y-4 max-w-lg mx-auto text-xs sm:text-sm text-slate-800">
          <div className="font-bold text-emerald-950 text-sm flex items-center gap-2">
            <Package className="w-4 h-4 text-emerald-600" />
            <span>Next Steps for Shipping:</span>
          </div>

          <ol className="space-y-2.5 list-decimal list-inside text-slate-700 font-medium">
            <li>
              Print your order packing slip and place it inside your parcel.
            </li>
            <li>
              Place cards inside penny sleeves and rigid toploaders or semi-rigid cardsavers with cardboard bumpers.
            </li>
            <li>
              Ship package to our central receiving lab:
              <div className="mt-1.5 p-2.5 bg-white rounded-xl border border-emerald-200 font-mono text-xs text-slate-900 font-bold">
                TCS (The Card Surgeon)<br />
                1860 Barnett Shoals Rd Ste 103<br />
                Athens, GA 30605<br />
                (706) 765-4280
              </div>
            </li>
            {shipping.inboundOption === "prepaid_label" && (
              <li className="text-emerald-900 font-semibold">
                Your prepaid shipping label is ready in your email. Attach it to your box.
              </li>
            )}
          </ol>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => window.print()}
            className="bg-white hover:bg-slate-50 text-slate-800 font-bold px-6 py-3 rounded-full text-xs sm:text-sm border border-slate-300 shadow-sm flex items-center gap-2 transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4 text-slate-600" />
            <span>Print Packing Slip</span>
          </button>

          <Link
            href="/track-order"
            className="clay-btn-gold px-7 py-3 rounded-full font-black text-amber-950 text-xs sm:text-sm tracking-wide shadow-md hover:scale-[1.02] transition-transform flex items-center gap-2"
          >
            <Package className="w-4 h-4" />
            <span>Track This Order</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
          PAYMENT & SUBMISSION
        </h2>
        <p className="text-slate-600 text-sm">
          Encrypted 256-bit SSL transaction. No charge is finalized until your cards arrive at TCS Athens, GA.
        </p>
      </div>

      {/* Creator Code box */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm">
        <form onSubmit={handleApplyCode} className="flex flex-col sm:flex-row gap-3 items-center">
          <div className="relative flex-1 w-full">
            <Tag className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Have a Creator or Promo Code?"
              value={creatorCode}
              onChange={(e) => setCreatorCode(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm uppercase tracking-wider text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-colors cursor-pointer"
          >
            Apply Code
          </button>
        </form>

        {discountApplied && (
          <div className="mt-2 text-xs text-emerald-700 font-bold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Creator Code Applied! (10% partner discount activated)
          </div>
        )}
      </div>

      {/* Payment Card Form */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
            <CreditCard className="w-4 h-4 text-emerald-600" />
            <span>Credit or Debit Card</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
            <Lock className="w-3.5 h-3.5 text-emerald-600" />
            <span>Secure 256-Bit SSL</span>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Card Number
            </label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono text-sm text-slate-900 bg-slate-50/50"
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Expires
              </label>
              <input
                type="text"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono text-sm text-slate-900 bg-slate-50/50 text-center"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                CVC
              </label>
              <input
                type="text"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono text-sm text-slate-900 bg-slate-50/50 text-center"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Postal Code
              </label>
              <input
                type="text"
                value={postal}
                onChange={(e) => setPostal(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono text-sm text-slate-900 bg-slate-50/50 text-center"
              />
            </div>
          </div>
        </div>

        {/* Amount to be billed */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-sm">
          <span className="font-bold text-slate-700">Total Billed:</span>
          <div className="text-right">
            {discountApplied && (
              <span className="text-xs text-rose-500 line-through mr-2 font-bold">
                ${subTotal.toFixed(2)}
              </span>
            )}
            <span className="text-xl font-black text-emerald-700">
              ${finalTotal.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* Navigation & Submit Buttons */}
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
          disabled={isProcessing}
          onClick={handlePayment}
          className="clay-btn-gold px-8 py-3.5 rounded-full font-black text-amber-950 text-sm tracking-wide flex items-center gap-2 cursor-pointer shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-60"
        >
          {isProcessing ? (
            <span>PROCESSING SUBMISSION...</span>
          ) : (
            <>
              <Lock className="w-4 h-4" />
              <span>SUBMIT ORDER (${finalTotal.toFixed(2)})</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
