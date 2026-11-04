"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ChevronDown, HelpCircle, X } from "lucide-react";

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: "ordering-1",
    category: "Ordering",
    question: "How do I place an order?",
    answer: "Choose a service, add each card with photos, pick shipping, review, and sign.",
  },
  {
    id: "ordering-2",
    category: "Ordering",
    question: "Can I mix tiers in one order?",
    answer:
      "Yes, up to 2 tiers per order. Each tier ships back separately when it is done, so a mixed-tier order pays for a return label for each tier, and return insurance (if you buy it both ways) covers each package at the declared value of the cards in it.",
  },
  {
    id: "shipping-1",
    category: "Shipping",
    question: "Do you provide a shipping label?",
    answer:
      "You can choose a prepaid two-way label or ship the cards yourself. Either way, packages come to our office: TCS, 1860 Barnett Shoals Rd Ste 103, Athens, GA 30605. Use a tracked method and put your order number inside the package.",
  },
  {
    id: "shipping-2",
    category: "Shipping",
    question: "Where do I send my cards?",
    answer:
      "Ship them to TCS, 1860 Barnett Shoals Rd Ste 103, Athens, GA 30605 ((706) 765-4280). A prepaid label is addressed there. If you use your own carrier, send it tracked and include your order number in the box.",
  },
  {
    id: "shipping-3",
    category: "Shipping",
    question: "Is insurance required?",
    answer:
      "Transit insurance at checkout is optional — you choose to buy or decline it. Damage while cards are with us is very rare, but restoration and handling still carry risk. If a card is damaged in our care, we are responsible up to the declared value on your submission form, limited as stated in Terms §8B.6. We hold no liability for cards while they are being shipped to us or after they leave our facility, and we are not responsible for lost, damaged, or stolen packages in transit either way. DRAFT — see Terms (Georgia law).",
  },
  {
    id: "shipping-4",
    category: "Shipping",
    question: "What if a card is lost, damaged, or stolen?",
    answer:
      "In transit to us or back to you: we hold no liability for collectibles, cards, or items in shipping, and we are not responsible for lost, damaged, or stolen packages either way — file with the carrier/insurer if you bought transit coverage. While in our care: damage is very rare but risks remain; we are responsible up to the listed/declared value on the submission form, limited as stated in Terms §8B.6. Under-declaring may leave you under-covered. DRAFT — attorney review pending; see Terms §§ declared values, shipping, and governing law (Georgia).",
  },
  {
    id: "shipping-5",
    category: "Shipping",
    question: "Where do you ship?",
    answer:
      "We ship within the United States. Send your cards to our Athens office: TCS, 1860 Barnett Shoals Rd Ste 103, Athens, GA 30605.",
  },
  {
    id: "pricing-1",
    category: "Pricing",
    question: "How is pricing calculated?",
    answer:
      "Per card, by tier and declared value. Tax is based on your shipping address.",
  },
  {
    id: "pricing-2",
    category: "Pricing",
    question: "Do you offer gift cards?",
    answer: "Yes, see the Gift Cards page.",
  },
  {
    id: "restoration-1",
    category: "Restoration",
    question: "What can you restore?",
    answer:
      "We take on light creases, dents, edge lifts, corner lifts, surface scratches and hazes, and impressions. We do not do whitening fixes, coloration, polishing Lugia 1st Edition cards, severe creases, creases with whitening inside or that go 100% through the card, or any trimming, cutting or shaving, for centering or any other reason. Taking on a card is not a promise of any result: results depend on the card. See the Restoration page for the full list.",
  },
  {
    id: "restoration-2",
    category: "Restoration",
    question: "What happens if I send a card for work you don't do?",
    answer:
      "Cards sent for work on our Not Included list are subject to return on arrival. We may send them back without doing any work, and shipping is not refundable. The service fee for work not performed is refunded under Terms §9. If a card is submitted for both included and excluded work, we return it unworked unless you OK the included work in writing. See Terms §8A.",
  },
  {
    id: "pregrade-1",
    category: "Pre-Grade Prep",
    question: "What does Pre-Grade Prep include?",
    answer:
      "Cleaning, polish, a penny sleeve, and a semi-rigid holder, with a pre-grade (our condition opinion of the card) included at no extra charge. There are no add-ons. A pre-grade is an estimate, not a guarantee of any grade from a grading company. It does not include crease work, dent removal, edge and corner work, or any other restorative work. For that, see Restoration.",
  },
  {
    id: "pregrade-2",
    category: "Pre-Grade Prep",
    question: "How is Pre-Grade Prep priced?",
    answer:
      "Cards under $1,500 are a flat $25 per card. 20 or more cards in one order are $20 per card for those cards under $1,500. Same Day is $30 per card, cards under $1,500 only, and those cards arrive by same-day delivery or in-person drop-off at TCS, 1860 Barnett Shoals Rd Ste 103, Athens, GA 30605 (no prepaid inbound label). At $1,500 and over, the price is 1.5% of declared value (minimum $25). Every tier includes the pre-grade, and there are no add-ons.",
  },
  {
    id: "turnaround-1",
    category: "Turnaround",
    question: "How long does it take?",
    answer:
      "Economy restoration takes 30 business days and Standard restoration takes 21–30 business days, counted from when your cards arrive. High Value restoration is 5–10 business days for cards up to $14,999. Super Saiyan restoration is 5 business days for cards of $15,000 and up. Light Speed is 5–8 business days. Express and Pre-Grade Prep list their own turnaround on each tier.",
  },
  {
    id: "account-1",
    category: "Account",
    question: "Do I need an account?",
    answer:
      "No, guest checkout is supported. An account lets you track your orders and keep a collection of your cards.",
  },
  {
    id: "account-2",
    category: "Account",
    question: "Do I need to place an order to add cards to my collection?",
    answer:
      "No. Log in to My Account and add cards under My Collection or on the Get Your Estimated Grade page. Adding a card does not need an order, and there is nothing to pay and nothing to ship. Photos are optional.",
  },
  {
    id: "estimated-grade-1",
    category: "Estimated Grade",
    question: "Do I have to send you my card for Get Your Estimated Grade?",
    answer:
      "No. Get Your Estimated Grade works from the 16 photos you upload, and your card stays with you. Your estimated grade shows in your collection once your payment goes through; if a photo isn't clear enough, we'll ask you to retake it. Most estimates appear right away. Some cards are held for a closer look by our team before any estimate is shown, and those can take longer. Our team may review and change any estimate. These times are goals, not promises. It is an estimate only, results depend on the card and your photos, and it is not a guarantee of any grade from a grading company. If you want us to work on the card in hand, choose Pre-Grade Prep or Card Restoration, which are shipped to us.",
  },
];

