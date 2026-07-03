import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Users, UtensilsCrossed, ArrowRight, Star, ChefHat } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Amaya Restaurant | Legacy in Every Flavour",
  description:
    "Experience Amaya — LimeTree's signature restaurant inspired by Jaipur's culinary heritage. Royal Rajasthani flavors meets modern gastronomy. Reserve your table today.",
};

const MENU_HIGHLIGHTS = [
  { category: "Starters", items: ["Dal Baati Churma Bites", "Rajasthani Mirchi Pakoda", "Ghewar Chaat", "Laal Maas Sliders"] },
  { category: "Mains", items: ["Ker Sangri Sabzi", "Rajasthani Laal Maas", "Murgh Makhani", "Paneer Lababdar"] },
  { category: "Breads", items: ["Bajra Roti", "Missi Roti", "Tandoori Naan", "Khamiri Roti"] },
  { category: "Desserts", items: ["Ghewar with Rabri", "Malpua & Kulfi", "Moong Dal Halwa", "Gulab Jamun Tower"] },
];

const DINING_EXPERIENCES = [
  { title: "Royal Rajasthani Thali", desc: "A curated spread of Rajasthan's finest dishes — dal, sabzi, rotis, rice, dessert, and more.", img: "https://assets.simplotel.com/simplotel/image/upload/x_0,y_11,w_1448,h_1064,r_0,c_crop/q_80,w_600,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-hotel-banquet-jaipur/hotel-lobby" },
  { title: "Heritage Breakfast", desc: "Begin your morning with Rajasthani breakfast specialties and freshly brewed chai.", img: "https://assets.simplotel.com/simplotel/image/upload/q_80,w_600,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-hotels-service-apartment-private-limited/BA_132-02_0236d9e9" },
  { title: "Chef's Table", desc: "An exclusive 7-course experience with our Executive Chef. Limited seats — advance booking required.", img: "https://assets.simplotel.com/simplotel/image/upload/q_80,w_600,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-hotel-banquet-jaipur/Banquet_gkxjry" },
  { title: "Rooftop Sundowner", desc: "Cocktails and small bites on our rooftop with panoramic views of Jaipur's Pink City skyline.", img: "https://assets.simplotel.com/simplotel/image/upload/x_0,y_11,w_1448,h_1064,r_0,c_crop/q_80,w_600,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-hotel-banquet-jaipur/hotel-lobby" },
];

