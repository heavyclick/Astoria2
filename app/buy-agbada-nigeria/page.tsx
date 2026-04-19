import type { Metadata } from "next";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import PageCTA from "@/components/PageCTA";
import CommissionForm from "@/components/CommissionForm";

export const metadata: Metadata = {
  title: "Buy Agbada in Nigeria — Bespoke, Made to Measure",
  description: "Commission a bespoke agbada in Nigeria — made to your exact measurements, shipped to Abuja, Lagos, Port Harcourt, and everywhere else. Start your commission today.",
  alternates: { canonical: "https://astoriagallery.online/buy-agbada-nigeria/" },
};

const faq = [
  { q: "Can I commission an agbada without visiting Abuja?", a: "Yes. All measurements are taken remotely — we send a step-by-step guide when you begin your commission. No store visit required, no deposit to start." },
  { q: "Do you make agbada for all heights and sizes?", a: "Yes. Bespoke means your measurements are the pattern. There are no size limits or surcharges for non-standard dimensions." },
  { q: "Can I choose my own fabric and colour?", a: "Yes. After you start your commission we share fabric options with photos and our recommendation based on your occasion. You approve before production begins." },
  { q: "What if the finished piece doesn't fit?", a: "Adjustments are included. If a piece doesn't fit based on the measurements confirmed, we alter it at no extra cost." },
  { q: "Do you make matching agbada sets for wedding parties?", a: "Yes. Group commissions for groomsmen, father of the groom, and family aso-ebi sets are available. Message us with the number of sets and your event date." },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", name: "Buy Agbada in Nigeria — Bespoke, Made to Measure", url: "https://astoriagallery.online/buy-agbada-nigeria/", breadcrumb: { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://astoriagallery.online/" }, { "@type": "ListItem", position: 2, name: "Buy Agbada in Nigeria", item: "https://astoriagallery.online/buy-agbada-nigeria/" }] } },
    { "@type": "FAQPage", mainEntity: faq.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

export default function BuyAgbadaNigeria() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="page-hero">
        <p className="page-hero-eyebrow">Bespoke Agbada · Made to Measure</p>
        <h1>Buy Agbada in Nigeria — Bespoke, Made to Measure</h1>
        <p className="page-hero-sub">Most men who've had a bad agbada made know exactly where it went wrong: the tailor guessed. Astoria builds bespoke agbada sets to your exact measurements — not a standard size adjusted, your actual dimensions as the pattern.</p>
      </div>

      <FadeUp>
        <div style={{ padding: "4rem var(--pad)", borderBottom: "1px solid var(--border)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          <div>
            <p style={{ fontSize: "0.78rem", color: "var(--ink2)", lineHeight: 2, fontWeight: 300, marginBottom: "1.5rem" }}>Every piece is cut in Abuja, sewn by hand, and delivered to your door anywhere in Nigeria. If you're ready to <strong style={{ fontWeight: 400, color: "var(--ink)" }}>buy agbada in Nigeria</strong> and done with the guesswork, this is where it starts.</p>
            <Link href="/commission/" className="btn-primary">Start Your Commission</Link>
          </div>
          <CommissionForm context="bespoke agbada" />
        </div>
      </FadeUp>

      <FadeUp>
        <div style={{ padding: "5rem var(--pad)" }}>
          <article style={{ maxWidth: 720 }}>

            <section style={{ marginBottom: "4rem", paddingBottom: "4rem", borderBottom: "1px solid var(--border)" }}>
              <h2 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: "clamp(1.4rem,2.4vw,2rem)", color: "var(--ink)", marginBottom: "1.2rem" }}>What makes a well-made agbada?</h2>
              <p style={{ fontSize: "0.78rem", color: "var(--ink)", lineHeight: 2, marginBottom: "1rem", fontWeight: 400 }}>A well-made agbada drapes cleanly at your height, moves without fighting you, and holds its shape after hours of wear — that combination only comes from bespoke cutting.</p>
              <p style={{ fontSize: "0.78rem", color: "var(--ink2)", lineHeight: 2, marginBottom: "1.5rem", fontWeight: 300 }}>The difference between a tailored agbada and an adjusted standard size is visible immediately: in the way the outer robe falls from the shoulder, in how the neckline sits, in whether the trousers are cut for your leg length or folded up at the hem. Astoria cuts from your measurements — chest, shoulder width, height, arm length — so the garment is yours from the first piece of fabric.</p>
              <p style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--earth)", fontWeight: 400, marginBottom: "0.8rem" }}>Three things built into every Astoria agbada:</p>
              <ul style={{ paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {["Drape cut to your exact height and shoulder width — not a size chart approximation","Fabric chosen for the specific occasion and Nigerian climate — breathable for outdoor events, structured for formal interiors","Embroidery scaled to your build — the right density and placement for your frame, not a repeated pattern from the previous order"].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "0.8rem", fontSize: "0.78rem", color: "var(--ink2)", lineHeight: 1.8, fontWeight: 300 }}>
                    <span style={{ color: "var(--earth)", fontFamily: "var(--serif)", flexShrink: 0 }}>—</span>{item}
                  </li>
                ))}
              </ul>
            </section>

            <section style={{ marginBottom: "4rem", paddingBottom: "4rem", borderBottom: "1px solid var(--border)" }}>
              <h2 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: "clamp(1.4rem,2.4vw,2rem)", color: "var(--ink)", marginBottom: "1.2rem" }}>How much does a bespoke agbada cost in Nigeria?</h2>
              <p style={{ fontSize: "0.78rem", color: "var(--ink)", lineHeight: 2, marginBottom: "1rem", fontWeight: 400 }}>A bespoke agbada from Astoria starts from ₦120,000 for a full 3-piece set, with cost depending on fabric choice and embroidery complexity.</p>
              <p style={{ fontSize: "0.78rem", color: "var(--ink2)", lineHeight: 2, marginBottom: "1.5rem", fontWeight: 300 }}>Standard 3-piece sets (outer robe, inner top, and matching trousers) range from ₦120,000 to ₦250,000. Premium aso-oke and heavily embroidered sets sit at the higher end. Payment is confirmed after fabric selection — there is no deposit required to begin the commission conversation.</p>
              <p style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--earth)", fontWeight: 400, marginBottom: "0.8rem" }}>What affects the final price:</p>
              <ul style={{ paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {["Fabric — premium voile, aso-oke, and imported linen cost more than standard cotton","Embroidery — more complex patterns, beading, and hand-stitched detail increase production time and price","Number of pieces — a 3-piece set with cap costs more than a 2-piece without","Rush timeline — standard 7–14 days; expedited 5–7 days may carry a surcharge"].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "0.8rem", fontSize: "0.78rem", color: "var(--ink2)", lineHeight: 1.8, fontWeight: 300 }}>
                    <span style={{ color: "var(--earth)", fontFamily: "var(--serif)", flexShrink: 0 }}>—</span>{item}
                  </li>
                ))}
              </ul>
            </section>

            <section style={{ marginBottom: "4rem", paddingBottom: "4rem", borderBottom: "1px solid var(--border)" }}>
              <h2 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: "clamp(1.4rem,2.4vw,2rem)", color: "var(--ink)", marginBottom: "1.2rem" }}>How long does it take to commission an agbada?</h2>
              <p style={{ fontSize: "0.78rem", color: "var(--ink)", lineHeight: 2, marginBottom: "1rem", fontWeight: 400 }}>Most agbada commissions are completed in 7–14 days from measurement confirmation.</p>
              <p style={{ fontSize: "0.78rem", color: "var(--ink2)", lineHeight: 2, fontWeight: 300 }}>The timeline: measurement confirmation (day 1) → fabric approval (day 1–2) → production begins (day 2) → quality check (day 12–13) → dispatch (day 13–14). Rush commissions within 5–7 days are available — message with your event date to confirm availability.</p>
            </section>

            <section style={{ marginBottom: "4rem", paddingBottom: "4rem", borderBottom: "1px solid var(--border)" }}>
              <h2 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: "clamp(1.4rem,2.4vw,2rem)", color: "var(--ink)", marginBottom: "1.2rem" }}>Where in Nigeria do you deliver agbada?</h2>
              <p style={{ fontSize: "0.78rem", color: "var(--ink)", lineHeight: 2, marginBottom: "1rem", fontWeight: 400 }}>Astoria delivers bespoke agbada to all 36 states in Nigeria and internationally — the entire commission process happens remotely, no in-person visit required.</p>
              <ul style={{ paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {[["Buy agbada in Abuja","same-city delivery or pickup, 1 day after completion"],["Buy agbada in Lagos","nationwide courier, 1–3 days after completion"],["Buy agbada in Port Harcourt","door-to-door delivery to Rivers State"],["Buy agbada in Benin","delivery to Benin City and across Edo State"],["Buy agbada in Asaba","delivery to Asaba and Delta State"],["Buy agbada in Kaduna","delivery available to Kaduna and Northern Nigeria"]].map(([city,detail],i)=>(
                  <li key={i} style={{ display: "flex", gap: "0.8rem", fontSize: "0.78rem", color: "var(--ink2)", lineHeight: 1.8, fontWeight: 300 }}>
                    <span style={{ color: "var(--earth)", fontFamily: "var(--serif)", flexShrink: 0 }}>—</span>
                    <span><strong style={{ fontWeight: 400, color: "var(--ink)" }}>{city}</strong> — {detail}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: "0.78rem", color: "var(--ink2)", lineHeight: 2, fontWeight: 300, marginTop: "1rem" }}>International shipping to the UK, US, Canada, and Europe is also available.</p>
            </section>

            <section style={{ marginBottom: "4rem", paddingBottom: "4rem", borderBottom: "1px solid var(--border)" }}>
              <h2 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: "clamp(1.4rem,2.4vw,2rem)", color: "var(--ink)", marginBottom: "1.2rem" }}>What types of agbada does Astoria make?</h2>
              {[["Wedding agbada","Full 3-piece in aso-oke or embroidered voile. Statement colour, detailed embroidery, maximum presence."],["Owambe / party agbada","Lighter fabrics, bold colour palette. Designed to move well and photograph well across long events."],["Smart casual agbada","Shorter outer robe in linen or lightweight cotton. The modern interpretation: native form, contemporary wearability."],["Corporate agbada","Minimal embroidery, controlled colour. Built for boardroom and formal professional settings."]].map(([type,desc],i)=>(
                <div key={i} style={{ marginBottom: "1.5rem" }}>
                  <p style={{ fontFamily: "var(--serif)", fontSize: "0.95rem", color: "var(--ink)", fontWeight: 400, marginBottom: "0.3rem" }}>{type}</p>
                  <p style={{ fontSize: "0.75rem", color: "var(--ink2)", lineHeight: 1.9, fontWeight: 300 }}>{desc}</p>
                </div>
              ))}
            </section>

            {/* FAQ */}
            <section>
              <h2 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: "clamp(1.4rem,2.4vw,2rem)", color: "var(--ink)", marginBottom: "2rem" }}>Frequently asked questions</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                {faq.map((f,i)=>(
                  <div key={i} style={{ borderBottom: "1px solid var(--border)", paddingBottom: "2rem" }}>
                    <p style={{ fontFamily: "var(--serif)", fontSize: "1rem", color: "var(--ink)", fontWeight: 400, marginBottom: "0.6rem" }}>{f.q}</p>
                    <p style={{ fontSize: "0.75rem", color: "var(--ink2)", lineHeight: 1.9, fontWeight: 300 }}>{f.a}</p>
                  </div>
                ))}
              </div>
            </section>

          </article>
        </div>
      </FadeUp>

      <PageCTA headline="Your agbada starts with one message." subline="Tell us the occasion, your city, and your timeline. We handle everything after that." cta="Start Your Commission" context="bespoke agbada" />
    </>
  );
}
