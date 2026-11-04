"use client";

import React from "react";
import Link from "next/link";
import { UserCheck, Mail, ArrowRight, UserPlus, MessageSquare } from "lucide-react";

export default function AlreadyApprovedConfirm() {
  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {/* ========================================================
            CARD 1: Already Approved Creators
            ======================================================== */}
        <div className="clay-footer-card rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 shadow-xl border-2 border-white flex flex-col justify-between gap-5 relative overflow-hidden hover:scale-[1.01] transition-transform">
          {/* Subtle glow */}
          <div className="absolute -top-12 -right-12 w-36 h-36 bg-emerald-200/20 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col gap-3 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-emerald-300 text-white flex items-center justify-center shrink-0 shadow-[0_6px_14px_-2px_rgba(16,185,129,0.35),inset_0_2px_4px_rgba(255,255,255,0.9),inset_0_-2.5px_4px_rgba(6,78,59,0.3)]">
              <UserCheck className="w-6 h-6 stroke-[2.2]" />
            </div>

            <div className="flex flex-col text-left">
              <span className="text-[11px] font-black uppercase tracking-widest text-emerald-800">
                Partner Sign In
              </span>
              <h3 className="text-xl sm:text-2xl font-black italic uppercase tracking-wide text-slate-900 leading-tight">
                ALREADY APPROVED?
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
              Log in to your account. Code usage reporting for creators is coming soon.
            </p>
          </div>

          <div className="pt-2 relative z-10">
            <Link
              href="/login"
              className="clay-hero-btn-yellow rounded-full px-6 py-3 text-xs sm:text-[13px] font-black italic uppercase tracking-wider text-[#3d2400] inline-flex items-center justify-center gap-2 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer w-full sm:w-auto"
            >
              <span>LOG IN TO YOUR ACCOUNT</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>

        {/* ========================================================
            CARD 2: Interested in Joining
            ======================================================== */}
        <div className="clay-footer-card rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 shadow-xl border-2 border-white flex flex-col justify-between gap-5 relative overflow-hidden hover:scale-[1.01] transition-transform">
          {/* Subtle glow */}
          <div className="absolute -top-12 -right-12 w-36 h-36 bg-amber-200/20 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col gap-3 relative z-10">
            {/* 3D Tile with new UserPlus Icon (Image 4 changed) */}
            <div className="clay-tile-yellow w-12 h-12 rounded-2xl flex items-center justify-center shrink-0">
              <UserPlus className="w-6 h-6 text-amber-800 stroke-[2.2]" />
            </div>

            <div className="flex flex-col text-left">
              <span className="text-[11px] font-black uppercase tracking-widest text-amber-800">
                Invitation Requests
              </span>
              <h3 className="text-xl sm:text-2xl font-black italic uppercase tracking-wide text-slate-900 leading-tight">
                INTERESTED IN JOINING?
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
              Email{" "}
              <a
                href="mailto:admin@thecardsurgeon.com"
                className="text-emerald-700 font-bold underline hover:text-emerald-900"
              >
                admin@thecardsurgeon.com
              </a>{" "}
              or use the contact form to introduce your channel and community.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2 relative z-10">
            {/* Solid Obsidian Clay EMAIL US Button (Image 3 fix) */}
            <a
              href="mailto:admin@thecardsurgeon.com"
              className="rounded-full px-6 py-3 text-xs sm:text-[13px] font-black italic uppercase tracking-wider bg-slate-950 text-amber-300 hover:text-white shadow-[0_12px_24px_-4px_rgba(10,15,25,0.45),inset_0_2px_3px_rgba(255,255,255,0.35),inset_0_-3px_5px_rgba(0,0,0,0.7)] border border-slate-700 inline-flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto hover:scale-105 active:scale-95 transition-all"
            >
              <Mail className="w-4 h-4 text-amber-300 stroke-[2.2]" />
              <span>EMAIL US</span>
            </a>

            <Link
              href="/contact"
              className="clay-hero-btn-white rounded-full px-6 py-3 text-xs sm:text-[13px] font-black italic uppercase tracking-wider text-slate-800 hover:text-slate-950 inline-flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto shadow-md hover:scale-105 active:scale-95 transition-all"
            >
              <MessageSquare className="w-4 h-4 text-emerald-700 stroke-[2.2]" />
              <span>CONTACT FORM</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
