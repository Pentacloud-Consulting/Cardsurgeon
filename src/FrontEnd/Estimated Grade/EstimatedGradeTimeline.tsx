"use client";

import React from "react";
import Link from "next/link";
import {
  FolderPlus,
  Camera,
  CircleDollarSign,
  Award,
  ArrowRight,
} from "lucide-react";

export default function EstimatedGradeTimeline() {
  return (
    <section className="w-full py-10 sm:py-16 relative overflow-hidden">
      {/* Decorative ambient sparkles / glow */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        {/* Curving Dotted S-Path (Desktop background SVG) */}
        <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
          <svg
            className="w-full h-full"
            viewBox="0 0 896 1000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M 520 40 C 580 40, 600 80, 600 130 C 600 210, 290 230, 290 350 C 290 460, 610 500, 610 620 C 610 740, 290 770, 290 870 C 290 930, 380 970, 460 990"
              stroke="#60a5fa"
              strokeWidth="4"
              strokeDasharray="2 16"
              strokeLinecap="round"
              className="opacity-60"
            />
          </svg>
        </div>

        {/* 4 Steps Stack */}
        <div className="flex flex-col gap-12 sm:gap-16 relative z-10">
          {/* ========================================================
              STEP 01: ADD YOUR CARD (Capsule Left, Number Right)
              ======================================================== */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
            {/* Left: 3D Clay Capsule */}
            <div className="w-full md:w-[58%] order-2 md:order-1 relative group">
              {/* Pointing tail (pointing right toward step 01) */}
              <div
                className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 w-0 h-0 pointer-events-none z-10"
                style={{
                  borderTop: "12px solid transparent",
                  borderBottom: "12px solid transparent",
                  borderLeft: "15px solid #ffffff",
                }}
              />

              <div className="clay-footer-card rounded-[32px] sm:rounded-full p-3 sm:p-3.5 pr-4 sm:pr-5 shadow-xl border-2 border-white flex items-center justify-between gap-4 transition-transform duration-300 hover:scale-[1.02]">
                {/* Text Content */}
                <div className="flex flex-col text-left pl-4 sm:pl-6 py-1">
                  <h3 className="text-slate-900 font-black italic uppercase tracking-wider text-base sm:text-lg">
                    ADD YOUR CARD
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-medium leading-snug mt-0.5">
                    It is saved in your collection. <br className="hidden sm:inline" />
                    No order needed.
                  </p>
                </div>

                {/* 3D Round Clay Medallion with Library Icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-emerald-500 via-teal-400 to-emerald-300 text-emerald-950 shadow-[0_6px_14px_-2px_rgba(16,185,129,0.38),inset_0_2.5px_4px_rgba(255,255,255,0.9),inset_0_-2.5px_4px_rgba(6,78,59,0.35)] flex items-center justify-center shrink-0 border border-white">
                  <FolderPlus className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2]" />
                </div>
              </div>
            </div>

            {/* Right: Target Ring + 3D Number */}
            <div className="w-full md:w-[38%] order-1 md:order-2 flex items-center justify-center md:justify-start gap-4 sm:gap-5 pl-0 md:pl-4">
              {/* Concentric 3D Target Ring */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 border-[3px] border-emerald-400 shadow-[0_4px_12px_rgba(16,185,129,0.3),inset_0_2px_4px_rgba(255,255,255,0.95)] flex items-center justify-center shrink-0">
                <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-300 shadow-inner" />
              </div>

              {/* 3D STEP 01 Text */}
              <div className="flex flex-col text-left">
                <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-emerald-700 leading-none">
                  STEP
                </span>
                <span
                  className="text-5xl sm:text-7xl font-black italic tracking-tight text-emerald-700 leading-none select-none drop-shadow-[0_4px_1px_rgba(255,255,255,0.9)]"
                  style={{
                    textShadow:
                      "0 3px 0 #059669, 0 6px 1px rgba(0,0,0,0.1), 0 8px 14px rgba(16,185,129,0.25)",
                  }}
                >
                  01
                </span>
              </div>
            </div>
          </div>

          {/* ========================================================
              STEP 02: UPLOAD 16 PHOTOS (Number Left, Capsule Right)
              ======================================================== */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
            {/* Left: 3D STEP 02 Text + Target Ring */}
            <div className="w-full md:w-[38%] flex items-center justify-center md:justify-end gap-4 sm:gap-5 pr-0 md:pr-4">
              {/* 3D STEP 02 Text */}
              <div className="flex flex-col text-right">
                <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-blue-700 leading-none">
                  STEP
                </span>
                <span
                  className="text-5xl sm:text-7xl font-black italic tracking-tight text-blue-700 leading-none select-none drop-shadow-[0_4px_1px_rgba(255,255,255,0.9)]"
                  style={{
                    textShadow:
                      "0 3px 0 #2563eb, 0 6px 1px rgba(0,0,0,0.1), 0 8px 14px rgba(59,130,246,0.25)",
                  }}
                >
                  02
                </span>
              </div>

              {/* Concentric 3D Target Ring */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 border-[3px] border-blue-400 shadow-[0_4px_12px_rgba(59,130,246,0.3),inset_0_2px_4px_rgba(255,255,255,0.95)] flex items-center justify-center shrink-0">
                <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-blue-500 to-sky-300 shadow-inner" />
              </div>
            </div>

            {/* Right: 3D Clay Capsule */}
            <div className="w-full md:w-[58%] relative group">
              {/* Pointing tail (pointing left toward step 02) */}
              <div
                className="hidden md:block absolute top-1/2 -left-3 -translate-y-1/2 w-0 h-0 pointer-events-none z-10"
                style={{
                  borderTop: "12px solid transparent",
                  borderBottom: "12px solid transparent",
                  borderRight: "15px solid #ffffff",
                }}
              />

              <div className="clay-footer-card rounded-[32px] sm:rounded-full p-3 sm:p-3.5 pl-4 sm:pl-5 shadow-xl border-2 border-white flex items-center gap-4 transition-transform duration-300 hover:scale-[1.02]">
                {/* 3D Round Clay Medallion with Library Icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-blue-500 via-sky-400 to-cyan-300 text-white shadow-[0_6px_14px_-2px_rgba(59,130,246,0.38),inset_0_2.5px_4px_rgba(255,255,255,0.9),inset_0_-2.5px_4px_rgba(30,58,138,0.35)] flex items-center justify-center shrink-0 border border-white">
                  <Camera className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2]" />
                </div>

                {/* Text Content */}
                <div className="flex flex-col text-left pr-3 sm:pr-6 py-1">
                  <h3 className="text-slate-900 font-black italic uppercase tracking-wider text-base sm:text-lg">
                    UPLOAD 16 PHOTOS
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-medium leading-snug mt-0.5">
                    Front, back, 6 angled-light photos and all 8 corners. Each photo is checked; retake any that fail. You keep your card.
                  </p>

                  {/* Interactive Button (Image 2 Fix - Real Clay Button with Library Icon!) */}
                  <div className="mt-2">
                    <Link
                      href="/how-it-works"
                      className="clay-hero-btn-yellow rounded-full px-3.5 py-1.5 text-[11px] sm:text-xs font-black italic uppercase tracking-wider text-[#3d2400] inline-flex items-center gap-1.5 shadow-sm hover:scale-105 active:scale-95 transition-all cursor-pointer"
                    >
                      <Camera className="w-3.5 h-3.5 stroke-[2.5]" />
                      <span>How to photograph your card</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              STEP 03: PAY $7 PER CARD (Capsule Left, Number Right)
              ======================================================== */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
            {/* Left: 3D Clay Capsule */}
            <div className="w-full md:w-[58%] order-2 md:order-1 relative group">
              {/* Pointing tail (pointing right toward step 03) */}
              <div
                className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 w-0 h-0 pointer-events-none z-10"
                style={{
                  borderTop: "12px solid transparent",
                  borderBottom: "12px solid transparent",
                  borderLeft: "15px solid #ffffff",
                }}
              />

              <div className="clay-footer-card rounded-[32px] sm:rounded-full p-3 sm:p-3.5 pr-4 sm:pr-5 shadow-xl border-2 border-white flex items-center justify-between gap-4 transition-transform duration-300 hover:scale-[1.02]">
                {/* Text Content */}
                <div className="flex flex-col text-left pl-4 sm:pl-6 py-1">
                  <h3 className="text-slate-900 font-black italic uppercase tracking-wider text-base sm:text-lg">
                    PAY $7 PER CARD
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-medium leading-snug mt-0.5">
                    Only when you use Get <br className="hidden sm:inline" />
                    Your Estimated Grade.
                  </p>
                </div>

                {/* 3D Round Clay Medallion with Library Icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-amber-400 via-yellow-300 to-amber-200 text-amber-950 shadow-[0_6px_14px_-2px_rgba(245,158,11,0.38),inset_0_2.5px_4px_rgba(255,255,255,0.9),inset_0_-2.5px_4px_rgba(180,95,15,0.35)] flex items-center justify-center shrink-0 border border-white">
                  <CircleDollarSign className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2]" />
                </div>
              </div>
            </div>

            {/* Right: Target Ring + 3D Number */}
            <div className="w-full md:w-[38%] order-1 md:order-2 flex items-center justify-center md:justify-start gap-4 sm:gap-5 pl-0 md:pl-4">
              {/* Concentric 3D Target Ring */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 border-[3px] border-amber-400 shadow-[0_4px_12px_rgba(245,158,11,0.3),inset_0_2px_4px_rgba(255,255,255,0.95)] flex items-center justify-center shrink-0">
                <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 shadow-inner" />
              </div>

              {/* 3D STEP 03 Text */}
              <div className="flex flex-col text-left">
                <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-amber-700 leading-none">
                  STEP
                </span>
                <span
                  className="text-5xl sm:text-7xl font-black italic tracking-tight text-amber-700 leading-none select-none drop-shadow-[0_4px_1px_rgba(255,255,255,0.9)]"
                  style={{
                    textShadow:
                      "0 3px 0 #d97706, 0 6px 1px rgba(0,0,0,0.1), 0 8px 14px rgba(245,158,11,0.25)",
                  }}
                >
                  03
                </span>
              </div>
            </div>
          </div>

          {/* ========================================================
              STEP 04: SEE YOUR ESTIMATE (Number Left, Capsule Right)
              ======================================================== */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
            {/* Left: 3D STEP 04 Text + Target Ring */}
            <div className="w-full md:w-[38%] flex items-center justify-center md:justify-end gap-4 sm:gap-5 pr-0 md:pr-4">
              {/* 3D STEP 04 Text */}
              <div className="flex flex-col text-right">
                <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-indigo-700 leading-none">
                  STEP
                </span>
                <span
                  className="text-5xl sm:text-7xl font-black italic tracking-tight text-indigo-700 leading-none select-none drop-shadow-[0_4px_1px_rgba(255,255,255,0.9)]"
                  style={{
                    textShadow:
                      "0 3px 0 #4338ca, 0 6px 1px rgba(0,0,0,0.1), 0 8px 14px rgba(99,102,241,0.25)",
                  }}
                >
                  04
                </span>
              </div>

              {/* Concentric 3D Target Ring */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 border-[3px] border-indigo-400 shadow-[0_4px_12px_rgba(99,102,241,0.3),inset_0_2px_4px_rgba(255,255,255,0.95)] flex items-center justify-center shrink-0">
                <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-300 shadow-inner" />
              </div>
            </div>

            {/* Right: 3D Clay Capsule */}
            <div className="w-full md:w-[58%] relative group">
              {/* Pointing tail (pointing left toward step 04) */}
              <div
                className="hidden md:block absolute top-1/2 -left-3 -translate-y-1/2 w-0 h-0 pointer-events-none z-10"
                style={{
                  borderTop: "12px solid transparent",
                  borderBottom: "12px solid transparent",
                  borderRight: "15px solid #ffffff",
                }}
              />

              <div className="clay-footer-card rounded-[32px] sm:rounded-full p-3 sm:p-3.5 pl-4 sm:pl-5 shadow-xl border-2 border-white flex items-center gap-4 transition-transform duration-300 hover:scale-[1.02]">
                {/* 3D Round Clay Medallion with Library Icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-400 to-indigo-300 text-white shadow-[0_6px_14px_-2px_rgba(99,102,241,0.38),inset_0_2.5px_4px_rgba(255,255,255,0.9),inset_0_-2.5px_4px_rgba(55,48,163,0.35)] flex items-center justify-center shrink-0 border border-white">
                  <Award className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2]" />
                </div>

                {/* Text Content */}
                <div className="flex flex-col text-left pr-3 sm:pr-6 py-1">
                  <h3 className="text-slate-900 font-black italic uppercase tracking-wider text-base sm:text-lg">
                    SEE YOUR ESTIMATE
                  </h3>
                  <p className="text-slate-600 text-[11px] sm:text-xs font-medium leading-relaxed mt-0.5 max-w-md">
                    It shows in your collection once your payment goes through. If a photo isn&apos;t clear enough, we&apos;ll ask you to retake it. Most estimates appear right away. Some cards are held for a closer look by our team before any estimate is shown, and those can take longer. Our team may review and change any estimate. These times are goals, not promises.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
