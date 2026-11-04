"use client";

import React from "react";
import { Mail, Phone, Clock } from "lucide-react";

export default function ContactQuickInfo() {
  const quickContacts = [
    {
      title: "EMAIL SUPPORT",
      value: "admin@thecardsurgeon.com",
      sub: "Average reply in 2-4 hours",
      href: "mailto:admin@thecardsurgeon.com",
      icon: Mail,
      tileClass: "clay-tile-blue",
      iconColor: "#2563eb",
    },
    {
      title: "DIRECT LAB LINE",
      value: "(706) 765-4280",
      sub: "Mon - Fri, 9am - 6pm EST",
      href: "tel:7067654280",
      icon: Phone,
      tileClass: "clay-tile-yellow",
      iconColor: "#d97706",
    },
    {
      title: "STUDIO HOURS",
      value: "Mon - Sat: 9 AM - 6 PM",
      sub: "Mail-in accepted 24/7",
      href: "#location",
      icon: Clock,
      tileClass: "clay-tile-orange",
      iconColor: "#ea580c",
    },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 w-full">
        {quickContacts.map((contact) => {
          const Icon = contact.icon;
          return (
            <a
              key={contact.title}
              href={contact.href}
              className="clay-footer-card rounded-[28px] p-6 flex flex-col items-center text-center group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_35px_-8px_rgba(80,135,185,0.28)]"
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${contact.tileClass}`}
              >
                <Icon
                  className="w-7 h-7"
                  style={{ color: contact.iconColor }}
                  strokeWidth={2.4}
                />
              </div>
              <span className="text-[11px] font-black text-slate-500 uppercase tracking-widest">
                {contact.title}
              </span>
              <span className="text-base sm:text-lg font-black text-slate-800 mt-1 break-all">
                {contact.value}
              </span>
              <span className="text-xs text-slate-500 mt-1 font-medium">
                {contact.sub}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
