import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Tag, Calendar } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | LimeTree Blog`,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, images: [post.image] },
  };
}

const SAMPLE_CONTENT: Record<string, string[]> = {
  "best-places-to-visit-jaipur": [
    "Jaipur, the capital of Rajasthan, is a city that wears its history with pride. Founded in 1727 by Maharaja Jai Singh II, the Pink City is home to some of India's most breathtaking monuments, vibrant bazaars, and rich cultural traditions.",
    "The Amer Fort stands majestically on the hills overlooking Maota Lake. Built in 1592, this UNESCO World Heritage site is a stunning blend of Hindu and Mughal architectural styles. The elephant ride up to the fort is an iconic experience, though you can also take a jeep if you prefer.",
    "The Hawa Mahal, or Palace of Winds, is perhaps Jaipur's most photographed landmark. Built in 1799 by Maharaja Sawai Pratap Singh, this five-storey palace facade features 953 small windows designed to allow royal ladies to observe street festivals while remaining unseen.",
    "The City Palace complex in the heart of Jaipur is an architectural marvel that chronicles the history of the Jaipur royal family. The palace museum houses an impressive collection of royal costumes, weapons, and manuscripts.",
    "Jantar Mantar, built between 1727 and 1733, is one of the five observatories built by Maharaja Jai Singh II. It houses the world's largest stone sundial and is a UNESCO World Heritage site.",
    "The Nahargarh Fort offers the most spectacular views of the Pink City, especially at sunset. Built as a defense fort in 1734, it now houses a wax museum and a popular restaurant with panoramic city views.",
    "No visit to Jaipur is complete without exploring the bustling bazaars of Johari Bazaar for jewelry, Bapu Bazaar for textiles, and Nehru Bazaar for traditional Jaipur footwear (mojaris). The block-printed fabrics and blue pottery make for perfect souvenirs.",
  ],
  "corporate-travel-tips-india": [
    "Business travel in India can be both exhilarating and exhausting. With major business hubs spread across the country — from the corporate corridors of Gurgaon to the tech parks of Hyderabad — frequent travelers need strategies to maximize productivity without burning out.",
    "Book directly with hotel brands. While aggregator sites offer convenience, booking directly with hotel chains like LimeTree often provides better rates, guaranteed room upgrades, and flexibility for last-minute cancellations — crucial when client meetings run long.",
    "Pack light and smart. A carry-on that fits everything prevents the frustration of delayed baggage and saves time at arrivals. Invest in wrinkle-free fabrics and a quality toiletries kit that stays in your bag between trips.",
    "Leverage corporate accounts. Most premium hotels offer negotiated corporate rates that are 20-30% below rack rates. Set up accounts for your company to get consistent pricing, GST-compliant billing, and dedicated account managers.",
    "Plan for connectivity. India's business districts have excellent 4G/5G coverage, but always confirm high-speed WiFi at your hotel before booking. Look for at least 25 Mbps guaranteed speeds for video conferences.",
    "Use your hotel's business center wisely. Premium business hotels like LimeTree offer fully-equipped business centers with printing, scanning, and private meeting rooms that can save you from carrying heavy equipment.",
    "Build loyalty. Consistently staying with one hotel brand earns points, upgrades, and eventually elite status — which unlocks benefits like late checkout and guaranteed room categories that make road trips significantly more comfortable.",
  ],
  "serviced-apartments-vs-hotels": [
    "The age-old question for long-stay travelers: should you book a hotel room or a serviced apartment? Both have their merits, but the right choice depends entirely on your specific needs, budget, and how you prefer to live while away from home.",
    "Serviced apartments win on space. A typical one-bedroom serviced apartment offers 45-65 sqm of living space versus a hotel room's 25-35 sqm. That extra space includes a separate living room, a full kitchen, and often a dedicated work-from-home setup.",
    "Hotels win on services. If you need daily housekeeping, room service at 2 AM, a concierge arranging last-minute theatre tickets, or a spa appointment, hotels deliver these with unmatched consistency.",
    "Cost comparison over time tells the real story. For stays under a week, hotels often win on cost and convenience. But for 2+ week stays, serviced apartments typically cost 30-40% less and include utilities, saving you significant money.",
    "The kitchen is the game-changer. Being able to cook your own breakfast, keep fresh fruit and yogurt in the fridge, or make a cup of tea at midnight without ordering room service is a quality-of-life upgrade that long-stay guests consistently rate as their top benefit.",
    "Both options have evolved. Modern serviced apartments like those at LimeTree Residences Gurgaon combine apartment privacy with hotel-grade amenities: a gym, pool, reception, and optional housekeeping. This hybrid model is increasingly popular with corporate travelers on extended projects.",
    "Our recommendation: for stays under 5 nights, book a hotel. For 7+ nights, seriously consider a serviced apartment. For 30+ nights, a serviced apartment is almost always the better choice — both financially and for your wellbeing.",
  ],
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = SAMPLE_CONTENT[slug] || [post.excerpt];
  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <article className="min-h-screen bg-cream pt-16">
      {/* Hero */}
      <div className="relative h-[55vh] min-h-80 bg-dark overflow-hidden">
        <Image src={post.image} alt={post.title} fill className="object-cover opacity-70" priority sizes="100vw" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-luxury pb-10 max-w-4xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors">
              <ArrowLeft size={14} /> Back to Blog
            </Link>
            <div className="flex items-center gap-2 text-primary-400 text-sm font-medium mb-3">
              <Tag size={12} /> {post.category}
            </div>
            <h1 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}>
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-white/60 text-sm">
              <span className="flex items-center gap-1.5"><Calendar size={13} /> {new Date(post.publishedAt).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
              <span className="flex items-center gap-1.5"><Clock size={13} /> {post.readTime} min read</span>
              <span>By {post.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="section-padding bg-white">
        <div className="container-luxury max-w-3xl">
          <div className="prose prose-lg max-w-none">
            {content.map((para, i) => (
              <p key={i} className="text-dark-600 leading-relaxed text-base mb-6">
                {para}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-10 pt-8 border-t border-dark-100 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1.5 bg-primary-50 text-primary-700 text-xs font-medium rounded-full border border-primary-200">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="section-padding bg-cream">
          <div className="container-luxury max-w-4xl">
            <h2 className="font-display font-bold text-2xl text-dark mb-8">More Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((rPost) => (
                <Link key={rPost.id} href={`/blog/${rPost.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-dark-100 hover:shadow-elevated hover:-translate-y-1 transition-all duration-300">
                  <div className="relative aspect-video img-zoom">
                    <Image src={rPost.image} alt={rPost.title} fill className="object-cover" sizes="400px" />
                  </div>
                  <div className="p-5">
                    <div className="text-xs text-primary-600 font-medium mb-2">{rPost.category}</div>
                    <h3 className="font-semibold text-dark text-sm group-hover:text-primary-600 transition-colors line-clamp-2">{rPost.title}</h3>
                    <div className="text-xs text-dark-400 mt-2 flex items-center gap-1"><Clock size={11} /> {rPost.readTime} min read</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
