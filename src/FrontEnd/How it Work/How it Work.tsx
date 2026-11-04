"use client";

import React from "react";
import HowItWorksSteps from "./HowItWorksSteps";
import WorkScope from "./WorkScope";
import WhereToShip from "./WhereToShip";

export default function HowItWorkContent() {
  return (
    <div className="pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col gap-8 sm:gap-12">
      {/* SECTION 1: How It Works 4-Step Process & Service Distinction */}
      <HowItWorksSteps />

      {/* SECTION 2: Work Scope (What we take on vs. Not included) */}
      <WorkScope />

      {/* SECTION 3: Where To Ship Your Cards & Safety Checklist */}
      <WhereToShip />
    </div>
  );
}

export { HowItWorksSteps, WorkScope, WhereToShip };
