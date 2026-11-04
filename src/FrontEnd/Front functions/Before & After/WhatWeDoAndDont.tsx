"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, ShieldAlert } from "lucide-react";

export default function WhatWeDoAndDont() {
  const includedItems = [
    { title: "Light creases & surface wrinkles", desc: "Non-breaking paper fiber realignment" },
    { title: "Minor dents & impressions", desc: "Fingernail indents, binder dings, and pressure marks" },
    { title: "Edge & corner lifts", desc: "Gentle reseating of delaminated top layers" },
    { title: "Surface scratches & cloudiness/haze", desc: "Micro-polish treatment on foil and clear surface" },
    { title: "Professional micro-cleaning", desc: "Removal of wax, dirt, dust, and handling residues" },
    { title: "Condition pre-grade opinion", desc: "Honest collector condition feedback included" },
    { title: "Protective packaging", desc: "Fresh penny sleeve and premium semi-rigid holder" },
  ];

  const notIncludedItems = [
    { title: "Whitening fixes", desc: "No paint or edge pigment restoration" },
    { title: "Coloration", desc: "(recoloring or color touch-up)" },
    { title: "Polishing Lugia 1st Edition cards", desc: "Strictly excluded from buffing" },
    { title: "Severe creases", desc: "Paper core fractures or tears" },
    { title: "Creases with whitening inside", desc: "Exposed white fiber cannot be sealed" },
    { title: "Creases that go 100% through the card", desc: "Full penetration paper damage" },
    { title: "Any trimming, cutting or shaving", desc: "For centering or any other reason" },
    { title: "Any other work not on the Included list", desc: "Strictly forbidden under Terms §8A" },
  ];

  return (
    <section id="what-we-do" className="scroll-mt-24 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-6">
        {/* Header Title (Compact) */}
        <div className="text-center space-y-1.5">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 uppercase tracking-tight">
            WHAT WE DO &amp; DON&apos;T
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-medium max-w-2xl mx-auto">
            Honest boundaries. We believe in complete transparency about what physical card restoration can and cannot achieve.
          </p>
        </div>

        {/* Two Column Claymorphic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6 items-stretch">
          {/* LEFT: WE DO / INCLUDED (Mint 3D Clay Card) */}
          <div className="bg-gradient-to-b from-[#f2fcf7] via-[#e8f8f1] to-[#daf4e8] rounded-[28px] sm:rounded-[34px] p-4 sm:p-6 border-2 border-white shadow-[0_16px_36px_-8px_rgba(16,185,129,0.2),0_4px_12px_rgba(5,150,105,0.1),inset_0_3px_5px_rgba(255,255,255,0.98),inset_0_-3px_6px_rgba(16,185,129,0.18)] flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10 space-y-3.5 sm:space-y-4">
              {/* Header Badges */}
              <div className="flex items-center justify-between pb-1 border-b border-emerald-200/50">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white flex items-center justify-center shadow-md">
                    <ShieldCheck className="w-5 h-5 stroke-[2.3]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 block">
                      WE DO
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black italic uppercase text-emerald-950 tracking-tight">
                      INCLUDED
                    </h3>
                  </div>
                </div>

                <span className="bg-emerald-200/80 text-emerald-900 text-[11px] font-black uppercase px-2.5 py-0.5 rounded-full border border-emerald-300">
                  7 Services
                </span>
              </div>

              {/* Items in 2-Column Grid (1 line me 2 point) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                {includedItems.map((item, idx) => (
                  <div
                    key={idx}
                    className={`bg-white/85 backdrop-blur-xs rounded-xl p-2.5 border border-white/95 shadow-[0_2px_6px_rgba(5,150,105,0.05),inset_0_1px_2px_rgba(255,255,255,1)] flex items-start gap-2.5 hover:translate-x-0.5 transition-transform ${
                      idx === 6 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <div className="font-bold text-slate-900 text-xs leading-snug">{item.title}</div>
                      <div className="text-[11px] text-slate-500 leading-tight mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Disclaimer */}
            <div className="relative z-10 mt-3.5 pt-2.5 border-t border-emerald-300/60 bg-white/70 backdrop-blur-xs rounded-xl p-2.5 sm:p-3 text-[11px] text-emerald-950 font-medium leading-relaxed shadow-2xs">
              <strong>Included means it is work we take on.</strong> It is not a promise of any result: results depend on the card. Restored cards may show evidence of work, and grading companies may detect it.
            </div>
          </div>

          {/* RIGHT: WE DON'T / NOT INCLUDED (Rose 3D Clay Card) */}
          <div className="bg-gradient-to-b from-[#fff7f7] via-[#ffecee] to-[#ffe2e5] rounded-[28px] sm:rounded-[34px] p-4 sm:p-6 border-2 border-white shadow-[0_16px_36px_-8px_rgba(244,63,94,0.2),0_4px_12px_rgba(225,29,72,0.1),inset_0_3px_5px_rgba(255,255,255,0.98),inset_0_-3px_6px_rgba(244,63,94,0.16)] flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10 space-y-3.5 sm:space-y-4">
              {/* Header Badges */}
              <div className="flex items-center justify-between pb-1 border-b border-rose-200/50">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-500 to-red-600 text-white flex items-center justify-center shadow-md">
                    <ShieldAlert className="w-5 h-5 stroke-[2.3]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-rose-800 block">
                      WE DON&apos;T
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black italic uppercase text-rose-950 tracking-tight">
                      NOT INCLUDED
                    </h3>
                  </div>
                </div>

                <span className="bg-rose-200/80 text-rose-900 text-[11px] font-black uppercase px-2.5 py-0.5 rounded-full border border-rose-300">
                  8 Exclusions
                </span>
              </div>

              {/* 8 Excluded Cards Grid in 2 Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                {notIncludedItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white/85 backdrop-blur-xs rounded-xl p-2.5 border border-white/95 shadow-[0_2px_6px_rgba(244,63,94,0.05),inset_0_1px_2px_rgba(255,255,255,1)] flex items-start gap-2.5 text-slate-900 hover:translate-x-0.5 transition-transform"
                  >
                    <div className="w-4 h-4 rounded-md bg-gradient-to-br from-rose-500 to-red-600 text-white flex items-center justify-center font-black flex-shrink-0 text-[9px] shadow-xs mt-0.5">
                      ✕
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-slate-900 text-xs leading-snug">{item.title}</div>
                      {item.desc && <div className="text-[11px] text-slate-500 leading-tight mt-0.5">{item.desc}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Notice */}
            <div className="relative z-10 mt-3.5 pt-2.5 border-t border-rose-300/60 bg-white/70 backdrop-blur-xs rounded-xl p-2.5 sm:p-3 text-[11px] text-rose-950 font-medium leading-relaxed shadow-2xs">
              <strong>Strict Compliance:</strong> Submissions requesting excluded work are cancelled on arrival and returned unworked. Shipping is non-refundable. See Terms §8A.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
