"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Gem,
  Award,
  ArrowRight,
  ShieldCheck,
  Eye,
  Layers,
  Wrench,
  Search,
  Activity,
  CheckCircle2,
  Gauge,
  Cpu,
} from "lucide-react";

const TREATMENTS = [
  {
    name: "Light Creases",
    tool: "Thermal Vacuum Press",
    stat: "14.2 PSI",
    sub: "Fiber Realignment",
    icon: Wrench,
  },
  {
    name: "Surface Dents",
    tool: "Micro-Pneumatic Rebound",
    stat: "48μm Depth",
    sub: "Binder Dent Relief",
    icon: Gauge,
  },
  {
    name: "Edge Lifts",
    tool: "Cellulose Re-Seating",
    stat: "0.2mm Bevel",
    sub: "Delamination Bond",
    icon: Layers,
  },
  {
    name: "Corner Lifts",
    tool: "Quad-Apex Alignment",
    stat: "90° True Corner",
    sub: "Sub-Millimeter Clamp",
    icon: ShieldCheck,
  },
  {
    name: "Scratches & Haze",
    tool: "Optical Polishing Bench",
    stat: "6000 RPM",
    sub: "Clear Coat Refraction",
    icon: Gem,
  },
  {
    name: "Impressions",
    tool: "Precision Pressure Bed",
    stat: "0.85 Bar",
    sub: "Fingernail Indent Draw",
    icon: Search,
  },
];

