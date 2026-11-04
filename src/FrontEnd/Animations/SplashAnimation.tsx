"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function SplashAnimation() {
  const [isMounted, setIsMounted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [dimensions, setDimensions] = useState({ w: 1920, h: 1080 });

  const containerRef = useRef<HTMLDivElement>(null);
  const holeRef = useRef<SVGRectElement>(null);
  const borderRef = useRef<SVGRectElement>(null);
  const innerHighlightRef = useRef<SVGRectElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const leftTextRef = useRef<HTMLDivElement>(null);
  const rightTextRef = useRef<HTMLDivElement>(null);
  const textWrapperRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  // Measure viewport size on mount
  useEffect(() => {
    setIsMounted(true);
    const updateSize = () => {
      setDimensions({
        w: window.innerWidth || 1920,
        h: window.innerHeight || 1080,
      });
    };
    updateSize();
    window.addEventListener("resize", updateSize);

    // Lock page scroll during intro
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("resize", updateSize);
      document.body.style.overflow = "";
    };
  }, []);

  // Main GSAP Animation Sequence
  useEffect(() => {
    if (!isMounted) return;

    const W = dimensions.w;
    const H = dimensions.h;
    const cx = W / 2;
    const cy = H / 2;

    // Helper to update SVG mask & cute clay border attributes smoothly
    const updatePortal = (w: number, h: number, rx: number, opacity: number = 1) => {
      const x = cx - w / 2;
      const y = cy - h / 2;

      // Update cutout hole
      if (holeRef.current) {
        holeRef.current.setAttribute("x", x.toString());
        holeRef.current.setAttribute("y", y.toString());
        holeRef.current.setAttribute("width", Math.max(0, w).toString());
        holeRef.current.setAttribute("height", Math.max(0, h).toString());
        holeRef.current.setAttribute("rx", rx.toString());
        holeRef.current.setAttribute("ry", rx.toString());
      }

      // Update cute gradient outer border
      if (borderRef.current) {
        borderRef.current.setAttribute("x", x.toString());
        borderRef.current.setAttribute("y", y.toString());
        borderRef.current.setAttribute("width", Math.max(0, w).toString());
        borderRef.current.setAttribute("height", Math.max(0, h).toString());
        borderRef.current.setAttribute("rx", rx.toString());
        borderRef.current.setAttribute("ry", rx.toString());
        borderRef.current.setAttribute("opacity", opacity.toString());
      }

      // Update inner 3D specular gleam
      if (innerHighlightRef.current) {
        const inset = 2;
        const inW = Math.max(0, w - inset * 2);
        const inH = Math.max(0, h - inset * 2);
        const inRx = Math.max(0, rx - inset);
        innerHighlightRef.current.setAttribute("x", (cx - inW / 2).toString());
        innerHighlightRef.current.setAttribute("y", (cy - inH / 2).toString());
        innerHighlightRef.current.setAttribute("width", inW.toString());
        innerHighlightRef.current.setAttribute("height", inH.toString());
        innerHighlightRef.current.setAttribute("rx", inRx.toString());
        innerHighlightRef.current.setAttribute("ry", inRx.toString());
        innerHighlightRef.current.setAttribute("opacity", (opacity * 0.9).toString());
      }
    };

    // Initial state: hole is zero size, line is closed
    updatePortal(0, 0, 0, 0);

    const portalState = { w: 0, h: 0, rx: 0, borderOpacity: 0 };

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "";
          setIsComplete(true);
        },
      });
      tlRef.current = tl;

      // =======================================================================
      // STAGE 1: 3D ROTATE & LIQUID BOUNCE ENTRANCE FOR "CARD" (0.0s - 0.9s)
      // =======================================================================
      tl.set([leftTextRef.current, rightTextRef.current], {
        opacity: 0,
        scale: 0.2,
        rotationX: 55,
        rotationY: -20,
        y: 80,
        transformOrigin: "50% 50% -80px",
      });

      tl.set(lineRef.current, {
        scaleY: 0,
        opacity: 0,
      });

      // Liquid pop-in with 3D rotation
      tl.to([leftTextRef.current, rightTextRef.current], {
        opacity: 1,
        scale: 1.08,
        rotationX: 0,
        rotationY: 0,
        y: 0,
        duration: 0.65,
        ease: "back.out(2.2)",
      });

      // Liquid Gelatin Squash & Stretch Settle
      tl.to([leftTextRef.current, rightTextRef.current], {
        scaleX: 1.14,
        scaleY: 0.88,
        duration: 0.18,
        ease: "power2.inOut",
      });
      tl.to([leftTextRef.current, rightTextRef.current], {
        scaleX: 0.96,
        scaleY: 1.05,
        duration: 0.18,
        ease: "power2.inOut",
      });
      tl.to([leftTextRef.current, rightTextRef.current], {
        scaleX: 1,
        scaleY: 1,
        duration: 0.25,
        ease: "elastic.out(1.2, 0.4)",
      });

      // =======================================================================
      // STAGE 2: THE VERTICAL SEAM CUT APPEARS (Image 1 style) (0.9s - 1.25s)
      // Cute candy gradient cut line
      // =======================================================================
      tl.to(
        lineRef.current,
        {
          scaleY: 1,
          opacity: 1,
          duration: 0.35,
          ease: "power3.out",
        },
        "+=0.15"
      );

      // Small tension pause before split
      tl.to({}, { duration: 0.25 });

      // =======================================================================
      // STAGE 3: CAPSULE PORTAL OPENS (Image 2 style) (1.5s - 2.2s)
      // - "CA" moves left, "RD" moves right
      // - Vertical pill capsule opens in center revealing Hero Section video
      // =======================================================================
      const pillW = Math.min(150, W * 0.32);
      const pillH = Math.min(300, H * 0.48);
      const pillRx = pillW / 2;
      const textShift1 = pillW * 0.65 + 18;

      // Fade out vertical cut line as portal expands
      tl.to(
        lineRef.current,
        {
          opacity: 0,
          scaleY: 0.5,
          duration: 0.2,
        },
        "split"
      );

      tl.to(
        leftTextRef.current,
        {
          x: -textShift1,
          duration: 0.75,
          ease: "power3.inOut",
        },
        "split"
      );

      tl.to(
        rightTextRef.current,
        {
          x: textShift1,
          duration: 0.75,
          ease: "power3.inOut",
        },
        "split"
      );

      tl.to(
        portalState,
        {
          w: pillW,
          h: pillH,
          rx: pillRx,
          borderOpacity: 1,
          duration: 0.75,
          ease: "power3.inOut",
          onUpdate: () => {
            updatePortal(portalState.w, portalState.h, portalState.rx, portalState.borderOpacity);
          },
        },
        "split"
      );

      // =======================================================================
      // STAGE 4: EXPAND TO WIDE PANORAMIC OVAL (Image 3 style) (2.2s - 2.9s)
      // - Capsule stretches horizontally into a wide landscape window
      // - Text pushes further outwards
      // =======================================================================
      const wideW = Math.min(680, W * 0.72);
      const wideH = Math.min(360, H * 0.45);
      const wideRx = Math.min(180, wideH / 2);
      const textShift2 = wideW * 0.52 + 25;

      tl.to(
        leftTextRef.current,
        {
          x: -textShift2,
          duration: 0.75,
          ease: "power3.inOut",
        },
        "wideExpand"
      );

      tl.to(
        rightTextRef.current,
        {
          x: textShift2,
          duration: 0.75,
          ease: "power3.inOut",
        },
        "wideExpand"
      );

      tl.to(
        portalState,
        {
          w: wideW,
          h: wideH,
          rx: wideRx,
          borderOpacity: 1,
          duration: 0.75,
          ease: "power3.inOut",
          onUpdate: () => {
            updatePortal(portalState.w, portalState.h, portalState.rx, portalState.borderOpacity);
          },
        },
        "wideExpand"
      );

      // Hold brief moment for majestic visual
      tl.to({}, { duration: 0.25 });

      // =======================================================================
      // STAGE 5: FULLSCREEN BLAST REVEAL (2.9s - 3.6s)
      // - Portal blasts to full viewport size
      // - "CA" & "RD" glide off-screen with smooth fade
      // - White overlay smoothly fades out revealing full Home Page
      // =======================================================================
      const maxRadius = Math.hypot(W, H) * 1.5;

      tl.to(
        leftTextRef.current,
        {
          x: -W * 0.7,
          opacity: 0,
          duration: 0.7,
          ease: "power3.in",
        },
        "fullBlast"
      );

      tl.to(
        rightTextRef.current,
        {
          x: W * 0.7,
          opacity: 0,
          duration: 0.7,
          ease: "power3.in",
        },
        "fullBlast"
      );

      tl.to(
        portalState,
        {
          w: maxRadius,
          h: maxRadius,
          rx: maxRadius / 2,
          borderOpacity: 0,
          duration: 0.75,
          ease: "power3.in",
          onUpdate: () => {
            updatePortal(portalState.w, portalState.h, portalState.rx, portalState.borderOpacity);
          },
        },
        "fullBlast"
      );

      // Dissolve the remaining overlay
      tl.to(
        containerRef.current,
        {
          opacity: 0,
          duration: 0.45,
          ease: "power2.out",
        },
        "fullBlast+=0.4"
      );
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [isMounted, dimensions]);

  // Fast skip button for testing or impatient users
  const handleSkip = () => {
    if (tlRef.current) {
      tlRef.current.progress(1);
    } else {
      document.body.style.overflow = "";
      setIsComplete(true);
    }
  };

  if (!isMounted || isComplete) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] select-none pointer-events-auto"
      style={{ perspective: 1200 }}
    >
      {/* =======================================================================
          SVG MASK OVERLAY: PURE WHITE WITH REVEALING TRANSPARENT PORTAL
         ======================================================================= */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox={`0 0 ${dimensions.w} ${dimensions.h}`}
        preserveAspectRatio="none"
      >
        <defs>
          {/* Cute Multi-Tone Clay/Candy Gradient for the border */}
          <linearGradient id="cute-portal-border-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="28%" stopColor="#fbbf24" />
            <stop offset="60%" stopColor="#10b981" />
            <stop offset="85%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>

          {/* Cute Ambient Warm Glow Filter */}
          <filter id="cute-portal-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#f59e0b" floodOpacity="0.4" />
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#10b981" floodOpacity="0.3" />
          </filter>

          {/* Mask Definition */}
          <mask id="card-splash-portal-mask" maskUnits="userSpaceOnUse">
            {/* White base = keeps the white screen opaque */}
            <rect x="0" y="0" width={dimensions.w} height={dimensions.h} fill="#ffffff" />
            {/* Black hole = transparent cutout revealing the home page hero section! */}
            <rect
              ref={holeRef}
              x={dimensions.w / 2}
              y={dimensions.h / 2}
              width="0"
              height="0"
              rx="0"
              ry="0"
              fill="#000000"
            />
          </mask>
        </defs>

        {/* The White Screen with the Cutout Mask */}
        <rect
          x="0"
          y="0"
          width={dimensions.w}
          height={dimensions.h}
          fill="#ffffff"
          mask="url(#card-splash-portal-mask)"
        />

        {/* CUTE MULTI-COLOR CANDY/CLAY OUTER BORDER */}
        <rect
          ref={borderRef}
          x={dimensions.w / 2}
          y={dimensions.h / 2}
          width="0"
          height="0"
          rx="0"
          ry="0"
          fill="none"
          stroke="url(#cute-portal-border-gradient)"
          strokeWidth="6"
          strokeLinecap="round"
          filter="url(#cute-portal-glow)"
          opacity="0"
        />

        {/* CUTE 3D INNER SPECULAR GLEAM (White Clay Highlight) */}
        <rect
          ref={innerHighlightRef}
          x={dimensions.w / 2}
          y={dimensions.h / 2}
          width="0"
          height="0"
          rx="0"
          ry="0"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeOpacity="0.9"
          opacity="0"
        />
      </svg>

      {/* =======================================================================
          FOREGROUND TYPOGRAPHY & SEAM: "CA" | "RD"
         ======================================================================= */}
      <div
        ref={textWrapperRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
      >
        {/* Cute Gradient Seam Cut Line (Matches the cute theme!) */}
        <div
          ref={lineRef}
          className="absolute w-[4px] h-36 sm:h-48 md:h-60 bg-gradient-to-b from-[#f59e0b] via-[#10b981] to-[#06b6d4] rounded-full z-30 origin-center shadow-[0_0_14px_rgba(245,158,11,0.6)]"
        />

        {/* Left Side: "CA" */}
        <div
          ref={leftTextRef}
          className="font-black text-7xl sm:text-9xl md:text-[130px] lg:text-[160px] tracking-tight text-slate-950 uppercase pr-0.5 sm:pr-1 select-none leading-none inline-block drop-shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
          style={{ willChange: "transform, opacity" }}
        >
          CA
        </div>

        {/* Right Side: "RD" */}
        <div
          ref={rightTextRef}
          className="font-black text-7xl sm:text-9xl md:text-[130px] lg:text-[160px] tracking-tight text-slate-950 uppercase pl-0.5 sm:pl-1 select-none leading-none inline-block drop-shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
          style={{ willChange: "transform, opacity" }}
        >
          RD
        </div>
      </div>

      {/* =======================================================================
          TOP RIGHT SKIP BUTTON
         ======================================================================= */}
      <div className="absolute top-6 right-6 z-40">
        <button
          onClick={handleSkip}
          className="px-4 py-2 rounded-full bg-slate-100/80 hover:bg-slate-200/90 text-slate-700 text-xs font-black tracking-widest uppercase transition-all duration-200 backdrop-blur-md border border-slate-200/80 shadow-sm hover:scale-105 active:scale-95 cursor-pointer"
        >
          SKIP INTRO ✕
        </button>
      </div>
    </div>
  );
}
