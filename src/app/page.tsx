import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Destinations from "@/components/home/Destinations";
import FeaturedHotels from "@/components/home/FeaturedHotels";
import WhyLimeTree from "@/components/home/WhyLimeTree";
import CorporateSection from "@/components/home/CorporateSection";
import MedicalTourism from "@/components/home/MedicalTourism";
import HolidayPackages from "@/components/home/HolidayPackages";
import WomenTravelers from "@/components/home/WomenTravelers";
import Reviews from "@/components/home/Reviews";
import OffersSection from "@/components/home/OffersSection";
import AwardsStrip from "@/components/home/AwardsStrip";
import FAQSection from "@/components/ui/FAQSection";

const FAQS = [
  { q: "Is it cheaper to book directly on this website?", a: "Yes. Booking direct always gets you our best available rate, plus perks like free cancellation and offers that aren't available on third-party platforms." },
  { q: "What's the difference between a hotel room and a serviced apartment?", a: "A serviced apartment gives you a separate bedroom, living room, and full kitchen — built for longer, independent stays. A hotel room is ideal for shorter visits with daily housekeeping and on-site dining." },
  { q: "What is the check-in and check-out time?", a: "Standard check-in is 2:00 PM and check-out is 12:00 PM (noon). Early check-in and late check-out can be arranged subject to availability." },
  { q: "What is the cancellation policy?", a: "Most rates offer free cancellation up to 24 hours before check-in. Some promotional rates are non-refundable — the exact policy is shown before you confirm your booking." },
  { q: "Do you offer corporate rates and GST invoicing?", a: "Yes, corporate accounts get negotiated rates, GST-compliant invoicing, and consolidated monthly billing. Contact our corporate team to get set up." },
  { q: "Which cities do you have properties in?", a: "Lime Tree Hotels operates 30+ properties across Gurgaon, Delhi, Jaipur, Greater Noida, Noida, Vrindavan, and Goa — including hotels, serviced apartments, a villa, and banquet halls." },
];

export const metadata: Metadata = {
  title: "Lime Tree Hotels & Serviced Apartments | Gurgaon, Delhi, Jaipur, Noida, Goa",
  description:
    "Lime Tree Hotels — 12 years, 500+ rooms, 30+ properties across 7 Indian cities. Premium hotels, serviced apartments (Studio to 3BHK), villas, and banquet halls. Medical tourism, corporate stays, holiday packages. Book direct for best rates.",
  keywords: ["Lime Tree Hotels", "serviced apartments Gurgaon", "hotel near Medanta", "corporate stay Gurgaon", "holiday packages India"],
  openGraph: {
    title: "Lime Tree Hotels & Serviced Apartments — Feel Like Home",
    description: "12 Years · 500+ Rooms · 30+ Properties · 7 Cities. Hotels, serviced apartments & villas across Gurgaon, Delhi, Jaipur, Greater Noida, Noida, Vrindavan & Goa.",
    images: [{ url: "https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_234,y_0,w_4532,h_3333,r_0,c_crop/q_80,w_1200,dpr_1,f_auto,fl_progressive,c_limit/lime-tree-hotel-sushant-lok-gurgaon---next-to-iffco-chowk-metro-station/DSC09899_ozpuez" }],
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LodgingBusiness",
            name: "Lime Tree Hotels",
            description: "Premium Hotels & Serviced Apartments across 7 Indian cities",
            url: "https://www.limetreehotels.com",
            telephone: "+91 74790 00111",
            email: "reservation@limetreehotels.com",
            foundingDate: "2011",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Plot A-583, Near Huda City Centre, Sector 43",
              addressLocality: "Gurugram",
              addressRegion: "Haryana",
              postalCode: "122002",
              addressCountry: "IN",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.4",
              reviewCount: "5000",
              bestRating: "5",
            },
          }),
        }}
      />

      <Hero />
      <TrustBar />
      <Destinations />
      <FeaturedHotels />
      <MedicalTourism />
      <WhyLimeTree />
      <CorporateSection />
      <HolidayPackages />
      <WomenTravelers />
      <Reviews />
      <OffersSection />
      <AwardsStrip />
      <FAQSection
        eyebrow="Have Questions?"
        title="Frequently Asked Questions"
        subtitle="Quick answers about booking, stays, and rates. Browse our full FAQ for more."
        faqs={FAQS}
      />
    </>
  );
}
