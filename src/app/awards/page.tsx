import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Star, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Awards & Recognition | Lime Tree Hotels",
  description: "Lime Tree Hotels has been recognised by Booking.com, MakeMyTrip, TripAdvisor, and Google Reviews for consistently delivering value and quality hospitality.",
};

const AWARDS = [
  {
    platform: "Booking.com",
    award: "Traveller Review Award",
    years: ["2022", "2023", "2024"],
    desc: "Awarded annually for maintaining consistently high guest review scores on Booking.com.",
    score: "8.5+",
    scoreLabel: "Average Score",
  },
  {
    platform: "MakeMyTrip",
    award: "MMT Best Value Award",
    years: ["2023", "2024"],
    desc: "Recognised by MakeMyTrip as a top-rated value property across the Delhi NCR region.",
    score: "4.3★",
    scoreLabel: "Guest Rating",
  },
  {
    platform: "TripAdvisor",
    award: "Travellers' Choice Award",
    years: ["2022", "2023", "2024"],
    desc: "Featured in TripAdvisor's Travellers' Choice list for hotels in Gurgaon, Delhi, and Jaipur.",
    score: "Top 10%",
    scoreLabel: "In Category",
  },
  {
    platform: "Google Reviews",
    award: "4.4★ Average Rating",
    years: ["Ongoing"],
    desc: "Verified Google ratings across 5,000+ guest reviews — reflecting our commitment to consistent hospitality.",
    score: "5,000+",
    scoreLabel: "Reviews",
  },
];

const CERTIFICATIONS = [
  { title: "FSSAI Certified", desc: "Food safety certification for all dining and kitchen operations." },
  { title: "Fire NOC Compliant", desc: "All properties maintain valid fire safety certificates." },
  { title: "GST Registered", desc: "Full GST compliance — invoices for corporate and business guests." },
  { title: "Women-Safe Stay Certified", desc: "Enhanced security protocols and dedicated women guest support." },
];

export default function AwardsPage() {
  return (
    <div className="min-h-screen bg-stone-50 pt-16">
      {/* Hero */}
      <section className="bg-stone-900 py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-5">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/20 flex items-center justify-center">
              <Award size={24} className="text-amber-400" />
            </div>
          </div>
          <h1 className="font-bold text-white mb-4" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontFamily: "var(--font-display)" }}>
            Award-Winning Hospitality
          </h1>
          <p className="text-white/60 text-lg">Recognised consistently by India&apos;s leading travel platforms — because 50,000+ happy guests speak for themselves.</p>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-600 text-xs font-semibold uppercase tracking-widest mb-2">Our Recognition</p>
            <h2 className="font-bold text-stone-900 text-3xl" style={{ fontFamily: "var(--font-display)" }}>Platform Awards</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {AWARDS.map(({ platform, award, years, desc, score, scoreLabel }) => (
              <div key={platform} className="p-6 rounded-2xl border border-stone-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 bg-white">
                <div className="flex items-center gap-2 mb-4">
                  <Star size={14} className="text-amber-400 fill-amber-400" />
                  <span className="font-bold text-amber-500 text-xs uppercase tracking-wider">{platform}</span>
                </div>
                <h3 className="font-bold text-stone-900 text-base mb-1">{award}</h3>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {years.map((y) => (
                    <span key={y} className="text-[11px] bg-primary-50 text-primary-700 border border-primary-100 px-2 py-0.5 rounded-full font-semibold">{y}</span>
                  ))}
                </div>
                <p className="text-stone-400 text-xs leading-relaxed mb-4">{desc}</p>
                <div className="pt-4 border-t border-stone-100">
                  <div className="font-bold text-primary-500 text-xl">{score}</div>
                  <div className="text-stone-400 text-xs">{scoreLabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-600 text-xs font-semibold uppercase tracking-widest mb-2">Compliance</p>
            <h2 className="font-bold text-stone-900 text-3xl" style={{ fontFamily: "var(--font-display)" }}>Certifications & Standards</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CERTIFICATIONS.map(({ title, desc }) => (
              <div key={title} className="p-6 rounded-2xl bg-white border border-stone-100">
                <h3 className="font-bold text-stone-900 text-sm mb-2">{title}</h3>
                <p className="text-stone-400 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold text-white text-3xl mb-4" style={{ fontFamily: "var(--font-display)" }}>Experience Award-Winning Hospitality</h2>
          <p className="text-white/75 text-base mb-8 max-w-xl mx-auto">Book directly for the best rate and join 50,000+ guests who have rated us 4.4★.</p>
          <Link href="/hotels" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-bold rounded-2xl hover:bg-stone-50 transition-colors">
            Browse Properties <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
