import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HOTELS } from "@/lib/data";
import PropertyDetail from "./PropertyDetail";
import JsonLd from "@/components/seo/JsonLd";
import { pageMetadata, hotelSchema, breadcrumbSchema, faqPageSchema } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const hotel = HOTELS.find((h) => h.slug === slug);
  if (!hotel) return {};

  return pageMetadata({
    title: `${hotel.name} | ${hotel.location.city} | LimeTree Hotels`,
    description: hotel.description,
    path: `/hotels/${hotel.slug}`,
    image: hotel.heroImage,
  });
}

export async function generateStaticParams() {
  return HOTELS.map((h) => ({ slug: h.slug }));
}

function hotelFaqs(hotel: (typeof HOTELS)[number]) {
  const breakfastIncluded = hotel.rooms.some((r) => r.breakfastIncluded);
  return [
    { q: `What time is check-in and check-out at ${hotel.name}?`, a: `Check-in is at ${hotel.policies.checkIn} and check-out is at ${hotel.policies.checkOut}.` },
    { q: "What is the cancellation policy?", a: hotel.policies.cancellation },
    { q: "Is breakfast included?", a: breakfastIncluded ? "Yes, breakfast is included with select room types at this property — look for the breakfast-included badge on the room you choose." : "Breakfast is not included by default, but can be added — contact our reservations team for options." },
    { q: "Are pets allowed?", a: hotel.policies.pets ? "Yes, pets are welcome at this property." : "Pets are not permitted at this property." },
    { q: "Is this property suitable for children?", a: hotel.policies.children ? "Yes, children are welcome at this property." : "This property is not set up for children." },
  ];
}

export default async function HotelPage({ params }: Props) {
  const { slug } = await params;
  const hotel = HOTELS.find((h) => h.slug === slug);
  if (!hotel) notFound();

  const propertyTypeLabel =
    hotel.propertyType === "serviced-apartment" ? "Serviced Apartments" : hotel.propertyType === "villa" ? "Villas" : "Hotels";
  const propertyTypePath =
    hotel.propertyType === "serviced-apartment" ? "/serviced-apartments" : "/hotels";

  return (
    <>
      <JsonLd
        data={[
          hotelSchema(hotel),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: propertyTypeLabel, path: propertyTypePath },
            { name: hotel.location.city, path: `/destinations/${hotel.location.city.toLowerCase().replace(/\s+/g, "-")}` },
            { name: hotel.name, path: `/hotels/${hotel.slug}` },
          ]),
          faqPageSchema(hotelFaqs(hotel)),
        ]}
      />
      <PropertyDetail hotel={hotel} />
    </>
  );
}
