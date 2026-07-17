import type { Metadata } from "next";
import { Phone, Mail, MessageCircle, MapPin, ArrowRight } from "lucide-react";
import { PHONE_NUMBER, EMAIL, WHATSAPP_URL, HQ_ADDRESS } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Us | Lime Tree Hotels",
  description: "Contact Lime Tree Hotels for reservations, corporate inquiries, medical stay assistance, banquet bookings, or general support. Available 24x7.",
};

const PROPERTY_CONTACTS = [
  { name: "Head Office / Reservations", location: "Gurgaon", phone: "+91 74790 00111", email: "reservation@limetreehotels.com" },
  { name: "Lime Tree, IFFCO Chowk", location: "Gurgaon", phone: "+91 96670 79001", email: "reservation@limetreehotels.com" },
  { name: "Lime Tree, Greater Kailash-2", location: "Delhi", phone: "+91 96670 79001", email: "reservation@limetreehotels.com" },
  { name: "Y Stay by Lime Tree", location: "Greater Noida", phone: "+91 97110 87550", email: "reservation@limetreehotels.com" },
  { name: "Lime Tree Hotel, Noida Sector 50", location: "Noida", phone: "+91 12032 02018", email: "reservation@limetreehotels.com" },
];

const ENQUIRY_TYPES = [
  "Hotel Reservation",
  "Serviced Apartment Booking",
  "Corporate Travel Setup",
  "Banquet & Events",
  "Medical Tourism Package",
  "Holiday Package",
  "Partner With Us",
  "Feedback / Complaint",
  "Other",
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-stone-50 pt-16">
      {/* Hero */}
      <section className="bg-stone-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
          <h1 className="font-bold text-white mb-3" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontFamily: "var(--font-display)" }}>
            We&apos;re Here for You.
          </h1>
          <p className="text-white/60 text-lg">24x7 guest support, corporate inquiries, event bookings, medical stay assistance — reach us any way you prefer.</p>
          </div>
        </div>
      </section>

      {/* Quick contact strip */}
      <div className="bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
            {[
              { icon: Phone, label: "Call Us (24x7)", value: PHONE_NUMBER, href: `tel:${PHONE_NUMBER}` },
              { icon: Mail, label: "Email Us", value: EMAIL, href: `mailto:${EMAIL}` },
              { icon: MessageCircle, label: "WhatsApp", value: "Quick replies, 24x7", href: WHATSAPP_URL },
            ].map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-center gap-4 px-6 py-5 hover:bg-white/10 transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-white/60 text-xs font-medium">{label}</div>
                  <div className="text-white font-semibold text-sm">{value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Form + Locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="font-bold text-stone-900 text-2xl mb-6" style={{ fontFamily: "var(--font-display)" }}>Send Us a Message</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {[{ label: "First Name", placeholder: "First name" }, { label: "Last Name", placeholder: "Last name" }].map(({ label, placeholder }) => (
                    <div key={label}>
                      <label className="block text-xs font-semibold text-stone-600 mb-1.5">{label}</label>
                      <input placeholder={placeholder} className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all" />
                    </div>
                  ))}
                </div>
                {[
                  { label: "Email", placeholder: "your@email.com", type: "email" },
                  { label: "Phone", placeholder: "+91 XXXXX XXXXX", type: "tel" },
                ].map(({ label, placeholder, type }) => (
                  <div key={label}>
                    <label className="block text-xs font-semibold text-stone-600 mb-1.5">{label}</label>
                    <input type={type} placeholder={placeholder} className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all" />
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-semibold text-stone-600 mb-1.5">Enquiry Type</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all">
                    {ENQUIRY_TYPES.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-600 mb-1.5">Message</label>
                  <textarea rows={4} placeholder="How can we help you?" className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all resize-none" />
                </div>
                <button type="submit" className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-xl transition-all text-sm">
                  Send Message <ArrowRight size={14} />
                </button>
              </form>
            </div>

            {/* Property contacts */}
            <div>
              <h2 className="font-bold text-stone-900 text-2xl mb-6" style={{ fontFamily: "var(--font-display)" }}>Our Locations</h2>
              <div className="space-y-3 mb-6">
                {PROPERTY_CONTACTS.map(({ name, location, phone }) => (
                  <div key={name} className="flex items-center justify-between p-4 rounded-xl border border-stone-100 hover:border-primary-200 transition-colors">
                    <div>
                      <div className="font-semibold text-stone-900 text-sm">{name}</div>
                      <div className="flex items-center gap-1 text-stone-400 text-xs mt-0.5"><MapPin size={10} />{location}</div>
                    </div>
                    <a href={`tel:${phone}`} className="text-primary-600 font-medium text-xs hover:text-primary-700 transition-colors">{phone}</a>
                  </div>
                ))}
              </div>

              {/* HQ address */}
              <div className="p-5 bg-stone-50 rounded-xl border border-stone-100">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-primary-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-stone-900 text-sm mb-1">Head Office</div>
                    <div className="text-stone-500 text-xs leading-relaxed">{HQ_ADDRESS}</div>
                  </div>
                </div>
              </div>

              <div className="mt-5 p-5 bg-primary-50 rounded-xl border border-primary-100">
                <div className="font-semibold text-stone-900 text-sm mb-1">24x7 WhatsApp Support</div>
                <p className="text-stone-500 text-xs mb-3">Quick replies day and night. Message us for reservations, modifications, or any assistance.</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white text-xs font-bold rounded-xl hover:bg-[#20b85a] transition-colors">
                  <MessageCircle size={13} /> Open WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
