import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import CommissionForm from "@/components/CommissionForm";

interface FAQ {
  q: string;
  a: string;
}

interface RelatedLink {
  label: string;
  href: string;
  anchor: string;
}

interface BlogPostProps {
  eyebrow: string;
  h1: string;
  keyword: string;
  readTime: string;
  opening: string;
  sections: Array<{ h2: string; content: React.ReactNode }>;
  faq: FAQ[];
  bottomCTA: string;
  ctaContext: string;
  parentLink: RelatedLink;
  schemaJson: object;
}

export default function BlogPost({
  eyebrow, h1, readTime, opening, sections, faq, bottomCTA, ctaContext, parentLink, schemaJson,
}: BlogPostProps) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }} />

      {/* Hero */}
      <div style={{ padding: "9rem var(--pad) 4rem", borderBottom: "1px solid var(--border)", maxWidth: "100%" }}>
        <p style={{ fontSize: "0.58rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--earth)", fontWeight: 400, marginBottom: "1.5rem" }}>
          <Link href="/blog/" style={{ color: "var(--ink3)", textDecoration: "none" }}>Journal</Link>
          <span style={{ margin: "0 0.5rem", color: "var(--ink3)" }}>·</span>
          {eyebrow}
        </p>
        <h1 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: "clamp(1.8rem,4vw,4rem)", lineHeight: 1.1, color: "var(--ink)", marginBottom: "2rem", maxWidth: 780, letterSpacing: "-0.01em" }}>{h1}</h1>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <span style={{ fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--ink3)", fontWeight: 300 }}>{readTime}</span>
          <span style={{ width: 1, height: 12, background: "var(--border)" }} />
          <Link href={parentLink.href} style={{ fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--earth)", fontWeight: 400, textDecoration: "none" }}>{parentLink.anchor} →</Link>
        </div>
      </div>

      {/* Content */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: "0", alignItems: "start" }}>
        <FadeUp>
          <article style={{ padding: "5rem var(--pad)", borderRight: "1px solid var(--border)" }}>

            {/* Opening */}
            <p style={{ fontFamily: "var(--serif)", fontSize: "clamp(1rem,1.5vw,1.2rem)", color: "var(--ink)", lineHeight: 1.8, fontWeight: 300, marginBottom: "3rem", borderLeft: "2px solid var(--earth)", paddingLeft: "1.5rem" }}>
              {opening}
            </p>

            {/* Sections */}
            {sections.map((section, i) => (
              <section key={i} style={{ marginBottom: "3.5rem", paddingBottom: "3.5rem", borderBottom: "1px solid var(--border)" }}>
                <h2 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: "clamp(1.3rem,2.2vw,1.9rem)", color: "var(--ink)", marginBottom: "1.2rem", lineHeight: 1.2 }}>{section.h2}</h2>
                {section.content}
              </section>
            ))}

            {/* FAQ */}
            <section>
              <h2 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: "clamp(1.3rem,2.2vw,1.9rem)", color: "var(--ink)", marginBottom: "2rem" }}>Frequently asked questions</h2>
              {faq.map((f, i) => (
                <div key={i} style={{ borderBottom: "1px solid var(--border)", paddingBottom: "2rem", marginBottom: "2rem" }}>
                  <p style={{ fontFamily: "var(--serif)", fontSize: "1rem", color: "var(--ink)", fontWeight: 400, marginBottom: "0.6rem" }}>{f.q}</p>
                  <p style={{ fontSize: "0.75rem", color: "var(--ink2)", lineHeight: 1.9, fontWeight: 300 }}>{f.a}</p>
                </div>
              ))}
            </section>

            {/* Bottom CTA */}
            <div style={{ marginTop: "4rem", padding: "3rem", background: "var(--ink)" }}>
              <p style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "clamp(1.2rem,2vw,1.8rem)", color: "var(--bg)", fontWeight: 300, lineHeight: 1.2, marginBottom: "2rem" }}>{bottomCTA}</p>
              <CommissionForm context={ctaContext} cta="Send Message" dark={true} />
            </div>
          </article>
        </FadeUp>

        {/* Sidebar */}
        <FadeUp>
          <div style={{ padding: "5rem 2rem", position: "sticky", top: "80px" }}>
            <p style={{ fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--earth)", fontWeight: 400, marginBottom: "1.5rem" }}>Commission a piece</p>
            <CommissionForm context={ctaContext} cta="Send Message" />
            <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
              <p style={{ fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--ink3)", fontWeight: 300, marginBottom: "1rem" }}>Also read</p>
              {[
                { label: "Buy Agbada in Nigeria", href: "/buy-agbada-nigeria/" },
                { label: "Native Wear Guide", href: "/buy-native-wear-nigeria/" },
                { label: "Shop by Occasion", href: "/shop-by-event/" },
                { label: "The Commission Process", href: "/commission/" },
              ].map(l => (
                <Link key={l.href} href={l.href} style={{ display: "block", fontSize: "0.65rem", color: "var(--ink2)", textDecoration: "none", marginBottom: "0.6rem", letterSpacing: "0.05em", transition: "color 0.2s" }}>{l.label} →</Link>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </>
  );
}
