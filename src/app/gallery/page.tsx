import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery | Lime Tree Hotels — Properties Across India",
  description: "Browse photos of Lime Tree Hotels across Gurgaon, Delhi, Greater Noida, Noida, Jaipur, Vrindavan, and Goa — hotels, serviced apartments, villas and banquet halls.",
};

const GALLERY_ITEMS = [
  { src: "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_234,y_0,w_4532,h_3333,r_0,c_crop/q_80,w_800,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-hotel-sushant-lok-gurgaon---next-to-iffco-chowk-metro-station/DSC09899_ozpuez", alt: "Lime Tree Hotel IFFCO Chowk", tag: "Hotel", span: "col-span-2 row-span-2" },
  { src: "https://assets.simplotel.com/simplotel/image/upload/q_80,w_600,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-hotels-on-golf-course-extension-road-gurgaon/Lime_Tree_Hotel_Golf_Course_Extension_Road_Gurgaon-_Room_khtpwz", alt: "Deluxe Room", tag: "Rooms" },
  { src: "https://assets.simplotel.com/simplotel/image/upload/q_80,w_600,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-hotels-on-golf-course-extension-road-gurgaon/Lime_Tree_Hotel_Golf_Course_Extension_Road_Gurgaon-_Facade_d4rspw", alt: "Hotel Exterior", tag: "Exterior" },
  { src: "https://assets.simplotel.com/simplotel/image/upload/q_80,w_600,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-two-bhk-service-apartment-golf-course-road-gurgaon/10_-_Copy_fyq6iv", alt: "Serviced Apartment Living Room", tag: "Apartments" },
  { src: "https://assets.simplotel.com/simplotel/image/upload/x_0,y_11,w_1448,h_1064,r_0,c_crop/q_80,w_600,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-hotel-banquet-jaipur/hotel-lobby", alt: "Restaurant & Dining", tag: "Dining" },
  { src: "https://assets.simplotel.com/simplotel/image/upload/x_67,y_0,w_1306,h_960,r_0,c_crop/q_80,w_800,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-villa-with-private-pool-|-luxury-stay-in-goa/Pool2_7939cbbc", alt: "Goa Villa Pool", tag: "Villa", span: "col-span-2" },
  { src: "https://assets.simplotel.com/simplotel/image/upload/q_80,w_600,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-hotels-service-apartment-private-limited/LT-Sector_38-115_4e3d5eaa", alt: "Hotel Amenities", tag: "Amenities" },
  { src: "https://assets.simplotel.com/simplotel/image/upload/q_80,w_600,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-hotels-and-banquet-hall-near-huda-metro-gurgaon/Banquet_fxsxcz", alt: "Banquet Hall Setup", tag: "Banquet" },
  { src: "https://assets.simplotel.com/simplotel/image/upload/q_80,w_600,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-villa-with-private-pool-|-luxury-stay-in-goa/Villa_living_room_klxmue", alt: "Villa Living Room", tag: "Villa" },
  { src: "https://assets.simplotel.com/simplotel/image/upload/q_80,w_600,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-3bhk-serviced-apartments-dlf-phase---5-gurgaon/DSC01875_xqheud", alt: "3BHK Apartment", tag: "Apartments" },
  { src: "https://assets.simplotel.com/simplotel/image/upload/x_0,y_11,w_1448,h_1064,r_0,c_crop/q_80,w_600,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-hotel-banquet-jaipur/Banquet_gkxjry", alt: "Jaipur Hotel", tag: "Jaipur" },
  { src: "https://assets.simplotel.com/simplotel/image/upload/x_195,y_0,w_1260,h_927,r_0,c_crop/q_80,w_600,dpr_1,f_auto,fl_progressive,c_limit/lime-boutique-bed-breakfast-|-nehru-place-metro-1753349469/Hotels-in-Delhi-Lime-Stay-Bedroom_sktjlo", alt: "Delhi Boutique Room", tag: "Rooms" },
];

const CATEGORIES = ["All", "Hotel", "Rooms", "Apartments", "Villa", "Dining", "Amenities", "Banquet", "Exterior"];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-stone-50 pt-16">
      {/* Hero */}
      <section className="bg-stone-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary-400 text-xs font-semibold uppercase tracking-widest mb-4">Gallery</p>
          <h1 className="font-bold text-white mb-4" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontFamily: "var(--font-display)" }}>
            See What Awaits You
          </h1>
          <p className="text-white/60 text-lg">Photos from our hotels, serviced apartments, villas, and amenities across 7 cities.</p>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter — visual only, no JS for SSR */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {CATEGORIES.map((cat) => (
              <span key={cat} className="px-4 py-2 rounded-full border border-stone-200 text-xs font-semibold text-stone-600 hover:border-primary-400 hover:text-primary-600 cursor-pointer transition-colors">
                {cat}
              </span>
            ))}
          </div>

          {/* Masonry-style bento grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[200px]">
            {GALLERY_ITEMS.map(({ src, alt, tag, span }) => (
              <div
                key={src}
                className={`relative group rounded-2xl overflow-hidden ${span ?? ""}`}
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-bold text-white bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full">{tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-stone-50 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-bold text-stone-900 text-2xl mb-3" style={{ fontFamily: "var(--font-display)" }}>Ready to Experience It Yourself?</h2>
          <p className="text-stone-500 text-sm mb-6">Browse all properties and find your perfect stay.</p>
          <Link href="/hotels" className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-2xl transition-all">
            Browse Properties <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
