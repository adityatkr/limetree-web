import type { Metadata } from "next";
import type { Hotel, BlogPost, Destination } from "./types";
import { PHONE_NUMBER, EMAIL, HQ_ADDRESS } from "./utils";

/**
 * Central SEO utilities: shared across every page's metadata export and
 * JSON-LD structured data so canonical/OG/Twitter/robots stay consistent
 * and schema generation isn't duplicated per page.
 */

export const SITE_URL = "https://www.limetreehotels.com";
export const SITE_NAME = "LimeTree Hotels";
export const DEFAULT_OG_IMAGE = "/og-image.jpg";

export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
  noindex?: boolean;
}

/** Builds a full Metadata object (canonical + OpenGraph + Twitter + robots) from a title/description a page already has. */
export function pageMetadata({ title, description, path, image, keywords, noindex }: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl(image || DEFAULT_OG_IMAGE);

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
        },
  };
}

/** Organization schema — homepage identity for knowledge panels. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/favicon.ico"),
    foundingDate: "2011",
    telephone: PHONE_NUMBER,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: HQ_ADDRESS,
      addressCountry: "IN",
    },
    sameAs: [
      "https://facebook.com/limetreehotels",
      "https://instagram.com/limetreehotels",
      "https://linkedin.com/company/limetreehotels",
      "https://twitter.com/limetreehotels",
      "https://youtube.com/@limetreehotels",
    ],
  };
}

/** WebSite schema with a SearchAction so Google can offer a sitelinks search box. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/hotels?destination={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

/** BreadcrumbList schema — used site-wide without any visible breadcrumb UI. */
export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export interface SimpleFaq {
  q: string;
  a: string;
}

/** FAQPage schema — same shape used by FAQSection.tsx, centralized so hotel pages can reuse it too. */
export function faqPageSchema(faqs: SimpleFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

const PROPERTY_TYPE_SCHEMA: Record<Hotel["propertyType"], string> = {
  hotel: "Hotel",
  "serviced-apartment": "Apartment",
  villa: "House",
};

/** Combined Hotel + LodgingBusiness + LocalBusiness schema for a property detail page. */
export function hotelSchema(hotel: Hotel) {
  const url = absoluteUrl(`/hotels/${hotel.slug}`);
  const priceRange = hotel.originalPrice
    ? `₹${hotel.pricePerNight}-₹${hotel.originalPrice}`
    : `₹${hotel.pricePerNight}`;

  return {
    "@context": "https://schema.org",
    "@type": ["Hotel", "LodgingBusiness", "LocalBusiness"],
    "@id": `${url}#property`,
    name: hotel.name,
    description: hotel.description,
    url,
    image: hotel.images.map((img) => absoluteUrl(img)),
    telephone: PHONE_NUMBER,
    email: EMAIL,
    priceRange,
    additionalType: `https://schema.org/${PROPERTY_TYPE_SCHEMA[hotel.propertyType]}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: hotel.location.address,
      addressLocality: hotel.location.city,
      addressRegion: hotel.location.state,
      postalCode: hotel.location.pincode,
      addressCountry: "IN",
    },
    ...(hotel.location.lat && hotel.location.lng
      ? { geo: { "@type": "GeoCoordinates", latitude: hotel.location.lat, longitude: hotel.location.lng } }
      : {}),
    starRating: { "@type": "Rating", ratingValue: hotel.starCategory },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: hotel.rating,
      reviewCount: hotel.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    amenityFeature: hotel.amenities.map((a) => ({
      "@type": "LocationFeatureSpecification",
      name: a,
      value: true,
    })),
    checkinTime: hotel.policies.checkIn,
    checkoutTime: hotel.policies.checkOut,
    petsAllowed: hotel.policies.pets,
    ...(hotel.location.nearbyAttractions?.length
      ? {
          hasMap: `https://www.google.com/maps/search/?api=1&query=${hotel.location.lat},${hotel.location.lng}`,
          containsPlace: hotel.location.nearbyAttractions.map((a) => ({
            "@type": "TouristAttraction",
            name: a.replace(/\s*\([^)]*\)\s*$/, "").trim(),
          })),
        }
      : {}),
  };
}

/** BlogPosting/Article schema for a blog post page. */
export function blogPostingSchema(post: BlogPost) {
  const url = absoluteUrl(`/blog/${post.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: post.title,
    description: post.excerpt,
    image: absoluteUrl(post.image),
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: absoluteUrl("/favicon.ico") },
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    articleSection: post.category,
    keywords: post.tags.join(", "),
  };
}

/** Restaurant schema for the /restaurant page. */
export function restaurantSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Amaya Restaurant",
    description: "Amaya — LimeTree's signature restaurant inspired by Jaipur's culinary heritage, serving royal Rajasthani flavors with modern gastronomy.",
    url: absoluteUrl("/restaurant"),
    telephone: PHONE_NUMBER,
    servesCuisine: ["Rajasthani", "North Indian", "Multi-cuisine"],
    address: {
      "@type": "PostalAddress",
      streetAddress: HQ_ADDRESS,
      addressCountry: "IN",
    },
    priceRange: "₹₹",
  };
}

/** CollectionPage + ItemList schema for a destination/city hub page. */
export function destinationSchema(dest: Destination, hotelUrls: string[]) {
  const url = absoluteUrl(`/destinations/${dest.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": url,
    name: `Hotels in ${dest.city}`,
    description: dest.description,
    url,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: hotelUrls.length,
      itemListElement: hotelUrls.map((hUrl, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: hUrl,
      })),
    },
  };
}
