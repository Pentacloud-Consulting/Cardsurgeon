import React from "react";
import { Metadata } from "next";
import Navbar from "@/FrontEnd/Components/Navbar";
import Footer from "@/FrontEnd/Components/Footer";
import StartOrderContainer from "@/FrontEnd/Orders/Start Order/StartOrderContainer";

export const metadata: Metadata = {
  title: "Start an Order | The Card Surgeon",
  description: "Trading card restoration and pre-grade prep order submission. Clean, repair, and prepare your sports and TCG cards.",
};

export default function OrderPage() {
  return (
    <div className="min-h-screen bg-[#d8f0ea] flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        <StartOrderContainer />
      </main>
      <Footer />
    </div>
  );
}
