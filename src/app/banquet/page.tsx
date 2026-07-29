import type { Metadata } from "next";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import Image from "next/image";
import Link from "next/link";
import { Users, CheckCircle2, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = pageMetadata({
  title: "Banquet & Events | Weddings, Corporate Events & More",
  description:
    "Host unforgettable weddings, corporate events, and social gatherings at LimeTree's luxury banquet venues. Expert planning, gourmet catering, and AV setup included.",
  path: "/banquet",
});

const EVENT_TYPES = [
  { title: "Royal Weddings", icon: "💍", desc: "From intimate ceremonies to grand receptions — every detail crafted to perfection.", img: "https://assets.simplotel.com/simplotel/image/upload/x_0,y_11,w_1448,h_1064,r_0,c_crop/q_80,w_600,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-hotel-banquet-jaipur/Banquet_gkxjry", capacity: "Up to 500" },
  { title: "Corporate Events", icon: "🏢", desc: "Conferences, product launches, AGMs, and team offsites — fully AV-equipped.", img: "https://assets.simplotel.com/simplotel/image/upload/q_80,w_600,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-hotels-and-banquet-hall-near-huda-metro-gurgaon/Banquet_fxsxcz", capacity: "Up to 300" },
  { title: "Social Celebrations", icon: "🎉", desc: "Birthdays, anniversaries, reunions — we make every milestone memorable.", img: "https://assets.simplotel.com/simplotel/image/upload/x_194,y_0,w_3852,h_2832,r_0,c_crop/q_80,w_600,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-hotel-and-banquet-greater-noida/DSC00710_ikntox", capacity: "Up to 150" },
  { title: "Exhibition & Trade Shows", icon: "🎪", desc: "Spacious halls with configurable layouts for exhibitions and product showcases.", img: "https://assets.simplotel.com/simplotel/image/upload/x_194,y_0,w_3852,h_2832,r_0,c_crop/q_80,w_600,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-hotel-and-banquet-greater-noida/DSC00679_nf9ilw", capacity: "Up to 1000" },
];

const PACKAGES = [
  {
    name: "Silver",
    price: "₹85,000",
    label: "per event",
    inclusions: ["Basic hall decoration", "Welcome drinks", "3-course set menu", "Basic AV setup", "Dedicated coordinator"],
  },
  {
    name: "Gold",
    price: "₹1,50,000",
    label: "per event",
    popular: true,
    inclusions: ["Premium floral decoration", "Cocktail hour", "5-course gourmet menu", "Full AV & lighting rig", "Photography package", "Coordinator team"],
  },
  {
    name: "Platinum",
    price: "Custom",
    label: "fully tailored",
    inclusions: ["Luxury bespoke décor", "Open bar", "Chef's curated menu", "Professional AV & stage", "Photography + Videography", "Live music", "Event concierge"],
  },
];

export default function BanquetPage() {
  return (
    <div className="min-h-screen bg-cream pt-16">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Banquet & Events", path: "/banquet" }])} />
      {/* Hero */}
      <section className="relative h-[60vh] min-h-96 bg-dark overflow-hidden">
        <Image
          src="https://assets.simplotel.com/simplotel/image/upload/x_0,y_11,w_1448,h_1064,r_0,c_crop/q_80,w_1920,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-hotel-banquet-jaipur/hotel-lobby"
          alt="Banquet & Events at LimeTree"
          fill
          className="object-cover opacity-60"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-luxury relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-primary-400 text-sm font-medium mb-5 tracking-wider">
              <div className="h-px w-8 bg-primary-400" />
              Banquet & Events
            </div>
            <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
              Create Memories<br />
              <span className="text-primary-300">That Last Forever</span>
            </h1>
            <p className="text-white/80 text-xl max-w-xl mb-8">
              Luxury venues, expert planners, and flawless execution — your perfect event starts here.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#enquire" className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-all hover:shadow-primary">
                Get a Quote <ArrowRight size={16} />
              </Link>
              <Link href="#events" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all">
                View Event Types
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary-600">
        <div className="container-luxury py-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: "500+", label: "Events Hosted" },
            { value: "50,000+", label: "Happy Guests" },
            { value: "1,000", label: "Max Capacity" },
            { value: "4.9 ★", label: "Event Rating" },
          ].map(({ value, label }) => (
            <div key={label} className="text-white">
              <div className="font-display font-bold text-3xl">{value}</div>
              <div className="text-white/70 text-sm mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Event Types */}
      <section id="events" className="section-padding bg-white">
        <div className="container-luxury">
          <SectionHeader eyebrow="What We Host" title="Every Occasion, Perfectly Executed" className="mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {EVENT_TYPES.map((event) => (
              <div key={event.title} className="group rounded-2xl overflow-hidden border border-dark-100 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 bg-white">
                <div className="relative h-48 img-zoom">
                  <Image src={event.img} alt={event.title} fill className="object-cover" sizes="25vw" />
                  <div className="absolute inset-0 card-overlay" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-xs px-2.5 py-1 rounded-full">
                    <Users size={11} /> {event.capacity}
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-2xl mb-2">{event.icon}</div>
                  <h3 className="font-semibold text-dark text-base mb-1.5 group-hover:text-primary-600 transition-colors">{event.title}</h3>
                  <p className="text-dark-400 text-xs">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-cream">
        <div className="container-luxury">
          <SectionHeader eyebrow="Gallery" title="Moments Captured in Our Spaces" className="mb-10" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              "https://assets.simplotel.com/simplotel/image/upload/x_0,y_11,w_1448,h_1064,r_0,c_crop/q_80,w_400,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-hotel-banquet-jaipur/hotel-lobby",
              "https://assets.simplotel.com/simplotel/image/upload/q_80,w_400,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-hotels-and-banquet-hall-near-huda-metro-gurgaon/Banquet_fxsxcz",
              "https://assets.simplotel.com/simplotel/image/upload/x_0,y_11,w_1448,h_1064,r_0,c_crop/q_80,w_400,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-hotel-banquet-jaipur/Banquet_gkxjry",
              "https://assets.simplotel.com/simplotel/image/upload/x_194,y_0,w_3852,h_2832,r_0,c_crop/q_80,w_400,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-hotel-and-banquet-greater-noida/DSC00679_nf9ilw",
              "https://assets.simplotel.com/simplotel/image/upload/q_80,w_400,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-hotels-and-banquet-hall-near-huda-metro-gurgaon/Lime_Tree_Hotel_Huda_City_Center_Gurgaon_10_xj2mge",
              "https://assets.simplotel.com/simplotel/image/upload/x_194,y_0,w_3852,h_2832,r_0,c_crop/q_80,w_400,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-hotel-and-banquet-greater-noida/DSC00710_ikntox",
              "https://assets.simplotel.com/simplotel/image/upload/q_80,w_400,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-hotels-banquet-vrindavan/Vrindavan-59_564e1a7a",
              "https://assets.simplotel.com/simplotel/image/upload/x_196,y_0,w_3808,h_2800,r_0,c_crop/q_80,w_400,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-hotels-banquet-vrindavan/Vrindavan-59_564e1a7a",
            ].map((src, i) => (
              <div key={i} className={`relative rounded-xl overflow-hidden img-zoom ${i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"}`}>
                <Image src={src} alt={`Gallery ${i + 1}`} fill className="object-cover" sizes="25vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <SectionHeader eyebrow="Packages" title="Event Packages for Every Budget" className="mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {PACKAGES.map((pkg) => (
              <div key={pkg.name} className={`relative rounded-2xl border-2 bg-white p-6 ${pkg.popular ? "border-primary-500 shadow-primary" : "border-dark-100"}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary-500 text-white text-xs font-bold px-4 py-1.5 rounded-full">Most Popular</span>
                  </div>
                )}
                <h3 className="font-display font-bold text-2xl text-dark mb-1">{pkg.name}</h3>
                <div className="font-display font-bold text-3xl text-primary-600 mb-0.5">{pkg.price}</div>
                <div className="text-dark-400 text-xs mb-5">{pkg.label}</div>
                <ul className="flex flex-col gap-2 mb-6">
                  {pkg.inclusions.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-dark">
                      <CheckCircle2 size={14} className="text-primary-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="#enquire" className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all ${pkg.popular ? "bg-primary-500 text-white hover:bg-primary-600" : "border-2 border-primary-200 text-primary-600 hover:border-primary-500"}`}>
                  Choose {pkg.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquire" className="section-padding bg-cream">
        <div className="container-luxury max-w-3xl">
          <SectionHeader eyebrow="Get a Quote" title="Tell Us About Your Event" description="Share your requirements and our event specialist will send you a customized proposal within 24 hours." className="mb-10" />
          <form className="bg-white rounded-2xl border border-dark-100 shadow-card p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              {[
                { label: "Name", placeholder: "Your full name" },
                { label: "Phone", placeholder: "+91 XXXXX XXXXX" },
                { label: "Email", placeholder: "your@email.com" },
                { label: "Expected Date", placeholder: "DD/MM/YYYY", type: "date" },
              ].map(({ label, placeholder, type = "text" }) => (
                <div key={label}>
                  <label className="block text-sm font-medium text-dark-700 mb-1.5">{label}</label>
                  <input type={type} placeholder={placeholder} className="w-full px-4 py-3 rounded-xl border border-dark-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all" />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-dark-700 mb-1.5">Event Type</label>
                <select className="w-full px-4 py-3 rounded-xl border border-dark-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all">
                  {EVENT_TYPES.map(e => <option key={e.title}>{e.title}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-dark-700 mb-1.5">Expected Guests</label>
                <input placeholder="e.g. 150" className="w-full px-4 py-3 rounded-xl border border-dark-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all" />
              </div>
            </div>
            <div className="mb-5">
              <label className="block text-sm font-medium text-dark-700 mb-1.5">Tell us more about your event</label>
              <textarea rows={4} placeholder="Describe your vision, special requirements, catering preferences..." className="w-full px-4 py-3 rounded-xl border border-dark-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none" />
            </div>
            <button type="submit" className="flex items-center justify-center gap-2 w-full py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-all hover:shadow-primary">
              Submit Enquiry <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
