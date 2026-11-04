"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { User, Lock, Eye, EyeOff, Heart, ArrowRight, ShieldCheck } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Welcome back! Logged in successfully.");
    }, 800);
  };

  return (
    <div className="w-full flex items-center justify-center py-2 sm:py-4">
      {/* Landscape Clay Card Container */}
      <div className="relative w-full max-w-[840px] rounded-[36px] sm:rounded-[44px] bg-gradient-to-b from-white/95 via-[#f6faff]/90 to-[#eaf2fb]/95 p-6 sm:p-8 lg:p-9 shadow-[0_26px_50px_-10px_rgba(80,135,185,0.25),0_10px_20px_-5px_rgba(95,145,200,0.12),inset_0_3px_6px_rgba(255,255,255,1),inset_0_-4px_8px_rgba(160,190,225,0.3)] border border-white">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* =========================================================================
              LEFT COLUMN: Character & Welcome Details (Landscape Left)
             ========================================================================= */}
          <div className="md:col-span-5 flex flex-col items-center text-center">
            {/* Top Clay Heart Badge */}
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-rose-300 to-rose-400 p-[2px] shadow-[0_4px_10px_rgba(244,63,94,0.3),inset_0_2px_3px_rgba(255,255,255,0.9)] flex items-center justify-center mb-2.5">
              <Heart className="w-4 h-4 fill-white text-white drop-shadow-sm" />
            </div>

            {/* Heading */}
            <div className="inline-flex items-center gap-1.5 mb-1">
              <span className="text-amber-400 text-sm font-black select-none">✦</span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
                Welcome Back
              </h1>
              <span className="text-amber-400 text-sm font-black select-none">✦</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 font-semibold max-w-xs">
              Login to access your card vault & track live restorations
            </p>

            {/* 3D Character Illustration */}
            <div className="relative w-44 sm:w-52 h-44 sm:h-52 my-1 select-none pointer-events-none">
              <Image
                src="/sign-login/Sign-login.png"
                alt="Card Surgeon Welcome"
                fill
                priority
                className="object-contain drop-shadow-[0_12px_22px_rgba(50,90,135,0.22)]"
              />
            </div>

            {/* Trust Chip */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-white text-[11px] font-bold text-slate-600 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Insured Vault & dual 4K intake</span>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: Inner Form (Landscape Right)
             ========================================================================= */}
          <div className="md:col-span-7">
            <div className="relative rounded-[30px] bg-white/90 backdrop-blur-md p-5 sm:p-7 shadow-[0_12px_28px_rgba(80,135,185,0.16),inset_0_2px_4px_rgba(255,255,255,1),inset_0_-3px_5px_rgba(160,190,225,0.2)] border border-white/80">
              <form onSubmit={handleSubmit} autoComplete="off" className="flex flex-col gap-3.5">
                {/* Email or Username */}
                <div className="relative flex items-center rounded-2xl bg-[#f2f7fd] border border-white/90 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05),0_1px_2px_rgba(255,255,255,0.9)] p-1.5 focus-within:ring-2 focus-within:ring-blue-400 transition-all">
                  <div className="w-9 h-9 rounded-xl clay-tile-blue flex items-center justify-center shrink-0">
                    <User className="w-4 h-4 text-blue-600" strokeWidth={2.4} />
                  </div>
                  <input
                    type="text"
                    required
                    autoComplete="off"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder="Email or Username"
                    className="w-full px-3 py-1.5 text-sm font-semibold text-slate-800 placeholder:text-slate-400 bg-transparent focus:outline-none"
                  />
                </div>

                {/* Password */}
                <div className="relative flex items-center rounded-2xl bg-[#f2f7fd] border border-white/90 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05),0_1px_2px_rgba(255,255,255,0.9)] p-1.5 focus-within:ring-2 focus-within:ring-blue-400 transition-all">
                  <div className="w-9 h-9 rounded-xl clay-tile-blue flex items-center justify-center shrink-0">
                    <Lock className="w-4 h-4 text-blue-600" strokeWidth={2.4} />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full px-3 py-1.5 text-sm font-semibold text-slate-800 placeholder:text-slate-400 bg-transparent focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="p-1.5 text-slate-400 hover:text-slate-600 focus:outline-none cursor-pointer"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Forgot Password */}
                <div className="flex justify-end -mt-1">
                  <Link
                    href="/forgot-password"
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Forgot Password?
                  </Link>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-2xl clay-btn-gold text-amber-950 font-black text-base shadow-[0_8px_18px_rgba(230,165,30,0.35)] flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-75"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-amber-950 border-t-transparent rounded-full animate-spin" />
                      Logging in...
                    </span>
                  ) : (
                    <span>Login</span>
                  )}
                </button>

                {/* Divider */}
                <div className="flex items-center gap-3 my-1">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-slate-200" />
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider select-none shrink-0">
                    or continue with
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent via-slate-300 to-slate-200" />
                </div>

                {/* Social Clay Circular Buttons */}
                <div className="flex items-center justify-center gap-4">
                  {/* Google */}
                  <button
                    type="button"
                    className="clay-btn-circle w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
                    aria-label="Continue with Google"
                  >
                    <svg className="w-4.5 h-4.5" viewBox="0 0 24 24">
                      <path
                        fill="#EA4335"
                        d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z"
                      />
                      <path
                        fill="#4285F4"
                        d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5.1 3.7-8.8z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.1-1.6.4-2.3L1.9 7.3C.7 9.7 0 12.3 0 15.2s.7 5.5 1.9 7.9l3.7-2.9z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23.5c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2-6.4-4.8L1.9 16.9C3.7 20.6 7.5 23.5 12 23.5z"
                      />
                    </svg>
                  </button>

                  {/* Apple */}
                  <button
                    type="button"
                    className="clay-btn-circle w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
                    aria-label="Continue with Apple"
                  >
                    <svg className="w-4.5 h-4.5 fill-slate-800" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.06 1.71-.93 2.73 1.01.08 2.03-.49 2.63-1.23z" />
                    </svg>
                  </button>

                  {/* Facebook */}
                  <button
                    type="button"
                    className="clay-btn-circle w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
                    aria-label="Continue with Facebook"
                  >
                    <svg className="w-4.5 h-4.5 fill-[#1877F2]" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </button>
                </div>

                {/* Switch to Sign Up */}
                <div className="text-center pt-1.5">
                  <span className="text-xs font-semibold text-slate-500">
                    Don’t have an account?{" "}
                  </span>
                  <Link
                    href="/signup"
                    className="text-xs font-black text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center gap-0.5"
                  >
                    <span>Sign Up</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
