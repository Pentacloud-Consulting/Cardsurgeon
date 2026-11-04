"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function OurServices() {
  return (
    <section id="services" className="relative w-full pt-12 sm:pt-16 pb-14 sm:pb-16 px-4 sm:px-8 lg:px-14 overflow-hidden select-none">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/3 -left-20 w-96 h-96 rounded-full bg-gradient-to-tr from-sky-100/50 via-emerald-100/40 to-transparent blur-3xl" />
        <div className="absolute top-1/2 -right-20 w-96 h-96 rounded-full bg-gradient-to-tl from-purple-100/40 via-pink-100/30 to-amber-100/30 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col">
        {/* =========================================================================
            HEADER ROW: Title + Subtitle (Left) & How It Works Clay Button (Right)
           ========================================================================= */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 sm:mb-12">
          <div className="flex flex-col items-start">
            <h2 className="hero-chunky-headline text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight text-[#172b43] leading-tight">
              Our Services
            </h2>
            <p className="text-base sm:text-lg font-medium text-slate-600 mt-1">
              Two ways to work with the Card Surgeon.
            </p>
          </div>

          {/* Top-Right: How It Works Clay Pill Button */}
          <Link
            href="/how-it-works"
            className="self-start sm:self-auto px-7 py-3 rounded-full bg-gradient-to-b from-white to-[#f0f4f9] text-[#172b43] font-black text-sm tracking-wide shadow-[0_8px_20px_rgba(80,130,185,0.18),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-3px_5px_rgba(150,180,215,0.3)] border border-white hover:scale-105 active:scale-95 transition-all"
          >
            How It Works
          </Link>
        </div>

        {/* =========================================================================
            THE 2 SIDE-BY-SIDE CLAY SERVICE CARDS
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* -----------------------------------------------------------------------
              SERVICE 1: Restoration
             ----------------------------------------------------------------------- */}
          <Link
            href="/restoration"
            className="group rounded-[36px] sm:rounded-[42px] bg-gradient-to-b from-white via-[#fcfdff] to-[#f4f8fe] p-5 sm:p-6 shadow-[0_24px_50px_rgba(80,135,195,0.16),0_8px_20px_rgba(100,150,200,0.08),inset_0_3px_6px_rgba(255,255,255,1),inset_0_-4px_8px_rgba(160,195,230,0.25)] border border-white flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_rgba(80,135,195,0.22)] cursor-pointer"
          >
            {/* Inner Inset Photograph Frame */}
            <div className="relative w-full h-[230px] sm:h-[260px] rounded-[26px] sm:rounded-[30px] overflow-hidden shadow-inner border border-white/80 bg-slate-100 mb-6">
              <Image
                src="/Service/Service 1.jpg"
                alt="Card Surgeon Restoration Process"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 580px"
              />
            </div>

            {/* Card Content & 3D Badge */}
            <div className="relative flex items-end justify-between gap-4 pt-1">
              <div className="flex-1 flex flex-col">
                <h3 className="hero-chunky-headline text-2xl sm:text-[28px] font-black tracking-tight text-[#172b43] mb-2 leading-tight">
                  Restoration
                </h3>
                <p className="text-sm sm:text-[14.5px] font-medium text-slate-600 leading-relaxed max-w-md">
                  We assess the damage on each card, then repair it carefully, to the best of our honest ability. Results vary, and restoration changes the card.
                </p>
                <div className="mt-3.5 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-700 group-hover:text-emerald-900 group-hover:translate-x-1 transition-all">
                  <span>Explore Restoration service</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* 3D Band-aid Badge */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 transform group-hover:rotate-6 transition-transform duration-300 flex items-center justify-center">
                <Image
                  src="/cards/bandaid_badge.png"
                  alt="Restoration Band-aid Badge"
                  width={76}
                  height={72}
                  className="object-contain drop-shadow-md"
                />
              </div>
            </div>
          </Link>

          {/* -----------------------------------------------------------------------
              SERVICE 2: Prep for submission
             ----------------------------------------------------------------------- */}
          <Link
            href="/pre-grade-prep"
            className="group rounded-[36px] sm:rounded-[42px] bg-gradient-to-b from-white via-[#fcfdff] to-[#f4f8fe] p-5 sm:p-6 shadow-[0_24px_50px_rgba(80,135,195,0.16),0_8px_20px_rgba(100,150,200,0.08),inset_0_3px_6px_rgba(255,255,255,1),inset_0_-4px_8px_rgba(160,195,230,0.25)] border border-white flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_rgba(80,135,195,0.22)] cursor-pointer"
          >
            {/* Inner Inset Photograph Frame */}
            <div className="relative w-full h-[230px] sm:h-[260px] rounded-[26px] sm:rounded-[30px] overflow-hidden shadow-inner border border-white/80 bg-slate-100 mb-6">
              <Image
                src="/Service/Service 2.jpg"
                alt="Card Surgeon Prep for Submission"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 580px"
              />
            </div>

            {/* Card Content & 3D Mailbox Badge */}
            <div className="relative flex items-end justify-between gap-4 pt-1">
              <div className="flex-1 flex flex-col">
                <h3 className="hero-chunky-headline text-2xl sm:text-[28px] font-black tracking-tight text-[#172b43] mb-2 leading-tight">
                  Prep for submission
                </h3>
                <p className="text-sm sm:text-[14.5px] font-medium text-slate-600 leading-relaxed max-w-md">
                  Just want your card dusted and packaged up for grading? We do that for you and ship it back. All you have to do is take it from our box, put it in your own submission, and send it off for grading.
                </p>
                <div className="mt-3.5 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-700 group-hover:text-amber-900 group-hover:translate-x-1 transition-all">
                  <span>Explore Pre-Grade Prep</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* 3D Mailbox Badge */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 transform group-hover:-rotate-6 transition-transform duration-300 flex items-center justify-center">
                <Image
                  src="/cards/mailbox_badge.png"
                  alt="Prep for Submission Mailbox Badge"
                  width={76}
                  height={68}
                  className="object-contain drop-shadow-md"
                />
              </div>
            </div>
          </Link>
        </div>

        {/* =========================================================================
            BOTTOM CLAY CTA BUTTON (Yellow Clay Pill matching website signature theme)
           ========================================================================= */}
        <div className="mt-8 sm:mt-10 mb-4 flex justify-center">
          <Link
            href="/order"
            className="rounded-full px-10 sm:px-14 py-4 sm:py-5 flex items-center gap-2.5 font-black uppercase tracking-wider text-[#3d2400] text-sm sm:text-base bg-gradient-to-b from-[#ffc700] via-[#ffb700] to-[#f6a600] shadow-[0_14px_30px_rgba(220,145,10,0.36),0_6px_14px_rgba(200,130,10,0.22),inset_0_3.5px_5px_rgba(255,255,255,0.95),inset_0_-4px_6px_rgba(170,95,5,0.45)] border border-amber-200/80 hover:scale-105 active:scale-95 transition-all"
          >
            <span>Get a quote & start an order</span>
            <ArrowRight className="w-5 h-5 stroke-[2.8]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
