"use client";

import React from "react";
import { Award, Shield, Gift, CheckCircle2, CreditCard, ArrowRight } from "lucide-react";
import { GiftFormData } from "./types";

interface GiftCardPreviewProps {
  formData: GiftFormData;
}

export default function GiftCardPreview({ formData }: GiftCardPreviewProps) {
  const displayAmount = formData.isCustom
    ? Number(formData.customAmount) > 0
      ? Number(formData.customAmount).toFixed(2)
      : "0.00"
    : formData.amount.toFixed(2);

  return (
    <div className="w-full flex flex-col gap-4">
      {/* 3D Realistic Collectible Gift Card Slab */}
      <div className="relative group select-none">
        {/* Glow ambient background aura */}
        <div className="absolute -inset-2 bg-gradient-to-r from-amber-400/25 via-emerald-400/20 to-blue-500/25 rounded-[36px] blur-xl opacity-75 group-hover:opacity-100 transition duration-700 pointer-events-none" />

        {/* Card Slab Shell */}
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] bg-gradient-to-b from-[#0a1426] via-[#091120] to-[#040812] border-2 border-amber-300/30 p-6 sm:p-7 text-white shadow-[0_20px_50px_rgba(3,7,18,0.45),inset_0_2px_4px_rgba(255,255,255,0.2),inset_0_-2px_4px_rgba(0,0,0,0.8)] flex flex-col justify-between min-h-[290px] sm:min-h-[320px]">
          {/* Holographic Gloss Diagonal Light Sheen */}
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-gradient-to-br from-white/15 via-white/5 to-transparent rounded-full blur-2xl pointer-events-none transform rotate-12" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.12),transparent_50%)] pointer-events-none" />

          {/* Micro Security Pattern Grid */}
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(#ffffff 1px, transparent 1px), radial-gradient(#ffffff 1px, #0a1426 1px)",
              backgroundSize: "20px 20px",
              backgroundPosition: "0 0, 10px 10px",
            }}
          />

          {/* Card Top Row: Brand & Hologram Emblem */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-400 via-yellow-200 to-amber-500 p-[1.5px] shadow-[0_2px_8px_rgba(245,158,11,0.4)] flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#0b162c] flex items-center justify-center">
                  <Award className="w-4 h-4 text-amber-300" />
                </div>
              </div>
              <div>
                <p className="text-[11px] font-black uppercase tracking-widest text-amber-300/80 leading-none">
                  OFFICIAL VOUCHER
                </p>
                <h2 className="text-base sm:text-lg font-black italic tracking-wider text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  THE CARD SURGEON
                </h2>
              </div>
            </div>

            {/* Hologram Badge */}
            <div className="px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-yellow-300/10 border border-amber-400/40 text-[10px] font-extrabold uppercase tracking-wider text-amber-200 flex items-center gap-1 shadow-sm">
              <Shield className="w-3 h-3 text-amber-300" />
              <span>Certified</span>
            </div>
          </div>

          {/* Card Center: Dynamic Amount & Card Type */}
          <div className="relative z-10 my-4 flex flex-col items-center justify-center text-center py-2">
            <span className="text-[11px] uppercase tracking-widest font-bold text-slate-400 mb-1">
              Certificate Value
            </span>
            <div className="flex items-baseline justify-center">
              <span className="inline-block text-4xl sm:text-5xl lg:text-6xl font-black italic tracking-normal pr-4 pl-1 pb-1 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-100 drop-shadow-[0_3px_14px_rgba(251,191,36,0.5)]">
                ${displayAmount}
              </span>
            </div>
            <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-xs font-semibold text-amber-200/90">
              <Gift className="w-3.5 h-3.5 text-amber-300" />
              <span>Digital Gift Card</span>
            </div>
          </div>

          {/* Card Bottom Row: Recipient & Voucher Code */}
          <div className="relative z-10 pt-3 border-t border-white/10 flex items-end justify-between text-xs">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                {formData.sendToSomeoneElse ? "Recipient" : "Issued For"}
              </span>
              <span className="font-bold text-slate-200 max-w-[170px] truncate">
                {formData.sendToSomeoneElse && formData.recipientName.trim()
                  ? formData.recipientName
                  : formData.senderEmail.trim()
                  ? formData.senderEmail
                  : "Card Collector"}
              </span>
            </div>

            <div className="flex flex-col items-end">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Voucher Code
              </span>
              <span className="font-mono font-bold text-amber-300 tracking-wider text-[11px]">
                TCS-••••-••••-2026
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Info Box under the Card */}
      <div className="bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-2xl p-4 sm:p-5 shadow-[0_4px_16px_rgba(0,0,0,0.04)] flex flex-col gap-3">
        <h4 className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
          <CreditCard className="w-4 h-4 text-emerald-600" />
          <span>How It Works</span>
        </h4>
        <ul className="text-xs text-slate-600 font-medium flex flex-col gap-2">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
            <span>Digital voucher code is delivered via email right after purchase.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
            <span>Redeemable at the <strong>Review step</strong> of any restoration or prep order.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
            <span>Any unused balance stays linked to the code and never expires.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
