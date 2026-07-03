import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HOTELS } from "@/lib/data";
import HotelCard from "@/components/ui/HotelCard";
import { ChefHat, Sofa, Shirt, Monitor, Clock, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Serviced Apartments | Studio to 3BHK in Gurgaon & Delhi — Lime Tree Hotels",
  description: "Fully furnished serviced apartments in Gurgaon and Delhi — Studio, 1BHK, 2BHK, 3BHK options. Kitchen, WiFi, housekeeping, power backup. Weekly & monthly packages available.",
};

const APARTMENT_TYPES = [
  {
    title: "Studio Apartment",
    desc: "Perfect for solo professionals and short-term corporate stays",
    size: "35–45 sqm",
    beds: "1 Queen Bed",
    price: "From ₹3,999/night",
    img: "https://assets.simplotel.com/simplotel/image/upload/q_80,w_600,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-hotel-one-bhk-serviced-apartment---noida-sector-50-metro/5_ih0fjv",
  },
  {
    title: "1 BHK Apartment",
    desc: "Separate bedroom and living room for couples or pairs",
    size: "55–70 sqm",
    beds: "1 King Bed + Sofa",
    price: "From ₹5,499/night",
    img: "https://assets.simplotel.com/simplotel/image/upload/q_80,w_600,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-two-bhk-service-apartment-golf-course-road-gurgaon/LT-Manesar-6_nf9ile",
  },
  {
    title: "2 BHK Apartment",
    desc: "Spacious two-bedroom for families or small teams",
    size: "85–110 sqm",
    beds: "2 King Beds",
    price: "From ₹7,999/night",
    img: "https://assets.simplotel.com/simplotel/image/upload/q_80,w_600,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-two-bhk-service-apartment-golf-course-road-gurgaon/10_-_Copy_fyq6iv",
  },
  {
    title: "3 BHK Apartment",
    desc: "Premium three-bedroom for larger groups and extended families",
    size: "120–160 sqm",
    beds: "3 King Beds",
    price: "From ₹11,999/night",
    img: "https://assets.simplotel.com/simplotel/image/upload/q_80,w_600,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-3bhk-serviced-apartments-dlf-phase---5-gurgaon/DSC01875_xqheud",
  },
];

const FEATURES = [
  { icon: ChefHat, label: "Fully Equipped Kitchen", desc: "Refrigerator, microwave, cooktop, and all utensils — cook just like home" },
  { icon: Sofa, label: "Private Living Room", desc: "Separate living space with comfortable seating and Smart TV" },
  { icon: Shirt, label: "Laundry & Washer", desc: "In-unit washing machine for complete independence" },
  { icon: Monitor, label: "Dedicated Workspace", desc: "Ergonomic work desk with high-speed fiber internet" },
  { icon: Clock, label: "Flexible Stay Options", desc: "Weekly, monthly, and quarterly packages with significant savings" },
];

const INCLUSIONS = [
  "Weekly housekeeping", "High-speed WiFi", "Power backup",
  "24x7 security & CCTV", "Parking", "Maintenance support",
  "Move-in ready", "Water & electricity", "Concierge 24x7",
];

const apartments = HOTELS.filter((h) => h.propertyType === "serviced-apartment");

export default function ServicedApartmentsPage() {
  return (
    <div className="min-h-screen bg-stone-50 pt-16">
      {/* Hero */}
      <section className="relative bg-stone-900 overflow-hidden">
        <Image
          src="https://assets.simplotel.com/simplotel/image/upload/q_80,w_1920,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-two-bhk-service-apartment-golf-course-road-gurgaon/10_-_Copy_fyq6iv"
          alt="Lime Tree Serviced Apartments"
          fill className="object-cover opacity-30" priority sizes="100vw"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="max-w-3xl">
            <p className="text-primary-400 text-xs font-semibold uppercase tracking-widest mb-4">Serviced Apartments</p>
            <h1 className="font-bold text-white mb-5" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontFamily: "var(--font-display)" }}>
              Your Home,<br /><span className="text-primary-400">Wherever You Go.</span>
            </h1>
            <p className="text-white/60 text-lg mb-8 max-w-2xl">
              Studio to 3BHK serviced apartments in Gurgaon and Delhi — fully furnished with kitchen, laundry, and hotel-grade services. Monthly packages with up to 30% savings.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="#apartments" className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-2xl transition-all text-sm">
                Browse Apartments <ArrowRight size={15} />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold rounded-2xl transition-all text-sm">
                Get Monthly Rate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary-600 text-xs font-semibold uppercase tracking-widest mb-2">Apartment Types</p>
            <h2 className="font-bold text-stone-900 text-3xl sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>Find Your Perfect Space</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {APARTMENT_TYPES.map((apt) => (
              <div key={apt.title} className="group rounded-2xl overflow-hidden border border-stone-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 bg-white">
                <div className="relative h-48 overflow-hidden">
                  <Image src={apt.img} alt={apt.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="25vw" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xs bg-black/40 backdrop-blur-sm text-white px-2.5 py-1 rounded-full">{apt.size}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-stone-900 text-base mb-1">{apt.title}</h3>
                  <p className="text-stone-400 text-xs mb-3">{apt.desc}</p>
                  <div className="text-xs text-stone-500 mb-4">🛏 {apt.beds}</div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary-600 text-sm">{apt.price}</span>
                    <Link href="/hotels?type=serviced-apartment" className="text-xs text-primary-600 font-semibold hover:underline">Book →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features + Inclusions */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-primary-600 text-xs font-semibold uppercase tracking-widest mb-3">What&apos;s Included</p>
              <h2 className="font-bold text-stone-900 text-3xl mb-7" style={{ fontFamily: "var(--font-display)" }}>Everything You Need, Built Right In</h2>
              <div className="flex flex-col gap-4">
                {FEATURES.map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="flex gap-4 p-4 bg-white rounded-2xl border border-stone-100">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-primary-500" />
                    </div>
                    <div>
                      <div className="font-semibold text-stone-900 text-sm">{label}</div>
                      <div className="text-stone-400 text-xs mt-0.5">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-white rounded-2xl border border-stone-100 p-6 mb-5">
                <h3 className="font-bold text-stone-900 text-base mb-4">All Stays Include</h3>
                <div className="grid grid-cols-2 gap-2.5">
                  {INCLUSIONS.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-stone-600">
                      <CheckCircle2 size={13} className="text-primary-500 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-primary-500 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-2xl mb-2" style={{ fontFamily: "var(--font-display)" }}>Save Up to 30%</h3>
                <p className="text-white/80 text-sm mb-4">On stays of 7+ nights. Monthly packages available with additional savings and priority allocation.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-primary-700 font-bold text-sm rounded-xl hover:bg-stone-50 transition-colors">
                  Get Monthly Rate <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Properties */}
      {apartments.length > 0 && (
        <section id="apartments" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-primary-600 text-xs font-semibold uppercase tracking-widest mb-2">Our Apartments</p>
              <h2 className="font-bold text-stone-900 text-3xl" style={{ fontFamily: "var(--font-display)" }}>Available Serviced Apartments</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {apartments.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
