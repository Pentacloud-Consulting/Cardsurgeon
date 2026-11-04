import React from "react";
import { Wrench, Zap, ShieldCheck, Gift } from "lucide-react";

export default function GiftHero() {
  return (
    <div className="flex flex-col gap-3">
      {/* Top Tag / Pill */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-100 to-teal-50 border border-emerald-200/80 text-emerald-800 text-xs font-bold shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_2px_6px_rgba(16,185,129,0.12)] w-fit">
        <Gift className="w-3.5 h-3.5 text-emerald-600" />
        <span className="tracking-wide uppercase text-[11px]">The Card Surgeon Gift Certificate</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black italic uppercase tracking-wider text-emerald-800 drop-shadow-[0_2px_2px_rgba(255,255,255,0.9)]">
        GIFT CARDS
      </h1>

      {/* Subtitle */}
      <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
        Give the gift of certified card conservation, ultrasonic cleaning, and pre-grade preparation. Perfect for sports and TCG collectors.
      </p>

      {/* Trust Mini Pills */}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-slate-200/80 text-[12px] font-bold text-slate-700 shadow-sm">
          <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" /> Instant Email Delivery
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-slate-200/80 text-[12px] font-bold text-slate-700 shadow-sm">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Never Expires
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-slate-200/80 text-[12px] font-bold text-slate-700 shadow-sm">
          <Wrench className="w-3.5 h-3.5 text-blue-600" /> Any Restoration Order
        </span>
      </div>
    </div>
  );
}
