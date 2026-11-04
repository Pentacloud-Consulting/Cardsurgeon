"use client";

import React from "react";
import { ShieldCheck, Clock, Award, CheckCircle2 } from "lucide-react";

export default function ContactHero() {
  const highlights = [
    {
      title: "Direct Specialist Access",
      desc: "Speak directly with certified card conservationists.",
      icon: Award,
    },
    {
      title: "Fast Assessment Turnaround",
      desc: "Detailed answers & condition estimates within 24 hours.",
      icon: Clock,
    },
    {
      title: "Fully Insured Lab",
      desc: "Dual 4K video intake and secure climate-controlled vaults.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="flex flex-col justify-center h-full pr-0 lg:pr-6">
      {/* Pill Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-white shadow-[0_4px_12px_rgba(80,135,185,0.15),inset_0_2px_4px_rgba(255,255,255,0.9)] text-slate-700 text-xs sm:text-sm font-bold tracking-wide uppercase mb-4 self-start">
        <ShieldCheck className="w-4 h-4 text-emerald-600" />
        <span>SURGICAL CARE SUPPORT</span>
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-slate-800 tracking-tight leading-[1.15]">
        Let’s Talk About Your <span className="text-[#0284c7]">Cards</span>
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-xl">
        Have questions about card restoration, pre-grade cleaning, or safely
        shipping your collection? Drop us a message or reach out directly to
        our specialists.
      </p>

      {/* Value Points to complement the form */}
      <div className="mt-8 flex flex-col gap-3.5">
        {highlights.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/70 backdrop-blur-sm border border-white shadow-[0_4px_12px_rgba(80,135,185,0.08),inset_0_1px_2px_rgba(255,255,255,0.9)]"
            >
              <div className="w-10 h-10 rounded-xl clay-tile-blue flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-blue-600" strokeWidth={2.4} />
              </div>
              <div>
                <h4 className="text-sm font-black text-slate-800 leading-tight">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
