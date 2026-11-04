"use client";

import React from "react";
import { Package, ShieldCheck } from "lucide-react";

export default function ContactInstructions() {
  const steps = [
    {
      num: 1,
      title: "Penny Sleeve & Semi-Rigid:",
      desc: "Place each card in a clean penny sleeve, then insert into a Card Saver or semi-rigid holder.",
      color: "bg-blue-100 text-blue-700",
    },
    {
      num: 2,
      title: "Cardboard Sandwich:",
      desc: "Sandwich holders between two sturdy pieces of cardboard secured with painter’s tape (never scotch tape).",
      color: "bg-amber-100 text-amber-800",
    },
    {
      num: 3,
      title: "Bubble Mailer & Tracking:",
      desc: "Ship in a padded bubble mailer or sturdy box with tracking and signature confirmation.",
      color: "bg-emerald-100 text-emerald-800",
    },
  ];

  return (
    <div className="clay-footer-card rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl clay-tile-orange flex items-center justify-center shrink-0">
            <Package className="w-6 h-6 text-orange-600" strokeWidth={2.4} />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-800">
              Mail-In Card Instructions
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Follow these simple steps before sending cards to our lab.
            </p>
          </div>
        </div>

        <div className="space-y-3.5 mt-5">
          {steps.map((step) => (
            <div
              key={step.num}
              className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/70 border border-slate-100 shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]"
            >
              <span
                className={`w-6 h-6 rounded-full font-black text-xs flex items-center justify-center shrink-0 mt-0.5 ${step.color}`}
              >
                {step.num}
              </span>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong className="text-slate-800 font-bold mr-1">
                  {step.title}
                </strong>
                <span>{step.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-slate-500">
        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
        <span>
          Every package is opened under dual 4K video surveillance for full verification.
        </span>
      </div>
    </div>
  );
}
