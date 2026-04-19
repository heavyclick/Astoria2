import type { Metadata } from "next";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import PageCTA from "@/components/PageCTA";
import CommissionForm from "@/components/CommissionForm";

export const metadata: Metadata = {
  title: "Smart Casual Nigerian Menswear — Everyday Pieces | Astoria",
  description: "Bespoke smart casual Nigerian menswear for everyday wear. Senator sets, linen tops, and elevated native casual — made to your measurements. Delivered anywhere. Astoria.",
  alternates: { canonical: "https://astoriagallery.online/shop-by-event/everyday-smart-casual/" },
};

const faq = [
  { q: "Can a senator suit be casual enough for everyday wear?", a: "Yes — a short-sleeve senator in a simple fabric without heavy embroidery reads as smart casual. The cut and fabric do more work than the garment type." },
  { q: "What everyday native pieces does Astoria make?", a: "Short-sleeve senator suits, linen buba sets, lightweight kaftan tops, and embroidered native tops paired with tailored trousers. All made to your measurements." },
  { q: "How much does an everyday native piece cost?", a: "Everyday pieces start from ₦45,000 for a short-sleeve senator set. Message us with your specific request and budget and we'll show you what's achievable." },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", name: "Smart Casual Nigerian Menswear — Everyday Pieces", url: "https://astoriagallery.online/shop-by-event/everyday-smart-casual/", breadcrumb: { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://astoriagallery.online/" }, { "@type": "ListItem", position: 2, name: "Shop by Occasion", item: "https://astoriagallery.online/shop-by-event/" }, { "@type": "ListItem", position: 3, name: "Everyday Smart Casual", item: "https://astoriagallery.online/shop-by-event/everyday-smart-casual/" }] } },
    { "@type": "FAQPage", mainEntity: faq.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

export default function EverydaySmartCasual() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="page-hero">
        <p className="page-hero-eyebrow">Everyday Smart Casual</p>
        <h1>Smart Casual Nigerian Menswear — Everyday Pieces, Built to Your Measurements</h1>
        <p className="page-hero-sub">Most of the time, the occasion isn't a wedding or a boardroom. It's a family gathering, a casual lunch, a Sunday that somehow turned into an evening out. Astoria makes the everyday native wardrobe for exactly these moments.</p>
      </div>

      <FadeUp>
        <div style={{ padding: "4rem var(--pad)", borderBottom: "1px solid var(--border)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          <div>
            <p style={{ fontSize: "0.78rem", color: "var(--ink2)", lineHeight: 2, fontWeight: 300, marginBottom: "1.5rem" }}>Short-sleeve senators in quality linen. Embroidered buba sets in controlled colours. Kaftan tops that pair with trousers without demanding the full formal weight. Made to your measurements because fit is as important on an ordinary day as it is on a special one.</p>
            <Link href="/commission/" className="btn-primary">Commission Everyday Pieces</Link>
          </div>
          <CommissionForm context="everyday smart casual native wear" />
        </div>
      </FadeUp>

      <FadeUp>
        <div style={{ padding: "5rem var(--pad)" }}>
          <article style={{ maxWidth: 720 }}>

            <section style={{ marginBottom: "4rem", paddingBottom: "4rem", borderBottom: "1px solid var(--border)" }}>
              <h2 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: "clamp(1.4rem,2.4vw,2rem)", color: "var(--ink)", marginBottom: "1.2rem" }}>What counts as smart casual for a Nigerian man?</h2>
              <p style={{ fontSize: "0.78rem", color: "var(--ink)", lineHeight: 2, fontWeight: 400, marginBottom: "1rem" }}>Smart casual Nigerian menswear sits between the full formal native set and a plain t-shirt. The defining characteristic is intentionality — the garment is clearly chosen for the day, not defaulted to.</p>
              <p style={{ fontSize: "0.78rem", color: "var(--ink2)", lineHeight: 2, fontWeight: 300 }}>A short-sleeve senator suit in linen is smart casual. An embroidered buba over tailored trousers is smart casual. A plain kaftan top in a quality fabric with clean trousers is smart casual. The common element: the cut matters and the fabric has been considered.</p>
            </section>

            <section style={{ marginBottom: "4rem", paddingBottom: "4rem", borderBottom: "1px solid var(--border)" }}>
              <h2 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: "clamp(1.4rem,2.4vw,2rem)", color: "var(--ink)", marginBottom: "1.2rem" }}>What are the best fabrics for everyday Nigerian native wear?</h2>
              <p style={{ fontSize: "0.78rem", color: "var(--ink)", lineHeight: 2, fontWeight: 400, marginBottom: "1rem" }}>Linen and lightweight cotton lead for everyday use in Nigeria's climate.</p>
              <p style={{ fontSize: "0.78rem", color: "var(--ink2)", lineHeight: 2, fontWeight: 300 }}>They breathe well, wash without losing shape when cared for correctly, and hold a clean drape across long days. Avoid heavy voile or thick embroidery for regular wear — those are built for occasions, not daily use.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: "clamp(1.4rem,2.4vw,2rem)", color: "var(--ink)", marginBottom: "2rem" }}>Frequently asked questions</h2>
              {faq.map((f, i) => (
                <div key={i} style={{ borderBottom: "1px solid var(--border)", paddingBottom: "2rem", marginBottom: "2rem" }}>
                  <p style={{ fontFamily: "var(--serif)", fontSize: "1rem", color: "var(--ink)", fontWeight: 400, marginBottom: "0.6rem" }}>{f.q}</p>
                  <p style={{ fontSize: "0.75rem", color: "var(--ink2)", lineHeight: 1.9, fontWeight: 300 }}>{f.a}</p>
                </div>
              ))}
            </section>
          </article>
        </div>
      </FadeUp>

      <PageCTA headline="Too intentional to be casual. Too relaxed to be formal." cta="Commission Your Everyday Pieces" context="everyday smart casual native wear" />
    </>
  );
}
