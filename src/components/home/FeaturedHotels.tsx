import Link from "next/link";
import Image from "next/image";
import { Star, MapPin, ArrowRight, Wifi, Coffee, Car } from "lucide-react";
import { HOTELS } from "@/lib/data";

const ICON_AMENITIES: Record<string, React.ReactNode> = {
  "Free WiFi": <Wifi size={11} />,
  "Complimentary Breakfast": <Coffee size={11} />,
  "Parking": <Car size={11} />,
};

export default function FeaturedHotels() {
  const featured = HOTELS.filter((h) => h.featured).slice(0, 6);

  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="flex items-center justify-center gap-2 text-primary-600 text-xs font-semibold uppercase tracking-widest mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
            Our Properties
          </p>
          <h2 className="font-bold text-stone-900 text-3xl sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
            Where Would You Like to Stay?
          </h2>
          <Link href="/hotels" className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm mt-4 hover:gap-3 transition-all">
            View All Properties <ArrowRight size={14} />
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((hotel, i) => (
            <Link
              key={hotel.id}
              href={`/hotels/${hotel.slug}`}
              className={`group relative bg-white rounded-2xl overflow-hidden border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col ${i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <Image
                  src={hotel.heroImage}
                  alt={hotel.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {hotel.tags.includes("medical-tourism") && (
                    <span className="bg-blue-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">Medical Stay</span>
                  )}
                  {hotel.propertyType === "villa" && (
                    <span className="bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">Villa</span>
                  )}
                  {hotel.propertyType === "serviced-apartment" && (
                    <span className="bg-stone-800 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">Serviced Apt</span>
                  )}
                </div>
                {hotel.originalPrice && (
                  <div className="absolute top-3 right-3 bg-accent-500 text-dark text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {Math.round((1 - hotel.pricePerNight / hotel.originalPrice) * 100)}% OFF
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-semibold text-stone-900 text-sm leading-snug group-hover:text-primary-600 transition-colors line-clamp-2">{hotel.name}</h3>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <Star size={11} className="fill-amber-400 text-amber-400" />
                    <span className="text-stone-700 text-xs font-semibold">{hotel.rating}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-stone-400 text-[11px] mb-3">
                  <MapPin size={10} />
                  {hotel.location.area}, {hotel.location.city}
                </div>

                {/* Amenity chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {hotel.amenities.slice(0, 3).map((a) => (
                    <span key={a} className="flex items-center gap-1 text-stone-500 text-[10px] bg-stone-50 border border-stone-100 px-2 py-0.5 rounded-full">
                      {ICON_AMENITIES[a] || null}{a}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-end justify-between">
                  <div>
                    <div className="text-stone-900 font-bold text-base">₹{hotel.pricePerNight.toLocaleString("en-IN")}</div>
                    <div className="text-stone-400 text-[10px]">per night</div>
                  </div>
                  <div className="text-primary-600 text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Details <ArrowRight size={11} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-10 p-5 bg-primary-50 rounded-2xl border border-primary-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-stone-700 text-sm font-medium">Looking for the best rate? Book direct for exclusive deals.</p>
          <Link href="/hotels" className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-500 text-white text-sm font-semibold rounded-xl hover:bg-primary-600 transition-all flex-shrink-0">
            Explore All 30+ Properties <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}
