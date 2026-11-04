"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Search,
  Mail,
  Package,
  CheckCircle2,
  Clock,
  Wrench,
  ShieldCheck,
  Truck,
  ExternalLink,
  RotateCcw,
  AlertCircle,
  Zap,
} from "lucide-react";

// Mock Database of real interactive orders
interface OrderRecord {
  orderNumber: string;
  email: string;
  customerName: string;
  orderDate: string;
  estCompletion: string;
  status: "Received" | "Restoring" | "Inspection" | "Shipped" | "Delivered";
  statusTitle: string;
  carrier: string;
  trackingNumber: string;
  carrierUrl: string;
  cardName: string;
  cardSet: string;
  serviceTier: string;
  declaredValue: string;
  labNotes: string;
  currentStep: number; // 1 to 5
}

const DEMO_ORDERS: Record<string, OrderRecord> = {
  "R-1001": {
    orderNumber: "R-1001",
    email: "collector@example.com",
    customerName: "Alex Rivera",
    orderDate: "Oct 28, 2026",
    estCompletion: "Nov 06, 2026",
    status: "Restoring",
    statusTitle: "In Restoration Lab",
    carrier: "USPS Priority Insured",
    trackingNumber: "9400 1118 9956 2345 6789 01",
    carrierUrl: "https://tools.usps.com/go/TrackConfirmAction",
    cardName: "Charizard #4 Holo 1st Edition",
    cardSet: "1999 Pokémon Base Set (Shadowless)",
    serviceTier: "Full Restoration + Pre-Grade Prep",
    declaredValue: "$2,450.00",
    labNotes:
      "Stage 2 complete: Light surface hazing removed via micro-solvent bath. Corner lift carefully relaxed and pressed flat in climate-controlled chamber.",
    currentStep: 3,
  },
  "R-1042": {
    orderNumber: "R-1042",
    email: "sports@cards.com",
    customerName: "Marcus Vance",
    orderDate: "Oct 22, 2026",
    estCompletion: "Nov 04, 2026",
    status: "Shipped",
    statusTitle: "Shipped & Out for Delivery",
    carrier: "FedEx Express (Direct Signature)",
    trackingNumber: "7721 8493 0182",
    carrierUrl: "https://www.fedex.com/fedextrack/",
    cardName: "Michael Jordan #57 Rookie Card",
    cardSet: "1986 Fleer Basketball",
    serviceTier: "Pre-Grade Prep + Slab Crack-Out",
    declaredValue: "$4,200.00",
    labNotes:
      "Work complete. Slab crack-out performed cleanly without edge trauma. Surface polished, placed into brand new semi-rigid holder.",
    currentStep: 5,
  },
  "R-1099": {
    orderNumber: "R-1099",
    email: "tcg@vault.io",
    customerName: "Sarah Chen",
    orderDate: "Oct 30, 2026",
    estCompletion: "Nov 08, 2026",
    status: "Inspection",
    statusTitle: "Quality Assurance & Optical Scan",
    carrier: "USPS Priority Mail",
    trackingNumber: "9405 5112 0034 8812 4491 19",
    carrierUrl: "https://tools.usps.com/go/TrackConfirmAction",
    cardName: "The One Ring (001/001 Post Malone)",
    cardSet: "Magic: The Gathering (Tales of Middle-earth)",
    serviceTier: "White-Glove VIP Restoration",
    declaredValue: "$9,500.00",
    labNotes:
      "Restoration approved. Final 60x microscopic surface inspection underway under polarized lighting. Penny sleeve & vault seal pending.",
    currentStep: 4,
  },
};

const STEPS = [
  { id: 1, label: "Order Placed", desc: "Prepaid label generated" },
  { id: 2, label: "Cards Received", desc: "Logged & unboxed in vault" },
  { id: 3, label: "In Restoration", desc: "Ultrasonic bath & press" },
  { id: 4, label: "QA & Pre-Grade", desc: "Microscopic optical review" },
  { id: 5, label: "Returned & Shipped", desc: "Insured return tracking" },
];

