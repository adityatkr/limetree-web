"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Tag, Copy, CheckCheck, ArrowRight, Clock, Info } from "lucide-react";
import { OFFERS } from "@/lib/data";

export default function OffersPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen bg-stone-50 pt-16">
      {/* Hero */}
      <section className="bg-stone-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-primary-500/20 text-primary-400 text-xs font-semibold px-4 py-2 rounded-full mb-5 border border-primary-500/30">
            <Tag size={12} /> Exclusive Deals
          </div>
          <h1 className="font-bold text-white mb-4" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontFamily: "var(--font-display)" }}>
            Offers & Deals
          </h1>
          <p className="text-white/60 text-lg">Handpicked deals to make your next Lime Tree stay even more rewarding.</p>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-primary-600 text-xs font-semibold uppercase tracking-widest mb-2">Current Offers</p>
            <h2 className="font-bold text-stone-900 text-3xl" style={{ fontFamily: "var(--font-display)" }}>Save More, Stay Better</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OFFERS.map((offer) => (
              <div key={offer.id} className="bg-white rounded-2xl overflow-hidden border border-stone-100 hover:shadow-md transition-all duration-300 flex flex-col">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image src={offer.image} alt={offer.title} fill className="object-cover" sizes="33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-amber-400 text-stone-900 font-bold text-sm px-3 py-1 rounded-xl">
                      {offer.discount}% OFF
                    </span>
                  </div>
                  {offer.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">Featured</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-stone-900 text-lg mb-2" style={{ fontFamily: "var(--font-display)" }}>{offer.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed mb-4">{offer.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {offer.applicable.map((a) => (
                      <span key={a} className="text-xs bg-primary-50 text-primary-700 px-2.5 py-1 rounded-full border border-primary-100">{a}</span>
                    ))}
                  </div>

                  {/* Validity */}
                  <div className="flex items-center gap-1.5 text-stone-400 text-xs mb-5">
                    <Clock size={11} />
                    Valid until {new Date(offer.validTo).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                  </div>

                  {/* Promo Code */}
                  <div className="mt-auto">
                    <p className="text-xs text-stone-400 font-semibold uppercase tracking-wider mb-2">Use Code</p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 border-2 border-dashed border-primary-200 bg-primary-50 rounded-xl px-4 py-3 font-mono font-bold text-primary-700 text-base tracking-widest">
                        {offer.code}
                      </div>
                      <button
                        onClick={() => handleCopy(offer.code)}
                        className="flex items-center gap-1.5 px-3 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-xl transition-all text-sm font-medium flex-shrink-0"
                      >
                        {copied === offer.code ? <CheckCheck size={14} /> : <Copy size={14} />}
                        {copied === offer.code ? "Copied!" : "Copy"}
                      </button>
                    </div>
                  </div>

                  {/* Terms */}
                  {offer.terms.length > 0 && (
                    <details className="mt-4 group">
                      <summary className="flex items-center gap-1.5 text-xs text-stone-400 cursor-pointer hover:text-stone-600 list-none">
                        <Info size={11} /> Terms & Conditions
                        <span className="group-open:rotate-180 transition-transform ml-auto">⌄</span>
                      </summary>
                      <ul className="mt-2 space-y-1">
                        {offer.terms.map((term) => (
                          <li key={term} className="text-xs text-stone-400 flex items-start gap-1.5">
                            <span className="text-primary-500 flex-shrink-0">•</span>{term}
                          </li>
                        ))}
                      </ul>
                    </details>
                  )}

                  <Link href="/hotels" className="mt-5 flex items-center justify-center gap-2 py-3 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-sm rounded-xl transition-all">
                    Book Now <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold text-white text-3xl sm:text-4xl mb-4" style={{ fontFamily: "var(--font-display)" }}>Can&apos;t Find What You Need?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Our team crafts custom packages for corporate clients, long-stay guests, and special occasions. Get in touch for a personalised offer.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-bold rounded-2xl hover:bg-stone-50 transition-colors">
              Contact Us <ArrowRight size={16} />
            </Link>
            <Link href="/corporate" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-colors">
              Corporate Rates
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
