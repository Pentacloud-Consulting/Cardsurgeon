"use client";

import React from "react";
import Link from "next/link";
import {
  LogIn,
  ArrowRight,
  ShieldAlert,
  PackageCheck,
  Camera,
  CheckCircle2,
} from "lucide-react";

export default function LoginToUpload() {
  return (
    <section className="w-full flex flex-col gap-6 sm:gap-8">
      {/* ========================================================
          CARD 1: Login / Account Action Banner
          ======================================================== */}
      <div className="clay-footer-card rounded-[32px] sm:rounded-[40px] p-6 sm:p-9 shadow-xl border border-white/90 bg-gradient-to-br from-white via-slate-50 to-emerald-50/40 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-start gap-4 sm:gap-5 max-w-2xl">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-emerald-300 text-emerald-950 flex items-center justify-center shrink-0 shadow-[0_6px_14px_-2px_rgba(16,185,129,0.35),inset_0_2.5px_4px_rgba(255,255,255,0.9),inset_0_-2.5px_4px_rgba(6,78,59,0.35)]">
            <LogIn className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.4]" />
          </div>

          <div className="flex flex-col text-left">
            <span className="text-[11px] font-black uppercase tracking-widest text-emerald-800">
              Personal Card Vault
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black italic uppercase tracking-wide text-slate-900 leading-tight">
              LOG IN TO UPLOAD PHOTOS
            </h3>
            <p className="text-slate-600 font-medium text-xs sm:text-sm mt-1 leading-relaxed">
              Log in or create your account to upload photos and save cards to your collection.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="w-full md:w-auto shrink-0">
          <Link
            href="/login"
            className="w-full md:w-auto clay-hero-btn-yellow rounded-full px-8 py-4 font-black italic uppercase text-xs sm:text-[13px] tracking-wider text-[#3d2400] text-center flex items-center justify-center gap-2 shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <span>LOG IN / CREATE ACCOUNT</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* ========================================================
          3 KEY INFORMATIONAL CARDS
          ======================================================== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Item 1: Estimated grades are not guaranteed */}
        <div className="clay-footer-card rounded-[26px] sm:rounded-[30px] p-5 sm:p-6 shadow-md border border-white/90 flex flex-col justify-between hover:scale-[1.01] transition-transform">
          <div>
            <div className="clay-tile-yellow w-11 h-11 rounded-2xl flex items-center justify-center mb-4 shrink-0">
              <ShieldAlert className="w-5 h-5 text-amber-800 stroke-[2.3]" />
            </div>
            <h4 className="font-black italic uppercase text-sm sm:text-base text-slate-900 leading-snug mb-1.5">
              Estimated grades are not guaranteed.
            </h4>
            <p className="text-xs sm:text-[13px] text-slate-600 font-medium leading-relaxed">
              Our pre-grades and estimates reflect our honest expert opinion based on photo checks, not a guarantee of any certified third-party grade.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-bold text-amber-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
            <span>Honest Expert Assessment</span>
          </div>
        </div>

        {/* Item 2: No order needed */}
        <div className="clay-footer-card rounded-[26px] sm:rounded-[30px] p-5 sm:p-6 shadow-md border border-white/90 flex flex-col justify-between hover:scale-[1.01] transition-transform">
          <div>
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-200 to-emerald-100 shadow-[0_6px_12px_-2px_rgba(16,185,129,0.2),inset_0_2px_4px_rgba(255,255,255,0.95),inset_0_-2.5px_4px_rgba(6,78,59,0.2)] flex items-center justify-center mb-4 shrink-0">
              <PackageCheck className="w-5 h-5 text-emerald-800 stroke-[2.3]" />
            </div>
            <h4 className="font-black italic uppercase text-sm sm:text-base text-slate-900 leading-snug mb-1.5">
              No order needed.
            </h4>
            <p className="text-xs sm:text-[13px] text-slate-600 font-medium leading-relaxed">
              Adding a card to your collection does not need an order. There is nothing to pay and nothing to ship.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-bold text-emerald-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Zero Inbound Shipping</span>
          </div>
        </div>

        {/* Item 3: Photos only */}
        <div className="clay-footer-card rounded-[26px] sm:rounded-[30px] p-5 sm:p-6 shadow-md border border-white/90 flex flex-col justify-between hover:scale-[1.01] transition-transform">
          <div>
            <div className="clay-tile-blue w-11 h-11 rounded-2xl flex items-center justify-center mb-4 shrink-0">
              <Camera className="w-5 h-5 text-blue-800 stroke-[2.3]" />
            </div>
            <h4 className="font-black italic uppercase text-sm sm:text-base text-slate-900 leading-snug mb-1.5">
              Photos only.
            </h4>
            <p className="text-xs sm:text-[13px] text-slate-600 font-medium leading-relaxed">
              Get Your Estimated Grade works from your photos only. Your card stays with you; you do not ship it to us.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-bold text-blue-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
            <span>Card Remains In Your Custody</span>
          </div>
        </div>
      </div>
    </section>
  );
}
