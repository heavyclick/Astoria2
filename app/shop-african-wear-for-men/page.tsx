import type { Metadata } from "next";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import PageCTA from "@/components/PageCTA";
import CommissionForm from "@/components/CommissionForm";

export const metadata: Metadata = {
  title: "Shop African Wear for Men — Nigerian Menswear | Astoria",
  description: "Shop bespoke African wear for men. Nigerian agbada, senator suits, and kaftan sets made to your measurements. Ships to Nigeria, UK, US, Canada, and worldwide.",
  alternates: { canonical: "https://astoriagallery.online/shop-african-wear-for-men/" },
};

const faq = [
  { q: "I'm based in the UK. Can I still commission a piece?", a: "Yes. Many Astoria clients are in the UK, US, and Canada. The entire process happens remotely — measurements, fabric approval, and payment. We ship directly to your address." },
  { q: "What is the best African clothing brand for men?", a: "The best brand for a specific man is the one that makes clothes for his body, his occasion, and his city — not a generic pattern. Astoria's bespoke model means every piece is made for the person wearing it." },
  { q: "Are Nigerian traditional clothes appropriate for formal international settings?", a: "Yes. A well-made senator suit or agbada worn in an international business or formal social setting communicates cultural confidence. The key is fit and occasion-appropriateness — both of which bespoke cutting guarantees." },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", name: "Shop African Wear for Men — Bespoke Nigerian Menswear", url: "https://astoriagallery.online/shop-african-wear-for-men/", breadcrumb: { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://astoriagallery.online/" }, { "@type": "ListItem", position: 2, name: "Shop African Wear for Men", item: "https://astoriagallery.online/shop-african-wear-for-men/" }] } },
    { "@type": "FAQPage", mainEntity: faq.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

export default function ShopAfricanWearMen() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="page-hero">
        <p className="page-hero-eyebrow">African Wear for Men · Ships Worldwide</p>
        <h1>Shop African Wear for Men — Bespoke Nigerian Menswear, Ships Worldwide</h1>
        <p className="page-hero-sub">Nigerian menswear is not a category that gets better by going generic. An agbada that fits is a different garment from an agbada that adjusts. Astoria makes bespoke African wear for men who understand that difference — in Nigeria and for Nigerian men everywhere.</p>
      </div>

      <FadeUp>
        <div style={{ padding: "4rem var(--pad)", borderBottom: "1px solid var(--border)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          <div>
            <p style={{ fontSize: "0.78rem", color: "var(--ink2)", lineHeight: 2, fontWeight: 300, marginBottom: "1.5rem" }}>UK, US, Canada, and beyond — the commission process is fully remote. Production is 7–14 days. International courier typically 3–7 business days after dispatch.</p>
            <Link href="/commission/" className="btn-primary">Start Your Commission</Link>
          </div>
          <CommissionForm context="bespoke African wear" />
        </div>
      </FadeUp>

      <FadeUp>
        <div style={{ padding: "5rem var(--pad)" }}>
          <article style={{ maxWidth: 720 }}>
            {[
              ["What makes Nigerian men's wear different from other African clothing?", "Nigerian menswear is built around occasion and presence. The agbada has centuries of social meaning encoded in its cut — the outer robe width, the embroidery placement, the way it moves in a room. The senator suit is the Nigerian executive uniform: more culturally grounded than a Western suit for the right settings, more versatile than a kaftan for working days. These aren't fashion choices in the global trend sense. They are wardrobe decisions with real social stakes."],
              ["Does Astoria ship African wear internationally?", "Yes. Astoria ships completed commissions to the UK, US, Canada, Germany, the Netherlands, and beyond. International clients follow the same process as Nigerian clients — everything happens remotely. Production is 7–14 days from measurement confirmation. International courier delivery is typically 3–7 business days after dispatch."],
              ["Where to buy authentic Nigerian clothing online", "The best place to buy authentic Nigerian native clothing online is directly from a bespoke maker — not a marketplace that aggregates standard sizes from multiple sellers. Astoria's commission model means every piece is made for one client at a time. There is no warehouse inventory, no size-adjusted stock, and no generic pattern reused across orders. You get a garment that exists for you."],
            ].map(([heading, body], i) => (
              <section key={i} style={{ marginBottom: "4rem", paddingBottom: "4rem", borderBottom: "1px solid var(--border)" }}>
                <h2 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: "clamp(1.4rem,2.4vw,2rem)", color: "var(--ink)", marginBottom: "1.2rem" }}>{heading}</h2>
                <p style={{ fontSize: "0.78rem", color: "var(--ink2)", lineHeight: 2, fontWeight: 300 }}>{body}</p>
              </section>
            ))}
            <section>
              <h2 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: "clamp(1.4rem,2.4vw,2rem)", color: "var(--ink)", marginBottom: "2rem" }}>Frequently asked questions</h2>
              {faq.map((f,i)=>(
                <div key={i} style={{ borderBottom: "1px solid var(--border)", paddingBottom: "2rem", marginBottom: "2rem" }}>
                  <p style={{ fontFamily: "var(--serif)", fontSize: "1rem", color: "var(--ink)", fontWeight: 400, marginBottom: "0.6rem" }}>{f.q}</p>
                  <p style={{ fontSize: "0.75rem", color: "var(--ink2)", lineHeight: 1.9, fontWeight: 300 }}>{f.a}</p>
                </div>
              ))}
            </section>
          </article>
        </div>
      </FadeUp>
      <PageCTA headline="We ship to your door, wherever you are." cta="Start Your Commission" context="bespoke African wear" />
    </>
  );
}
