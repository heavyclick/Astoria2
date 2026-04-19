import type { Metadata } from "next";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import PageCTA from "@/components/PageCTA";
import CommissionForm from "@/components/CommissionForm";

export const metadata: Metadata = {
  title: "Date Night Outfits for Men in Nigeria | Astoria",
  description: "Commission a bespoke date night outfit in Nigeria. Senator suits, smart linen sets, and elevated native casual — made to your measurements by Astoria.",
  alternates: { canonical: "https://astoriagallery.online/shop-by-event/date-night/" },
};

const faq = [
  { q: "Is native wear appropriate for a first date in Nigeria?", a: "Yes — a well-fitted, understated native piece reads as confident and intentional. It communicates cultural comfort without being ceremonial. The key is choosing the right style for the venue, which we can advise on." },
  { q: "What colour works best for a date night native outfit?", a: "Clean, single-colour pieces in navy, slate, forest green, deep burgundy, or cream photograph well and signal confidence without being loud. Avoid heavy embroidery or bold prints for most date settings." },
  { q: "How much does a date night native outfit cost at Astoria?", a: "A bespoke short-sleeve senator suit starts from ₦45,000. Linen sets and kaftan tops range from ₦45,000–₦95,000 depending on fabric and detail. Start your commission and we'll share the options." },
  { q: "How long does a date night commission take?", a: "Standard turnaround is 7–10 days from measurement confirmation. Rush commissions are available — message with your timeline." },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", name: "Date Night Outfits for Men in Nigeria", url: "https://astoriagallery.online/shop-by-event/date-night/", breadcrumb: { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://astoriagallery.online/" }, { "@type": "ListItem", position: 2, name: "Shop by Occasion", item: "https://astoriagallery.online/shop-by-event/" }, { "@type": "ListItem", position: 3, name: "Date Night", item: "https://astoriagallery.online/shop-by-event/date-night/" }] } },
    { "@type": "FAQPage", mainEntity: faq.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

const venues = [
  { setting: "Restaurant or lounge", rec: "Short-sleeve senator suit in a clean colour. Linen or cotton. The intention is clear without being ceremonial." },
  { setting: "Rooftop or elevated dining", rec: "Structured kaftan top over tailored native trousers. Formal enough for the setting, relaxed enough for the occasion." },
  { setting: "Outdoor or casual setting", rec: "Embroidered buba over well-fitting trousers in a complementary colour. Intentional without being overdressed." },
];

export default function DateNight() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="page-hero">
        <p className="page-hero-eyebrow">Date Night · Smart Casual</p>
        <h1>Date Night Outfits for Nigerian Men — Commission Yours</h1>
        <p className="page-hero-sub">The best date night outfit for a Nigerian man is the one that looks like you didn't try too hard — but clearly did. Not a full agbada. Not a regular shirt. The correct register is elevated and deliberate.</p>
      </div>

      <FadeUp>
        <div style={{ padding: "4rem var(--pad)", borderBottom: "1px solid var(--border)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          <div>
            <p style={{ fontSize: "0.78rem", color: "var(--ink2)", lineHeight: 2, fontWeight: 300, marginBottom: "1.5rem" }}>A short-sleeve senator in a quality linen, a structured native top over tailored trousers, a kaftan cut for the evening rather than the ceremony. Astoria makes this in your exact measurements. The fit is the first thing the room notices.</p>
            <Link href="/commission/" className="btn-primary">Commission Your Date Night Look</Link>
          </div>
          <CommissionForm context="date night outfit" />
        </div>
      </FadeUp>

      <FadeUp>
        <div style={{ padding: "5rem var(--pad)" }}>
          <article style={{ maxWidth: 720 }}>
            <section style={{ marginBottom: "4rem", paddingBottom: "4rem", borderBottom: "1px solid var(--border)" }}>
              <h2 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: "clamp(1.4rem,2.4vw,2rem)", color: "var(--ink)", marginBottom: "1.2rem" }}>What should a Nigerian man wear on a date?</h2>
              <p style={{ fontSize: "0.78rem", color: "var(--ink)", lineHeight: 2, marginBottom: "1.5rem", fontWeight: 400 }}>For most date settings in Nigeria, a short-sleeve senator suit in linen or quality cotton is the correct balance — clearly intentional, not overdressed.</p>
              <p style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--earth)", fontWeight: 400, marginBottom: "1rem" }}>By venue type:</p>
              {venues.map(v => (
                <div key={v.setting} style={{ marginBottom: "1.5rem", paddingBottom: "1.5rem", borderBottom: "1px solid var(--border)" }}>
                  <p style={{ fontFamily: "var(--serif)", fontSize: "0.9rem", color: "var(--ink)", fontWeight: 400, marginBottom: "0.3rem" }}>{v.setting}</p>
                  <p style={{ fontSize: "0.75rem", color: "var(--ink2)", lineHeight: 1.9, fontWeight: 300 }}>{v.rec}</p>
                </div>
              ))}
              <p style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--earth)", fontWeight: 400, marginBottom: "1rem", marginTop: "1.5rem" }}>The three things that make a date night outfit work:</p>
              {[["Fit","A well-cut senator in a simple colour outperforms an ornate ill-fitting piece every time"],["Colour","Earth tones, navy, forest green, and deep burgundy carry quiet confidence"],["Finish","Footwear and accessories are where the outfit either lands or doesn't"]].map(([title,desc]) => (
                <div key={title} style={{ display: "flex", gap: "0.8rem", marginBottom: "0.8rem" }}>
                  <span style={{ color: "var(--earth)", fontFamily: "var(--serif)", flexShrink: 0 }}>—</span>
                  <p style={{ fontSize: "0.75rem", color: "var(--ink2)", lineHeight: 1.9, fontWeight: 300 }}><strong style={{ fontWeight: 400, color: "var(--ink)" }}>{title}</strong> — {desc}</p>
                </div>
              ))}
            </section>

            <section style={{ marginBottom: "4rem", paddingBottom: "4rem", borderBottom: "1px solid var(--border)" }}>
              <h2 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: "clamp(1.4rem,2.4vw,2rem)", color: "var(--ink)", marginBottom: "1.2rem" }}>What's the best fabric for a date night native outfit in Nigerian weather?</h2>
              <p style={{ fontSize: "0.78rem", color: "var(--ink)", lineHeight: 2, fontWeight: 400, marginBottom: "0.8rem" }}>Linen or lightweight cotton.</p>
              <p style={{ fontSize: "0.78rem", color: "var(--ink2)", lineHeight: 2, fontWeight: 300 }}>Both breathe in humid conditions and hold a clean drape through an evening. Avoid heavy voile for active, outdoor, or long-duration settings.</p>
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
      <PageCTA headline="She noticed before you said a word." cta="Commission Your Date Night Look" context="date night outfit" />
    </>
  );
}
