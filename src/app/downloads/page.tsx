import type { Metadata } from "next";
import Navbar from "@/FrontEnd/Components/Navbar";
import Footer from "@/FrontEnd/Components/Footer";
import DownloadsAll from "@/FrontEnd/Front functions/Downloads/DownloadsAll";

export const metadata: Metadata = {
  title: "Downloads & Resources | The Card Surgeon",
  description:
    "Official Card Surgeon downloads: printable card submission forms, packing slips, and collector prep checklists.",
};

export default function DownloadsPage() {
  return (
    <div className="relative min-h-screen bg-[#d8f0ea] overflow-x-clip text-slate-800 flex flex-col justify-between">
      {/* Ambient Clay Backdrop Orbs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e3f6f1] via-[#d7eff1] to-[#d8f0ea]" />
        <div className="absolute -top-20 -right-20 w-[460px] h-[460px] rounded-full bg-gradient-to-br from-[#fef3c7] via-[#fde68a] to-[#fcd34d] opacity-55 blur-3xl transform scale-110" />
        <div className="absolute -top-10 -left-10 w-[380px] h-[380px] rounded-full bg-gradient-to-br from-[#dbeafe] via-[#bfdbfe] to-[#93c5fd] opacity-50 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-[460px] h-[460px] rounded-full bg-gradient-to-tl from-[#fef08a] via-[#fed7aa] to-[#e0f2fe] opacity-50 blur-3xl" />
      </div>

      <Navbar />

      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16 flex flex-col items-center">
        <DownloadsAll />
      </main>

      <Footer />
    </div>
  );
}
