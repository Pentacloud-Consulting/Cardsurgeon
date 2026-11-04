"use client";

import React from "react";
import PreGradeHero from "./PreGradeHero";
import PreGradeNotIncluded from "./PreGradeNotIncluded";
import PreGradeTiers from "./PreGradeTiers";

export default function PreGradeContent() {
  return (
    <div className="pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col gap-10 sm:gap-14">
      {/* SECTION 1: Pre-Grade Prep Hero & 5 Included Features */}
      <PreGradeHero />

      {/* SECTION 2: What is NOT Included & Restoration Callout */}
      <PreGradeNotIncluded />

      {/* SECTION 3: 3 Pricing & Turnaround Tiers */}
      <PreGradeTiers />
    </div>
  );
}

export { PreGradeHero, PreGradeNotIncluded, PreGradeTiers };
