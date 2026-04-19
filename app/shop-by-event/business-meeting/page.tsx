import type { Metadata } from "next";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import PageCTA from "@/components/PageCTA";
import CommissionForm from "@/components/CommissionForm";

export const metadata: Metadata = {
  title: "Nigerian Menswear for Business Meetings — Senator Suits | Astoria",
  description: "Commission a bespoke senator suit for Nigerian business meetings. Made to your exact measurements in Abuja, shipped nationwide. Astoria — the outfit that owns the room.",
  alternates: { canonical: "https://astoriagallery.online/shop-by-event/business-meeting/" },
};

const faq = [
  { q: "What colour senator suit is best for a business meeting?", a: "Navy, charcoal, forest green, and black are the most appropriate. Avoid white and cream for working meetings — these carry ceremonial associations that conflict with a professional setting." },
  { q: "Should I wear a cap with a senator suit to a business meeting?", a: "In most Nigerian business settings, a cap is optional with a senator suit. For very formal traditional professional contexts — government meetings, senior executive gatherings — a cap is appropriate. For standard boardroom settings, it's a personal choice." },
  { q: "Can a senator suit work for international business meetings?", a: "Yes. A well-made senator suit in a controlled colour communicates cultural confidence in any setting. It is increasingly recognised in international business environments as a marker of both personal style and professional authority." },
  { q: "How long does a business senator commission take?", a: "Standard is 7–14 days from measurement confirmation. Rush available — message with your meeting date." },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", name: "Nigerian Menswear for Business Meetings — Senator Suits", url: "https://astoriagallery.online/shop-by-event/business-meeting/", breadcrumb: { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://astoriagallery.online/" }, { "@type": "ListItem", position: 2, name: "Shop by Occasion", item: "https://astoriagallery.online/shop-by-event/" }, { "@type": "ListItem", position: 3, name: "Business Meeting", item: "https://astoriagallery.online/shop-by-event/business-meeting/" }] } },
    { "@type": "FAQPage", mainEntity: faq.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

const comparisonData = [
  { occasion: "Business meeting", senator: "✓ Ideal", agbada: "✗ Too ceremonial" },
  { occasion: "Board meeting", senator: "✓ Ideal", agbada: "Depends on seniority" },
  { occasion: "Client presentation", senator: "✓ Ideal", agbada: "✗ Not appropriate" },
  { occasion: "Wedding", senator: "✓ Appropriate", agbada: "✓ Ideal" },
  { occasion: "Owambe", senator: "✓ Appropriate", agbada: "✓ Ideal" },
  { occasion: "Date night", senator: "✓ Best option", agbada: "✗ Overdressed" },
];

export default function BusinessMeeting() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="page-hero">
        <p className="page-hero-eyebrow">Business Meeting · Senator Suits</p>
        <h1>Nigerian Menswear for Business Meetings — Wear What the Room Responds To</h1>
        <p className="page-hero-sub">In a Nigerian boardroom, a well-cut senator suit does something a Western suit cannot. It signals that you are at home — in the culture, in the room, and in the conversation. The senator suit in 2025 is the Nigerian executive uniform.</p>
      </div>

      <FadeUp>
        <div style={{ padding: "4rem var(--pad)", borderBottom: "1px solid var(--border)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          <div>
            <p style={{ fontSize: "0.78rem", color: "var(--ink2)", lineHeight: 2, fontWeight: 300, marginBottom: "1rem" }}>
              Astoria makes it to your exact measurements so the piece works with your authority, not against it. Also see: <Link href="/buy-native-wear-nigeria/" style={{ color: "var(--earth)", textDecoration: "none" }}>buy native wear in Nigeria</Link> for the full range.
            </p>
            <Link href="/commission/" className="btn-primary">Commission Your Business Piece</Link>
          </div>
          <CommissionForm context="business senator suit" />
        </div>
      </FadeUp>

      <FadeUp>
        <div style={{ padding: "5rem var(--pad)" }}>
          <article style={{ maxWidth: 720 }}>

            <section style={{ marginBottom: "4rem", paddingBottom: "4rem", borderBottom: "1px solid var(--border)" }}>
              <h2 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: "clamp(1.4rem,2.4vw,2rem)", color: "var(--ink)", marginBottom: "1.2rem" }}>What is the best outfit for a Nigerian business meeting?</h2>
              <p style={{ fontSize: "0.78rem", color: "var(--ink)", lineHeight: 2, marginBottom: "1rem", fontWeight: 400 }}>A long-sleeve senator suit in a controlled colour — navy, charcoal, forest green, or black — is the most appropriate and commanding choice for Nigerian business settings.</p>
              <p style={{ fontSize: "0.78rem", color: "var(--ink2)", lineHeight: 2, fontWeight: 300 }}>The senator suit works because it is simultaneously formal and culturally specific. It doesn't borrow formality from a Western tradition. It carries its own authority. For very senior executives in high-formality settings, a structured kaftan set is also appropriate. An agbada is too ceremonial for a working meeting — it carries owambe and wedding energy into a professional space.</p>
            </section>

            <section style={{ marginBottom: "4rem", paddingBottom: "4rem", borderBottom: "1px solid var(--border)" }}>
              <h2 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: "clamp(1.4rem,2.4vw,2rem)", color: "var(--ink)", marginBottom: "1.5rem" }}>Agbada vs senator suit — which is right for business?</h2>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.72rem" }}>
                  <thead>
                    <tr>
                      <th style={{ textAlign: "left", padding: "0.7rem 1rem", borderBottom: "1px solid var(--ink)", fontFamily: "var(--sans)", fontSize: "0.58rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--earth)", fontWeight: 400 }}>Occasion</th>
                      <th style={{ textAlign: "left", padding: "0.7rem 1rem", borderBottom: "1px solid var(--ink)", fontFamily: "var(--sans)", fontSize: "0.58rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--earth)", fontWeight: 400 }}>Senator Suit</th>
                      <th style={{ textAlign: "left", padding: "0.7rem 1rem", borderBottom: "1px solid var(--ink)", fontFamily: "var(--sans)", fontSize: "0.58rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--earth)", fontWeight: 400 }}>Agbada</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, i) => (
                      <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                        <td style={{ padding: "0.7rem 1rem", color: "var(--ink)", fontWeight: 300 }}>{row.occasion}</td>
                        <td style={{ padding: "0.7rem 1rem", color: row.senator.startsWith("✓") ? "var(--earth)" : "var(--ink2)", fontWeight: 300 }}>{row.senator}</td>
                        <td style={{ padding: "0.7rem 1rem", color: row.agbada.startsWith("✓") ? "var(--earth)" : row.agbada.startsWith("✗") ? "#8B1A1A" : "var(--ink2)", fontWeight: 300 }}>{row.agbada}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section style={{ marginBottom: "4rem", paddingBottom: "4rem", borderBottom: "1px solid var(--border)" }}>
              <h2 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: "clamp(1.4rem,2.4vw,2rem)", color: "var(--ink)", marginBottom: "1.2rem" }}>Can I buy senate wear in Abuja or Lagos for business?</h2>
              <p style={{ fontSize: "0.78rem", color: "var(--ink)", lineHeight: 2, fontWeight: 400, marginBottom: "0.8rem" }}>Yes. Astoria makes senator suits for professional use and delivers to Abuja, Lagos, and every state in Nigeria.</p>
              <p style={{ fontSize: "0.78rem", color: "var(--ink2)", lineHeight: 2, fontWeight: 300 }}>Business-focused senator suits use subdued embroidery — functional, not ceremonial — in fabrics appropriate for full-day wear. Message us to commission.</p>
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

      <PageCTA headline="Walk in and change the energy." cta="Commission Your Business Piece" context="business senator suit" />
    </>
  );
}
