"use client";

import React from "react";
import EstimatedGradeHero from "./EstimatedGradeHero";
import NewAccountOffer from "@/FrontEnd/Front functions/Login Feautes/New Account offer";
import EstimatedGradeTimeline from "./EstimatedGradeTimeline";
import LoginToUpload from "@/FrontEnd/Front functions/Login Feautes/Login to upload";
import HowWeMakeYourEstimate from "@/FrontEnd/Front functions/Login Feautes/How we make your estimate";

export default function EstimatedGradeContent() {
  return (
    <div className="pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col gap-12 sm:gap-16">
      {/* SECTION 1: Hero Section (Left details, Right interactive 3D grading scan) */}
      <EstimatedGradeHero />

      {/* SECTION 2: New Account Offer (First 3 Estimates Free) - After Hero */}
      <NewAccountOffer />

      {/* SECTION 3: 4-Step Serpentine Dotted 3D Clay Timeline */}
      <EstimatedGradeTimeline />

      {/* SECTION 4: Login To Upload & Important Conditions - After Timeline */}
      <LoginToUpload />

      {/* SECTION 5: How We Make Your Estimate & Disclaimers */}
      <HowWeMakeYourEstimate />
    </div>
  );
}

export {
  EstimatedGradeHero,
  NewAccountOffer,
  EstimatedGradeTimeline,
  LoginToUpload,
  HowWeMakeYourEstimate,
};
