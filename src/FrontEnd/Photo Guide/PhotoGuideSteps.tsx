"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, Camera } from "lucide-react";

interface StepData {
  step: string;
  id: string;
  buttonLabel: string;
  title: string;
  colorTitle: string;
  badgeBg: string;
  image: string;
  alt: string;
  bullets: string[];
}

const STEPS: StepData[] = [
  {
    step: "1",
    id: "step-1",
    buttonLabel: "1. Set up",
    title: "SET UP",
    colorTitle: "text-rose-600",
    badgeBg: "from-rose-500 to-red-400",
    image: "/photo%20guide/Photo%20guide%201.jpg",
    alt: "Card Surgeon Photo Guide Step 1: Set Up",
    bullets: [
      "Take the card out of its sleeve or holder.",
      "Lay it on a plain dark surface: a black T-shirt, a mouse pad or dark paper. No patterned playmats.",
      "Turn off the flash. Use even room light for the flat photos.",
      "Hold the phone flat, straight above the card. Don't use the ultra-wide lens.",
    ],
  },
  {
    step: "2",
    id: "step-2",
    buttonLabel: "2. Front and back",
    title: "FRONT AND BACK",
    colorTitle: "text-amber-600",
    badgeBg: "from-amber-500 to-yellow-400",
    image: "/photo%20guide/Photo%20guide%202.jpg",
    alt: "Card Surgeon Photo Guide Step 2: Front and Back",
    bullets: [
      "Take one photo of the front and one of the back.",
      "The card should fill most of the frame, with all 4 edges and a little of the surface around it showing.",
      "Keep it sharp: tap the card on screen to focus.",
    ],
  },
  {
    step: "3",
    id: "step-3",
    buttonLabel: "3. Angled light",
    title: "ANGLED LIGHT",
    colorTitle: "text-sky-700",
    badgeBg: "from-sky-500 to-blue-400",
    image: "/photo%20guide/Photo%20guide%203.jpg",
    alt: "Card Surgeon Photo Guide Step 3: Angled Light",
    bullets: [
      "Put one lamp low to the side: about 4 to 6 inches (10 to 15 cm) above the table and 1 to 2 feet (30 to 60 cm) away.. off other lights.",
      "Angled-light photo 1 of 4: take the front with the lamp where it is.",
      "Then keep the lamp where it is and turn the card a quarter turn. Take photos 2, 3 and 4 the same way.",
      "Do the back twice: once as it lies, once after a quarter turn.",
    ],
  },
  {
    step: "4",
    id: "step-4",
    buttonLabel: "4. Corner close-ups",
    title: "CORNER CLOSE-UPS",
    colorTitle: "text-emerald-700",
    badgeBg: "from-emerald-500 to-teal-400",
    image: "/photo%20guide/Photo%20guide%204.jpg",
    alt: "Card Surgeon Photo Guide Step 4: Corner Close-Ups",
    bullets: [
      "Move the phone close until one corner fills the middle of the screen.",
      "Keep the corner tip sharp, with a little of both edges showing.",
      "Do all 4 corners on the front, then all 4 on the back.",
    ],
  },
  {
    step: "5",
    id: "step-5",
    buttonLabel: "5. Edge close-ups",
    title: "EDGE CLOSE-UPS",
    colorTitle: "text-indigo-700",
    badgeBg: "from-indigo-500 to-purple-400",
    image: "/photo%20guide/Photo%20guide%205.jpg",
    alt: "Card Surgeon Photo Guide Step 5: Edge Close-Ups",
    bullets: [
      "Some phones need extra edge photos. If the app asks, take a close-up along each of the 4 edges.",
      "Keep the whole edge in the frame and in focus.",
    ],
  },
];

