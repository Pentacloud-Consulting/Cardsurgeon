"use client";

import React from "react";
import Link from "next/link";
import { Check, CheckCircle2, ArrowRight, FolderKanban } from "lucide-react";

const CHECK_ITEMS = [
  "Card out of its sleeve",
  "Dark, plain surface",
  "Flash off",
  "Phone flat above the card",
  "Every photo sharp",
];

export default function PhotoGuideQuickCheck() {
  return (
    <section className="w-full">
      {/* 3D Gold Clay Container Card */}
      <div className="rounded-[28px] sm:rounded-[36px] bg-gradient-to-r from-[#ffd43b] via-[#fcc419] to-[#fab005] p-6 sm:p-9 shadow-[0_20px_45px_-8px_rgba(245,158,11,0.42),inset_0_3.5px_5px_rgba(255,255,255,0.9),inset_0_-4px_6px_rgba(180,95,15,0.35)] border-2 border-amber-300/80 relative overflow-hidden flex flex-col gap-6 sm:gap-8">
        {/* Subtle decorative glow */}
        <div className="absolute -top-16 -right-16 w-52 h-52 bg-white/30 rounded-full blur-2xl pointer-events-none" />

        {/* Header */}
        <div className="flex flex-col items-start gap-1.5 relative z-10 text-left">
          <div className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-black uppercase tracking-widest text-[#9c3200]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#9c3200]" />
            <span>SUBMISSION READINESS</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black italic uppercase tracking-wide text-slate-950 leading-tight">
            QUICK CHECK BEFORE YOU UPLOAD
          </h3>
        </div>

        {/* 5 Static Informative Checklist Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 relative z-10">
          {CHECK_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 sm:p-4 rounded-2xl flex items-center gap-3 bg-slate-950/90 text-white shadow-[0_6px_14px_rgba(0,0,0,0.3),inset_0_1.5px_2px_rgba(255,255,255,0.3)] border border-slate-700/80 select-none"
            >
              {/* 3D Checkbox Badge */}
              <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-amber-400 to-yellow-300 text-slate-950 flex items-center justify-center shrink-0 shadow-inner">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>

              <span className="text-xs sm:text-[13px] font-black uppercase tracking-wide">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom 2 Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 relative z-10">
          <Link
            href="/login"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-slate-950 text-amber-300 hover:text-white font-black italic uppercase text-xs sm:text-[13px] tracking-wider flex items-center justify-center gap-2 shadow-[0_12px_24px_-4px_rgba(10,15,25,0.45),inset_0_2.5px_3.5px_rgba(255,255,255,0.35),inset_0_-3px_5px_rgba(0,0,0,0.7)] border border-slate-700 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <FolderKanban className="w-4 h-4" />
            <span>GO TO MY COLLECTION</span>
          </Link>

          <Link
            href="/estimated-grade"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full clay-hero-btn-white text-slate-900 hover:text-slate-950 font-black italic uppercase text-xs sm:text-[13px] tracking-wider flex items-center justify-center gap-2 shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <span>GET YOUR ESTIMATED GRADE</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
