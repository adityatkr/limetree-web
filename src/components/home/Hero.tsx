"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import SearchWidget from "./SearchWidget";

const SLIDES = [
  {
    image: "https://assets.simplotel.com/simplotel/image/upload/x_0,y_443,w_4200,h_1914,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-hotels-service-apartment-private-limited/BA_132-02_0236d9e9",
    tag: "Gurgaon • Cyber City",
    headline: "Feel Like Home.",
    sub: "Every City. Every Stay.",
  },
  {
    image: "https://assets.simplotel.com/simplotel/image/upload/x_0,y_443,w_4200,h_1914,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-hotels-and-banquet-hall-near-huda-metro-gurgaon/side_view_of_the_king_size_bed,_the_living_area_and_a_television_in_the_suite_at_Lime_Tree_Hotels_and_Banquet_Hall_Near_Huda_Metro,_Gurgaon",
    tag: "Serviced Apartments",
    headline: "Space to Live.",
    sub: "Not Just a Room.",
  },
  {
    image: "https://assets.simplotel.com/simplotel/image/upload/x_0,y_443,w_4200,h_1914,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-hotels-service-apartment-private-limited/Koyal_Vihar,_Sector_52,_LT-6_50feaa1c",
    tag: "Goa • Private Villa",
    headline: "Paradise Found.",
    sub: "Private Pool Included.",
  },
  {
    image: "https://assets.simplotel.com/simplotel/image/upload/x_0,y_443,w_4200,h_1914,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-hotels-service-apartment-private-limited/Vrindavan-58_1c299844",
    tag: "Jaipur • Pink City",
    headline: "Royal Comfort.",
    sub: "Heritage at Heart.",
  },
];

const CITIES = [
  { name: "Gurgaon", slug: "gurgaon" },
  { name: "Delhi", slug: "delhi" },
  { name: "Noida", slug: "noida" },
  { name: "Greater Noida", slug: "greater-noida" },
  { name: "Jaipur", slug: "jaipur" },
  { name: "Goa", slug: "goa" },
  { name: "Vrindavan", slug: "vrindavan" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const interval = setInterval(() => setCurrent((c) => (c + 1) % SLIDES.length), 5000);
    return () => clearInterval(interval);
  }, []);

  const slide = SLIDES[current];

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Slides */}
      {SLIDES.map((s, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}>
          <Image src={s.image} alt={s.tag} fill className="object-cover" priority={i === 0} sizes="100vw" />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/75" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 w-full">
            <div className={`max-w-3xl mx-auto text-center transition-all duration-700 ${loaded ? "opacity-100" : "opacity-0 translate-y-8"}`}>
              {/* Location tag */}
              <div className="flex items-center justify-center gap-2 text-white/70 text-sm font-medium mb-6">
                <MapPin size={13} className="text-primary-400" />
                <span key={current}>{slide.tag}</span>
              </div>

              {/* Headline */}
              <h1 className="font-bold text-white leading-none mb-3" style={{ fontSize: "clamp(3rem, 8vw, 7rem)", fontFamily: "var(--font-display)" }}>
                <span key={`h-${current}`}>{slide.headline}</span>
              </h1>
              <p className="text-white/65 font-light mb-8" style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)" }}>
                {slide.sub}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <Link href="/hotels" className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-2xl transition-all text-sm shadow-lg">
                  Browse Properties <ArrowRight size={15} />
                </Link>
                <a href="https://wa.me/917479000111" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/12 hover:bg-white/22 backdrop-blur-sm border border-white/25 text-white font-semibold rounded-2xl transition-all text-sm">
                  WhatsApp Us
                </a>
              </div>

              {/* City pills */}
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <span className="text-white/35 text-xs font-medium">Stays in:</span>
                {CITIES.map((city) => (
                  <Link key={city.slug} href={`/destinations/${city.slug}`} className="text-white/55 hover:text-white text-xs bg-white/8 hover:bg-white/18 px-2.5 py-1 rounded-full transition-all border border-white/10 hover:border-white/30">
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Search Widget */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
          <SearchWidget />
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute right-5 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-1.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === current}
            className={`w-1 rounded-full transition-all duration-300 ${i === current ? "h-8 bg-white" : "h-1.5 bg-white/30 hover:bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  );
}
