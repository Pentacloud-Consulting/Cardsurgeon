"use client";

import React from "react";
import Link from "next/link";
import {
  Award,
  Ticket,
  ShoppingCart,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Mail,
  Lock,
} from "lucide-react";

export default function CreatorPortalHero() {
  return (
    <section className="w-full max-w-6xl mx-auto min-h-[calc(100vh-8.5rem)] flex flex-col justify-center py-4">
      {/* 2-Column Hero Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
        {/* ========================================================
            LEFT SIDE: Exact Details Requested
            ======================================================== */}
        <div className="lg:col-span-7 flex flex-col items-start text-left gap-4 sm:gap-5">
          {/* Top Pill Tag */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100/90 border border-emerald-200/80 text-emerald-800 text-[11px] font-black uppercase tracking-wider shadow-xs">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            <span>Partners</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black italic uppercase tracking-wider text-emerald-800 drop-shadow-[0_2px_2px_rgba(255,255,255,0.9)] leading-[1.05]">
            CREATOR <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-900 bg-clip-text text-transparent">
              PORTAL
            </span>
          </h1>

          {/* Description */}
          <p className="text-slate-600 font-medium text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
            Our creator program is invite-only. Approved creators receive a personal code that customers enter at checkout.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Link
              href="/contact"
              className="clay-hero-btn-yellow rounded-full px-6 py-3 text-xs sm:text-[13px] font-black italic uppercase tracking-wider text-[#3d2400] flex items-center justify-center gap-2 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>REQUEST INVITATION</span>
            </Link>

            <Link
              href="/login"
              className="clay-hero-btn-white rounded-full px-6 py-3 text-xs sm:text-[13px] font-black italic uppercase tracking-wider text-slate-800 hover:text-slate-950 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Lock className="w-3.5 h-3.5 text-emerald-700" />
              <span>CREATOR SIGN IN</span>
            </Link>
          </div>

          {/* Trust badge */}
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 pt-0.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Exclusive Affiliate & Community Partnerships</span>
          </div>
        </div>

        {/* ========================================================
            RIGHT SIDE: Compact 3D Clay Creator Workflow Diagram
            ======================================================== */}
        <div className="lg:col-span-5 w-full flex justify-center">
          <div className="clay-footer-card rounded-[28px] sm:rounded-[36px] p-4 sm:p-5 shadow-xl border-2 border-white w-full max-w-[340px] sm:max-w-[360px] relative overflow-hidden flex flex-col gap-3">
            {/* Ambient subtle backglow */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-amber-200/25 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-emerald-200/25 rounded-full blur-2xl pointer-events-none" />

            {/* Diagram Header */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-200/70 relative z-10">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-700">
                  HOW THE PROGRAM WORKS
                </span>
              </div>
              <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                INVITE-ONLY
              </span>
            </div>

            {/* Step 1 in Diagram: Approved Creators */}
            <div className="clay-card-floating rounded-xl p-2.5 sm:p-3 flex items-center gap-3 shadow-xs border border-white/95 relative z-10">
              <div className="clay-tile-yellow w-9 h-9 rounded-lg flex items-center justify-center shrink-0">
                <Award className="w-4.5 h-4.5 text-amber-800 stroke-[2.2]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] font-black uppercase tracking-widest text-amber-800 leading-none">
                  STEP 01
                </span>
                <h4 className="text-xs font-black italic uppercase text-slate-900 leading-tight mt-0.5">
                  Approved Creators
                </h4>
                <p className="text-[10px] font-medium text-slate-500 leading-tight mt-0.5">
                  Hand-selected community leaders receive verified partner status.
                </p>
              </div>
            </div>

            {/* Connecting Flow Arrow */}
            <div className="flex justify-center -my-1.5 relative z-10">
              <div className="w-5 h-5 rounded-full bg-white shadow-xs border border-slate-200 flex items-center justify-center">
                <ArrowRight className="w-3 h-3 text-emerald-600 rotate-90" />
              </div>
            </div>

            {/* Step 2 in Diagram: Personal Code Issued */}
            <div className="rounded-xl p-2.5 sm:p-3 bg-gradient-to-r from-[#ffd43b] via-[#fcc419] to-[#fab005] shadow-[0_8px_16px_-4px_rgba(245,158,11,0.35),inset_0_2px_3px_rgba(255,255,255,0.9),inset_0_-2.5px_4px_rgba(180,95,15,0.3)] border-2 border-amber-300 flex items-center justify-between gap-2 relative z-10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-slate-950 text-amber-300 flex items-center justify-center shrink-0 shadow-inner">
                  <Ticket className="w-4 h-4 stroke-[2.2]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[8.5px] font-black uppercase tracking-widest text-[#9c3200] leading-none">
                    STEP 02 • EXCLUSIVE CODE
                  </span>
                  <span className="text-xs sm:text-sm font-black italic tracking-widest text-slate-950 font-mono leading-tight mt-0.5">
                    YOUR_HANDLE
                  </span>
                </div>
              </div>
              <div className="px-2 py-0.5 rounded-full bg-slate-950 text-amber-300 text-[8.5px] font-black uppercase tracking-wider shadow-xs">
                ACTIVE
              </div>
            </div>

            {/* Connecting Flow Arrow */}
            <div className="flex justify-center -my-1.5 relative z-10">
              <div className="w-5 h-5 rounded-full bg-white shadow-xs border border-slate-200 flex items-center justify-center">
                <ArrowRight className="w-3 h-3 text-emerald-600 rotate-90" />
              </div>
            </div>

            {/* Step 3 in Diagram: Customers Enter At Checkout */}
            <div className="clay-card-floating rounded-xl p-2.5 sm:p-3 flex items-center gap-3 shadow-xs border border-white/95 relative z-10">
              <div className="clay-tile-blue w-9 h-9 rounded-lg flex items-center justify-center shrink-0">
                <ShoppingCart className="w-4.5 h-4.5 text-blue-700 stroke-[2.2]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[9px] font-black uppercase tracking-widest text-blue-800 leading-none">
                  STEP 03
                </span>
                <h4 className="text-xs font-black italic uppercase text-slate-900 leading-tight mt-0.5">
                  Customer Checkout
                </h4>
                <p className="text-[10px] font-medium text-slate-500 leading-tight mt-0.5">
                  Customers enter your personal creator code to claim partner perks.
                </p>
              </div>
            </div>

            {/* Bottom Status Pill */}
            <div className="pt-1.5 border-t border-slate-200/70 flex items-center justify-center gap-1.5 text-[11px] font-bold text-emerald-800 relative z-10">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Automated Tracking & Attribution</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
