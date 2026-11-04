"use client";

import React from "react";
import {
  Cpu,
  UserCheck,
  Clock,
  ShieldAlert,
  Camera,
  Coins,
  Award,
  Scale,
  Info,
  CheckCircle2,
} from "lucide-react";

export default function HowWeMakeYourEstimate() {
  return (
    <section className="w-full flex flex-col gap-6 sm:gap-8">
      {/* ========================================================
          MAIN SECTION: How We Make Your Estimate
          ======================================================== */}
      <div className="clay-footer-card rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 shadow-xl border border-white/90 relative overflow-hidden flex flex-col gap-8">
        {/* Subtle decorative background gradient */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300/60 text-emerald-900 text-xs font-black uppercase tracking-widest shadow-xs">
            <Award className="w-3.5 h-3.5 text-emerald-700" />
            <span>TRANSPARENT METHODOLOGY</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black italic uppercase tracking-wide text-slate-900 leading-tight">
            HOW WE MAKE YOUR ESTIMATE
          </h2>

          <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
            The Card Surgeon built this app ourselves. Here is how our dual-stage optical assessment and card expert evaluation workflow operates.
          </p>
        </div>

        {/* 3 Pillars of the Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 relative z-10">
          {/* Pillar 1: Custom Software & AI */}
          <div className="clay-card-floating rounded-[26px] p-6 flex flex-col gap-3 shadow-md border border-white/95">
            <div className="clay-tile-blue w-12 h-12 rounded-2xl flex items-center justify-center shrink-0">
              <Cpu className="w-6 h-6 text-blue-700 stroke-[2.2]" />
            </div>
            <h3 className="text-base sm:text-lg font-black italic uppercase text-slate-900 leading-snug">
              Custom Software & AI
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-600 font-medium leading-relaxed">
              The Card Surgeon built this app ourselves. Our custom-built software checks each photo and, with your permission, uses a third-party AI service to draft an initial estimate.
            </p>
          </div>

          {/* Pillar 2: Expert Human Verification */}
          <div className="clay-card-floating rounded-[26px] p-6 flex flex-col gap-3 shadow-md border border-white/95">
            <div className="clay-tile-yellow w-12 h-12 rounded-2xl flex items-center justify-center shrink-0">
              <UserCheck className="w-6 h-6 text-amber-800 stroke-[2.2]" />
            </div>
            <h3 className="text-base sm:text-lg font-black italic uppercase text-slate-900 leading-snug">
              Expert Human Review
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-600 font-medium leading-relaxed">
              If something needs a closer look, a person at The Card Surgeon checks it, using our own experience with cards, before you see a result.
            </p>
          </div>

          {/* Pillar 3: Realistic Timelines */}
          <div className="clay-card-floating rounded-[26px] p-6 flex flex-col gap-3 shadow-md border border-white/95">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-200 to-teal-100 shadow-[0_6px_14px_-2px_rgba(16,185,129,0.22),inset_0_2px_4px_rgba(255,255,255,0.95),inset_0_-2.5px_4px_rgba(6,78,59,0.2)] flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 text-emerald-800 stroke-[2.2]" />
            </div>
            <h3 className="text-base sm:text-lg font-black italic uppercase text-slate-900 leading-snug">
              Rapid Turnaround
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-600 font-medium leading-relaxed">
              Most estimates appear right away. Some cards are held for a closer look by our team before any estimate is shown, and those can take longer. Our team may review and change any estimate. These times are goals, not promises.
            </p>
          </div>
        </div>

        {/* Highlight Note */}
        <div className="rounded-2xl p-4 sm:p-5 bg-gradient-to-r from-amber-50 via-amber-100/60 to-yellow-50 border border-amber-300/70 shadow-sm flex items-start gap-3.5 relative z-10">
          <Info className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm font-bold text-amber-950 leading-relaxed">
            It is still an estimate: we can&apos;t guarantee that any grading company would give the same grade.
          </p>
        </div>
      </div>

      {/* ========================================================
          3 KEY PRE-GRADE BOUNDARIES / ESSENTIAL FACTS
          ======================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Fact 1 */}
        <div className="clay-footer-card rounded-[26px] sm:rounded-[30px] p-5 sm:p-6 shadow-md border border-white/90 flex flex-col justify-between hover:scale-[1.01] transition-transform">
          <div>
            <div className="clay-tile-blue w-11 h-11 rounded-2xl flex items-center justify-center mb-4 shrink-0">
              <Camera className="w-5 h-5 text-blue-700 stroke-[2.3]" />
            </div>
            <h4 className="font-black italic uppercase text-sm sm:text-base text-slate-900 leading-snug mb-1.5">
              Photo Pre-Grades Are An Estimate Only
            </h4>
            <p className="text-xs sm:text-[13px] text-slate-600 font-medium leading-relaxed">
              They can&apos;t replace an in-person pre-grade, and photos only show so much detail.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-bold text-blue-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
            <span>Digital Optics Limitation</span>
          </div>
        </div>

        {/* Fact 2 */}
        <div className="clay-footer-card rounded-[26px] sm:rounded-[30px] p-5 sm:p-6 shadow-md border border-white/90 flex flex-col justify-between hover:scale-[1.01] transition-transform">
          <div>
            <div className="clay-tile-yellow w-11 h-11 rounded-2xl flex items-center justify-center mb-4 shrink-0">
              <Coins className="w-5 h-5 text-amber-800 stroke-[2.3]" />
            </div>
            <h4 className="font-black italic uppercase text-sm sm:text-base text-slate-900 leading-snug mb-1.5">
              Not Guarantees Or Financial Advice
            </h4>
            <p className="text-xs sm:text-[13px] text-slate-600 font-medium leading-relaxed">
              Pre-grades are estimates, not guarantees of any grade or value, and nothing here is financial advice.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-bold text-amber-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
            <span>Pure Collector Assessment</span>
          </div>
        </div>

        {/* Fact 3 */}
        <div className="clay-footer-card rounded-[26px] sm:rounded-[30px] p-5 sm:p-6 shadow-md border border-white/90 flex flex-col justify-between hover:scale-[1.01] transition-transform">
          <div>
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-200 to-emerald-100 shadow-[0_6px_12px_-2px_rgba(16,185,129,0.2),inset_0_2px_4px_rgba(255,255,255,0.95),inset_0_-2.5px_4px_rgba(6,78,59,0.2)] flex items-center justify-center mb-4 shrink-0">
              <Award className="w-5 h-5 text-emerald-800 stroke-[2.3]" />
            </div>
            <h4 className="font-black italic uppercase text-sm sm:text-base text-slate-900 leading-snug mb-1.5">
              Experience & Proprietary Code
            </h4>
            <p className="text-xs sm:text-[13px] text-slate-600 font-medium leading-relaxed">
              We do not guarantee or promise grades. We use our experience and programming to give estimates.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-bold text-emerald-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Expert Opinion Basis</span>
          </div>
        </div>
      </div>

      {/* ========================================================
          COMPREHENSIVE LEGAL & THIRD-PARTY SCALE DISCLAIMER CARD
          ======================================================== */}
      <div className="clay-footer-card rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 shadow-lg border border-slate-200/80 bg-gradient-to-br from-white via-slate-50 to-blue-50/30 flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200/70">
          <div className="flex items-center gap-3">
            <div className="clay-tile-obsidian w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
              <Scale className="w-5 h-5 text-amber-300 stroke-[2.2]" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                Official Transparency
              </span>
              <h4 className="text-sm sm:text-base font-black italic uppercase text-slate-900 leading-snug">
                ESTIMATED GRADE DISCLOSURE & THIRD-PARTY SCALE NOTICE
              </h4>
            </div>
          </div>

          {/* Scale pill indicators */}
          <div className="flex flex-wrap items-center gap-1.5">
            {["PSA SCALE", "BGS SCALE", "CGC SCALE", "SGC SCALE"].map((brand) => (
              <span
                key={brand}
                className="px-2.5 py-1 rounded-full text-[10px] font-black tracking-wider bg-slate-200/70 text-slate-700 border border-slate-300/60"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Complete unshortened legal disclosure text requested by user */}
        <p className="text-xs sm:text-[13px] text-slate-600 font-medium leading-relaxed text-justify">
          Photo pre-grades are an estimate only. They can&apos;t replace an in-person pre-grade, and photos only show so much detail. Pre-grades are estimates, not guarantees of any grade or value, and nothing here is financial advice. We do not guarantee or promise grades. We use our experience and programming to give estimates. Most estimates appear right away. Some cards are held for a closer look by our team before any estimate is shown, and those can take longer. Our team may review and change any estimate. These times are goals, not promises. If we change an estimate, the new version replaces the earlier one. The Card Surgeon is not affiliated with PSA, Beckett (BGS), CGC or SGC; their names only identify a grading scale.
        </p>
      </div>
    </section>
  );
}
