import type { Metadata } from "next";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import PageCTA from "@/components/PageCTA";
import CommissionForm from "@/components/CommissionForm";

export const metadata: Metadata = {
  title: "Buy Native Wear in Nigeria — Bespoke Men's Attire | Astoria",
  description: "Buy bespoke men's native wear in Nigeria. Agbada, senator suits, kaftan sets — made to your exact measurements and delivered anywhere in Nigeria or worldwide.",
  alternates: { canonical: "https://astoriagallery.online/buy-native-wear-nigeria/" },
};

const faq = [
  { q: "What's the difference between an agbada, senator suit, and kaftan?", a: "An agbada is a three-piece flowing set — the most formal and dramatic native look. A senator suit is a two-piece with an embroidered top and matching trousers — more contained and broadly versatile. A kaftan is a single long tunic, typically for highly formal traditional events. Not sure which suits your occasion? Message us and we'll advise." },
  { q: "Can you make matching sets for a wedding party?", a: "Yes. Group orders for groomsmen, families, and aso-ebi coordination are available. Message with the number of sets and your event date." },
  { q: "How do I take my measurements at home?", a: "When you start your commission we send a step-by-step guide with photos. You'll need a tape measure and about 10 minutes." },
  { q: "Do you make native wear for men of all body types?", a: "Yes. Bespoke means there are no size limits. Every piece is cut from your specific measurements — not a standard template." },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", name: "Buy Native Wear in Nigeria", url: "https://astoriagallery.online/buy-native-wear-nigeria/", breadcrumb: { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://astoriagallery.online/" }, { "@type": "ListItem", position: 2, name: "Buy Native Wear Nigeria", item: "https://astoriagallery.online/buy-native-wear-nigeria/" }] } },
    { "@type": "FAQPage", mainEntity: faq.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

const garments = [
  ["Senator suits","The most versatile piece in a Nigerian man's wardrobe. Appropriate for business, weddings, naming ceremonies, and smart casual events. Available in short-sleeve and long-sleeve, standard or embroidered collar."],
  ["Kaftan sets","Flowing, formal, culturally significant. Made in cotton, linen, and embroidered voile. Best for owambes, weddings, and formal social events."],
  ["Agbada sets","The full three-piece traditional set. Maximum formality, maximum presence. See the dedicated agbada page for full detail."],
  ["Buba and soro","The foundation layer. Also made as standalone smart casual pieces in contemporary fabrics."],
  ["Aso-oke","Traditional woven fabric sets, typically for ceremonies and weddings. Cap and full set available."],
];

const cities = ["Abuja","Lagos","Port Harcourt","Benin City","Asaba","Kaduna","Ibadan","Enugu","Owerri","Kano","Warri","Calabar"];

export default function BuyNativeWearNigeria() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="page-hero">
        <p className="page-hero-eyebrow">Bespoke Native Wear · Nigeria</p>
        <h1>Buy Native Wear in Nigeria — Bespoke Men's Attire, Made to Your Measurements</h1>
        <p className="page-hero-sub">The problem with most native wear isn't the fabric. It's the cut. Astoria removes every variable that creates that problem. You give us your measurements. We build the piece around them.</p>
      </div>

      <FadeUp>
        <div style={{ padding: "4rem var(--pad)", borderBottom: "1px solid var(--border)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          <div>
            <p style={{ fontSize: "0.78rem", color: "var(--ink2)", lineHeight: 2, fontWeight: 300, marginBottom: "1.5rem" }}>Delivered to your door anywhere in Nigeria — whether you're buying <strong style={{ fontWeight: 400, color: "var(--ink)" }}>native wear in Abuja, Lagos, Port Harcourt, Benin, or anywhere else</strong>.</p>
            <Link href="/commission/" className="btn-primary">Start Your Commission</Link>
          </div>
          <CommissionForm context="bespoke native wear" />
        </div>
      </FadeUp>

      <FadeUp>
        <div style={{ padding: "5rem var(--pad)" }}>
          <article style={{ maxWidth: 720 }}>

            <section style={{ marginBottom: "4rem", paddingBottom: "4rem", borderBottom: "1px solid var(--border)" }}>
              <h2 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: "clamp(1.4rem,2.4vw,2rem)", color: "var(--ink)", marginBottom: "1.5rem" }}>What native wear does Astoria make?</h2>
              {garments.map(([name, desc], i) => (
                <div key={i} style={{ marginBottom: "1.5rem" }}>
                  <p style={{ fontFamily: "var(--serif)", fontSize: "0.95rem", color: "var(--ink)", fontWeight: 400, marginBottom: "0.3rem" }}>{name}</p>
                  <p style={{ fontSize: "0.75rem", color: "var(--ink2)", lineHeight: 1.9, fontWeight: 300 }}>{desc}</p>
                </div>
              ))}
              <p style={{ marginTop: "1.5rem" }}><Link href="/buy-agbada-nigeria/" style={{ fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--earth)", fontWeight: 400, textDecoration: "none" }}>Full agbada detail → /buy-agbada-nigeria/</Link></p>
            </section>

            <section style={{ marginBottom: "4rem", paddingBottom: "4rem", borderBottom: "1px solid var(--border)" }}>
              <h2 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: "clamp(1.4rem,2.4vw,2rem)", color: "var(--ink)", marginBottom: "1.2rem" }}>Where do you deliver native wear in Nigeria?</h2>
              <p style={{ fontSize: "0.78rem", color: "var(--ink)", lineHeight: 2, marginBottom: "1rem", fontWeight: 400 }}>Astoria delivers to all 36 states. Most orders deliver within 7–14 days of measurement confirmation. Same-day or next-day delivery available in Abuja.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1rem" }}>
                {cities.map(city => (
                  <span key={city} style={{ padding: "0.35rem 0.8rem", border: "1px solid var(--border)", fontSize: "0.65rem", letterSpacing: "0.08em", color: "var(--ink2)", fontWeight: 300 }}>{city}</span>
                ))}
              </div>
            </section>

            <section style={{ marginBottom: "4rem", paddingBottom: "4rem", borderBottom: "1px solid var(--border)" }}>
              <h2 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: "clamp(1.4rem,2.4vw,2rem)", color: "var(--ink)", marginBottom: "1.2rem" }}>How does the commission process work?</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                {[["Message us","Tell us your occasion, city, and timeline"],["Measurements","We send a guide — takes about 10 minutes at home"],["Fabric selection","We share options with photos. You approve the selection"],["Production","7–14 days to completion"],["Delivery","Dispatch and delivery to your door"]].map(([step,desc],i)=>(
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "28px 1fr", gap: "1rem", alignItems: "start" }}>
                    <span style={{ fontFamily: "var(--serif)", fontSize: "0.72rem", color: "var(--earth)", fontWeight: 400 }}>0{i+1}</span>
                    <div><strong style={{ display: "block", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink)", fontWeight: 400, marginBottom: "0.2rem" }}>{step}</strong><span style={{ fontSize: "0.72rem", color: "var(--ink2)", fontWeight: 300 }}>{desc}</span></div>
                  </div>
                ))}
              </div>
            </section>

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

      <PageCTA headline="One message starts everything." cta="Commission Your Native Wear" context="bespoke native wear" />
    </>
  );
}
