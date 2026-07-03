import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";

const AWARDS = [
  { name: "Booking.com", title: "Traveller Review Award", years: "2022, 2023, 2024" },
  { name: "MakeMyTrip", title: "MMT Best Value Award", years: "2023, 2024" },
  { name: "TripAdvisor", title: "Travellers' Choice", years: "2022, 2023, 2024" },
  { name: "Google Reviews", title: "4.4★ Average Rating", years: "5,000+ reviews" },
];

export default function AwardsStrip() {
  return (
    <section className="py-14 bg-stone-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 flex-shrink-0">
            <Award size={22} className="text-amber-400" />
            <div>
              <div className="font-bold text-white text-sm">Award-Winning Hospitality</div>
              <div className="text-white/40 text-xs">Recognised by leading travel platforms</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {AWARDS.map(({ name, title, years }) => (
              <div key={name} className="text-center">
                <div className="font-bold text-amber-400 text-sm">{name}</div>
                <div className="text-white/60 text-[11px]">{title}</div>
                <div className="text-white/30 text-[10px]">{years}</div>
              </div>
            ))}
          </div>

          <Link href="/awards" className="hidden sm:inline-flex items-center gap-1.5 text-white/40 hover:text-white text-xs transition-colors flex-shrink-0">
            See All Awards <ArrowRight size={11} />
          </Link>
        </div>
      </div>
    </section>
  );
}
