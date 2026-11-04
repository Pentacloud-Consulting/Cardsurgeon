"use client";

import React from "react";
import Link from "next/link";
import {
  Shield,
  FileText,
  Lock,
  Mail,
  CreditCard,
  Camera,
  Cookie,
  Share2,
  Trash2,
  UserCheck,
  Building,
} from "lucide-react";

export default function Privacy() {
  const sections = [
    {
      id: "information-we-collect",
      title: "Information we collect",
      icon: UserCheck,
      content: (
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
          When you check out or contact us we may collect your name, email, phone,
          shipping address, order details, card descriptions and declared
          values, photos you upload, optional social handles, tip and add-on
          choices, and messages you send. If you create an account we also store
          a password hash and session cookies. We log basic technical data (IP
          address, browser type, and similar) for security and fraud prevention,
          including when you electronically sign an order.
        </p>
      ),
    },
    {
      id: "payments",
      title: "Payments (Stripe)",
      icon: CreditCard,
      content: (
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
          Card payments are processed by Stripe (or our configured processor).
          Payment card details are entered on Stripe&apos;s checkout (or equivalent)
          and are not stored as full card numbers in our database. Stripe&apos;s
          privacy policy governs their processing. In test/mock mode, no real
          charges are made.
        </p>
      ),
    },
    {
      id: "estimated-grade",
      title: "Get Your Estimated Grade (app and AI)",
      icon: Camera,
      content: (
        <div className="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
          <p>
            If you use Get Your Estimated Grade, our app and web app collect the
            10 card photos you take, card details, and your results. With your
            permission, we send the photos and card details (not your name,
            email, or payment details) to a third-party AI service to draft an
            estimate; your Estimated Grade appears right away unless it is held,
            and some estimates are checked by our team and may be changed. Held
            cards are not shown until a person has handled them.
          </p>
          <p>
            We remove location (GPS) and other metadata from every uploaded
            photo. We do not use your photos or results to train AI models or for
            marketing unless you opt in separately. Results are private unless you
            create a share link; anyone with the link can see that card&apos;s photos
            and report until you turn the link off. You can delete your account in
            the app or on the web. The app&apos;s own Privacy Policy gives full details.
          </p>
        </div>
      ),
    },
    {
      id: "email-notifications",
      title: "Email and notifications",
      icon: Mail,
      content: (
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
          We use your email to send order confirmations, status updates, password
          resets, gift card codes, and replies to contact-form messages.
          Transactional email is required to fulfill your order. Marketing email,
          if offered later, will use a separate opt-in.
        </p>
      ),
    },
    {
      id: "analytics-cookies",
      title: "Analytics and cookies",
      icon: Cookie,
      content: (
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
          We use a session cookie to keep you logged in. We may add
          privacy-friendly analytics later; until then, assume only essential
          cookies and server logs. Do not enable third-party ad trackers without
          updating this policy.
        </p>
      ),
    },
    {
      id: "social-media",
      title: "Social media",
      icon: Share2,
      content: (
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
          If you opt in to social features, we may post images or video of your
          cards on platforms such as Instagram, TikTok, or X (Twitter), and may
          tag you if you allow it. Those platforms have their own privacy
          policies. Links to our social profiles are for convenience; content on
          those platforms is not part of this site&apos;s privacy controls.
        </p>
      ),
    },
    {
      id: "retention-sharing",
      title: "Retention and sharing",
      icon: Lock,
      content: (
        <div className="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
          <p>
            We generally keep your order, photo, Estimated Grade, support and
            review records until 5 years after your last order or upload
            (whichever is later), then delete or de-identify them. A new order or
            upload restarts the 5 years. If you ask us to delete your account we
            delete your account and card data sooner, but we may keep order,
            payment and refund records that the law or our tax and dispute needs
            require us to keep, without a link to a live account. Backups and
            security logs are kept for shorter periods.
          </p>
          <p>
            We do not sell your personal information. We share data with
            processors who help us operate (hosting, payments, shipping/label
            tools, email delivery, our customer-relationship manager HubSpot,
            and, for Get Your Estimated Grade, a third-party AI service) under
            agreements that limit their use of the data. HubSpot holds your email
            and, for Get Your Estimated Grade requests, the card details and the
            draft and reviewed estimate so a person can review it; it does not
            receive your photos. When you delete your app account we remove your
            email and card details from those HubSpot records, and we delete your
            HubSpot contact on request.
          </p>
        </div>
      ),
    },
    {
      id: "your-choices",
      title: "Your choices",
      icon: Trash2,
      content: (
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
          You may request access, correction, or deletion of personal data we
          hold by emailing{" "}
          <a
            href="mailto:admin@thecardsurgeon.com"
            className="text-blue-600 font-bold hover:underline"
          >
            admin@thecardsurgeon.com
          </a>
          , subject to legal retention needs (for example completed order
          records). California and other state rights, if applicable, will be
          described more fully after counsel review.
        </p>
      ),
    },
    {
      id: "contact",
      title: "Contact",
      icon: Building,
      content: (
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
          Privacy questions: The Card Surgeon LLC,{" "}
          <a
            href="mailto:admin@thecardsurgeon.com"
            className="text-blue-600 font-bold hover:underline"
          >
            admin@thecardsurgeon.com
          </a>
          . This draft should be replaced with a final policy before launch. To
          the extent a governing-law choice applies to privacy disputes under
          this draft, the laws of the State of Georgia, USA, apply, consistent
          with our Terms.
        </p>
      ),
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-8 sm:py-12">
      {/* Header Clay Card */}
      <div className="clay-footer-card rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 mb-8 sm:mb-10 text-center relative overflow-hidden">
        {/* Top Badges */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-white text-slate-600 text-xs font-bold uppercase tracking-wider shadow-sm mb-4">
          <Shield className="w-4 h-4 text-emerald-600" />
          <span>Legal & Compliance</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-800 tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-2 text-base sm:text-lg text-slate-600 font-medium">
          How we handle checkout and account data.
        </p>

        {/* Quick Nav / Tabs */}
        <div className="mt-6 pt-5 border-t border-slate-200/70 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-bold">
          <Link
            href="/terms"
            className="px-4 py-2 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-slate-900 border border-white shadow-sm transition-all hover:scale-105"
          >
            Terms of Service
          </Link>
          <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-800 border border-blue-200/60 shadow-inner">
            Privacy Policy
          </span>
        </div>
      </div>

      {/* Sections as Clean Claymorphic Boxes */}
      <div className="space-y-6">
        {sections.map((sec, idx) => {
          const Icon = sec.icon;
          return (
            <div
              key={sec.id}
              id={sec.id}
              className="clay-footer-card rounded-[26px] sm:rounded-[32px] p-6 sm:p-8 relative overflow-hidden transition-all duration-300 hover:shadow-[0_16px_36px_rgba(80,135,185,0.18)]"
            >
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl clay-tile-blue flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-blue-600" strokeWidth={2.4} />
                </div>
                <h2 className="text-lg sm:text-xl font-black text-slate-800 tracking-tight">
                  {idx + 1}. {sec.title}
                </h2>
              </div>
              <div>{sec.content}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
