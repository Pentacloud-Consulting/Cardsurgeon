"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden select-none pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 px-4 sm:px-8 lg:px-14">
      {/* =========================================================================
          BACKGROUND FLOATING 3D CLAY ELEMENTS & SHAPES (EXACT POSITIONING IMAGE 1)
         ========================================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        {/* Soft Radial Ambient Lighting */}
        <div className="absolute -top-10 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#dcf8ef] via-[#d5f0ea] to-transparent opacity-70 blur-3xl" />
        <div className="absolute top-1/4 -left-20 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-[#d7eefb] to-transparent opacity-60 blur-3xl" />

        {/* 1. Upper Floating Mini Clay Card (Image card with colored lines) */}
        <div className="absolute top-3 left-[63%] -translate-x-1/2 -rotate-12 w-16 h-24 clay-card-floating rounded-[20px] p-2 flex flex-col justify-between shadow-[0_20px_35px_rgba(90,150,170,0.24)]">
          <div className="w-full h-12 rounded-[14px] bg-gradient-to-br from-[#c8f5e6] to-[#bdebf5] flex items-center justify-center p-1 shadow-inner">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-emerald-500" fill="currentColor">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z" />
            </svg>
          </div>
          <div className="flex flex-col gap-1.5 px-0.5 pb-0.5">
            <div className="w-4/5 h-2 bg-[#38bdf8] rounded-full shadow-sm" />
            <div className="w-1/2 h-2 bg-[#f43f5e] rounded-full shadow-sm" />
          </div>
        </div>

        {/* 2. Top Right Pastel Clay Chart / Folder Badge */}
        <div className="absolute top-8 right-[10%] sm:right-[11%] rotate-12 w-14 h-18 clay-card-floating rounded-[20px] p-2 flex flex-col items-center justify-center shadow-[0_18px_30px_rgba(90,150,170,0.22)]">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-100 via-rose-100 to-emerald-100 flex items-center justify-center shadow-inner">
            <div className="w-5 h-5 rounded-full border-4 border-rose-400 border-t-amber-400 border-r-emerald-400" />
          </div>
          <div className="w-7 h-2 bg-amber-400/80 rounded-full mt-2" />
        </div>

        {/* 3. Top Star 1 (Peachy clay star - upper middle) */}
        <div className="absolute top-8 left-[55%] text-3xl sm:text-4xl text-[#f6caa7] drop-shadow-[0_10px_16px_rgba(246,202,167,0.6)] transform -rotate-6 select-none">
          ★
        </div>

        {/* 4. Cute Clay Diamond / Star Sparkle (Top right) */}
        <div className="absolute top-12 right-[23%] rotate-45 w-4 h-4 rounded-md bg-gradient-to-tr from-purple-300 to-indigo-200 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.9),0_6px_12px_rgba(140,120,200,0.3)]" />
        <div className="absolute top-14 right-[21%] rotate-12 w-7 h-7 rounded-lg bg-gradient-to-tr from-[#99ebd8] to-[#5eead4] shadow-[inset_2px_2px_4px_rgba(255,255,255,0.95),0_8px_16px_rgba(45,180,160,0.28)]" />

        {/* 5. Bottom Right Clay Star (Peach star near yellow slab) */}
        <div className="absolute bottom-12 right-[8%] text-3xl sm:text-4xl text-[#f8cca7] drop-shadow-[0_12px_18px_rgba(248,204,167,0.65)] rotate-12 select-none">
          ★
        </div>

        {/* 6. Bottom Floating 4-Point Mint Clay Star */}
        <div className="absolute bottom-6 right-[38%] flex items-center justify-center">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#98e2d1] to-[#c2f6ea] rotate-45 shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),0_12px_22px_rgba(50,160,140,0.28)] flex items-center justify-center">
            <div className="w-5 h-5 rounded-full bg-white/50 blur-[1px]" />
          </div>
        </div>

        {/* 7. Bottom Floating Mini Clay Card (Image card with mountains/pink/yellow) */}
        <div className="absolute bottom-8 sm:bottom-12 left-[18%] sm:left-[20%] rotate-6 w-20 h-28 clay-card-floating rounded-[22px] p-2 flex flex-col justify-between shadow-[0_20px_35px_rgba(90,150,170,0.22)]">
          <div className="w-full h-16 rounded-[14px] bg-gradient-to-br from-pink-100 via-amber-100 to-sky-100 p-1 flex items-center justify-center shadow-inner overflow-hidden relative">
            <div className="absolute top-2 right-2 w-3.5 h-3.5 rounded-full bg-amber-400" />
            <div className="absolute -bottom-2 -left-1 w-10 h-10 rounded-full bg-rose-400/80" />
            <div className="absolute -bottom-3 right-0 w-8 h-8 rounded-full bg-indigo-400/80" />
          </div>
          <div className="flex flex-col gap-1.5 px-0.5">
            <div className="w-full h-2 bg-[#38bdf8] rounded-full shadow-sm" />
            <div className="w-2/3 h-2 bg-slate-300 rounded-full" />
          </div>
        </div>

        {/* 8. Bottom Tiny Clay Star & Sphere */}
        <div className="absolute bottom-14 left-[28%] text-xl text-[#f8cca7] select-none">★</div>
        <div className="absolute bottom-20 left-[16%] w-4 h-4 rounded-full bg-gradient-to-tr from-[#a7f3d0] to-[#5eead4] shadow-[inset_1px_1px_2px_#fff,0_6px_10px_rgba(45,180,160,0.35)]" />
      </div>

      {/* =========================================================================
          HERO MAIN CONTENT - EXACT 2 COLUMN RATIO FROM IMAGE 1
         ========================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-14">
        {/* =====================================================================
            LEFT COLUMN: BADGE, HEADLINE, TEXT, CTAs (Fixed Proportions)
           ===================================================================== */}
        <div className="w-full lg:w-[48%] flex flex-col items-start text-left">
          {/* Top Clay Pill Badge */}
          <div className="clay-badge-pill inline-flex items-center px-5 py-2.5 rounded-full mb-6 select-none">
            <span className="text-[12px] sm:text-[13px] font-black uppercase tracking-wider text-slate-800">
              THE CARD SURGEON
            </span>
            <span className="mx-2.5 text-rose-500 font-bold">·</span>
            <span className="text-[12px] sm:text-[13px] font-black uppercase tracking-wider text-[#ea580c]">
              RESTORATION
            </span>
            <span className="mx-2.5 text-amber-500 font-bold">·</span>
            <span className="text-[12px] sm:text-[13px] font-black uppercase tracking-wider text-[#b45309]">
              PRE-GRADE PREP
            </span>
          </div>

          {/* Big Chunky Clay Bubbly Headline */}
          <h1 className="hero-chunky-headline text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight">
            BRING NEW LIFE <br />
            TO YOUR CARDS.
          </h1>

          {/* Description Text */}
          <p className="mt-6 text-[15px] sm:text-[16px] text-slate-700 font-medium leading-[1.65] max-w-lg">
            Professional cleaning and restoration for trading cards. We assess
            each card, then clean and repair it carefully, to the best of our
            honest ability. Please note: restoration can improve the look of a
            card; results vary and the card is changed.
          </p>

          {/* Interactive Clay Button */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
            {/* 1. Yellow Clay CTA Button */}
            <Link
              href="/order"
              className="clay-hero-btn-yellow rounded-full px-7 sm:px-9 py-4 flex items-center justify-center font-black italic uppercase tracking-wider text-[#3d2400] text-xs sm:text-[13px]"
            >
              GET A QUOTE & START AN ORDER
            </Link>
          </div>
        </div>

        {/* =====================================================================
            RIGHT COLUMN: THE 2 SIGNATURE 3D CLAY CARDS (TIGHT & BOLD SIDE BY SIDE)
           ===================================================================== */}
        <div className="w-full lg:w-[52%] flex flex-row items-center justify-center lg:justify-end gap-5 sm:gap-7 relative">
          {/* ===================================================================
              CARD 1: SERVICE 01 - CARD RESTORATION (White Clay Outer Frame)
             =================================================================== */}
          <div className="clay-card-outer anim-float-card-1 w-[250px] sm:w-[275px] md:w-[290px] rounded-[36px] p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] group cursor-pointer shrink-0">
            {/* Mint Green Inset Clay Plate */}
            <div className="w-full h-[225px] sm:h-[245px] rounded-[28px] clay-plate-mint relative p-4 flex items-center justify-center overflow-hidden">
              {/* Little 3D Sparkle Star in corner */}
              <div className="absolute top-4 right-4 text-rose-400 text-2xl font-bold anim-sparkle select-none">
                ✦
              </div>
              <div className="absolute bottom-5 left-3 text-cyan-200 text-base anim-sparkle select-none">
                ✦
              </div>

              {/* 3D Clay Document with Red Border */}
              <div className="relative w-[130px] sm:w-[140px] h-[165px] sm:h-[180px] rounded-[20px] clay-doc-yellow p-3 flex flex-col items-center justify-between shadow-md">
                {/* Big Green Clay Checkmark Inset Screen */}
                <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl clay-doc-screen flex items-center justify-center mt-1">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-12 h-12 text-[#22c55e] drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>

                {/* Bottom document lines */}
                <div className="w-full flex flex-col gap-1.5 pb-1">
                  <div className="w-4/5 h-2.5 rounded-full bg-gradient-to-r from-blue-300 to-blue-400 shadow-inner" />
                  <div className="w-1/2 h-2.5 rounded-full bg-gradient-to-r from-blue-300 to-blue-400 shadow-inner" />
                </div>

                {/* Real Working 3D Cleaning Brush Tool with Loop Animation */}
                <div className="absolute -bottom-2 -right-4 anim-brush-clean flex flex-col items-center filter drop-shadow-[0_14px_18px_rgba(0,0,0,0.35)] pointer-events-none">
                  {/* Yellow Clay Brush Handle */}
                  <div className="w-6 sm:w-7 h-12 sm:h-14 rounded-full clay-brush-handle border-2 border-[#fff3a8] flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#b45309]/50" />
                  </div>
                  {/* Brush Ferrule */}
                  <div className="w-7 sm:w-8 h-3 rounded-sm clay-brush-ferrule -mt-0.5" />
                  {/* Soft Brush Bristles */}
                  <div className="w-9 sm:w-10 h-8 rounded-b-2xl clay-brush-hair border-b-2 border-slate-300 flex justify-around px-1 pt-1">
                    <div className="w-0.5 h-full bg-[#bba891]" />
                    <div className="w-0.5 h-full bg-[#bba891]" />
                    <div className="w-0.5 h-full bg-[#bba891]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card Meta Details */}
            <div className="mt-5 flex flex-col text-left">
              <span className="text-[11px] sm:text-[12px] font-black uppercase tracking-wider text-slate-500">
                SERVICE 01
              </span>
              <h3 className="text-xl sm:text-2xl font-black italic tracking-tight text-slate-900 uppercase mt-0.5">
                CARD RESTORATION
              </h3>
              <div className="mt-2 flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-700 group-hover:text-slate-950 transition-colors">
                <span>See tiers & pricing</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </div>
            </div>
          </div>

          {/* ===================================================================
              CARD 2: SERVICE 02 - PRE-GRADE PREP (Solid Soft Yellow Outer Frame)
             =================================================================== */}
          <div className="clay-card-outer-yellow anim-float-card-2 w-[250px] sm:w-[275px] md:w-[290px] rounded-[36px] p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] group cursor-pointer shrink-0">
            {/* White Inset Clay Plate with PSA Slab */}
            <div className="w-full h-[225px] sm:h-[245px] rounded-[28px] clay-plate-white relative p-4 flex items-center justify-center overflow-hidden">
              {/* PSA Slab Case */}
              <div className="relative w-[130px] sm:w-[140px] h-[180px] sm:h-[195px] rounded-[22px] clay-slab-case p-2.5 flex flex-col items-center justify-between">
                {/* Red PSA Label Header */}
                <div className="w-full h-8 sm:h-9 rounded-xl bg-gradient-to-b from-[#ff6b6b] to-[#dc2626] border border-rose-200/90 p-1 flex flex-col items-center justify-center shadow-sm">
                  <div className="w-full flex items-center justify-between px-1.5">
                    <span className="text-[9px] font-black text-white tracking-wider">
                      GEM MT
                    </span>
                    <span className="text-[8px] font-bold text-white/90">
                      ★
                    </span>
                  </div>
                </div>

                {/* Inner Slab Window with GEM 10 Badge */}
                <div className="w-full flex-1 mt-2.5 rounded-2xl bg-gradient-to-b from-[#eef5fc] to-[#dbe8f7] p-2 flex flex-col items-center justify-center relative shadow-[inset_0_2px_5px_rgba(0,0,0,0.14)]">
                  {/* Big Bold 10 Grade */}
                  <span className="text-4xl sm:text-5xl font-black text-[#1e293b] tracking-tight leading-none drop-shadow-sm font-sans">
                    10
                  </span>

                  {/* Gold Approved Seal Badge overlapping bottom right */}
                  <div className="absolute -bottom-2 -right-2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-[#f59e0b] to-[#fcd34d] p-0.5 shadow-[inset_0_2px_3px_rgba(255,255,255,0.95),0_8px_16px_rgba(217,119,6,0.4)] flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-amber-950 font-bold"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card Meta Details */}
            <div className="mt-5 flex flex-col text-left">
              <span className="text-[11px] sm:text-[12px] font-black uppercase tracking-wider text-slate-800">
                SERVICE 02
              </span>
              <h3 className="text-xl sm:text-2xl font-black italic tracking-tight text-slate-900 uppercase mt-0.5">
                PRE-GRADE PREP
              </h3>
              <div className="mt-2 flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-slate-800 group-hover:text-slate-950 transition-colors">
                <span>See tiers & pricing</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
