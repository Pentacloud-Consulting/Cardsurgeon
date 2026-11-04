"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Layers, Eye } from "lucide-react";

interface BeforeAfterActionButtonsProps {
  showFullShowcase?: boolean;
}

export default function BeforeAfterActionButtons({
  showFullShowcase = false,
}: BeforeAfterActionButtonsProps) {
  return (
    <div className="py-6 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
      {/* Button 1: Book A Restoration (Gold 3D Clay Pill) */}
      <Link
        href="/order?service=restoration"
        className="clay-hero-btn-yellow rounded-full px-8 sm:px-10 py-4 sm:py-4.5 font-black italic uppercase tracking-wider text-[#3d2400] text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
      >
        <span>BOOK A RESTORATION</span>
        <ArrowRight className="w-4 h-4 stroke-[3]" />
      </Link>

      {/* Button 2: Restoration Tiers & Pricing (White Pearl 3D Clay Pill) */}
      <a
        href="/restoration#tiers"
        onClick={(e) => {
          e.preventDefault();
          if (window.location.pathname === "/restoration") {
            const el = document.getElementById("tiers");
            if (el) {
              const yOffset = -90;
              const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({ top: y, behavior: "smooth" });
              return;
            }
          }
          window.location.href = "/restoration#tiers";
        }}
        className="clay-hero-btn-white rounded-full px-8 sm:px-10 py-4 sm:py-4.5 font-black italic uppercase tracking-wider text-slate-800 text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
      >
        <Layers className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
        <span>RESTORATION TIERS &amp; PRICING</span>
      </a>

      {/* Button 3: See The Full Before & After Showcase (Only shown on Restoration page) */}
      {showFullShowcase && (
        <Link
          href="/before-after"
          className="clay-hero-btn-white rounded-full px-8 sm:px-10 py-4 sm:py-4.5 font-black italic uppercase tracking-wider text-emerald-800 text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer border-2 border-emerald-400/40"
        >
          <Eye className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
          <span>SEE THE FULL BEFORE &amp; AFTER SHOWCASE</span>
        </Link>
      )}
    </div>
  );
}
