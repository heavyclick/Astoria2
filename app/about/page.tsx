import type { Metadata } from "next";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "About Astoria — Bespoke Nigerian Menswear, Abuja",
  description: "Astoria is a bespoke Nigerian menswear brand based in Abuja. We make agbada, senator suits, and kaftan sets for men who understand what clothing means in a room.",
  alternates: { canonical: "https://astoriagallery.online/about/" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Astoria",
  url: "https://astoriagallery.online/about/",
  description: "Astoria is a bespoke Nigerian menswear brand based in Abuja. We make agbada, senator suits, and kaftan sets.",
  breadcrumb: { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://astoriagallery.online/" }, { "@type": "ListItem", position: 2, name: "About", item: "https://astoriagallery.online/about/" }] },
};

export default function About() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Opening statement */}
      <div style={{ padding: "10rem var(--pad) 6rem", borderBottom: "1px solid var(--border)" }}>
        <p style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.6rem,3.5vw,3.5rem)", lineHeight: 1.2, color: "var(--ink)", maxWidth: 760 }}>
          Clothing is not decoration. It is the first information a room receives about you.
        </p>
      </div>

      {/* Brand story */}
      <FadeUp>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "start" }}>
          <div style={{ padding: "6rem var(--pad)", borderRight: "1px solid var(--border)" }}>
            <p className="page-hero-eyebrow" style={{ marginBottom: "2rem" }}>About Astoria</p>
            <h1 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: "clamp(2rem,4vw,4rem)", lineHeight: 1.05, color: "var(--ink)", marginBottom: "3rem", letterSpacing: "-0.01em" }}>About Astoria</h1>

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", maxWidth: 480 }}>
              <p style={{ fontSize: "0.78rem", color: "var(--ink2)", lineHeight: 2, fontWeight: 300 }}>
                Every piece Astoria makes starts from the same question: what does this man need the room to understand about him before he speaks?
              </p>
              <p style={{ fontSize: "0.78rem", color: "var(--ink2)", lineHeight: 2, fontWeight: 300 }}>
                Nigerian menswear isn't decorative. The agbada, the senator suit, the kaftan — these are not fashion choices in the Western sense. They are statements of identity, occasion, and intention. The man who commissions a wedding agbada from Astoria isn't buying fabric. He's commissioning the version of himself that his children will remember in those photographs.
              </p>
              <p style={{ fontSize: "0.78rem", color: "var(--ink2)", lineHeight: 2, fontWeight: 300 }}>
                Astoria was built in Abuja. Federal Capital Territory. Seat of government, seat of ceremony, and the city where the stakes of appearance are highest. Every piece we make reflects that understanding.
              </p>
              <p style={{ fontSize: "0.78rem", color: "var(--ink2)", lineHeight: 2, fontWeight: 300 }}>
                We make bespoke — not ready-to-wear. Every commission begins with a conversation, not a size chart. We take your measurements, understand your occasion, select the fabric together, and produce a piece that fits your body and your moment. Then we deliver it — Abuja, Lagos, Port Harcourt, London, New York. Wherever the room is.
              </p>
            </div>

            {/* Principle callout */}
            <div style={{ marginTop: "3rem", padding: "2rem", border: "1px solid var(--border)", background: "var(--bg2)" }}>
              <p style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "1.1rem", color: "var(--ink)", lineHeight: 1.6, marginBottom: "0.8rem", fontWeight: 300 }}>
                "Built to be worn, not just owned."
              </p>
              <p style={{ fontSize: "0.55rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--earth)", fontWeight: 400 }}>The Astoria Principle</p>
            </div>

            <div style={{ marginTop: "3rem" }}>
              <Link href="/commission/" className="btn-primary">Commission accordingly</Link>
            </div>
          </div>

          {/* Right column — stats and facts */}
          <div style={{ padding: "6rem var(--pad)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                { num: "100%", label: "Made to Measure", sub: "Every single piece is cut from your measurements. No stock. No adjustments. No templates." },
                { num: "7–14", label: "Days to Completion", sub: "Standard production timeline from measurement confirmation to dispatch." },
                { num: "36+", label: "States Served", sub: "All 36 Nigerian states plus international delivery to UK, US, Canada, and beyond." },
                { num: "24hr", label: "Commission Response", sub: "Every commission message receives a response within 24 hours. Usually much faster." },
              ].map((item, i) => (
                <div key={i} style={{ padding: "2.5rem 0", borderBottom: "1px solid var(--border)" }}>
                  <span style={{ fontFamily: "var(--serif)", fontSize: "clamp(2rem,4vw,3.5rem)", color: "var(--earth)", fontWeight: 300, display: "block", lineHeight: 1, marginBottom: "0.4rem" }}>{item.num}</span>
                  <p style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--ink)", fontWeight: 400, marginBottom: "0.6rem" }}>{item.label}</p>
                  <p style={{ fontSize: "0.72rem", color: "var(--ink2)", lineHeight: 1.8, fontWeight: 300, maxWidth: 320 }}>{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeUp>

      {/* What we make */}
      <FadeUp>
        <div style={{ padding: "6rem var(--pad)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          <p style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--earth)", fontWeight: 400, marginBottom: "1.5rem" }}>The Collection</p>
          <h2 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: "clamp(1.6rem,3vw,2.8rem)", color: "var(--ink)", marginBottom: "3rem" }}>What we make</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2px" }}>
            {[
              { name: "Agbada sets", desc: "The three-piece traditional set. Maximum formality, maximum presence.", href: "/buy-agbada-nigeria/" },
              { name: "Senator suits", desc: "The most versatile piece in a Nigerian man's wardrobe.", href: "/buy-native-wear-nigeria/" },
              { name: "Kaftan sets", desc: "Flowing, formal, culturally significant.", href: "/buy-native-wear-nigeria/" },
              { name: "Buba and soro", desc: "The foundation layer of Nigerian dress.", href: "/buy-native-wear-nigeria/" },
              { name: "Aso-oke sets", desc: "Traditional hand-woven fabric for ceremonies and weddings.", href: "/buy-agbada-nigeria/" },
              { name: "Smart casual pieces", desc: "Everyday native wear built for the Abuja climate.", href: "/shop-by-event/everyday-smart-casual/" },
            ].map(item => (
              <Link key={item.name} href={item.href} style={{ textDecoration: "none", padding: "2rem", background: "var(--bg2)", display: "block", transition: "background 0.25s" }}>
                <p style={{ fontFamily: "var(--serif)", fontSize: "1rem", color: "var(--ink)", fontWeight: 400, marginBottom: "0.4rem" }}>{item.name}</p>
                <p style={{ fontSize: "0.7rem", color: "var(--ink2)", lineHeight: 1.8, fontWeight: 300 }}>{item.desc}</p>
                <p style={{ fontSize: "0.55rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--earth)", marginTop: "1rem", fontWeight: 400 }}>See collection →</p>
              </Link>
            ))}
          </div>
        </div>
      </FadeUp>
    </>
  );
}
