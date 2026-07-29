import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Building2, ArrowLeft } from "lucide-react";
import { DESTINATIONS, HOTELS } from "@/lib/data";
import HotelCard from "@/components/ui/HotelCard";
import JsonLd from "@/components/seo/JsonLd";
import { pageMetadata, breadcrumbSchema, destinationSchema, absoluteUrl } from "@/lib/seo";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const dest = DESTINATIONS.find((d) => d.slug === city);
  if (!dest) return {};
  return pageMetadata({
    title: `Hotels in ${dest.city} | Lime Tree Hotels`,
    description: dest.description,
    path: `/destinations/${dest.slug}`,
    image: dest.image,
  });
}

export async function generateStaticParams() {
  return DESTINATIONS.map((d) => ({ city: d.slug }));
}

export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const dest = DESTINATIONS.find((d) => d.slug === city);
  if (!dest) notFound();

  const cityHotels = HOTELS.filter(
    (h) => h.location.city.toLowerCase() === dest.city.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-stone-50 pt-16">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Destinations", path: "/destinations" },
            { name: dest.city, path: `/destinations/${dest.slug}` },
          ]),
          destinationSchema(dest, cityHotels.map((h) => absoluteUrl(`/hotels/${h.slug}`))),
        ]}
      />
      {/* Hero */}
      <section className="relative h-[50vh] min-h-80 bg-stone-900 overflow-hidden">
        <Image
          src={dest.image}
          alt={dest.city}
          fill
          className="object-cover opacity-60"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-end pb-10">
          <Link href="/destinations" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft size={15} />
            All Destinations
          </Link>
          <div className="flex items-center gap-2 text-white/70 text-sm mb-2">
            <MapPin size={14} />
            {dest.state}, India
          </div>
          <h1 className="font-bold text-white text-4xl sm:text-5xl mb-3" style={{ fontFamily: "var(--font-display)" }}>{dest.city}</h1>
          <div className="flex items-center flex-wrap gap-4">
            <div className="flex items-center gap-1.5 text-white/70 text-sm">
              <Building2 size={13} />
              {dest.propertyCount} Properties
            </div>
            <div className="flex flex-wrap gap-2">
              {dest.highlights.map((h) => (
                <span key={h} className="text-xs bg-white/20 backdrop-blur-sm text-white px-2.5 py-1 rounded-full">{h}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Description */}
        <div className="max-w-3xl mb-12">
          <p className="text-stone-600 text-lg leading-relaxed">{dest.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {dest.popularFor.map((tag) => (
              <span key={tag} className="text-sm bg-primary-50 text-primary-700 px-3 py-1.5 rounded-full font-medium border border-primary-100">{tag}</span>
            ))}
          </div>
        </div>

        {/* Hotels */}
        <div className="mb-8">
          <p className="text-primary-600 text-xs font-semibold uppercase tracking-widest mb-2">Hotels in {dest.city}</p>
          <h2 className="font-bold text-stone-900 text-2xl" style={{ fontFamily: "var(--font-display)" }}>Available Properties</h2>
        </div>
        {cityHotels.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cityHotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-100">
            <Building2 size={40} className="mx-auto text-stone-300 mb-3" />
            <h3 className="font-semibold text-stone-800 mb-2">Coming Soon to {dest.city}</h3>
            <p className="text-stone-400 text-sm mb-6">We&apos;re expanding to {dest.city}. Get notified when we launch!</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white font-bold text-sm rounded-xl hover:bg-primary-600 transition-colors">
              Notify Me
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
