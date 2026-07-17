"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin, Wifi, Share2, Heart, ChevronLeft, ChevronRight,
  X, Check, Phone, Calendar, Users, Coffee, Dumbbell, Car,
  Waves, Sparkles, Utensils, Shield, ArrowRight
} from "lucide-react";
import type { Hotel } from "@/lib/types";
import { formatPrice, WHATSAPP_URL } from "@/lib/utils";
import Badge from "@/components/ui/Badge";
import StarRating from "@/components/ui/StarRating";
import { GLOBAL_REVIEWS } from "@/lib/data";
import { format, addDays } from "date-fns";

const AMENITY_ICONS: Record<string, React.ReactNode> = {
  "Free WiFi": <Wifi size={16} />,
  "Swimming Pool": <Waves size={16} />,
  "Gym": <Dumbbell size={16} />,
  "Spa": <Sparkles size={16} />,
  "Restaurant": <Utensils size={16} />,
  "Parking": <Car size={16} />,
  "Coffee": <Coffee size={16} />,
};

interface Props {
  hotel: Hotel;
}

export default function PropertyDetail({ hotel }: Props) {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const extraImages = hotel.images.slice(1, 5);
  const [wishlisted, setWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  // Booking state
  const today = new Date();
  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(addDays(today, 2));
  const [guests, setGuests] = useState(2);
  const [selectedRoom, setSelectedRoom] = useState(hotel.rooms[0]?.id || "");

  const nights = Math.max(1, Math.round((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)));
  const room = hotel.rooms.find((r) => r.id === selectedRoom) || hotel.rooms[0];
  const total = (room?.pricePerNight || 0) * nights;

  const discount = hotel.originalPrice
    ? Math.round(((hotel.originalPrice - hotel.pricePerNight) / hotel.originalPrice) * 100)
    : null;

  const TABS = [
    { id: "overview", label: "Overview" },
    { id: "rooms", label: "Rooms" },
    { id: "amenities", label: "Amenities" },
    { id: "reviews", label: `Reviews (${hotel.reviewCount.toLocaleString()})` },
    { id: "location", label: "Location" },
    { id: "policies", label: "Policies" },
  ];

  return (
    <div className="min-h-screen bg-cream pt-16">
      {/* Gallery */}
      <div className="relative bg-dark">
        <div className="grid grid-cols-4 gap-2 h-[70vh] max-h-[600px] p-2">
          <div
            className={`col-span-4 relative rounded-xl overflow-hidden cursor-pointer img-zoom ${extraImages.length > 0 ? "md:col-span-2" : ""}`}
            onClick={() => { setGalleryIndex(0); setLightboxOpen(true); }}
          >
            <Image
              src={hotel.images[0]}
              alt={hotel.name}
              fill
              className="object-cover"
              sizes={extraImages.length > 0 ? "(max-width: 768px) 100vw, 50vw" : "100vw"}
              priority
            />
          </div>
          {extraImages.length > 0 && (
            <div
              className={`hidden md:grid col-span-2 gap-2 ${
                extraImages.length === 1
                  ? "grid-cols-1 grid-rows-1"
                  : extraImages.length === 2
                  ? "grid-cols-2 grid-rows-1"
                  : "grid-cols-2 grid-rows-2"
              }`}
            >
              {extraImages.map((img, i) => (
                <div
                  key={i}
                  className={`relative rounded-xl overflow-hidden cursor-pointer img-zoom ${
                    extraImages.length === 3 && i === 0 ? "row-span-2" : ""
                  }`}
                  onClick={() => { setGalleryIndex(i + 1); setLightboxOpen(true); }}
                >
                  <Image
                    src={img}
                    alt={`${hotel.name} ${i + 2}`}
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                  {i === 3 && hotel.images.length > 5 && (
                    <div className="absolute inset-0 bg-dark/60 flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">
                        +{hotel.images.length - 5} Photos
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Gallery Actions */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={() => setWishlisted((w) => !w)}
            className={`p-2.5 rounded-xl backdrop-blur-sm transition-all ${
              wishlisted ? "bg-error text-white" : "bg-white/80 text-dark hover:bg-white"
            }`}
          >
            <Heart size={18} className={wishlisted ? "fill-current" : ""} />
          </button>
          <button className="p-2.5 rounded-xl bg-white/80 backdrop-blur-sm text-dark hover:bg-white transition-all">
            <Share2 size={18} />
          </button>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-xl transition-colors"
              onClick={() => setLightboxOpen(false)}
            >
              <X size={24} />
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-xl transition-colors"
              onClick={(e) => { e.stopPropagation(); setGalleryIndex((i) => (i - 1 + hotel.images.length) % hotel.images.length); }}
            >
              <ChevronLeft size={32} />
            </button>
            <div className="relative w-full max-w-5xl h-[80vh] mx-8" onClick={(e) => e.stopPropagation()}>
              <Image
                src={hotel.images[galleryIndex]}
                alt={`${hotel.name} ${galleryIndex + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-xl transition-colors"
              onClick={(e) => { e.stopPropagation(); setGalleryIndex((i) => (i + 1) % hotel.images.length); }}
            >
              <ChevronRight size={32} />
            </button>
            <div className="absolute bottom-4 text-white/60 text-sm">
              {galleryIndex + 1} / {hotel.images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="container-luxury py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Details */}
          <div className="flex-1 min-w-0">
            {/* Header */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {"★".repeat(hotel.starCategory).split("").map((_, i) => (
                  <span key={i} className="text-accent-500 text-sm">★</span>
                ))}
                {hotel.featured && <Badge variant="accent">Featured</Badge>}
                {hotel.propertyType === "serviced-apartment" && (
                  <Badge variant="primary">Serviced Apartment</Badge>
                )}
              </div>

              <h1 className="font-display font-bold text-3xl sm:text-4xl text-dark mb-3">
                {hotel.name}
              </h1>

              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1.5 text-dark-500">
                  <MapPin size={15} />
                  <span className="text-sm">{hotel.location.address}, {hotel.location.city}</span>
                </div>
                <StarRating
                  rating={hotel.rating}
                  size="md"
                  showValue
                  reviewCount={hotel.reviewCount}
                />
              </div>

              <div className="flex flex-wrap gap-2 mt-3">
                {hotel.highlights.map((h) => (
                  <span key={h} className="text-xs bg-primary-50 text-primary-700 px-2.5 py-1 rounded-full font-medium">
                    {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex gap-1 mb-6 overflow-x-auto scrollbar-hide border-b border-dark-100 pb-px">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2.5 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? "border-primary-500 text-primary-600"
                      : "border-transparent text-dark-500 hover:text-dark"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === "overview" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <p className="text-dark-600 leading-relaxed text-base mb-6">{hotel.description}</p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                  {hotel.amenities.slice(0, 9).map((amenity) => (
                    <div key={amenity} className="flex items-center gap-2.5 p-3 bg-white rounded-xl border border-dark-100">
                      <div className="text-primary-500">
                        {AMENITY_ICONS[amenity] || <Check size={16} />}
                      </div>
                      <span className="text-sm text-dark">{amenity}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-primary-50 rounded-2xl p-5">
                  <h3 className="font-semibold text-dark mb-3">Nearby Attractions</h3>
                  <div className="flex flex-wrap gap-2">
                    {hotel.location.nearbyAttractions?.map((attr) => (
                      <span key={attr} className="text-sm bg-white text-dark-600 px-3 py-1 rounded-full border border-dark-100">
                        📍 {attr}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "rooms" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <div className="flex flex-col gap-4">
                  {hotel.rooms.map((room) => (
                    <div
                      key={room.id}
                      className={`border rounded-2xl overflow-hidden transition-all ${
                        selectedRoom === room.id
                          ? "border-primary-500 shadow-primary/20 shadow-md"
                          : "border-dark-100 hover:border-dark-300"
                      }`}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-3">
                        <div className="relative h-48 sm:h-full">
                          <Image
                            src={room.images[0]}
                            alt={room.name}
                            fill
                            className="object-cover"
                            sizes="33vw"
                          />
                        </div>
                        <div className="sm:col-span-2 p-5">
                          <div className="flex items-start justify-between gap-4 mb-3">
                            <div>
                              <h3 className="font-semibold text-dark text-lg">{room.name}</h3>
                              <p className="text-dark-500 text-sm mt-1">{room.size} sqm · {room.bedType} · Up to {room.maxOccupancy} guests</p>
                            </div>
                            <div className="text-right">
                              <div className="font-display font-bold text-2xl text-primary-600">
                                {formatPrice(room.pricePerNight)}
                              </div>
                              <div className="text-dark-400 text-xs">/night</div>
                            </div>
                          </div>

                          <p className="text-dark-500 text-sm mb-3">{room.description}</p>

                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {room.amenities.slice(0, 5).map((a) => (
                              <span key={a} className="text-xs bg-cream-100 text-dark-600 px-2 py-0.5 rounded-full">{a}</span>
                            ))}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex gap-2 text-xs">
                              {room.breakfastIncluded && (
                                <span className="text-success flex items-center gap-1">
                                  <Check size={11} /> Breakfast included
                                </span>
                              )}
                              <span className="text-primary-600 flex items-center gap-1">
                                <Check size={11} /> Free cancellation
                              </span>
                            </div>
                            <button
                              onClick={() => setSelectedRoom(room.id)}
                              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all ${
                                selectedRoom === room.id
                                  ? "bg-primary-500 text-white"
                                  : "border border-primary-500 text-primary-600 hover:bg-primary-50"
                              }`}
                            >
                              {selectedRoom === room.id ? "Selected" : "Select"}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "amenities" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {hotel.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-2.5 p-3.5 bg-white rounded-xl border border-dark-100">
                      <div className="text-primary-500 w-5 flex-shrink-0">
                        {AMENITY_ICONS[amenity] || <Check size={16} />}
                      </div>
                      <span className="text-sm text-dark">{amenity}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "reviews" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <div className="flex items-center gap-6 p-5 bg-primary-50 rounded-2xl mb-6">
                  <div className="text-center">
                    <div className="font-display font-bold text-5xl text-primary-600">{hotel.rating}</div>
                    <div className="flex justify-center mt-1">
                      <StarRating rating={hotel.rating} size="sm" />
                    </div>
                    <div className="text-dark-400 text-xs mt-1">{hotel.reviewCount.toLocaleString()} reviews</div>
                  </div>
                  <div className="flex-1">
                    {[5,4,3,2,1].map((star) => (
                      <div key={star} className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-dark-400 w-3">{star}</span>
                        <div className="flex-1 h-1.5 bg-dark-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-accent-500 rounded-full"
                            style={{ width: `${star === 5 ? 72 : star === 4 ? 20 : star === 3 ? 5 : 2}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  {GLOBAL_REVIEWS.slice(0, 4).map((review) => (
                    <div key={review.id} className="p-5 bg-white rounded-2xl border border-dark-100">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center font-bold text-primary-600 text-sm">
                            {review.guestName[0]}
                          </div>
                          <div>
                            <div className="font-semibold text-dark text-sm">{review.guestName}</div>
                            <div className="text-dark-400 text-xs">{new Date(review.date).toLocaleDateString("en-IN", { month: "long", year: "numeric" })}</div>
                          </div>
                        </div>
                        <StarRating rating={review.rating} size="sm" />
                      </div>
                      <p className="text-dark-600 text-sm leading-relaxed">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "location" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <div className="bg-white rounded-2xl border border-dark-100 p-5 mb-6">
                  <h3 className="font-semibold text-dark mb-3">Address</h3>
                  <p className="text-dark-600 text-sm">{hotel.location.address}</p>
                  <p className="text-dark-400 text-sm">{hotel.location.city}, {hotel.location.state} - {hotel.location.pincode}</p>
                </div>

                {/* Map placeholder */}
                <div className="bg-dark-100 rounded-2xl h-64 flex items-center justify-center mb-6">
                  <div className="text-center text-dark-400">
                    <MapPin size={32} className="mx-auto mb-2 text-primary-500" />
                    <p className="text-sm font-medium">Interactive Map</p>
                    <p className="text-xs">Google Maps integration</p>
                  </div>
                </div>

                {hotel.location.nearbyAttractions && (
                  <div>
                    <h3 className="font-semibold text-dark mb-3">Nearby Attractions</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {hotel.location.nearbyAttractions.map((attr) => (
                        <div key={attr} className="flex items-center gap-2.5 p-3 bg-white rounded-xl border border-dark-100">
                          <MapPin size={14} className="text-primary-500 flex-shrink-0" />
                          <span className="text-sm text-dark">{attr}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === "policies" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Check-in Time", value: hotel.policies.checkIn },
                    { label: "Check-out Time", value: hotel.policies.checkOut },
                    { label: "Cancellation Policy", value: hotel.policies.cancellation },
                    { label: "Pets", value: hotel.policies.pets ? "Allowed" : "Not allowed" },
                    { label: "Smoking", value: hotel.policies.smoking ? "Allowed in designated areas" : "No smoking" },
                    { label: "Children", value: hotel.policies.children ? "Welcome" : "Adults only" },
                  ].map(({ label, value }) => (
                    <div key={label} className="p-4 bg-white rounded-xl border border-dark-100">
                      <div className="flex items-start gap-2.5">
                        <Shield size={15} className="text-primary-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs text-dark-400 font-medium mb-0.5">{label}</div>
                          <div className="text-sm text-dark font-medium">{value}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Right: Sticky Booking Card */}
          <div className="w-full lg:w-80 xl:w-96 flex-shrink-0">
            <div className="sticky-booking-card bg-white rounded-2xl border border-dark-100 shadow-luxury p-6">
              {/* Price */}
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-display font-bold text-3xl text-primary-600">
                  {formatPrice(room?.pricePerNight || hotel.pricePerNight)}
                </span>
                <span className="text-dark-400 text-sm">/night</span>
              </div>
              {hotel.originalPrice && (
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-dark-300 text-sm line-through">{formatPrice(hotel.originalPrice)}</span>
                  {discount && <Badge variant="accent" size="sm">{discount}% off</Badge>}
                </div>
              )}

              <StarRating rating={hotel.rating} size="sm" showValue reviewCount={hotel.reviewCount} className="mb-5" />

              {/* Date Inputs */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="border border-dark-200 rounded-xl p-3 focus-within:border-primary-500 transition-colors">
                  <div className="flex items-center gap-1.5 text-dark-400 text-xs mb-1">
                    <Calendar size={12} />
                    Check-in
                  </div>
                  <input
                    type="date"
                    value={format(checkIn, "yyyy-MM-dd")}
                    min={format(new Date(), "yyyy-MM-dd")}
                    onChange={(e) => setCheckIn(new Date(e.target.value))}
                    className="w-full text-sm font-semibold text-dark bg-transparent border-none focus:outline-none"
                  />
                </div>
                <div className="border border-dark-200 rounded-xl p-3 focus-within:border-primary-500 transition-colors">
                  <div className="flex items-center gap-1.5 text-dark-400 text-xs mb-1">
                    <Calendar size={12} />
                    Check-out
                  </div>
                  <input
                    type="date"
                    value={format(checkOut, "yyyy-MM-dd")}
                    min={format(addDays(checkIn, 1), "yyyy-MM-dd")}
                    onChange={(e) => setCheckOut(new Date(e.target.value))}
                    className="w-full text-sm font-semibold text-dark bg-transparent border-none focus:outline-none"
                  />
                </div>
              </div>

              {/* Guests */}
              <div className="border border-dark-200 rounded-xl p-3 mb-4 focus-within:border-primary-500 transition-colors">
                <div className="flex items-center gap-1.5 text-dark-400 text-xs mb-1">
                  <Users size={12} />
                  Guests
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-dark">{guests} Guest{guests > 1 ? "s" : ""}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setGuests((g) => Math.max(1, g - 1))}
                      className="w-7 h-7 rounded-lg border border-dark-200 flex items-center justify-center text-dark hover:border-primary-500 transition-colors"
                    >−</button>
                    <button
                      onClick={() => setGuests((g) => g + 1)}
                      className="w-7 h-7 rounded-lg border border-dark-200 flex items-center justify-center text-dark hover:border-primary-500 transition-colors"
                    >+</button>
                  </div>
                </div>
              </div>

              {/* Price Summary */}
              <div className="bg-cream-100 rounded-xl p-3.5 mb-4">
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-dark-500">{formatPrice(room?.pricePerNight || 0)} × {nights} nights</span>
                  <span className="font-medium text-dark">{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-dark-500">Taxes & fees</span>
                  <span className="font-medium text-dark">{formatPrice(Math.round(total * 0.18))}</span>
                </div>
                <div className="flex justify-between text-sm font-bold pt-2 border-t border-dark-200">
                  <span className="text-dark">Total</span>
                  <span className="text-primary-600">{formatPrice(total + Math.round(total * 0.18))}</span>
                </div>
              </div>

              {/* Book Now Button */}
              <Link
                href={`/hotels/${hotel.slug}/book?checkIn=${format(checkIn, "yyyy-MM-dd")}&checkOut=${format(checkOut, "yyyy-MM-dd")}&guests=${guests}&room=${selectedRoom}`}
                className="flex items-center justify-center gap-2 w-full py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-primary mb-3"
              >
                Reserve Now
                <ArrowRight size={16} />
              </Link>

              {/* WhatsApp Booking */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-semibold text-sm rounded-xl transition-all duration-200"
              >
                Book via WhatsApp
              </a>

              <div className="flex items-center gap-1.5 justify-center mt-4 text-dark-400 text-xs">
                <Shield size={12} />
                <span>Free cancellation · Best rate guaranteed</span>
              </div>

              {/* Contact */}
              <a
                href="tel:+91XXXXXXXXXX"
                className="flex items-center justify-center gap-2 mt-3 text-dark-500 text-xs hover:text-primary-600 transition-colors"
              >
                <Phone size={12} />
                Call for assistance
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
