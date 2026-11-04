"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Copy,
  Check,
  ShieldCheck,
  Truck,
  PackageCheck,
} from "lucide-react";

export default function WhereToShip() {
  const [copied, setCopied] = useState(false);

  const fullAddress =
    "TCS\n1860 Barnett Shoals Rd Ste 103\nAthens, GA 30605";

  const handleCopy = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full flex flex-col gap-6">
      <div className="clay-footer-card rounded-[32px] sm:rounded-[44px] p-7 sm:p-10 shadow-2xl border border-white/90 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-gradient-to-br from-amber-300/25 to-blue-300/25 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Side: Information & Address Details */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {/* 3D Clay Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200/80 text-blue-800 text-xs font-black uppercase tracking-wider w-fit shadow-[inset_0_2px_4px_rgba(255,255,255,0.95),0_3px_8px_rgba(59,130,246,0.12)]">
              <MapPin className="w-3.5 h-3.5 text-blue-600" />
              <span>Direct Receiving Facility</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black italic uppercase tracking-wider text-slate-900 drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]">
              WHERE TO SHIP YOUR CARDS
            </h2>

            <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
              Prepaid labels are addressed to this office. If you use your own carrier, ship tracked and put your order number in the package.
            </p>

            {/* 3D Clay Layered Address Box */}
            <div className="clay-ship-outer p-2 rounded-[30px] shadow-[0_14px_30px_-4px_rgba(100,140,190,0.22)]">
              <div className="bg-gradient-to-b from-white via-white to-slate-50/80 rounded-[24px] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5 shadow-[inset_0_3px_6px_rgba(255,255,255,0.98),inset_0_-2px_4px_rgba(150,190,230,0.15)] border border-white">
                <div className="flex items-start gap-4">
                  {/* Pure 3D Clay Tile Icon (No harsh black border!) */}
                  <div className="w-14 h-14 rounded-2xl clay-tile-yellow flex items-center justify-center shrink-0 shadow-[0_8px_18px_-3px_rgba(217,119,6,0.32),inset_0_3px_4px_rgba(255,255,255,0.95),inset_0_-3px_5px_rgba(180,95,15,0.35)]">
                    <MapPin className="w-7 h-7 text-[#78350f] drop-shadow-sm" />
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[11px] font-black uppercase tracking-widest text-amber-700">
                      Official Shipping Destination
                    </span>
                    <span className="font-black text-slate-900 text-lg sm:text-xl tracking-wide">
                      TCS
                    </span>
                    <span className="text-xs sm:text-sm text-slate-700 font-bold leading-snug">
                      1860 Barnett Shoals Rd Ste 103
                    </span>
                    <span className="text-xs sm:text-sm text-slate-700 font-bold leading-snug">
                      Athens, GA 30605
                    </span>
                    <div className="mt-2.5 flex items-center gap-2 text-xs font-bold text-blue-600">
                      <Phone className="w-3.5 h-3.5 text-blue-600" />
                      <a
                        href="tel:7067654280"
                        className="hover:underline hover:text-blue-800"
                      >
                        (706) 765-4280
                      </a>
                    </div>
                  </div>
                </div>

                {/* 3D Clay Gold Pill "Copy Address" Button */}
                <button
                  type="button"
                  onClick={handleCopy}
                  className="clay-hero-btn-yellow rounded-full px-6 py-3 text-xs sm:text-[13px] font-black italic uppercase tracking-wider text-[#3d2400] flex items-center justify-center gap-2 cursor-pointer shadow-md hover:scale-105 active:scale-95 transition-all shrink-0 self-start sm:self-center"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-800 stroke-[3]" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#3d2400]" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Packaging Tips & Facility Badges */}
          <div className="lg:col-span-5 flex flex-col gap-4 p-6 sm:p-7 rounded-[32px] clay-footer-card border border-white/90 shadow-xl">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl clay-tile-blue flex items-center justify-center text-blue-700 shadow-sm">
                <PackageCheck className="w-4 h-4 text-blue-600" />
              </div>
              <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-900">
                Safe Shipping Checklist
              </h4>
            </div>

            <ul className="text-xs text-slate-700 font-medium flex flex-col gap-2.5">
              <li className="p-3 rounded-2xl bg-white/90 shadow-[inset_0_1px_2px_rgba(255,255,255,0.95),0_2px_6px_rgba(0,0,0,0.03)] border border-slate-100 flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span>Pack each card inside a clean <strong>penny sleeve</strong> and a <strong>semi-rigid holder</strong> or top loader.</span>
              </li>
              <li className="p-3 rounded-2xl bg-white/90 shadow-[inset_0_1px_2px_rgba(255,255,255,0.95),0_2px_6px_rgba(0,0,0,0.03)] border border-slate-100 flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span>Sandwich cards between rigid cardboard pieces with painter&apos;s tape so they cannot move.</span>
              </li>
              <li className="p-3 rounded-2xl bg-white/90 shadow-[inset_0_1px_2px_rgba(255,255,255,0.95),0_2px_6px_rgba(0,0,0,0.03)] border border-slate-100 flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span>Place inside a <strong>rigid cardboard box</strong> or heavy-duty bubble mailer.</span>
              </li>
              <li className="p-3 rounded-2xl bg-white/90 shadow-[inset_0_1px_2px_rgba(255,255,255,0.95),0_2px_6px_rgba(0,0,0,0.03)] border border-slate-100 flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-blue-100 border border-blue-300 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Truck className="w-3.5 h-3.5" />
                </div>
                <span>Include a printout or slip with your <strong>Order Number</strong> and email inside the package.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
