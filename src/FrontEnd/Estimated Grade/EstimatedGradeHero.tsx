"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Camera,
  ShieldCheck,
  Gem,
  Zap,
  ArrowRight,
  ScanLine,
  Award,
  Maximize2,
  Check,
} from "lucide-react";

const PHOTO_ANGLES = [
  {
    id: "front",
    label: "Front Surface",
    badge: "01/16",
    desc: "Perpendicular optical scan for centering & micro-scratches",
    highlight: "Centering",
  },
  {
    id: "holo",
    label: "Holo Glare 45°",
    badge: "06/16",
    desc: "Refraction test checking print lines, silvering & clouding",
    highlight: "Surface",
  },
  {
    id: "corners",
    label: "Corner Zoom 60x",
    badge: "11/16",
    desc: "Sub-millimeter apex inspection for fraying & white dings",
    highlight: "Corners",
  },
  {
    id: "back",
    label: "Back Borders",
    badge: "16/16",
    desc: "Contrast perimeter analysis for centering & edge chipping",
    highlight: "Edges",
  },
];

const SUBGRADES = [
  { category: "Centering", score: "9.5", note: "55/45 Front · 60/40 Back" },
  { category: "Corners", score: "10", note: "Razor Sharp Quad-Apex" },
  { category: "Edges", score: "9.5", note: "Clean Factory Bevel" },
  { category: "Surface", score: "9.5", note: "Pristine Holo Field" },
];

