"use client";

import React, { useRef } from "react";
import {
  CheckCircle2,
  XCircle,
  Plus,
  Trash2,
  Upload,
  ArrowRight,
  ArrowLeft,
  FileImage,
  AlertCircle,
} from "lucide-react";
import { CardItem, ServiceType, RestorationTierId, PregradeTierId } from "./types";

interface Step2CardsProps {
  serviceType: ServiceType;
  cards: CardItem[];
  termsAcknowledged: boolean;
  onToggleTerms: (checked: boolean) => void;
  onUpdateCard: (index: number, updated: Partial<CardItem>) => void;
  onAddCard: () => void;
  onRemoveCard: (index: number) => void;
  onBack: () => void;
  onContinue: () => void;
}

const restorationTiers = [
  { id: "economy" as RestorationTierId, name: "Economy", price: "$50", time: "30 business days", desc: "Best value for lower urgency cards" },
  { id: "standard" as RestorationTierId, name: "Standard", price: "$75", time: "21–30 business days", desc: "Our most popular balanced turnaround" },
  { id: "express" as RestorationTierId, name: "Express", price: "$110", time: "10–14 business days", desc: "Expedited queue handling" },
  { id: "high_value" as RestorationTierId, name: "High Value", price: "3% DV", time: "5–10 business days", desc: "Cards valued up to $14,999" },
  { id: "super_saiyan" as RestorationTierId, name: "Super Saiyan", price: "5% DV", time: "5 business days", desc: "Elite priority for cards $15,000+" },
  { id: "light_speed" as RestorationTierId, name: "Light Speed", price: "$175", time: "5–8 business days", desc: "Fastest standard turn available" },
];

const pregradeTiers = [
  { id: "standard_pregrade" as PregradeTierId, name: "Standard Pre-Grade", price: "$25", time: "5–7 business days", desc: "Cleaning, micro-polish, holder & grade estimate ($20 for 20+ cards)" },
  { id: "high_value_pregrade" as PregradeTierId, name: "High Value Pre-Grade", price: "1.5% DV", time: "3–5 business days", desc: "For cards with declared value of $1,500+" },
  { id: "same_day_pregrade" as PregradeTierId, name: "Same Day Pre-Grade", price: "$30", time: "Same Day", desc: "Drop-off in person at TCS Athens, GA office" },
];

