"use client";

import React from "react";
import Link from "next/link";
import {
  Award,
  ArrowRight,
  ShoppingCart,
  Mail,
  ShieldCheck,
  Zap,
  Camera,
} from "lucide-react";

export default function TheCardSurgeonApp() {
  return (
    <section className="w-full max-w-5xl mx-auto flex flex-col gap-12 sm:gap-16 pb-12">
      {/* ========================================================
          HERO SHOWCASE: Takes Full Viewport On Page Arrival
          ======================================================== */}
      <div className="w-full min-h-[calc(100vh-7.5rem)] flex flex-col justify-center my-auto">
        <div className="clay-footer-card rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 lg:p-10 shadow-xl border-2 border-white relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          {/* Ambient decorative glow orbs */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-200/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-200/25 rounded-full blur-3xl pointer-events-none" />

          {/* LEFT COLUMN: Text & Actions */}
          <div className="w-full lg:w-[62%] flex flex-col items-start text-left gap-4 sm:gap-5 relative z-10">
            {/* Beta Status Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100/90 border border-amber-300/80 text-amber-900 text-[11px] font-black uppercase tracking-wider shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
              <Award className="w-3 h-3 text-amber-700" />
              <span>Beta Testing • Private Access</span>
            </div>

            {/* Main Titles */}
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-black uppercase tracking-widest text-emerald-800">
                The Card Surgeon App
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black italic uppercase tracking-wider text-slate-900 leading-tight">
                PRE-GRADE ESTIMATE APP —{" "}
                <span className="bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-900 bg-clip-text text-transparent">
                  COMING SOON
                </span>
              </h1>
            </div>

            {/* User Exact Paragraph */}
            <p className="text-slate-600 font-medium text-xs sm:text-sm lg:text-[15px] leading-relaxed max-w-lg">
              The Card Surgeon app is in beta testing right now. We&apos;re making sure it&apos;s ready before we open it to everyone. Until then, you can get an estimated grade and start an order right here on the website.
            </p>

            {/* 3 Call-To-Action Buttons in a Single Line */}
            <div className="flex flex-row items-center gap-2 sm:gap-3 pt-1 w-full flex-wrap sm:flex-nowrap">
              <Link
                href="/estimated-grade"
                className="clay-hero-btn-yellow rounded-full px-4 sm:px-5 py-2.5 sm:py-3 text-[11px] sm:text-xs font-black italic uppercase tracking-wider text-[#3d2400] flex items-center justify-center gap-1.5 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>GET YOUR ESTIMATED GRADE</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </Link>

              <Link
                href="/order"
                className="rounded-full px-4 sm:px-5 py-2.5 sm:py-3 text-[11px] sm:text-xs font-black italic uppercase tracking-wider bg-slate-950 text-amber-300 hover:text-white shadow-[0_12px_24px_-4px_rgba(10,15,25,0.45),inset_0_2px_3px_rgba(255,255,255,0.35),inset_0_-3px_5px_rgba(0,0,0,0.7)] border border-slate-700 flex items-center justify-center gap-1.5 hover:scale-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                <ShoppingCart className="w-3.5 h-3.5 text-amber-300 stroke-[2.2]" />
                <span>START AN ORDER</span>
              </Link>

              <Link
                href="/contact"
                className="clay-hero-btn-white rounded-full px-4 sm:px-5 py-2.5 sm:py-3 text-[11px] sm:text-xs font-black italic uppercase tracking-wider text-slate-800 hover:text-slate-950 flex items-center justify-center gap-1.5 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-700 stroke-[2.2]" />
                <span>CONTACT US</span>
              </Link>
            </div>

            {/* Direct Support Note */}
            <div className="pt-1 flex items-center gap-1.5 text-xs font-semibold text-slate-500">
              <span>Questions about the app? Email</span>
              <a
                href="mailto:admin@thecardsurgeon.com"
                className="text-emerald-700 font-black underline hover:text-emerald-900"
              >
                admin@thecardsurgeon.com
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Compact 3D Clay Smartphone Mockup */}
          <div className="w-full lg:w-[38%] flex justify-center relative z-10 shrink-0">
            <div className="relative w-full max-w-[210px] sm:max-w-[230px]">
              {/* Phone Outer Clay Shell */}
              <div className="rounded-[36px] bg-gradient-to-b from-white via-[#f1f6fc] to-[#dbe9f6] p-2.5 sm:p-3 shadow-[0_18px_36px_-8px_rgba(70,125,170,0.3),inset_0_3px_5px_rgba(255,255,255,0.98),inset_0_-4px_8px_rgba(140,175,215,0.4)] border-2 border-white">
                {/* Dynamic Island Notch */}
                <div className="flex justify-center mb-2">
                  <div className="w-16 h-3.5 rounded-full bg-slate-900 flex items-center justify-between px-2 shadow-inner">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500/70" />
                  </div>
                </div>

                {/* Internal Screen Viewport */}
                <div className="rounded-[26px] bg-gradient-to-b from-[#0b1320] via-[#101b2d] to-[#090f1a] p-2.5 text-white flex flex-col gap-2 shadow-inner border border-slate-700/60 relative overflow-hidden">
                  {/* Laser scan line simulation */}
                  <div className="absolute top-1/3 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent blur-[1px] animate-pulse pointer-events-none" />

                  {/* Top App Status */}
                  <div className="flex items-center justify-between text-[8px] font-bold text-slate-400">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping" />
                      BETA V1.2
                    </span>
                    <span>CARD SURGEON</span>
                  </div>

                  {/* Card Scanning Frame */}
                  <div className="relative h-44 sm:h-48 w-full rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-dashed border-emerald-500/40 p-2 flex flex-col items-center justify-between shadow-inner">
                    {/* Target Corners */}
                    <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t border-l border-emerald-400" />
                    <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t border-r border-emerald-400" />
                    <div className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b border-l border-emerald-400" />
                    <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b border-r border-emerald-400" />

                    {/* Top Scan Title */}
                    <span className="text-[8px] font-black tracking-widest text-slate-400 uppercase">
                      16-Angle Optical Check
                    </span>

                    {/* Projected Grade Center Medallion (Zero Overlapping Text) */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 text-slate-950 flex flex-col items-center justify-center shadow-md border-2 border-white py-1">
                      <span className="text-[7.5px] font-black uppercase tracking-wider leading-none">
                        PRE-GRADE
                      </span>
                      <span className="text-xl font-black italic tracking-tight leading-none my-0.5">
                        9.5
                      </span>
                      <span className="text-[7px] font-bold uppercase tracking-wider text-amber-950 leading-none">
                        GEM MINT
                      </span>
                    </div>

                    {/* Subgrade Badges */}
                    <div className="grid grid-cols-4 gap-1 w-full text-center">
                      <div className="rounded bg-slate-800/80 p-0.5">
                        <div className="text-[6.5px] text-slate-400">CEN</div>
                        <div className="text-[8.5px] font-black text-emerald-400">10</div>
                      </div>
                      <div className="rounded bg-slate-800/80 p-0.5">
                        <div className="text-[6.5px] text-slate-400">CRN</div>
                        <div className="text-[8.5px] font-black text-amber-300">9.5</div>
                      </div>
                      <div className="rounded bg-slate-800/80 p-0.5">
                        <div className="text-[6.5px] text-slate-400">EDG</div>
                        <div className="text-[8.5px] font-black text-amber-300">9.5</div>
                      </div>
                      <div className="rounded bg-slate-800/80 p-0.5">
                        <div className="text-[6.5px] text-slate-400">SUR</div>
                        <div className="text-[8.5px] font-black text-emerald-400">9.5</div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom App Pill */}
                  <div className="w-full py-1 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-400 text-emerald-950 text-center font-black italic uppercase text-[9px] tracking-wider shadow-xs">
                    ESTIMATE READY
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          3 FEATURE TEASER CARDS (Seen On Scroll)
          ======================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
        <div className="clay-footer-card rounded-[22px] sm:rounded-[26px] p-5 shadow-md border border-white/90 flex flex-col gap-2">
          <div className="clay-tile-blue w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
            <Camera className="w-5 h-5 text-blue-700 stroke-[2.2]" />
          </div>
          <h3 className="text-sm sm:text-base font-black italic uppercase text-slate-900 leading-snug">
            Guided 16-Angle Photography
          </h3>
          <p className="text-[11px] sm:text-xs text-slate-600 font-medium leading-relaxed">
            Built-in optical alignment guides ensure your card photos are captured with perfect lighting, sharp focus, and zero glare.
          </p>
        </div>

        <div className="clay-footer-card rounded-[22px] sm:rounded-[26px] p-5 shadow-md border border-white/90 flex flex-col gap-2">
          <div className="clay-tile-yellow w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
            <Zap className="w-5 h-5 text-amber-800 stroke-[2.2]" />
          </div>
          <h3 className="text-sm sm:text-base font-black italic uppercase text-slate-900 leading-snug">
            Instant Estimate Turnaround
          </h3>
          <p className="text-[11px] sm:text-xs text-slate-600 font-medium leading-relaxed">
            Proprietary condition assessment models compute project subgrades in seconds, backed by manual inspection from card experts.
          </p>
        </div>

        <div className="clay-footer-card rounded-[22px] sm:rounded-[26px] p-5 shadow-md border border-white/90 flex flex-col gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-200 to-teal-100 shadow-[0_6px_12px_-2px_rgba(16,185,129,0.2),inset_0_2px_3px_rgba(255,255,255,0.95),inset_0_-2px_3px_rgba(6,78,59,0.2)] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5 text-emerald-800 stroke-[2.2]" />
          </div>
          <h3 className="text-sm sm:text-base font-black italic uppercase text-slate-900 leading-snug">
            Zero Shipping Risk
          </h3>
          <p className="text-[11px] sm:text-xs text-slate-600 font-medium leading-relaxed">
            Your valuable collectibles remain safely in your possession at all times. No transit risk, no insurance costs, zero turnaround delays.
          </p>
        </div>
      </div>
    </section>
  );
}
