"use client";

import React from "react";
import { MapPin, Navigation, Clock, ExternalLink } from "lucide-react";

export default function ContactLocation() {
  return (
    <div className="clay-footer-card rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 relative overflow-hidden h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-2xl clay-tile-yellow flex items-center justify-center shrink-0">
            <MapPin className="w-6 h-6 text-amber-600" strokeWidth={2.4} />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>LAB OPEN NOW</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-800">
              The Card Surgeon Lab & Drop-off
            </h3>
          </div>
        </div>

        {/* Real Address & Hours from Footer */}
        <div className="space-y-3.5 text-slate-600 text-sm font-medium">
          <div className="flex items-start gap-2.5">
            <Navigation className="w-4 h-4 text-blue-500 mt-1 shrink-0" />
            <div className="leading-snug">
              <strong className="text-slate-800 block font-bold">
                Card Surgeon Studios:
              </strong>
              <span>TCS, 1860 Barnett Shoals Rd Ste 103</span>
              <br />
              <span>Athens, GA 30605, USA</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5 pt-1">
            <Clock className="w-4 h-4 text-amber-500 mt-1 shrink-0" />
            <div className="leading-snug">
              <strong className="text-slate-800 block font-bold">Lab Hours:</strong>
              <span>Monday – Friday: 9:00 AM – 6:00 PM EST</span>
              <br />
              <span>Saturday: 10:00 AM – 3:00 PM EST (Drop-offs only)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stylized Clay Map Preview Card */}
      <div className="mt-6 relative w-full h-44 rounded-2xl overflow-hidden border border-white/80 shadow-[inset_0_2px_4px_rgba(0,0,0,0.06),0_8px_20px_rgba(80,135,185,0.15)] bg-gradient-to-br from-[#d7ebf8] via-[#e5f4fd] to-[#d8f0ea] p-4 flex flex-col justify-between">
        {/* Subtle Grid Roads Background */}
        <div className="absolute inset-0 opacity-25 pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="flex items-center justify-between z-10">
          <span className="px-3 py-1 rounded-full bg-white/90 text-[11px] font-extrabold text-slate-700 shadow-sm border border-white">
            Athens Card Care Center
          </span>
          <span className="text-xs font-bold text-blue-600 bg-blue-50/90 px-2.5 py-0.5 rounded-full border border-blue-200">
            Georgia Lab
          </span>
        </div>

        {/* Central Pin */}
        <div className="self-center z-10 flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 to-amber-200 p-1 shadow-[0_6px_14px_rgba(217,119,6,0.4)] flex items-center justify-center animate-bounce">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-amber-600 font-black text-xs">
              CS
            </div>
          </div>
          <div className="w-6 h-2 rounded-full bg-slate-800/20 blur-[1px] mt-1" />
        </div>

        <div className="z-10 flex items-center justify-between">
          <span className="text-xs text-slate-600 font-bold">
            Athens, GA 30605
          </span>
          <a
            href="https://maps.google.com/?q=1860+Barnett+Shoals+Rd+Ste+103+Athens+GA+30605"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-black text-blue-600 hover:text-blue-700 bg-white/90 px-3 py-1.5 rounded-full shadow-sm border border-white transition-all hover:scale-105"
          >
            <span>View Map</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
