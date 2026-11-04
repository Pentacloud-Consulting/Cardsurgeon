"use client";

import React from "react";
import ContactHero from "./ContactHero";
import ContactForm from "./ContactForm";
import ContactLocation from "./ContactLocation";
import ContactInstructions from "./ContactInstructions";
import ContactQuickInfo from "./ContactQuickInfo";

export default function ContactPageContent() {
  return (
    <div className="pt-28 sm:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col gap-10 sm:gap-12">
      {/* =========================================================================
          ROW 1: Image 1 (Header/Hero Text) on Left | Image 2 (Form) on Right
         ========================================================================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Side: Image 1 Content */}
        <div className="lg:col-span-5 flex flex-col">
          <ContactHero />
        </div>

        {/* Right Side: Image 2 Content */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </section>

      {/* =========================================================================
          ROW 2: Image 3 (Location Box) on Left | Image 4 (Instructions) on Right
         ========================================================================= */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Left Side: Image 3 Location Box */}
        <div className="flex">
          <ContactLocation />
        </div>

        {/* Right Side: Image 4 Mail-In Instructions Box */}
        <div className="flex">
          <ContactInstructions />
        </div>
      </section>

      {/* =========================================================================
          ROW 3: Image 5 (3 Quick Contact Cards) Below
         ========================================================================= */}
      <section className="w-full pt-2">
        <ContactQuickInfo />
      </section>
    </div>
  );
}

export { ContactHero, ContactForm, ContactLocation, ContactInstructions, ContactQuickInfo };
