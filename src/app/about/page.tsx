import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Lime Tree Hotels — Our Story Since 2011",
  description: "Lime Tree Hotels was established in 2011 in Gurgaon. Today we operate 30+ properties — hotels, serviced apartments, villas and banquet halls — across 7 Indian cities.",
};

const TIMELINE = [
  { year: "2011", title: "Founded in Gurgaon", desc: "Lime Tree Hotels began as a hotel sales and marketing consultancy, with a vision to make premium stays accessible across India." },
  { year: "2013", title: "First Property Opens", desc: "We opened our first 4-room property in Gurgaon. A small beginning — but with an outsized commitment to hospitality." },
  { year: "2016", title: "Serviced Apartments Launch", desc: "Recognising the growing demand for home-like long stays, we launched our serviced apartment category — Studio, 1BHK, 2BHK, and 3BHK options." },
  { year: "2018", title: "Delhi & NCR Expansion", desc: "Properties in Delhi (Greater Kailash-2) and Greater Noida joined our portfolio, along with our first properties near medical hubs." },
  { year: "2021", title: "Medical Tourism Focus", desc: "We built dedicated protocols for patients and attendants visiting Medanta, Artemis, and other top NCR hospitals — a first in the segment." },
  { year: "2023", title: "500+ Rooms Milestone", desc: "Lime Tree crossed 500 rooms across 30+ properties in 7 cities — Gurgaon, Delhi, Greater Noida, Noida, Jaipur, Vrindavan, and Goa." },
];

const VALUES = [
  { title: "Warmth First", desc: "Great hospitality is about genuine human connection — not just amenities." },
  { title: "Value for Money", desc: "Premium quality at honest prices. We believe you shouldn't have to overpay to feel at home." },
  { title: "Guest Obsession", desc: "Every decision we make starts with one question: does this make our guest's life better?" },
  { title: "Community", desc: "We support our local teams, our neighborhoods, and the travelers who trust us." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-50 pt-16">
      {/* Hero */}
      <section className="relative bg-stone-900 overflow-hidden">
        <Image
          src="https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_234,y_0,w_4532,h_3333,r_0,c_crop/q_80,w_1920,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-hotel-sushant-lok-gurgaon---next-to-iffco-chowk-metro-station/DSC09899_ozpuez"
          alt="Lime Tree Hotels"
          fill className="object-cover opacity-30" priority sizes="100vw"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="max-w-3xl">
          <p className="text-primary-400 text-xs font-semibold uppercase tracking-widest mb-4">Est. 2011</p>
          <h1 className="font-bold text-white mb-5" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontFamily: "var(--font-display)" }}>
            We Started With 4 Rooms.<br /><span className="text-primary-400">Now We Have 500+.</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">Lime Tree Hotels was founded in Gurgaon with a simple belief — every traveler deserves a home, not just a room. Thirteen years later, that belief drives everything we do.</p>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: "12+", label: "Years" },
            { value: "500+", label: "Rooms" },
            { value: "30+", label: "Properties" },
            { value: "7", label: "Cities" },
          ].map(({ value, label }) => (
            <div key={label} className="text-white">
              <div className="font-bold text-3xl" style={{ fontFamily: "var(--font-display)" }}>{value}</div>
              <div className="text-white/70 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-stone-900 text-white">
              <div className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">Our Mission</div>
              <p className="font-bold text-xl leading-relaxed" style={{ fontFamily: "var(--font-display)" }}>
                &ldquo;To make premium, home-like hospitality accessible to every traveler — corporate, medical, or leisure — across every city in India.&rdquo;
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-primary-50 border border-primary-100">
              <div className="text-primary-600 text-xs font-semibold uppercase tracking-widest mb-4">Our Vision</div>
              <p className="font-bold text-xl text-stone-900 leading-relaxed" style={{ fontFamily: "var(--font-display)" }}>
                &ldquo;To become India&apos;s most trusted mid-premium hospitality brand — recognised for value, warmth, and consistency.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary-600 text-xs font-semibold uppercase tracking-widest mb-2 text-center">Our Journey</p>
          <h2 className="font-bold text-stone-900 text-3xl text-center mb-14" style={{ fontFamily: "var(--font-display)" }}>From One Room to India</h2>
          <div className="relative">
            <div className="absolute left-[88px] sm:left-[104px] top-0 bottom-0 w-px bg-stone-200" />
            <div className="flex flex-col gap-10">
              {TIMELINE.map(({ year, title, desc }) => (
                <div key={year} className="flex gap-6 sm:gap-10">
                  <div className="w-[80px] sm:w-[96px] flex-shrink-0 text-right">
                    <span className="font-bold text-primary-500 text-base">{year}</span>
                  </div>
                  <div className="relative pl-7">
                    <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-primary-500 border-2 border-white -translate-x-1.5 shadow-sm ring-2 ring-primary-100" />
                    <h3 className="font-semibold text-stone-900 text-base mb-1">{title}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-600 text-xs font-semibold uppercase tracking-widest mb-2">Our Values</p>
            <h2 className="font-bold text-stone-900 text-3xl" style={{ fontFamily: "var(--font-display)" }}>What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map(({ title, desc }) => (
              <div key={title} className="p-6 rounded-2xl border border-stone-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 bg-white">
                <h3 className="font-bold text-stone-900 text-base mb-2">{title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold text-white text-3xl sm:text-4xl mb-4" style={{ fontFamily: "var(--font-display)" }}>Join the Lime Tree Story</h2>
          <p className="text-white/75 text-base mb-8 max-w-xl mx-auto">Whether you&apos;re a guest, a corporate partner, a property owner, or a future team member — we&apos;d love to have you.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/hotels" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-bold rounded-2xl hover:bg-stone-50 transition-colors">
              Book a Stay <ArrowRight size={15} />
            </Link>
            <Link href="/partner-with-us" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-colors">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
