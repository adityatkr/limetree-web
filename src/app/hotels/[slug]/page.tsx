import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HOTELS } from "@/lib/data";
import PropertyDetail from "./PropertyDetail";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const hotel = HOTELS.find((h) => h.slug === slug);
  if (!hotel) return {};

  return {
    title: `${hotel.name} | ${hotel.location.city} | LimeTree Hotels`,
    description: hotel.description,
    openGraph: {
      title: hotel.name,
      description: hotel.description,
      images: [{ url: hotel.heroImage }],
    },
  };
}

export async function generateStaticParams() {
  return HOTELS.map((h) => ({ slug: h.slug }));
}

export default async function HotelPage({ params }: Props) {
  const { slug } = await params;
  const hotel = HOTELS.find((h) => h.slug === slug);
  if (!hotel) notFound();

  return <PropertyDetail hotel={hotel} />;
}
