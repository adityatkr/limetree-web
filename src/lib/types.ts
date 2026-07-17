export type PropertyType = "hotel" | "serviced-apartment" | "villa";
export type RoomType = "standard" | "deluxe" | "suite" | "premium" | "studio" | "1bhk" | "2bhk" | "3bhk" | "4bhk";
export type CancellationPolicy = "free" | "partial" | "non-refundable";
export type StayType = "short" | "long" | "corporate";

export interface Location {
  city: string;
  state: string;
  address: string;
  area: string;
  pincode: string;
  lat?: number;
  lng?: number;
  nearbyAttractions?: string[];
}

export interface Room {
  id: string;
  type: RoomType;
  name: string;
  description: string;
  images: string[];
  size: number;
  maxOccupancy: number;
  bedType: string;
  pricePerNight: number;
  originalPrice?: number;
  amenities: string[];
  available: boolean;
  cancellationPolicy: CancellationPolicy;
  breakfastIncluded: boolean;
}

export interface Review {
  id: string;
  guestName: string;
  guestAvatar?: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  stayType: StayType;
  verified: boolean;
  helpful: number;
  platform?: "google" | "tripadvisor" | "booking" | "direct";
}

export interface Hotel {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  propertyType: PropertyType;
  location: Location;
  images: string[];
  heroImage: string;
  rating: number;
  reviewCount: number;
  starCategory: 3 | 4 | 5;
  pricePerNight: number;
  originalPrice?: number;
  rooms: Room[];
  amenities: string[];
  highlights: string[];
  policies: {
    checkIn: string;
    checkOut: string;
    cancellation: string;
    pets: boolean;
    smoking: boolean;
    children: boolean;
  };
  tags: string[];
  featured: boolean;
  newProperty?: boolean;
  soldOut?: boolean;
}

export interface Destination {
  id: string;
  city: string;
  state: string;
  slug: string;
  description: string;
  image: string;
  propertyCount: number;
  startingPrice: number;
  highlights: string[];
  popularFor: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  authorAvatar?: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: number;
  featured: boolean;
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  image: string;
  discount: number;
  discountType: "percentage" | "flat";
  code: string;
  validFrom: string;
  validTo: string;
  terms: string[];
  applicable: string[];
  featured: boolean;
}

