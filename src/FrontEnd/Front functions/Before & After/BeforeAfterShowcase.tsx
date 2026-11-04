"use client";

import React, { useState } from "react";
import { SlidersHorizontal, Info, ShieldAlert } from "lucide-react";

interface ComparisonCardProps {
  slotNumber: number;
  beforeSrc: string;
  afterSrc: string;
  title: string;
  note: string;
}

function ComparisonCard({ slotNumber, beforeSrc, afterSrc, title, note }: ComparisonCardProps) {
  const [sliderPos, setSliderPos] = useState(50); // percentage 0-100
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isDragging = React.useRef(false);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pct);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDragging.current = false;
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}
  };

  return (
    <div className="bg-gradient-to-b from-white to-[#f4f8fe] rounded-[28px] p-5 sm:p-6 border-2 border-white shadow-[0_16px_32px_rgba(85,130,185,0.14),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-3px_6px_rgba(160,190,225,0.28)] flex flex-col justify-between space-y-4">
      {/* Top Slot Header */}
      <div className="flex items-center justify-between text-xs font-black tracking-wider uppercase">
        <span className="bg-gradient-to-r from-rose-500 to-red-600 text-white px-3 py-1 rounded-full shadow-xs text-[11px]">
          BEFORE
        </span>
        <span className="text-slate-400 font-bold font-mono">SLOT #{slotNumber}</span>
        <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-3 py-1 rounded-full shadow-xs text-[11px]">
          AFTER
        </span>
      </div>

      {/* Interactive Comparison Window */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="relative w-full aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden border-2 border-slate-200/90 shadow-inner select-none cursor-ew-resize group bg-slate-900 touch-none"
      >
        {/* AFTER Image (Full background) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <img
            src={afterSrc}
            alt={`After restoration slot #${slotNumber}`}
            className="w-full h-full object-cover select-none pointer-events-none"
            draggable={false}
          />
          {/* After Tag */}
          <div className="absolute top-3 right-3 bg-emerald-600/90 backdrop-blur-xs text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-md shadow-md tracking-wider">
            AFTER
          </div>
        </div>

        {/* BEFORE Image (Directly overlaid on top at 100% size, clipped by sliderPos) */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none select-none"
          style={{
            clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
          }}
        >
          <img
            src={beforeSrc}
            alt={`Before restoration slot #${slotNumber}`}
            className="w-full h-full object-cover select-none pointer-events-none"
            draggable={false}
          />
          {/* Before Tag */}
          <div className="absolute top-3 left-3 bg-rose-600/90 backdrop-blur-xs text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-md shadow-md tracking-wider">
            BEFORE
          </div>
        </div>

        {/* Divider Line & Slider Thumb */}
        <div
          className="absolute inset-y-0 w-0.5 bg-amber-400 pointer-events-none z-10 shadow-[0_0_10px_rgba(251,191,36,0.9)]"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 text-slate-950 flex items-center justify-center font-black text-xs shadow-xl border-2 border-white select-none">
            ↔
          </div>
        </div>

        {/* Accessible Range Slider for Screen Readers & Keyboard Nav */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPos}
          onChange={(e) => setSliderPos(Number(e.target.value))}
          className="sr-only"
          aria-label={`Slide to compare before and after for slot ${slotNumber}`}
        />

        {/* Slide to reveal pill */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-amber-400/95 text-slate-950 text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-lg border border-white pointer-events-none tracking-wider">
          SLIDE TO REVEAL
        </div>
      </div>

      {/* Description below card */}
      <div className="pt-2 border-t border-slate-200/60 text-xs text-slate-700 space-y-1">
        <div className="font-black text-slate-900">{title}</div>
        <p className="text-[11px] leading-relaxed text-slate-500 font-medium">
          {note}
        </p>
      </div>
    </div>
  );
}

export default function BeforeAfterShowcase() {
  const showcaseSlots = [
    {
      slotNumber: 1,
      beforeSrc: "/before after/Before 1.jpg",
      afterSrc: "/before after/After 1.jpg",
      title: "Photo slot: real before & after",
      note: "We only post cards we actually restored, with the owner's OK. First pairs coming from the bench.",
    },
    {
      slotNumber: 2,
      beforeSrc: "/before after/Before 2.jpg",
      afterSrc: "/before after/After 2.jpg",
      title: "Photo slot: real before & after",
      note: "Surface impression and crease reduction case. Verified genuine collectible treatment.",
    },
    {
      slotNumber: 3,
      beforeSrc: "/before after/Before 3.jpg",
      afterSrc: "/before after/After 3.jpg",
      title: "Photo slot: real before & after",
      note: "Corner lift alignment & micro-polish treatment. Card remains unaltered and strictly centered.",
    },
  ];

  return (
    <section id="showcase" className="scroll-mt-24 py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 3D Pearl Clay Showcase Card */}
        <div className="bg-gradient-to-b from-[#ffffff] via-[#f8fbfe] to-[#edf4fc] rounded-[36px] sm:rounded-[44px] p-6 sm:p-10 lg:p-12 border-2 border-white shadow-[0_24px_50px_-10px_rgba(75,130,185,0.22),0_8px_20px_rgba(90,145,195,0.1),inset_0_4px_6px_rgba(255,255,255,1),inset_0_-5px_10px_rgba(160,195,230,0.35)] space-y-10 relative overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-emerald-200/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-amber-200/20 blur-3xl pointer-events-none" />

          {/* 3D Header Banner */}
          <div className="text-center space-y-3 relative z-10">
            <div className="inline-block bg-gradient-to-r from-red-600 via-rose-600 to-red-600 text-white font-black italic uppercase text-2xl sm:text-4xl px-8 sm:px-10 py-3 sm:py-3.5 rounded-full shadow-[0_12px_24px_-4px_rgba(225,29,72,0.4),inset_0_3px_5px_rgba(255,255,255,0.7),inset_0_-3px_5px_rgba(0,0,0,0.3)] border-2 border-white tracking-wide">
              BEFORE &amp; AFTER
            </div>
            <p className="text-slate-600 font-bold text-xs sm:text-sm tracking-wide pt-1">
              Drag a slider to see how the reveal works. Real photos go in these slots.
            </p>
          </div>

          {/* 3 Showcase Slots */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {showcaseSlots.map((slot) => (
              <ComparisonCard
                key={slot.slotNumber}
                slotNumber={slot.slotNumber}
                beforeSrc={slot.beforeSrc}
                afterSrc={slot.afterSrc}
                title={slot.title}
                note={slot.note}
              />
            ))}
          </div>

          {/* Bottom Disclaimer Banner */}
          <div className="relative z-10 max-w-3xl mx-auto text-center pt-2">
            <p className="text-slate-700 text-xs sm:text-[13px] leading-relaxed font-medium bg-white/80 backdrop-blur-xs p-4 sm:p-5 rounded-2xl border border-white shadow-[0_4px_14px_rgba(90,140,185,0.08),inset_0_1px_2px_rgba(255,255,255,1)]">
              These slots are empty on purpose: we only post before &amp; after photos of cards we actually restored. Each card is different, and results vary. Restoration does not guarantee any grade, and grading companies may detect restoration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
