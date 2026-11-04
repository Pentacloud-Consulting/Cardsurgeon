import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full px-2 sm:px-4 lg:px-6 pt-2 sm:pt-4 pb-6 sm:pb-8 select-none relative z-10">
      <div className="w-full">
        {/* Giant Claymorphic Footer Container - Full Width Corner to Corner */}
        <div className="clay-footer-card rounded-[32px] sm:rounded-[44px] p-6 sm:p-10 lg:p-12 relative overflow-hidden w-full">
          {/* Main Top Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column (Brand + Ship Cards + Follow) - 5 Cols */}
            <div className="lg:col-span-5 flex flex-col">
              {/* Logo & Brand */}
              <div className="flex items-center gap-3">
                {/* 3D Clay Circular Logo Emblem */}
                <div className="w-11 h-11 rounded-full p-[2.5px] bg-gradient-to-tr from-amber-300 via-yellow-100 to-amber-400 shadow-[inset_0_2px_4px_rgba(255,255,255,0.9),0_3px_8px_rgba(180,130,20,0.3)] flex items-center justify-center shrink-0">
                  <div className="w-full h-full rounded-full bg-gradient-to-b from-[#daf0f5] to-[#bde3ea] flex items-center justify-center overflow-hidden relative shadow-[inset_0_2px_4px_rgba(0,0,0,0.08)]">
                    <svg
                      viewBox="0 0 64 64"
                      className="w-8 h-8 drop-shadow-sm"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="16"
                        y="14"
                        width="32"
                        height="42"
                        rx="5"
                        fill="#38bdf8"
                        stroke="#0284c7"
                        strokeWidth="2.5"
                      />
                      <rect
                        x="20"
                        y="20"
                        width="24"
                        height="28"
                        rx="3"
                        fill="#fef08a"
                        stroke="#eab308"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M16 19C16 14 24 10 32 10C40 10 48 14 48 19V22H16V19Z"
                        fill="#22c55e"
                        stroke="#15803d"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M32 13V17M30 15H34"
                        stroke="#ffffff"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M26 38L37 27M37 27L40 30M37 27L41 23"
                        stroke="#dc2626"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <circle cx="24" cy="26" r="1.5" fill="#f59e0b" />
                      <circle cx="39" cy="42" r="1.5" fill="#f59e0b" />
                    </svg>
                  </div>
                </div>

                {/* Brand Name */}
                <span className="inline-block font-black italic text-xl tracking-tight pr-1.5 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 uppercase font-sans drop-shadow-[0_1px_2px_rgba(217,119,6,0.3)]">
                  THE CARD SURGEON
                </span>
              </div>

              {/* Subtitle */}
              <p className="text-sm font-semibold text-slate-700 mt-2.5">
                Trading card restoration & pre-grade prep.
              </p>

              {/* SHIP CARDS TO Clay Box with Sky Blue Rim */}
              <div className="clay-ship-outer p-2 sm:p-2.5 rounded-[22px] mt-5 max-w-md">
                <div className="clay-ship-inner p-4 sm:p-5 rounded-[18px]">
                  <h4 className="font-black italic uppercase tracking-wider text-amber-950 text-xs sm:text-sm mb-3">
                    SHIP CARDS TO
                  </h4>

                  <div className="flex flex-col gap-2.5 text-xs sm:text-[13px] font-semibold text-slate-800">
                    {/* Address */}
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 text-blue-600">
                        <MapPin className="w-4 h-4 fill-blue-500/30 text-blue-600" />
                      </div>
                      <span className="leading-snug">
                        TCS, 1860 Barnett Shoals Rd Ste 103, Athens, GA 30605
                      </span>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-md flex items-center justify-center shrink-0 text-blue-600">
                        <Phone className="w-4 h-4 fill-blue-500/30 text-blue-600" />
                      </div>
                      <a
                        href="tel:7067654280"
                        className="hover:underline hover:text-slate-950"
                      >
                        (706) 765-4280
                      </a>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-md flex items-center justify-center shrink-0 text-blue-600">
                        <Mail className="w-4 h-4 fill-blue-500/30 text-blue-600" />
                      </div>
                      <a
                        href="mailto:admin@thecardsurgeon.com"
                        className="hover:underline hover:text-slate-950 break-all"
                      >
                        admin@thecardsurgeon.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* FOLLOW Section with official HTTPS Social Icons & Badges */}
              <div className="mt-6">
                <h5 className="font-black italic uppercase tracking-wider text-slate-800 text-xs sm:text-sm mb-3">
                  FOLLOW US
                </h5>

                <div className="flex flex-wrap items-center gap-2.5">
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/collectwithchase_pgs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="clay-pill-instagram px-3.5 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer hover:scale-105 transition-transform"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/instagram.svg"
                      alt="Instagram"
                      className="w-3.5 h-3.5 invert"
                    />
                    <span>Instagram</span>
                  </a>

                  {/* TikTok */}
                  <a
                    href="https://www.tiktok.com/@thecardsurgeon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="clay-pill-tiktok px-3.5 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer hover:scale-105 transition-transform"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/tiktok.svg"
                      alt="TikTok"
                      className="w-3.5 h-3.5 invert"
                    />
                    <span>TikTok</span>
                  </a>

                  {/* X (Twitter) */}
                  <a
                    href="https://x.com/thecardsurgeon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="clay-pill-twitter px-3.5 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer hover:scale-105 transition-transform"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/x.svg"
                      alt="X (Twitter)"
                      className="w-3.5 h-3.5 invert"
                    />
                    <span>X (Twitter)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Columns (Links) - 7 Cols */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 pt-2">
              {/* SERVICES Column */}
              <div>
                <h4 className="font-black italic uppercase tracking-wide text-amber-500 text-base sm:text-lg mb-3 drop-shadow-[0_1px_1px_rgba(217,119,6,0.25)]">
                  SERVICES
                </h4>
                <ul className="flex flex-col gap-2 font-medium text-slate-700 text-sm sm:text-[15px]">
                  <li>
                    <Link
                      href="/restoration"
                      className="hover:text-slate-950 hover:translate-x-1 inline-block transition-all"
                    >
                      Restoration
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/before-after"
                      className="hover:text-slate-950 hover:translate-x-1 inline-block transition-all"
                    >
                      Before & after
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pre-grade-prep"
                      className="hover:text-slate-950 hover:translate-x-1 inline-block transition-all"
                    >
                      Pre-Grade Prep
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/order"
                      className="hover:text-slate-950 hover:translate-x-1 inline-block transition-all"
                    >
                      Start an order
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/gift-cards"
                      className="hover:text-slate-950 hover:translate-x-1 inline-block transition-all"
                    >
                      Gift cards
                    </Link>
                  </li>
                </ul>
              </div>

              {/* HELP Column */}
              <div>
                <h4 className="font-black italic uppercase tracking-wide text-amber-500 text-base sm:text-lg mb-3 drop-shadow-[0_1px_1px_rgba(217,119,6,0.25)]">
                  HELP
                </h4>
                <ul className="flex flex-col gap-2 font-medium text-slate-700 text-sm sm:text-[15px]">
                  <li>
                    <Link
                      href="/how-it-works"
                      className="hover:text-slate-950 hover:translate-x-1 inline-block transition-all"
                    >
                      How it works
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="hover:text-slate-950 hover:translate-x-1 inline-block transition-all"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/track-order"
                      className="hover:text-slate-950 hover:translate-x-1 inline-block transition-all"
                    >
                      Track order
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/photo-guide"
                      className="hover:text-slate-950 hover:translate-x-1 inline-block transition-all"
                    >
                      Photo guide
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-slate-950 hover:translate-x-1 inline-block transition-all"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* COMPANY Column */}
              <div className="col-span-2 sm:col-span-1">
                <h4 className="font-black italic uppercase tracking-wide text-amber-500 text-base sm:text-lg mb-3 drop-shadow-[0_1px_1px_rgba(217,119,6,0.25)]">
                  COMPANY
                </h4>
                <ul className="flex flex-col gap-2 font-medium text-slate-700 text-sm sm:text-[15px]">
                  <li>
                    <Link
                      href="/login"
                      className="hover:text-slate-950 hover:translate-x-1 inline-block transition-all"
                    >
                      My account
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/estimated-grade"
                      className="hover:text-slate-950 hover:translate-x-1 inline-block transition-all"
                    >
                      Get Your Estimated Grade
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/the-card-surgeon-app"
                      className="hover:text-slate-950 hover:translate-x-1 inline-block transition-all"
                    >
                      The Card Surgeon app
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/creator-portal"
                      className="hover:text-slate-950 hover:translate-x-1 inline-block transition-all"
                    >
                      Creator portal
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="hover:text-slate-950 hover:translate-x-1 inline-block transition-all"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="hover:text-slate-950 hover:translate-x-1 inline-block transition-all"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Debossed / Inset Pill Bar */}
          <div className="mt-10 sm:mt-12 flex justify-center">
            <div className="clay-debossed-bar rounded-full py-2.5 px-6 sm:px-10 text-center text-xs sm:text-[13px] font-semibold text-slate-600 max-w-2xl w-full">
              © 2026 The Card Surgeon ·{" "}
              <Link href="/terms" className="hover:underline hover:text-slate-900 font-bold">
                Terms
              </Link>{" "}
              ·{" "}
              <Link href="/privacy" className="hover:underline hover:text-slate-900 font-bold">
                Privacy
              </Link>{" "}
              ·{" "}
              <Link href="/#employee" className="hover:underline hover:text-slate-900">
                Employee login
              </Link>{" "}
              ·{" "}
              <Link href="/login" className="hover:underline hover:text-slate-900">
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
