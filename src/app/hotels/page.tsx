import type { Metadata } from "next";
import HotelsClient from "./HotelsClient";
import FAQSection from "@/components/ui/FAQSection";

export const metadata: Metadata = {
  title: "Hotels | Browse Premium Hotels Across India",
  description:
    "Search and book premium hotels across Delhi, Gurgaon, Jaipur, Mumbai, Hyderabad, and Bangalore. Best rates guaranteed. Free cancellation available.",
};

const FAQS = [
  { q: "Is it cheaper to book directly on this website?", a: "Yes. Booking direct always gets you our best available rate, plus perks like free cancellation and offers that aren't available on third-party platforms." },
  { q: "What is the check-in and check-out time?", a: "Standard check-in is 2:00 PM and check-out is 12:00 PM (noon). Early check-in and late check-out can be arranged subject to availability." },
  { q: "What ID proof do I need at check-in?", a: "One valid government-issued photo ID per guest — Aadhaar, Passport, Driving License, or Voter ID. International guests must present a passport." },
  { q: "What is the cancellation policy?", a: "Most rates offer free cancellation up to 24 hours before check-in. Some promotional rates are non-refundable — the exact policy is shown before you confirm your booking." },
  { q: "Is breakfast included in the room rate?", a: "It depends on the rate you choose — look for the 'Breakfast Included' badge on the room, or contact us to confirm before booking." },
  { q: "Do you offer discounted rates for group or corporate bookings?", a: "Yes, groups of 5+ rooms and corporate accounts get special rates, GST-compliant invoicing, and a dedicated coordinator. Reach out to our reservations or corporate team." },
  { q: "Is parking and WiFi available at all properties?", a: "Yes, complimentary parking and high-speed WiFi are available at every Lime Tree hotel, along with 24x7 power backup." },
  { q: "Can I filter hotels by city or amenities?", a: "Yes — use the search bar and filters above to narrow results by destination, price, rating, property type, and amenities like pool, gym, or spa." },
];

export default async function HotelsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  return (
    <>
      <HotelsClient searchParams={params} />
      <FAQSection
        eyebrow="Have Questions?"
        title="Hotel Booking FAQs"
        subtitle="Answers about rates, check-in, cancellations, and more."
        faqs={FAQS}
      />
    </>
  );
}
