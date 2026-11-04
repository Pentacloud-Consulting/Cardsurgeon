"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Wrench,
  Eye,
  Layers,
  ShieldCheck,
  Package,
  Gift,
  BookOpen,
  Shield,
  Download,
  User,
  ShoppingCart,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

interface DropdownItem {
  title: string;
  desc: string;
  href: string;
  icon: React.ElementType;
  tileClass: string;
  iconColor: string;
}

export default function Navbar() {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollY = useRef(0);

  // Smart reveal on scroll-up
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Check if page is scrolled past top
          if (currentScrollY > 30) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
            setIsVisible(true);
          }

          // When scrolling down past 80px, hide navbar
          if (currentScrollY > 80 && currentScrollY > lastScrollY.current + 8) {
            setIsVisible(false);
            setActiveMenu(null); // Close any open dropdowns when hiding
          }
          // When scrolling UP even a little bit, smoothly reveal navbar
          else if (currentScrollY < lastScrollY.current - 6) {
            setIsVisible(true);
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleMouseEnter = (menuName: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 220);
  };

  const toggleMenu = (menuName: string) => {
    setActiveMenu((prev) => (prev === menuName ? null : menuName));
  };

  // Dropdown data definitions based on the design
  const servicesItems: DropdownItem[] = [
    {
      title: "Restoration",
      desc: "Clean, repair & restore cards",
      href: "/restoration",
      icon: Wrench,
      tileClass: "clay-tile-blue",
      iconColor: "#3b82f6",
    },
    {
      title: "Pre-Grade Prep",
      desc: "Prepare cards for grading",
      href: "/pre-grade-prep",
      icon: Layers,
      tileClass: "clay-tile-blue",
      iconColor: "#2563eb",
    },
    {
      title: "Estimated Grade",
      desc: "Get a grade estimate",
      href: "/estimated-grade",
      icon: ShieldCheck,
      tileClass: "clay-tile-blue",
      iconColor: "#1d4ed8",
    },
    {
      title: "Before & After",
      desc: "Restoration showcase & reveal",
      href: "/before-after",
      icon: Eye,
      tileClass: "clay-tile-blue",
      iconColor: "#059669",
    },
  ];

  const ordersItems: DropdownItem[] = [
    {
      title: "Start An Order",
      desc: "Restoration & pre-grade prep",
      href: "/order",
      icon: ShoppingCart,
      tileClass: "clay-tile-yellow",
      iconColor: "#d97706",
    },
    {
      title: "Track Order",
      desc: "Check order status",
      href: "/track-order",
      icon: Package,
      tileClass: "clay-tile-yellow",
      iconColor: "#d97706",
    },
    {
      title: "Gift Cards",
      desc: "Buy a service as gift",
      href: "/gift-cards",
      icon: Gift,
      tileClass: "clay-tile-yellow",
      iconColor: "#d97706",
    },
  ];

  const resourcesItems: DropdownItem[] = [
    {
      title: "Downloads",
      desc: "Guides, forms & resources",
      href: "/downloads",
      icon: Download,
      tileClass: "clay-tile-yellow",
      iconColor: "#d97706",
    },
    {
      title: "Photo Guide",
      desc: "Card photography guidelines",
      href: "/photo-guide",
      icon: BookOpen,
      tileClass: "clay-tile-orange",
      iconColor: "#ea580c",
    },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 select-none pt-2 sm:pt-3 px-2 sm:px-4 lg:px-6 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div ref={navRef} className="w-full relative">
        {/* Main Floating Pill Navbar - Full Width Corner to Corner */}
        <div
          className={`clay-nav-container rounded-full px-5 sm:px-8 lg:px-10 py-2.5 sm:py-3 w-full flex items-center justify-between transition-all duration-300 ${
            isScrolled
              ? "shadow-[0_20px_40px_rgba(80,135,185,0.22),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-3px_5px_rgba(150,180,215,0.35)] backdrop-blur-xl"
              : ""
          }`}
        >
          {/* Logo & Brand */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
          >
            {/* 3D Clay Circular Logo Emblem */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full p-[2.5px] bg-gradient-to-tr from-amber-300 via-yellow-100 to-amber-400 shadow-[inset_0_2px_4px_rgba(255,255,255,0.9),0_3px_8px_rgba(180,130,20,0.3)] transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-gradient-to-b from-[#daf0f5] to-[#bde3ea] flex items-center justify-center overflow-hidden relative shadow-[inset_0_2px_4px_rgba(0,0,0,0.08)]">
                {/* Custom Card Surgeon Mascot SVG */}
                <svg
                  viewBox="0 0 64 64"
                  className="w-8 h-8 drop-shadow-sm"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Card Slab Body */}
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
                  {/* Inner Foil Shimmer */}
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
                  {/* Surgeon Mask / Cap */}
                  <path
                    d="M16 19C16 14 24 10 32 10C40 10 48 14 48 19V22H16V19Z"
                    fill="#22c55e"
                    stroke="#15803d"
                    strokeWidth="1.5"
                  />
                  {/* Medical Cross */}
                  <path
                    d="M32 13V17M30 15H34"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  {/* Surgical Scalpel / Needle tool */}
                  <path
                    d="M26 38L37 27M37 27L40 30M37 27L41 23"
                    stroke="#dc2626"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  {/* Sparkle Stars */}
                  <circle cx="24" cy="26" r="1.5" fill="#f59e0b" />
                  <circle cx="39" cy="42" r="1.5" fill="#f59e0b" />
                </svg>
              </div>
            </div>

            {/* Brand Title */}
            <span className="font-black italic text-base sm:text-xl tracking-tight text-slate-700 uppercase drop-shadow-sm font-sans whitespace-nowrap">
              THE CARD SURGEON
            </span>
          </Link>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-semibold text-slate-600 text-[15px]">
            {/* Services with Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => toggleMenu("services")}
                className={`flex items-center gap-1.5 transition-all duration-200 cursor-pointer px-3 py-1.5 rounded-full select-none ${
                  activeMenu === "services"
                    ? "text-slate-900 font-bold bg-white/80 shadow-[inset_0_1px_2px_rgba(0,0,0,0.06),0_2px_4px_rgba(255,255,255,0.9)]"
                    : "hover:text-slate-900 hover:bg-white/40"
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeMenu === "services" ? "rotate-180 text-blue-500" : ""
                  }`}
                />
              </button>

              {/* Services Dropdown anchored directly below button */}
              {activeMenu === "services" && (
                <div
                  className="absolute top-full pt-2.5 z-50 pointer-events-auto"
                  style={{
                    width: "320px",
                    left: "calc(50% - 160px)",
                  }}
                >
                  <div className="relative clay-dropdown-card clay-dropdown-animate rounded-[26px] p-3.5">
                    {/* Speech Arrow exactly pointing to Services button */}
                    <div className="clay-arrow" />

                    <div className="flex flex-col gap-1.5">
                      {servicesItems.map((item) => {
                        const IconComponent = item.icon;
                        return (
                          <Link
                            key={item.title}
                            href={item.href}
                            onClick={() => setActiveMenu(null)}
                            className="clay-item-row flex items-center gap-3.5 p-2.5 rounded-2xl transition-all"
                          >
                            <div
                              className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform ${item.tileClass}`}
                            >
                              <IconComponent
                                className="w-6 h-6"
                                style={{ color: item.iconColor }}
                                strokeWidth={2.4}
                              />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[15px] font-bold text-slate-800 leading-tight">
                                {item.title}
                              </span>
                              <span className="text-xs font-medium text-slate-500 mt-0.5">
                                {item.desc}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* How It Works (Direct Link) */}
            <Link
              href="/how-it-works"
              className="px-3 py-1.5 rounded-full transition-all duration-200 hover:text-slate-900 hover:bg-white/40 cursor-pointer select-none"
            >
              How It Works
            </Link>

            {/* Orders with Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter("orders")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => toggleMenu("orders")}
                className={`flex items-center gap-1.5 transition-all duration-200 cursor-pointer px-3 py-1.5 rounded-full select-none ${
                  activeMenu === "orders"
                    ? "text-slate-900 font-bold bg-white/80 shadow-[inset_0_1px_2px_rgba(0,0,0,0.06),0_2px_4px_rgba(255,255,255,0.9)]"
                    : "hover:text-slate-900 hover:bg-white/40"
                }`}
              >
                <span>Orders</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeMenu === "orders" ? "rotate-180 text-amber-500" : ""
                  }`}
                />
              </button>

              {/* Orders Dropdown anchored directly below button */}
              {activeMenu === "orders" && (
                <div
                  className="absolute top-full pt-2.5 z-50 pointer-events-auto"
                  style={{
                    width: "300px",
                    left: "calc(50% - 150px)",
                  }}
                >
                  <div className="relative clay-dropdown-card clay-dropdown-animate rounded-[26px] p-3.5">
                    {/* Speech Arrow */}
                    <div className="clay-arrow" />

                    <div className="flex flex-col gap-1.5">
                      {ordersItems.map((item) => {
                        const IconComponent = item.icon;
                        return (
                          <Link
                            key={item.title}
                            href={item.href}
                            onClick={() => setActiveMenu(null)}
                            className="clay-item-row flex items-center gap-3.5 p-2.5 rounded-2xl transition-all"
                          >
                            <div
                              className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform ${item.tileClass}`}
                            >
                              <IconComponent
                                className="w-6 h-6"
                                style={{ color: item.iconColor }}
                                strokeWidth={2.4}
                              />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[15px] font-bold text-slate-800 leading-tight">
                                {item.title}
                              </span>
                              <span className="text-xs font-medium text-slate-500 mt-0.5">
                                {item.desc}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Resources with Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter("resources")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => toggleMenu("resources")}
                className={`flex items-center gap-1.5 transition-all duration-200 cursor-pointer px-3 py-1.5 rounded-full select-none ${
                  activeMenu === "resources"
                    ? "text-slate-900 font-bold bg-white/80 shadow-[inset_0_1px_2px_rgba(0,0,0,0.06),0_2px_4px_rgba(255,255,255,0.9)]"
                    : "hover:text-slate-900 hover:bg-white/40"
                }`}
              >
                <span>Resources</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeMenu === "resources" ? "rotate-180 text-orange-500" : ""
                  }`}
                />
              </button>

              {/* Resources Dropdown anchored directly below button */}
              {activeMenu === "resources" && (
                <div
                  className="absolute top-full pt-2.5 z-50 pointer-events-auto"
                  style={{
                    width: "320px",
                    left: "calc(50% - 160px)",
                  }}
                >
                  <div className="relative clay-dropdown-card clay-dropdown-animate rounded-[26px] p-3.5">
                    {/* Speech Arrow */}
                    <div className="clay-arrow" />

                    <div className="flex flex-col gap-1.5">
                      {resourcesItems.map((item) => {
                        const IconComponent = item.icon;
                        return (
                          <Link
                            key={item.title}
                            href={item.href}
                            onClick={() => setActiveMenu(null)}
                            className="clay-item-row flex items-center gap-3.5 p-2.5 rounded-2xl transition-all"
                          >
                            <div
                              className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform ${item.tileClass}`}
                            >
                              <IconComponent
                                className="w-6 h-6"
                                style={{ color: item.iconColor }}
                                strokeWidth={2.4}
                              />
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[15px] font-bold text-slate-800 leading-tight">
                                {item.title}
                              </span>
                              <span className="text-xs font-medium text-slate-500 mt-0.5">
                                {item.desc}
                              </span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Contact (Direct Link) */}
            <Link
              href="/contact"
              className={`px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer select-none ${
                pathname === "/contact"
                  ? "text-slate-900 font-bold bg-white/80 shadow-[inset_0_1px_2px_rgba(0,0,0,0.06),0_2px_4px_rgba(255,255,255,0.9)]"
                  : "hover:text-slate-900 hover:bg-white/40"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* User Profile Circular Clay Button */}
            <Link
              href="/login"
              aria-label="User Profile / Login"
              className={`clay-btn-circle w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                pathname === "/login" || pathname === "/signup"
                  ? "ring-2 ring-blue-400 text-blue-600 scale-105 shadow-[0_8px_18px_rgba(59,130,246,0.3)]"
                  : "text-slate-600 hover:text-slate-800"
              }`}
            >
              <User className="w-5 h-5 stroke-[2.2]" />
            </Link>

            {/* Start Order Pill Clay Button */}
            <Link
              href="/order"
              className="clay-btn-gold rounded-full px-4 sm:px-5 py-2 sm:py-2.5 flex items-center gap-2 font-bold text-amber-950 text-xs sm:text-sm tracking-wide"
            >
              <ShoppingCart className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.4]" />
              <span className="whitespace-nowrap">Start Order</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden clay-btn-circle w-10 h-10 rounded-full flex items-center justify-center text-slate-700"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 stroke-[2.4]" />
              ) : (
                <Menu className="w-5 h-5 stroke-[2.4]" />
              )}
            </button>
          </div>
        </div>

        {/* =========================================================================
            MOBILE ACCORDION / CLAY MENU
           ========================================================================= */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 clay-dropdown-card rounded-[28px] p-5 shadow-2xl animate-in fade-in slide-in-from-top-3">
            {/* Services Category */}
            <div className="border-b border-slate-200/60 pb-3 mb-3">
              <button
                type="button"
                onClick={() =>
                  setMobileExpandedSection(
                    mobileExpandedSection === "services" ? null : "services"
                  )
                }
                className="w-full flex items-center justify-between text-base font-bold text-slate-800 py-1"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 transition-transform ${
                    mobileExpandedSection === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileExpandedSection === "services" && (
                <div className="mt-2.5 flex flex-col gap-2 pl-2">
                  {servicesItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-100/70"
                      >
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.tileClass}`}
                        >
                          <Icon
                            className="w-5 h-5"
                            style={{ color: item.iconColor }}
                          />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-800">
                            {item.title}
                          </div>
                          <div className="text-xs text-slate-500">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* How It Works Link */}
            <div className="border-b border-slate-200/60 pb-3 mb-3">
              <Link
                href="/how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-bold text-slate-800 py-1"
              >
                How It Works
              </Link>
            </div>

            {/* Orders Category */}
            <div className="border-b border-slate-200/60 pb-3 mb-3">
              <button
                type="button"
                onClick={() =>
                  setMobileExpandedSection(
                    mobileExpandedSection === "orders" ? null : "orders"
                  )
                }
                className="w-full flex items-center justify-between text-base font-bold text-slate-800 py-1"
              >
                <span>Orders</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 transition-transform ${
                    mobileExpandedSection === "orders" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileExpandedSection === "orders" && (
                <div className="mt-2.5 flex flex-col gap-2 pl-2">
                  {ordersItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-100/70"
                      >
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.tileClass}`}
                        >
                          <Icon
                            className="w-5 h-5"
                            style={{ color: item.iconColor }}
                          />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-800">
                            {item.title}
                          </div>
                          <div className="text-xs text-slate-500">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Resources Category */}
            <div className="border-b border-slate-200/60 pb-3 mb-3">
              <button
                type="button"
                onClick={() =>
                  setMobileExpandedSection(
                    mobileExpandedSection === "resources" ? null : "resources"
                  )
                }
                className="w-full flex items-center justify-between text-base font-bold text-slate-800 py-1"
              >
                <span>Resources</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 transition-transform ${
                    mobileExpandedSection === "resources" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileExpandedSection === "resources" && (
                <div className="mt-2.5 flex flex-col gap-2 pl-2">
                  {resourcesItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-100/70"
                      >
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.tileClass}`}
                        >
                          <Icon
                            className="w-5 h-5"
                            style={{ color: item.iconColor }}
                          />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-800">
                            {item.title}
                          </div>
                          <div className="text-xs text-slate-500">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Contact Link */}
            <div className="border-b border-slate-200/60 pb-3 mb-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-base font-bold py-1 ${
                  pathname === "/contact" ? "text-blue-600" : "text-slate-800"
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Account / Login Link */}
            <div className="border-b border-slate-200/60 pb-3 mb-3">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-2 text-base font-bold py-1 ${
                  pathname === "/login" || pathname === "/signup"
                    ? "text-blue-600"
                    : "text-slate-800"
                }`}
              >
                <User className="w-5 h-5 text-blue-500" />
                <span>My Account / Login</span>
              </Link>
            </div>

            {/* Mobile CTA */}
            <div className="pt-2">
              <Link
                href="/order"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full clay-btn-gold rounded-full py-3 flex items-center justify-center gap-2 font-bold text-amber-950 text-sm shadow-md"
              >
                <ShoppingCart className="w-5 h-5 stroke-[2.4]" />
                <span>Start Order</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
