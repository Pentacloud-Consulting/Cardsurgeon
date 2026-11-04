"use client";

import React from "react";
import { Clock, ShieldAlert, Coins, CheckCircle2 } from "lucide-react";

export default function PhotoGuideDisclaimers() {
  return (
    <section className="w-full">
      {/* 3 Informational Clay Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {/* Card 1: Review Times & Team Check */}
        <div className="clay-footer-card rounded-[26px] sm:rounded-[32px] p-6 shadow-lg border border-white/90 flex flex-col justify-between hover:scale-[1.01] transition-transform">
          <div>
            <div className="clay-tile-blue w-11 h-11 rounded-2xl flex items-center justify-center mb-4 shrink-0">
              <Clock className="w-5 h-5 text-blue-700 stroke-[2.3]" />
            </div>
            <h4 className="font-black italic uppercase text-sm sm:text-base text-slate-900 leading-snug mb-2">
              Review Timelines & Estimates
            </h4>
            <p className="text-xs sm:text-[13px] text-slate-600 font-medium leading-relaxed">
              Most estimates appear right away. Some cards are held for a closer look by our team before any estimate is shown, and those can take longer. Our team may review and change any estimate. These times are goals, not promises. Estimates are not guarantees of any grade.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-bold text-blue-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
            <span>Turnaround Goals</span>
          </div>
        </div>

        {/* Card 2: Professional Grading Companies Difference */}
        <div className="clay-footer-card rounded-[26px] sm:rounded-[32px] p-6 shadow-lg border border-white/90 flex flex-col justify-between hover:scale-[1.01] transition-transform">
          <div>
            <div className="clay-tile-yellow w-11 h-11 rounded-2xl flex items-center justify-center mb-4 shrink-0">
              <ShieldAlert className="w-5 h-5 text-amber-800 stroke-[2.3]" />
            </div>
            <h4 className="font-black italic uppercase text-sm sm:text-base text-slate-900 leading-snug mb-2">
              Estimates & Opinion Notice
            </h4>
            <p className="text-xs sm:text-[13px] text-slate-600 font-medium leading-relaxed">
              Grades shown are estimates only. Pre-grades are an opinion based on images and are not guaranteed to be accurate. They may differ from the grade a professional grading company assigns, and we make no guarantee of any final grade or value.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-bold text-amber-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
            <span>Independent Opinion Basis</span>
          </div>
        </div>

        {/* Card 3: Not Financial Advice */}
        <div className="clay-footer-card rounded-[26px] sm:rounded-[32px] p-6 shadow-lg border border-white/90 flex flex-col justify-between hover:scale-[1.01] transition-transform">
          <div>
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-200 to-teal-100 shadow-[0_6px_14px_-2px_rgba(16,185,129,0.22),inset_0_2px_4px_rgba(255,255,255,0.95),inset_0_-2.5px_4px_rgba(6,78,59,0.2)] flex items-center justify-center mb-4 shrink-0">
              <Coins className="w-5 h-5 text-emerald-800 stroke-[2.3]" />
            </div>
            <h4 className="font-black italic uppercase text-sm sm:text-base text-slate-900 leading-snug mb-2">
              Financial Disclaimer
            </h4>
            <p className="text-xs sm:text-[13px] text-slate-600 font-medium leading-relaxed">
              Pre-grades are estimates, not guarantees of any grade or value, and nothing here is financial advice.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-bold text-emerald-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Pure Collector Assessment</span>
          </div>
        </div>
      </div>
    </section>
  );
}
