import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import { DESTINATIONS } from "@/lib/data";

export default function Destinations() {
  const [main, ...rest] = DESTINATIONS;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="flex items-center justify-center gap-2 text-primary-600 text-xs font-semibold uppercase tracking-widest mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
            7 Cities
          </p>
          <h2 className="font-bold text-stone-900 text-3xl sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
            Find Your City
          </h2>
          <Link href="/destinations" className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm mt-4 hover:gap-3 transition-all">
            All Destinations <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[160px]">
          {/* Main hero card — Gurgaon */}
          <Link
            href={`/destinations/${main.slug}`}
            className="group col-span-2 row-span-2 relative rounded-2xl overflow-hidden"
          >
            <Image src={main.image} alt={main.city} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="50vw" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <div className="flex items-center gap-1.5 text-white/60 text-xs mb-1">
                <Building2 size={11} /> {main.propertyCount}+ properties
              </div>
              <h3 className="font-bold text-white text-2xl sm:text-3xl" style={{ fontFamily: "var(--font-display)" }}>{main.city}</h3>
              <p className="text-white/60 text-xs mt-1 line-clamp-2 max-w-xs">{main.description}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {main.popularFor.slice(0, 3).map((t) => (
                  <span key={t} className="text-[10px] font-medium text-white bg-white/15 px-2 py-0.5 rounded-full border border-white/20">{t}</span>
                ))}
              </div>
            </div>
          </Link>

          {/* Smaller destination cards */}
          {rest.map((dest, i) => (
            <Link
              key={dest.id}
              href={`/destinations/${dest.slug}`}
              className={`group relative rounded-2xl overflow-hidden${i >= 4 ? " lg:col-span-2" : ""}`}
            >
              <Image src={dest.image} alt={dest.city} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="25vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute inset-0 p-3 sm:p-4 flex flex-col justify-end">
                <h3 className="font-bold text-white text-base sm:text-lg leading-tight">{dest.city}</h3>
                <div className="text-white/50 text-[10px] mt-0.5 flex items-center gap-1">
                  <Building2 size={9} /> {dest.propertyCount}+
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
