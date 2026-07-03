"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Calendar, Users, Tag, Search, ChevronDown } from "lucide-react";
import { format, addDays } from "date-fns";
import { cn } from "@/lib/utils";

const DESTINATIONS = [
  "Gurgaon", "Delhi", "Greater Noida", "Noida", "Jaipur", "Vrindavan", "Goa",
];

interface WidgetState {
  destination: string;
  checkIn: Date;
  checkOut: Date;
  guests: number;
  rooms: number;
  promoCode: string;
}

export default function SearchWidget({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const today = new Date();

  const [state, setState] = useState<WidgetState>({
    destination: "",
    checkIn: today,
    checkOut: addDays(today, 1),
    guests: 2,
    rooms: 1,
    promoCode: "",
  });

  const [openPanel, setOpenPanel] = useState<string | null>(null);
  const [destQuery, setDestQuery] = useState("");

  const filteredDest = DESTINATIONS.filter((d) =>
    d.toLowerCase().includes(destQuery.toLowerCase())
  );

  const handleSearch = () => {
    const params = new URLSearchParams({
      destination: state.destination,
      checkIn: format(state.checkIn, "yyyy-MM-dd"),
      checkOut: format(state.checkOut, "yyyy-MM-dd"),
      guests: String(state.guests),
      rooms: String(state.rooms),
      ...(state.promoCode && { promo: state.promoCode }),
    });
    router.push(`/hotels?${params.toString()}`);
  };

  const nights = Math.max(
    1,
    Math.round((state.checkOut.getTime() - state.checkIn.getTime()) / (1000 * 60 * 60 * 24))
  );

  const closeAll = () => setOpenPanel(null);

  return (
    <div
      className={cn(
        "glass rounded-2xl border border-white/60",
        compact ? "shadow-elevated" : "shadow-float"
      )}
    >
      <div className={cn(
        "flex flex-col lg:flex-row",
        compact ? "p-3 gap-2" : "p-3 gap-0"
      )}>
        {/* Destination */}
        <div className="relative flex-1 min-w-0">
          <button
            onClick={() => setOpenPanel(openPanel === "dest" ? null : "dest")}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all",
              "hover:bg-primary-50 group",
              openPanel === "dest" && "bg-primary-50"
            )}
          >
            <MapPin size={18} className="text-primary-500 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-xs text-dark-400 font-medium mb-0.5">Destination</div>
              <div className={cn(
                "text-sm font-semibold truncate",
                state.destination ? "text-dark" : "text-dark-400"
              )}>
                {state.destination || "Where are you going?"}
              </div>
            </div>
            <ChevronDown
              size={16}
              className={cn("text-dark-400 flex-shrink-0 transition-transform", openPanel === "dest" && "rotate-180")}
            />
          </button>

          {openPanel === "dest" && (
            <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-luxury border border-dark-100 overflow-hidden z-50">
              <div className="p-3 border-b border-dark-100">
                <input
                  autoFocus
                  value={destQuery}
                  onChange={(e) => setDestQuery(e.target.value)}
                  placeholder="Search destinations..."
                  className="w-full text-sm px-3 py-2 rounded-lg bg-cream-100 border-none focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div className="p-2 max-h-56 overflow-y-auto">
                {filteredDest.map((dest) => (
                  <button
                    key={dest}
                    onClick={() => {
                      setState((s) => ({ ...s, destination: dest }));
                      setDestQuery("");
                      closeAll();
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-cream-100 transition-colors text-left"
                  >
                    <MapPin size={14} className="text-primary-500" />
                    <span className="text-sm text-dark">{dest}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {!compact && <div className="hidden lg:block w-px bg-dark-200 my-2" />}

        {/* Check In */}
        <div className="relative flex-1 min-w-0">
          <button
            onClick={() => setOpenPanel(openPanel === "checkin" ? null : "checkin")}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all hover:bg-primary-50",
              openPanel === "checkin" && "bg-primary-50"
            )}
          >
            <Calendar size={18} className="text-primary-500 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-xs text-dark-400 font-medium mb-0.5">Check In</div>
              <div className="text-sm font-semibold text-dark">
                {format(state.checkIn, "dd MMM yyyy")}
              </div>
            </div>
          </button>

          {openPanel === "checkin" && (
            <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-luxury border border-dark-100 p-4 z-50 w-72">
              <p className="text-xs text-dark-400 font-medium mb-3">Select Check-in Date</p>
              <input
                type="date"
                value={format(state.checkIn, "yyyy-MM-dd")}
                min={format(today, "yyyy-MM-dd")}
                onChange={(e) => {
                  const d = new Date(e.target.value);
                  setState((s) => ({
                    ...s,
                    checkIn: d,
                    checkOut: s.checkOut <= d ? addDays(d, 1) : s.checkOut,
                  }));
                  closeAll();
                }}
                className="w-full text-sm p-3 rounded-xl border border-dark-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          )}
        </div>

        {!compact && <div className="hidden lg:block w-px bg-dark-200 my-2" />}

        {/* Check Out */}
        <div className="relative flex-1 min-w-0">
          <button
            onClick={() => setOpenPanel(openPanel === "checkout" ? null : "checkout")}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all hover:bg-primary-50",
              openPanel === "checkout" && "bg-primary-50"
            )}
          >
            <Calendar size={18} className="text-primary-500 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-xs text-dark-400 font-medium mb-0.5">Check Out</div>
              <div className="text-sm font-semibold text-dark">
                {format(state.checkOut, "dd MMM yyyy")}
                <span className="text-xs text-dark-400 ml-1.5">({nights}N)</span>
              </div>
            </div>
          </button>

          {openPanel === "checkout" && (
            <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-luxury border border-dark-100 p-4 z-50 w-72">
              <p className="text-xs text-dark-400 font-medium mb-3">Select Check-out Date</p>
              <input
                type="date"
                value={format(state.checkOut, "yyyy-MM-dd")}
                min={format(addDays(state.checkIn, 1), "yyyy-MM-dd")}
                onChange={(e) => {
                  setState((s) => ({ ...s, checkOut: new Date(e.target.value) }));
                  closeAll();
                }}
                className="w-full text-sm p-3 rounded-xl border border-dark-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
          )}
        </div>

        {!compact && <div className="hidden lg:block w-px bg-dark-200 my-2" />}

        {/* Guests */}
        <div className="relative flex-1 min-w-0">
          <button
            onClick={() => setOpenPanel(openPanel === "guests" ? null : "guests")}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all hover:bg-primary-50",
              openPanel === "guests" && "bg-primary-50"
            )}
          >
            <Users size={18} className="text-primary-500 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-xs text-dark-400 font-medium mb-0.5">Guests</div>
              <div className="text-sm font-semibold text-dark">
                {state.guests} Guest{state.guests > 1 ? "s" : ""}, {state.rooms} Room{state.rooms > 1 ? "s" : ""}
              </div>
            </div>
            <ChevronDown
              size={16}
              className={cn("text-dark-400 flex-shrink-0 transition-transform", openPanel === "guests" && "rotate-180")}
            />
          </button>

          {openPanel === "guests" && (
            <div className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-luxury border border-dark-100 p-4 z-50 w-64">
              {[
                { label: "Adults", sub: "Ages 13+", key: "guests" as const },
                { label: "Rooms", sub: "Number of rooms", key: "rooms" as const },
              ].map(({ label, sub, key }) => (
                <div key={key} className="flex items-center justify-between py-3 border-b border-dark-100 last:border-0">
                  <div>
                    <div className="text-sm font-medium text-dark">{label}</div>
                    <div className="text-xs text-dark-400">{sub}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setState((s) => ({ ...s, [key]: Math.max(1, s[key] - 1) }))}
                      className="w-8 h-8 rounded-lg border border-dark-200 flex items-center justify-center text-dark hover:border-primary-500 hover:text-primary-500 transition-colors"
                    >
                      −
                    </button>
                    <span className="text-sm font-semibold text-dark w-6 text-center">{state[key]}</span>
                    <button
                      onClick={() => setState((s) => ({ ...s, [key]: s[key] + 1 }))}
                      className="w-8 h-8 rounded-lg border border-dark-200 flex items-center justify-center text-dark hover:border-primary-500 hover:text-primary-500 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
              <button
                onClick={closeAll}
                className="w-full mt-3 py-2.5 bg-primary-500 text-white text-sm font-semibold rounded-xl hover:bg-primary-600 transition-colors"
              >
                Apply
              </button>
            </div>
          )}
        </div>

        {!compact && <div className="hidden lg:block w-px bg-dark-200 my-2" />}

        {/* Promo Code */}
        <div className="relative flex-1 min-w-0">
          <div className="flex items-center gap-3 px-4 py-3.5">
            <Tag size={18} className="text-accent-600 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-xs text-dark-400 font-medium mb-0.5">Promo Code</div>
              <input
                type="text"
                value={state.promoCode}
                onChange={(e) => setState((s) => ({ ...s, promoCode: e.target.value.toUpperCase() }))}
                placeholder="Optional"
                className="w-full text-sm font-semibold text-dark bg-transparent border-none focus:outline-none placeholder:text-dark-400"
              />
            </div>
          </div>
        </div>

        {/* Search Button */}
        <div className="flex-shrink-0 p-1.5">
          <button
            onClick={handleSearch}
            className="flex items-center gap-2.5 h-full px-8 py-3.5 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-primary hover:-translate-y-0.5 text-sm w-full lg:w-auto justify-center"
          >
            <Search size={18} />
            <span>Search Hotels</span>
          </button>
        </div>
      </div>
    </div>
  );
}
