"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { UtensilsCrossed, Clock, MapPin, ArrowRight } from "lucide-react";

export default function RestaurantTeaser() {
  return (
    <section className="section-padding bg-dark overflow-hidden relative">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 50%, #65a745 0%, transparent 50%),
                            radial-gradient(circle at 75% 50%, #ffcc09 0%, transparent 50%)`,
        }}
      />

      <div className="container-luxury relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 text-primary-400 text-sm font-medium tracking-widest uppercase mb-6">
              <div className="h-px w-8 bg-primary-500" />
              Our Restaurant
            </div>

            <h2
              className="font-display text-white mb-3"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.1 }}
            >
              Amaya
            </h2>

            <p className="text-primary-400 font-display text-xl italic mb-6">
              &ldquo;Legacy in Every Flavour&rdquo;
            </p>

            <p className="text-white/60 text-base leading-relaxed mb-8 max-w-lg">
              Inspired by the rich culinary heritage of Jaipur, Amaya brings together royal Rajasthani recipes
              and modern gastronomy. Every dish tells a story of tradition, passion, and the finest ingredients.
            </p>

            <div className="flex flex-wrap gap-5 mb-10 text-sm">
              <div className="flex items-center gap-2 text-white/60">
                <Clock size={16} className="text-primary-400" />
                <span>7:00 AM – 11:00 PM</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <MapPin size={16} className="text-primary-400" />
                <span>LimeTree Heritage, Jaipur</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <UtensilsCrossed size={16} className="text-primary-400" />
                <span>Multi-Cuisine · A la carte · Buffet</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/restaurant"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-500 hover:bg-primary-600 text-white font-semibold text-sm rounded-xl transition-all duration-200 hover:shadow-primary group"
              >
                Explore Amaya
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/restaurant#reserve"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white font-semibold text-sm rounded-xl hover:bg-white/10 transition-all duration-200"
              >
                Reserve a Table
              </Link>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="https://assets.simplotel.com/simplotel/image/upload/x_0,y_11,w_1448,h_1064,r_0,c_crop/q_80,w_1000,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-hotel-banquet-jaipur/hotel-lobby"
                alt="Amaya Restaurant at LimeTree"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
            </div>

            {/* Floating Cuisine Tags */}
            <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
              {["Rajasthani", "North Indian", "Continental", "Pan Asian"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full border border-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