export default function Step2Cards({
  serviceType,
  cards,
  termsAcknowledged,
  onToggleTerms,
  onUpdateCard,
  onAddCard,
  onRemoveCard,
  onBack,
  onContinue,
}: Step2CardsProps) {
  const fileInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

  const handleSimulatedUpload = (cardIdx: number, photoField: "frontPhoto" | "backPhoto" | "detailPhoto", e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fakeUrl = URL.createObjectURL(file);
      onUpdateCard(cardIdx, { [photoField]: fakeUrl });
    }
  };

  const isFormValid = termsAcknowledged && cards.length > 0 && cards.every(c => c.cardName.trim().length > 0);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
          CARDS IN YOUR ORDER
        </h2>
        <p className="text-slate-600 text-sm">
          Add each card you want restored or prepped. Include clear photos of the front and back so our team can verify its condition.
        </p>
      </div>

      {/* WE DO / WE DON'T Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {/* WE DO Card */}
        <div className="bg-gradient-to-b from-[#f2fcf7] via-[#e8f8f1] to-[#daf4e8] rounded-[30px] sm:rounded-[34px] p-6 sm:p-7 border-2 border-white shadow-[0_20px_40px_-8px_rgba(16,185,129,0.22),0_6px_16px_rgba(5,150,105,0.12),inset_0_3px_5px_rgba(255,255,255,0.98),inset_0_-4px_8px_rgba(16,185,129,0.2)] space-y-4">
          <div className="flex items-center gap-2.5 text-emerald-900 font-black text-sm uppercase tracking-wide">
            <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-sm">
              <CheckCircle2 className="w-5 h-5 stroke-[2.8]" />
            </div>
            <span className="text-base font-black">WE DO (INCLUDED)</span>
          </div>
          <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-950 font-medium">
            <li className="flex items-center gap-2.5 bg-white/80 backdrop-blur-xs rounded-xl p-2.5 border border-white/90 shadow-[0_2px_6px_rgba(5,150,105,0.06),inset_0_1px_2px_rgba(255,255,255,0.9)]">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0">✓</span>
              <span>Light creases, wrinkles & indentations</span>
            </li>
            <li className="flex items-center gap-2.5 bg-white/80 backdrop-blur-xs rounded-xl p-2.5 border border-white/90 shadow-[0_2px_6px_rgba(5,150,105,0.06),inset_0_1px_2px_rgba(255,255,255,0.9)]">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0">✓</span>
              <span>Edge lifts & corner lifts</span>
            </li>
            <li className="flex items-center gap-2.5 bg-white/80 backdrop-blur-xs rounded-xl p-2.5 border border-white/90 shadow-[0_2px_6px_rgba(5,150,105,0.06),inset_0_1px_2px_rgba(255,255,255,0.9)]">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0">✓</span>
              <span>Surface scratches & cloudiness/haze</span>
            </li>
            <li className="flex items-center gap-2.5 bg-white/80 backdrop-blur-xs rounded-xl p-2.5 border border-white/90 shadow-[0_2px_6px_rgba(5,150,105,0.06),inset_0_1px_2px_rgba(255,255,255,0.9)]">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0">✓</span>
              <span>Professional micro-cleaning & polish</span>
            </li>
            <li className="flex items-center gap-2.5 bg-white/80 backdrop-blur-xs rounded-xl p-2.5 border border-white/90 shadow-[0_2px_6px_rgba(5,150,105,0.06),inset_0_1px_2px_rgba(255,255,255,0.9)]">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0">✓</span>
              <span>Condition pre-grade opinion & semi-rigid holder</span>
            </li>
          </ul>
        </div>

        {/* WE DON'T Card */}
        <div className="bg-gradient-to-b from-[#fff7f7] via-[#ffecee] to-[#ffe2e5] rounded-[30px] sm:rounded-[34px] p-6 sm:p-7 border-2 border-white shadow-[0_20px_40px_-8px_rgba(244,63,94,0.22),0_6px_16px_rgba(225,29,72,0.12),inset_0_3px_5px_rgba(255,255,255,0.98),inset_0_-4px_8px_rgba(244,63,94,0.18)] space-y-4">
          <div className="flex items-center gap-2.5 text-rose-900 font-black text-sm uppercase tracking-wide">
            <div className="w-8 h-8 rounded-xl bg-rose-600 text-white flex items-center justify-center shadow-sm">
              <XCircle className="w-5 h-5 stroke-[2.8]" />
            </div>
            <span className="text-base font-black">WE DON&apos;T (NOT INCLUDED)</span>
          </div>
          <ul className="space-y-2.5 text-xs sm:text-sm text-rose-950 font-medium">
            <li className="flex items-center gap-2.5 bg-white/80 backdrop-blur-xs rounded-xl p-2.5 border border-white/90 shadow-[0_2px_6px_rgba(244,63,94,0.06),inset_0_1px_2px_rgba(255,255,255,0.9)]">
              <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-xs shrink-0">✗</span>
              <span>Whitening repair, paint or coloration</span>
            </li>
            <li className="flex items-center gap-2.5 bg-white/80 backdrop-blur-xs rounded-xl p-2.5 border border-white/90 shadow-[0_2px_6px_rgba(244,63,94,0.06),inset_0_1px_2px_rgba(255,255,255,0.9)]">
              <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-xs shrink-0">✗</span>
              <span>Polishing Lugia 1st Edition holos</span>
            </li>
            <li className="flex items-center gap-2.5 bg-white/80 backdrop-blur-xs rounded-xl p-2.5 border border-white/90 shadow-[0_2px_6px_rgba(244,63,94,0.06),inset_0_1px_2px_rgba(255,255,255,0.9)]">
              <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-xs shrink-0">✗</span>
              <span>Creases through 100% of card or broken paper core</span>
            </li>
            <li className="flex items-center gap-2.5 bg-white/80 backdrop-blur-xs rounded-xl p-2.5 border border-white/90 shadow-[0_2px_6px_rgba(244,63,94,0.06),inset_0_1px_2px_rgba(255,255,255,0.9)]">
              <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-xs shrink-0">✗</span>
              <span>Trimming, cutting, or shaving edges for centering</span>
            </li>
            <li className="flex items-center gap-2.5 bg-white/80 backdrop-blur-xs rounded-xl p-2.5 border border-white/90 shadow-[0_2px_6px_rgba(244,63,94,0.06),inset_0_1px_2px_rgba(255,255,255,0.9)]">
              <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-xs shrink-0">✗</span>
              <span>Counterfeit or altered collectibles</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Required Terms Checkbox */}
      <div className="bg-gradient-to-b from-[#ffffff] via-[#f7fbfd] to-[#edf4fc] rounded-[24px] sm:rounded-[28px] p-5 sm:p-6 border-2 border-white shadow-[0_16px_32px_-6px_rgba(90,140,185,0.18),0_4px_10px_rgba(90,140,185,0.08),inset_0_3px_5px_rgba(255,255,255,0.98),inset_0_-3px_6px_rgba(160,190,225,0.3)]">
        <label className="flex items-start gap-3.5 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={termsAcknowledged}
            onChange={(e) => onToggleTerms(e.target.checked)}
            className="mt-1 w-5 h-5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
          />
          <div className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
            <strong>I have read what restoration includes and does not include (Terms §8A).</strong>{" "}
            I understand cards sent for excluded work may be returned unworked and shipping is non-refundable. Taking on a card is not a guarantee of any specific numerical grade from a grading company.
          </div>
        </label>
        {!termsAcknowledged && (
          <p className="mt-2 text-xs text-rose-600 flex items-center gap-1 font-bold pl-8">
            <AlertCircle className="w-4 h-4" />
            Please acknowledge the restoration terms above to proceed.
          </p>
        )}
      </div>

      {/* Cards List */}
      <div className="space-y-8">
        {cards.map((card, idx) => (
          <div
            key={card.id || idx}
            className="bg-gradient-to-b from-[#ffffff] via-[#f9fbfd] to-[#eff5fc] rounded-[32px] sm:rounded-[36px] p-6 sm:p-8 border-2 border-white shadow-[0_24px_48px_-10px_rgba(75,130,185,0.22),0_8px_20px_rgba(90,145,195,0.1),inset_0_4px_6px_rgba(255,255,255,1),inset_0_-5px_10px_rgba(160,195,230,0.35)] space-y-6"
          >
            {/* Card Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200/60">
              <div className="flex items-center gap-2.5">
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-black text-xs px-4 py-1.5 rounded-full uppercase tracking-wider shadow-[0_4px_12px_rgba(5,150,105,0.35),inset_0_2px_3px_rgba(255,255,255,0.5),inset_0_-2px_4px_rgba(0,0,0,0.25)] border border-emerald-400/50">
                  Card #{idx + 1}
                </span>
                <span className="font-black text-slate-900 text-sm sm:text-base">
                  {card.cardName || "Enter Card Details"}
                </span>
              </div>

              {cards.length > 1 && (
                <button
                  type="button"
                  onClick={() => onRemoveCard(idx)}
                  className="text-rose-500 hover:text-rose-700 px-3 py-1.5 rounded-full hover:bg-rose-50 transition-colors flex items-center gap-1 text-xs font-bold border border-rose-200/80 shadow-xs"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Remove Card</span>
                </button>
              )}
            </div>

            {/* Field Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {/* Card / Player Name */}
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Card / Player Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Charizard 1st Edition Shadowless or Michael Jordan"
                  value={card.cardName}
                  onChange={(e) => onUpdateCard(idx, { cardName: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.04),0_1px_2px_rgba(255,255,255,0.9)] focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-bold text-slate-900"
                  required
                />
              </div>

              {/* Set Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Set Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Base Set / Fleer"
                  value={card.setName}
                  onChange={(e) => onUpdateCard(idx, { setName: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.04),0_1px_2px_rgba(255,255,255,0.9)] focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-bold text-slate-900"
                />
              </div>

              {/* Year */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Year
                </label>
                <input
                  type="text"
                  placeholder="e.g. 1999"
                  value={card.year}
                  onChange={(e) => onUpdateCard(idx, { year: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.04),0_1px_2px_rgba(255,255,255,0.9)] focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-bold text-slate-900"
                />
              </div>

              {/* Card # */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Card Number #
                </label>
                <input
                  type="text"
                  placeholder="e.g. 4/102 or #57"
                  value={card.cardNumber}
                  onChange={(e) => onUpdateCard(idx, { cardNumber: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.04),0_1px_2px_rgba(255,255,255,0.9)] focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-bold text-slate-900"
                />
              </div>

              {/* Game / Sport */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Game / Sport
                </label>
                <select
                  value={card.gameSport}
                  onChange={(e) => onUpdateCard(idx, { gameSport: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.04),0_1px_2px_rgba(255,255,255,0.9)] focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-bold text-slate-900 cursor-pointer"
                >
                  <option value="Pokémon">Pokémon</option>
                  <option value="Magic: The Gathering">Magic: The Gathering</option>
                  <option value="Yu-Gi-Oh!">Yu-Gi-Oh!</option>
                  <option value="Baseball">Baseball</option>
                  <option value="Basketball">Basketball</option>
                  <option value="Football">Football</option>
                  <option value="Hockey">Hockey</option>
                  <option value="Soccer">Soccer</option>
                  <option value="One Piece / Anime">One Piece / Anime</option>
                  <option value="Other">Other Collectible</option>
                </select>
              </div>

              {/* Variation / Parallel */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Variation / Parallel
                </label>
                <input
                  type="text"
                  placeholder="e.g. Holo, 1st Edition, Refractor"
                  value={card.variation}
                  onChange={(e) => onUpdateCard(idx, { variation: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.04),0_1px_2px_rgba(255,255,255,0.9)] focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-bold text-slate-900"
                />
              </div>

              {/* Current Holder */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Current Holder / Slab
                </label>
                <select
                  value={card.currentHolder}
                  onChange={(e) => onUpdateCard(idx, { currentHolder: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.04),0_1px_2px_rgba(255,255,255,0.9)] focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-bold text-slate-900 cursor-pointer"
                >
                  <option value="Raw (Ungraded)">Raw (Ungraded, sleeve/toploader)</option>
                  <option value="PSA Slab">PSA Slab (requires crack-out)</option>
                  <option value="BGS Slab">BGS Slab (requires crack-out)</option>
                  <option value="CGC Slab">CGC Slab (requires crack-out)</option>
                  <option value="SGC Slab">SGC Slab (requires crack-out)</option>
                  <option value="Other Holder">Other Magnetic / Screwdown</option>
                </select>
              </div>

              {/* Declared Value */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Declared Value ($ USD) *
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-slate-400 font-bold">$</span>
                  <input
                    type="number"
                    min="0"
                    placeholder="250.00"
                    value={card.declaredValue || ""}
                    onChange={(e) => onUpdateCard(idx, { declaredValue: Math.max(0, parseFloat(e.target.value) || 0) })}
                    className="w-full pl-8 pr-4 py-3 rounded-2xl border border-slate-200 bg-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.04),0_1px_2px_rgba(255,255,255,0.9)] focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-black text-slate-900"
                  />
                </div>
              </div>
            </div>

            {/* Known Defects */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Known Defects & Areas to Target *
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Light fingernail dent on top border, micro-scratches across holo window, slight lift on top right corner."
                value={card.knownDefects}
                onChange={(e) => onUpdateCard(idx, { knownDefects: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.04),0_1px_2px_rgba(255,255,255,0.9)] focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-medium text-slate-900"
              />
            </div>

            {/* Service Tier Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                Service Level For Card #{idx + 1}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {serviceType === "restoration"
                  ? restorationTiers.map((tier) => (
                      <div
                        key={tier.id}
                        onClick={() => onUpdateCard(idx, { serviceTier: tier.id })}
                        className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                          card.serviceTier === tier.id
                            ? "bg-gradient-to-b from-[#f0fdf4] to-[#dcfce7] border-emerald-500 shadow-[0_12px_24px_-4px_rgba(16,185,129,0.32),inset_0_2px_4px_rgba(255,255,255,0.98),inset_0_-2px_4px_rgba(5,150,105,0.22)] scale-[1.02]"
                            : "bg-white/90 hover:bg-white border-white shadow-[0_6px_16px_rgba(90,140,185,0.08),inset_0_1px_2px_rgba(255,255,255,0.95)]"
                        }`}
                      >
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-black text-slate-900 text-xs sm:text-sm">{tier.name}</span>
                          <span className="font-black text-emerald-700 text-xs sm:text-sm">{tier.price}</span>
                        </div>
                        <div className="text-[11px] text-slate-500 font-bold mb-1">{tier.time}</div>
                        <p className="text-[11px] text-slate-600 line-clamp-2">{tier.desc}</p>
                      </div>
                    ))
                  : pregradeTiers.map((tier) => (
                      <div
                        key={tier.id}
                        onClick={() => onUpdateCard(idx, { serviceTier: tier.id })}
                        className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                          card.serviceTier === tier.id
                            ? "bg-gradient-to-b from-[#fffbeb] to-[#fef3c7] border-amber-500 shadow-[0_12px_24px_-4px_rgba(245,158,11,0.32),inset_0_2px_4px_rgba(255,255,255,0.98),inset_0_-2px_4px_rgba(217,119,6,0.22)] scale-[1.02]"
                            : "bg-white/90 hover:bg-white border-white shadow-[0_6px_16px_rgba(90,140,185,0.08),inset_0_1px_2px_rgba(255,255,255,0.95)]"
                        }`}
                      >
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-black text-slate-900 text-xs sm:text-sm">{tier.name}</span>
                          <span className="font-black text-amber-700 text-xs sm:text-sm">{tier.price}</span>
                        </div>
                        <div className="text-[11px] text-slate-500 font-bold mb-1">{tier.time}</div>
                        <p className="text-[11px] text-slate-600 line-clamp-2">{tier.desc}</p>
                      </div>
                    ))}
              </div>
            </div>

            {/* Optional Add-ons */}
            <div className="bg-gradient-to-b from-white/90 to-[#edf4fc] rounded-2xl p-4 border border-white shadow-[0_8px_18px_rgba(90,140,185,0.08),inset_0_2px_3px_rgba(255,255,255,0.95)] space-y-2.5">
              <span className="text-xs font-black text-slate-700 uppercase tracking-wider block">
                Available Add-ons:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="flex items-center gap-3 cursor-pointer bg-white p-3 rounded-xl border border-slate-200/80 shadow-[0_2px_6px_rgba(0,0,0,0.04),inset_0_1px_2px_rgba(255,255,255,0.9)] hover:border-slate-300">
                  <input
                    type="checkbox"
                    checked={card.addOnCrackOut}
                    onChange={(e) => onUpdateCard(idx, { addOnCrackOut: e.target.checked })}
                    className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-slate-900">Slab Crack-out (+$5.00)</span>
                    <span className="block text-[11px] text-slate-500">Safely crack card from PSA/BGS/CGC slab</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 cursor-pointer bg-white p-3 rounded-xl border border-slate-200/80 shadow-[0_2px_6px_rgba(0,0,0,0.04),inset_0_1px_2px_rgba(255,255,255,0.9)] hover:border-slate-300">
                  <input
                    type="checkbox"
                    checked={card.addOnHiResPhotos}
                    onChange={(e) => onUpdateCard(idx, { addOnHiResPhotos: e.target.checked })}
                    className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-slate-900">Studio Photo Set (+$10.00)</span>
                    <span className="block text-[11px] text-slate-500">High-res before/after photos sent via email</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Photo Upload Section */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <label className="text-xs font-black text-slate-700 uppercase tracking-wider">
                  Card Photos (1–3 Images)
                </label>
                <span className="text-[11px] text-slate-500 font-semibold">JPG, PNG, HEIC up to 15MB</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {/* Front Photo */}
                <div
                  onClick={() => fileInputRefs.current[`${idx}-front`]?.click()}
                  className={`rounded-2xl p-4 text-center cursor-pointer transition-all flex flex-col items-center justify-center min-h-[110px] ${
                    card.frontPhoto
                      ? "bg-gradient-to-b from-[#f0fdf4] to-[#dcfce7] border-2 border-emerald-500 shadow-[0_8px_18px_rgba(16,185,129,0.2),inset_0_2px_4px_rgba(255,255,255,0.95)]"
                      : "bg-gradient-to-b from-white via-[#f8fafc] to-[#edf4fa] border-2 border-dashed border-slate-300 hover:border-emerald-500 shadow-[inset_0_2px_4px_rgba(0,0,0,0.03),0_4px_12px_rgba(100,150,195,0.08)]"
                  }`}
                >
                  <input
                    type="file"
                    accept="image/*"
                    ref={(el) => { fileInputRefs.current[`${idx}-front`] = el; }}
                    onChange={(e) => handleSimulatedUpload(idx, "frontPhoto", e)}
                    className="hidden"
                  />
                  {card.frontPhoto ? (
                    <div className="space-y-1">
                      <FileImage className="w-6 h-6 text-emerald-600 mx-auto" />
                      <span className="text-xs font-black text-emerald-900 block">Front Photo Added</span>
                      <span className="text-[10px] text-emerald-700 underline font-bold">Change</span>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <Upload className="w-5 h-5 text-slate-500 mx-auto" />
                      <span className="text-xs font-bold text-slate-800 block">Upload Front *</span>
                      <span className="text-[10px] text-slate-500">Click to select</span>
                    </div>
                  )}
                </div>

                {/* Back Photo */}
                <div
                  onClick={() => fileInputRefs.current[`${idx}-back`]?.click()}
                  className={`rounded-2xl p-4 text-center cursor-pointer transition-all flex flex-col items-center justify-center min-h-[110px] ${
                    card.backPhoto
                      ? "bg-gradient-to-b from-[#f0fdf4] to-[#dcfce7] border-2 border-emerald-500 shadow-[0_8px_18px_rgba(16,185,129,0.2),inset_0_2px_4px_rgba(255,255,255,0.95)]"
                      : "bg-gradient-to-b from-white via-[#f8fafc] to-[#edf4fa] border-2 border-dashed border-slate-300 hover:border-emerald-500 shadow-[inset_0_2px_4px_rgba(0,0,0,0.03),0_4px_12px_rgba(100,150,195,0.08)]"
                  }`}
                >
                  <input
                    type="file"
                    accept="image/*"
                    ref={(el) => { fileInputRefs.current[`${idx}-back`] = el; }}
                    onChange={(e) => handleSimulatedUpload(idx, "backPhoto", e)}
                    className="hidden"
                  />
                  {card.backPhoto ? (
                    <div className="space-y-1">
                      <FileImage className="w-6 h-6 text-emerald-600 mx-auto" />
                      <span className="text-xs font-black text-emerald-900 block">Back Photo Added</span>
                      <span className="text-[10px] text-emerald-700 underline font-bold">Change</span>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <Upload className="w-5 h-5 text-slate-500 mx-auto" />
                      <span className="text-xs font-bold text-slate-800 block">Upload Back *</span>
                      <span className="text-[10px] text-slate-500">Click to select</span>
                    </div>
                  )}
                </div>

                {/* Detail Photo */}
                <div
                  onClick={() => fileInputRefs.current[`${idx}-detail`]?.click()}
                  className={`rounded-2xl p-4 text-center cursor-pointer transition-all flex flex-col items-center justify-center min-h-[110px] ${
                    card.detailPhoto
                      ? "bg-gradient-to-b from-[#f0fdf4] to-[#dcfce7] border-2 border-emerald-500 shadow-[0_8px_18px_rgba(16,185,129,0.2),inset_0_2px_4px_rgba(255,255,255,0.95)]"
                      : "bg-gradient-to-b from-white via-[#f8fafc] to-[#edf4fa] border-2 border-dashed border-slate-300 hover:border-emerald-500 shadow-[inset_0_2px_4px_rgba(0,0,0,0.03),0_4px_12px_rgba(100,150,195,0.08)]"
                  }`}
                >
                  <input
                    type="file"
                    accept="image/*"
                    ref={(el) => { fileInputRefs.current[`${idx}-detail`] = el; }}
                    onChange={(e) => handleSimulatedUpload(idx, "detailPhoto", e)}
                    className="hidden"
                  />
                  {card.detailPhoto ? (
                    <div className="space-y-1">
                      <FileImage className="w-6 h-6 text-emerald-600 mx-auto" />
                      <span className="text-xs font-black text-emerald-900 block">Defect Closeup</span>
                      <span className="text-[10px] text-emerald-700 underline font-bold">Change</span>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <Upload className="w-5 h-5 text-slate-500 mx-auto" />
                      <span className="text-xs font-bold text-slate-800 block">Defect Closeup</span>
                      <span className="text-[10px] text-slate-500">(Optional)</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Another Card Button */}
      <div className="flex justify-center">
        <button
          type="button"
          onClick={onAddCard}
          className="clay-hero-btn-white rounded-full px-8 py-4 font-black text-xs sm:text-sm tracking-wider uppercase text-slate-800 flex items-center gap-2.5 shadow-md cursor-pointer group"
        >
          <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Plus className="w-4 h-4 stroke-[3]" />
          </div>
          <span>+ ADD ANOTHER CARD</span>
        </button>
      </div>

      {/* Navigation Buttons */}
      <div className="pt-4 flex items-center justify-between border-t border-slate-200">
        <button
          type="button"
          onClick={onBack}
          className="bg-white hover:bg-slate-100 text-slate-700 font-bold px-6 py-3 rounded-full text-sm border border-slate-300 shadow-sm flex items-center gap-2 cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <button
          type="button"
          disabled={!isFormValid}
          onClick={onContinue}
          className={`px-8 py-3.5 rounded-full font-black text-sm tracking-wide flex items-center gap-2 transition-all ${
            isFormValid
              ? "clay-btn-gold text-amber-950 cursor-pointer shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              : "bg-slate-200 text-slate-400 cursor-not-allowed border border-slate-300"
          }`}
        >
          <span>CONTINUE TO YOUR INFO</span>
          <ArrowRight className="w-4 h-4 stroke-[3]" />
        </button>
      </div>
    </div>
  );
}
