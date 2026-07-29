import type { Metadata } from "next";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Phone, MessageCircle, MapPin } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_URL } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "Medical Tourism Stay | Hotel Near Medanta & Artemis — Lime Tree Hotels",
  description: "Stay near Medanta, Artemis, Fortis, and other top Gurgaon hospitals. Wheelchair-friendly rooms, pharmacy assistance, pick-up & drop, attendant accommodation. Use code HEALING15.",
  keywords: ["hotel near Medanta", "hotel near Artemis hospital Gurgaon", "medical tourism accommodation India", "hospital stay Gurgaon"],
  path: "/medical-tourism",
});

const HOSPITALS = [
  { name: "Medanta — The Medicity", dist: "0.5 km", specialty: "Cardiac, Oncology, Neurology" },
  { name: "Artemis Hospital", dist: "1.2 km", specialty: "Orthopaedics, Transplant, Robotic Surgery" },
  { name: "Fortis Memorial Research Institute", dist: "3.5 km", specialty: "Multi-specialty" },
  { name: "Paras Hospitals", dist: "4 km", specialty: "Emergency, ICU, Fertility" },
];

const FEATURES = [
  { title: "Wheelchair-Accessible Rooms", desc: "Wide doorways, roll-in showers, grab rails — designed for patients and elderly guests." },
  { title: "Pharmacy Assistance", desc: "Our staff will help source medicines, coordinate with hospital pharmacies, and manage prescription pickups." },
  { title: "Pick-Up & Drop Service", desc: "Dedicated pick-up and drop from hospital — no auto-rickshaw negotiations while recovering." },
  { title: "Attendant Accommodation", desc: "Rooms configured for patient + 1–2 attendants. Extra beds provided at no extra charge." },
  { title: "Nutritious Meal Options", desc: "Light, diet-friendly meals available on request. Special dietary requirements accommodated." },
  { title: "24x7 Concierge Support", desc: "Round-the-clock support for hospital appointment scheduling, lab coordination, and any emergency needs." },
];

export default function MedicalTourismPage() {
  return (
    <div className="min-h-screen bg-stone-50 pt-16">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Medical Tourism", path: "/medical-tourism" }])} />
      {/* Hero */}
      <section className="relative bg-blue-950 overflow-hidden">
        <Image
          src="https://assets.simplotel.com/simplotel/image/upload/q_80,w_1920,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-hotels-service-apartment-private-limited/LT-Sector_38-115_4e3d5eaa"
          alt="Medical Stay at Lime Tree Hotels"
          fill className="object-cover opacity-20" priority sizes="100vw"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-400/20 text-blue-300 text-xs font-semibold px-4 py-2 rounded-full mb-5 border border-blue-400/30">
              Medical Tourism
            </div>
            <h1 className="font-bold text-white mb-5" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontFamily: "var(--font-display)" }}>
              Healing Begins With<br /><span className="text-blue-300">Comfortable Rest.</span>
            </h1>
            <p className="text-white/60 text-lg mb-8 max-w-2xl">
              Dedicated accommodation for patients and their families near Medanta, Artemis, and Fortis in Gurgaon — wheelchair-friendly, with pharmacy assistance, pick-up, and drop.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-2xl transition-all text-sm">
                Book Healing Stay <ArrowRight size={15} />
              </a>
              <a href={`tel:${PHONE_NUMBER}`} className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-2xl transition-all text-sm">
                <Phone size={14} /> Call 24x7
              </a>
            </div>
            <div className="inline-flex items-center gap-3 bg-primary-500/20 border border-primary-400/30 text-primary-300 text-sm font-semibold px-5 py-3 rounded-xl">
              <span className="text-white text-xs">Promo Code:</span>
              <span className="font-mono text-primary-300 tracking-widest">HEALING15</span>
              <span className="text-white/50 text-xs">— 15% off healing stays</span>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Hospitals */}
      <section className="py-16 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary-600 text-xs font-semibold uppercase tracking-widest mb-6 text-center">Nearby Hospitals</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {HOSPITALS.map(({ name, dist, specialty }) => (
              <div key={name} className="p-5 rounded-2xl border border-stone-100 hover:border-blue-200 hover:shadow-md transition-all bg-white">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={13} className="text-blue-500 flex-shrink-0" />
                  <span className="text-blue-600 text-xs font-bold">{dist} away</span>
                </div>
                <h3 className="font-bold text-stone-900 text-sm mb-1">{name}</h3>
                <p className="text-stone-400 text-xs">{specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-600 text-xs font-semibold uppercase tracking-widest mb-2">Our Services</p>
            <h2 className="font-bold text-stone-900 text-3xl sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
              Everything a Patient Family Needs
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map(({ title, desc }) => (
              <div key={title} className="p-6 rounded-2xl bg-white border border-stone-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                  <CheckCircle2 size={15} className="text-blue-500" />
                </div>
                <h3 className="font-bold text-stone-900 text-sm mb-2">{title}</h3>
                <p className="text-stone-400 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-blue-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="font-bold text-white text-xl leading-relaxed mb-4" style={{ fontFamily: "var(--font-display)" }}>
            &ldquo;My father was admitted at Medanta for 3 weeks. Lime Tree arranged everything — rooms, pharmacy, hospital drops. The staff treated us like family during the hardest time of our lives.&rdquo;
          </blockquote>
          <p className="text-blue-300 text-sm">— Anjali S., reviewed on Google</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-primary-50 border border-primary-100">
              <h3 className="font-bold text-stone-900 text-xl mb-3" style={{ fontFamily: "var(--font-display)" }}>Book Your Healing Stay</h3>
              <p className="text-stone-500 text-sm mb-5">Use promo code <span className="font-mono font-bold text-primary-600">HEALING15</span> for 15% off. Our team will handle everything from check-in to hospital coordination.</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-bold text-sm rounded-xl hover:bg-[#20b85a] transition-colors">
                <MessageCircle size={14} /> WhatsApp to Book
              </a>
            </div>
            <div className="p-8 rounded-2xl bg-stone-900">
              <h3 className="font-bold text-white text-xl mb-3" style={{ fontFamily: "var(--font-display)" }}>Need Immediate Help?</h3>
              <p className="text-white/50 text-sm mb-5">Our team is available 24x7. Call us for same-day medical stay arrangements near Medanta and Artemis.</p>
              <a href={`tel:${PHONE_NUMBER}`} className="inline-flex items-center gap-2 px-6 py-3 bg-white text-stone-900 font-bold text-sm rounded-xl hover:bg-stone-100 transition-colors">
                <Phone size={14} /> {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
