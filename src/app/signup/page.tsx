import type { Metadata } from "next";
import Navbar from "@/FrontEnd/Components/Navbar";
import Footer from "@/FrontEnd/Components/Footer";
import Signup from "@/FrontEnd/Front functions/Signup/Signup";

export const metadata: Metadata = {
  title: "Sign Up | The Card Surgeon",
  description: "Create an account with The Card Surgeon to start submitting and tracking cards.",
};

export default function SignupPage() {
  return (
    <div className="relative min-h-screen bg-[#d8f0ea] overflow-x-clip text-slate-800 flex flex-col justify-between">
      {/* Ambient Clay Backdrop Orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 inset-x-0 h-[650px] bg-gradient-to-b from-[#e3f6f1] via-[#d7eff1] to-[#eef5fc] opacity-80" />
        <div className="absolute -top-20 -right-20 w-[460px] h-[460px] rounded-full bg-gradient-to-br from-[#fef3c7] via-[#fde68a] to-[#fcd34d] opacity-55 blur-3xl transform scale-110" />
        <div className="absolute -top-10 -left-10 w-[380px] h-[380px] rounded-full bg-gradient-to-br from-[#dbeafe] via-[#bfdbfe] to-[#93c5fd] opacity-50 blur-3xl" />
        <div className="absolute top-[480px] left-12 w-28 h-28 rounded-full bg-gradient-to-br from-[#cbe5ff] to-[#9fc5f8] opacity-70 blur-xl" />
        <div className="absolute top-[320px] left-28 w-16 h-16 rounded-full bg-gradient-to-br from-[#fef08a] to-[#facc15] opacity-80 blur-[2px]" />
        <div className="absolute -bottom-20 -right-20 w-[460px] h-[460px] rounded-full bg-gradient-to-tl from-[#fef08a] via-[#fed7aa] to-[#e0f2fe] opacity-50 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#cbe5ff] via-[#dbeafe] to-[#ffffff] opacity-60 blur-3xl" />
      </div>

      <Navbar />

      <main className="relative z-10 w-full flex-1 flex flex-col items-center justify-center pt-24 sm:pt-28 pb-10 sm:pb-14 px-4">
        <Signup />
      </main>

      <Footer />
    </div>
  );
}
