"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Award, Gem, ArrowRight, Eye, ShieldCheck, Search, Activity, Layers } from "lucide-react";

export default function BeforeAfterHero() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isManual, setIsManual] = useState(false);
  const [passCount, setPassCount] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const manualTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Smooth sinusoidal scanning loop animation
  useEffect(() => {
    if (isManual) return;
    let step = 0;
    const interval = setInterval(() => {
      step += 0.045;
      // Oscillate smoothly between 22% and 78%
      const newPos = 50 + Math.sin(step) * 28;
      setSliderPos(newPos);

      // Increment cycle pass every full oscillation
      if (Math.abs(Math.sin(step)) < 0.03) {
        setPassCount((prev) => (prev >= 99 ? 1 : prev + 1));
      }
    }, 45);

    return () => clearInterval(interval);
  }, [isManual]);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(10, Math.min(90, (x / rect.width) * 100));
    setSliderPos(pct);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsManual(true);
    if (manualTimeoutRef.current) clearTimeout(manualTimeoutRef.current);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isManual) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
    // Resume auto-loop animation after 3 seconds of inactivity
    manualTimeoutRef.current = setTimeout(() => {
      setIsManual(false);
    }, 3000);
  };

  return (
    <section className="relative overflow-hidden py-8 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="clay-footer-card rounded-[32px] sm:rounded-[44px] p-6 sm:p-10 lg:p-12 border-2 border-white/90 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-emerald-200/30 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 left-10 w-80 h-80 rounded-full bg-amber-200/30 blur-3xl pointer-events-none" />

          {/* Left Side: Information */}
          <div className="flex-1 space-y-6 text-left relative z-10">
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-300/80 text-emerald-900 text-xs font-black uppercase tracking-wider shadow-2xs">
              <Award className="w-3.5 h-3.5 text-emerald-700" />
              <span>Restoration · from our bench</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              RESTORATION <br className="hidden sm:inline" />
              <span className="text-emerald-700">SHOWCASE</span>
            </h1>

            {/* Description */}
            <p className="text-slate-600 font-medium text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
              This page is only for real cards we restored, posted with the owner&apos;s OK. No stock photos, no mock-ups. Our first pairs are on the way, so the slots below are placeholders for now.
            </p>

            {/* Trust highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-xs p-3 rounded-2xl border border-slate-200/60 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>100% Genuine Owner Verified</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-xs p-3 rounded-2xl border border-slate-200/60 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Zero Alteration or Trimming</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Link
                href="/order?service=restoration"
                className="clay-hero-btn-yellow rounded-full px-7 sm:px-8 py-3.5 sm:py-4 font-black italic uppercase tracking-wider text-[#3d2400] text-xs sm:text-[13px] flex items-center justify-center gap-2 shadow-xl hover:scale-105 active:scale-95 transition-all"
              >
                <span>BOOK A RESTORATION</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </Link>
              <a
                href="#showcase"
                className="clay-hero-btn-white rounded-full px-6 sm:px-7 py-3.5 sm:py-4 font-black italic uppercase tracking-wider text-slate-800 text-xs sm:text-[13px] flex items-center justify-center gap-2 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <Eye className="w-4 h-4 text-emerald-600 stroke-[2.3]" />
                <span>VIEW SHOWCASE GALLERY</span>
              </a>
            </div>
          </div>

          {/* Right Side: 3D Bench Inspection Showcase Diagram with Live Loop */}
          <div className="w-full lg:w-[440px] flex-shrink-0 relative z-10">
            <div className="clay-card-pearl rounded-[34px] sm:rounded-[38px] p-5 sm:p-6 shadow-2xl border-2 border-white relative space-y-4">
              {/* Top Status Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-bold text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-slate-900 font-mono text-[11px] font-bold">
                    BENCH INSPECTION #01
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md text-[10px] font-mono font-bold">
                    CYCLE #{passCount.toString().padStart(2, "0")}
                  </span>
                  <span className="bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase border border-amber-300">
                    ACTIVE CASE
                  </span>
                </div>
              </div>

              {/* Dynamic Interactive Looping Comparison Window */}
              <div
                ref={containerRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                className="relative h-72 w-full rounded-2xl overflow-hidden border border-slate-700/80 shadow-inner select-none cursor-ew-resize bg-[#0b1322] touch-none"
              >
                {/* Laser Grid Background */}
                <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />

                {/* Top Scan Mode Pill (Placed safely between BEFORE & AFTER badges to eliminate bottom overlap) */}
                <div className="absolute top-3.5 left-1/2 -translate-x-1/2 z-20 bg-slate-950/90 backdrop-blur-sm text-amber-300 text-[9px] font-mono font-bold px-3 py-0.5 rounded-full border border-amber-400/40 pointer-events-none tracking-wider shadow-md">
                  {isManual ? "MANUAL DRAG MODE" : "AUTO-SCANNING ACTIVE"}
                </div>

                {/* ----------------- AFTER SIDE (Full Background Layer) ----------------- */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#051e18] via-[#092922] to-[#041410] p-4 flex flex-col justify-between items-end pointer-events-none">
                  {/* Top After Pill */}
                  <div className="flex items-center gap-2 z-10">
                    <span className="bg-emerald-500 text-slate-950 font-black text-[9px] px-2.5 py-0.5 rounded-full shadow-md tracking-wider">
                      AFTER
                    </span>
                  </div>

                  {/* Shimmering Holographic Target Matrix */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
                    <div className="w-32 h-32 rounded-2xl border border-emerald-400/50 bg-emerald-500/10 flex items-center justify-center">
                      <Gem className="w-9 h-9 text-emerald-300 animate-pulse" />
                    </div>
                  </div>

                  {/* Restored Highlights - Compact Bottom Right Card */}
                  <div className="text-[9.5px] text-emerald-300 font-mono space-y-0.5 text-right z-10 bg-emerald-950/90 p-2 rounded-xl border border-emerald-500/40 backdrop-blur-md max-w-[135px] shadow-lg">
                    <div className="font-bold text-white flex items-center justify-end gap-1 text-[10px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>Restored</span>
                    </div>
                    <div className="text-emerald-300/90 leading-tight">• Core Intact 100%</div>
                    <div className="text-emerald-300/90 leading-tight">• Sealed Holder</div>
                  </div>
                </div>

                {/* ----------------- BEFORE SIDE (Clipped Overlaid Layer) ----------------- */}
                <div
                  className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#2a0c16] via-[#1f0910] to-[#120509] p-4 flex flex-col justify-between items-start pointer-events-none select-none"
                  style={{
                    clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
                  }}
                >
                  {/* Top Before Pill */}
                  <div className="flex items-center gap-2 z-10">
                    <span className="bg-rose-600 text-white font-black text-[9px] px-2.5 py-0.5 rounded-full shadow-md tracking-wider">
                      BEFORE
                    </span>
                  </div>

                  {/* Defect Radar Circle Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-50 pointer-events-none">
                    <div className="w-32 h-32 rounded-2xl border-2 border-dashed border-rose-400/60 bg-rose-950/30 flex items-center justify-center">
                      <Search className="w-8 h-8 text-rose-300 animate-pulse" />
                    </div>
                  </div>

                  {/* Identified Flaws - Compact Bottom Left Card */}
                  <div className="text-[9.5px] text-rose-300 font-mono space-y-0.5 text-left z-10 bg-rose-950/90 p-2 rounded-xl border border-rose-500/40 backdrop-blur-md max-w-[135px] shadow-lg">
                    <div className="font-bold text-white flex items-center gap-1 text-[10px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
                      <span>Defects</span>
                    </div>
                    <div className="text-rose-200/90 leading-tight">• Surface Dent</div>
                    <div className="text-rose-200/90 leading-tight">• Edge Lift 1.2mm</div>
                  </div>
                </div>

                {/* ----------------- DYNAMIC SCANNING DIVIDER LINE ----------------- */}
                <div
                  className="absolute inset-y-0 w-0.5 bg-gradient-to-b from-amber-300 via-yellow-400 to-amber-300 pointer-events-none z-20 shadow-[0_0_12px_#fbbf24]"
                  style={{ left: `${sliderPos}%` }}
                >
                  {/* Center Optical Reticle */}
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 text-slate-950 flex items-center justify-center shadow-xl border-2 border-white select-none">
                    <span className="font-black text-[10px] tracking-tighter">↔</span>
                  </div>

                  {/* Pulsing Target Ring */}
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-16 h-16 rounded-full border border-dashed border-amber-300/60 pointer-events-none animate-spin" style={{ animationDuration: "10s" }} />
                </div>
              </div>

              {/* Card Footer Detail */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-medium">
                <span className="flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Micro-wrinkle reduction</span>
                </span>
                <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  Non-destructive
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
