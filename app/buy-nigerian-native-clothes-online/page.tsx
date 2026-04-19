import type { Metadata } from "next";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import PageCTA from "@/components/PageCTA";
import CommissionForm from "@/components/CommissionForm";

export const metadata: Metadata = {
  title: "Buy Nigerian Native Clothes Online — Agbada, Senator Suits | Astoria",
  description: "Buy Nigerian native clothes online. Bespoke agbada, senator suits, and kaftan sets made to your exact measurements. No deposit to start. Ships nationwide and worldwide.",
  alternates: { canonical: "https://astoriagallery.online/buy-nigerian-native-clothes-online/" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Buy Nigerian Native Clothes Online — Astoria",
  url: "https://astoriagallery.online/buy-nigerian-native-clothes-online/",
  breadcrumb: { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://astoriagallery.online/" }, { "@type": "ListItem", position: 2, name: "Buy Nigerian Native Clothes Online", item: "https://astoriagallery.online/buy-nigerian-native-clothes-online/" }] },
};

export default function BuyOnline() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="page-hero">
        <p className="page-hero-eyebrow">Online Commission · Nationwide Delivery</p>
        <h1>Buy Nigerian Native Clothes Online — Agbada, Senator Suits, Kaftan Sets</h1>
        <p className="page-hero-sub">The entire Astoria commission process happens online. Measurements, fabric selection, production, and delivery — all handled remotely. No store visit. No deposit to start the conversation.</p>
      </div>

      <FadeUp>
        <div style={{ padding: "4rem var(--pad)", borderBottom: "1px solid var(--border)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          <div>
            <p style={{ fontSize: "0.78rem", color: "var(--ink2)", lineHeight: 2, fontWeight: 300, marginBottom: "1.5rem" }}>Whether you want to <strong style={{ fontWeight: 400, color: "var(--ink)" }}>buy Nigerian native clothes online</strong> from Abuja, Lagos, London, or anywhere else — the process is the same. You message us. We guide everything after that.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[["Buy agbada online →", "/buy-agbada-nigeria/"],["Buy native wear online →","/buy-native-wear-nigeria/"],["Shop African wear for men →","/shop-african-wear-for-men/"]].map(([label,href])=>(
                <Link key={href} href={href} style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--earth)", fontWeight: 400, textDecoration: "none" }}>{label}</Link>
              ))}
            </div>
          </div>
          <CommissionForm context="Nigerian native clothes online" />
        </div>
      </FadeUp>

      <FadeUp>
        <div style={{ padding: "5rem var(--pad)" }}>
          <article style={{ maxWidth: 720 }}>
            <section style={{ marginBottom: "4rem", paddingBottom: "4rem", borderBottom: "1px solid var(--border)" }}>
              <h2 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: "clamp(1.4rem,2.4vw,2rem)", color: "var(--ink)", marginBottom: "1.2rem" }}>Why buy Nigerian native clothes online from Astoria?</h2>
              <p style={{ fontSize: "0.78rem", color: "var(--ink2)", lineHeight: 2, fontWeight: 300, marginBottom: "1rem" }}>Most online native wear purchases end the same way: the size is close but the cut is wrong. The shoulder sits, the hem lands anywhere, the fit was built for someone else. Astoria's commission model removes every element of that equation. Your measurements become the pattern. The piece that arrives is built for your body.</p>
              {[["No deposit required to begin","Start the conversation for free. Payment is confirmed after fabric selection, before production."],["Remote process","Take your own measurements at home with our guide. No store visit required — ever."],["7–14 day production","From measurement confirmation to delivery. Rush orders in 5–7 days on request."],["Ships everywhere","All 36 Nigerian states and internationally to UK, US, Canada, and beyond."]].map(([title,desc],i)=>(
                <div key={i} style={{ display: "grid", gridTemplateColumns: "28px 1fr", gap: "1rem", marginBottom: "1.2rem" }}>
                  <span style={{ fontFamily: "var(--serif)", fontSize: "0.72rem", color: "var(--earth)", fontWeight: 400, paddingTop: "0.1rem" }}>0{i+1}</span>
                  <div><strong style={{ display: "block", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink)", fontWeight: 400, marginBottom: "0.2rem" }}>{title}</strong><span style={{ fontSize: "0.72rem", color: "var(--ink2)", fontWeight: 300, lineHeight: 1.8 }}>{desc}</span></div>
                </div>
              ))}
            </section>
            <section style={{ marginBottom: "4rem", paddingBottom: "4rem", borderBottom: "1px solid var(--border)" }}>
              <h2 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: "clamp(1.4rem,2.4vw,2rem)", color: "var(--ink)", marginBottom: "1.2rem" }}>What can I commission online?</h2>
              <p style={{ fontSize: "0.78rem", color: "var(--ink2)", lineHeight: 2, fontWeight: 300 }}>Agbada sets · Senator suits · Kaftan sets · Buba and soro · Aso-oke ceremonial sets · Linen buba · Tailored trousers · Custom native pieces</p>
              <p style={{ fontSize: "0.78rem", color: "var(--ink2)", lineHeight: 2, fontWeight: 300, marginTop: "1rem" }}>All garments are available in your choice of colour and fabric. Describe what you need and we'll show you what's achievable within your timeline and budget.</p>
            </section>
          </article>
        </div>
      </FadeUp>
      <PageCTA headline="Everything happens online. Start with one message." cta="Start Your Commission" context="Nigerian native clothes online" />
    </>
  );
}
