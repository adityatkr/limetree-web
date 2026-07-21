import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { WHATSAPP_URL, PHONE_NUMBER, EMAIL, HQ_ADDRESS } from "@/lib/utils";

const SOCIAL = [
  { label: "Facebook", href: "https://facebook.com/limetreehotels", svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
  { label: "Instagram", href: "https://instagram.com/limetreehotels", svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
  { label: "LinkedIn", href: "https://linkedin.com/company/limetreehotels", svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  { label: "Twitter/X", href: "https://twitter.com/limetreehotels", svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
  { label: "YouTube", href: "https://youtube.com/@limetreehotels", svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg> },
  { label: "WhatsApp", href: WHATSAPP_URL, svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg> },
];

const FOOTER_COLS = [
  {
    title: "Properties",
    links: [
      { label: "All Hotels", href: "/hotels" },
      { label: "Serviced Apartments", href: "/serviced-apartments" },
      { label: "Goa Villa", href: "/hotels/lime-tree-4bhk-villa-goa" },
      { label: "Corporate Bookings", href: "/corporate" },
      { label: "Medical Stay", href: "/medical-tourism" },
    ],
  },
  {
    title: "Destinations",
    links: [
      { label: "Gurgaon", href: "/destinations/gurgaon" },
      { label: "Delhi", href: "/destinations/delhi" },
      { label: "Noida", href: "/destinations/noida" },
      { label: "Greater Noida", href: "/destinations/greater-noida" },
      { label: "Jaipur", href: "/destinations/jaipur" },
      { label: "Goa", href: "/destinations/goa" },
      { label: "Vrindavan", href: "/destinations/vrindavan" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Offers & Deals", href: "/offers" },
      { label: "Holiday Packages", href: "/holiday-packages" },
      { label: "Gallery", href: "/gallery" },
      { label: "Blog", href: "/blog" },
      { label: "Awards", href: "/awards" },
      { label: "Partner With Us", href: "/partner-with-us" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Careers", href: "/careers" },
      { label: "FAQ", href: "/faq" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white">
      {/* Newsletter */}
      <div className="bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-bold text-xl text-white">Stay Updated. Stay Rewarded.</h3>
              <p className="text-white/75 text-sm mt-1">Exclusive offers, travel guides, and early access to deals — straight to your inbox.</p>
            </div>
            <form className="flex gap-2 w-full md:w-auto">
              <input type="email" placeholder="Your email address" className="flex-1 md:w-64 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-xl text-sm focus:outline-none focus:bg-white/20 transition-all" />
              <button type="submit" className="px-5 py-3 bg-white text-primary-700 font-bold text-sm rounded-xl hover:bg-stone-100 transition-colors flex-shrink-0">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <Image
                src="https://assets.simplotel.com/simplotel/image/upload/x_0,y_0,w_643,h_388,r_0,c_crop,q_80,dpr_1,f_auto,fl_progressive/w_355,h_200,f_auto,c_fit/lime-tree-hotels-service-apartment-private-limited/Lime_Tree_Hotels"
                alt="Lime Tree Hotels"
                width={130}
                height={74}
                className="h-12 w-auto object-contain brightness-0 invert opacity-90"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5 max-w-xs">
              Established in 2011, Lime Tree Hotels offers premium hotels, serviced apartments, villas, and banquet halls across 7 Indian cities.
            </p>
            <div className="space-y-2.5 mb-6">
              <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2.5 text-white/60 text-sm hover:text-white transition-colors">
                <Phone size={13} className="text-primary-400 flex-shrink-0" />{PHONE_NUMBER}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2.5 text-white/60 text-sm hover:text-white transition-colors">
                <Mail size={13} className="text-primary-400 flex-shrink-0" />{EMAIL}
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-white/60 text-sm hover:text-white transition-colors">
                <MessageCircle size={13} className="text-primary-400 flex-shrink-0" />+91 74790 00111
              </a>
              <div className="flex items-start gap-2.5 text-white/50 text-xs">
                <MapPin size={13} className="text-primary-400 flex-shrink-0 mt-0.5" />
                <span>{HQ_ADDRESS}</span>
              </div>
            </div>
            <div className="flex gap-2">
              {SOCIAL.map(({ label, href, svg }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-8 h-8 bg-white/8 rounded-lg flex items-center justify-center text-white/40 hover:bg-primary-500 hover:text-white transition-all duration-200">
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLS.map(({ title, links }) => (
            <div key={title}>
              <h4 className="font-semibold text-white text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="text-white/50 text-sm hover:text-white transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">© {new Date().getFullYear()} Lime Tree Hotels Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {[{ label: "Privacy", href: "/privacy" }, { label: "Terms", href: "/terms" }, { label: "Sitemap", href: "/sitemap.xml" }].map(({ label, href }) => (
              <Link key={label} href={href} className="text-white/30 hover:text-white/60 text-xs transition-colors">{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
