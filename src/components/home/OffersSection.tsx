"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Copy, CheckCheck, Tag } from "lucide-react";
import { OFFERS } from "@/lib/data";

export default function OffersSection() {
  const [copied, setCopied] = useState<string | null>(null);
  const featured = OFFERS.filter((o) => o.featured).slice(0, 3);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="flex items-center justify-center gap-2 text-primary-600 text-xs font-semibold uppercase tracking-widest mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
            Save More
          </p>
          <h2 className="font-bold text-stone-900 text-3xl sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
            Current Offers
          </h2>
          <Link href="/offers" className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm mt-4 hover:gap-3 transition-all">
            All Offers <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {featured.map((offer) => (
            <div key={offer.id} className="bg-white rounded-2xl border border-stone-100 overflow-hidden hover:shadow-md transition-all group">
              {/* Discount banner */}
              <div className="bg-accent-500 px-5 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-dark text-3xl">{offer.discount}%</div>
                    <div className="text-dark/60 text-xs">OFF</div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-dark/10 flex items-center justify-center">
                    <Tag size={18} className="text-dark" />
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-stone-900 text-base mb-1">{offer.title}</h3>
                <p className="text-stone-500 text-xs leading-relaxed mb-4">{offer.description}</p>

                {/* Promo code */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex-1 border border-dashed border-primary-300 bg-primary-50 rounded-xl px-3 py-2 font-mono font-bold text-primary-700 text-sm tracking-widest">
                    {offer.code}
                  </div>
                  <button
                    onClick={() => handleCopy(offer.code)}
                    className="w-9 h-9 flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white rounded-xl transition-colors flex-shrink-0"
                  >
                    {copied === offer.code ? <CheckCheck size={13} /> : <Copy size={13} />}
                  </button>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {offer.applicable.map((a) => (
                    <span key={a} className="text-[10px] text-stone-500 bg-stone-50 border border-stone-100 px-2 py-0.5 rounded-full">{a}</span>
                  ))}
                </div>

                <Link href="/hotels" className="flex items-center justify-center gap-2 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs rounded-xl transition-all">
                  Book with this offer <ArrowRight size={11} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
