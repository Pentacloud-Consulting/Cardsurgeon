"use client";

import React from "react";
import { Check, Award, ShieldCheck, ArrowDown } from "lucide-react";

const INCLUDED_TITLES = [
  { title: "Cleaning", span: "col-span-1" },
  { title: "Polish", span: "col-span-1" },
  { title: "Penny sleeve", span: "col-span-1" },
  { title: "Semi-rigid holder", span: "col-span-1" },
  { title: "Pre-grade included", span: "col-span-1 sm:col-span-2" },
];

export default function PreGradeHero() {
  return (
    <section className="w-full min-h-[calc(100vh-7.5rem)] flex flex-col justify-between pt-4 sm:pt-6 pb-6">
      {/* Upper Empty Spacer for perfect vertical balancing */}
      <div className="hidden lg:block h-2" />

      {/* 2-Column Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
        {/* Left Side: Large Hero Title & Paragraph */}
        <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5 text-left">
          {/* Top subtle badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-200/80 text-emerald-800 text-xs font-black uppercase tracking-wider w-fit shadow-xs">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            <span>5-Point Submission Prep</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black italic uppercase tracking-wider text-emerald-800 drop-shadow-[0_2px_2px_rgba(255,255,255,0.9)] leading-[1.06]">
            CHOOSE YOUR <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-900 bg-clip-text text-transparent">
              PRE-GRADE PREP
            </span>{" "}
            LEVEL
          </h1>

          <p className="text-slate-600 font-medium text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
            Cleaning, polish, a penny sleeve, and a semi-rigid holder, with a pre-grade included on every card. No add-ons. Not restoration, and a pre-grade is our opinion, not a promise of any grade.
          </p>

          {/* Quick CTA Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#tiers"
              className="clay-hero-btn-yellow rounded-full px-8 py-3.5 text-xs sm:text-[13px] font-black italic uppercase tracking-wider text-[#3d2400] text-center flex items-center justify-center gap-2 shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <span>CHOOSE A SERVICE TIER</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>PSA, BGS & CGC Ready</span>
            </div>
          </div>
        </div>

        {/* Right Side: 5 Titles in Clean 3D Clay Pills (No Descriptions, No Big Outer Box) */}
        <div className="lg:col-span-5 w-full flex flex-col gap-3">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-800 flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
              Standard On Every Card
            </span>
            <span className="text-[11px] font-bold text-slate-400">Included</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
            {INCLUDED_TITLES.map((item) => (
              <div
                key={item.title}
                className={`${item.span} clay-footer-card rounded-[22px] px-5 py-4 flex items-center gap-3.5 border border-white/90 shadow-[0_8px_20px_-4px_rgba(100,145,195,0.2),inset_0_2px_4px_rgba(255,255,255,0.98),inset_0_-2px_4px_rgba(160,195,230,0.25)] hover:scale-[1.03] hover:shadow-xl transition-all duration-200 cursor-default group`}
              >
                {/* 3D Emerald Checkmark Tile */}
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-emerald-300 text-emerald-950 flex items-center justify-center shrink-0 shadow-[0_4px_10px_-2px_rgba(16,185,129,0.38),inset_0_2px_3px_rgba(255,255,255,0.9),inset_0_-2px_3px_rgba(6,78,59,0.35)] group-hover:scale-110 transition-transform">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>

                {/* Title Only */}
                <span className="font-black italic uppercase text-xs sm:text-sm text-slate-900 tracking-wide">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator at bottom of first screen */}
      <div className="w-full flex flex-col items-center justify-center pt-4 pb-1">
        <a
          href="#exclusions"
          className="flex flex-col items-center gap-1 text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-700 transition-colors animate-bounce cursor-pointer"
        >
          <span>Scroll to explore tiers</span>
          <ArrowDown className="w-3.5 h-3.5 text-emerald-600" />
        </a>
      </div>
    </section>
  );
}
