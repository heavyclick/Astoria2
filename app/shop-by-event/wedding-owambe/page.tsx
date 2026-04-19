import type { Metadata } from "next";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import PageCTA from "@/components/PageCTA";
import CommissionForm from "@/components/CommissionForm";

export const metadata: Metadata = {
  title: "Men's Native Wear for Nigerian Weddings & Owambe | Astoria",
  description: "Commission bespoke men's native wear for Nigerian weddings and owambe — agbada, senator suits, kaftan sets. Made to your measurements, delivered anywhere. Astoria.",
  alternates: { canonical: "https://astoriagallery.online/shop-by-event/wedding-owambe/" },
};

const faq = [
  { q: "What is the best colour for a groom's agbada or senator suit?", a: "White and ivory are the most traditional choices and photograph consistently well. Rich single colours — cobalt blue, forest green, deep burgundy, or black — are popular for both grooms who want distinction and for groomsmen sets. The best colour for your skin tone can be discussed when you start your commission." },
  { q: "Can I see fabric samples before committing?", a: "Yes. We share fabric photos and videos when you begin your commission. For clients who want to feel the fabric, we can arrange a sample swatch by post." },
  { q: "Do you make aso-ebi sets for family groups?", a: "Yes. Aso-ebi coordination for extended family groups is available. Message with the number of sets, the fabric (if already purchased), and your event date." },
  { q: "What if I'm not sure what style suits my wedding?", a: "Start your commission message and describe the wedding — the setting, level of formality, your role, and any preferences you have. We'll recommend the style and fabric that makes the most sense." },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", name: "Men's Native Wear for Nigerian Weddings & Owambe", url: "https://astoriagallery.online/shop-by-event/wedding-owambe/", breadcrumb: { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://astoriagallery.online/" }, { "@type": "ListItem", position: 2, name: "Shop by Occasion", item: "https://astoriagallery.online/shop-by-event/" }, { "@type": "ListItem", position: 3, name: "Wedding & Owambe", item: "https://astoriagallery.online/shop-by-event/wedding-owambe/" }] } },
    { "@type": "FAQPage", mainEntity: faq.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

const styles = [
  { name: "Agbada", desc: "The most formal and visually commanding choice. A 3-piece set in aso-oke or embroidered voile. The standard for grooms and senior family members at high-formality weddings." },
  { name: "Senator suit", desc: "Formal, versatile, and appropriate for every role at a wedding. Available with varying levels of embroidery. Works equally for grooms who prefer a cleaner silhouette, groomsmen, and guests." },
  { name: "Kaftan set", desc: "Single long tunic, highly formal. Typically chosen for very traditional or religious ceremonies. Less structured than agbada or senator, with a different kind of presence." },
  { name: "Buba and soro", desc: "The two-piece native set. Appropriate for guests and less formal wedding occasions. More relaxed than a senator but clearly intentional." },
];

export default function WeddingOwambe() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="page-hero">
        <p className="page-hero-eyebrow">Wedding & Owambe · Native Formal</p>
        <h1>Commission Your Wedding Look — Every Style, Made to Measure</h1>
        <p className="page-hero-sub">At a Nigerian wedding, the men remember what they wore. So does everyone else. The photographs last. Astoria makes every piece a groom, groomsman, father of the groom, or wedding guest might need.</p>
      </div>

      <FadeUp>
        <div style={{ padding: "4rem var(--pad)", borderBottom: "1px solid var(--border)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          <div>
            <p style={{ fontSize: "0.78rem", color: "var(--ink2)", lineHeight: 2, fontWeight: 300, marginBottom: "1rem" }}>What you wear is your decision. What it fits like is ours. Every agbada, senator suit, and kaftan set is cut to your measurements and built for the occasion.</p>
            <p style={{ fontSize: "0.78rem", color: "var(--ink2)", lineHeight: 2, fontWeight: 300, marginBottom: "1.5rem" }}>Also see: <Link href="/buy-agbada-nigeria/" style={{ color: "var(--earth)", textDecoration: "none" }}>bespoke agbada</Link> for full detail on the most formal wedding choice.</p>
            <Link href="/commission/" className="btn-primary">Start Your Commission</Link>
          </div>
          <CommissionForm context="wedding or owambe native wear" />
        </div>
      </FadeUp>

      <FadeUp>
        <div style={{ padding: "5rem var(--pad)" }}>
          <article style={{ maxWidth: 720 }}>

            <section style={{ marginBottom: "4rem", paddingBottom: "4rem", borderBottom: "1px solid var(--border)" }}>
              <h2 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: "clamp(1.4rem,2.4vw,2rem)", color: "var(--ink)", marginBottom: "1.2rem" }}>What are the options for men's wedding attire in Nigeria?</h2>
              <p style={{ fontSize: "0.78rem", color: "var(--ink)", lineHeight: 2, marginBottom: "1.5rem", fontWeight: 400 }}>Nigerian men's wedding attire ranges from a full 3-piece agbada (maximum formality and presence) to a senator suit or kaftan set (formal but more contained) — the right choice depends on your role, the event formality, and personal preference.</p>
              {styles.map(s => (
                <div key={s.name} style={{ marginBottom: "1.5rem" }}>
                  <p style={{ fontFamily: "var(--serif)", fontSize: "0.95rem", color: "var(--ink)", fontWeight: 400, marginBottom: "0.3rem" }}>{s.name}</p>
                  <p style={{ fontSize: "0.75rem", color: "var(--ink2)", lineHeight: 1.9, fontWeight: 300 }}>{s.desc}</p>
                </div>
              ))}
              <p style={{ fontSize: "0.75rem", color: "var(--ink2)", lineHeight: 1.9, fontWeight: 300, marginTop: "1.5rem" }}>Not sure which suits your role and the event? Tell us in your commission message and we'll advise.</p>
            </section>

            <section style={{ marginBottom: "4rem", paddingBottom: "4rem", borderBottom: "1px solid var(--border)" }}>
              <h2 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: "clamp(1.4rem,2.4vw,2rem)", color: "var(--ink)", marginBottom: "1.2rem" }}>Can Astoria make matching sets for the whole wedding party?</h2>
              <p style={{ fontSize: "0.78rem", color: "var(--ink)", lineHeight: 2, fontWeight: 400, marginBottom: "1rem" }}>Yes. Group commissions for groomsmen, father of the groom, and aso-ebi coordination are available.</p>
              <p style={{ fontSize: "0.78rem", color: "var(--ink2)", lineHeight: 2, fontWeight: 300 }}>For group orders of 5 or more, message us with your event date, number of sets, fabric preference, and any colour specifications. We confirm the production timeline immediately.</p>
            </section>

            <section style={{ marginBottom: "4rem", paddingBottom: "4rem", borderBottom: "1px solid var(--border)" }}>
              <h2 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: "clamp(1.4rem,2.4vw,2rem)", color: "var(--ink)", marginBottom: "1.2rem" }}>How far in advance should I commission?</h2>
              <p style={{ fontSize: "0.78rem", color: "var(--ink)", lineHeight: 2, fontWeight: 400, marginBottom: "1rem" }}>Minimum 3 weeks for a single piece. For group orders of 5 or more, minimum 4 weeks.</p>
              <p style={{ fontSize: "0.78rem", color: "var(--ink2)", lineHeight: 2, fontWeight: 300 }}>Rush commissions within 2 weeks are possible — message with your exact event date to confirm availability.</p>
            </section>

            <section>
              <h2 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: "clamp(1.4rem,2.4vw,2rem)", color: "var(--ink)", marginBottom: "2rem" }}>Frequently asked questions</h2>
              {faq.map((f,i) => (
                <div key={i} style={{ borderBottom: "1px solid var(--border)", paddingBottom: "2rem", marginBottom: "2rem" }}>
                  <p style={{ fontFamily: "var(--serif)", fontSize: "1rem", color: "var(--ink)", fontWeight: 400, marginBottom: "0.6rem" }}>{f.q}</p>
                  <p style={{ fontSize: "0.75rem", color: "var(--ink2)", lineHeight: 1.9, fontWeight: 300 }}>{f.a}</p>
                </div>
              ))}
            </section>
          </article>
        </div>
      </FadeUp>

      <PageCTA headline="You're in every photograph. Commission a piece that belongs there." cta="Start Your Commission" context="wedding or owambe native wear" />
    </>
  );
}
