"use client";

import React from "react";
import {
  Smartphone,
  Layers,
  Lightbulb,
  Clock,
  Camera,
} from "lucide-react";

const SETUP_ITEMS = [
  {
    title: "Your Phone",
    detail: "Standard phone camera",
    icon: Smartphone,
    tileClass: "clay-tile-blue",
    iconColor: "text-blue-700",
  },
  {
    title: "Dark Cloth Or Mat",
    detail: "Non-reflective surface",
    icon: Layers,
    tileClass: "clay-tile-obsidian",
    iconColor: "text-amber-300",
  },
  {
    title: "One Lamp",
    detail: "Single adjustable light",
    icon: Lightbulb,
    tileClass: "clay-tile-yellow",
    iconColor: "text-amber-800",
  },
  {
    title: "About 5 Minutes",
    detail: "Quick photo check",
    icon: Clock,
    tileClass: "w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-200 to-teal-100 shadow-[0_6px_14px_-2px_rgba(16,185,129,0.22),inset_0_2px_4px_rgba(255,255,255,0.95),inset_0_-2.5px_4px_rgba(6,78,59,0.2)]",
    iconColor: "text-emerald-800",
  },
];

export default function PhotoGuideHero() {
  return (
    <section className="w-full pt-4 sm:pt-8 pb-10 sm:pb-16 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* ========================================================
            LEFT SIDE: Exact Details Requested
            ======================================================== */}
        <div className="lg:col-span-7 flex flex-col items-start text-left gap-4 sm:gap-5">
          {/* Top Pill Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-200/80 text-emerald-800 text-xs font-black uppercase tracking-wider shadow-xs">
            <Camera className="w-3.5 h-3.5 text-emerald-600" />
            <span>Get Your Estimated Grade</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black italic uppercase tracking-wider text-emerald-800 drop-shadow-[0_2px_2px_rgba(255,255,255,0.9)] leading-[1.06]">
            HOW TO <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-900 bg-clip-text text-transparent">
              PHOTOGRAPH
            </span>{" "}
            YOUR CARD
          </h1>

          {/* Description */}
          <p className="text-slate-600 font-medium text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl">
            Good photos give a better estimate. You need your phone, a dark cloth or mat, and one lamp. It takes about five minutes.
          </p>
        </div>

        {/* ========================================================
            RIGHT SIDE: Clean Information-Based 3D Clay Display
            ======================================================== */}
        <div className="lg:col-span-5 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SETUP_ITEMS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="clay-card-floating rounded-[26px] p-5 flex items-center gap-4 shadow-md border border-white/95 hover:scale-[1.02] transition-transform"
                >
                  <div
                    className={`${item.tileClass} w-11 h-11 rounded-2xl flex items-center justify-center shrink-0`}
                  >
                    <Icon className={`w-5 h-5 ${item.iconColor} stroke-[2.3]`} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs sm:text-sm font-black italic uppercase text-slate-900 leading-snug">
                      {item.title}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500 mt-0.5">
                      {item.detail}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
