import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { HOLIDAY_PACKAGES } from "@/lib/data";

const IMAGES: Record<string, string> = {
  "pkg-manali": "https://assets.simplotel.com/simplotel/image/upload/x_196,y_0,w_3808,h_2800,r_0,c_crop/q_80,w_800,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-hotels-banquet-vrindavan/Vrindavan-59_564e1a7a",
  "pkg-rishikesh": "https://assets.simplotel.com/simplotel/image/upload/q_80,w_800,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-hotels-service-apartment-private-limited/Vrindavan-58_1c299844",
  "pkg-golden-triangle": "https://assets.simplotel.com/simplotel/image/upload/x_0,y_11,w_1448,h_1064,r_0,c_crop/q_80,w_800,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-hotel-banquet-jaipur/hotel-lobby",
};

export default function HolidayPackages() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="flex items-center justify-center gap-2 text-primary-600 text-xs font-semibold uppercase tracking-widest mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
            Curated Getaways
          </p>
          <h2 className="font-bold text-stone-900 text-3xl sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
            Holiday Packages
          </h2>
          <Link href="/holiday-packages" className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm mt-4 hover:gap-3 transition-all">
            All Packages <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {HOLIDAY_PACKAGES.map((pkg) => (
            <Link
              key={pkg.id}
              href={`/holiday-packages/${pkg.slug}`}
              className="group relative rounded-2xl overflow-hidden h-72 sm:h-80"
            >
              <Image
                src={IMAGES[pkg.id] || pkg.image}
                alt={pkg.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <div className="flex items-center gap-1.5 text-white/60 text-[11px] mb-2">
                  <Clock size={10} /> {pkg.duration}
                </div>
                <h3 className="font-bold text-white text-xl mb-2" style={{ fontFamily: "var(--font-display)" }}>{pkg.title}</h3>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {pkg.highlights.slice(0, 3).map((h) => (
                    <span key={h} className="text-[10px] text-white/70 bg-white/10 border border-white/15 px-2 py-0.5 rounded-full">{h}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-bold text-sm">From ₹{pkg.startingPrice.toLocaleString("en-IN")}</div>
                    <div className="text-white/40 text-[10px]">per person</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-white group-hover:bg-accent-500 group-hover:border-accent-500 group-hover:text-dark transition-all">
                    <ArrowRight size={13} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
