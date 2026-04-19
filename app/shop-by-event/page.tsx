import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Shop Nigerian Men's Wear by Occasion | Astoria",
  description: "Wedding. Date night. Boardroom. Every day. Astoria builds bespoke Nigerian menswear for every room a man needs to walk into correctly. Choose your occasion.",
  alternates: { canonical: "https://astoriagallery.online/shop-by-event/" },
};

const events = [
  { title: "Wedding & Owambe", headline: "You're in every photograph. Dress accordingly.", body: "The most important day has a dress code whether or not anyone says it. Commission your wedding or owambe piece here.", cta: "See Wedding & Owambe Pieces", href: "/shop-by-event/wedding-owambe/", img: "/images/diplomat-model.jpg", keyword: "men's native wear for Nigerian wedding" },
  { title: "Date Night", headline: "She noticed before you said a word.", body: "The right date night outfit isn't overdressed or underdressed. It's the one that fits exactly.", cta: "See Date Night Pieces", href: "/shop-by-event/date-night/", img: "/images/commander-model.jpg", keyword: "date night outfit for men Nigeria" },
  { title: "Business Meeting", headline: "Walk in and change the energy.", body: "A well-cut senator suit in the right colour does something a Western suit cannot in a Nigerian boardroom.", cta: "See Business Pieces", href: "/shop-by-event/business-meeting/", img: "/images/sovereign-model.jpg", keyword: "outfit for Nigerian business meeting" },
  { title: "Everyday Smart Casual", headline: "Too intentional to be casual. Too relaxed to be formal.", body: "The everyday wardrobe done correctly — native and smart casual pieces built for regular use.", cta: "See Everyday Pieces", href: "/shop-by-event/everyday-smart-casual/", img: "/images/IMG_2881.JPG", keyword: "smart casual Nigerian menswear" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Shop Nigerian Men's Wear by Occasion — Astoria",
  url: "https://astoriagallery.online/shop-by-event/",
  breadcrumb: { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://astoriagallery.online/" }, { "@type": "ListItem", position: 2, name: "Shop by Occasion", item: "https://astoriagallery.online/shop-by-event/" }] },
};

export default function ShopByEvent() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="page-hero">
        <p className="page-hero-eyebrow">By Occasion</p>
        <h1>Dress for the Room You're Walking Into</h1>
        <p className="page-hero-sub">Every occasion has a dress code. Some are explicit. Most are understood without being stated. Astoria makes the pieces that get it right — not by accident, but by design.</p>
      </div>

      <FadeUp>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "2px", background: "var(--border)" }}>
          {events.map(ev => (
            <Link key={ev.href} href={ev.href} style={{ textDecoration: "none", background: "var(--bg)", display: "block" }}>
              <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
                <Image src={ev.img} alt={`${ev.keyword} — Astoria bespoke menswear`} fill sizes="50vw" style={{ objectFit: "cover", objectPosition: "top center", transition: "transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(26,24,20,0.75) 0%,transparent 55%)" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "2rem" }}>
                  <p style={{ fontFamily: "var(--serif)", fontSize: "clamp(1rem,1.8vw,1.4rem)", color: "var(--bg)", fontWeight: 400, marginBottom: "0.5rem" }}>{ev.title}</p>
                  <p style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "clamp(0.75rem,1.2vw,0.95rem)", color: "rgba(250,248,244,0.7)", marginBottom: "0.5rem", lineHeight: 1.5 }}>{ev.headline}</p>
                  <p style={{ fontSize: "0.68rem", color: "rgba(250,248,244,0.55)", fontWeight: 300, lineHeight: 1.7, marginBottom: "1rem" }}>{ev.body}</p>
                  <span style={{ fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--bg)", borderBottom: "1px solid rgba(250,248,244,0.35)", paddingBottom: "0.2rem" }}>{ev.cta} →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </FadeUp>
    </>
  );
}
