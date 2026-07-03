import { Wifi, Coffee, Car, Zap, Shield, Clock, Utensils, WashingMachine, MapPin, HeartHandshake, BadgeCheck, Tag } from "lucide-react";

const USPs = [
  { icon: Wifi, title: "High-Speed WiFi", desc: "25 Mbps+ guaranteed across all properties" },
  { icon: Coffee, title: "Complimentary Breakfast", desc: "Full breakfast included in most rates" },
  { icon: Car, title: "Free Parking", desc: "Covered and surface parking at all properties" },
  { icon: Zap, title: "24x7 Power Backup", desc: "Uninterrupted power for seamless work" },
  { icon: Clock, title: "24x7 Front Desk", desc: "Always available — no matter the hour" },
  { icon: Utensils, title: "Full Kitchen (Apts)", desc: "Cook your own meals in serviced apartments" },
  { icon: WashingMachine, title: "In-Unit Laundry", desc: "Washing machine in all serviced apartments" },
  { icon: Shield, title: "CCTV & Security", desc: "Round-the-clock security at every property" },
  { icon: MapPin, title: "Prime Locations", desc: "Near metros, hospitals, offices & markets" },
  { icon: HeartHandshake, title: "Women-Friendly", desc: "Dedicated safety protocols and lady staff" },
  { icon: BadgeCheck, title: "Verified Reviews", desc: "Genuine ratings from real guests" },
  { icon: Tag, title: "Best Rate Guarantee", desc: "Direct booking always gives the best price", accent: true },
];

export default function WhyLimeTree() {
  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="flex items-center justify-center gap-2 text-primary-600 text-xs font-semibold uppercase tracking-widest mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
            Why Book With Us
          </p>
          <h2 className="font-bold text-stone-900 text-3xl sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
            12 Reasons to Choose Lime Tree
          </h2>
          <p className="text-stone-500 text-sm mt-3 max-w-xl mx-auto">From business travel to family stays, medical trips to long-term projects — we&apos;ve got you covered.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {USPs.map(({ icon: Icon, title, desc, accent }) => (
            <div
              key={title}
              className={`group bg-white rounded-2xl p-5 border border-stone-100 hover:shadow-md transition-all duration-300 ${
                accent ? "hover:border-accent-300" : "hover:border-primary-200"
              }`}
            >
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                  accent ? "bg-accent-100 group-hover:bg-accent-500" : "bg-primary-50 group-hover:bg-primary-500"
                }`}
              >
                <Icon
                  size={17}
                  className={`transition-colors ${
                    accent ? "text-accent-700 group-hover:text-dark" : "text-primary-500 group-hover:text-white"
                  }`}
                />
              </div>
              <h3 className="font-semibold text-stone-900 text-sm mb-1">{title}</h3>
              <p className="text-stone-400 text-[11px] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
