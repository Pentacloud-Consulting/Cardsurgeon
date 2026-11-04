import type { Metadata } from "next";
import Navbar from "@/FrontEnd/Components/Navbar";
import Footer from "@/FrontEnd/Components/Footer";
import ContactPageContent from "@/FrontEnd/Contact";

export const metadata: Metadata = {
  title: "Contact Us | The Card Surgeon",
  description:
    "Get in touch with The Card Surgeon. Contact our lab for card cleaning, restoration, and grading prep consultations.",
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#d8f0ea] overflow-x-clip text-slate-800 flex flex-col justify-between">
      {/* =========================================================================
          AMBIENT CLAY 3D BACKDROP ORBS & GLOWS (Matching Home Page)
         ========================================================================= */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        {/* Soft Mint / Pale Cyan Base Backdrop */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#e3f6f1] via-[#d7eff1] to-[#d8f0ea]" />

        {/* Top-Right Soft Amber/Yellow Organic Clay Blob */}
        <div className="absolute -top-20 -right-20 w-[460px] h-[460px] rounded-full bg-gradient-to-br from-[#fef3c7] via-[#fde68a] to-[#fcd34d] opacity-55 blur-3xl transform scale-110" />

        {/* Top-Left Soft Sky Blue Clay Glow */}
        <div className="absolute -top-10 -left-10 w-[380px] h-[380px] rounded-full bg-gradient-to-br from-[#dbeafe] via-[#bfdbfe] to-[#93c5fd] opacity-50 blur-3xl" />

        {/* Ambient Floating Clay Sphere 1 (Bottom Left) */}
        <div className="absolute top-[480px] left-12 w-28 h-28 rounded-full bg-gradient-to-br from-[#cbe5ff] to-[#9fc5f8] opacity-70 blur-xl shadow-[inset_-6px_-6px_12px_rgba(30,80,160,0.25),inset_6px_6px_12px_rgba(255,255,255,0.9)]" />

        {/* Ambient Floating Clay Sphere 2 (Yellow Orb) */}
        <div className="absolute top-[320px] left-28 w-16 h-16 rounded-full bg-gradient-to-br from-[#fef08a] to-[#facc15] opacity-80 blur-[2px] shadow-[inset_-4px_-4px_8px_rgba(180,120,20,0.3),inset_4px_4px_8px_rgba(255,255,255,0.95),0_12px_24px_rgba(230,170,30,0.25)]" />

        {/* Ambient Floating Clay Sphere 3 (Center Peach) */}
        <div className="absolute top-[680px] left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-gradient-to-tr from-[#fed7aa] via-[#fde047] to-[#e0f2fe] opacity-45 blur-2xl" />

        {/* Bottom Right Yellow Glow for Footer */}
        <div className="absolute -bottom-20 -right-20 w-[460px] h-[460px] rounded-full bg-gradient-to-tl from-[#fef08a] via-[#fed7aa] to-[#e0f2fe] opacity-50 blur-3xl" />

        {/* Bottom Left Ice Blue Glow */}
        <div className="absolute -bottom-10 -left-10 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#cbe5ff] via-[#dbeafe] to-[#ffffff] opacity-60 blur-3xl" />
      </div>

      {/* =========================================================================
          THE CLAYMORPHIC NAVBAR
         ========================================================================= */}
      <Navbar />

      {/* =========================================================================
          CONTACT PAGE CONTENT
         ========================================================================= */}
      <main className="relative z-10 w-full flex flex-col">
        <ContactPageContent />
      </main>

      {/* =========================================================================
          THE CLAYMORPHIC FOOTER
         ========================================================================= */}
      <Footer />
    </div>
  );
}
