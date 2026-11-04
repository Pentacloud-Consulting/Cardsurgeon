"use client";

import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden select-none min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex items-center justify-center pt-20 sm:pt-24 pb-24 sm:pb-32 lg:pb-40 px-4 sm:px-8 lg:px-14">
      {/* =========================================================================
          BACKGROUND LOOPING VIDEO (HERO SECTION BG) - 100% FULLY VISIBLE
         ========================================================================= */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <video
          src="/Video/Hero section.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* =========================================================================
          HERO FOREGROUND CONTENT - CENTERED & POSITIONED UPWARD (CLEAR OF CARDS)
         ========================================================================= */}
      <div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center text-center -translate-y-8 sm:-translate-y-12 lg:-translate-y-16">
        {/* Chunky Clay Headline - Scaled compact & centered */}
        <h1 className="hero-chunky-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-slate-900 drop-shadow-[0_2px_12px_rgba(255,255,255,0.95)]">
          BRING NEW LIFE <br />
          TO YOUR CARDS.
        </h1>

        {/* Shortened Information Text - NO BOX, clean text with soft readability shadow */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-800 font-semibold leading-relaxed max-w-xl mx-auto drop-shadow-[0_1px_8px_rgba(255,255,255,0.95)]">
          Professional cleaning and restoration for trading cards. Carefully
          repaired and preserved to bring out the best in your collection.
        </p>

        {/* Interactive Clay Button - Centered */}
        <div className="mt-6 sm:mt-8 flex justify-center">
          <Link
            href="/order"
            className="clay-hero-btn-yellow rounded-full px-8 sm:px-10 py-4 flex items-center justify-center font-black italic uppercase tracking-wider text-[#3d2400] text-xs sm:text-[14px] shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            GET A QUOTE &amp; START AN ORDER
          </Link>
        </div>
      </div>
    </section>
  );
}
