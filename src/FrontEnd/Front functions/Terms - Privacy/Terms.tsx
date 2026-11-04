"use client";

import React from "react";
import Link from "next/link";
import {
  FileText,
  Shield,
  CheckCircle2,
  AlertTriangle,
  Scale,
  Package,
  Layers,
  Camera,
  Coins,
  Truck,
  RotateCcw,
  Building,
} from "lucide-react";

export default function Terms() {
  const tableOfContents = [
    { title: "Acceptance of these Terms", href: "#acceptance" },
    { title: "Scope of work", href: "#scope" },
    { title: "2A. Pre-Grade Opinions & AI Estimates", href: "#pregrade-estimates" },
    { title: "2B. Third-party market estimates", href: "#market-data" },
    { title: "Who may order", href: "#eligibility" },
    { title: "Declared values & liability", href: "#declared-value" },
    { title: "Shipping, transit risk & insurance", href: "#shipping" },
    { title: "Slab / holder removal", href: "#slab" },
    { title: "Turnaround (business days)", href: "#turnaround" },
    { title: "Restoration disclosure", href: "#restoration-disclosure" },
    { title: "8A. Included & Excluded Work", href: "#restoration-exclusions" },
    { title: "8B. Shipping, Handling & Risk of Loss", href: "#shipping-risk" },
    { title: "Refunds, cancellations & changes", href: "#refunds" },
    { title: "Photos and social media use", href: "#photos-social" },
    { title: "Electronic records & signatures", href: "#esign" },
    { title: "Accounts, codes, and payment", href: "#accounts" },
    { title: "Website & intellectual property", href: "#ip" },
    { title: "Disputes and arbitration", href: "#disputes-arbitration" },
    { title: "Governing law and venue", href: "#governing-law" },
    { title: "15A. What continues after Terms end", href: "#survival" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-8 sm:py-12">
      {/* Header Clay Card */}
      <div className="clay-footer-card rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 mb-8 sm:mb-10 text-center relative overflow-hidden">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-white text-slate-600 text-xs font-bold uppercase tracking-wider shadow-sm mb-4">
          <Scale className="w-4 h-4 text-amber-600" />
          <span>Legal Agreement · Version 0.14-DRAFT</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-800 tracking-tight">
          Terms of Service
        </h1>
        <p className="mt-2 text-base sm:text-lg text-slate-600 font-medium">
          The Card Surgeon LLC Terms, Conditions & Service Standards
        </p>

        {/* Quick Tabs */}
        <div className="mt-6 pt-5 border-t border-slate-200/70 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-bold">
          <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-800 border border-blue-200/60 shadow-inner">
            Terms of Service
          </span>
          <Link
            href="/privacy"
            className="px-4 py-2 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-slate-900 border border-white shadow-sm transition-all hover:scale-105"
          >
            Privacy Policy
          </Link>
        </div>
      </div>

      {/* Quick Table of Contents Clay Card */}
      <div className="clay-footer-card rounded-[26px] sm:rounded-[32px] p-6 sm:p-8 mb-8">
        <h2 className="text-base sm:text-lg font-black text-slate-800 uppercase tracking-wider mb-4 flex items-center gap-2">
          <FileText className="w-4 h-4 text-blue-600" />
          <span>On this page</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm font-semibold">
          {tableOfContents.map((item, idx) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 rounded-xl bg-white/70 hover:bg-blue-50/80 text-slate-700 hover:text-blue-700 transition-all flex items-center gap-2"
            >
              <span className="w-5 h-5 rounded-md bg-blue-100 text-blue-800 text-[11px] font-black flex items-center justify-center shrink-0">
                {idx + 1}
              </span>
              <span className="truncate">{item.title}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Sections List */}
      <div className="space-y-6">
        {/* Section 1 */}
        <div id="acceptance" className="clay-footer-card rounded-[26px] sm:rounded-[32px] p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-black text-slate-800 mb-3 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg clay-tile-blue text-blue-700 text-sm font-black flex items-center justify-center shrink-0">1</span>
            <span>Acceptance of these Terms</span>
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            By placing an order with The Card Surgeon LLC, a Georgia limited liability company (&quot;The Card Surgeon&quot; or the &quot;Shop&quot;), browsing this website, or clicking that you agree at checkout, you accept these Terms of Service (&quot;Terms&quot;). If you do not agree, do not place an order or use our services. We may update these Terms from time to time; the version shown at checkout (v0.14-DRAFT) is the one that applies to that order.
          </p>
        </div>

        {/* Section 2 */}
        <div id="scope" className="clay-footer-card rounded-[26px] sm:rounded-[32px] p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-black text-slate-800 mb-3 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg clay-tile-blue text-blue-700 text-sm font-black flex items-center justify-center shrink-0">2</span>
            <span>Scope of work</span>
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            We provide trading-card restoration and Pre-Grade Prep, our &quot;Get Your Estimated Grade&quot; photo service, plus related shop products and gift cards, as described on this site and in your order summary. Restoration means cosmetic and surface work described in Section 8A; work not described there is not included. Pre-Grade Prep is a condition assessment, a surface clean, a penny sleeve, and a semi-rigid holder. It does not include crease work, dent removal, edge or corner work, or any other restorative work. A Pre-Grade (on a card you send us) and an Estimated Grade (from photos, through Get Your Estimated Grade) are condition opinions only (see Section 2A); neither is a guarantee of any third-party grading company&apos;s grade, label, or acceptance. We do not promise a specific grade, market value, or sale outcome. Work is limited to what you order; add-ons (for example slab crack-out or pre-grade on a restoration order) apply only when selected per card.
          </p>
        </div>

        {/* Section 2A */}
        <div id="pregrade-estimates" className="clay-footer-card rounded-[26px] sm:rounded-[32px] p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-black text-slate-800 mb-3 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg clay-tile-blue text-blue-700 text-sm font-black flex items-center justify-center shrink-0">2A</span>
            <span>Get Your Estimated Grade and Pre-Grade Opinions</span>
          </h3>
          <div className="space-y-3.5 text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            <p>
              Photo pre-grades are an estimate only. They can&apos;t replace an in-person pre-grade, and photos only show so much detail. Pre-grades are estimates, not guarantees of any grade or value, and nothing here is financial advice. We do not guarantee or promise grades. We use our experience and programming to give estimates.
            </p>
            <p>
              <strong className="text-slate-800">No guarantee of a third-party grade:</strong> We can&apos;t guarantee that any third-party grading company would assign the same grade as an Estimated Grade. Grading companies use their own standards, graders, equipment and in-hand inspection, and may assign a higher, lower or different grade, or decline to grade the card, including for the same card on a different day. An Estimated Grade is our opinion based on your photos and is not a prediction, promise or warranty of any grading company&apos;s result.
            </p>
            <p>
              <strong className="text-slate-800">What this covers:</strong> &quot;Get Your Estimated Grade&quot; is our photo service: you submit 10 required photos of a card, our software (using a third-party AI service, with your permission) drafts a condition estimate, and your Estimated Grade appears right away unless it is held. Some estimates are checked by our team and may be changed. Each result is an &quot;Estimated Grade&quot;. A &quot;Pre-Grade&quot; is our in-person condition opinion on a card you send us.
            </p>
            <p>
              <strong className="text-slate-800">Alteration and restoration:</strong> A Condition Opinion assesses the card as presented. It is not an authenticity opinion and not a ruling that a card is unaltered. Grading companies may detect pressing, cleaning, trimming, recoloring, or other work and may refuse to grade the card, return it as altered, or apply a qualifier or lower grade.
            </p>
            <p>
              <strong className="text-slate-800">No affiliation:</strong> PSA, Beckett (BGS), CGC, SGC, and other grading company names and scales belong to their owners and are used only to describe the scale our estimates refer to. We are not affiliated with, endorsed by, or sponsored by any grading company.
            </p>
          </div>
        </div>

        {/* Section 2B */}
        <div id="market-data" className="clay-footer-card rounded-[26px] sm:rounded-[32px] p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-black text-slate-800 mb-3 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg clay-tile-blue text-blue-700 text-sm font-black flex items-center justify-center shrink-0">2B</span>
            <span>Third-party market estimates</span>
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            Card Ladder figures shown at checkout, in your collection, and on My account are third-party market data. They are not an appraisal by The Card Surgeon, not your declared value, and not a grade. An estimate can be missing, delayed, or wrong. You choose the declared value on the order form.
          </p>
        </div>

        {/* Section 3 */}
        <div id="eligibility" className="clay-footer-card rounded-[26px] sm:rounded-[32px] p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-black text-slate-800 mb-3 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg clay-tile-blue text-blue-700 text-sm font-black flex items-center justify-center shrink-0">3</span>
            <span>Who may order</span>
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            You must be able to form a binding contract in your place of residence and, if you are ordering on behalf of someone else, you must have authority to bind them. Services and shipping described on this site are intended for the United States unless we expressly agree otherwise in writing. You are responsible for accurate contact and shipping details.
          </p>
        </div>

        {/* Section 4 */}
        <div id="declared-value" className="clay-footer-card rounded-[26px] sm:rounded-[32px] p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-black text-slate-800 mb-3 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg clay-tile-blue text-blue-700 text-sm font-black flex items-center justify-center shrink-0">4</span>
            <span>Declared values and liability (including loss, damage, and theft)</span>
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            You must enter a good-faith declared value for each card on the submission / order form, based on recent sold comps or other reasonable evidence. That declared value is the amount you list for the card when you place the order. While it is very rare that any damage will come to cards in our care, restoration, handling, and related work still involve risks. To the fullest extent allowed by law, if a card is damaged while in our care — after we have confirmed receipt and before we hand the package to a carrier for return — we are responsible up to the listed/declared value for that card on the submission form as stated in Section 8B.6.
          </p>
        </div>

        {/* Section 5 */}
        <div id="shipping" className="clay-footer-card rounded-[26px] sm:rounded-[32px] p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-black text-slate-800 mb-3 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg clay-tile-blue text-blue-700 text-sm font-black flex items-center justify-center shrink-0">5</span>
            <span>Shipping, transit risk, and insurance</span>
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            You choose either a prepaid two-way label we arrange or to ship cards to us yourself and pay for return shipping. We hold no liability for collectibles, cards, or items while they are being shipped to us or after they have been shipped from our facility. We are not responsible for lost, damaged, or stolen packages in transit either way. Optional shipping insurance purchased at checkout is subject solely to the carrier&apos;s/insurer&apos;s terms.
          </p>
        </div>

        {/* Section 6 */}
        <div id="slab" className="clay-footer-card rounded-[26px] sm:rounded-[32px] p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-black text-slate-800 mb-3 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg clay-tile-blue text-blue-700 text-sm font-black flex items-center justify-center shrink-0">6</span>
            <span>Slab / holder removal</span>
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            If you add slab crack-out (or similar) for a graded card, you authorize us to remove the card from its holder. You understand that the original grade label and sealed holder cannot be restored, that grading companies may treat the card as altered or raw afterward, and that removal carries risk of damage. You must confirm that authorization at checkout.
          </p>
        </div>

        {/* Section 7 */}
        <div id="turnaround" className="clay-footer-card rounded-[26px] sm:rounded-[32px] p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-black text-slate-800 mb-3 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg clay-tile-blue text-blue-700 text-sm font-black flex items-center justify-center shrink-0">7</span>
            <span>Turnaround (business days)</span>
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            Turnaround ranges on each tier are estimates in business days (weekdays excluding U.S. federal holidays we observe), counted from the business day we receive your cards in good order — not from the day you place or pay for the order.
          </p>
        </div>

        {/* Section 8 */}
        <div id="restoration-disclosure" className="clay-footer-card rounded-[26px] sm:rounded-[32px] p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-black text-slate-800 mb-3 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg clay-tile-blue text-blue-700 text-sm font-black flex items-center justify-center shrink-0">8</span>
            <span>Restoration disclosure</span>
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            Restored cards may show evidence of work under magnification, black light, or grader scrutiny. You are solely responsible for disclosing restoration or other work to buyers, graders, auction houses, and any other parties as required by law, platform rules, or honesty. We do not hide workmanship and do not assist with misrepresentation.
          </p>
        </div>

        {/* Section 8A */}
        <div id="restoration-exclusions" className="clay-footer-card rounded-[26px] sm:rounded-[32px] p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-black text-slate-800 mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg clay-tile-blue text-blue-700 text-sm font-black flex items-center justify-center shrink-0">8A</span>
            <span>What restoration includes and does not include</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
              <span className="text-xs font-black uppercase text-emerald-800 flex items-center gap-1.5 mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                8A.1 Included Work
              </span>
              <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
                Light creases, surface dents, edge lifts, corner lifts, surface scratches, hazes, wax removal, and impression relief.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200">
              <span className="text-xs font-black uppercase text-rose-800 flex items-center gap-1.5 mb-2">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                8A.2 Excluded Work (Not Done)
              </span>
              <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
                (a) Whitening repair, (b) Coloration/touch-up, (c) Polishing Lugia 1st Edition, (d) Severe creases, (e) Creases with broken whitening, (f) Through-and-through 100% tears, (g) Trimming or shaving edges.
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium mt-3">
            <strong className="text-slate-800">8A.3 Return on Arrival:</strong> Cards submitted for Excluded Work are subject to return without work; service fee is refunded minus non-refundable add-ons and shipping.
          </p>
        </div>

        {/* Section 8B */}
        <div id="shipping-risk" className="clay-footer-card rounded-[26px] sm:rounded-[32px] p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-black text-slate-800 mb-3 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg clay-tile-blue text-blue-700 text-sm font-black flex items-center justify-center shrink-0">8B</span>
            <span>Shipping, Handling and Risk of Loss</span>
          </h3>
          <div className="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            <p>
              <strong className="text-slate-800">8B.1 Please insure what you send:</strong> We recommend that you insure every package you send us, and every return, for the full value of its contents.
            </p>
            <p>
              <strong className="text-slate-800">8B.6 Limit for cards in our care:</strong> To the fullest extent allowed by law, our total liability for loss of or damage to a card while in our care is limited to the declared value you entered for that card on your submission order.
            </p>
            <p>
              <strong className="text-slate-800">8B.8 Reporting a problem:</strong> If a return package arrives damaged or missing, email admin@thecardsurgeon.com within 7 days after delivery with photos of the package and card.
            </p>
            <p>
              <strong className="text-slate-800">8B.10 High-value cards:</strong> Orders with a card declared over $10,000 require prior approval before shipping.
            </p>
          </div>
        </div>

        {/* Section 9 */}
        <div id="refunds" className="clay-footer-card rounded-[26px] sm:rounded-[32px] p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-black text-slate-800 mb-3 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg clay-tile-blue text-blue-700 text-sm font-black flex items-center justify-center shrink-0">9</span>
            <span>Refunds, cancellations, and changes</span>
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            You may request cancellation by email before we mark the order as received. Once cards are received or work has started, service fees are generally non-refundable, except where we cancel because we cannot perform the work. Gift cards are non-refundable. The $5 website Service fee is non-refundable.
          </p>
        </div>

        {/* Section 10 */}
        <div id="photos-social" className="clay-footer-card rounded-[26px] sm:rounded-[32px] p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-black text-slate-800 mb-3 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg clay-tile-blue text-blue-700 text-sm font-black flex items-center justify-center shrink-0">10</span>
            <span>Photos and social media use</span>
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            You grant us a non-exclusive license to use photos and videos you upload, and photos or video we take during the order, for performing the service, quality control, and — only if you opt in at checkout — for marketing on our website and social channels.
          </p>
        </div>

        {/* Section 11 */}
        <div id="esign" className="clay-footer-card rounded-[26px] sm:rounded-[32px] p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-black text-slate-800 mb-3 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg clay-tile-blue text-blue-700 text-sm font-black flex items-center justify-center shrink-0">11</span>
            <span>Electronic records and signatures</span>
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            You consent to do business electronically with us for this order, including receiving disclosures and signing by typing your legal name and checking consent boxes at checkout under the U.S. E-SIGN Act.
          </p>
        </div>

        {/* Section 12 */}
        <div id="accounts" className="clay-footer-card rounded-[26px] sm:rounded-[32px] p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-black text-slate-800 mb-3 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg clay-tile-blue text-blue-700 text-sm font-black flex items-center justify-center shrink-0">12</span>
            <span>Accounts, codes, and payment</span>
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            Guest checkout is allowed. If you create an account, keep credentials confidential. Payments are handled via Stripe; we do not store full credit card numbers on our servers.
          </p>
        </div>

        {/* Section 13 */}
        <div id="ip" className="clay-footer-card rounded-[26px] sm:rounded-[32px] p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-black text-slate-800 mb-3 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg clay-tile-blue text-blue-700 text-sm font-black flex items-center justify-center shrink-0">13</span>
            <span>Website and intellectual property</span>
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            The site design, logos, and original content belong to us or our licensors. You may not scrape, copy, or misuse the site except for ordinary browsing and ordering. Card images you upload remain yours.
          </p>
        </div>

        {/* Section 14 */}
        <div id="disputes-arbitration" className="clay-footer-card rounded-[26px] sm:rounded-[32px] p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-black text-slate-800 mb-3 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg clay-tile-blue text-blue-700 text-sm font-black flex items-center justify-center shrink-0">14</span>
            <span>Disputes and arbitration</span>
          </h3>
          <div className="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            <p>
              <strong className="text-slate-800">14.1 Talk to us first:</strong> Before starting any claim, email admin@thecardsurgeon.com (or write to TCS, 1860 Barnett Shoals Rd Ste 103, Athens, GA 30605) to seek good-faith resolution within 60 days.
            </p>
            <p>
              <strong className="text-slate-800">14.3 Agreement to arbitrate:</strong> Except for small claims or IP injunctions, all disputes will be resolved by binding individual arbitration administered by the American Arbitration Association (&quot;AAA&quot;).
            </p>
            <p>
              <strong className="text-slate-800">14.5 No class actions:</strong> Claims may be brought only in an individual capacity, not as a class action. You may opt out within 30 days of first accepting these Terms.
            </p>
          </div>
        </div>

        {/* Section 15 */}
        <div id="governing-law" className="clay-footer-card rounded-[26px] sm:rounded-[32px] p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-black text-slate-800 mb-3 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg clay-tile-blue text-blue-700 text-sm font-black flex items-center justify-center shrink-0">15</span>
            <span>Governing law and venue</span>
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            These Terms and any Dispute are governed by the laws of the State of Georgia, USA, and by the Federal Arbitration Act. State and federal courts in Clarke County, Georgia have exclusive jurisdiction.
          </p>
        </div>

        {/* Section 15A */}
        <div id="survival" className="clay-footer-card rounded-[26px] sm:rounded-[32px] p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-black text-slate-800 mb-3 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg clay-tile-blue text-blue-700 text-sm font-black flex items-center justify-center shrink-0">15A</span>
            <span>What continues after these Terms end</span>
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            Provisions regarding payment obligations, ownership and IP licenses, limits of liability, electronic records, arbitration and governing law survive termination of these Terms.
          </p>
        </div>

        {/* Section 16 */}
        <div id="contact" className="clay-footer-card rounded-[26px] sm:rounded-[32px] p-6 sm:p-8">
          <h3 className="text-lg sm:text-xl font-black text-slate-800 mb-3 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg clay-tile-blue text-blue-700 text-sm font-black flex items-center justify-center shrink-0">16</span>
            <span>Contact</span>
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
            Questions about these Terms: The Card Surgeon LLC,{" "}
            <a href="mailto:admin@thecardsurgeon.com" className="text-blue-600 font-bold hover:underline">
              admin@thecardsurgeon.com
            </a>
            , TCS, 1860 Barnett Shoals Rd Ste 103, Athens, GA 30605. Version: 0.14-DRAFT.
          </p>
        </div>
      </div>
    </div>
  );
}
