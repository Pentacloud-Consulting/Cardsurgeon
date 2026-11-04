"use client";

import React from "react";
import Link from "next/link";
import {
  X,
  AlertTriangle,
  ArrowRight,
  ShieldAlert,
  Wrench,
} from "lucide-react";

const EXCLUDED_WORK = [
  {
    title: "Crease work",
    desc: "Pressure flattening, hydraulic pressing, and structural ridge removal.",
  },
  {
    title: "Dent removal",
    desc: "Foil/paper matrix elevation and surface indentation lifting.",
  },
  {
    title: "Edge and corner work",
    desc: "Delamination sealing, corner curl correction, and fiber realignment.",
  },
  {
    title: "Any restorative work",
    desc: "Any physical modification beyond cleaning, polish, and holder placement.",
  },
];

export default function PreGradeNotIncluded() {
  return (
    <section id="exclusions" className="w-full scroll-mt-24">
      <div className="clay-footer-card rounded-[32px] sm:rounded-[40px] p-6 sm:p-9 shadow-xl border-2 border-red-300/60 bg-gradient-to-br from-red-50/50 via-white to-amber-50/30 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-gradient-to-br from-red-200/20 to-amber-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col gap-6 relative z-10">
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-red-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-red-500 via-rose-400 to-amber-300 text-white flex items-center justify-center shrink-0 shadow-[0_6px_14px_-2px_rgba(239,68,68,0.35),inset_0_2.5px_4px_rgba(255,255,255,0.9),inset_0_-2.5px_4px_rgba(153,27,27,0.35)]">
                <ShieldAlert className="w-6 h-6 stroke-[2.4]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-black uppercase tracking-widest text-red-700">
                  Service Boundaries & Distinction
                </span>
                <h3 className="text-xl sm:text-2xl font-black italic uppercase tracking-wider text-slate-950">
                  NOT INCLUDED IN PRE-GRADE PREP
                </h3>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100/80 border border-red-200 text-red-800 text-xs font-bold w-fit">
              <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
              <span>Restoration Required For Structural Damage</span>
            </div>
          </div>

          {/* 4 Excluded Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {EXCLUDED_WORK.map((item) => (
              <div
                key={item.title}
                className="p-4 rounded-2xl bg-white/95 border border-red-200/70 shadow-[inset_0_1px_3px_rgba(255,255,255,0.9),0_4px_10px_rgba(239,68,68,0.06)] flex flex-col justify-between hover:scale-[1.02] transition-transform"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-red-500 to-rose-400 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <X className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="font-black italic text-sm text-slate-900 leading-tight">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Banner with Restoration CTA */}
          <div className="mt-2 p-5 rounded-2xl bg-gradient-to-r from-amber-100/80 via-yellow-50/90 to-amber-100/70 border border-amber-300/80 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3 text-center md:text-left">
              <div className="w-10 h-10 rounded-xl clay-tile-yellow flex items-center justify-center shrink-0 hidden sm:flex text-amber-800 shadow-sm">
                <Wrench className="w-5 h-5 text-amber-700" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-sm sm:text-base text-slate-900 tracking-wide">
                  Have dents, corner dings, or creasing on your cards?
                </span>
                <span className="text-xs text-slate-600 font-medium">
                  Our full surgical restoration service handles structural flaws and physical preservation.
                </span>
              </div>
            </div>

            <Link
              href="/order?service=restoration"
              className="w-full md:w-auto clay-hero-btn-yellow rounded-full px-8 py-3.5 text-xs sm:text-[13px] font-black italic uppercase tracking-wider text-[#3d2400] text-center flex items-center justify-center gap-2 shadow-md hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer"
            >
              <span>NEED RESTORATION? BOOK A RESTORATION</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
