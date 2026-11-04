import React from "react";
import { Metadata } from "next";
import Navbar from "@/FrontEnd/Components/Navbar";
import Footer from "@/FrontEnd/Components/Footer";
import BeforeAfterAll from "@/FrontEnd/Front functions/Before & After/BeforeAfterAll";

export const metadata: Metadata = {
  title: "Restoration Showcase · Before & After | The Card Surgeon",
  description: "Real card restoration before and after showcase. View our genuine bench restoration work with owner verification.",
};

export default function BeforeAfterPage() {
  return (
    <div className="min-h-screen bg-[#d8f0ea] flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      <Navbar />
      <main className="flex-1 pt-20 pb-16">
        <BeforeAfterAll />
      </main>
      <Footer />
    </div>
  );
}
