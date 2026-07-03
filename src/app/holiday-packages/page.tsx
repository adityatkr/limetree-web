import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, MapPin, CheckCircle2 } from "lucide-react";
import { HOLIDAY_PACKAGES } from "@/lib/data";
import { WHATSAPP_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Holiday Packages | Manali, Rishikesh, Golden Triangle — Lime Tree Hotels",
  description: "Curated holiday packages from Lime Tree Hotels — Manali Escape (4 days), Rishikesh Serenity (3 nights), Golden Triangle (6 nights). All-inclusive, handpicked stays.",
};

export default function HolidayPackagesPage() {
  return (
    <div className="min-h-screen bg-stone-50 pt-16">
      {/* Hero */}
      <section className="bg-stone-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-400 text-xs font-semibold uppercase tracking-widest mb-4">Holiday Packages</p>
            <h1 className="font-bold text-white mb-5" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontFamily: "var(--font-display)" }}>
              Curated Escapes,<br /><span className="text-primary-400">Thoughtfully Planned.</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              From the snows of Manali to the ghats of Rishikesh and the palaces of Rajasthan — our holiday packages come with handpicked stays, curated itineraries, and Lime Tree care throughout.
            </p>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10">
            {HOLIDAY_PACKAGES.map((pkg, idx) => (
              <div key={pkg.slug} className={`grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-stone-100 shadow-sm ${idx % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                {/* Image */}
                <div className={`relative h-64 lg:h-auto ${idx % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white text-xs">
                    <MapPin size={12} /> {pkg.highlights?.slice(0, 3).join(" · ") ?? pkg.title}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 bg-white flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold text-primary-600 bg-primary-50 border border-primary-100 px-3 py-1 rounded-full">
                      Holiday Package
                    </span>
                    <div className="flex items-center gap-1.5 text-stone-400 text-xs">
                      <Clock size={12} /> {pkg.duration}
                    </div>
                  </div>
                  <h2 className="font-bold text-stone-900 text-2xl mb-3" style={{ fontFamily: "var(--font-display)" }}>{pkg.title}</h2>
                  <p className="text-stone-500 text-sm leading-relaxed mb-5">{pkg.description}</p>

                  {pkg.highlights && (
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {pkg.highlights.slice(0, 6).map((h: string) => (
                        <div key={h} className="flex items-center gap-2 text-xs text-stone-600">
                          <CheckCircle2 size={12} className="text-primary-500 flex-shrink-0" /> {h}
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-stone-400 text-xs mb-0.5">Starting from</div>
                      <div className="font-bold text-primary-500 text-xl">₹{pkg.startingPrice.toLocaleString("en-IN")}</div>
                      <div className="text-stone-400 text-[11px]">per person</div>
                    </div>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-bold text-sm rounded-xl transition-all">
                      Enquire Now <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Package */}
      <section className="py-20 bg-stone-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold text-white text-3xl mb-4" style={{ fontFamily: "var(--font-display)" }}>Want a Custom Package?</h2>
          <p className="text-white/60 text-base mb-8">Tell us your destination, budget, and dates — our travel desk will craft a package just for you.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-2xl transition-all">
              WhatsApp Us <ArrowRight size={15} />
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-2xl transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
