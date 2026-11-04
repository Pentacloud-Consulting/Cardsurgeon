"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, X, ArrowUpRight } from "lucide-react";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
  image?: string;
  badge?: string;
}

export default function Faq() {
  // When activeId is null: all 5 questions are arranged in 1 clean column/grid
  // When activeId is a number: active question expands into the big visual card (left side),
  // and the remaining 4 questions are arranged on the right side in a 2x2 grid (exactly like image 1)
  const [activeId, setActiveId] = useState<number | null>(1); // Default to question 1 open like image 1, can be toggled closed

  const allFaqs: FaqItem[] = [
    {
      id: 1,
      question: "What's the difference between cleaning and restoring?",
      answer:
        "Cleaning is a surface treatment, and results vary by card. Restoration changes the card, and that can affect its grade, value and whether grading companies will accept it. We'll tell you which service fits your card.",
      image: "/FAQ/FAQ 1.jpg",
      badge: "Restoration vs Cleaning",
    },
    {
      id: 2,
      question: "How long does it take?",
      answer:
        "You'll see current turnaround times at checkout. Standard orders take 5-7 business days, with rush options available for urgent submissions.",
      image: "/FAQ/FAQ 2.jpg",
    },
    {
      id: 3,
      question: "How do you ship my cards safely?",
      answer:
        "Each card goes into its protective holder, then into a cut cradle inside a sturdy box lined with tissue. A cover pad goes on top and the lid is sealed.",
      image: "/FAQ/FAQ 3.jpg",
    },
    {
      id: 4,
      question: "How do I send my cards in?",
      answer:
        "Ship your cards to us, or find us in person at national and local card events. Tracking and insurance policies are in our Terms.",
      image: "/FAQ/FAQ 4.jpg",
    },
    {
      id: 5,
      question: "Can you guarantee a 10?",
      answer:
        "No one can, and we won't pretend to. Grading is up to the grading company. Our job is to give your card its best honest shot.",
      image: "/FAQ/FAQ 5.jpg",
    },
  ];

  const activeFaq = allFaqs.find((item) => item.id === activeId);
  const remainingFaqs = allFaqs.filter((item) => item.id !== activeId);

  const handleToggle = (id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="relative w-full pt-8 sm:pt-12 pb-10 sm:pb-14 px-4 sm:px-8 lg:px-14 select-none overflow-hidden">
      {/* Background Soft Glow Orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-gradient-to-tr from-sky-100/50 to-emerald-100/40 blur-3xl" />
        <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-gradient-to-tl from-amber-100/50 to-pink-100/30 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col">
        {/* =========================================================================
            HEADER ROW: 3D Chunky Heading & Subtitle
           ========================================================================= */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <div className="flex flex-col items-start">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight leading-none flex items-center gap-2 flex-wrap">
              <span className="text-[#3b4b61] drop-shadow-sm">Frequently Asked</span>
              <span className="text-[#d89e52] drop-shadow-[0_2px_4px_rgba(216,158,82,0.3)]">
                Questions
              </span>
            </h2>
          </div>

          {/* Top-Right: All Questions Clay Pill Button */}
          <Link
            href="/faq"
            className="self-start sm:self-auto inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-b from-white to-[#f0f4f9] text-[#172b43] font-black text-sm tracking-wide shadow-[0_8px_20px_rgba(80,130,185,0.18),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-3px_5px_rgba(150,180,215,0.3)] border border-white hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            All Questions
            <ArrowUpRight className="w-4 h-4 stroke-[2.5] text-[#d89e52]" />
          </Link>
        </div>

        {/* =========================================================================
            DYNAMIC FAQ LAYOUT:
            - When 1 item is active: Displays exact Image 1 design (Big Left Hero Card + Right 2x2 Grid)
            - When active item is closed: Organizes in 1 clean unified stack
           ========================================================================= */}
        {activeFaq ? (
          /* ACTIVE EXPANDED STATE (Exact Image 1 Design) */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 transition-all duration-500 ease-out">
            {/* -------------------------------------------------------------------
                LEFT BIG HERO FEATURED CARD (Currently Active Question)
               ------------------------------------------------------------------- */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="relative w-full h-[520px] sm:h-[560px] rounded-[36px] sm:rounded-[40px] overflow-hidden bg-gradient-to-b from-[#e5eaef] to-[#d6dfe6] p-4 sm:p-5 flex flex-col justify-between shadow-[0_24px_50px_rgba(40,65,95,0.14),inset_0_3px_6px_rgba(255,255,255,0.95)] border border-white">
                {/* Background 3D Illustration if available */}
                {activeFaq.image && (
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={activeFaq.image}
                      alt={activeFaq.question}
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 700px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-black/20 pointer-events-none" />
                  </div>
                )}

                {/* Top Corner Action: Close / Collapse */}
                <div className="relative z-10 flex items-center justify-end">
                  <button
                    type="button"
                    onClick={() => setActiveId(null)}
                    aria-label="Close answer card"
                    className="w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-700 shadow-md flex items-center justify-center transition-all hover:scale-105 active:scale-95"
                  >
                    <X className="w-5 h-5 stroke-[2.5]" />
                  </button>
                </div>

                {/* Bottom Pill Box: Question + Full Answer (Authentic 3D Claymorphism) */}
                <div className="relative z-10 rounded-[28px] sm:rounded-[36px] bg-gradient-to-b from-[#ffffff]/95 via-[#fbfcfe]/95 to-[#f0f5fa]/95 backdrop-blur-xl p-5 sm:p-7 shadow-[0_24px_50px_rgba(20,40,65,0.2),0_8px_20px_rgba(0,0,0,0.08),inset_0_3px_5px_rgba(255,255,255,1),inset_0_-4px_6px_rgba(180,205,230,0.35)] border border-white">
                  <div className="flex items-start gap-4">
                    {/* Golden 3D Clay Plus / Active Icon */}
                    <button
                      type="button"
                      onClick={() => setActiveId(null)}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-b from-[#f5b358] via-[#e2993b] to-[#c57d23] text-white shadow-[0_8px_16px_rgba(217,145,50,0.35),inset_0_2px_3px_rgba(255,255,255,0.85),inset_0_-2.5px_4px_rgba(150,85,15,0.4)] border border-amber-200/50 flex items-center justify-center shrink-0 mt-0.5 hover:rotate-45 hover:scale-105 active:scale-95 transition-all"
                    >
                      <Plus className="w-5 h-5 stroke-[3] drop-shadow-sm" />
                    </button>

                    <div className="flex-1 flex flex-col">
                      <h3 className="hero-chunky-headline text-lg sm:text-[22px] font-black text-[#172b43] leading-tight mb-2 tracking-tight">
                        {activeFaq.question}
                      </h3>
                      <p className="text-sm sm:text-[15.5px] font-medium text-slate-700 leading-relaxed">
                        {activeFaq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* -------------------------------------------------------------------
                RIGHT SIDE: The Other 4 Questions Arranged in 2x2 Grid (Exact Image 1)
               ------------------------------------------------------------------- */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 h-[520px] sm:h-[560px]">
              {remainingFaqs.map((faq) => {
                const hasImage = !!faq.image;

                return (
                  <div
                    key={faq.id}
                    onClick={() => handleToggle(faq.id)}
                    className={`group relative rounded-[28px] sm:rounded-[32px] p-4 sm:p-5 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden border border-white ${
                      hasImage
                        ? "text-white shadow-[0_14px_30px_rgba(20,30,45,0.16)]"
                        : "bg-gradient-to-b from-[#fbf8f2] to-[#ede4d2] text-[#172b43] shadow-[0_14px_30px_rgba(180,140,80,0.12),inset_0_2px_4px_rgba(255,255,255,0.9)]"
                    }`}
                  >
                    {/* Background Image if available */}
                    {hasImage && (
                      <div className="absolute inset-0 z-0">
                        <Image
                          src={faq.image!}
                          alt={faq.question}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 1024px) 50vw, 300px"
                        />
                        {/* Soft ambient tint to blend with claymorphism */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/15 to-transparent pointer-events-none" />
                      </div>
                    )}

                    {/* Top Row: Golden Plus Button + Expand Arrow */}
                    <div className="relative z-10 flex items-center justify-between mb-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#d99f57] to-[#ba7f35] text-white shadow-[0_4px_10px_rgba(217,159,87,0.4),inset_0_1.5px_2px_rgba(255,255,255,0.8)] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Plus className="w-4 h-4 stroke-[3]" />
                      </div>

                      <div className="w-8 h-8 rounded-full bg-white/85 text-slate-700 shadow-[0_4px_10px_rgba(0,0,0,0.06),inset_0_1.5px_2px_rgba(255,255,255,1)] flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all">
                        <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                      </div>
                    </div>

                    {/* Bottom: Question inside Soft Clay Pill */}
                    <div className="relative z-10 flex flex-col">
                      <div className="px-3.5 py-2.5 rounded-[18px] sm:rounded-[20px] bg-white/90 backdrop-blur-md shadow-[0_8px_20px_rgba(0,0,0,0.12),inset_0_2px_3px_rgba(255,255,255,1),inset_0_-2px_3px_rgba(200,215,230,0.3)] border border-white/80">
                        <h4 className="hero-chunky-headline text-sm sm:text-[15.5px] font-black leading-snug !text-[#172b43]">
                          {faq.question}
                        </h4>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* COLLAPSED 1-ROW VIEW (All 5 Questions in 1 Single Line) */
          <div className="w-full overflow-x-auto pb-4 pt-1 px-1 flex gap-5 no-scrollbar scroll-smooth">
            {allFaqs.map((faq) => {
              const hasImage = !!faq.image;

              return (
                <div
                  key={faq.id}
                  onClick={() => setActiveId(faq.id)}
                  className="group relative w-[240px] sm:w-[270px] lg:w-[calc((100%-4*1.25rem)/5)] shrink-0 min-h-[220px] rounded-[32px] p-4 sm:p-5 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_45px_rgba(80,135,195,0.22)] overflow-hidden border border-white/90 shadow-[0_16px_36px_rgba(80,135,195,0.16),inset_0_3px_5px_rgba(255,255,255,1),inset_0_-3px_6px_rgba(160,195,230,0.2)] bg-gradient-to-b from-[#fbfdff] via-[#f5f8fc] to-[#eaf1f9]"
                >
                  {hasImage && (
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={faq.image!}
                        alt={faq.question}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="270px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/15 to-transparent pointer-events-none" />
                    </div>
                  )}

                  <div className="relative z-10 flex items-center justify-between mb-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#d99f57] to-[#ba7f35] text-white shadow-[0_4px_10px_rgba(217,159,87,0.4),inset_0_1.5px_2px_rgba(255,255,255,0.8)] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Plus className="w-4 h-4 stroke-[3]" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/85 text-slate-700 shadow-[0_4px_10px_rgba(0,0,0,0.06),inset_0_1.5px_2px_rgba(255,255,255,1)] flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all">
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </div>

                  {/* Question inside Clay Pill */}
                  <div className="relative z-10 flex flex-col">
                    <div className="px-3.5 py-2.5 rounded-[18px] sm:rounded-[20px] bg-white/90 backdrop-blur-md shadow-[0_8px_20px_rgba(0,0,0,0.12),inset_0_2px_3px_rgba(255,255,255,1),inset_0_-2px_3px_rgba(200,215,230,0.3)] border border-white/80">
                      <h4 className="hero-chunky-headline text-sm sm:text-[15.5px] font-black leading-snug !text-[#172b43]">
                        {faq.question}
                      </h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
