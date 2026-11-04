import type { Metadata } from "next";
import Navbar from "@/FrontEnd/Components/Navbar";
import Footer from "@/FrontEnd/Components/Footer";
import TheCardSurgeonApp from "@/FrontEnd/Front functions/App version/The Card Surgeon App";

export const metadata: Metadata = {
  title: "The Card Surgeon App | Beta Testing & Coming Soon",
  description:
    "The Card Surgeon app is in beta testing right now. Get an estimated grade and start an order right here on the website.",
};

export default function TheCardSurgeonAppPage() {
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
        <TheCardSurgeonApp />
      </main>

      <Footer />
    </div>
  );
}
