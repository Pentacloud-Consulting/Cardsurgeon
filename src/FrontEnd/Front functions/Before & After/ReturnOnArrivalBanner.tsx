"use client";

import React from "react";
import Link from "next/link";
import { Package, RotateCcw, ExternalLink, ShieldAlert } from "lucide-react";

export default function ReturnOnArrivalBanner() {
  return (
    <section className="py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3D Amber Clay Banner */}
        <div className="bg-gradient-to-b from-[#fffbeb] via-[#fef3c7] to-[#fde68a] rounded-[32px] sm:rounded-[36px] p-6 sm:p-8 border-2 border-white shadow-[0_22px_44px_-10px_rgba(245,158,11,0.28),0_6px_16px_rgba(217,119,6,0.12),inset_0_3px_5px_rgba(255,255,255,0.98),inset_0_-4px_8px_rgba(217,119,6,0.2)] relative overflow-hidden">
          {/* Subtle Clay Ambient Glows */}
          <div className="absolute top-0 right-10 w-48 h-48 rounded-full bg-white/40 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-5 sm:gap-6 text-center md:text-left">
            {/* 3D Box Medallion with Return Arrow */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-b from-white to-[#fef9ee] border-2 border-white flex items-center justify-center flex-shrink-0 shadow-[0_8px_18px_rgba(217,119,6,0.2),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-3px_5px_rgba(217,119,6,0.25)] relative">
              <Package className="w-8 h-8 sm:w-10 sm:h-10 text-amber-950 stroke-[2.3]" />
              <div className="absolute -top-1.5 -right-1.5 bg-gradient-to-br from-rose-500 to-red-600 text-white p-1.5 rounded-full border-2 border-white shadow-md">
                <RotateCcw className="w-3.5 h-3.5 stroke-[3]" />
              </div>
            </div>

            {/* Content Text */}
            <div className="space-y-2 flex-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-200/90 border border-amber-300 text-amber-950 text-xs font-black uppercase tracking-wider shadow-2xs">
                <ShieldAlert className="w-3.5 h-3.5 text-amber-900" />
                <span>RETURN ON ARRIVAL POLICY</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black italic uppercase text-amber-950 tracking-tight">
                RETURN ON ARRIVAL
              </h3>

              <p className="text-amber-950/90 text-sm sm:text-base font-semibold leading-relaxed max-w-4xl">
                Cards sent for work on our Not Included list are subject to return on arrival. We may send them back without doing any work, and shipping is non-refundable.{" "}
                <Link
                  href="/terms"
                  className="underline underline-offset-4 hover:text-rose-900 transition-colors inline-flex items-center gap-1 font-black text-amber-950"
                >
                  <span>See what restoration includes (Terms §8A)</span>
                  <ExternalLink className="w-3.5 h-3.5 inline" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
