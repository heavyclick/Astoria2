import type { Metadata } from "next";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Blog — Nigerian Menswear Guide | Astoria",
  description: "Guides on Nigerian menswear — agbada vs senator suits, wedding attire, date night outfits, business dress, and how to commission bespoke native wear.",
  alternates: { canonical: "https://astoriagallery.online/blog/" },
};

const posts = [
  {
    slug: "best-mens-native-styles-nigerian-wedding",
    title: "Best Men's Native Styles for Nigerian Weddings in 2025",
    excerpt: "The most important outfit at a Nigerian wedding is the one the groom remembers at 60. A complete guide to every style option — ranked, compared, and explained.",
    keyword: "men's native wear for Nigerian wedding",
    readTime: "8 min read",
  },
  {
    slug: "date-night-outfit-men-nigeria",
    title: "Date Night Outfit for Men in Nigeria — What to Wear and Why",
    excerpt: "The man who overdresses for a date in Abuja and the man who underdresses are both wrong in the same way. The right answer, broken down by venue.",
    keyword: "date night outfit for men Nigeria",
    readTime: "6 min read",
  },
  {
    slug: "agbada-vs-senator-suit",
    title: "Agbada vs Senator Suit — How to Choose and When to Wear Each",
    excerpt: "Two garments, two completely different social registers. Choosing wrong doesn't ruin the occasion — but choosing right elevates it.",
    keyword: "agbada vs senator suit Nigeria",
    readTime: "7 min read",
  },
  {
    slug: "how-to-commission-native-wear-online-nigeria",
    title: "How to Commission Bespoke Native Wear Online in Nigeria — A Complete Guide",
    excerpt: "Most men avoid online commissions because they've been burned once. Here's how to do it correctly — measurements, communication, fabric, and payment.",
    keyword: "commission native wear online Nigeria",
    readTime: "6 min read",
  },
  {
    slug: "outfit-nigerian-business-meeting",
    title: "What to Wear to a Nigerian Business Meeting — The 2025 Executive Guide",
    excerpt: "The Nigerian boardroom has its own dress code. It's not written anywhere but everyone in the room knows it.",
    keyword: "outfit for Nigerian business meeting",
    readTime: "7 min read",
  },
  {
    slug: "how-long-bespoke-native-wear-nigeria",
    title: "How Long Does Bespoke Native Wear Take in Nigeria? Timelines Explained",
    excerpt: "Standard bespoke native wear from Astoria takes 7–14 days from measurement confirmation. Here's the full timeline, rush options, and how to plan around an event date.",
    keyword: "how long bespoke native wear Nigeria",
    readTime: "5 min read",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Astoria Blog — Nigerian Menswear Guide",
  url: "https://astoriagallery.online/blog/",
  publisher: { "@type": "Organization", name: "Astoria", url: "https://astoriagallery.online/" },
};

export default function BlogIndex() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="page-hero">
        <p className="page-hero-eyebrow">The Astoria Journal</p>
        <h1>Nigerian Menswear — <em>The Guide</em></h1>
        <p className="page-hero-sub">Guides on agbada, senator suits, wedding attire, date night, and everything in between. Written for the man who wants to get it right.</p>
      </div>

      <FadeUp>
        <div style={{ padding: "4rem var(--pad)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "2px" }}>
            {posts.map((post, i) => (
              <Link key={post.slug} href={`/blog/${post.slug}/`} style={{ textDecoration: "none", display: "block", padding: "2.5rem", background: i % 2 === 0 ? "var(--bg)" : "var(--bg2)", border: "1px solid var(--border)", transition: "background 0.25s" }}>
                <p style={{ fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--earth)", fontWeight: 400, marginBottom: "1rem" }}>{post.readTime}</p>
                <h2 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: "clamp(1rem,1.8vw,1.3rem)", color: "var(--ink)", lineHeight: 1.3, marginBottom: "1rem" }}>{post.title}</h2>
                <p style={{ fontSize: "0.72rem", color: "var(--ink2)", lineHeight: 1.9, fontWeight: 300, marginBottom: "1.5rem" }}>{post.excerpt}</p>
                <span style={{ fontSize: "0.58rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--earth)", fontWeight: 400 }}>Read →</span>
              </Link>
            ))}
          </div>
        </div>
      </FadeUp>
    </>
  );
}
