"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, Shield, Flame, Zap } from "lucide-react";

interface TierCardProps {
  name: string;
  badge?: string;
  desc: string;
  price: string;
  priceSub?: string;
  turnaround: string;
  cardValue: string;
  tierId: string;
  isPopular?: boolean;
}

function RestorationTierCard({
  name,
  badge,
  desc,
  price,
  priceSub = "per card",
  turnaround,
  cardValue,
  tierId,
  isPopular,
}: TierCardProps) {
  return (
    <div
      className={`relative rounded-[32px] sm:rounded-[36px] pt-8 px-6 pb-6 sm:px-7 sm:pb-7 border-2 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5 hover:shadow-2xl ${
        isPopular
          ? "bg-gradient-to-b from-[#ffffff] via-[#f4fbf7] to-[#e4f7ed] border-emerald-400 shadow-[0_20px_44px_-8px_rgba(16,185,129,0.25),0_6px_16px_rgba(5,150,105,0.12),inset_0_3px_6px_rgba(255,255,255,1),inset_0_-4px_8px_rgba(16,185,129,0.2)] ring-4 ring-emerald-500/10"
          : "bg-gradient-to-b from-[#ffffff] via-[#f8fbfe] to-[#edf4fc] border-white shadow-[0_20px_40px_-10px_rgba(85,130,185,0.2),0_6px_14px_rgba(90,140,190,0.1),inset_0_3px_6px_rgba(255,255,255,1),inset_0_-4px_8px_rgba(160,190,225,0.32)]"
      }`}
    >
      {/* Top Badge (e.g. "8 SLOTS LEFT") */}
      {badge && (
        <div className="absolute top-0 inset-x-0 h-6.5 bg-gradient-to-r from-red-600 via-rose-600 to-red-600 text-white text-[10px] font-black tracking-widest text-center flex items-center justify-center uppercase shadow-xs">
          {badge}
        </div>
      )}

      {/* Main Top Content with Uniform Heights */}
      <div className="flex flex-col flex-1 justify-between">
        {/* Tier Header (Uniform 64px height across all cards) */}
        <div className="h-[64px] flex flex-col justify-start space-y-1">
          <div className="flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-black italic uppercase text-slate-950 tracking-tight">
              {name}
            </h3>
            {name === "SUPER SAIYAN" && (
              <Flame className="w-5 h-5 text-amber-500 animate-pulse stroke-[2.5]" />
            )}
            {name === "LIGHT SPEED" && (
              <Zap className="w-5 h-5 text-amber-500 animate-pulse stroke-[2.5]" />
            )}
          </div>
          <p className="text-xs text-slate-500 font-medium leading-relaxed line-clamp-2">
            {desc}
          </p>
        </div>

        {/* Pricing Display (Strictly fixed height 74px so 1-line and 2-line prices align horizontally) */}
        <div className="h-[74px] flex flex-col justify-end pt-1 pb-2 border-b border-slate-200/60 my-2">
          <div className="text-xl sm:text-2xl font-black text-rose-600 italic tracking-tight leading-tight">
            {price}
          </div>
          <div className="text-xs text-slate-500 font-semibold mt-0.5">{priceSub}</div>
        </div>

        {/* CTA Button (Now GUARANTEED on the exact same horizontal line in every row) */}
        <div className="pt-2">
          <Link
            href={`/order?service=restoration&tier=${tierId}`}
            className="clay-hero-btn-yellow w-full rounded-2xl py-3.5 font-black italic uppercase tracking-wider text-[#3d2400] text-xs sm:text-[13px] flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>SELECT {name}</span>
            <ArrowRight className="w-4 h-4 stroke-[3]" />
          </Link>
        </div>
      </div>

      {/* Footer Turnaround & Value Specs */}
      <div className="mt-4 pt-3 border-t border-slate-200/60 space-y-2 text-xs text-slate-600 font-semibold">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-slate-500">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            Turnaround:
          </span>
          <span className="font-bold text-slate-900">{turnaround}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-slate-500">
            <Shield className="w-3.5 h-3.5 text-slate-400" />
            Card value:
          </span>
          <span className="font-bold text-slate-900">{cardValue}</span>
        </div>
      </div>
    </div>
  );
}

export default function RestorationTiers() {
  const tiers = [
    {
      name: "ECONOMY",
      badge: "8 SLOTS LEFT",
      desc: "Everyday collector cards (PLACEHOLDER)",
      price: "$50.00",
      turnaround: "30 business days",
      cardValue: "Max card value $1,200",
      tierId: "economy",
    },
    {
      name: "STANDARD",
      badge: "5 SLOTS LEFT",
      desc: "Mid-value cards (PLACEHOLDER)",
      price: "$75.00",
      turnaround: "21–30 business days",
      cardValue: "Max card value $3,000",
      tierId: "standard",
      isPopular: true,
    },
    {
      name: "EXPRESS",
      badge: "3 SLOTS LEFT",
      desc: "Faster turnaround (PLACEHOLDER)",
      price: "$110.00",
      turnaround: "10–15 business days",
      cardValue: "Max card value $5,000",
      tierId: "express",
    },
    {
      name: "HIGH VALUE",
      desc: "Cards up to $14,999 with custom white-glove bench priority",
      price: "3% OF DECLARED VALUE",
      priceSub: "min $150 per card",
      turnaround: "5–10 business days",
      cardValue: "Up to $14,999",
      tierId: "high_value",
    },
    {
      name: "SUPER SAIYAN",
      desc: "5 business days turnaround for museum & grail cards",
      price: "5% OF DECLARED VALUE",
      priceSub: "per card ($15,000+)",
      turnaround: "5 business days",
      cardValue: "$15,000 and up",
      tierId: "super_saiyan",
    },
    {
      name: "LIGHT SPEED",
      badge: "2 SLOTS LEFT",
      desc: "Skip the queue (PLACEHOLDER)",
      price: "$175.00",
      turnaround: "5–8 business days",
      cardValue: "Max card value $5,000",
      tierId: "light_speed",
    },
  ];

  return (
    <section id="tiers" className="scroll-mt-24 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header Title */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 italic uppercase tracking-tight">
            CHOOSE YOUR LEVEL
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm lg:text-base font-medium max-w-3xl mx-auto leading-relaxed">
            Priced per card. Economy restoration takes 30 business days and Standard takes 21–30 business days from when your cards arrive. Other tiers list their own turnaround.
          </p>
        </div>

        {/* 6 Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {tiers.map((t) => (
            <RestorationTierCard
              key={t.name}
              name={t.name}
              badge={t.badge}
              desc={t.desc}
              price={t.price}
              priceSub={t.priceSub}
              turnaround={t.turnaround}
              cardValue={t.cardValue}
              tierId={t.tierId}
              isPopular={t.isPopular}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
