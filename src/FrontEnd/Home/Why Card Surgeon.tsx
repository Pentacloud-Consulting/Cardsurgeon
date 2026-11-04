"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Wrench,
  Gem,
  Microscope,
  Layers,
  ShieldCheck,
  CheckCircle2,
  PackageCheck,
  Box,
  ChevronLeft,
  ChevronRight,
  Lock,
} from "lucide-react";

export default function WhyCardSurgeon() {
  const [slideIndex, setSlideIndex] = useState(0); // 0: cards 1,2,3 | 1: cards 2,3,4
  const sectionRef = useRef<HTMLElement>(null);
  const touchStartX = useRef<number | null>(null);

  const features = [
    {
      num: "01",
      title: "CAREFUL\nCLEANING",
      desc: "Cleaning and restoration: Restoration goes a step further to fit your card.",
      icon: Wrench,
      tag: "Surgical Prep",
      image: "/Care card/Careful Cleaning.webp",
      illustration: (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Workdesk Mat */}
          <div className="w-[88%] h-[82%] rounded-[22px] bg-gradient-to-b from-[#eaf4f7] to-[#d2e7ef] p-3 shadow-inner flex flex-col justify-between relative overflow-hidden border border-white/60">
            {/* Top Tools Bar */}
            <div className="flex items-center justify-between z-10">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 bg-white/70 px-2 py-0.5 rounded-full shadow-sm">
                Micro-Surface
              </span>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            </div>

            {/* Trading Card Being Cleaned */}
            <div className="relative mx-auto w-[124px] h-[148px] rounded-[16px] bg-gradient-to-b from-[#ffd285] to-[#f59e0b] p-2 flex flex-col items-center justify-between shadow-[0_12px_24px_rgba(0,0,0,0.15)] border-2 border-white/80">
              <div className="w-full h-20 rounded-[10px] bg-gradient-to-tr from-sky-400 via-indigo-400 to-amber-300 relative overflow-hidden shadow-inner flex items-center justify-center">
                <Gem className="w-8 h-8 text-white drop-shadow-md animate-pulse" />
                <div className="absolute inset-y-0 left-1/2 w-4 bg-white/30 transform -skew-x-12 blur-[1px]" />
              </div>
              {/* Microfiber Cloth Cleaning Glove Tool */}
              <div className="absolute -bottom-3 -right-3 w-14 h-14 rounded-2xl bg-gradient-to-br from-white to-slate-200 shadow-[0_8px_16px_rgba(0,0,0,0.18)] border border-white flex items-center justify-center p-1 transform rotate-6">
                <div className="w-8 h-8 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600 shadow-inner">
                  <Wrench className="w-5 h-5" />
                </div>
              </div>
              <div className="w-full flex flex-col gap-1 z-10">
                <div className="w-3/4 h-1.5 bg-amber-900/40 rounded-full" />
                <div className="w-1/2 h-1.5 bg-amber-900/30 rounded-full" />
              </div>
            </div>

            {/* Bottom Status */}
            <div className="flex items-center gap-1.5 z-10 text-[11px] font-bold text-slate-600">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>Zero residue safe</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      num: "02",
      title: "IMPROVING\nCONDITION",
      desc: "A visible change you can see in hand, keep, sell, or submit it for grading.",
      icon: Microscope,
      tag: "Condition Boost",
      image: "/Care card/Improving Condition.webp",
      illustration: (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Workdesk Mat */}
          <div className="w-[88%] h-[82%] rounded-[22px] bg-gradient-to-b from-[#fef7e6] to-[#fae6be] p-3 shadow-inner flex flex-col justify-between relative overflow-hidden border border-white/60">
            {/* Top Status */}
            <div className="flex items-center justify-between z-10">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-900 bg-white/70 px-2 py-0.5 rounded-full shadow-sm">
                Magnified Inspection
              </span>
              <span className="text-[11px] font-extrabold text-amber-600">
                +1.5 Grade Bump
              </span>
            </div>

            {/* Magnifier Lens Simulation */}
            <div className="relative mx-auto w-[130px] h-[130px] rounded-full bg-gradient-to-br from-white/95 to-slate-100 p-2 shadow-[0_16px_30px_rgba(200,140,20,0.22),inset_0_3px_6px_rgba(255,255,255,0.9)] border-4 border-amber-300 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-gradient-to-tr from-amber-400 via-rose-400 to-indigo-500 overflow-hidden relative shadow-inner flex flex-col items-center justify-center">
                <Microscope className="w-10 h-10 text-white drop-shadow-md" />
                <span className="text-[10px] font-black tracking-tight text-white/95 uppercase mt-1">
                  Ultra HD Crisp
                </span>
                <div className="absolute top-2 left-4 w-6 h-3 rounded-full bg-white/60 blur-[1px] transform -rotate-45" />
              </div>
            </div>

            {/* Bottom Status */}
            <div className="flex items-center justify-between z-10 text-[11px] font-bold text-slate-700">
              <span>Surface · Edges · Corners</span>
              <span className="text-amber-800 font-black">10/10</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      num: "03",
      title: "CARDS YOU\nGREW UP WITH",
      desc: "Years in a shoebox leave their mark; restoration can improve their look.",
      icon: Layers,
      tag: "Vintage Archival",
      image: "/Care card/Cards You Grew Up With.webp",
      illustration: (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Vintage Vault Box Mat */}
          <div className="w-[88%] h-[82%] rounded-[22px] bg-gradient-to-b from-[#f8ede3] to-[#ebd7c7] p-3 shadow-inner flex flex-col justify-between relative overflow-hidden border border-white/60">
            {/* Top Status */}
            <div className="flex items-center justify-between z-10">
              <span className="text-[10px] font-black uppercase tracking-wider text-stone-700 bg-white/70 px-2 py-0.5 rounded-full shadow-sm">
                Vintage Archive
              </span>
              <span className="text-[10px] font-black text-rose-500 bg-rose-50 px-2 py-0.5 rounded-full">
                Est. 1999
              </span>
            </div>

            {/* Cards Stack */}
            <div className="relative mx-auto w-[140px] h-[130px] flex items-center justify-center">
              <div className="absolute -left-2 top-1 w-20 h-28 rounded-xl bg-gradient-to-br from-amber-600 to-amber-800 p-1.5 shadow-md transform -rotate-12 border border-white/60 opacity-80 flex flex-col justify-between">
                <div className="w-full h-12 bg-amber-200/40 rounded-lg" />
                <div className="w-2/3 h-1.5 bg-white/50 rounded-full" />
              </div>
              <div className="absolute -right-2 top-2 w-20 h-28 rounded-xl bg-gradient-to-br from-sky-600 to-blue-800 p-1.5 shadow-md transform rotate-12 border border-white/60 opacity-85 flex flex-col justify-between">
                <div className="w-full h-12 bg-sky-200/40 rounded-lg" />
                <div className="w-2/3 h-1.5 bg-white/50 rounded-full" />
              </div>
              {/* Restored Slab */}
              <div className="relative z-10 w-24 h-32 rounded-2xl bg-white p-1.5 shadow-[0_14px_28px_rgba(0,0,0,0.18)] border-2 border-white flex flex-col justify-between">
                <div className="w-full h-4 rounded-md bg-rose-500 flex items-center justify-center">
                  <span className="text-[8px] font-black text-white tracking-widest">
                    MINT 10
                  </span>
                </div>
                <div className="w-full h-16 rounded-lg bg-gradient-to-tr from-amber-300 via-rose-300 to-sky-300 shadow-inner flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-white drop-shadow-sm" />
                </div>
                <div className="w-full flex flex-col gap-1">
                  <div className="w-full h-1 bg-slate-300 rounded-full" />
                  <div className="w-1/2 h-1 bg-slate-300 rounded-full" />
                </div>
              </div>
            </div>

            {/* Bottom Status */}
            <div className="flex items-center justify-between z-10 text-[11px] font-bold text-stone-600">
              <span>Shoebox to Slab</span>
              <span className="text-rose-600 font-extrabold">Restored</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      num: "04",
      title: "PACKED LIKE IT\nMATTERS, BECAUSE IT DOES.",
      desc: "Your cards come home in a protective, tissue-lined box, with each card secured in its own cradle under a sealed lid.",
      icon: PackageCheck,
      tag: "Vault Security",
      image: "/Care card/Packed it.webp",
      illustration: (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Tissue Lined Protective Box Mat */}
          <div className="w-[88%] h-[82%] rounded-[22px] bg-gradient-to-b from-[#e3f4ff] via-[#d0ebff] to-[#bce2fe] p-3 shadow-inner flex flex-col justify-between relative overflow-hidden border border-white/70">
            {/* Top Status */}
            <div className="flex items-center justify-between z-10">
              <span className="text-[10px] font-black uppercase tracking-wider text-sky-900 bg-white/75 px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                <Lock className="w-3 h-3 text-sky-600" />
                Sealed Vault Box
              </span>
              <span className="text-[10px] font-black text-sky-700 bg-sky-100/90 px-2 py-0.5 rounded-full">
                Custom Cradle
              </span>
            </div>

            {/* 3D Protective Box & Slotted Foam Cradle */}
            <div className="relative mx-auto w-[142px] h-[140px] flex items-center justify-center">
              {/* Outer Deep Foam Box Frame */}
              <div className="w-full h-full rounded-[20px] bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] p-2.5 shadow-[0_16px_32px_rgba(15,23,42,0.35),inset_0_3px_6px_rgba(255,255,255,0.2)] border-2 border-sky-300/40 flex flex-col justify-between relative">
                {/* Tissue Paper Soft Shimmer */}
                <div className="absolute inset-1.5 rounded-[16px] bg-gradient-to-tr from-sky-100/20 via-white/10 to-transparent pointer-events-none" />

                {/* Secure Card Cradle Inset Slot */}
                <div className="w-full h-20 rounded-[12px] bg-slate-900/90 border border-sky-400/40 shadow-inner flex items-center justify-center relative p-1">
                  {/* Glowing Protected Card Slab Inside Cradle */}
                  <div className="w-[85%] h-[92%] rounded-[8px] bg-gradient-to-tr from-amber-300 via-yellow-200 to-amber-400 p-1 shadow-lg flex items-center justify-between border border-white/80">
                    <div className="w-6 h-full rounded bg-rose-500/80 flex items-center justify-center">
                      <span className="text-[7px] font-black text-white transform -rotate-90">
                        SAFE
                      </span>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-amber-950" />
                    </div>
                    <div className="w-1.5 h-full bg-amber-600/40 rounded-full" />
                  </div>
                </div>

                {/* Protective Foam Cushion Strips */}
                <div className="w-full flex items-center justify-between px-1">
                  <div className="w-10 h-2 bg-sky-400/30 rounded-full" />
                  <div className="w-10 h-2 bg-emerald-400/40 rounded-full" />
                </div>
              </div>

              {/* Floating Approved Security Seal Stamp */}
              <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-400 to-teal-500 shadow-[0_8px_16px_rgba(16,185,129,0.35),inset_0_2px_3px_rgba(255,255,255,0.9)] border-2 border-white flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-emerald-950 font-bold" />
              </div>
            </div>

            {/* Bottom Status */}
            <div className="flex items-center justify-between z-10 text-[11px] font-bold text-sky-950">
              <span>Tissue-lined · Sealed Lid</span>
              <span className="text-emerald-700 font-extrabold">100% Secure</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  // Touch Swipe for Mobile & Mouse Drag for Desktop
  const isDragging = useRef(false);
  const startX = useRef(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isHoverOrDrag, setIsHoverOrDrag] = useState(false);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const currentX = e.clientX;
    const diff = currentX - startX.current;
    // Dampen drag effect
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (dragOffset < -50) {
      setSlideIndex(1); // Dragged left -> show cards 2,3,4
    } else if (dragOffset > 50) {
      setSlideIndex(0); // Dragged right -> show cards 1,2,3
    }
    setDragOffset(0);
  };

  const handleMouseLeave = () => {
    if (isDragging.current) {
      isDragging.current = false;
      if (dragOffset < -50) {
        setSlideIndex(1);
      } else if (dragOffset > 50) {
        setSlideIndex(0);
      }
      setDragOffset(0);
    }
    setIsHoverOrDrag(false);
  };

  // Touch Swipe for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) {
      setSlideIndex(1); // Swipe left -> next
    } else if (diff < -40) {
      setSlideIndex(0); // Swipe right -> prev
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative w-full pt-14 pb-8 sm:pt-20 sm:pb-12 px-4 sm:px-8 lg:px-14 select-none overflow-hidden"
    >
      {/* Background Soft Glow Orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/2 -left-20 w-96 h-96 rounded-full bg-gradient-to-tr from-emerald-100/50 to-sky-100/40 blur-3xl" />
        <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-gradient-to-tl from-amber-100/60 to-rose-100/40 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col">
        {/* =====================================================================
            TOP HEADER ROW: Eyebrow + Big Headline (Left) & Slide Arrows (Right)
           ===================================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="flex flex-col items-start">
            {/* Eyebrow Label */}
            <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#b45309] mb-2 drop-shadow-sm">
              WHY THE CARD SURGEON
            </span>

            {/* Headline - Single Line */}
            <h2 className="hero-chunky-headline text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-black uppercase tracking-tight text-[#172b43] leading-none whitespace-nowrap">
              PROFESSIONAL CARE FOR EVERY CARD.
            </h2>
          </div>

          {/* Top-Right: Slide Arrow Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Slide Arrows Pill Controller */}
            <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-white/80 shadow-[inset_0_2px_4px_rgba(255,255,255,0.9),0_6px_14px_rgba(120,160,200,0.18)] border border-white">
              <button
                type="button"
                onClick={() => setSlideIndex(0)}
                aria-label="Previous Cards"
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                  slideIndex === 0
                    ? "bg-[#ffc700] text-[#3d2400] shadow-[inset_0_2px_3px_#fff,0_4px_8px_rgba(235,160,10,0.3)] scale-105"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.8]" />
              </button>
              <button
                type="button"
                onClick={() => setSlideIndex(1)}
                aria-label="Next Cards"
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                  slideIndex === 1
                    ? "bg-[#ffc700] text-[#3d2400] shadow-[inset_0_2px_3px_#fff,0_4px_8px_rgba(235,160,10,0.3)] scale-105"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <ChevronRight className="w-5 h-5 stroke-[2.8]" />
              </button>
            </div>
          </div>
        </div>

        {/* =====================================================================
            THE SLIDING CARDS TRACK (Smooth Slide: 1, 2, 3 -> 2, 3, 4 + Mouse Drag)
           ===================================================================== */}
        <div
          className="relative w-full overflow-hidden py-6 -my-6 px-3 -mx-3 cursor-grab active:cursor-grabbing select-none"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {/* Smooth Sliding Flex Track (Moves by exactly 1 card + gap width on index change + drag offset) */}
          <div
            className={`flex gap-6 lg:gap-7 ${
              dragOffset === 0
                ? "transition-transform duration-600 ease-[cubic-bezier(0.25,1,0.5,1)]"
                : "transition-none"
            }`}
            style={{
              transform: `translateX(calc(-${slideIndex} * (calc((100% - 2 * 1.75rem) / 3) + 1.75rem) + ${dragOffset}px))`,
            }}
          >
            {features.map((item) => (
              <div
                key={item.num}
                className="w-full sm:w-[calc(50%-0.875rem)] lg:w-[calc((100%-2*1.75rem)/3)] shrink-0 transition-opacity duration-500"
              >
                <div className="bg-white rounded-[26px] sm:rounded-[28px] p-6 sm:p-7 flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.06)] border border-slate-100 group select-none pointer-events-auto">
                  {/* Top Inset Frame (4:3 Ratio) */}
                  <div className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden mb-5 sm:mb-6 bg-slate-100 border border-slate-200/70 shadow-[inset_0_2px_4px_rgba(0,0,0,0.04)] pointer-events-none">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title.replace("\n", " ")}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      item.illustration
                    )}
                  </div>

                  {/* Card Bottom Meta (Title + Number Pill + Desc) */}
                  <div className="flex flex-col pointer-events-none">
                    {/* Title & Number Pill Row */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="hero-chunky-headline text-lg sm:text-xl font-black uppercase tracking-tight text-[#172b43] whitespace-pre-line leading-tight">
                        {item.title}
                      </h3>
                      <div
                        className={`w-9 h-7 sm:w-10 sm:h-8 rounded-full border border-white/90 shadow-[inset_0_2px_4px_rgba(255,255,255,0.9),0_2px_6px_rgba(0,0,0,0.06)] flex items-center justify-center shrink-0 ${
                          item.num === "04"
                            ? "bg-gradient-to-b from-sky-100 to-sky-200 text-sky-800"
                            : "bg-gradient-to-b from-slate-100 to-slate-200 text-slate-700"
                        }`}
                      >
                        <span className="text-xs font-black">{item.num}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-[15px] font-medium text-slate-600 leading-relaxed mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicator Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          <button
            type="button"
            onClick={() => setSlideIndex(0)}
            aria-label="View cards 01 - 03"
            className={`transition-all duration-300 rounded-full ${
              slideIndex === 0
                ? "w-8 h-3 bg-gradient-to-r from-amber-400 to-amber-500 shadow-sm"
                : "w-3 h-3 bg-slate-300 hover:bg-slate-400"
            }`}
          />
          <button
            type="button"
            onClick={() => setSlideIndex(1)}
            aria-label="View cards 02 - 04"
            className={`transition-all duration-300 rounded-full ${
              slideIndex === 1
                ? "w-8 h-3 bg-gradient-to-r from-amber-400 to-amber-500 shadow-sm"
                : "w-3 h-3 bg-slate-300 hover:bg-slate-400"
            }`}
          />
        </div>

        {/* =====================================================================
            BOTTOM CTA BUTTON WITH BALANCED SPACING
           ===================================================================== */}
        <div className="mt-8 sm:mt-10 mb-2 flex justify-center">
          <Link
            href="/order"
            className="clay-hero-btn-yellow rounded-full px-8 sm:px-12 py-4 sm:py-5 flex items-center gap-2.5 font-black italic uppercase tracking-wider text-[#3d2400] text-sm sm:text-base shadow-xl"
          >
            <span>GET A QUOTE & START AN ORDER</span>
            <ArrowRight className="w-5 h-5 stroke-[2.8]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
