import type { Metadata } from "next";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Building2, ArrowRight } from "lucide-react";
import { DESTINATIONS } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "Destinations | Hotels Across India",
  description:
    "Find LimeTree Hotels in Delhi, Gurgaon, Jaipur, Mumbai, Hyderabad, Bangalore, and more. Premium stays in every major Indian city.",
  path: "/destinations",
});

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-cream pt-16">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Destinations", path: "/destinations" }])} />
      {/* Hero */}
      <section className="bg-dark py-20">
        <div className="container-luxury text-center">
          <div className="inline-flex items-center gap-2 text-primary-400 text-sm font-medium mb-6 tracking-wider">
            <div className="h-px w-8 bg-primary-400" />
            Destinations
            <div className="h-px w-8 bg-primary-400" />
          </div>
          <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
            Across India&apos;s Finest Cities
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            From the corridors of power in Delhi to the royal heritage of Jaipur — LimeTree Hotels is where India stays.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="section-padding bg-cream">
        <div className="container-luxury">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DESTINATIONS.map((dest, i) => (
              <Link
                key={dest.id}
                href={`/destinations/${dest.slug}`}
                className={`group relative rounded-2xl overflow-hidden border border-dark-100 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 bg-white ${i === 0 ? "sm:col-span-2 lg:col-span-2" : ""}`}
              >
                <div className={`relative img-zoom ${i === 0 ? "h-72 sm:h-80" : "h-56"}`}>
                  <Image
                    src={dest.image}
                    alt={dest.city}
                    fill
                    className="object-cover"
                    sizes={i === 0 ? "66vw" : "33vw"}
                    priority={i === 0}
                  />
                  <div className="absolute inset-0 card-overlay" />

                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin size={13} className="text-white/70" />
                      <span className="text-white/70 text-xs">{dest.state}</span>
                    </div>
                    <h2 className={`font-display font-bold text-white ${i === 0 ? "text-3xl" : "text-2xl"}`}>
                      {dest.city}
                    </h2>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-1.5 text-white/70 text-sm">
                        <Building2 size={13} />
                        <span>{dest.propertyCount} Properties</span>
                      </div>
                      <span className="text-white font-semibold text-sm">From {formatPrice(dest.startingPrice)}/night</span>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-dark-500 text-sm line-clamp-2 mb-3">{dest.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {dest.popularFor.map((tag) => (
                      <span key={tag} className="text-xs bg-primary-50 text-primary-700 px-2.5 py-1 rounded-full font-medium">{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-primary-600 text-sm font-semibold group-hover:gap-2 transition-all">
                    Explore {dest.city}
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
