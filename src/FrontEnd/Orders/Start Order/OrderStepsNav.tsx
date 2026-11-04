"use client";

import React from "react";
import { Check, Layers, Wrench, User, Truck, ClipboardList, PenTool, CreditCard } from "lucide-react";

interface OrderStepsNavProps {
  currentStep: number;
  onStepClick: (step: number) => void;
  maxAccessibleStep: number;
}

const steps = [
  { step: 1, label: "Service", icon: Wrench },
  { step: 2, label: "Cards", icon: Layers },
  { step: 3, label: "Your Info", icon: User },
  { step: 4, label: "Shipping", icon: Truck },
  { step: 5, label: "Review", icon: ClipboardList },
  { step: 6, label: "Sign", icon: PenTool },
  { step: 7, label: "Pay", icon: CreditCard },
];

export default function OrderStepsNav({
  currentStep,
  onStepClick,
  maxAccessibleStep,
}: OrderStepsNavProps) {
  return (
    <div className="w-full bg-white/70 backdrop-blur-md rounded-2xl p-2 sm:p-3 border border-white/80 shadow-[0_4px_16px_rgba(0,0,0,0.04)] mb-8 overflow-x-auto no-scrollbar">
      <div className="flex items-center justify-between min-w-[620px] sm:min-w-0 sm:justify-center gap-1.5 sm:gap-2">
        {steps.map((s, idx) => {
          const isCompleted = s.step < currentStep;
          const isActive = s.step === currentStep;
          const isAccessible = s.step <= maxAccessibleStep;
          const Icon = s.icon;

          return (
            <React.Fragment key={s.step}>
              <button
                type="button"
                onClick={() => isAccessible && onStepClick(s.step)}
                disabled={!isAccessible}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-emerald-600 text-white shadow-[0_4px_12px_rgba(5,150,105,0.35),inset_0_1px_2px_rgba(255,255,255,0.4)] scale-[1.02]"
                    : isCompleted
                    ? "bg-emerald-50 text-emerald-800 hover:bg-emerald-100/80 border border-emerald-200/60"
                    : isAccessible
                    ? "bg-white/80 text-slate-700 hover:bg-white border border-slate-200/60"
                    : "bg-slate-100/60 text-slate-400 cursor-not-allowed opacity-75"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${
                    isActive
                      ? "bg-white text-emerald-700"
                      : isCompleted
                      ? "bg-emerald-600 text-white"
                      : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {isCompleted ? <Check className="w-3 h-3 stroke-[3]" /> : s.step}
                </div>
                <span className="whitespace-nowrap tracking-wide">{s.label}</span>
              </button>

              {idx < steps.length - 1 && (
                <div
                  className={`h-0.5 w-3 sm:w-5 flex-shrink-0 rounded-full transition-colors ${
                    s.step < currentStep ? "bg-emerald-500" : "bg-slate-200"
                  }`}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
