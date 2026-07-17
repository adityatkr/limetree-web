"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SlidersHorizontal, X, ChevronDown, LayoutGrid, List,
  Search, Star
} from "lucide-react";
import { HOTELS } from "@/lib/data";
import HotelCard from "@/components/ui/HotelCard";
import SearchWidget from "@/components/home/SearchWidget";
import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const SORT_OPTIONS = [
  { value: "recommended", label: "Recommended" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
  { value: "popular", label: "Most Popular" },
];

const AMENITY_FILTERS = [
  "Free WiFi", "Swimming Pool", "Gym", "Spa", "Restaurant",
  "Bar", "Parking", "Business Center", "Airport Shuttle",
];

const PROPERTY_TYPE_FILTERS = [
  { value: "hotel", label: "Hotels" },
  { value: "serviced-apartment", label: "Serviced Apartments" },
];

interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function HotelsClient({ searchParams }: Props) {
  const [sortBy, setSortBy] = useState("recommended");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([1000, 15000]);
  const [minRating, setMinRating] = useState(0);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [breakfastOnly, setBreakfastOnly] = useState(false);

  const destination = searchParams.destination as string || "";

  const filtered = useMemo(() => {
    let list = [...HOTELS];

    if (destination) {
      list = list.filter((h) =>
        h.location.city.toLowerCase().includes(destination.toLowerCase())
      );
    }

    list = list.filter(
      (h) => h.pricePerNight >= priceRange[0] && h.pricePerNight <= priceRange[1]
    );

    if (minRating > 0) {
      list = list.filter((h) => h.rating >= minRating);
    }

    if (selectedAmenities.length > 0) {
      list = list.filter((h) =>
        selectedAmenities.every((a) => h.amenities.includes(a))
      );
    }

    if (selectedTypes.length > 0) {
      list = list.filter((h) => selectedTypes.includes(h.propertyType));
    }

    if (breakfastOnly) {
      list = list.filter((h) => h.rooms.some((r) => r.breakfastIncluded));
    }

    switch (sortBy) {
      case "price-asc":
        list.sort((a, b) => a.pricePerNight - b.pricePerNight);
        break;
      case "price-desc":
        list.sort((a, b) => b.pricePerNight - a.pricePerNight);
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      case "popular":
        list.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
    }

    return list;
  }, [destination, priceRange, minRating, selectedAmenities, selectedTypes, sortBy, breakfastOnly]);

  const toggleAmenity = (a: string) =>
    setSelectedAmenities((prev) =>
      prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]
    );

  const toggleType = (t: string) =>
    setSelectedTypes((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );

  const clearFilters = () => {
    setPriceRange([1000, 15000]);
    setMinRating(0);
    setSelectedAmenities([]);
    setSelectedTypes([]);
    setBreakfastOnly(false);
  };

  const hasFilters =
    priceRange[0] > 1000 ||
    priceRange[1] < 15000 ||
    minRating > 0 ||
    selectedAmenities.length > 0 ||
    selectedTypes.length > 0;

  return (
    <div className="min-h-screen bg-cream pt-20">
      {/* Search Bar */}
      <div className="bg-white border-b border-dark-100 sticky top-16 z-30">
        <div className="container-luxury py-4">
          <SearchWidget compact />
        </div>
      </div>

      <div className="container-luxury py-8">
        {/* Results Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="font-display font-bold text-2xl text-dark">
              {destination ? `Hotels in ${destination}` : "All Properties"}
            </h1>
            <p className="text-dark-500 text-sm mt-1">
              {filtered.length} properties found
              {destination && ` in ${destination}`}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none pl-4 pr-10 py-2.5 rounded-xl border border-dark-200 text-sm font-medium text-dark bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 cursor-pointer"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-dark-400 pointer-events-none" />
            </div>

            {/* View Mode */}
            <div className="flex border border-dark-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setViewMode("grid")}
                className={cn("p-2.5 transition-colors", viewMode === "grid" ? "bg-primary-500 text-white" : "text-dark-400 hover:bg-cream-100")}
              >
                <LayoutGrid size={16} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={cn("p-2.5 transition-colors", viewMode === "list" ? "bg-primary-500 text-white" : "text-dark-400 hover:bg-cream-100")}
              >
                <List size={16} />
              </button>
            </div>

            {/* Filter Button */}
            <button
              onClick={() => setFiltersOpen((o) => !o)}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-colors",
                hasFilters
                  ? "border-primary-500 bg-primary-50 text-primary-600"
                  : "border-dark-200 text-dark hover:bg-cream-100"
              )}
            >
              <SlidersHorizontal size={15} />
              Filters
              {hasFilters && (
                <Badge variant="primary" size="sm">
                  {selectedAmenities.length + selectedTypes.length + (minRating > 0 ? 1 : 0)}
                </Badge>
              )}
            </button>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Sidebar Filters */}
          <AnimatePresence>
            {filtersOpen && (
              <motion.aside
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="w-72 flex-shrink-0 hidden md:block"
              >
                <div className="bg-white rounded-2xl border border-dark-100 p-5 sticky top-40">
                  <div className="flex items-center justify-between mb-5">
                    <h2 className="font-semibold text-dark">Filters</h2>
                    {hasFilters && (
                      <button
                        onClick={clearFilters}
                        className="text-xs text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1"
                      >
                        <X size={12} />
                        Clear all
                      </button>
                    )}
                  </div>

                  {/* Price Range */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-dark mb-3">Price per Night</h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded-lg font-medium">
                        ₹{priceRange[0].toLocaleString("en-IN")}
                      </span>
                      <div className="flex-1 h-px bg-dark-200" />
                      <span className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded-lg font-medium">
                        ₹{priceRange[1].toLocaleString("en-IN")}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={1000}
                      max={15000}
                      step={500}
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="w-full"
                    />
                  </div>

                  {/* Rating Filter */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-dark mb-3">Minimum Rating</h3>
                    <div className="flex gap-2">
                      {[0, 3, 3.5, 4, 4.5].map((r) => (
                        <button
                          key={r}
                          onClick={() => setMinRating(r)}
                          className={cn(
                            "flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors",
                            minRating === r
                              ? "bg-primary-500 text-white"
                              : "bg-cream-100 text-dark-600 hover:bg-cream-200"
                          )}
                        >
                          {r === 0 ? "All" : (
                            <>
                              <Star size={10} className="fill-current" />
                              {r}+
                            </>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Property Type */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-dark mb-3">Property Type</h3>
                    <div className="flex flex-col gap-2">
                      {PROPERTY_TYPE_FILTERS.map(({ value, label }) => (
                        <label key={value} className="flex items-center gap-2.5 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedTypes.includes(value)}
                            onChange={() => toggleType(value)}
                            className="checkbox-custom"
                          />
                          <span className="text-sm text-dark">{label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-dark mb-3">Amenities</h3>
                    <div className="flex flex-col gap-2">
                      {AMENITY_FILTERS.map((amenity) => (
                        <label key={amenity} className="flex items-center gap-2.5 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedAmenities.includes(amenity)}
                            onChange={() => toggleAmenity(amenity)}
                            className="checkbox-custom"
                          />
                          <span className="text-sm text-dark">{amenity}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Breakfast */}
                  <div>
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={breakfastOnly}
                        onChange={(e) => setBreakfastOnly(e.target.checked)}
                        className="checkbox-custom"
                      />
                      <span className="text-sm font-medium text-dark">Breakfast Included</span>
                    </label>
                  </div>
                </div>
              </motion.aside>
            )}
          </AnimatePresence>

          {/* Results */}
          <div className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <Search size={48} className="text-dark-300 mb-4" />
                <h3 className="font-semibold text-dark text-xl mb-2">No properties found</h3>
                <p className="text-dark-400 text-sm mb-6 max-w-sm">
                  Try adjusting your filters or search for a different destination.
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-2.5 bg-primary-500 text-white text-sm font-semibold rounded-xl hover:bg-primary-600 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : viewMode === "grid" ? (
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
              >
                <AnimatePresence mode="popLayout">
                  {filtered.map((hotel) => (
                    <motion.div
                      key={hotel.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.25 }}
                    >
                      <HotelCard hotel={hotel} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <div className="flex flex-col gap-4">
                <AnimatePresence mode="popLayout">
                  {filtered.map((hotel) => (
                    <motion.div
                      key={hotel.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <HotelCard hotel={hotel} variant="horizontal" />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
