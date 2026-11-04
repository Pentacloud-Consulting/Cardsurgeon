"use client";

import React from "react";
import { PlusCircle, Award, Layers, ShieldCheck } from "lucide-react";

export default function RestorationAddOns() {
  return (
    <section className="py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* Header Title */}
        <h3 className="text-2xl sm:text-3xl font-black italic uppercase text-slate-950 tracking-tight">
          ADD-ONS
        </h3>

        {/* 3D Pearl Clay Container */}
        <div className="bg-gradient-to-b from-[#ffffff] via-[#f8fbfe] to-[#edf4fc] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 border-2 border-white shadow-[0_20px_40px_-10px_rgba(85,130,185,0.2),0_6px_14px_rgba(90,140,190,0.1),inset_0_3px_6px_rgba(255,255,255,1),inset_0_-4px_8px_rgba(160,190,225,0.3)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
            {/* Addon 1: Slab Crack-Out */}
            <div className="flex items-center gap-4 bg-white/90 backdrop-blur-xs p-4 sm:p-5 rounded-2xl border border-white shadow-[0_4px_12px_rgba(90,140,185,0.08),inset_0_1.5px_2px_rgba(255,255,255,1)]">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <Layers className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <div className="font-black text-slate-900 text-sm sm:text-base flex items-center gap-1.5">
                  <span>+ Slab crack-out</span>
                  <span className="text-emerald-700 font-extrabold">— +$5.00 per card</span>
                </div>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Safely crack card from PSA, BGS, CGC, or SGC slab with zero damage.
                </p>
              </div>
            </div>

            {/* Addon 2: Pre-Grade Estimate */}
            <div className="flex items-center gap-4 bg-white/90 backdrop-blur-xs p-4 sm:p-5 rounded-2xl border border-white shadow-[0_4px_12px_rgba(90,140,185,0.08),inset_0_1.5px_2px_rgba(255,255,255,1)]">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <Award className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <div className="font-black text-slate-900 text-sm sm:text-base flex items-center gap-1.5">
                  <span>+ Pre-grade estimate</span>
                  <span className="text-amber-800 font-extrabold">— +$15.00 per card</span>
                </div>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Expert condition assessment, optical check, and grade feedback before submission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
