import type { MetadataRoute } from "next";
import { HOTELS, DESTINATIONS, BLOG_POSTS } from "@/lib/data";
import { absoluteUrl } from "@/lib/seo";

interface StaticEntry {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}

const STATIC_PAGES: StaticEntry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/hotels", changeFrequency: "daily", priority: 0.9 },
  { path: "/serviced-apartments", changeFrequency: "weekly", priority: 0.9 },
  { path: "/destinations", changeFrequency: "weekly", priority: 0.8 },
  { path: "/offers", changeFrequency: "daily", priority: 0.8 },
  { path: "/medical-tourism", changeFrequency: "monthly", priority: 0.7 },
  { path: "/corporate", changeFrequency: "monthly", priority: 0.7 },
  { path: "/holiday-packages", changeFrequency: "monthly", priority: 0.7 },
  { path: "/banquet", changeFrequency: "monthly", priority: 0.6 },
  { path: "/restaurant", changeFrequency: "monthly", priority: 0.6 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.6 },
  { path: "/gallery", changeFrequency: "monthly", priority: 0.5 },
  { path: "/awards", changeFrequency: "monthly", priority: 0.5 },
  { path: "/about", changeFrequency: "monthly", priority: 0.5 },
  { path: "/partner-with-us", changeFrequency: "monthly", priority: 0.5 },
  { path: "/careers", changeFrequency: "monthly", priority: 0.4 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.5 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.2 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PAGES.map((p) => ({
    url: absoluteUrl(p.path),
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  const hotelEntries: MetadataRoute.Sitemap = HOTELS.map((hotel) => ({
    url: absoluteUrl(`/hotels/${hotel.slug}`),
    lastModified: now,
    changeFrequency: "weekly",
    priority: hotel.featured ? 0.85 : 0.75,
    images: hotel.images.slice(0, 10).map((img) => absoluteUrl(img)),
  }));

  const destinationEntries: MetadataRoute.Sitemap = DESTINATIONS.map((dest) => ({
    url: absoluteUrl(`/destinations/${dest.slug}`),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
    images: [absoluteUrl(dest.image)],
  }));

  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
    images: [absoluteUrl(post.image)],
  }));

  return [...staticEntries, ...hotelEntries, ...destinationEntries, ...blogEntries];
}
