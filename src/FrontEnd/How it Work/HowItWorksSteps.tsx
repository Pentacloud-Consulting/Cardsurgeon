import React from "react";
import Link from "next/link";
import {
  Camera,
  Package,
  Wrench,
  Truck,
  ArrowRight,
  ShieldAlert,
  Info,
  CheckCircle2,
} from "lucide-react";

const STEPS = [
  {
    num: "1",
    title: "Submit your order online with photos",
    desc: "Select your tier, enter declared value, upload card photos, and choose prepaid shipping or ship-it-yourself.",
    icon: Camera,
    colorClass: "from-amber-400 to-yellow-300 text-amber-950",
    pillClass: "clay-tile-yellow",
  },
  {
    num: "2",
    title: "Ship your cards to our office",
    desc: "Pack cards securely in penny sleeves and semi-rigid holders inside a rigid mailer. Use our prepaid label or your own carrier.",
    icon: Package,
    colorClass: "from-blue-400 to-cyan-300 text-blue-950",
    pillClass: "clay-tile-blue",
  },
  {
    num: "3",
    title: "We review, then do the work",
    desc: "Our lab confirms receipt, performs microscopic analysis, ultrasonic cleansing, and precision restorative pressing.",
    icon: Wrench,
    colorClass: "from-emerald-400 to-teal-300 text-emerald-950",
    pillClass: "clay-tile-blue",
  },
  {
    num: "4",
    title: "Cards return to you, tracked",
    desc: "Your restored cards are sealed in fresh archival holders and returned via insured, tracked carrier delivery.",
    icon: Truck,
    colorClass: "from-amber-400 to-orange-400 text-amber-950",
    pillClass: "clay-tile-orange",
  },
];

export default function HowItWorksSteps() {
  return (
    <section className="w-full flex flex-col gap-10 sm:gap-12">
      {/* Hero Header */}
      <div className="text-center flex flex-col items-center max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-black italic uppercase tracking-wider text-emerald-800 drop-shadow-[0_2px_2px_rgba(255,255,255,0.9)] mb-3">
          HOW IT WORKS
        </h1>
        <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
          From submission to delivery, your cards are treated with white-glove surgical care, state-of-the-art optical gear, and insured tracking every step of the way.
        </p>
      </div>

      {/* 4 Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STEPS.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.num}
              className="clay-footer-card rounded-[28px] sm:rounded-[32px] p-6 sm:p-7 shadow-xl border border-white/80 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden group"
            >
              {/* Top Row: Number Badge & Icon */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-emerald-300 flex items-center justify-center shrink-0 shadow-[0_8px_18px_-3px_rgba(16,185,129,0.38),inset_0_3px_4px_rgba(255,255,255,0.95),inset_0_-3px_5px_rgba(6,78,59,0.35)] group-hover:scale-105 transition-transform duration-200">
                  <span className="font-black italic text-2xl text-emerald-950 drop-shadow-[0_1px_1px_rgba(255,255,255,0.6)]">
                    {step.num}
                  </span>
                </div>

                <div className="w-10 h-10 rounded-2xl bg-white/90 border border-emerald-100 shadow-sm flex items-center justify-center text-slate-800 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-emerald-700" />
                </div>
              </div>

              {/* Title & Desc */}
              <div className="flex flex-col gap-2">
                <h3 className="text-base sm:text-lg font-black italic tracking-wide text-slate-900 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Workflow</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pre-Grade Prep vs Restoration Callout Card */}
      <div className="clay-footer-card rounded-[32px] sm:rounded-[36px] p-6 sm:p-8 shadow-xl border-2 border-amber-300/60 bg-gradient-to-br from-amber-50/70 via-white to-amber-50/40 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4 max-w-3xl">
            <div className="w-12 h-12 rounded-2xl clay-tile-yellow text-[#78350f] flex items-center justify-center shrink-0 shadow-[0_6px_14px_-2px_rgba(217,119,6,0.35),inset_0_2.5px_4px_rgba(255,255,255,0.9),inset_0_-2.5px_4px_rgba(180,95,15,0.35)] mt-1">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-amber-900">
                <Info className="w-3.5 h-3.5 text-amber-700" />
                <span>Service Distinction</span>
              </div>
              <h2 className="text-lg sm:text-xl font-black italic uppercase text-slate-950">
                Pre-Grade Prep is not restoration
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                Pre-Grade Prep covers cleaning, polish, a penny sleeve, and a semi-rigid holder, with a pre-grade included. A pre-grade is an estimate, not a guarantee of any grade. It does not include crease work, dent removal, edge and corner work, or any other restorative work.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
            <Link
              href="/pre-grade-prep"
              className="clay-hero-btn-white rounded-full px-6 py-3.5 text-xs sm:text-[13px] font-black italic uppercase tracking-wider text-slate-800 text-center flex items-center justify-center gap-1.5 hover:text-slate-950 cursor-pointer"
            >
              <span>See Pre-Grade Prep</span>
            </Link>
            <Link
              href="/order?service=restoration"
              className="clay-hero-btn-yellow rounded-full px-7 py-3.5 text-xs sm:text-[13px] font-black italic uppercase tracking-wider text-[#3d2400] text-center flex items-center justify-center gap-1.5 cursor-pointer shadow-lg"
            >
              <span>Book a Restoration</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
