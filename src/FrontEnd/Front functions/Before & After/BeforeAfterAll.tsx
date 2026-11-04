"use client";

import React from "react";
import BeforeAfterHero from "./BeforeAfterHero";
import BeforeAfterShowcase from "./BeforeAfterShowcase";
import WhatWeDoAndDont from "./WhatWeDoAndDont";
import ReturnOnArrivalBanner from "./ReturnOnArrivalBanner";
import BeforeAfterActionButtons from "./BeforeAfterActionButtons";

export default function BeforeAfterAll() {
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
      <BeforeAfterHero />
      <BeforeAfterShowcase />
      <WhatWeDoAndDont />
      <ReturnOnArrivalBanner />
      <BeforeAfterActionButtons />
    </div>
  );
}