export default function RestorationHero() {
  const [activeTreatment, setActiveTreatment] = useState(0);
  const [progress, setProgress] = useState(45);
  const [isManual, setIsManual] = useState(false);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play loop cycling through 6 treatments
  useEffect(() => {
    if (isManual) return;
    const interval = setInterval(() => {
      setActiveTreatment((prev) => (prev + 1) % TREATMENTS.length);
      setProgress(15);
    }, 2800);

    return () => clearInterval(interval);
  }, [isManual]);

  // Micro progress animation within each treatment cycle
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 98 ? 15 : prev + 4));
    }, 100);

    return () => clearInterval(progressInterval);
  }, [activeTreatment]);

  const selectTreatment = (idx: number) => {
    setActiveTreatment(idx);
    setProgress(35);
    setIsManual(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    // Resume auto-loop after 5 seconds
    pauseTimeoutRef.current = setTimeout(() => {
      setIsManual(false);
    }, 5000);
  };

  const current = TREATMENTS[activeTreatment];
  const IconComponent = current.icon;

  return (
    <section className="relative overflow-hidden py-10 sm:py-16">
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
              <span>Restoration service</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              CARD <br className="hidden sm:inline" />
              <span className="text-emerald-700">RESTORATION</span>
            </h1>

            {/* Description */}
            <p className="text-slate-600 font-medium text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
              We work on light creases, dents, edge and corner lifts, surface scratches and hazes, and impressions. See the 6 things we take on, the things we don&apos;t, and real before &amp; after photos as we add them.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              {/* Button 1: Book a Restoration */}
              <Link
                href="/order?service=restoration"
                className="clay-hero-btn-yellow rounded-full px-7 sm:px-8 py-3.5 sm:py-4 font-black italic uppercase tracking-wider text-[#3d2400] text-xs sm:text-[13px] flex items-center justify-center gap-2 shadow-xl hover:scale-105 active:scale-95 transition-all"
              >
                <span>BOOK A RESTORATION</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </Link>

              {/* Button 2: Before & After */}
              <a
                href="#showcase"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById("showcase") || document.getElementById("showcase-gallery");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth", block: "start" });
                  } else {
                    window.location.href = "/before-after";
                  }
                }}
                className="clay-hero-btn-white rounded-full px-6 sm:px-7 py-3.5 sm:py-4 font-black italic uppercase tracking-wider text-slate-800 text-xs sm:text-[13px] flex items-center justify-center gap-2 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <Eye className="w-4 h-4 text-emerald-600 stroke-[2.3]" />
                <span>BEFORE &amp; AFTER</span>
              </a>
            </div>
          </div>

          {/* Right Side: 3D Restoration Bench Diagram with Active Loop */}
          <div className="w-full lg:w-[440px] flex-shrink-0 relative z-10">
            <div className="clay-card-pearl rounded-[34px] sm:rounded-[38px] p-6 sm:p-7 shadow-2xl border-2 border-white relative space-y-4">
              {/* Top Inspection Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs font-bold text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="font-mono text-slate-900 font-bold uppercase tracking-tight">
                    SURGICAL WORKBENCH
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md text-[10px] font-mono font-bold">
                    STAGE 0{activeTreatment + 1}/06
                  </span>
                  <span className="bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase border border-emerald-300">
                    6 TARGET TREATMENTS
                  </span>
                </div>
              </div>

              {/* Card Holographic Scanning Viewport with Active Treatment Animation */}
              <div className="relative h-64 w-full rounded-2xl bg-gradient-to-br from-slate-950 via-[#0d1627] to-slate-950 p-4 overflow-hidden border border-slate-700/80 shadow-inner flex flex-col justify-between">
                {/* Laser Grid Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:14px_14px] opacity-20 pointer-events-none" />

                {/* Vertical Laser Sweeping Beam */}
                <div
                  className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_14px_#34d399] pointer-events-none z-20"
                  style={{
                    animation: "benchScan 2.6s ease-in-out infinite",
                  }}
                />
                <style jsx>{`
                  @keyframes benchScan {
                    0% {
                      top: 5%;
                      opacity: 0.3;
                    }
                    50% {
                      top: 92%;
                      opacity: 1;
                    }
                    100% {
                      top: 5%;
                      opacity: 0.3;
                    }
                  }
                `}</style>

                {/* Top Status */}
                <div className="relative z-10 flex items-center justify-between text-[11px] text-emerald-400 font-mono">
                  <span className="flex items-center gap-1">
                    <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
                    <span>SPECIMEN #TCS-RESTORE</span>
                  </span>
                  <span className="bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30 text-[10px]">
                    NON-DESTRUCTIVE
                  </span>
                </div>

                {/* Center Dynamic Alignment Target showing Active Treatment */}
                <div className="relative z-10 mx-auto w-48 py-3 px-4 rounded-2xl border border-dashed border-emerald-400/60 flex flex-col items-center justify-center shadow-lg bg-emerald-950/40 backdrop-blur-xs transition-all duration-300">
                  <div className="w-9 h-9 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center mb-1 shadow-[0_0_12px_rgba(251,191,36,0.2)]">
                    <IconComponent className="w-5 h-5 text-amber-400 animate-pulse" />
                  </div>
                  <span className="text-[11px] font-black uppercase text-amber-300 tracking-wider">
                    {current.name}
                  </span>
                  <span className="text-[9.5px] text-emerald-300 font-mono mt-0.5">
                    {current.tool}
                  </span>

                  {/* Micro Progress Bar */}
                  <div className="w-full mt-2 space-y-1">
                    <div className="flex items-center justify-between text-[9px] font-mono text-slate-300">
                      <span>{current.stat}</span>
                      <span className="text-emerald-400">{progress}%</span>
                    </div>
                    <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-300 transition-all duration-150"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom Stats */}
                <div className="relative z-10 flex items-center justify-between text-[10px] text-slate-400 font-mono pt-1 border-t border-slate-800/80">
                  <span className="text-slate-300">Trimming: 0.0% (Zero)</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>100% Genuine</span>
                  </span>
                </div>
              </div>

              {/* 6 Target Treatments Pills (Interactive & Auto-Highlighted) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 pt-1">
                {TREATMENTS.map((t, idx) => {
                  const isActive = activeTreatment === idx;
                  return (
                    <button
                      key={t.name}
                      type="button"
                      onClick={() => selectTreatment(idx)}
                      className={`rounded-xl py-2 px-2 text-center text-[10.5px] font-bold transition-all cursor-pointer ${
                        isActive
                          ? "bg-gradient-to-b from-emerald-600 to-emerald-700 text-white shadow-md border-2 border-emerald-400 scale-[1.03] ring-2 ring-emerald-300/40"
                          : "bg-white text-slate-700 border border-slate-200/90 shadow-2xs hover:bg-slate-50"
                      }`}
                    >
                      ✓ {t.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
