"use client";

import React from "react";
import {
  Wrench,
  Layers,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";
import { ServiceType } from "./types";

interface Step1ServiceProps {
  selectedService: ServiceType;
  onSelectService: (service: ServiceType) => void;
  onContinue: () => void;
}

const excludedItems = [
  "Whitening fixes or paint touch-ups",
  "Coloration, re-inking, or pigment altering",
  "Polishing Lugia 1st Edition holo cards",
  "Severe creases (paper core break)",
  "Creases with whitening inside",
  "Creases that go 100% through the card",
  "Trimming, cutting, or shaving edges",
  "Counterfeit, forged, or altered cards",
];

export default function Step1Service({
  selectedService,
  onSelectService,
  onContinue,
}: Step1ServiceProps) {
  return (
    <div className="space-y-8">
      {/* Red NOT INCLUDED Banner */}
      <div className="bg-gradient-to-b from-[#fff7f7] via-[#ffecee] to-[#ffe2e5] rounded-[30px] p-6 sm:p-7 border-2 border-white shadow-[0_20px_40px_-8px_rgba(244,63,94,0.22),0_6px_16px_rgba(225,29,72,0.12),inset_0_3px_5px_rgba(255,255,255,0.98),inset_0_-4px_8px_rgba(244,63,94,0.18)] space-y-4">
        <div className="flex items-center gap-2.5">
          <div className="bg-rose-600 text-white p-2 rounded-xl flex items-center justify-center shadow-sm">
            <ShieldAlert className="w-5 h-5 stroke-[2.8]" />
          </div>
          <span className="bg-rose-600 text-white text-xs font-black px-2.5 py-1 rounded-md tracking-wider uppercase">
            NOT INCLUDED
          </span>
          <h3 className="font-black text-rose-950 text-base sm:text-lg">
            We DO NOT perform the following work:
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-rose-950 font-medium pt-1">
          {excludedItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 bg-white/80 backdrop-blur-xs rounded-xl p-2.5 border border-white/90 shadow-[0_2px_6px_rgba(244,63,94,0.06),inset_0_1px_2px_rgba(255,255,255,0.9)]">
              <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="pt-2 border-t border-rose-200/70 flex items-start gap-2 text-xs text-rose-900 leading-relaxed font-semibold">
          <AlertTriangle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
          <span>
            Cards sent for work on our Not Included list are subject to return on arrival. We may send them back without doing any work, and shipping is non-refundable. See Terms §8A.
          </span>
        </div>
      </div>

      {/* Select A Service Header */}
      <div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
          SELECT A SERVICE
        </h2>
        <p className="text-slate-600 text-sm">
          Select whether your cards need physical restoration (creases, dents, scratches) or pre-grade prep cleaning & holder packaging.
        </p>
      </div>

      {/* Service Selection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card Restoration Option */}
        <div
          onClick={() => onSelectService("restoration")}
          className={`relative rounded-[36px] p-7 sm:p-8 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
            selectedService === "restoration"
              ? "bg-gradient-to-b from-[#ffffff] via-[#f0fbf6] to-[#ddf7eb] border-3 border-emerald-500 shadow-[0_24px_48px_-8px_rgba(16,185,129,0.32),0_8px_18px_rgba(5,150,105,0.18),inset_0_4px_6px_rgba(255,255,255,1),inset_0_-5px_10px_rgba(16,185,129,0.22)] scale-[1.02]"
              : "bg-gradient-to-b from-[#ffffff] via-[#f8fbfe] to-[#edf4fc] border-2 border-white shadow-[0_20px_40px_-10px_rgba(85,130,185,0.22),0_6px_14px_rgba(90,140,190,0.1),inset_0_3px_6px_rgba(255,255,255,1),inset_0_-4px_8px_rgba(160,190,225,0.35)] hover:scale-[1.01]"
          }`}
        >
          {selectedService === "restoration" && (
            <div className="absolute top-5 right-5 w-7 h-7 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-[0_4px_10px_rgba(5,150,105,0.35),inset_0_1.5px_2px_rgba(255,255,255,0.8)] border-2 border-white">
              <CheckCircle2 className="w-4 h-4 stroke-[3]" />
            </div>
          )}

          <div>
            {/* 3D Emerald Clay Tile */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-700 text-white flex items-center justify-center shadow-[0_10px_20px_-4px_rgba(16,185,129,0.4),inset_0_2px_4px_rgba(255,255,255,0.8),inset_0_-3px_5px_rgba(0,0,0,0.3)] border border-white/80 mb-4">
              <Wrench className="w-7 h-7 stroke-[2.4]" />
            </div>

            {/* 3D Puffy Badge */}
            <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-900 border border-emerald-300/80 shadow-[0_2px_6px_rgba(5,150,105,0.1),inset_0_1px_2px_rgba(255,255,255,1)] text-[11px] font-black uppercase tracking-wider mb-2">
              Most Popular
            </div>

            <h3 className="text-2xl font-black text-slate-950 mb-2 tracking-tight">
              Card Restoration
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
              Light creases, dents, edge lifts, corner lifts, surface scratches, hazes, and impressions. Includes pre-grade opinion & fresh semi-rigid holder.
            </p>

            {/* 3D Sunken Clay Tray for Tiers */}
            <div className="space-y-2.5 bg-gradient-to-b from-[#eaf2f8] to-[#dfeaf5] rounded-[24px] p-4.5 border border-white/90 shadow-[inset_0_3px_6px_rgba(0,0,0,0.06),0_1px_2px_rgba(255,255,255,1)] text-xs">
              <div className="font-black text-slate-800 mb-1 flex items-center justify-between">
                <span>Available Tiers:</span>
                <span className="text-[11px] text-emerald-800 font-bold bg-white/80 px-2 py-0.5 rounded-md border border-white shadow-2xs">From $50 / card</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-slate-700">
                <span className="bg-white rounded-xl p-2.5 border border-white shadow-[0_3px_8px_rgba(100,150,195,0.1),inset_0_1px_2px_rgba(255,255,255,1)] font-medium">
                  • Economy: <strong className="text-slate-950">$50</strong> (30d)
                </span>
                <span className="bg-white rounded-xl p-2.5 border border-white shadow-[0_3px_8px_rgba(100,150,195,0.1),inset_0_1px_2px_rgba(255,255,255,1)] font-medium">
                  • Standard: <strong className="text-slate-950">$75</strong> (21-30d)
                </span>
                <span className="bg-white rounded-xl p-2.5 border border-white shadow-[0_3px_8px_rgba(100,150,195,0.1),inset_0_1px_2px_rgba(255,255,255,1)] font-medium">
                  • Express: <strong className="text-slate-950">$110</strong> (10-14d)
                </span>
                <span className="bg-white rounded-xl p-2.5 border border-white shadow-[0_3px_8px_rgba(100,150,195,0.1),inset_0_1px_2px_rgba(255,255,255,1)] font-medium">
                  • Light Speed: <strong className="text-slate-950">$175</strong> (5-8d)
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500">Turnaround: 5–30 Days</span>
            <span className="text-xs font-black text-emerald-700 flex items-center gap-1">
              Choose Restoration →
            </span>
          </div>
        </div>

        {/* Pre-Grade Prep Option */}
        <div
          onClick={() => onSelectService("pregrade")}
          className={`relative rounded-[36px] p-7 sm:p-8 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
            selectedService === "pregrade"
              ? "bg-gradient-to-b from-[#ffffff] via-[#fefbf2] to-[#fef3da] border-3 border-amber-500 shadow-[0_24px_48px_-8px_rgba(245,158,11,0.32),0_8px_18px_rgba(217,119,6,0.18),inset_0_4px_6px_rgba(255,255,255,1),inset_0_-5px_10px_rgba(217,119,6,0.22)] scale-[1.02]"
              : "bg-gradient-to-b from-[#ffffff] via-[#f8fbfe] to-[#edf4fc] border-2 border-white shadow-[0_20px_40px_-10px_rgba(85,130,185,0.22),0_6px_14px_rgba(90,140,190,0.1),inset_0_3px_6px_rgba(255,255,255,1),inset_0_-4px_8px_rgba(160,190,225,0.35)] hover:scale-[1.01]"
          }`}
        >
          {selectedService === "pregrade" && (
            <div className="absolute top-5 right-5 w-7 h-7 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-600 text-white flex items-center justify-center shadow-[0_4px_10px_rgba(217,119,6,0.35),inset_0_1.5px_2px_rgba(255,255,255,0.8)] border-2 border-white">
              <CheckCircle2 className="w-4 h-4 stroke-[3]" />
            </div>
          )}

          <div>
            {/* 3D Gold Clay Tile */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-yellow-600 text-white flex items-center justify-center shadow-[0_10px_20px_-4px_rgba(245,158,11,0.4),inset_0_2px_4px_rgba(255,255,255,0.8),inset_0_-3px_5px_rgba(0,0,0,0.3)] border border-white/80 mb-4">
              <Layers className="w-7 h-7 stroke-[2.4]" />
            </div>

            {/* 3D Puffy Badge */}
            <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-900 border border-amber-300/80 shadow-[0_2px_6px_rgba(217,119,6,0.1),inset_0_1px_2px_rgba(255,255,255,1)] text-[11px] font-black uppercase tracking-wider mb-2">
              Clean &amp; Prep Only
            </div>

            <h3 className="text-2xl font-black text-slate-950 mb-2 tracking-tight">
              Pre-Grade Prep
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
              Professional cleaning, micro-polish, penny sleeve, and semi-rigid holder, with a condition pre-grade estimate included at no extra charge. No crease or dent work.
            </p>

            {/* 3D Sunken Clay Tray for Tiers */}
            <div className="space-y-2.5 bg-gradient-to-b from-[#eaf2f8] to-[#dfeaf5] rounded-[24px] p-4.5 border border-white/90 shadow-[inset_0_3px_6px_rgba(0,0,0,0.06),0_1px_2px_rgba(255,255,255,1)] text-xs">
              <div className="font-black text-slate-800 mb-1 flex items-center justify-between">
                <span>Available Tiers:</span>
                <span className="text-[11px] text-amber-900 font-bold bg-white/80 px-2 py-0.5 rounded-md border border-white shadow-2xs">From $25 / card</span>
              </div>
              <div className="space-y-2 text-slate-700">
                <div className="bg-white rounded-xl p-2.5 border border-white shadow-[0_3px_8px_rgba(100,150,195,0.1),inset_0_1px_2px_rgba(255,255,255,1)] font-medium flex justify-between">
                  <span>• Standard (&lt;$1,500 DV):</span>
                  <strong className="text-slate-950">$25/card ($20 for 20+)</strong>
                </div>
                <div className="bg-white rounded-xl p-2.5 border border-white shadow-[0_3px_8px_rgba(100,150,195,0.1),inset_0_1px_2px_rgba(255,255,255,1)] font-medium flex justify-between">
                  <span>• High Value ($1,500+ DV):</span>
                  <strong className="text-slate-950">1.5% of declared value</strong>
                </div>
                <div className="bg-white rounded-xl p-2.5 border border-white shadow-[0_3px_8px_rgba(100,150,195,0.1),inset_0_1px_2px_rgba(255,255,255,1)] font-medium flex justify-between">
                  <span>• Same Day Drop-off:</span>
                  <strong className="text-slate-950">$30/card (Athens, GA)</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500">Turnaround: Same Day – 7 Days</span>
            <span className="text-xs font-black text-amber-700 flex items-center gap-1">
              Choose Pre-Grade →
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="pt-4 flex items-center justify-between">
        <button
          type="button"
          disabled
          className="px-6 py-3 rounded-full text-slate-400 font-bold text-sm bg-slate-200/50 cursor-not-allowed border border-slate-200/70"
        >
          Back
        </button>

        <button
          type="button"
          onClick={onContinue}
          className="clay-btn-gold px-8 py-3.5 rounded-full font-black text-amber-950 text-sm tracking-wide flex items-center gap-2 cursor-pointer shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
        >
          <span>CONTINUE TO CARDS</span>
          <ArrowRight className="w-4 h-4 stroke-[3]" />
        </button>
      </div>
    </div>
  );
}
