import type { Metadata } from "next";
import { OFFERS } from "@/lib/data";
import { pageMetadata, breadcrumbSchema, absoluteUrl } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import OffersClient from "./OffersClient";

export const metadata: Metadata = pageMetadata({
  title: "Offers & Deals | Exclusive Discounts — Lime Tree Hotels",
  description: "Handpicked deals and promo codes on hotels, serviced apartments, and villas across Lime Tree Hotels. Save more when you book direct.",
  path: "/offers",
});

function offerSchema(offer: (typeof OFFERS)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: offer.title,
    description: offer.description,
    url: absoluteUrl("/offers"),
    image: absoluteUrl(offer.image),
    priceCurrency: "INR",
    ...(offer.discountType === "percentage" ? { discount: `${offer.discount}%` } : { discount: offer.discount }),
    validFrom: offer.validFrom,
    validThrough: offer.validTo,
    availability: "https://schema.org/InStock",
  };
}

export default function OffersPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Offers & Deals", path: "/offers" },
          ]),
          ...OFFERS.map(offerSchema),
        ]}
      />
      <OffersClient />
    </>
  );
}