export default function TrackOrders() {
  const [orderNumber, setOrderNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchedOrder, setSearchedOrder] = useState<OrderRecord | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleTrack = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setErrorMessage("");

    const trimmedOrder = orderNumber.trim().toUpperCase();
    const trimmedEmail = email.trim().toLowerCase();

    if (!trimmedOrder) {
      setErrorMessage("Please enter your order number (e.g. R-1001)");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      if (DEMO_ORDERS[trimmedOrder]) {
        const found = DEMO_ORDERS[trimmedOrder];
        setSearchedOrder({
          ...found,
          email: trimmedEmail || found.email,
        });
      } else {
        setSearchedOrder({
          orderNumber: trimmedOrder,
          email: trimmedEmail || "your.email@example.com",
          customerName: "Valued Collector",
          orderDate: "Nov 01, 2026",
          estCompletion: "Nov 10, 2026",
          status: "Restoring",
          statusTitle: "In Restoration Lab",
          carrier: "USPS Priority Insured",
          trackingNumber: "9400 1092 3847 5619 0234 11",
          carrierUrl: "https://tools.usps.com/go/TrackConfirmAction",
          cardName: "Submitted Trading Card (" + trimmedOrder + ")",
          cardSet: "Standard Submission Order",
          serviceTier: "Restoration & Surface Conservation",
          declaredValue: "$500.00",
          labNotes:
            "Card safely unboxed and assigned to Senior Conservation Technician. Ultrasonic surface clean and humidity chamber treatment in progress.",
          currentStep: 3,
        });
      }
    }, 700);
  };

  const loadDemo = (demoKey: string) => {
    const demo = DEMO_ORDERS[demoKey];
    if (demo) {
      setOrderNumber(demo.orderNumber);
      setEmail(demo.email);
      setErrorMessage("");
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setSearchedOrder(demo);
      }, 400);
    }
  };

  const resetSearch = () => {
    setSearchedOrder(null);
    setOrderNumber("");
    setEmail("");
    setErrorMessage("");
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full my-auto py-6 sm:py-8 flex flex-col justify-center">
      {/* =========================================================================
          ONE SCREEN 2-COLUMN LAYOUT: Image 1 on Left | Image 2 on Right
         ========================================================================= */}
      {!searchedOrder ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          {/* LEFT SIDE: Image 1 (Header, Cute Mascot, Title & Demos) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left gap-4">
            {/* Cute Mascot Badge */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-amber-300 via-yellow-100 to-amber-400 p-[3px] shadow-[0_6px_18px_rgba(217,119,6,0.25)] flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <Image
                      src="/cards/mailbox_badge.png"
                      alt="Track Order"
                      width={52}
                      height={52}
                      className="object-contain hover:scale-110 transition-transform"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Red/Coral ORDER STATUS Tag */}
              <span className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-red-600 drop-shadow-sm">
                ORDER STATUS
              </span>
            </div>

            {/* Main Title: TRACK YOUR ORDER */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black italic uppercase tracking-wider text-emerald-800 drop-shadow-[0_2px_2px_rgba(255,255,255,0.9)] leading-tight">
              TRACK YOUR ORDER
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed max-w-lg">
              Enter the order number from your confirmation (e.g.{" "}
              <strong className="text-slate-900">R-1001</strong>) and the email you used.
            </p>

            {/* Quick Demo Clickable Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="font-bold text-slate-500">Quick Test Demos:</span>
              <button
                type="button"
                onClick={() => loadDemo("R-1001")}
                className="px-3 py-1 rounded-full bg-white/90 hover:bg-amber-100 border border-slate-300 text-slate-800 font-bold transition-all cursor-pointer shadow-sm hover:scale-105"
              >
                R-1001 (In Lab)
              </button>
              <button
                type="button"
                onClick={() => loadDemo("R-1042")}
                className="px-3 py-1 rounded-full bg-white/90 hover:bg-emerald-100 border border-slate-300 text-slate-800 font-bold transition-all cursor-pointer shadow-sm hover:scale-105"
              >
                R-1042 (Shipped)
              </button>
              <button
                type="button"
                onClick={() => loadDemo("R-1099")}
                className="px-3 py-1 rounded-full bg-white/90 hover:bg-blue-100 border border-slate-300 text-slate-800 font-bold transition-all cursor-pointer shadow-sm hover:scale-105"
              >
                R-1099 (QA Scan)
              </button>
            </div>

            {/* Trust Mini Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-slate-200/80 text-[11px] font-bold text-slate-700 shadow-sm">
                <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" /> Live Lab Progress
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-slate-200/80 text-[11px] font-bold text-slate-700 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Vault Storage
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-slate-200/80 text-[11px] font-bold text-slate-700 shadow-sm">
                <Truck className="w-3.5 h-3.5 text-blue-600" /> Insured Return
              </span>
            </div>
          </div>

          {/* RIGHT SIDE: Image 2 (Clean Search Card with Inputs & Button) */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <div className="clay-footer-card rounded-[32px] sm:rounded-[40px] p-7 sm:p-10 shadow-2xl border-2 border-slate-900/10 w-full max-w-lg">
              <form onSubmit={handleTrack} className="flex flex-col gap-5">
                {/* Order Number Field */}
                <div>
                  <label className="block text-xs sm:text-sm font-black uppercase tracking-wider text-slate-900 mb-2">
                    ORDER NUMBER
                  </label>
                  <div className="relative">
                    <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="R-1001"
                      value={orderNumber}
                      onChange={(e) => setOrderNumber(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 sm:py-3.5 rounded-2xl text-sm sm:text-base font-bold text-slate-900 bg-white border-2 border-slate-300 focus:border-slate-900 focus:ring-2 focus:ring-amber-400/30 outline-none transition-all shadow-sm placeholder:text-slate-400 uppercase"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-xs sm:text-sm font-black uppercase tracking-wider text-slate-900 mb-2">
                    EMAIL
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 sm:py-3.5 rounded-2xl text-sm sm:text-base font-medium text-slate-900 bg-white border-2 border-slate-300 focus:border-slate-900 focus:ring-2 focus:ring-amber-400/30 outline-none transition-all shadow-sm placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Error Alert if any */}
                {errorMessage && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs font-bold text-red-600 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* TRACK ORDER BUTTON (Yellow 3D button from Image 1) */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="clay-hero-btn-yellow rounded-full py-4 px-9 text-xs sm:text-[13px] font-black italic tracking-wider uppercase text-[#3d2400] flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-[#3d2400] border-t-transparent rounded-full animate-spin" />
                        <span>SEARCHING ORDER...</span>
                      </div>
                    ) : (
                      <span>TRACK ORDER</span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        /* =========================================================================
            LIVE TRACKING RESULTS DASHBOARD (When order is active)
           ========================================================================= */
        <div className="w-full flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Top Summary Banner */}
          <div className="clay-footer-card rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 shadow-xl border border-white/90">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-amber-400 border-2 border-slate-900 flex items-center justify-center text-slate-900 shadow-md">
                  <Package className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl sm:text-2xl font-black italic uppercase text-slate-900">
                      ORDER #{searchedOrder.orderNumber}
                    </h2>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 text-[11px] font-black uppercase tracking-wider animate-pulse">
                      {searchedOrder.statusTitle}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">
                    Placed: {searchedOrder.orderDate} · Est. Completion:{" "}
                    <strong className="text-slate-800">
                      {searchedOrder.estCompletion}
                    </strong>
                  </p>
                </div>
              </div>

              {/* Reset Search Button */}
              <button
                type="button"
                onClick={resetSearch}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors w-fit cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Track Another</span>
              </button>
            </div>

            {/* Stepper Timeline */}
            <div className="py-8">
              <div className="relative">
                {/* Connecting Track Line */}
                <div className="absolute top-5 left-4 right-4 h-1.5 bg-slate-200 rounded-full -z-0 hidden md:block">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-amber-400 rounded-full transition-all duration-700"
                    style={{
                      width: `${((searchedOrder.currentStep - 1) / (STEPS.length - 1)) * 100}%`,
                    }}
                  />
                </div>

                {/* Stepper Steps */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
                  {STEPS.map((step) => {
                    const isDone = step.id < searchedOrder.currentStep;
                    const isCurrent = step.id === searchedOrder.currentStep;

                    return (
                      <div
                        key={step.id}
                        className="flex md:flex-col items-center md:text-center gap-3 md:gap-2"
                      >
                        {/* Step Icon Badge */}
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border-2 font-black transition-all ${
                            isDone
                              ? "bg-emerald-500 border-emerald-600 text-white shadow-md"
                              : isCurrent
                              ? "bg-amber-400 border-slate-900 text-slate-950 scale-110 shadow-[0_0_15px_rgba(251,191,36,0.6)] animate-bounce"
                              : "bg-white border-slate-300 text-slate-400"
                          }`}
                        >
                          {isDone ? (
                            <CheckCircle2 className="w-5 h-5 text-white" />
                          ) : isCurrent ? (
                            <Clock className="w-5 h-5" />
                          ) : (
                            <span className="text-xs">{step.id}</span>
                          )}
                        </div>

                        {/* Step Text */}
                        <div className="flex flex-col">
                          <span
                            className={`text-xs sm:text-sm font-bold ${
                              isCurrent
                                ? "text-slate-950 font-black"
                                : isDone
                                ? "text-emerald-800"
                                : "text-slate-400"
                            }`}
                          >
                            {step.label}
                          </span>
                          <span className="text-[11px] text-slate-500 font-medium">
                            {step.desc}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Live Lab Notes Callout */}
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-amber-200 flex items-center justify-center shrink-0 text-amber-800 mt-0.5">
                <Wrench className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-black uppercase tracking-wider text-amber-900">
                  Live Surgeon Lab Notes
                </span>
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed mt-0.5">
                  {searchedOrder.labNotes}
                </p>
              </div>
            </div>
          </div>

          {/* Details Grid (Card Info & Carrier Tracking) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left: Card & Submission Summary */}
            <div className="bg-white rounded-3xl p-6 border-2 border-slate-900/10 shadow-lg flex flex-col gap-4">
              <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Card & Order Details</span>
              </h3>

              <div className="flex flex-col gap-2.5 text-xs sm:text-sm">
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-semibold">Card Name:</span>
                  <span className="font-bold text-slate-900 text-right">
                    {searchedOrder.cardName}
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-semibold">Set / Edition:</span>
                  <span className="font-medium text-slate-800 text-right">
                    {searchedOrder.cardSet}
                  </span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100">
                  <span className="text-slate-500 font-semibold">Service Tier:</span>
                  <span className="font-bold text-emerald-700 text-right">
                    {searchedOrder.serviceTier}
                  </span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-500 font-semibold">Declared Value:</span>
                  <span className="font-mono font-bold text-slate-900">
                    {searchedOrder.declaredValue}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Shipping & Return Carrier */}
            <div className="bg-white rounded-3xl p-6 border-2 border-slate-900/10 shadow-lg flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-4">
                <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 flex items-center gap-2">
                  <Truck className="w-4 h-4 text-blue-600" />
                  <span>Return Shipping Info</span>
                </h3>

                <div className="flex flex-col gap-2.5 text-xs sm:text-sm">
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500 font-semibold">Carrier:</span>
                    <span className="font-bold text-slate-900">
                      {searchedOrder.carrier}
                    </span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-500 font-semibold">Tracking #:</span>
                    <span className="font-mono font-bold text-blue-600">
                      {searchedOrder.trackingNumber}
                    </span>
                  </div>
                </div>
              </div>

              {/* Carrier External Link */}
              <a
                href={searchedOrder.carrierUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Track on Carrier Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
