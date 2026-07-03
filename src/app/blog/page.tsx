import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight, Tag } from "lucide-react";
import { BLOG_POSTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog | Travel Guides, Corporate Travel & Hospitality Stories — Lime Tree Hotels",
  description: "Explore Lime Tree's blog for serviced apartment guides, business travel tips, hotel-near-hospital resources, and living in Gurgaon insights.",
};

const CATEGORIES = ["All", "Destination Guide", "Business Travel", "Travel Tips", "Long Stay"];

export default function BlogPage() {
  const featured = BLOG_POSTS.find((p) => p.featured);
  const rest = BLOG_POSTS.filter((p) => !p.featured || p.id !== featured?.id);

  return (
    <div className="min-h-screen bg-stone-50 pt-16">
      {/* Hero */}
      <section className="bg-stone-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bold text-white mb-4" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontFamily: "var(--font-display)" }}>
            Stories Worth Telling
          </h1>
          <p className="text-white/60 text-lg">Travel guides, destination deep-dives, and hospitality insights — from our team to yours.</p>
        </div>
      </section>

      {/* Category Filter */}
      <div className="bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-3 overflow-x-auto">
          {CATEGORIES.map((cat, i) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
                i === 0
                  ? "bg-primary-500 text-white"
                  : "text-stone-500 hover:bg-stone-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          {featured && (
            <div className="mb-12">
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden border border-stone-100 hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                  <Image src={featured.image} alt={featured.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="50vw" priority />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">Featured</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-xs text-primary-600 font-semibold mb-3">
                    <Tag size={12} />
                    {featured.category}
                  </div>
                  <h2 className="font-bold text-stone-900 text-2xl sm:text-3xl mb-4 group-hover:text-primary-600 transition-colors" style={{ fontFamily: "var(--font-display)" }}>
                    {featured.title}
                  </h2>
                  <p className="text-stone-500 leading-relaxed mb-5">{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-stone-400 text-sm">
                      <Clock size={13} />
                      {featured.readTime} min read · {new Date(featured.publishedAt).toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
                    </div>
                    <span className="text-primary-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Blog Grid */}
          <div className="mb-8">
            <p className="text-primary-600 text-xs font-semibold uppercase tracking-widest mb-2">Latest Articles</p>
            <h2 className="font-bold text-stone-900 text-2xl" style={{ fontFamily: "var(--font-display)" }}>More from the Blog</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...rest, ...BLOG_POSTS, ...BLOG_POSTS].slice(0, 6).map((post, i) => (
              <Link
                key={`${post.id}-${i}`}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-stone-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="33vw" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-primary-600 font-semibold mb-2">
                    <Tag size={11} />
                    {post.category}
                  </div>
                  <h3 className="font-semibold text-stone-900 text-base mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-stone-400 text-xs line-clamp-2 mb-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-stone-400">
                    <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime} min read</span>
                    <span>{new Date(post.publishedAt).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
