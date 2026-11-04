"use client";

import React from "react";
import Link from "next/link";
import { Download, Clock, FileText, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function DownloadsHero() {
  const upcomingDownloads = [
    {
      title: "Printable Submission Packing Slip",
      desc: "Pre-formatted submission manifest to include inside your shipping box.",
      format: "PDF",
      badge: "In Final Review",
    },
    {
      title: "Collector Pre-Grade Checklist",
      desc: "Step-by-step bench inspection checklist for 10-point surface check.",
      format: "PDF",
      badge: "Coming Soon",
    },
    {
      title: "Card Inventory & Declared Value Log",
      desc: "Track submitted card numbers, declared values, and tracking codes.",
      format: "XLSX",
      badge: "Coming Soon",
    },
  ];

  return (
    <section className="relative w-full py-6 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Main 3D Claymorphic Card */}
        <div className="clay-card-pearl rounded-[36px] sm:rounded-[48px] p-6 sm:p-12 border-2 border-white/95 shadow-[0_24px_50px_-10px_rgba(75,130,185,0.22),0_8px_20px_rgba(90,145,195,0.1),inset_0_4px_6px_rgba(255,255,255,1),inset_0_-5px_10px_rgba(160,195,230,0.32)] text-center relative overflow-hidden space-y-8">
          {/* Ambient Glows */}
          <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-amber-200/30 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-emerald-200/30 blur-3xl pointer-events-none" />

          {/* Top 3D Floating Icon Medallion */}
          <div className="flex justify-center relative z-10">
            <div className="relative group">
              {/* Outer Clay Ring */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-[28px] sm:rounded-[32px] bg-gradient-to-b from-[#ffe580] via-[#ffc700] to-[#e69d00] p-1.5 shadow-[0_16px_32px_rgba(230,157,0,0.38),0_4px_12px_rgba(180,110,0,0.22),inset_0_3px_5px_rgba(255,255,255,0.95),inset_0_-4px_6px_rgba(160,95,5,0.45)] border border-amber-200 flex items-center justify-center transform transition-transform hover:scale-105">
                <Download className="w-9 h-9 sm:w-11 sm:h-11 text-[#3d2400] stroke-[2.4]" />
              </div>

              {/* Pulsing Clock / Sparkle Badge */}
              <div className="absolute -bottom-1.5 -right-1.5 bg-slate-950 text-amber-400 p-2 rounded-full border-2 border-white shadow-md flex items-center justify-center">
                <Clock className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Header Content */}
          <div className="space-y-3 relative z-10 max-w-2xl mx-auto">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 border border-amber-300 text-amber-900 text-xs font-black uppercase tracking-wider shadow-2xs">
              <Clock className="w-3.5 h-3.5 text-amber-700" />
              <span>Feature Coming Soon</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              DOWNLOADS &amp; GUIDES <br />
              <span className="text-amber-500 italic drop-shadow-[0_2px_4px_rgba(217,119,6,0.2)]">
                COMING SOON
              </span>
            </h1>

            {/* Subtitle / Description */}
            <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed pt-1">
              We are finalizing our official printable submission forms, packaging packing slips, and card prep checklists. This resource library will be unlocked shortly for all collectors!
            </p>
          </div>

          {/* Upcoming Downloads Preview Grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2 text-left">
            {upcomingDownloads.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-xs rounded-2xl p-4 border border-white/95 shadow-[0_3px_10px_rgba(85,130,185,0.07),inset_0_1px_2px_rgba(255,255,255,1)] flex flex-col justify-between space-y-3 group hover:translate-y-[-2px] transition-transform"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="bg-amber-100 text-amber-900 text-[10px] font-black uppercase px-2 py-0.5 rounded-md border border-amber-200">
                      {item.format}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-xs sm:text-[13px] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-tight">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-amber-700">
                  <span>Available shortly</span>
                  <Clock className="w-3 h-3 text-amber-500" />
                </div>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="relative z-10 pt-4 flex flex-wrap items-center justify-center gap-3.5">
            {/* Button 1: Start an order */}
            <Link
              href="/order"
              className="clay-hero-btn-yellow rounded-full px-7 sm:px-8 py-3.5 sm:py-4 font-black italic uppercase tracking-wider text-[#3d2400] text-xs sm:text-[13px] flex items-center justify-center gap-2 shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
              <span>START AN ORDER</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </Link>

            {/* Button 2: Photo guide */}
            <Link
              href="/photo-guide"
              className="clay-hero-btn-white rounded-full px-6 sm:px-7 py-3.5 sm:py-4 font-black italic uppercase tracking-wider text-slate-800 text-xs sm:text-[13px] flex items-center justify-center gap-2 shadow-md hover:scale-105 active:scale-95 transition-all"
            >
              <FileText className="w-4 h-4 text-emerald-600 stroke-[2.3]" />
              <span>EXPLORE PHOTO GUIDE</span>
            </Link>

            {/* Button 3: Return home */}
            <Link
              href="/"
              className="bg-white hover:bg-slate-50 text-slate-700 font-bold px-6 py-3.5 rounded-full text-xs sm:text-[13px] border border-slate-200 shadow-xs flex items-center gap-2 transition-colors"
            >
              <span>BACK TO HOME</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
