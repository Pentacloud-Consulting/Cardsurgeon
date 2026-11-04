"use client";

import React from "react";
import { DollarSign } from "lucide-react";
import { GiftFormData } from "./types";

interface GiftAmountSelectorProps {
  formData: GiftFormData;
  setFormData: React.Dispatch<React.SetStateAction<GiftFormData>>;
}

const PRESET_AMOUNTS = [25, 50, 100, 200];

export default function GiftAmountSelector({
  formData,
  setFormData,
}: GiftAmountSelectorProps) {
  const handlePresetClick = (amount: number) => {
    setFormData((prev) => ({
      ...prev,
      amount,
      isCustom: false,
      customAmount: "",
    }));
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value.replace(/[^0-9.]/g, "");
    setFormData((prev) => ({
      ...prev,
      isCustom: true,
      customAmount: rawVal,
      amount: Number(rawVal) > 0 ? Number(rawVal) : 0,
    }));
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <label className="text-sm font-black uppercase tracking-wider text-slate-800">
          Amount
        </label>
        <span className="text-xs font-semibold text-slate-500">
          Selected: <strong className="text-slate-900">${formData.isCustom && formData.customAmount ? Number(formData.customAmount).toFixed(2) : formData.amount.toFixed(2)}</strong>
        </span>
      </div>

      {/* Preset Amount Buttons Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {PRESET_AMOUNTS.map((preset) => {
          const isActive = !formData.isCustom && formData.amount === preset;
          return (
            <button
              key={preset}
              type="button"
              onClick={() => handlePresetClick(preset)}
              className={`py-2.5 px-3 rounded-full text-sm font-black italic tracking-wider uppercase transition-all cursor-pointer flex items-center justify-center ${
                isActive
                  ? "clay-hero-btn-yellow text-[#3d2400] scale-[1.04]"
                  : "clay-hero-btn-white text-slate-700 hover:text-slate-950"
              }`}
            >
              ${preset.toFixed(2)}
            </button>
          );
        })}
      </div>

      {/* Custom Amount Input */}
      <div className="relative mt-1">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
          <DollarSign className="w-4 h-4" />
        </div>
        <input
          type="text"
          inputMode="decimal"
          placeholder="Custom Amount (e.g. 75.00)"
          value={formData.customAmount}
          onChange={handleCustomChange}
          onFocus={() => {
            if (!formData.isCustom) {
              setFormData((prev) => ({
                ...prev,
                isCustom: true,
                customAmount: prev.amount ? String(prev.amount) : "",
              }));
            }
          }}
          className={`w-full pl-9 pr-4 py-2.5 rounded-xl text-sm font-bold border-2 transition-all outline-none ${
            formData.isCustom
              ? "bg-amber-50/40 border-amber-400 text-slate-900 ring-2 ring-amber-400/20"
              : "bg-white border-slate-300 text-slate-800 hover:border-slate-400 focus:border-slate-800"
          }`}
        />
      </div>
    </div>
  );
}
