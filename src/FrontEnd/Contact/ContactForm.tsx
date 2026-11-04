"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Send,
  CheckCircle2,
  User,
  Mail,
  MessageSquare,
  ShieldCheck,
  ChevronDown,
  Check,
} from "lucide-react";

interface ClaySelectProps {
  label: string;
  value: string;
  options: string[];
  onChange: (val: string) => void;
}

function ClaySelect({ label, value, options, onChange }: ClaySelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col gap-1.5 relative select-none" ref={containerRef}>
      <label className="text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider">
        {label}
      </label>

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-3 rounded-2xl bg-white/95 border text-slate-800 text-sm font-semibold shadow-[inset_0_2px_4px_rgba(0,0,0,0.04)] flex items-center justify-between cursor-pointer transition-all duration-200 ${
          isOpen
            ? "border-blue-400 ring-2 ring-blue-400/50 shadow-[0_4px_14px_rgba(59,130,246,0.18)]"
            : "border-slate-200/80 hover:border-slate-300 hover:bg-white"
        }`}
      >
        <span className="truncate pr-2">{value}</span>
        <ChevronDown
          className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-blue-600" : ""
          }`}
        />
      </button>

      {/* Claymorphic Popover Menu */}
      {isOpen && (
        <div className="absolute top-[calc(100%+6px)] inset-x-0 z-50 clay-dropdown-card rounded-[22px] p-2 shadow-[0_18px_38px_rgba(80,135,185,0.24),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-3px_5px_rgba(160,190,225,0.25)] border border-white/90 animate-in fade-in zoom-in-95 duration-150">
          <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
            {options.map((opt) => {
              const isSelected = opt === value;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => {
                    onChange(opt);
                    setIsOpen(false);
                  }}
                  className={`w-full px-3.5 py-2.5 rounded-xl text-left text-xs sm:text-sm font-bold flex items-center justify-between transition-all cursor-pointer ${
                    isSelected
                      ? "bg-gradient-to-r from-blue-50 to-blue-100/80 text-blue-800 shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)]"
                      : "text-slate-700 hover:bg-[#eaf4fd] hover:text-slate-900 hover:translate-x-1"
                  }`}
                >
                  <span className="truncate">{opt}</span>
                  {isSelected && (
                    <Check className="w-4 h-4 text-blue-600 shrink-0 stroke-[2.5]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Card Restoration & Cleaning",
    cardCount: "1 - 5 Cards",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const serviceOptions = [
    "Card Restoration & Cleaning",
    "Pre-Grade Prep (PSA/BGS/CGC)",
    "Estimated Grade Consultation",
    "Bulk Submission Inquiry",
    "General Question",
  ];

  const cardCountOptions = [
    "1 - 5 Cards",
    "6 - 20 Cards",
    "20 - 50 Cards",
    "50+ Cards (Collector / Dealer)",
  ];

  return (
    <div className="clay-footer-card rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 relative overflow-hidden w-full">
      {/* Decorative top shimmer line */}
      <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent" />

      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-2xl clay-tile-blue flex items-center justify-center shrink-0">
          <MessageSquare className="w-6 h-6 text-blue-600" strokeWidth={2.4} />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-800">
            Send Us a Message
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Fill out the form below and we’ll get back to you promptly.
          </p>
        </div>
      </div>

      {submitted ? (
        <div className="py-12 px-4 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4 shadow-[inset_0_2px_4px_rgba(255,255,255,0.9),0_6px_16px_rgba(16,185,129,0.25)]">
            <CheckCircle2 className="w-9 h-9" strokeWidth={2.5} />
          </div>
          <h3 className="text-2xl font-black text-slate-800">Message Received!</h3>
          <p className="mt-2 text-sm text-slate-600 max-w-md font-medium">
            Thank you, <span className="font-bold text-slate-800">{formData.name}</span>. One of our card specialists will review your inquiry and email you at <span className="font-bold text-slate-800">{formData.email}</span> within 24 hours.
          </p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                email: "",
                service: "Card Restoration & Cleaning",
                cardCount: "1 - 5 Cards",
                message: "",
              });
            }}
            className="mt-6 px-6 py-2.5 rounded-full clay-btn-gold text-amber-950 font-bold text-sm"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-slate-500" />
                <span>YOUR NAME *</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. John Doe"
                className="w-full px-4 py-3 rounded-2xl bg-white/90 border border-slate-200/80 text-slate-800 text-sm font-semibold placeholder:text-slate-400 shadow-[inset_0_2px_4px_rgba(0,0,0,0.04)] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all"
              />
            </div>

            {/* Email Address */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span>EMAIL ADDRESS *</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-2xl bg-white/90 border border-slate-200/80 text-slate-800 text-sm font-semibold placeholder:text-slate-400 shadow-[inset_0_2px_4px_rgba(0,0,0,0.04)] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Custom Claymorphic Service Dropdown */}
            <ClaySelect
              label="SERVICE NEEDED"
              value={formData.service}
              options={serviceOptions}
              onChange={(val) => setFormData({ ...formData, service: val })}
            />

            {/* Custom Claymorphic Estimated Number of Cards Dropdown */}
            <ClaySelect
              label="ESTIMATED NUMBER OF CARDS"
              value={formData.cardCount}
              options={cardCountOptions}
              onChange={(val) => setFormData({ ...formData, cardCount: val })}
            />
          </div>

          {/* Message Details */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider">
              MESSAGE OR CARD DETAILS
            </label>
            <textarea
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about the cards (e.g. 1999 Base Set Charizard, surface scratch, wax stain, centering concern)..."
              className="w-full px-4 py-3 rounded-2xl bg-white/90 border border-slate-200/80 text-slate-800 text-sm font-semibold placeholder:text-slate-400 shadow-[inset_0_2px_4px_rgba(0,0,0,0.04)] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 sm:py-4 rounded-2xl clay-btn-gold font-black text-amber-950 text-base sm:text-lg flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 mt-1 shadow-[0_8px_18px_rgba(230,165,30,0.38)]"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="w-5 h-5 border-2 border-amber-950 border-t-transparent rounded-full animate-spin" />
                Sending Inquiry...
              </span>
            ) : (
              <>
                <Send className="w-5 h-5 stroke-[2.5]" />
                <span>Send Card Inquiry</span>
              </>
            )}
          </button>

          {/* Trust Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-1 text-xs text-slate-500 font-semibold">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Confidential</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Surgical Quality Care</span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
