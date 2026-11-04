import React from "react";
import { Metadata } from "next";
import Navbar from "@/FrontEnd/Components/Navbar";
import Footer from "@/FrontEnd/Components/Footer";
import RestorationAll from "@/FrontEnd/Restoration/RestorationAll";

export const metadata: Metadata = {
  title: "Card Restoration · Repair & Clean | The Card Surgeon",
  description: "Trading card restoration for light creases, surface dents, edge lifts, and scratches. Professional collector grade repair.",
};

export default function RestorationPage() {
  return (
    <div className="min-h-screen bg-[#d8f0ea] flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      <Navbar />
      <main className="flex-1 pt-20 pb-16">
        <RestorationAll />
      </main>
      <Footer />
    </div>
  );
}
