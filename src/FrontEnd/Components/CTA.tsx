"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="start-order" className="relative w-full py-12 sm:py-16 px-3 sm:px-6 lg:px-10 select-none overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* =========================================================================
            GIANT CLAY CONTAINER - Soft Cream/White with 3D Bevel & Ambient Drop Shadow
           ========================================================================= */}
        <div className="relative rounded-[40px] sm:rounded-[54px] bg-gradient-to-b from-[#fbfbfc] via-[#f7f8fa] to-[#eef3f8] p-6 sm:p-10 lg:p-14 shadow-[0_30px_70px_rgba(60,100,140,0.18),0_10px_25px_rgba(80,120,160,0.08),inset_0_4px_8px_rgba(255,255,255,1),inset_0_-6px_10px_rgba(180,205,230,0.3)] border-[2px] border-white flex flex-col items-center text-center overflow-hidden">
          {/* =======================================================================
              TOP PEACH CLAY BADGE PILL: "Ready to scrub in?"
             ======================================================================= */}
          <div className="mb-4 sm:mb-5">
            <span className="inline-flex items-center px-6 py-2 rounded-full text-xs sm:text-sm font-black tracking-wide text-[#b45309] bg-gradient-to-b from-[#fee7d1] to-[#fed3aa] shadow-[0_6px_16px_rgba(249,115,22,0.22),inset_0_2px_3px_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(217,119,6,0.25)] border border-white">
              Ready to scrub in?
            </span>
          </div>

          {/* =======================================================================
              HERO CHUNKY HEADLINE: "Ready when you are"
             ======================================================================= */}
          <h2 className="hero-chunky-headline text-3xl sm:text-4xl lg:text-[50px] font-black text-[#172b43] leading-tight tracking-tight mb-2 sm:mb-3">
            Ready when you are
          </h2>

          {/* Subheading: "Bring new life to your cards." */}
          <p className="hero-chunky-headline text-lg sm:text-xl lg:text-[23px] font-bold text-[#1e344f] mb-3">
            Bring new life to your cards.
          </p>

          {/* Two-line Description */}
          <p className="text-sm sm:text-base font-semibold text-slate-600 max-w-lg leading-relaxed mb-7 sm:mb-9">
            Restoration can improve the look of a card.
            <br className="hidden sm:block" />
            Results vary, and the card is changed.
          </p>

          {/* =======================================================================
              TWO 3D CLAY INTERACTIVE ACTION BUTTONS
             ======================================================================= */}
          <div className="flex flex-col items-center gap-3 w-full sm:w-auto">
            {/* Primary Yellow Clay Pill Button: "Get a quote & start an order ->" */}
            <Link
              href="/order"
              className="w-full sm:w-auto px-8 sm:px-12 py-3.5 sm:py-4 rounded-full text-[#3d2400] font-black italic uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2.5 bg-gradient-to-b from-[#ffc700] via-[#ffb700] to-[#f6a600] shadow-[0_16px_32px_rgba(220,145,10,0.38),0_6px_14px_rgba(200,130,10,0.22),inset_0_3px_5px_rgba(255,255,255,0.9),inset_0_-4px_6px_rgba(170,95,5,0.45)] border border-amber-200/80 hover:scale-105 active:scale-95 transition-all"
            >
              <span>Get a quote & start an order</span>
              <ArrowRight className="w-5 h-5 stroke-[2.8]" />
            </Link>

            {/* Secondary Soft Ice-Blue Clay Pill Button: "Track an order" */}
            <Link
              href="/track-order"
              className="w-full sm:w-auto px-7 sm:px-9 py-2 sm:py-2.5 rounded-full text-[#1e3a58] font-bold text-xs sm:text-sm bg-gradient-to-b from-[#e3effa] to-[#cee2f4] shadow-[0_8px_18px_rgba(60,110,160,0.18),inset_0_2px_3px_rgba(255,255,255,0.95),inset_0_-2.5px_4px_rgba(140,180,215,0.35)] border border-white hover:scale-105 active:scale-95 transition-all"
            >
              Track an order
            </Link>
          </div>

          {/* =======================================================================
              BOTTOM CONTACT INFO BAR (Exact matching text from Image 1)
             ======================================================================= */}
          <div className="mt-8 sm:mt-10 pt-4 border-t border-slate-200/60 w-full flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs sm:text-sm font-medium text-slate-600">
            <span>Email</span>
            <a
              href="mailto:admin@thecardsurgeon.com"
              className="font-black text-[#172b43] hover:underline"
            >
              admin@thecardsurgeon.com
            </a>
            <span className="text-slate-400">·</span>
            <span>call (706) 765-4280, message us on social, or use the form.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
