"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChefHat, Sofa, ShirtIcon, Monitor, Clock, ArrowRight, CheckCircle2
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const FEATURES = [
  { icon: ChefHat, label: "Fully Equipped Kitchen", color: "text-orange-500 bg-orange-50" },
  { icon: Sofa, label: "Private Living Room", color: "text-indigo-500 bg-indigo-50" },
  { icon: ShirtIcon, label: "Laundry & Washer", color: "text-teal-500 bg-teal-50" },
  { icon: Monitor, label: "Dedicated Workspace", color: "text-blue-500 bg-blue-50" },
  { icon: Clock, label: "Flexible Long Stay", color: "text-purple-500 bg-purple-50" },
];

const INCLUSIONS = [
  "Weekly housekeeping",
  "High-speed WiFi",
  "Swimming pool & gym",
  "24x7 security & CCTV",
  "Power backup",
  "Concierge services",
  "Parking",
  "Monthly rates available",
];

const APARTMENT_IMAGES = [
  "https://assets.simplotel.com/simplotel/image/upload/q_80,w_600,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-two-bhk-service-apartment-golf-course-road-gurgaon/10_-_Copy_fyq6iv",
  "https://assets.simplotel.com/simplotel/image/upload/q_80,w_600,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-3bhk-serviced-apartments-dlf-phase---5-gurgaon/DSC01875_xqheud",
  "https://assets.simplotel.com/simplotel/image/upload/q_80,w_600,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-hotel-one-bhk-serviced-apartment---noida-sector-50-metro/5_ih0fjv",
  "https://assets.simplotel.com/simplotel/image/upload/q_80,w_600,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-3bhk-serviced-apartments-dlf-phase---5-gurgaon/DSC01865_xgn4sq",
];

export default function ServicedApartments() {
  return (
    <section className="section-padding bg-white">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            {APARTMENT_IMAGES.map((src, i) => (
              <div
                key={i}
                className={`relative rounded-2xl overflow-hidden img-zoom ${
                  i === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"
                }`}
              >
                <Image
                  src={src}
                  alt={`LimeTree Serviced Apartment ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            ))}
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <SectionHeader
              eyebrow="Serviced Apartments"
              title="Your Home,
Wherever You Go"
              description="Our luxury serviced apartments blend the comfort of home with the services of a five-star hotel. Perfect for long stays, relocations, and extended projects."
              align="left"
              className="mb-8"
            />

            {/* Feature Chips */}
            <div className="flex flex-wrap gap-3 mb-8">
              {FEATURES.map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${color}`}
                >
                  <Icon size={15} />
                  {label}
                </div>
              ))}
            </div>

            {/* Inclusions */}
            <div className="bg-cream-100 rounded-2xl p-5 mb-8">
              <p className="text-sm font-semibold text-dark mb-4">Everything included:</p>
              <div className="grid grid-cols-2 gap-2">
                {INCLUSIONS.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-dark-600">
                    <CheckCircle2 size={13} className="text-primary-500 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Teaser */}
            <div className="flex items-center gap-4 mb-8 p-4 rounded-xl bg-primary-50 border border-primary-100">
              <div>
                <div className="text-xs text-primary-600 font-medium">Starting from</div>
                <div className="font-display font-bold text-3xl text-primary-600">₹3,999<span className="text-base font-normal text-dark-400">/night</span></div>
              </div>
              <div className="h-12 w-px bg-primary-200" />
              <div>
                <div className="text-xs text-dark-400 mb-1">Monthly packages</div>
                <div className="font-semibold text-dark text-sm">Save up to 30% on monthly stays</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/serviced-apartments"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-500 hover:bg-primary-600 text-white font-semibold text-sm rounded-xl transition-all duration-200 hover:shadow-primary group"
              >
                Explore Apartments
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-primary-200 text-primary-600 font-semibold text-sm rounded-xl hover:border-primary-500 transition-all duration-200"
              >
                Get Monthly Rates
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
