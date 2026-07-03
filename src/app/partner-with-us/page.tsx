import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, TrendingUp, Users, Star, Phone } from "lucide-react";
import { PHONE_NUMBER, EMAIL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Partner With Us | List Your Property — Lime Tree Hotels",
  description: "List your hotel, apartment, villa, or banquet hall with Lime Tree Hotels. Access our corporate client base, OTA management, revenue optimisation, and marketing support.",
};

const BENEFITS = [
  { icon: TrendingUp, title: "Revenue Optimisation", desc: "Our revenue management team works to maximise your occupancy and ARR through dynamic pricing strategies." },
  { icon: Users, title: "Access to Corporate Clients", desc: "Tap into our established corporate account base — companies with guaranteed travel volumes across Delhi NCR." },
  { icon: Star, title: "OTA Management", desc: "We handle all OTA listings (Booking.com, MakeMyTrip, Agoda, etc.) so you focus on running the property." },
  { icon: CheckCircle2, title: "Brand Credibility", desc: "List under the trusted Lime Tree brand with 12 years of reputation and 4.4★ average rating." },
];

const PROPERTY_TYPES = [
  { type: "Hotels", desc: "2-star to 4-star hotels across any Indian city", icon: "🏨" },
  { type: "Serviced Apartments", desc: "Studio to 4BHK apartments in business districts", icon: "🏢" },
  { type: "Villas", desc: "Private villas for leisure and corporate offsites", icon: "🏖️" },
  { type: "Banquet Halls", desc: "Event spaces with hotel accommodation", icon: "🎉" },
];

export default function PartnerWithUsPage() {
  return (
    <div className="min-h-screen bg-stone-50 pt-16">
      {/* Hero */}
      <section className="bg-stone-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-400 text-xs font-semibold uppercase tracking-widest mb-4">Partner With Us</p>
            <h1 className="font-bold text-white mb-5" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontFamily: "var(--font-display)" }}>
              Grow Your Property With Lime Tree.
            </h1>
            <p className="text-white/60 text-lg mb-8 max-w-2xl">
              List your hotel, apartment, or villa with India&apos;s fastest-growing mid-premium hospitality brand. We bring the guests, you deliver the experience.
            </p>
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-2xl transition-all text-sm">
              Apply to Partner <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-600 text-xs font-semibold uppercase tracking-widest mb-2">What We Accept</p>
            <h2 className="font-bold text-stone-900 text-3xl" style={{ fontFamily: "var(--font-display)" }}>Property Types We Work With</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROPERTY_TYPES.map(({ type, desc, icon }) => (
              <div key={type} className="p-6 rounded-2xl border border-stone-100 hover:shadow-md hover:-translate-y-1 transition-all bg-white text-center">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-bold text-stone-900 text-base mb-2">{type}</h3>
                <p className="text-stone-400 text-xs">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-600 text-xs font-semibold uppercase tracking-widest mb-2">Why Partner With Us</p>
            <h2 className="font-bold text-stone-900 text-3xl" style={{ fontFamily: "var(--font-display)" }}>What You Get</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {BENEFITS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-5 p-6 rounded-2xl bg-white border border-stone-100">
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-primary-500" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-sm mb-1.5">{title}</h3>
                  <p className="text-stone-400 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: "30+", label: "Current Partners" },
              { value: "7", label: "Cities" },
              { value: "50K+", label: "Guests Annually" },
              { value: "12+", label: "Years in Business" },
            ].map(({ value, label }) => (
              <div key={label} className="text-white">
                <div className="font-bold text-3xl" style={{ fontFamily: "var(--font-display)" }}>{value}</div>
                <div className="text-white/70 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-primary-600 text-xs font-semibold uppercase tracking-widest mb-2">Get Started</p>
            <h2 className="font-bold text-stone-900 text-3xl" style={{ fontFamily: "var(--font-display)" }}>Apply to Partner</h2>
          </div>
          <form className="space-y-4 bg-white rounded-2xl border border-stone-100 p-8 shadow-sm">
            {[
              { label: "Property Name", placeholder: "Name of your property" },
              { label: "City", placeholder: "Where is the property?" },
              { label: "Number of Rooms/Units", placeholder: "e.g. 20 rooms" },
              { label: "Your Name", placeholder: "Your full name" },
              { label: "Phone", placeholder: "+91 XXXXX XXXXX", type: "tel" },
              { label: "Email", placeholder: "your@email.com", type: "email" },
            ].map(({ label, placeholder, type = "text" }) => (
              <div key={label}>
                <label className="block text-xs font-semibold text-stone-600 mb-1.5">{label}</label>
                <input type={type} placeholder={placeholder} className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all" />
              </div>
            ))}
            <div>
              <label className="block text-xs font-semibold text-stone-600 mb-1.5">Property Type</label>
              <select className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all">
                {["Hotel", "Serviced Apartment", "Villa", "Banquet Hall + Rooms", "Other"].map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-stone-600 mb-1.5">Tell us about your property</label>
              <textarea rows={3} placeholder="Location, category, current performance, what you're looking for..." className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all resize-none" />
            </div>
            <button type="submit" className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-xl transition-all text-sm">
              Submit Application <ArrowRight size={14} />
            </button>
          </form>
          <div className="mt-6 text-center text-stone-400 text-xs">
            Or reach us directly: <a href={`tel:${PHONE_NUMBER}`} className="text-primary-600 font-semibold">{PHONE_NUMBER}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