export default function RestaurantPage() {
  return (
    <div className="min-h-screen bg-cream pt-16">
      {/* Cinematic Hero */}
      <section className="relative h-screen max-h-[700px] bg-dark overflow-hidden">
        <Image
          src="https://assets.simplotel.com/simplotel/image/upload/x_0,y_11,w_1448,h_1064,r_0,c_crop/q_80,w_1920,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-hotel-banquet-jaipur/hotel-lobby"
          alt="Amaya Restaurant"
          fill
          className="object-cover opacity-60"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-transparent to-dark/80" />

        <div className="relative z-10 container-luxury h-full flex flex-col justify-end pb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-primary-400 text-sm font-medium mb-4 tracking-wider">
              <div className="h-px w-8 bg-primary-400" />
              LimeTree Heritage, Jaipur
            </div>
            <h1 className="font-display font-bold text-white mb-2" style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)", lineHeight: 1.0 }}>
              Amaya
            </h1>
            <p className="font-display text-primary-300 text-2xl italic mb-6">
              &ldquo;Legacy in Every Flavour&rdquo;
            </p>
            <p className="text-white/80 text-lg max-w-lg mb-8 leading-relaxed">
              Inspired by Jaipur&apos;s magnificent culinary heritage. Every dish carries the soul of a royal kitchen, reimagined for the modern palate.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#reserve" className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-all hover:shadow-primary">
                Reserve a Table <ArrowRight size={16} />
              </Link>
              <Link href="#menu" className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all">
                <UtensilsCrossed size={16} />
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Info Strip */}
      <section className="bg-primary-600">
        <div className="container-luxury py-5 flex flex-wrap gap-6 justify-center sm:justify-start text-white/90 text-sm">
          <div className="flex items-center gap-2"><Clock size={15} /> <span>Breakfast 7–10:30 AM · Lunch 12–3 PM · Dinner 7–11 PM</span></div>
          <div className="flex items-center gap-2"><MapPin size={15} /> <span>LimeTree Heritage, Jaipur, Rajasthan</span></div>
          <div className="flex items-center gap-2"><Users size={15} /> <span>Capacity: 80 Guests</span></div>
          <div className="flex items-center gap-2">{[1,2,3,4,5].map(i => <Star key={i} size={13} className="fill-accent-400 text-accent-400" />)} <span>4.9 (520 reviews)</span></div>
        </div>
      </section>

      {/* Chef Story */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="https://assets.simplotel.com/simplotel/image/upload/q_80,w_800,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-hotels-and-banquet-hall-near-huda-metro-gurgaon/Lime_Tree_Hotel_Huda_City_Center_Gurgaon_10_xj2mge"
                alt="Executive Chef at Amaya"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-primary-600 text-sm font-medium mb-6 tracking-wider">
                <ChefHat size={16} />
                The Chef&apos;s Story
              </div>
              <h2 className="font-display font-bold text-4xl text-dark mb-5">
                Cooking with Legacy, Plating with Love
              </h2>
              <p className="text-dark-600 leading-relaxed mb-4">
                Chef Ramesh Choudhary brings three decades of culinary mastery to Amaya. Trained in the royal kitchens of Jaipur and refined at prestigious institutions across Europe, he has dedicated his life to preserving and evolving Rajasthan&apos;s extraordinary food culture.
              </p>
              <p className="text-dark-600 leading-relaxed mb-6">
                &ldquo;Every recipe here has a story — a grandmother&apos;s secret, a royal court tradition, a harvest festival meal. My job is to keep that story alive on every plate I send out.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <ChefHat size={20} className="text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-dark">Chef Ramesh Choudhary</div>
                  <div className="text-dark-400 text-sm">Executive Chef, Amaya</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dining Experiences */}
      <section className="section-padding bg-cream">
        <div className="container-luxury">
          <SectionHeader eyebrow="Dining Experiences" title="Choose Your Amaya Experience" className="mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DINING_EXPERIENCES.map((exp) => (
              <div key={exp.title} className="group rounded-2xl overflow-hidden bg-white border border-dark-100 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-48 img-zoom">
                  <Image src={exp.img} alt={exp.title} fill className="object-cover" sizes="25vw" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-dark text-sm mb-1.5 group-hover:text-primary-600 transition-colors">{exp.title}</h3>
                  <p className="text-dark-400 text-xs leading-relaxed">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="section-padding bg-dark">
        <div className="container-luxury">
          <SectionHeader eyebrow="Our Menu" title="A Taste of Rajasthan" description="Signature dishes crafted with the finest local produce and time-honoured recipes." className="mb-12" dark />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MENU_HIGHLIGHTS.map(({ category, items }) => (
              <div key={category} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h3 className="font-semibold text-primary-400 text-sm uppercase tracking-widest mb-4">{category}</h3>
                <ul className="flex flex-col gap-2.5">
                  {items.map((item) => (
                    <li key={item} className="text-white/70 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Table Reservation */}
      <section id="reserve" className="section-padding bg-white">
        <div className="container-luxury max-w-2xl">
          <SectionHeader eyebrow="Reserve" title="Book Your Table at Amaya" description="Reserve online and receive a confirmation instantly. Walk-ins welcome based on availability." className="mb-10" />
          <form className="bg-white rounded-2xl border border-dark-100 shadow-card p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              {[
                { label: "First Name", placeholder: "Priya" },
                { label: "Last Name", placeholder: "Sharma" },
                { label: "Phone Number", placeholder: "+91 XXXXX XXXXX" },
                { label: "Email Address", placeholder: "priya@email.com" },
              ].map(({ label, placeholder }) => (
                <div key={label}>
                  <label className="block text-sm font-medium text-dark-700 mb-1.5">{label}</label>
                  <input placeholder={placeholder} className="w-full px-4 py-3 rounded-xl border border-dark-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all" />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-dark-700 mb-1.5">Date</label>
                <input type="date" className="w-full px-4 py-3 rounded-xl border border-dark-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark-700 mb-1.5">Time</label>
                <select className="w-full px-4 py-3 rounded-xl border border-dark-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all">
                  {["7:00 AM", "8:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"].map(t => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-dark-700 mb-1.5">Number of Guests</label>
                <select className="w-full px-4 py-3 rounded-xl border border-dark-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all">
                  {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-dark-700 mb-1.5">Occasion</label>
                <select className="w-full px-4 py-3 rounded-xl border border-dark-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all">
                  <option>Regular Dining</option>
                  <option>Anniversary</option>
                  <option>Birthday</option>
                  <option>Business Dinner</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="mb-5">
              <label className="block text-sm font-medium text-dark-700 mb-1.5">Special Requests</label>
              <textarea rows={3} placeholder="Dietary preferences, seating requests, allergies..." className="w-full px-4 py-3 rounded-xl border border-dark-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none" />
            </div>
            <button type="submit" className="flex items-center justify-center gap-2 w-full py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-all hover:shadow-primary">
              Confirm Reservation <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
