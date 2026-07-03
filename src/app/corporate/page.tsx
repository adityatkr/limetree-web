import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Users, FileText, Clock, Zap, Plane, Tag, Phone } from "lucide-react";
import { CORPORATE_BENEFITS } from "@/lib/data";
import { PHONE_NUMBER, EMAIL, WHATSAPP_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Corporate Bookings | Business Travel Solutions — Lime Tree Hotels",
  description: "Dedicated corporate travel solutions from Lime Tree Hotels — GST invoicing, Relationship Manager, self-booking portal, 30+ properties across Gurgaon, Delhi & NCR.",
};

const ICON_MAP: Record<string, React.ReactNode> = {
  "Dedicated Relationship Manager": <Users size={18} />,
  "GST-Compliant Invoicing": <FileText size={18} />,
  "Bill to Company": <FileText size={18} />,
  "Self-Booking Portal": <Zap size={18} />,
  "20% F&B Discount": <Tag size={18} />,
  "Flexible Cancellation": <Clock size={18} />,
  "Early Check-In": <Clock size={18} />,
  "Airport Transfers": <Plane size={18} />,
};

export default function CorporatePage() {
  return (
    <div className="min-h-screen bg-stone-50 pt-16">
      {/* Hero */}
      <section className="bg-stone-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-400 text-xs font-semibold uppercase tracking-widest mb-4">Corporate Travel</p>
            <h1 className="font-bold text-white mb-5" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontFamily: "var(--font-display)" }}>
              Business Travel Without the Headache.
            </h1>
            <p className="text-white/60 text-lg mb-8 max-w-2xl">
              Dedicated relationship managers, GST billing, self-booking portals, and 30+ properties across Delhi NCR — everything your corporate travel desk needs.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-2xl transition-all text-sm">
                Setup Corporate Account <ArrowRight size={15} />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-2xl transition-all text-sm">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-600 text-xs font-semibold uppercase tracking-widest mb-2">What You Get</p>
            <h2 className="font-bold text-stone-900 text-3xl sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>Built for Corporate Travel</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CORPORATE_BENEFITS.map((benefit) => (
              <div key={benefit.title} className="p-6 rounded-2xl border border-stone-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 bg-white">
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center text-primary-500 mb-4">
                  {ICON_MAP[benefit.title] || <CheckCircle2 size={18} />}
                </div>
                <h3 className="font-bold text-stone-900 text-sm mb-2">{benefit.title}</h3>
                <p className="text-stone-400 text-xs leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage + Form */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-primary-600 text-xs font-semibold uppercase tracking-widest mb-3">Our Coverage</p>
              <h2 className="font-bold text-stone-900 text-3xl mb-5" style={{ fontFamily: "var(--font-display)" }}>30+ Properties Across Key Business Hubs</h2>
              <div className="space-y-3 mb-8">
                {[
                  { city: "Gurgaon", detail: "15+ properties near Cyber City, IFFCO, Golf Course Road" },
                  { city: "Delhi", detail: "South Delhi — Greater Kailash-2, Kailash Colony" },
                  { city: "Greater Noida", detail: "Near India Expo Mart, Knowledge Park" },
                  { city: "Noida", detail: "Sector 50/72 — IT and tech corridor" },
                  { city: "Jaipur", detail: "City centre with banquet facilities" },
                  { city: "Vrindavan", detail: "Government delegation stays" },
                  { city: "Goa", detail: "4BHK private villa for team offsites" },
                ].map(({ city, detail }) => (
                  <div key={city} className="flex items-start gap-3">
                    <CheckCircle2 size={14} className="text-primary-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-stone-800 text-sm">{city}</span>
                      <span className="text-stone-400 text-xs ml-2">{detail}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "30+", label: "Properties" },
                  { value: "20%", label: "F&B Discount" },
                  { value: "GST", label: "Invoicing" },
                  { value: "24x7", label: "Support" },
                ].map(({ value, label }) => (
                  <div key={label} className="p-4 rounded-2xl bg-white border border-stone-100 text-center">
                    <div className="font-bold text-primary-500 text-2xl" style={{ fontFamily: "var(--font-display)" }}>{value}</div>
                    <div className="text-stone-500 text-xs">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-white rounded-2xl border border-stone-100 p-8 shadow-sm">
              <h3 className="font-bold text-stone-900 text-xl mb-6">Get a Corporate Quote</h3>
              <form className="space-y-4">
                {[
                  { label: "Company Name", placeholder: "Your company" },
                  { label: "Contact Person", placeholder: "Your name" },
                  { label: "Email", placeholder: "work@company.com", type: "email" },
                  { label: "Phone", placeholder: "+91 XXXXX XXXXX", type: "tel" },
                ].map(({ label, placeholder, type = "text" }) => (
                  <div key={label}>
                    <label className="block text-xs font-semibold text-stone-600 mb-1.5">{label}</label>
                    <input type={type} placeholder={placeholder} className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all" />
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-semibold text-stone-600 mb-1.5">Travel Requirements</label>
                  <textarea rows={3} placeholder="Cities, frequency, number of travelers, special requirements..." className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all resize-none" />
                </div>
                <button type="submit" className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-xl transition-all text-sm">
                  Request Corporate Rates <ArrowRight size={14} />
                </button>
              </form>
              <div className="mt-5 pt-5 border-t border-stone-100 flex items-center gap-2 text-stone-400 text-xs">
                <Phone size={12} className="text-primary-500" />
                Or call us directly: <a href={`tel:${PHONE_NUMBER}`} className="text-primary-600 font-medium">{PHONE_NUMBER}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
