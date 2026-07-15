import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/utils";

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  faqs: FAQItem[];
  className?: string;
}

export default function FAQSection({
  eyebrow = "FAQs",
  title,
  subtitle,
  faqs,
  className = "py-20 bg-stone-50",
}: FAQSectionProps) {
  return (
    <section className={className}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />

        <div className="text-center mb-12">
          <p className="text-primary-600 text-xs font-semibold uppercase tracking-widest mb-2">{eyebrow}</p>
          <h2 className="font-bold text-stone-900 text-3xl sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
            {title}
          </h2>
          {subtitle && <p className="text-stone-500 text-sm mt-3 max-w-xl mx-auto">{subtitle}</p>}
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map(({ q, a }) => (
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

        <div className="mt-10 p-8 bg-primary-50 rounded-2xl border border-primary-100 text-center">
          <h3 className="font-bold text-stone-900 text-xl mb-2" style={{ fontFamily: "var(--font-display)" }}>
            Still Have Questions?
          </h3>
          <p className="text-stone-500 text-sm mb-6">Our team is available 24x7 to help you.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/faq" className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white font-bold text-sm rounded-xl hover:bg-primary-600 transition-colors">
              View All FAQs <ArrowRight size={14} />
            </Link>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-bold text-sm rounded-xl hover:bg-[#20b85a] transition-colors">
              <MessageCircle size={14} /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
