"use client";

import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react";
import { GLOBAL_REVIEWS } from "@/lib/data";
import { getInitials } from "@/lib/utils";

const PLATFORM_COLORS: Record<string, string> = {
  google: "text-blue-500",
  tripadvisor: "text-emerald-500",
  booking: "text-blue-700",
};

export default function Reviews() {
  const autoplay = useRef(Autoplay({ delay: 4500, stopOnInteraction: true }));
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [autoplay.current]
  );

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="flex items-center gap-2 text-primary-600 text-xs font-semibold uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-500" />
              Guest Reviews
            </p>
            <h2 className="font-bold text-stone-900 text-3xl sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
              What Our Guests Say
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => emblaApi?.scrollPrev()} aria-label="Previous review" className="w-9 h-9 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:border-primary-500 hover:text-primary-600 transition-all">
              <ChevronLeft size={16} />
            </button>
            <button onClick={() => emblaApi?.scrollNext()} aria-label="Next review" className="w-9 h-9 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:border-primary-500 hover:text-primary-600 transition-all">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {GLOBAL_REVIEWS.map((review) => (
              <div key={review.id} className="flex-none w-[300px] sm:w-[340px] bg-stone-50 rounded-2xl border border-stone-100 p-5 flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {getInitials(review.guestName)}
                    </div>
                    <div>
                      <div className="font-semibold text-stone-900 text-sm">{review.guestName}</div>
                      <div className="flex items-center gap-1 text-[10px] text-stone-400">
                        {review.verified && <><BadgeCheck size={10} className="text-blue-500" /> Verified</>}
                        {review.platform && (
                          <span className={`ml-1 font-medium capitalize ${PLATFORM_COLORS[review.platform] || ""}`}>
                            · {review.platform}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={10} className={i < review.rating ? "fill-amber-400 text-amber-400" : "fill-stone-200 text-stone-200"} />
                    ))}
                  </div>
                </div>

                <h4 className="font-semibold text-stone-800 text-sm mb-2">{review.title}</h4>
                <p className="text-stone-500 text-xs leading-relaxed flex-1 line-clamp-5">{review.comment}</p>

                <div className="mt-3 pt-3 border-t border-stone-100 text-[10px] text-stone-400">
                  {new Date(review.date).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}
                  {" · "}
                  <span className="capitalize">{review.stayType} stay</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google rating banner */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 p-5 bg-stone-50 rounded-2xl border border-stone-100">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="font-bold text-stone-800">4.4</span>
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={12} className={i < 4 ? "fill-amber-400 text-amber-400" : "fill-amber-200 text-amber-200"} />
              ))}
            </div>
          </div>
          <div className="text-stone-400 text-xs">Average rating across 5,000+ Google reviews · Booking.com · TripAdvisor · MakeMyTrip</div>
        </div>
      </div>
    </section>
  );
}