export default function EstimatedGradeHero() {
  const [activeAngle, setActiveAngle] = useState(0);
  const [isManual, setIsManual] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play loop cycling through 16-angle check
  useEffect(() => {
    if (isManual) return;
    const interval = setInterval(() => {
      setActiveAngle((prev) => (prev + 1) % PHOTO_ANGLES.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [isManual]);

  const selectAngle = (idx: number) => {
    setActiveAngle(idx);
    setIsManual(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    // Resume auto-loop after 5 seconds of inactivity
    timerRef.current = setTimeout(() => {
      setIsManual(false);
    }, 5000);
  };

  return (
    <section className="w-full min-h-[calc(100vh-7.5rem)] flex flex-col justify-center py-6 sm:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
        {/* ========================================================
            LEFT COLUMN: The Card Surgeon & Full User Details
            ======================================================== */}
        <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-5 text-left">
          {/* Main Headline (Strictly 2 Lines) */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black italic uppercase tracking-wider text-emerald-800 drop-shadow-[0_2px_2px_rgba(255,255,255,0.9)] leading-[1.08]">
            GET YOUR <br />
            <span className="bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-900 bg-clip-text text-transparent whitespace-nowrap">
              ESTIMATED GRADE
            </span>
          </h1>

          {/* Main User Provided Details */}
          <div className="flex flex-col gap-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            <p className="font-semibold text-slate-700">
              Upload photos of your card, keep it in your collection, and get an estimated grade from <strong className="text-emerald-900 font-black">The Card Surgeon</strong>. It works from your photos only, so your card stays with you, and adding cards to your collection never needs an order.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Same process as The Card Surgeon app: <strong className="text-slate-900 font-bold">16 photos</strong>, a photo check, and your estimated grade shows in your collection once your payment goes through. Most estimates appear right away.
            </p>
            <p className="text-[11px] sm:text-xs text-slate-500 font-medium italic border-l-2 border-emerald-400 pl-3">
              Some cards are held for a closer look by our team before any estimate is shown, and those can take longer. Our team may review and change any estimate. These times are goals, not promises.
            </p>
          </div>

          {/* 3 Quick Value Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
            <div className="flex items-center gap-2.5 p-2.5 rounded-2xl bg-white/95 border border-emerald-100/80 shadow-xs">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center shrink-0 shadow-xs">
                <Camera className="w-4 h-4 stroke-[2.2]" />
              </div>
              <span className="text-[11px] font-bold text-slate-800 leading-tight">
                16-Photo App Check
              </span>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 rounded-2xl bg-white/95 border border-blue-100/80 shadow-xs">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-500 to-sky-400 text-white flex items-center justify-center shrink-0 shadow-xs">
                <ShieldCheck className="w-4 h-4 stroke-[2.2]" />
              </div>
              <span className="text-[11px] font-bold text-slate-800 leading-tight">
                Card Stays With You
              </span>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 rounded-2xl bg-white/95 border border-amber-100/80 shadow-xs">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-400 text-amber-950 flex items-center justify-center shrink-0 shadow-xs">
                <Zap className="w-4 h-4 stroke-[2.4]" />
              </div>
              <span className="text-[11px] font-bold text-slate-800 leading-tight">
                Instant Collection Reveal
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <Link
              href="/order?service=pregrade"
              className="clay-hero-btn-yellow rounded-full px-8 py-4 text-xs sm:text-[13px] font-black italic uppercase tracking-wider text-[#3d2400] text-center flex items-center justify-center gap-2 shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <span>GET ESTIMATED GRADE</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Zero Shipping Risk</span>
            </div>
          </div>
        </div>

        {/* ========================================================
            RIGHT COLUMN: Interactive 3D Digital Grading Scan Slab
            ======================================================== */}
        <div className="lg:col-span-6 w-full flex flex-col items-center">
          {/* Main 3D Clay Slab Frame (Compact & Sleek) */}
          <div className="w-full max-w-md rounded-[32px] clay-footer-card p-4 sm:p-5 shadow-2xl border-2 border-white/90 relative overflow-hidden bg-gradient-to-b from-white via-slate-50/80 to-[#eef7f4]">
            {/* Ambient inner glow */}
            <div className="absolute -top-16 -right-16 w-44 h-44 bg-gradient-to-br from-emerald-300/20 to-amber-300/20 rounded-full blur-2xl pointer-events-none" />

            {/* Slab Header: Official Virtual Certification */}
            <div className="flex items-center justify-between gap-3 pb-2.5 mb-2.5 border-b border-slate-200/70">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl clay-tile-yellow text-[#78350f] flex items-center justify-center shadow-xs">
                  <Award className="w-4 h-4 text-amber-800" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700 block leading-tight">
                    TCS Optical Protocol
                  </span>
                  <span className="text-xs sm:text-[13px] font-black text-slate-900 tracking-wide">
                    Virtual Condition Slab
                  </span>
                </div>
              </div>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-wider shadow-xs border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Live Ready</span>
              </div>
            </div>

            {/* Interactive Collectible Card Holo Display with Active Laser Sweep */}
            <div className="relative rounded-[22px] bg-[#0c182b] p-3 sm:p-4 shadow-inner border border-slate-800 overflow-hidden text-white flex flex-col justify-between min-h-[175px]">
              {/* Sweeping Laser Beam Animation */}
              <div
                className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_14px_#22d3ee] pointer-events-none z-20 animate-pulse"
                style={{
                  animation: "scanLine 2.4s ease-in-out infinite",
                }}
              />
              <style jsx>{`
                @keyframes scanLine {
                  0% {
                    top: 0%;
                    opacity: 0.2;
                  }
                  50% {
                    top: 100%;
                    opacity: 1;
                  }
                  100% {
                    top: 0%;
                    opacity: 0.2;
                  }
                }
              `}</style>

              {/* Laser Grid Background */}
              <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:14px_14px] opacity-15 pointer-events-none" />

              {/* Top Card Row */}
              <div className="flex items-center justify-between text-[11px] z-10">
                <div className="flex items-center gap-1.5 font-bold text-slate-300">
                  <ScanLine className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  <span>Photo Angle: {PHOTO_ANGLES[activeAngle].badge}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-[9px] font-mono font-bold">
                    In-Collection
                  </span>
                  <span className="text-[9px] font-mono text-slate-400">
                    {isManual ? "MANUAL" : "AUTO-LOOP"}
                  </span>
                </div>
              </div>

              {/* Center Hologram Graphic with Dynamic Angle Content */}
              <div className="my-auto py-2.5 text-center flex flex-col items-center justify-center z-10 relative">
                {/* Crosshairs Corner Brackets */}
                <div className="absolute -inset-1 border border-cyan-500/20 rounded-xl pointer-events-none" />

                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500/25 via-emerald-400/20 to-teal-300/20 border border-cyan-400/40 flex items-center justify-center mb-1.5 shadow-[0_0_20px_rgba(34,211,238,0.25)] transition-transform duration-500">
                  <Gem className="w-6 h-6 text-cyan-300 animate-spin" style={{ animationDuration: "12s" }} />
                </div>
                <span className="text-base sm:text-lg font-black italic tracking-wide text-white leading-tight">
                  {PHOTO_ANGLES[activeAngle].label}
                </span>
                <span className="text-[11px] text-slate-300 font-medium max-w-xs mt-0.5 line-clamp-1">
                  {PHOTO_ANGLES[activeAngle].desc}
                </span>
              </div>

              {/* Bottom Projected Grade Medallion Bar */}
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between z-10">
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">
                    PROJECTED BRACKET
                  </span>
                  <span className="text-[11px] font-black text-amber-300 tracking-wide">
                    GEM MINT TIER
                  </span>
                </div>
                <div className="px-3.5 py-1 rounded-full clay-hero-btn-yellow text-[#3d2400] font-black italic text-xs tracking-wider shadow-md flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                  <span>ESTIMATE: 9.5</span>
                </div>
              </div>
            </div>

            {/* 16-Photo Angle Selector Tabs with 3D Clay Styling */}
            <div className="grid grid-cols-4 gap-1.5 my-2.5">
              {PHOTO_ANGLES.map((angle, idx) => (
                <button
                  key={angle.id}
                  type="button"
                  onClick={() => selectAngle(idx)}
                  className={`py-2 px-1 rounded-xl text-[10px] font-black italic uppercase tracking-wider text-center transition-all cursor-pointer ${
                    activeAngle === idx
                      ? "clay-tile-yellow text-[#3d2400] shadow-md scale-105 border-2 border-amber-300/80"
                      : "bg-white/90 border border-slate-200/90 text-slate-600 hover:bg-slate-100 shadow-2xs"
                  }`}
                >
                  Angle {idx + 1}
                </button>
              ))}
            </div>

            {/* 4 Subgrades Meters Grid (Highlighting Active Attribute) */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200/70">
              {SUBGRADES.map((sub) => {
                const isHighlighted = PHOTO_ANGLES[activeAngle].highlight === sub.category;
                return (
                  <div
                    key={sub.category}
                    className={`px-2.5 py-1.5 rounded-xl border transition-all flex items-center justify-between ${
                      isHighlighted
                        ? "bg-emerald-50/90 border-emerald-400 shadow-xs ring-2 ring-emerald-500/20"
                        : "bg-white/90 border-slate-200/60 shadow-2xs"
                    }`}
                  >
                    <div className="flex flex-col">
                      <span
                        className={`text-[9px] uppercase font-bold leading-tight ${
                          isHighlighted ? "text-emerald-950 font-black" : "text-slate-500"
                        }`}
                      >
                        {sub.category}
                      </span>
                      <span className="text-[9px] text-slate-400 font-medium leading-tight">
                        {sub.note}
                      </span>
                    </div>
                    <span
                      className={`text-xs sm:text-sm font-black italic ml-1.5 ${
                        isHighlighted ? "text-emerald-700" : "text-slate-800"
                      }`}
                    >
                      {sub.score}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
