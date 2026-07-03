import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.limetreehotels.com"),
  title: {
    default: "LimeTree Hotels | Premium Hotels & Luxury Serviced Apartments Across India",
    template: "%s | LimeTree Hotels",
  },
  description:
    "Experience premium hospitality at LimeTree Hotels. Luxury hotels, serviced apartments, and corporate stays across Delhi, Gurgaon, Jaipur, Mumbai, Hyderabad & more. Book direct for best rates.",
  keywords: [
    "luxury hotels India",
    "premium hotels",
    "serviced apartments",
    "corporate stays",
    "hotel booking India",
    "hotels Delhi",
    "hotels Gurgaon",
    "hotels Jaipur",
    "business travel",
    "long stay accommodation",
    "LimeTree Hotels",
  ],
  authors: [{ name: "LimeTree Hotels" }],
  creator: "LimeTree Hotels",
  publisher: "LimeTree Hotels",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.limetreehotels.com",
    siteName: "LimeTree Hotels",
    title: "LimeTree Hotels | Premium Hotels & Luxury Serviced Apartments",
    description:
      "Stay Like Home. Every City. Every Time. Premium Hotels & Luxury Serviced Apartments Across India.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LimeTree Hotels",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LimeTree Hotels | Premium Hospitality Across India",
    description:
      "Premium Hotels & Luxury Serviced Apartments. 500+ Rooms. 15+ Cities. Book Now.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.limetreehotels.com",
  },
};

export const viewport: Viewport = {
  themeColor: "#65A745",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${plusJakarta.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream font-sans text-dark">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
