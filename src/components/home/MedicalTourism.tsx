import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart, MapPin, Ambulance, ShieldCheck } from "lucide-react";

const HOSPITALS = [
  { name: "Medanta–The Medicity", city: "Gurgaon", distance: "5 min walk" },
  { name: "Artemis Hospital", city: "Gurgaon", distance: "8 min drive" },
  { name: "Fortis Memorial", city: "Gurgaon", distance: "15 min drive" },
  { name: "India Expo Mart*", city: "Greater Noida", distance: "5 min drive" },
];

const FEATURES = [
  { icon: Heart, text: "Wheelchair-accessible rooms on lower floors" },
  { icon: Ambulance, text: "Pick-up & drop to hospital (nominal charge)" },
  { icon: ShieldCheck, text: "24x7 front desk & pharmacy assistance" },
  { icon: MapPin, text: "Properties walking distance from hospitals" },
];

export default function MedicalTourism() {
  return (
    <section className="py-20 bg-blue-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <p className="text-blue-300 text-xs font-semibold uppercase tracking-widest mb-3">Medical Tourism</p>
            <h2 className="font-bold text-white text-3xl sm:text-4xl mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Comfort When It<br />Matters Most.
            </h2>
            <p className="text-white/55 text-sm leading-relaxed mb-7 max-w-md">
              Specially curated stays for patients and attendants visiting top NCR hospitals. Wheelchair-accessible, supportive staff, and zero stress — so you can focus on what matters.
            </p>

            {/* Features */}
            <div className="space-y-3 mb-8">
              {FEATURES.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm text-white/70">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-300 flex-shrink-0">
                    <Icon size={15} />
                  </div>
                  {text}
                </div>
              ))}
            </div>

            {/* Hospital chips */}
            <div className="mb-8">
              <p className="text-white/40 text-xs font-medium mb-3 uppercase tracking-wider">Near these hospitals</p>
              <div className="flex flex-wrap gap-2">
                {HOSPITALS.map(({ name, distance }) => (
                  <div key={name} className="flex flex-col px-3 py-2 bg-white/8 border border-white/10 rounded-xl">
                    <span className="text-white text-xs font-medium">{name}</span>
                    <span className="text-white/40 text-[10px]">{distance}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/25 text-[10px] mt-2">* India Expo Mart is not a hospital — listed for exhibition travelers.</p>
            </div>

            <Link href="/medical-tourism" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-all text-sm">
              View Healing Stay Package <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden h-80 lg:h-[440px]">
              <Image
                src="https://assets.simplotel.com/simplotel/image/upload/q_80,w_800,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-hotels-service-apartment-private-limited/LT-Sector_38-115_4e3d5eaa"
                alt="Comfortable medical stay at Lime Tree Hotels"
                fill
                className="object-cover"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-accent-50 text-stone-900 rounded-2xl p-4 shadow-xl max-w-[180px] border border-accent-200">
              <div className="font-bold text-xl text-blue-600 mb-0.5">15%</div>
              <div className="text-xs font-semibold text-stone-800">Healing Stay Discount</div>
              <div className="text-[10px] text-stone-400 mt-0.5">Use code HEALING15</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
