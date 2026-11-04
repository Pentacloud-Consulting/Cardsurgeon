import Navbar from "@/FrontEnd/Components/Navbar";
import Footer from "@/FrontEnd/Components/Footer";
import Hero from "@/FrontEnd/Home/Hero";
import WhyCardSurgeon from "@/FrontEnd/Home/Why Card Surgeon";
import WhoUsesUs from "@/FrontEnd/Home/Who uses us";
import OurServices from "@/FrontEnd/Home/Our services";
import Faq from "@/FrontEnd/Components/Faq";
import CTA from "@/FrontEnd/Components/CTA";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#d8f0ea] overflow-x-clip text-slate-800 flex flex-col justify-between">
      {/* =========================================================================
          AMBIENT CLAY 3D BACKDROP ORBS & GLOWS (Matching reference image)
         ========================================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        {/* Soft Mint / Pale Cyan Base Backdrop */}
        <div className="absolute top-0 inset-x-0 h-[650px] bg-gradient-to-b from-[#e3f6f1] via-[#d7eff1] to-[#eef5fc] opacity-80" />

        {/* Top-Right Soft Amber/Yellow Organic Clay Blob */}
        <div className="absolute -top-20 -right-20 w-[460px] h-[460px] rounded-full bg-gradient-to-br from-[#fef3c7] via-[#fde68a] to-[#fcd34d] opacity-55 blur-3xl transform scale-110" />

        {/* Top-Left Soft Sky Blue Clay Glow */}
        <div className="absolute -top-10 -left-10 w-[380px] h-[380px] rounded-full bg-gradient-to-br from-[#dbeafe] via-[#bfdbfe] to-[#93c5fd] opacity-50 blur-3xl" />

        {/* Ambient Floating Clay Sphere 1 (Bottom Left) */}
        <div className="absolute top-[480px] left-12 w-28 h-28 rounded-full bg-gradient-to-br from-[#cbe5ff] to-[#9fc5f8] opacity-70 blur-xl shadow-[inset_-6px_-6px_12px_rgba(30,80,160,0.25),inset_6px_6px_12px_rgba(255,255,255,0.9)]" />

        {/* Ambient Floating Clay Sphere 2 (Yellow Orb) */}
        <div className="absolute top-[320px] left-28 w-16 h-16 rounded-full bg-gradient-to-br from-[#fef08a] to-[#facc15] opacity-80 blur-[2px] shadow-[inset_-4px_-4px_8px_rgba(180,120,20,0.3),inset_4px_4px_8px_rgba(255,255,255,0.95),0_12px_24px_rgba(230,170,30,0.25)]" />

        {/* Ambient Floating Clay Sphere 3 (Bottom Center Peach) */}
        <div className="absolute top-[680px] left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-gradient-to-tr from-[#fed7aa] via-[#fde047] to-[#e0f2fe] opacity-45 blur-2xl" />

        {/* Ambient Bottom Right Yellow Glow for Footer */}
        <div className="absolute -bottom-20 -right-20 w-[460px] h-[460px] rounded-full bg-gradient-to-tl from-[#fef08a] via-[#fed7aa] to-[#e0f2fe] opacity-50 blur-3xl" />

        {/* Ambient Bottom Left Ice Blue Glow */}
        <div className="absolute -bottom-10 -left-10 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#cbe5ff] via-[#dbeafe] to-[#ffffff] opacity-60 blur-3xl" />
      </div>

      {/* =========================================================================
          THE CLAYMORPHIC NAVBAR
         ========================================================================= */}
      <Navbar />

      {/* =========================================================================
          MAIN CONTENT SECTIONS
         ========================================================================= */}
      <main className="relative z-10 w-full flex flex-col">
        {/* HERO SECTION */}
        <Hero />

        {/* WHY THE CARD SURGEON SECTION */}
        <WhyCardSurgeon />

        {/* WHO USES US SECTION */}
        <WhoUsesUs />

        {/* OUR SERVICES SECTION */}
        <OurServices />

        {/* FREQUENTLY ASKED QUESTIONS SECTION */}
        <Faq />

        {/* READY WHEN YOU ARE - CTA SECTION (Above Footer) */}
        <CTA />
      </main>

      {/* =========================================================================
          THE CLAYMORPHIC FOOTER
         ========================================================================= */}
      <Footer />
    </div>
  );
}
