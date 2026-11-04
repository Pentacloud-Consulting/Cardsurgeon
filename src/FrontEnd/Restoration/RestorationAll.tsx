"use client";

import React from "react";
import RestorationHero from "./RestorationHero";
import RestorationTiers from "./RestorationTiers";
import RestorationAddOns from "./RestorationAddOns";
import BeforeAfterShowcase from "@/FrontEnd/Front functions/Before & After/BeforeAfterShowcase";
import WhatWeDoAndDont from "@/FrontEnd/Front functions/Before & After/WhatWeDoAndDont";
import ReturnOnArrivalBanner from "@/FrontEnd/Front functions/Before & After/ReturnOnArrivalBanner";
import BeforeAfterActionButtons from "@/FrontEnd/Front functions/Before & After/BeforeAfterActionButtons";

export default function RestorationAll() {
  React.useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) {
            const yOffset = -90;
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }, 150);
      }
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <div className="w-full space-y-4">
      {/* 1. Hero Section */}
      <RestorationHero />

      {/* 2. Choose Your Level Tiers (Image 2) */}
      <RestorationTiers />

      {/* 3. Add-ons (Image 3) */}
      <RestorationAddOns />

      {/* 4. Interactive Before & After Showcase Slider */}
      <BeforeAfterShowcase />

      {/* 5. What We Do & Don't Section */}
      <WhatWeDoAndDont />

      {/* 6. Return on Arrival Warning Banner */}
      <ReturnOnArrivalBanner />

      {/* 7. Action Buttons with "See the full before & after showcase" */}
      <BeforeAfterActionButtons showFullShowcase={true} />
    </div>
  );
}
