import Link from "next/link";
import { CheckCircle2, ArrowRight, Users, FileText, Clock, Zap } from "lucide-react";
import { CORPORATE_BENEFITS } from "@/lib/data";

const ICON_MAP: Record<string, React.ReactNode> = {
  "Dedicated Relationship Manager": <Users size={16} />,
  "GST-Compliant Invoicing": <FileText size={16} />,
  "Bill to Company": <FileText size={16} />,
  "Self-Booking Portal": <Zap size={16} />,
  "20% F&B Discount": <CheckCircle2 size={16} />,
  "Flexible Cancellation": <Clock size={16} />,
  "Early Check-In": <Clock size={16} />,
  "Airport Transfers": <ArrowRight size={16} />,
};

export default function CorporateSection() {
  return (
    <section className="py-20 bg-stone-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <p className="flex items-center gap-2 text-primary-400 text-xs font-semibold uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
              Corporate Travel
            </p>
            <h2 className="font-bold text-white text-3xl sm:text-4xl mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Your Business Travel,<br />Handled.
            </h2>
            <p className="text-white/55 text-sm leading-relaxed mb-8 max-w-md">
              30+ properties across 7 cities, dedicated relationship managers, GST billing, self-booking portals — everything your corporate travel desk needs, built in.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {CORPORATE_BENEFITS.slice(0, 6).map((b) => {
                const isDiscount = b.title === "20% F&B Discount";
                return (
                  <div key={b.title} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/8">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        isDiscount ? "bg-accent-500/20 text-accent-400" : "bg-primary-500/20 text-primary-400"
                      }`}
                    >
                      {ICON_MAP[b.title] || <CheckCircle2 size={14} />}
                    </div>
                    <div>
                      <div className="text-white text-xs font-semibold mb-0.5">{b.title}</div>
                      <div className="text-white/40 text-[10px] leading-relaxed">{b.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/corporate" className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-all text-sm">
                Setup Corporate Account <ArrowRight size={14} />
              </Link>
              <a href="mailto:reservation@limetreehotels.com" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all text-sm">
                Email Our Team
              </a>
            </div>
          </div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "30+", label: "Properties", sub: "Across 7 cities" },
              { value: "20%", label: "F&B Discount", sub: "For all corporate guests", accent: true },
              { value: "GST", label: "Billing", sub: "Auto-generated invoices" },
              { value: "24x7", label: "Support", sub: "Dedicated RM always on" },
            ].map(({ value, label, sub, accent }) => (
              <div key={label} className="p-6 bg-white/5 border border-white/8 rounded-2xl hover:bg-white/8 transition-colors">
                <div
                  className={`font-bold text-3xl mb-1 ${accent ? "text-accent-400" : "text-primary-400"}`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {value}
                </div>
                <div className="text-white font-semibold text-sm">{label}</div>
                <div className="text-white/35 text-xs mt-0.5">{sub}</div>
              </div>
            ))}
            <div className="col-span-2 p-5 bg-primary-500/15 border border-primary-500/30 rounded-2xl">
              <p className="text-primary-300 text-xs font-semibold uppercase tracking-wider mb-1">Trusted By</p>
              <p className="text-white/70 text-sm">Fortune 500 companies, MNCs, startups, and government delegations across Gurgaon, Delhi & NCR rely on Lime Tree for corporate travel.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
