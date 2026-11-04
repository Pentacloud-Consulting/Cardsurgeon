import React from "react";
import Link from "next/link";
import { Check, X, ShieldCheck, AlertOctagon, AlertTriangle } from "lucide-react";

const INCLUDED_WORK = [
  "Light creases",
  "Dents",
  "Edge lifts",
  "Corner lifts",
  "Surface scratches and hazes",
  "Impressions",
];

const NOT_INCLUDED_WORK = [
  "Whitening fixes",
  "Coloration (recoloring or color touch-up)",
  "Polishing Lugia 1st Edition cards",
  "Severe creases",
  "Creases with whitening inside the crease",
  "Creases that go 100% through the card",
  "Any trimming, cutting or shaving, for centering or any other reason",
  "Any other work not on the Included list",
];

export default function WorkScope() {
  return (
    <section className="w-full flex flex-col gap-4">
      {/* Scope Header */}
      <div className="text-center flex flex-col items-center max-w-2xl mx-auto">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-black italic uppercase tracking-wider text-slate-900 drop-shadow-sm">
          WHAT WE TAKE ON VS. NOT INCLUDED
        </h2>
        <p className="text-slate-600 font-medium text-xs leading-relaxed mt-0.5">
          We strictly practice ethical, non-altering conservation. We never alter card dimensions, recolor artwork, or hide card authenticity.
        </p>
      </div>

      {/* 2 Comparison Boxes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
        {/* Box 1: Restoration work we take on */}
        <div className="clay-footer-card rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 shadow-lg border-2 border-emerald-300/60 bg-gradient-to-b from-emerald-50/60 via-white to-emerald-50/30 flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="flex items-center gap-3 pb-3.5 border-b border-emerald-200/60 mb-3.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-emerald-300 text-slate-950 flex items-center justify-center shrink-0 shadow-[0_4px_10px_-2px_rgba(16,185,129,0.35),inset_0_2px_3px_rgba(255,255,255,0.9),inset_0_-2px_3px_rgba(6,78,59,0.35)]">
                <Check className="w-5 h-5 stroke-[3] text-emerald-950" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700">
                  Approved Conservation
                </span>
                <h3 className="text-base sm:text-lg font-black italic uppercase text-slate-900 leading-tight">
                  Restoration work we take on
                </h3>
              </div>
            </div>

            {/* Included List - 2 Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {INCLUDED_WORK.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 py-2 px-3 rounded-xl bg-white/95 shadow-[inset_0_1px_2px_rgba(255,255,255,0.95),0_2px_5px_rgba(16,185,129,0.05)] border border-emerald-100"
                >
                  <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-emerald-400 to-emerald-300 text-emerald-950 flex items-center justify-center shrink-0 shadow-xs">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 leading-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-emerald-100 flex items-center gap-2 text-[11px] font-semibold text-emerald-800">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>All accepted work is performed under 60x magnification.</span>
          </div>
        </div>

        {/* Box 2: Not included */}
        <div className="clay-footer-card rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 shadow-lg border-2 border-red-300/60 bg-gradient-to-b from-red-50/60 via-white to-red-50/30 flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="flex items-center gap-3 pb-3.5 border-b border-red-200/60 mb-3.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-500 via-rose-400 to-amber-300 text-white flex items-center justify-center shrink-0 shadow-[0_4px_10px_-2px_rgba(239,68,68,0.35),inset_0_2px_3px_rgba(255,255,255,0.9),inset_0_-2px_3px_rgba(153,27,27,0.35)]">
                <X className="w-5 h-5 stroke-[3] text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black uppercase tracking-widest text-red-700">
                  Excluded From Service
                </span>
                <h3 className="text-base sm:text-lg font-black italic uppercase text-slate-900 leading-tight">
                  Not included
                </h3>
              </div>
            </div>

            {/* Not Included List - 2 Column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {NOT_INCLUDED_WORK.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 py-2 px-3 rounded-xl bg-white/95 shadow-[inset_0_1px_2px_rgba(255,255,255,0.95),0_2px_5px_rgba(239,68,68,0.05)] border border-red-100"
                >
                  <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-red-400 to-rose-300 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <X className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold text-slate-800 leading-tight">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-red-100 flex items-start gap-2 text-[11px] font-semibold text-red-800">
            <AlertOctagon className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
            <span>Cards submitted for excluded work are subject to Return on Arrival.</span>
          </div>
        </div>
      </div>

      {/* Return on Arrival Callout Note */}
      <div className="clay-footer-card rounded-[22px] sm:rounded-[26px] p-4 sm:p-5 border border-amber-300/70 bg-gradient-to-r from-amber-50/90 via-white to-amber-50/60 shadow-md flex items-start sm:items-center gap-3.5">
        <div className="w-9 h-9 rounded-xl clay-tile-yellow text-[#78350f] flex items-center justify-center shrink-0 shadow-[0_4px_10px_-2px_rgba(217,119,6,0.3),inset_0_2px_3px_rgba(255,255,255,0.9),inset_0_-2px_3px_rgba(180,95,15,0.3)]">
          <AlertTriangle className="w-4 h-4 text-amber-700" />
        </div>
        <div className="text-xs sm:text-[13px] text-slate-700 font-medium leading-relaxed">
          <span className="font-black uppercase tracking-wide text-amber-950">Return on arrival: </span>
          <span>Cards sent for work on our Not Included list are subject to return on arrival. We may send them back without doing any work, and shipping is not refundable. Taking on a card is not a promise of any result. See the </span>
          <Link
            href="/restoration"
            className="font-bold underline text-emerald-800 hover:text-emerald-950 transition-colors"
          >
            Restoration page
          </Link>
          <span> and </span>
          <Link
            href="/before-after"
            className="font-bold underline text-emerald-800 hover:text-emerald-950 transition-colors"
          >
            before & after showcase
          </Link>
          <span>.</span>
        </div>
      </div>
    </section>
  );
}
