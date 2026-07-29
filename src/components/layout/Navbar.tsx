"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown, MessageCircle } from "lucide-react";
import { PHONE_NUMBER, WHATSAPP_URL } from "@/lib/utils";

const NAV_ITEMS = [
  {
    label: "Properties",
    href: "/hotels",
    children: [
      { label: "All Hotels", href: "/hotels", desc: "Browse all properties" },
      { label: "Serviced Apartments", href: "/serviced-apartments", desc: "Studio to 3BHK options" },
      { label: "Goa Villa", href: "/hotels/lime-tree-4bhk-villa-goa", desc: "4BHK with private pool" },
      { label: "Medical Stay", href: "/medical-tourism", desc: "Near top hospitals" },
    ],
  },
  {
    label: "Destinations",
    href: "/destinations",
    children: [
      { label: "Gurgaon", href: "/destinations/gurgaon", desc: "15+ properties" },
      { label: "Delhi", href: "/destinations/delhi", desc: "South Delhi stays" },
      { label: "Noida", href: "/destinations/noida", desc: "Tech corridor" },
      { label: "Greater Noida", href: "/destinations/greater-noida", desc: "Near India Expo Mart" },
      { label: "Jaipur", href: "/destinations/jaipur", desc: "Hotel & Banquet" },
      { label: "Goa", href: "/destinations/goa", desc: "Luxury villa" },
      { label: "Vrindavan", href: "/destinations/vrindavan", desc: "Spiritual stays" },
    ],
  },
  { label: "Offers", href: "/offers" },
  { label: "Corporate", href: "/corporate" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  {
    label: "More",
    href: "#",
    children: [
      { label: "Holiday Packages", href: "/holiday-packages", desc: "Manali, Rishikesh, Golden Triangle" },
      { label: "Medical Tourism", href: "/medical-tourism", desc: "Near Medanta & Artemis" },
      { label: "Gallery", href: "/gallery", desc: "Photo gallery" },
      { label: "Awards", href: "/awards", desc: "Our recognitions" },
      { label: "Partner With Us", href: "/partner-with-us", desc: "Property owners" },
      { label: "Contact Us", href: "/contact", desc: "Get in touch" },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setActiveDropdown(null); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const solid = scrolled || !isHome;
  const navBg = solid ? "bg-white/96 backdrop-blur-md border-b border-stone-100 shadow-sm" : "bg-transparent";
  const linkColor = solid ? "text-stone-600 hover:text-primary-600" : "text-white/90 hover:text-white";
  const phoneColor = solid ? "text-stone-500" : "text-white/70";

  const openDrop = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(label);
  };
  const closeDrop = () => { dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 120); };
  const keepDrop = () => { if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current); };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="https://assets.simplotel.com/simplotel/image/upload/x_0,y_0,w_643,h_388,r_0,c_crop,q_80,dpr_1,f_auto,fl_progressive/w_355,h_200,f_auto,c_fit/lime-tree-hotels-service-apartment-private-limited/Lime_Tree_Hotels"
                alt="Lime Tree Hotels"
                width={120}
                height={68}
                className={`h-10 w-auto object-contain transition-all duration-300 ${solid ? "brightness-100" : "brightness-0 invert"}`}
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="relative" onMouseEnter={() => item.children && openDrop(item.label)} onMouseLeave={closeDrop}>
                  <Link href={item.href} className={`flex items-center gap-1 px-3 py-2 rounded-lg text-[13px] font-medium transition-all ${linkColor}`}>
                    {item.label}
                    {item.children && <ChevronDown size={12} className={`transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""}`} />}
                  </Link>
                  {item.children && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1.5 bg-white rounded-2xl shadow-xl border border-stone-100 py-2 min-w-[200px] z-50" onMouseEnter={keepDrop} onMouseLeave={closeDrop}>
                      {item.children.map((child) => (
                        <Link key={child.label} href={child.href} className="flex flex-col px-4 py-2.5 hover:bg-stone-50 transition-colors group">
                          <span className="text-[13px] font-medium text-stone-800 group-hover:text-primary-600 transition-colors">{child.label}</span>
                          {child.desc && <span className="text-[11px] text-stone-400 mt-0.5">{child.desc}</span>}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a href={`tel:${PHONE_NUMBER}`} className={`flex items-center gap-1.5 text-[12px] font-medium transition-colors ${phoneColor} hover:text-primary-600`}>
                <Phone size={12} />{PHONE_NUMBER}
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3.5 py-2 bg-[#25D366] text-white text-[13px] font-semibold rounded-xl hover:bg-[#20b85a] transition-all">
                <MessageCircle size={13} /> WhatsApp
              </a>
              <Link href="/hotels" className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-[13px] font-semibold rounded-xl transition-all shadow-sm">
                Book Now
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className={`lg:hidden p-2 rounded-lg ${solid ? "text-stone-700 hover:bg-stone-100" : "text-white hover:bg-white/10"}`} aria-label="Toggle menu">
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 right-0 h-full w-[300px] bg-white shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between px-4 py-3.5 border-b border-stone-100">
              <Image
                src="https://assets.simplotel.com/simplotel/image/upload/x_0,y_0,w_643,h_388,r_0,c_crop,q_80,dpr_1,f_auto,fl_progressive/w_355,h_200,f_auto,c_fit/lime-tree-hotels-service-apartment-private-limited/Lime_Tree_Hotels"
                alt="Lime Tree Hotels"
                width={100}
                height={57}
                className="h-8 w-auto object-contain"
              />
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="p-1.5 rounded-lg hover:bg-stone-100"><X size={18} className="text-stone-600" /></button>
            </div>
            <nav className="py-2">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)} className="w-full flex items-center justify-between px-4 py-3 text-[13px] font-semibold text-stone-800 hover:bg-stone-50">
                        {item.label}
                        <ChevronDown size={13} className={`transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                      </button>
                      {mobileExpanded === item.label && (
                        <div className="bg-stone-50">
                          {item.children.map((child) => (
                            <Link key={child.label} href={child.href} className="block px-6 py-2.5 text-[13px] text-stone-600 hover:text-primary-600">{child.label}</Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link href={item.href} className="block px-4 py-3 text-[13px] font-semibold text-stone-800 hover:bg-stone-50">{item.label}</Link>
                  )}
                </div>
              ))}
            </nav>
            <div className="border-t border-stone-100 p-4 space-y-2.5">
              <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2 text-[13px] text-stone-500"><Phone size={13} className="text-primary-500" />{PHONE_NUMBER}</a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] text-white text-[13px] font-bold rounded-xl">
                <MessageCircle size={15} /> Chat on WhatsApp
              </a>
              <Link href="/hotels" className="flex items-center justify-center w-full py-3 bg-primary-500 text-white text-[13px] font-bold rounded-xl">Book Now</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
