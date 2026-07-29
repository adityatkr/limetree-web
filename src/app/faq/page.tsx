import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/utils";
import JsonLd from "@/components/seo/JsonLd";
import { pageMetadata, faqPageSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "FAQ | Frequently Asked Questions — Lime Tree Hotels",
  description: "Find answers to common questions about booking, cancellation, check-in, amenities, corporate rates, and more at Lime Tree Hotels.",
  path: "/faq",
});

const FAQ_SECTIONS = [
  {
    category: "Booking & Reservations",
    faqs: [
      { q: "How do I make a reservation at Lime Tree Hotels?", a: "You can book directly on our website, call our 24x7 helpline at +91 74790 00111, or message us on WhatsApp. Booking direct guarantees the best available rate." },
      { q: "Is it cheaper to book directly on your website?", a: "Yes! Booking direct always gives you our best rate, plus additional perks like free cancellation and exclusive offers not available on third-party platforms." },
      { q: "Can I modify or change my reservation?", a: "Yes, most bookings can be modified until 24 hours before check-in at no charge. Contact our reservations team directly by phone, WhatsApp, or email." },
      { q: "Do you offer group booking rates?", a: "Absolutely. For groups of 5+ rooms, contact our reservations team for special group rates, a dedicated coordinator, and customised packages." },
    ],
  },
  {
    category: "Cancellation & Refunds",
    faqs: [
      { q: "What is your cancellation policy?", a: "Our standard policy offers free cancellation up to 24 hours before check-in. Some promotional rates are non-refundable. The specific policy is clearly shown at time of booking." },
      { q: "How long does a refund take?", a: "Refunds are processed within 5–7 business days to your original payment method. For UPI/NEFT payments, it may take 3–5 business days." },
      { q: "What if I need to cancel due to an emergency?", a: "We handle all exceptional circumstances with empathy. Contact our team directly and we'll work with you to find the best solution." },
    ],
  },
  {
    category: "Check-in & Check-out",
    faqs: [
      { q: "What is the standard check-in and check-out time?", a: "Standard check-in is 2:00 PM and check-out is 12:00 PM (noon). Early check-in and late check-out are available subject to availability." },
      { q: "Do you offer early check-in?", a: "Early check-in can be arranged based on room availability. Corporate guests and loyalty members receive priority for early check-in requests." },
      { q: "What ID is required at check-in?", a: "One valid government-issued photo ID per guest is required: Aadhaar, Passport, Driving License, or Voter ID. For international guests, passport is mandatory." },
    ],
  },
  {
    category: "Amenities & Services",
    faqs: [
      { q: "Is WiFi complimentary?", a: "Yes, high-speed WiFi is complimentary for all guests across all our properties." },
      { q: "Is breakfast included in all room rates?", a: "Breakfast inclusion varies by room type and booking rate. Check the 'Breakfast Included' badge when booking, or call us to confirm." },
      { q: "Is parking available?", a: "Yes, complimentary parking is available at all our properties, including covered/basement parking at most locations." },
      { q: "Do you have power backup?", a: "Yes, 24x7 power backup is available at all Lime Tree properties — essential for uninterrupted work and comfort." },
    ],
  },
  {
    category: "Serviced Apartments",
    faqs: [
      { q: "What's the minimum stay for serviced apartments?", a: "Our serviced apartments are available for a minimum of 1 night, with significant savings starting from 7-night stays. Monthly packages offer the best value." },
      { q: "Is housekeeping provided in serviced apartments?", a: "Yes, weekly housekeeping is included. Daily housekeeping can be added for an additional charge. Laundry service is available on request." },
      { q: "Are the apartments fully furnished?", a: "Yes, all apartments come fully furnished — complete kitchen (refrigerator, microwave, cooktop, utensils), linens, bathroom supplies, and a dedicated workspace." },
      { q: "What sizes of serviced apartments do you have?", a: "We offer Studio, 1BHK, 2BHK, and 3BHK options. Our 2BHK on Golf Course Road and 3BHK in DLF Phase-5, Gurgaon, are particularly popular for long stays." },
    ],
  },
  {
    category: "Corporate & Medical Stays",
    faqs: [
      { q: "Do you offer GST invoices for corporate bookings?", a: "Yes, GST-compliant invoices are generated for every booking. Our corporate accounts receive monthly consolidated reports." },
      { q: "How do I set up a corporate account?", a: "Contact our corporate team via the Corporate Travel page or email reservation@limetreehotels.com. Account setup is typically completed within 48 hours." },
      { q: "Do you have rooms near Medanta Hospital?", a: "Yes, our Lime Tree property near Medanta, Gurugram is specifically designed for medical stays — wheelchair access, pharmacy assistance, and pick-up/drop service available. Use code HEALING15 for 15% off." },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-stone-50 pt-16">
      {/* Hero */}
      <section className="bg-stone-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bold text-white mb-4" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontFamily: "var(--font-display)" }}>
            Frequently Asked Questions
          </h1>
          <p className="text-white/60 text-lg">Everything you need to know about staying at Lime Tree Hotels.</p>
        </div>
      </section>

      <section className="py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Schema.org FAQ */}
          <JsonLd
            data={[
              faqPageSchema(FAQ_SECTIONS.flatMap((s) => s.faqs)),
              breadcrumbSchema([
                { name: "Home", path: "/" },
                { name: "FAQ", path: "/faq" },
              ]),
            ]}
          />

          <div className="flex flex-col gap-10">
            {FAQ_SECTIONS.map((section) => (
              <div key={section.category}>
                <h2 className="font-bold text-stone-900 text-xl mb-5 pb-3 border-b border-stone-200" style={{ fontFamily: "var(--font-display)" }}>
                  {section.category}
                </h2>
                <div className="flex flex-col gap-3">
                  {section.faqs.map(({ q, a }) => (
                    <details key={q} className="group bg-white rounded-xl border border-stone-100 overflow-hidden">
                      <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-stone-800 text-sm hover:text-primary-600 transition-colors list-none">
                        {q}
                        <span className="text-stone-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4">⌄</span>
                      </summary>
                      <div className="px-5 pb-4">
                        <p className="text-stone-500 text-sm leading-relaxed">{a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-12 p-8 bg-primary-50 rounded-2xl border border-primary-100 text-center">
            <h3 className="font-bold text-stone-900 text-2xl mb-2" style={{ fontFamily: "var(--font-display)" }}>Still Have Questions?</h3>
            <p className="text-stone-500 text-sm mb-6">Our team is available 24x7 to help you.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white font-bold text-sm rounded-xl hover:bg-primary-600 transition-colors">
                Contact Support <ArrowRight size={14} />
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-bold text-sm rounded-xl hover:bg-[#20b85a] transition-colors">
                <MessageCircle size={14} /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