const CATEGORIES = [
  "All",
  "Ordering",
  "Shipping",
  "Pricing",
  "Restoration",
  "Pre-Grade Prep",
  "Turnaround",
  "Account",
  "Estimated Grade",
];

const CATEGORY_STYLES: Record<string, { bg: string; text: string; border: string }> = {
  Ordering: { bg: "bg-blue-100/90", text: "text-blue-900", border: "border-blue-200" },
  Shipping: { bg: "bg-sky-100/90", text: "text-sky-900", border: "border-sky-200" },
  Pricing: { bg: "bg-amber-100/90", text: "text-amber-900", border: "border-amber-200" },
  Restoration: { bg: "bg-purple-100/90", text: "text-purple-900", border: "border-purple-200" },
  "Pre-Grade Prep": { bg: "bg-emerald-100/90", text: "text-emerald-900", border: "border-emerald-200" },
  Turnaround: { bg: "bg-orange-100/90", text: "text-orange-900", border: "border-orange-200" },
  Account: { bg: "bg-teal-100/90", text: "text-teal-900", border: "border-teal-200" },
  "Estimated Grade": { bg: "bg-indigo-100/90", text: "text-indigo-900", border: "border-indigo-200" },
};

export default function FAQAll() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredFAQs = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return FAQ_DATA.filter((item) => {
      const matchCat =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchQuery =
        !q ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section className="w-full max-w-5xl mx-auto flex flex-col gap-8 sm:gap-10">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-200/80 text-emerald-800 text-xs font-black uppercase tracking-wider shadow-xs">
          <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
          <span>HELP & FREQUENTLY ASKED QUESTIONS</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black italic uppercase tracking-wider text-emerald-800 drop-shadow-[0_2px_2px_rgba(255,255,255,0.9)] leading-none">
          FAQ
        </h1>

        <p className="text-slate-600 font-medium text-sm sm:text-base max-w-xl">
          Everything you need to know about card restoration, pre-grade prep, shipping, pricing, and our online digital tools.
        </p>
      </div>

      {/* 3D Clay Search Input */}
      <div className="relative w-full max-w-2xl mx-auto">
        <div className="relative rounded-full bg-white/95 p-1.5 shadow-[0_12px_28px_-6px_rgba(100,145,195,0.22),inset_0_2px_4px_rgba(255,255,255,0.95),inset_0_-2.5px_4px_rgba(160,190,225,0.3)] border-2 border-white flex items-center">
          <div className="pl-4 pr-2 text-slate-400">
            <Search className="w-5 h-5 text-emerald-700" />
          </div>

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions or keywords..."
            className="w-full bg-transparent py-2.5 text-sm sm:text-base font-semibold text-slate-800 placeholder:text-slate-400 focus:outline-none"
          />

          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="mr-2 p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-4 sm:px-5 py-2 font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 cursor-pointer select-none ${
                isSelected
                  ? "clay-hero-btn-yellow text-[#3d2400] font-black scale-105 shadow-[0_12px_24px_-4px_rgba(230,165,30,0.45),inset_0_3px_5px_rgba(255,255,255,0.95),inset_0_-3px_6px_rgba(190,125,15,0.4)] border border-amber-200"
                  : "bg-gradient-to-b from-white via-[#f8fafc] to-[#edf4fc] text-slate-700 hover:text-slate-950 shadow-[0_6px_14px_-3px_rgba(100,145,195,0.18),inset_0_2px_4px_rgba(255,255,255,0.95),inset_0_-2px_4px_rgba(160,190,225,0.3)] border border-white hover:scale-105 active:scale-95"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* FAQ Items List */}
      <div className="flex flex-col gap-4">
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map((item) => {
            const isExpanded = !!expandedIds[item.id];
            const badgeStyle =
              CATEGORY_STYLES[item.category] || {
                bg: "bg-slate-100",
                text: "text-slate-800",
                border: "border-slate-200",
              };

            return (
              <div
                key={item.id}
                className="clay-footer-card rounded-[22px] sm:rounded-[28px] p-5 sm:p-6 shadow-md border-2 border-white transition-all duration-200"
              >
                {/* Accordion Trigger */}
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-start justify-between gap-4 text-left cursor-pointer select-none"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                    <span className="text-base sm:text-lg font-black italic uppercase text-slate-900 tracking-wide">
                      {item.question}
                    </span>

                    <span
                      className={`inline-block w-fit px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-wider border ${badgeStyle.bg} ${badgeStyle.text} ${badgeStyle.border}`}
                    >
                      {item.category}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full bg-white/90 border border-slate-200 flex items-center justify-center shrink-0 shadow-xs transition-transform duration-200 ${
                      isExpanded ? "rotate-180 bg-amber-50 border-amber-200" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 text-slate-700" />
                  </div>
                </button>

                {/* Expanded Answer */}
                {isExpanded && (
                  <div className="mt-3.5 pt-3.5 border-t border-slate-200/70 text-slate-700 text-xs sm:text-sm font-medium leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="clay-footer-card rounded-[28px] p-10 text-center flex flex-col items-center justify-center gap-3">
            <HelpCircle className="w-10 h-10 text-slate-400" />
            <h3 className="text-lg font-black italic uppercase text-slate-800">
              No matching questions found
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              We couldn&apos;t find any FAQs matching &ldquo;{searchQuery}&rdquo;. Try another keyword or reset the category filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-2 clay-hero-btn-yellow rounded-full px-6 py-2.5 text-xs font-black uppercase tracking-wider text-[#3d2400]"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Need More Help Footer Card */}
      <div className="clay-footer-card rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 border-2 border-white shadow-lg bg-gradient-to-br from-white via-slate-50 to-emerald-50/40 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div className="flex flex-col gap-1">
          <span className="text-[11px] font-black uppercase tracking-widest text-emerald-800">
            Still Have Questions?
          </span>
          <h3 className="text-xl sm:text-2xl font-black italic uppercase text-slate-900">
            WE ARE HERE TO HELP
          </h3>
          <p className="text-xs sm:text-sm font-medium text-slate-600">
            Email our support team at{" "}
            <a
              href="mailto:admin@thecardsurgeon.com"
              className="text-emerald-700 font-bold underline hover:text-emerald-900"
            >
              admin@thecardsurgeon.com
            </a>{" "}
            or call (706) 765-4280.
          </p>
        </div>

        <Link
          href="/contact"
          className="clay-hero-btn-yellow rounded-full px-7 py-3 text-xs sm:text-[13px] font-black italic uppercase tracking-wider text-[#3d2400] shrink-0 hover:scale-105 active:scale-95 transition-all shadow-md"
        >
          CONTACT US
        </Link>
      </div>
    </section>
  );
}
