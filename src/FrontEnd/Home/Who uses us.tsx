"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function WhoUsesUs() {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0); // continuous 0 to 1
  const sectionRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);

  const reasons = [
    {
      id: 1,
      num: "01",
      title: "Grading prep",
      desc: "You want each card to go in looking its honest best. We clean and restore it, you decide what to submit.",
      icon: (
        <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
          {/* Stethoscope Icon */}
          <svg
            className="w-6 h-6 text-sky-600 stroke-[2.2]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4.5 3v5a3.5 3.5 0 0 0 7 0V3" />
            <path d="M8 11.5v3a4.5 4.5 0 0 0 9 0v-1.5" />
            <circle cx="17" cy="11" r="2.5" />
          </svg>
        </div>
      ),
    },
    {
      id: 2,
      num: "02",
      title: "Basic cleaning",
      desc: "Dust, fingerprints, and surface grime. A careful clean for cards that don't need restoration. Cleaning is a surface treatment, and results vary by card.",
      icon: (
        <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
          {/* Clean Donut Bubble Vector */}
          <div className="w-6 h-6 rounded-full bg-rose-400 flex items-center justify-center border-2 border-white/80">
            <div className="w-2 h-2 rounded-full bg-rose-50" />
          </div>
        </div>
      ),
    },
    {
      id: 3,
      num: "03",
      title: "Collectors who flip cards",
      desc: "A clean card photographs better and presents better. Bring us the raw cards you're about to list.",
      icon: (
        <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
          {/* Price Tag Icon */}
          <svg
            className="w-6 h-6 text-amber-500 stroke-[2.2]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8 8a2 2 0 0 0 2.828 0l7.172-7.172a2 2 0 0 0 0-2.828l-8-8z" />
            <circle cx="7.5" cy="7.5" r="1.5" fill="currentColor" />
          </svg>
        </div>
      ),
    },
    {
      id: 4,
      num: "04",
      title: "Long-term collections",
      desc: "Your first binder, your dad's old shoebox, the pack you opened in 1994. We handle it with respect for the original card. Restoration can improve the look of a card. Results vary, and the card is changed.",
      icon: (
        <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100/80 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
          {/* Binder Archive Icon */}
          <svg
            className="w-6 h-6 text-indigo-600 stroke-[2.2]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            <line x1="12" y1="6" x2="16" y2="6" />
            <line x1="12" y1="10" x2="16" y2="10" />
          </svg>
        </div>
      ),
    },
  ];

  // Silky 60fps continuous scroll tracking with requestAnimationFrame
  useEffect(() => {
    const updateScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollableDistance = sectionRef.current.offsetHeight - windowHeight;

      if (scrollableDistance <= 0) return;

      // Normal progress from top of section entering pinned state to leaving
      const rawProgress = -rect.top / scrollableDistance;
      const clamped = Math.min(Math.max(rawProgress, 0), 1);

      // Smooth hermite/cubic easing for continuous natural motion
      // Ease in-out: 3p^2 - 2p^3
      const eased = clamped * clamped * (3 - 2 * clamped);
      setScrollProgress(eased);
    };

    const handleScroll = () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
      animFrameRef.current = requestAnimationFrame(updateScroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  // Distance of exactly 1 card + gap = 152px
  const shiftAmount = scrollProgress * 152;

  return (
    // Outer scroll track (180vh) so motion is gradual, buttery smooth, and never sudden
    <section
      ref={sectionRef}
      className="relative w-full h-[180vh] select-none"
    >
      {/* Sticky pinned screen wrapper */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center px-4 sm:px-8 lg:px-14 overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-sky-100/60 to-emerald-100/40 blur-3xl" />
          <div className="absolute top-1/4 -right-16 w-96 h-96 rounded-full bg-gradient-to-tl from-amber-100/50 to-pink-100/30 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* =========================================================================
                LEFT COLUMN: Pinned Headline + Continuous Smooth Sliding Cards
               ========================================================================= */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Red Eyebrow Label */}
              <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#d9483b] mb-3 drop-shadow-sm">
                WHO USES US
              </span>

              {/* Bold Headline */}
              <h2 className="hero-chunky-headline text-3xl sm:text-4xl lg:text-[44px] font-black uppercase tracking-tight text-[#172b43] leading-[1.08] mb-6 sm:mb-8 max-w-xl">
                COLLECTORS COME TO THE OPERATING TABLE FOR DIFFERENT REASONS.
              </h2>

              {/* =====================================================================
                  CONTINUOUS SILKY SCROLL TRACK (Tied 1:1 to scroll progress)
                 ===================================================================== */}
              <div className="w-full h-[438px] sm:h-[454px] overflow-hidden relative py-3 -my-3 px-1.5 -mx-1.5">
                <div
                  className="flex flex-col gap-4 sm:gap-4.5 will-change-transform"
                  style={{
                    transform: `translate3d(0, -${shiftAmount}px, 0)`,
                    transition: "transform 0.1s linear",
                  }}
                >
                  {reasons.map((item, idx) => {
                    // Card 0 fades slightly out as it slides out of view
                    // Card 3 fades in as it slides into view
                    let opacity = 1;
                    if (idx === 0) {
                      opacity = Math.max(1 - scrollProgress * 1.4, 0.2);
                    } else if (idx === 3) {
                      opacity = Math.min(0.2 + scrollProgress * 1.2, 1);
                    }

                    return (
                      <div
                        key={item.id}
                        onMouseEnter={() => setActiveItem(item.id)}
                        onMouseLeave={() => setActiveItem(null)}
                        style={{ opacity }}
                        className={`group w-full min-h-[126px] rounded-[28px] sm:rounded-[30px] p-5 sm:p-6 transition-all duration-300 cursor-pointer bg-white border border-slate-100 ${
                          activeItem === item.id
                            ? "shadow-[0_12px_28px_rgba(0,0,0,0.08)] -translate-y-0.5"
                            : "shadow-[0_6px_20px_rgba(0,0,0,0.04)]"
                        }`}
                      >
                        <div className="flex items-start gap-4 sm:gap-5">
                          {/* Clean Icon Box */}
                          {item.icon}

                          {/* Content */}
                          <div className="flex-1 flex flex-col">
                            <div className="flex items-center justify-between">
                              <h3 className="hero-chunky-headline text-lg sm:text-[20px] font-black text-[#172b43] mb-1">
                                {item.title}
                              </h3>
                              {/* Clean Number Pill */}
                              <div className="w-8 h-6 rounded-full bg-slate-100/80 border border-slate-200/50 flex items-center justify-center">
                                <span className="text-[11px] font-black text-slate-500 font-mono">
                                  {item.num}
                                </span>
                              </div>
                            </div>
                            <p className="text-sm sm:text-[14.5px] font-medium text-slate-600 leading-relaxed mt-0.5">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* =========================================================================
                RIGHT COLUMN: 3D Clay Frame with Operating Desk Scene (1:1 Ratio)
               ========================================================================= */}
            <div className="lg:col-span-5 flex justify-center items-center">
              {/* The 3D Clay Frame Container in 1:1 Aspect Ratio */}
              <div className="relative w-full max-w-[480px] aspect-square transition-transform duration-500 hover:scale-[1.02]">
                {/* 3D White Pearl Clay Outer Frame */}
                <div className="relative w-full h-full rounded-[40px] sm:rounded-[48px] bg-gradient-to-b from-white via-[#f7fafc] to-[#e8f2f8] p-3 sm:p-4 shadow-[0_24px_50px_rgba(30,70,110,0.18),inset_0_4px_8px_rgba(255,255,255,0.98),inset_0_-4px_10px_rgba(150,185,220,0.35)] border-2 border-white flex items-center justify-center">
                  {/* Inner Screen holding 1:1 Image */}
                  <div className="relative w-full h-full rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-inner border border-slate-200/60 bg-slate-900">
                    <Image
                      src="/Service/Who uses us trust.webp"
                      alt="The Card Surgeon Operating Table"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 480px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
