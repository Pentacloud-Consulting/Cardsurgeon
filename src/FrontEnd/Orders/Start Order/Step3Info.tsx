"use client";

import React from "react";
import { ArrowLeft, ArrowRight, User, Mail, Phone, MapPin, Building, ShieldCheck } from "lucide-react";
import { CustomerInfo } from "./types";

interface Step3InfoProps {
  customerInfo: CustomerInfo;
  onUpdateInfo: (updated: Partial<CustomerInfo>) => void;
  onBack: () => void;
  onContinue: () => void;
}

const US_STATES = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", 
  "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", 
  "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", 
  "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", 
  "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
];

export default function Step3Info({
  customerInfo,
  onUpdateInfo,
  onBack,
  onContinue,
}: Step3InfoProps) {
  const isValid =
    customerInfo.fullName.trim().length > 0 &&
    customerInfo.email.trim().includes("@") &&
    customerInfo.phone.trim().length >= 7 &&
    customerInfo.streetAddress.trim().length > 0 &&
    customerInfo.city.trim().length > 0 &&
    customerInfo.state.trim().length > 0 &&
    customerInfo.zipCode.trim().length >= 4;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-2">
          YOUR CONTACT & RETURN ADDRESS
        </h2>
        <p className="text-slate-600 text-sm">
          Where should we send return packages, order progress updates, and photographic before/after documentation?
        </p>
      </div>

      {/* Form Container */}
      <div className="bg-gradient-to-b from-[#ffffff] via-[#f9fbfd] to-[#eff5fc] rounded-[32px] sm:rounded-[36px] p-6 sm:p-8 border-2 border-white shadow-[0_24px_48px_-10px_rgba(75,130,185,0.22),0_8px_20px_rgba(90,145,195,0.1),inset_0_4px_6px_rgba(255,255,255,1),inset_0_-5px_10px_rgba(160,195,230,0.35)] space-y-6">
        <div className="flex items-center gap-2 pb-3 border-b border-slate-200/60 text-slate-900 font-bold text-sm">
          <User className="w-4 h-4 text-emerald-600" />
          <span>Customer Contact Details</span>
        </div>

        {/* Contact info grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="sm:col-span-2 md:col-span-1">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Full Legal Name *
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="e.g. John Doe"
                value={customerInfo.fullName}
                onChange={(e) => onUpdateInfo({ fullName: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.04),0_1px_2px_rgba(255,255,255,0.9)] focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-bold text-slate-900"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Email Address *
            </label>
            <div className="relative">
              <input
                type="email"
                placeholder="john@example.com"
                value={customerInfo.email}
                onChange={(e) => onUpdateInfo({ email: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.04),0_1px_2px_rgba(255,255,255,0.9)] focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-bold text-slate-900"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Phone Number *
            </label>
            <div className="relative">
              <input
                type="tel"
                placeholder="(555) 123-4567"
                value={customerInfo.phone}
                onChange={(e) => onUpdateInfo({ phone: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.04),0_1px_2px_rgba(255,255,255,0.9)] focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-bold text-slate-900"
                required
              />
            </div>
          </div>
        </div>

        {/* Shipping Address Divider */}
        <div className="flex items-center gap-2 pt-4 pb-3 border-b border-slate-200/60 text-slate-900 font-bold text-sm">
          <MapPin className="w-4 h-4 text-emerald-600" />
          <span>Return Shipping Address (United States)</span>
        </div>

        {/* Address grid */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Street Address *
              </label>
              <input
                type="text"
                placeholder="123 Collectibles Way"
                value={customerInfo.streetAddress}
                onChange={(e) => onUpdateInfo({ streetAddress: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.04),0_1px_2px_rgba(255,255,255,0.9)] focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-bold text-slate-900"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Apt / Suite / Unit
              </label>
              <input
                type="text"
                placeholder="Ste 4B (Optional)"
                value={customerInfo.apartmentSuite}
                onChange={(e) => onUpdateInfo({ apartmentSuite: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.04),0_1px_2px_rgba(255,255,255,0.9)] focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-bold text-slate-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                City *
              </label>
              <input
                type="text"
                placeholder="Atlanta"
                value={customerInfo.city}
                onChange={(e) => onUpdateInfo({ city: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.04),0_1px_2px_rgba(255,255,255,0.9)] focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-bold text-slate-900"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                State *
              </label>
              <select
                value={customerInfo.state}
                onChange={(e) => onUpdateInfo({ state: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.04),0_1px_2px_rgba(255,255,255,0.9)] focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-bold text-slate-900 cursor-pointer"
                required
              >
                <option value="">Select State</option>
                {US_STATES.map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                ZIP Code *
              </label>
              <input
                type="text"
                placeholder="30605"
                value={customerInfo.zipCode}
                onChange={(e) => onUpdateInfo({ zipCode: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.04),0_1px_2px_rgba(255,255,255,0.9)] focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-bold text-slate-900"
                required
              />
            </div>
          </div>
        </div>

        {/* Security badge notice */}
        <div className="bg-emerald-50/70 rounded-2xl p-4 border border-emerald-200/60 flex items-start gap-2.5 text-xs text-emerald-900">
          <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
          <span>
            <strong>Secure Verification:</strong> We only ship returned orders with direct carrier tracking. Signature on delivery is applied for packages containing cards with high declared value.
          </span>
        </div>
      </div>

      {/* Navigation Footer */}
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
          disabled={!isValid}
          onClick={onContinue}
          className={`px-8 py-3.5 rounded-full font-black text-sm tracking-wide flex items-center gap-2 transition-all ${
            isValid
              ? "clay-btn-gold text-amber-950 cursor-pointer shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              : "bg-slate-200 text-slate-400 cursor-not-allowed border border-slate-300"
          }`}
        >
          <span>CONTINUE TO SHIPPING</span>
          <ArrowRight className="w-4 h-4 stroke-[3]" />
        </button>
      </div>
    </div>
  );
}