export default function PhotoGuideSteps() {
  const [activeStep, setActiveStep] = useState<string>("step-1");

  const handleScrollTo = (id: string) => {
    setActiveStep(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="w-full py-6 sm:py-10 relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-emerald-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-sky-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        {/* ========================================================
            TOP QUICK NAVIGATION PILL BUTTONS (Requested by user)
            ======================================================== */}
        <div className="mb-12 sm:mb-16 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 relative z-20">
          {STEPS.map((step) => {
            const isActive = activeStep === step.id;
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => handleScrollTo(step.id)}
                className={`rounded-full px-4 sm:px-5 py-2 sm:py-2.5 font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 cursor-pointer select-none ${
                  isActive
                    ? "clay-hero-btn-yellow text-[#3d2400] font-black scale-105 shadow-[0_12px_24px_-4px_rgba(230,165,30,0.45),inset_0_3px_5px_rgba(255,255,255,0.95),inset_0_-3px_6px_rgba(190,125,15,0.4)] border border-amber-200"
                    : "bg-gradient-to-b from-white via-[#f8fafc] to-[#edf4fc] text-slate-800 hover:text-slate-950 shadow-[0_8px_18px_-4px_rgba(100,145,195,0.22),inset_0_2px_4px_rgba(255,255,255,0.95),inset_0_-2.5px_4px_rgba(160,190,225,0.35)] border border-white hover:scale-105 active:scale-95"
                }`}
              >
                {step.buttonLabel}
              </button>
            );
          })}
        </div>

        {/* Desktop Serpentine Track Line (SVG Background Curve) */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none z-0 mt-20">
          <svg
            className="w-full h-full"
            viewBox="0 0 900 1750"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M 220 120 
                 C 450 120, 680 180, 680 430 
                 C 680 680, 220 620, 220 870 
                 C 220 1120, 680 1060, 680 1310 
                 C 680 1560, 220 1500, 220 1660"
              stroke="#62b5a5"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray="16 14"
              opacity="0.45"
            />
          </svg>
        </div>

        {/* Steps Container */}
        <div className="flex flex-col gap-14 sm:gap-20 relative z-10">
          {STEPS.map((step, idx) => {
            const isEven = idx % 2 === 1; // 0: img left, 1: img right, 2: img left, 3: img right, 4: img left

            return (
              <div
                key={step.step}
                id={step.id}
                className="scroll-mt-28 sm:scroll-mt-32 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12"
              >
                {/* Visual Image Tablet Frame */}
                <div
                  className={`w-full lg:w-[48%] ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  } flex justify-center`}
                >
                  <div className="relative group w-full max-w-md">
                    {/* 3D Clay Device Frame */}
                    <div className="rounded-[32px] sm:rounded-[40px] bg-gradient-to-b from-white via-[#f0f6fc] to-[#e1edf9] p-3.5 sm:p-5 shadow-[0_22px_45px_-8px_rgba(75,130,175,0.28),inset_0_4px_7px_rgba(255,255,255,0.98),inset_0_-5px_10px_rgba(150,185,220,0.4)] border-2 border-white/95 transition-all duration-300 group-hover:scale-[1.02]">
                      {/* Top Device Mic/Camera Notch */}
                      <div className="flex items-center justify-between px-3 pb-2.5">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-slate-300 shadow-inner" />
                          <div className="w-2 h-2 rounded-full bg-slate-200" />
                        </div>
                        <div className="flex items-center gap-1 text-[11px] font-bold text-slate-400">
                          <Camera className="w-3.5 h-3.5" />
                          <span>STEP 0{step.step}</span>
                        </div>
                      </div>

                      {/* Screen Viewport with Photo Guide Image */}
                      <div className="relative w-full aspect-[4/3] rounded-2xl sm:rounded-[26px] overflow-hidden bg-slate-900 shadow-inner border border-slate-200/80">
                        <Image
                          src={step.image}
                          alt={step.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 450px"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          priority={idx === 0}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Instructions Text Card */}
                <div
                  className={`w-full lg:w-[48%] ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="clay-footer-card rounded-[30px] sm:rounded-[36px] p-6 sm:p-8 shadow-xl border-2 border-white flex flex-col gap-4 sm:gap-5">
                    {/* Step Title Header */}
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-2xl bg-gradient-to-tr ${step.badgeBg} text-white flex items-center justify-center font-black italic text-lg shadow-[0_6px_14px_-2px_rgba(0,0,0,0.25),inset_0_2px_4px_rgba(255,255,255,0.85),inset_0_-2px_4px_rgba(0,0,0,0.3)] shrink-0`}
                      >
                        {step.step}
                      </div>

                      <h2
                        className={`text-2xl sm:text-3xl font-black italic uppercase tracking-wider ${step.colorTitle}`}
                      >
                        {step.title}
                      </h2>
                    </div>

                    {/* Bullet Points with 3D Clay Checkmarks */}
                    <div className="flex flex-col gap-3">
                      {step.bullets.map((bullet, bIdx) => (
                        <div
                          key={bIdx}
                          className="flex items-start gap-3 text-left"
                        >
                          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-[0_3px_8px_rgba(16,185,129,0.35),inset_0_1.5px_2.5px_rgba(255,255,255,0.85),inset_0_-1.5px_2.5px_rgba(6,78,59,0.3)]">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                          <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">
                            {bullet}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
