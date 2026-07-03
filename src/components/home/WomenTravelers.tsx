import Link from "next/link";
import { ArrowRight, Shield, UserCheck, Bell, Lock } from "lucide-react";

const FEATURES = [
  { icon: Shield, title: "Enhanced Security", desc: "CCTV surveillance, secure entry, and designated floors for women guests." },
  { icon: UserCheck, title: "Lady Executive Support", desc: "Dedicated female staff available for assistance at all times." },
  { icon: Bell, title: "In-Room Check-In", desc: "Check in from the comfort of your room — no lobby wait required." },
  { icon: Lock, title: "Rooms Near Lifts", desc: "Thoughtfully allocated rooms near elevators or stairways for easy access." },
];

export default function WomenTravelers() {
  return (
    <section className="py-20 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-rose-500 text-xs font-semibold uppercase tracking-widest mb-3">Safety First</p>
            <h2 className="font-bold text-stone-900 text-3xl sm:text-4xl mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Thoughtful Hospitality<br />for Women Travelers
            </h2>
            <p className="text-stone-500 text-sm leading-relaxed mb-8 max-w-md">
              Safety, comfort, and dignity — not as extras, but as standards. Lime Tree Hotels has built specific protocols to make every woman traveler&apos;s stay genuinely safe and welcoming.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {FEATURES.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-rose-100 flex items-center justify-center text-rose-500 flex-shrink-0">
                    <Icon size={15} />
                  </div>
                  <div>
                    <div className="font-semibold text-stone-900 text-sm">{title}</div>
                    <div className="text-stone-500 text-xs leading-relaxed mt-0.5">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/hotels" className="inline-flex items-center gap-2 px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl transition-all text-sm">
              Book a Safe Stay <ArrowRight size={14} />
            </Link>
          </div>

          {/* Right: Welcome amenities visual */}
          <div className="bg-white rounded-2xl p-8 border border-rose-100 shadow-sm">
            <h3 className="font-bold text-stone-900 text-lg mb-1">Welcome Amenities Included</h3>
            <p className="text-stone-400 text-xs mb-6">Exclusive to women travelers at all Lime Tree properties</p>
            <div className="space-y-4">
              {[
                { item: "Welcome drink on arrival", tick: true },
                { item: "Complimentary toiletries kit", tick: true },
                { item: "Room allocated on lower floor (near lift)", tick: true },
                { item: "In-room check-in available", tick: true },
                { item: "Lady executive on call 24x7", tick: true },
                { item: "Emergency contact number in room", tick: true },
              ].map(({ item, tick }) => (
                <div key={item} className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${tick ? "bg-rose-100 text-rose-500" : "bg-stone-100 text-stone-400"}`}>
                    <svg viewBox="0 0 12 12" fill="currentColor" className="w-3 h-3"><path d="M10 3L5 8.5 2 5.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span className="text-stone-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
