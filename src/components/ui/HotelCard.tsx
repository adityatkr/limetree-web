"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, MapPin, Wifi, Coffee, Car, Dumbbell } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/utils";
import type { Hotel } from "@/lib/types";
import StarRating from "./StarRating";
import Badge from "./Badge";

interface HotelCardProps {
  hotel: Hotel;
  variant?: "default" | "horizontal" | "compact";
  className?: string;
}

const AMENITY_ICONS: Record<string, React.ReactNode> = {
  "Free WiFi": <Wifi size={14} />,
  "Gym": <Dumbbell size={14} />,
  "Parking": <Car size={14} />,
  "Restaurant": <Coffee size={14} />,
};

export default function HotelCard({ hotel, variant = "default", className }: HotelCardProps) {
  const [wishlisted, setWishlisted] = useState(false);
  const discount = hotel.originalPrice
    ? Math.round(((hotel.originalPrice - hotel.pricePerNight) / hotel.originalPrice) * 100)
    : null;

  if (variant === "horizontal") {
    return (
      <Link
        href={`/hotels/${hotel.slug}`}
        className={cn(
          "group flex rounded-2xl overflow-hidden bg-white border border-dark-100",
          "hover:shadow-elevated transition-all duration-300 hover:-translate-y-1",
          className
        )}
      >
        <div className="relative w-72 flex-shrink-0 img-zoom">
          <Image
            src={hotel.heroImage}
            alt={hotel.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="288px"
          />
          {hotel.featured && (
            <div className="absolute top-3 left-3">
              <Badge variant="accent">Featured</Badge>
            </div>
          )}
        </div>

        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <h3 className="font-display font-semibold text-xl text-dark group-hover:text-primary-600 transition-colors">
                  {hotel.name}
                </h3>
                <div className="flex items-center gap-1.5 mt-1 text-dark-500 text-sm">
                  <MapPin size={13} />
                  <span>{hotel.location.area}, {hotel.location.city}</span>
                </div>
              </div>
              <StarRating rating={hotel.rating} size="sm" showValue reviewCount={hotel.reviewCount} />
            </div>

            <p className="text-sm text-dark-500 mt-3 line-clamp-2">{hotel.description}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {hotel.amenities.slice(0, 4).map((amenity) => (
                <div key={amenity} className="flex items-center gap-1 text-xs text-dark-500 bg-cream-100 px-2.5 py-1 rounded-full">
                  {AMENITY_ICONS[amenity] || null}
                  {amenity}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-dark-100">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-display font-bold text-2xl text-primary-600">
                  {formatPrice(hotel.pricePerNight)}
                </span>
                <span className="text-dark-400 text-sm">/night</span>
              </div>
              {hotel.originalPrice && (
                <div className="flex items-center gap-2">
                  <span className="text-dark-400 text-sm line-through">{formatPrice(hotel.originalPrice)}</span>
                  <Badge variant="accent" size="sm">{discount}% off</Badge>
                </div>
              )}
            </div>
            <button className="bg-primary-500 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary-600 transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/hotels/${hotel.slug}`}
      className={cn(
        "group flex flex-col rounded-2xl overflow-hidden bg-white border border-dark-100",
        "hover:shadow-elevated transition-all duration-300 hover:-translate-y-2",
        className
      )}
    >
      <div className="relative aspect-[4/3] img-zoom">
        <Image
          src={hotel.heroImage}
          alt={hotel.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <button
          onClick={(e) => {
            e.preventDefault();
            setWishlisted((w) => !w);
          }}
          className={cn(
            "absolute top-3 right-3 p-2 rounded-full transition-all duration-200",
            "backdrop-blur-sm",
            wishlisted
              ? "bg-error text-white"
              : "bg-white/80 text-dark-400 hover:text-error hover:bg-white"
          )}
          aria-label="Add to wishlist"
        >
          <Heart size={16} className={cn(wishlisted && "fill-current")} />
        </button>

        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {hotel.featured && <Badge variant="accent">Featured</Badge>}
          {hotel.newProperty && <Badge variant="primary" dot>New</Badge>}
          {discount && discount >= 20 && (
            <Badge variant="accent">{discount}% off</Badge>
          )}
        </div>

        <div className="absolute bottom-3 left-3">
          <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full">
            <span className="text-accent-500 text-xs">★</span>
            <span className="text-xs font-semibold text-dark">{hotel.rating}</span>
            <span className="text-xs text-dark-400">({hotel.reviewCount.toLocaleString()})</span>
          </div>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex-1 min-w-0">
            <h3 className="font-display font-semibold text-lg text-dark group-hover:text-primary-600 transition-colors truncate">
              {hotel.name}
            </h3>
            <div className="flex items-center gap-1 mt-1 text-dark-400 text-xs">
              <MapPin size={11} />
              <span className="truncate">{hotel.location.area}, {hotel.location.city}</span>
            </div>
          </div>
          <div className="flex-shrink-0">
            {"★".repeat(hotel.starCategory).split("").map((_, i) => (
              <span key={i} className="text-accent-500 text-xs">★</span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-3 mb-4">
          {hotel.amenities.slice(0, 3).map((amenity) => (
            <div key={amenity} className="flex items-center gap-1 text-xs text-dark-500 bg-cream-100 px-2 py-0.5 rounded-full">
              {AMENITY_ICONS[amenity] || null}
              <span>{amenity}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-4 border-t border-dark-100 flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-display font-bold text-xl text-primary-600">
                {formatPrice(hotel.pricePerNight)}
              </span>
              <span className="text-dark-400 text-xs">/night</span>
            </div>
            {hotel.originalPrice && (
              <span className="text-dark-300 text-xs line-through">
                {formatPrice(hotel.originalPrice)}
              </span>
            )}
          </div>
          <span className="bg-primary-500 group-hover:bg-primary-600 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors">
            Book Now
          </span>
        </div>
      </div>
    </Link>
  );
}
