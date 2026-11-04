"use client";

import React, { useState, useEffect } from "react";
import { Wrench, ShieldCheck, Gem, Check } from "lucide-react";

export default function SplashAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Calibrating optical sensors...");

  useEffect(() => {
    // Check if splash was already shown in this browser session
    const hasSeenSplash = typeof window !== "undefined" ? sessionStorage.getItem("tcs_splash_shown") : null;
    if (hasSeenSplash === "true") {
      setIsVisible(false);
      return;
    }

    // Smooth progress simulation (reaches 100% in ~2 seconds)
    const startTime = Date.now();
    const duration = 2100; // 2.1 seconds for ultra-snappy feel

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (pct < 30) {
        setStatusText("Calibrating optical sensors...");
      } else if (pct < 65) {
        setStatusText("Sanitizing surgical bench...");
      } else if (pct < 90) {
        setStatusText("Pre-grading collectible matrix...");
      } else {
        setStatusText("Surgical bench ready.");
      }

      if (pct >= 100) {
        clearInterval(timer);
        // Begin exit transition
        setTimeout(() => {
          setIsExiting(true);
          try {
            sessionStorage.setItem("tcs_splash_shown", "true");
          } catch {}
          // Unmount after smooth fade & scale transition
          setTimeout(() => {
            setIsVisible(false);
          }, 700);
        }, 220);
      }
    }, 35);

    return () => clearInterval(timer);
  }, []);

  const handleSkip = () => {
    setIsExiting(true);
    try {
      sessionStorage.setItem("tcs_splash_shown", "true");
    } catch {}
    setTimeout(() => {
      setIsVisible(false);
    }, 400);
  };

  if (!isVisible) return null;

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#d8f0ea] select-none cursor-pointer overflow-hidden transition-all duration-700 ease-out ${
        isExiting
          ? "opacity-0 scale-105 pointer-events-none"
          : "opacity-100 scale-100"
      }`}
    >
      {/* =========================================================================
          AMBIENT 3D CLAY BACKGROUND GLOWS
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft mint base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#e3f6f1] via-[#d7eff1] to-[#e4f3ee]" />

        {/* Ambient Top Amber Clay Orb */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-amber-200/50 via-yellow-200/40 to-transparent blur-3xl animate-pulse" style={{ animationDuration: "4s" }} />

        {/* Ambient Bottom Emerald Clay Orb */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-tr from-emerald-300/40 via-teal-200/30 to-transparent blur-3xl animate-pulse" style={{ animationDuration: "5s" }} />

        {/* Subtle holographic dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
      </div>

      {/* =========================================================================
          CENTER STAGE: 3D CLAY TRADING CARD SLAB & RESTORATION GLEAM
         ========================================================================= */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-sm px-6">
        {/* 3D Acrylic Card Slab Container */}
        <div className="relative w-40 h-56 sm:w-44 sm:h-60 rounded-[28px] bg-gradient-to-b from-white/95 via-white/80 to-[#e6f2fb]/90 p-2.5 shadow-[0_24px_50px_-10px_rgba(16,185,129,0.28),0_12px_24px_rgba(30,70,110,0.15),inset_0_3px_5px_rgba(255,255,255,1),inset_0_-4px_8px_rgba(160,195,230,0.4)] border-2 border-white mb-6 flex flex-col justify-between overflow-hidden group">
          {/* Top Graded Header Label Tab */}
          <div className="w-full h-8 rounded-[14px] bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 p-1 flex items-center justify-between text-white shadow-xs border border-white/40">
            <div className="flex items-center gap-1 pl-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-200" />
              <span className="text-[9px] font-black tracking-wider uppercase">TCS LAB</span>
            </div>
            <div className="bg-amber-400 text-slate-950 font-black text-[9px] px-2 py-0.5 rounded-md shadow-xs">
              GEM 10
            </div>
          </div>

          {/* The Collectible Card Artwork Surface with Holographic Foil */}
          <div className="relative flex-1 w-full my-1.5 rounded-[18px] bg-gradient-to-br from-[#1a3a34] via-[#0d2320] to-[#061412] overflow-hidden flex flex-col items-center justify-center p-3 border border-emerald-500/30 shadow-inner">
            {/* Shimmering Holographic Radial Foil Effect */}
            <div
              className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 via-pink-400/20 to-yellow-300/25 pointer-events-none transition-opacity duration-500"
              style={{ opacity: 0.3 + (progress / 100) * 0.7 }}
            />

            {/* Restorative Laser Scan Beam Line (Sweeps vertically with progress) */}
            <div
              className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-emerald-300 to-transparent shadow-[0_0_12px_#34d399] pointer-events-none transition-all duration-100 ease-linear"
              style={{ top: `${(progress * 0.9 + 5)}%` }}
            />

            {/* Center Emblem: Gem + Medical Precision Tools */}
            <div className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-400 via-yellow-300 to-amber-500 p-0.5 shadow-[0_8px_20px_rgba(245,158,11,0.4),inset_0_2px_4px_rgba(255,255,255,0.9)] flex items-center justify-center">
              <div className="w-full h-full rounded-[14px] bg-[#081c18] flex items-center justify-center">
                <Gem className="w-7 h-7 text-amber-300 drop-shadow-md animate-pulse" />
              </div>
            </div>

            {/* Micro Card Label */}
            <span className="relative z-10 text-[9px] font-black uppercase tracking-widest text-emerald-300/90 mt-2 font-mono">
              SPECIMEN #01
            </span>
          </div>

          {/* Bottom Security Hologram Foil Pill */}
          <div className="w-full h-4 rounded-full bg-slate-100/90 border border-slate-200/80 flex items-center justify-between px-2 text-[8px] font-mono text-slate-500 font-bold">
            <span>AUTH · 100%</span>
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          </div>
        </div>

        {/* Brand Headline */}
        <div className="space-y-1 mb-5">
          <h1 className="hero-chunky-headline text-2xl sm:text-3xl font-black italic uppercase tracking-wider text-emerald-800 drop-shadow-[0_2px_2px_rgba(255,255,255,0.9)]">
            THE CARD SURGEON
          </h1>
          <p className="text-[11px] font-black uppercase tracking-[0.22em] text-slate-600">
            PRECISION COLLECTIBLE CONSERVATION
          </p>
        </div>

        {/* 3D Sunken Clay Progress Bar */}
        <div className="w-64 sm:w-72 space-y-2">
          {/* Progress Track */}
          <div className="w-full h-3 rounded-full bg-[#cde8e1] p-0.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.12),inset_0_-1px_2px_rgba(255,255,255,0.8)] border border-white/60 overflow-hidden relative">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 shadow-[0_0_10px_rgba(16,185,129,0.5)] transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Status Text & Percentage */}
          <div className="flex items-center justify-between text-[11px] font-mono font-bold text-slate-600 px-1">
            <span className="flex items-center gap-1.5 text-emerald-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              <span>{statusText}</span>
            </span>
            <span className="text-slate-800 font-black">{progress}%</span>
          </div>
        </div>

        {/* Skip hint */}
        <div className="mt-6 text-[11px] text-slate-500/80 font-medium tracking-wide hover:text-slate-700 transition-colors">
          Click anywhere to skip
        </div>
      </div>
    </div>
  );
}
