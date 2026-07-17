import type { Metadata } from "next";
import { MapPin, Clock, ArrowRight, Users, Sparkles, TrendingUp, Heart } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Careers | Join the LimeTree Family",
  description: "Build a rewarding career in premium hospitality at LimeTree Hotels. Explore open positions across hotels, apartments, restaurant, and corporate offices.",
};

const OPEN_ROLES = [
  { title: "Front Office Manager", dept: "Operations", location: "Gurgaon", type: "Full-time", exp: "5+ years" },
  { title: "Executive Chef", dept: "Food & Beverage", location: "Jaipur", type: "Full-time", exp: "8+ years" },
  { title: "Revenue Manager", dept: "Commercial", location: "Delhi / Remote", type: "Full-time", exp: "4+ years" },
  { title: "Guest Relations Executive", dept: "Guest Experience", location: "Mumbai", type: "Full-time", exp: "2+ years" },
  { title: "Digital Marketing Specialist", dept: "Marketing", location: "Delhi / Remote", type: "Full-time", exp: "3+ years" },
  { title: "Housekeeping Supervisor", dept: "Operations", location: "Hyderabad", type: "Full-time", exp: "3+ years" },
  { title: "Corporate Sales Manager", dept: "Sales", location: "Gurgaon", type: "Full-time", exp: "5+ years" },
  { title: "F&B Steward (Amaya Restaurant)", dept: "Food & Beverage", location: "Jaipur", type: "Full-time", exp: "1+ year" },
];

const PERKS = [
  { icon: Heart, title: "Health & Wellness", desc: "Comprehensive health insurance for you and your family, plus access to our in-hotel gym and wellness facilities." },
  { icon: TrendingUp, title: "Career Growth", desc: "Structured learning programs, internal promotions, and mentorship from industry veterans." },
  { icon: Users, title: "Vibrant Culture", desc: "A diverse, inclusive team that celebrates every culture, background, and perspective." },
  { icon: Sparkles, title: "Stay Benefits", desc: "Discounted stays at all LimeTree properties for you and your family — because we want you to experience what we build." },
];

const DEPT_COLORS: Record<string, string> = {
  Operations: "bg-blue-50 text-blue-700 border-blue-200",
  "Food & Beverage": "bg-orange-50 text-orange-700 border-orange-200",
  Commercial: "bg-purple-50 text-purple-700 border-purple-200",
  "Guest Experience": "bg-green-50 text-green-700 border-green-200",
  Marketing: "bg-pink-50 text-pink-700 border-pink-200",
  Sales: "bg-yellow-50 text-yellow-700 border-yellow-200",
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-cream pt-16">
      {/* Hero */}
      <section className="bg-dark py-24">
        <div className="container-luxury text-center max-w-3xl mx-auto">
          <div className="inline-block bg-primary-500/20 text-primary-400 text-sm font-medium px-4 py-2 rounded-full mb-6 border border-primary-500/30">
            We&apos;re Hiring
          </div>
          <h1 className="font-display font-bold text-white mb-5" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
            Grow with LimeTree
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            Join a team of passionate hospitality professionals dedicated to creating extraordinary experiences for every guest, every day.
          </p>
          <a href="#open-roles" className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-all hover:shadow-primary">
            View Open Roles <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* Perks */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <SectionHeader eyebrow="Why LimeTree" title="More Than a Job" description="We invest in people who invest in our guests." className="mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PERKS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-2xl border border-dark-100 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                  <Icon size={22} className="text-primary-600" />
                </div>
                <h3 className="font-semibold text-dark text-base mb-2">{title}</h3>
                <p className="text-dark-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section id="open-roles" className="section-padding bg-cream">
        <div className="container-luxury">
          <SectionHeader eyebrow="Open Positions" title={`${OPEN_ROLES.length} Roles Available`} align="left" className="mb-8" />
          <div className="flex flex-col gap-3">
            {OPEN_ROLES.map((role) => (
              <div key={role.title} className="group bg-white rounded-2xl border border-dark-100 px-6 py-5 hover:shadow-elevated hover:border-primary-200 transition-all duration-300 flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center flex-wrap gap-2 mb-2">
                    <h3 className="font-semibold text-dark text-base group-hover:text-primary-600 transition-colors">{role.title}</h3>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${DEPT_COLORS[role.dept] || "bg-dark-50 text-dark-600 border-dark-200"}`}>
                      {role.dept}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-dark-400 text-xs">
                    <span className="flex items-center gap-1"><MapPin size={11} /> {role.location}</span>
                    <span className="flex items-center gap-1"><Clock size={11} /> {role.type}</span>
                    <span>{role.exp} experience</span>
                  </div>
                </div>
                <a
                  href={`mailto:careers@limetreehotels.com?subject=Application: ${role.title} - ${role.location}`}
                  className="flex-shrink-0 flex items-center gap-1.5 px-5 py-2.5 border border-primary-500 text-primary-600 font-semibold text-sm rounded-xl hover:bg-primary-500 hover:text-white transition-all"
                >
                  Apply <ArrowRight size={13} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spontaneous Application */}
      <section className="section-padding bg-white">
        <div className="container-luxury max-w-3xl">
          <div className="bg-primary-50 rounded-2xl border border-primary-200 p-8 sm:p-10 text-center">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-dark mb-3">Don&apos;t See Your Role?</h2>
            <p className="text-dark-500 text-sm leading-relaxed mb-6 max-w-xl mx-auto">
              We&apos;re always on the lookout for exceptional talent. Send us your resume and a brief note about why you&apos;d be a great fit at LimeTree.
            </p>
            <a
              href="mailto:careers@limetreehotels.com?subject=Spontaneous Application - LimeTree Hotels"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-all hover:shadow-primary"
            >
              Send Us Your Resume <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
