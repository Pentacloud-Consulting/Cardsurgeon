"use client";

import React from "react";
import Link from "next/link";
import { Gift, ArrowRight, Award } from "lucide-react";

export default function NewAccountOffer() {
  return (
    <section className="w-full">
      {/* 3D Gold Clay Offer Card */}
      <div className="rounded-[28px] sm:rounded-[36px] bg-gradient-to-r from-[#ffd43b] via-[#fcc419] to-[#fab005] p-6 sm:p-8 shadow-[0_20px_45px_-8px_rgba(245,158,11,0.42),inset_0_3.5px_5px_rgba(255,255,255,0.9),inset_0_-4px_6px_rgba(180,95,15,0.35)] border-2 border-amber-300/80 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Subtle decorative glow */}
        <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/30 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-start gap-4 sm:gap-5 relative z-10 max-w-3xl">
          {/* 3D Obsidian Clay Gift Icon Tile */}
          <div className="clay-tile-obsidian w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0">
            <Gift className="w-7 h-7 sm:w-8 sm:h-8 text-amber-300 stroke-[2.2] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
          </div>

          <div className="flex flex-col text-left">
            <div className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-black uppercase tracking-widest text-[#9c3200] mb-1">
              <Award className="w-3.5 h-3.5 text-[#9c3200]" />
              <span>NEW ACCOUNT OFFER</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black italic uppercase tracking-wide text-slate-950 leading-tight">
              YOUR FIRST 3 ESTIMATED GRADES ARE FREE
            </h2>

            <p className="text-sm sm:text-base font-bold text-slate-900 mt-1 leading-snug">
              3 free estimates for new accounts, then $7 per card.
            </p>

            <p className="text-xs sm:text-sm font-black text-slate-950 mt-1">
              Log in or create your account to use them. No code needed.
            </p>
          </div>
        </div>

        {/* 3D Obsidian Clay CTA Button */}
        <div className="relative z-10 w-full md:w-auto shrink-0">
          <Link
            href="/login"
            className="w-full md:w-auto clay-btn-obsidian rounded-full px-8 py-4 font-black italic uppercase text-xs sm:text-[13px] tracking-wider text-amber-300 hover:text-white flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>CLAIM 3 FREE ESTIMATES</span>
            <ArrowRight className="w-4 h-4 text-amber-300 stroke-[2.5]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
