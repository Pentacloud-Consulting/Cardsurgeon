"use client";

import React from "react";
import { Mail, User, MessageSquare, Tag } from "lucide-react";
import { GiftFormData } from "./types";

interface GiftRecipientSectionProps {
  formData: GiftFormData;
  setFormData: React.Dispatch<React.SetStateAction<GiftFormData>>;
}

export default function GiftRecipientSection({
  formData,
  setFormData,
}: GiftRecipientSectionProps) {
  return (
    <div className="flex flex-col gap-4 pt-1">
      {/* Send to someone else Checkbox */}
      <label className="flex items-center gap-2.5 cursor-pointer select-none group w-fit">
        <input
          type="checkbox"
          checked={formData.sendToSomeoneElse}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              sendToSomeoneElse: e.target.checked,
            }))
          }
          className="w-4 h-4 rounded border-2 border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
        />
        <span className="text-xs sm:text-sm font-semibold text-slate-700 group-hover:text-slate-950 transition-colors">
          Send to someone else
        </span>
      </label>

      {/* Recipient Fields (Visible if sendToSomeoneElse is true) */}
      {formData.sendToSomeoneElse && (
        <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-200/70 flex flex-col gap-3 transition-all animate-in fade-in duration-200">
          <div className="text-xs font-black uppercase tracking-wider text-blue-900">
            Recipient Details
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Recipient Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Recipient Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Lucky Collector"
                  value={formData.recipientName}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      recipientName: e.target.value,
                    }))
                  }
                  className="w-full pl-9 pr-3 py-2 rounded-xl text-xs sm:text-sm font-medium bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            {/* Recipient Email */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Recipient Email *
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  placeholder="recipient@example.com"
                  value={formData.recipientEmail}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      recipientEmail: e.target.value,
                    }))
                  }
                  className="w-full pl-9 pr-3 py-2 rounded-xl text-xs sm:text-sm font-medium bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Personal Gift Message */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Personal Message (Optional)
            </label>
            <div className="relative">
              <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <textarea
                rows={2}
                placeholder="Here's a gift card to get your cards restored and graded!"
                value={formData.giftMessage}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    giftMessage: e.target.value,
                  }))
                }
                className="w-full pl-9 pr-3 py-2 rounded-xl text-xs sm:text-sm font-medium bg-white border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none"
              />
            </div>
          </div>
        </div>
      )}

      {/* Your Email * */}
      <div>
        <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
          Your email *
        </label>
        <div className="relative">
          <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="email"
            required
            placeholder="you@example.com"
            value={formData.senderEmail}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                senderEmail: e.target.value,
              }))
            }
            className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm font-medium bg-white border-2 border-slate-300 focus:border-slate-800 focus:ring-1 focus:ring-slate-800 outline-none transition-all shadow-sm"
          />
        </div>
      </div>

      {/* Promotion / Promo Code */}
      <div>
        <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5">
          Promotion / promo code
        </label>
        <div className="relative">
          <Tag className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="CREATOR10 or PROMO"
            value={formData.promoCode}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                promoCode: e.target.value.toUpperCase(),
              }))
            }
            className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm font-medium bg-white border-2 border-slate-300 focus:border-slate-800 focus:ring-1 focus:ring-slate-800 outline-none transition-all shadow-sm uppercase placeholder:normal-case"
          />
        </div>
        <p className="mt-1 text-[11px] text-slate-500 leading-tight">
          Optional campaign or creator code. Member referral codes are entered when you create an account.
        </p>
      </div>
    </div>
  );
}
