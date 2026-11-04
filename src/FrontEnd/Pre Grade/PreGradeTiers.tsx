"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Clock,
  ShieldCheck,
  Zap,
  Crown,
  Layers,
  ArrowRight,
  Info,
  Check,
} from "lucide-react";

export default function PreGradeTiers() {
  const [selectedTier, setSelectedTier] = useState<string>("standard");
  const [cardCount, setCardCount] = useState<number>(5);

  // Dynamic pricing calculation for standard
  const standardUnitPrice = cardCount >= 20 ? 20 : 25;
  const standardTotal = cardCount * standardUnitPrice;
  const sameDayTotal = cardCount * 30;

  return (
    <section id="tiers" className="w-full flex flex-col gap-8 sm:gap-10 scroll-mt-24">
      {/* Section Header */}
      <div className="text-center flex flex-col items-center max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black italic uppercase tracking-wider text-slate-900 drop-shadow-sm">
          SERVICE TIERS & SPECS
        </h2>
        <p className="text-slate-600 font-medium text-xs sm:text-sm leading-relaxed mt-1">
          Every tier includes our full 5-point prep package. Choose your speed and declared card value threshold.
        </p>
      </div>

      {/* 3 Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {/* TIER 1: STANDARD */}
        <div
          onClick={() => setSelectedTier("standard")}
          className={`clay-footer-card rounded-[32px] sm:rounded-[36px] p-6 sm:p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 relative overflow-hidden border ${
            selectedTier === "standard"
              ? "ring-2 ring-emerald-500 shadow-2xl scale-[1.02] bg-gradient-to-b from-emerald-50/40 via-white to-slate-50/80"
              : "border-white/90 shadow-xl hover:scale-[1.01]"
          }`}
        >
          {/* Top Pill / Badge */}
          <div className="flex items-center justify-between gap-2 mb-4">
            <span className="px-3.5 py-1 rounded-full bg-emerald-100/90 border border-emerald-200/80 text-emerald-800 text-[11px] font-black uppercase tracking-wider shadow-xs">
              Most Popular
            </span>
            <div className="w-8 h-8 rounded-xl bg-white/90 border border-emerald-100 flex items-center justify-center text-emerald-700 shadow-xs">
              <Layers className="w-4 h-4" />
            </div>
          </div>

          {/* Title & Desc */}
          <div>
            <h3 className="text-xl sm:text-2xl font-black italic uppercase tracking-wide text-slate-900 mb-1.5">
              STANDARD
            </h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed min-h-[38px]">
              Cleaning, polish, penny sleeve, and semi-rigid holder. Pre-grade included.
            </p>

            {/* Price Box */}
            <div className="my-5 p-4 rounded-2xl bg-gradient-to-br from-emerald-50/70 to-teal-50/40 border border-emerald-200/60 flex flex-col gap-1">
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl sm:text-4xl font-black italic tracking-tight text-emerald-900">
                  $25
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-600">
                  per card
                </span>
              </div>
              <div className="text-[11px] font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-full w-fit mt-1">
                20+ cards: $20 per card
              </div>
              <span className="text-[11px] text-slate-500 font-semibold mt-1">
                Cards under $1,500 only.
              </span>
            </div>

            {/* Specs List */}
            <div className="flex flex-col gap-2.5 pt-2 border-t border-slate-200/60 mb-6 text-xs font-semibold text-slate-700">
              <div className="flex items-center justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" /> Turnaround
                </span>
                <span className="font-black text-slate-900">10–15 business days</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-500 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-400" /> Card value
                </span>
                <span className="font-black text-slate-900">Under $1,500</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href="/order?service=pregrade&tier=standard"
            className="w-full clay-hero-btn-yellow rounded-full py-3.5 px-6 font-black italic uppercase tracking-wider text-xs sm:text-[13px] text-[#3d2400] text-center flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] active:scale-95 transition-all"
          >
            <span>SELECT STANDARD</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* TIER 2: HIGH VALUE (VIP Flagship Card) */}
        <div
          onClick={() => setSelectedTier("high-value")}
          className={`clay-footer-card rounded-[32px] sm:rounded-[36px] p-6 sm:p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 relative overflow-hidden border-2 ${
            selectedTier === "high-value"
              ? "ring-2 ring-amber-400 border-amber-300 shadow-2xl scale-[1.03] bg-gradient-to-b from-amber-50/60 via-white to-amber-50/30"
              : "border-amber-300/80 shadow-xl hover:scale-[1.01] bg-gradient-to-b from-amber-50/30 via-white to-white"
          }`}
        >
          {/* Top Pill / Badge */}
          <div className="flex items-center justify-between gap-2 mb-4">
            <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 border border-amber-300 text-amber-950 text-[11px] font-black uppercase tracking-wider shadow-xs">
              High Value Tier
            </span>
            <div className="w-8 h-8 rounded-xl clay-tile-yellow flex items-center justify-center text-amber-800 shadow-xs">
              <Crown className="w-4 h-4 text-amber-700" />
            </div>
          </div>

          {/* Title & Desc */}
          <div>
            <h3 className="text-xl sm:text-2xl font-black italic uppercase tracking-wide text-slate-900 mb-1.5 flex items-center gap-2">
              <span>HIGH VALUE</span>
            </h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed min-h-[38px]">
              Same prep at $1,500 and over. Pre-grade included.
            </p>

            {/* Price Box */}
            <div className="my-5 p-4 rounded-2xl bg-gradient-to-br from-amber-100/60 to-yellow-50/50 border border-amber-300/70 flex flex-col gap-1">
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl sm:text-3xl font-black italic tracking-tight text-amber-950">
                  1.5%
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-700">
                  of declared value
                </span>
              </div>
              <div className="text-[11px] font-bold text-amber-900 bg-amber-200/70 px-2.5 py-0.5 rounded-full w-fit mt-1">
                (min $25) · pre-grade included
              </div>
              <span className="text-[11px] text-slate-500 font-semibold mt-1">
                per card
              </span>
            </div>

            {/* Specs List */}
            <div className="flex flex-col gap-2.5 pt-2 border-t border-slate-200/60 mb-6 text-xs font-semibold text-slate-700">
              <div className="flex items-center justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" /> Turnaround
                </span>
                <span className="font-black text-amber-900">5–10 business days</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-500 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-400" /> Card value
                </span>
                <span className="font-black text-slate-900">$1,500 and over</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href="/order?service=pregrade&tier=high-value"
            className="w-full clay-hero-btn-yellow rounded-full py-3.5 px-6 font-black italic uppercase tracking-wider text-xs sm:text-[13px] text-[#3d2400] text-center flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] active:scale-95 transition-all"
          >
            <span>SELECT HIGH VALUE</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* TIER 3: SAME DAY */}
        <div
          onClick={() => setSelectedTier("same-day")}
          className={`clay-footer-card rounded-[32px] sm:rounded-[36px] p-6 sm:p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 relative overflow-hidden border ${
            selectedTier === "same-day"
              ? "ring-2 ring-blue-500 shadow-2xl scale-[1.02] bg-gradient-to-b from-blue-50/40 via-white to-slate-50/80"
              : "border-white/90 shadow-xl hover:scale-[1.01]"
          }`}
        >
          {/* Top Pill / Badge */}
          <div className="flex items-center justify-between gap-2 mb-4">
            <span className="px-3.5 py-1 rounded-full bg-blue-100/90 border border-blue-200/80 text-blue-800 text-[11px] font-black uppercase tracking-wider shadow-xs flex items-center gap-1">
              <Zap className="w-3 h-3 text-blue-600" /> Express Speed
            </span>
            <div className="w-8 h-8 rounded-xl bg-white/90 border border-blue-100 flex items-center justify-center text-blue-700 shadow-xs">
              <Zap className="w-4 h-4" />
            </div>
          </div>

          {/* Title & Desc */}
          <div>
            <h3 className="text-xl sm:text-2xl font-black italic uppercase tracking-wide text-slate-900 mb-1.5">
              SAME DAY
            </h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed min-h-[38px]">
              Same prep, pre-grade included. Same-day delivery or in-person drop-off. No prepaid inbound label.
            </p>

            {/* Price Box */}
            <div className="my-5 p-4 rounded-2xl bg-gradient-to-br from-blue-50/70 to-cyan-50/40 border border-blue-200/60 flex flex-col gap-1">
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl sm:text-4xl font-black italic tracking-tight text-blue-900">
                  $30
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-600">
                  per card
                </span>
              </div>
              <div className="text-[11px] font-bold text-blue-800 bg-blue-100/80 px-2.5 py-0.5 rounded-full w-fit mt-1">
                Same-day delivery / in-person
              </div>
              <span className="text-[11px] text-slate-500 font-semibold mt-1">
                Cards under $1,500 only. No prepaid label.
              </span>
            </div>

            {/* Specs List */}
            <div className="flex flex-col gap-2.5 pt-2 border-t border-slate-200/60 mb-6 text-xs font-semibold text-slate-700">
              <div className="flex items-center justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" /> Turnaround
                </span>
                <span className="font-black text-blue-900">Same day</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-500 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-400" /> Card value
                </span>
                <span className="font-black text-slate-900">Cards under $1,500 only</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href="/order?service=pregrade&tier=same-day"
            className="w-full clay-hero-btn-yellow rounded-full py-3.5 px-6 font-black italic uppercase tracking-wider text-xs sm:text-[13px] text-[#3d2400] text-center flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] active:scale-95 transition-all"
          >
            <span>SELECT SAME DAY</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Interactive Live Volume Estimator Widget */}
      <div className="clay-footer-card rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 shadow-xl border border-white/90 bg-gradient-to-r from-emerald-50/50 via-white to-blue-50/40 max-w-3xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col text-center sm:text-left">
            <span className="text-xs font-black uppercase tracking-wider text-emerald-800">
              Quick Volume Calculator
            </span>
            <span className="text-xs sm:text-sm text-slate-600 font-medium">
              See bulk tier pricing for your card count
            </span>
          </div>

          <div className="flex items-center gap-2">
            {[1, 5, 10, 20, 50].map((count) => (
              <button
                key={count}
                type="button"
                onClick={() => setCardCount(count)}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  cardCount === count
                    ? "clay-tile-yellow text-amber-950 shadow-md scale-105"
                    : "bg-white/80 border border-slate-200/80 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {count} {count === 1 ? "Card" : "Cards"}
              </button>
            ))}
          </div>

          <div className="text-center sm:text-right shrink-0 bg-white/90 px-4 py-2 rounded-2xl border border-slate-200/60 shadow-xs">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">
              Estimated Total ({cardCount} cards)
            </span>
            <span className="text-lg font-black italic text-emerald-900">
              ${standardTotal}
            </span>
            {cardCount >= 20 && (
              <span className="text-[10px] text-emerald-700 font-bold block">
                Bulk ($20/card) applied!
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Footnote Notice */}
      <p className="text-center text-xs text-slate-500 italic max-w-2xl mx-auto px-4">
        Prices, slots and turnarounds are placeholders. Turnaround counts business days from when your cards arrive.
      </p>
    </section>
  );
}
