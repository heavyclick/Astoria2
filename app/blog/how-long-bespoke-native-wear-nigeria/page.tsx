import type { Metadata } from "next";
import BlogPost from "@/components/BlogPost";

export const metadata: Metadata = {
  title: "How Long Does Bespoke Native Wear Take in Nigeria? Timelines Explained | Astoria",
  description: "Standard bespoke native wear from Astoria takes 7–14 days. Full breakdown of timelines, rush order options, and how to plan your commission around an event date.",
  alternates: { canonical: "https://astoriagallery.online/blog/how-long-bespoke-native-wear-nigeria/" },
};

const p = (text: string) => (
  <p style={{ fontSize: "0.78rem", color: "var(--ink2)", lineHeight: 2, fontWeight: 300, marginBottom: "1rem" }}>{text}</p>
);

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Long Does Bespoke Native Wear Take in Nigeria? Timelines Explained",
  url: "https://astoriagallery.online/blog/how-long-bespoke-native-wear-nigeria/",
  publisher: { "@type": "Organization", name: "Astoria", url: "https://astoriagallery.online/" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://astoriagallery.online/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://astoriagallery.online/blog/" },
      { "@type": "ListItem", position: 3, name: "How Long Bespoke Native Wear Nigeria", item: "https://astoriagallery.online/blog/how-long-bespoke-native-wear-nigeria/" },
    ],
  },
};

const timeline = [
  { day: "Day 1", step: "Measurement confirmation", detail: "You send your measurements using our guide. We confirm receipt and any clarifications." },
  { day: "Day 1–2", step: "Fabric approval", detail: "We share fabric options with photos. You select and confirm the fabric and colour in writing." },
  { day: "Day 2", step: "Production begins", detail: "Cutting and construction starts once fabric is confirmed." },
  { day: "Day 2–11", step: "Construction", detail: "The piece is cut, sewn, and assembled. Embroidery is applied at this stage." },
  { day: "Day 12–13", step: "Quality check and finishing", detail: "We inspect fit, seams, and finish. Embroidery and hem details are reviewed." },
  { day: "Day 13–14", step: "Photography and dispatch", detail: "We photograph the completed piece and send for your review before dispatch." },
];

const extendFactors = [
  ["Group orders of 5 or more", "Each additional set adds 1–2 days depending on complexity. Group of 10+ adds 4–5 days minimum."],
  ["Complex embroidery", "Heavy hand-stitched embroidery, beading, or aso-oke weaving adds 2–4 days."],
  ["Premium fabric sourcing", "If the specific fabric you want needs to be sourced from a supplier, add 1–3 days before production begins."],
  ["Rush confirmation delays", "If measurement confirmation or fabric approval takes longer than 24 hours on your side, production is delayed by the same amount."],
];

export default function Post6() {
  return (
    <BlogPost
      eyebrow="Commission Guide"
      h1="How Long Does Bespoke Native Wear Take in Nigeria? Timelines Explained"
      readTime="5 min read"
      keyword="how long bespoke native wear Nigeria"
      opening="Standard bespoke native wear from Astoria takes 7–14 days from measurement confirmation to dispatch. That is the honest, direct answer. Everything that follows explains what happens in those days, what can make it faster, what can make it longer, and how to plan around a specific event date."
      parentLink={{ label: "Begin Your Commission", href: "/commission/", anchor: "begin your commission" }}
      sections={[
        {
          h2: "The full timeline — measurement to delivery, day by day",
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {timeline.map((item, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "1rem", padding: "1.2rem 0", borderBottom: "1px solid var(--border)", alignItems: "start" }}>
                  <span style={{ fontFamily: "var(--serif)", fontSize: "0.72rem", color: "var(--earth)", fontWeight: 400, paddingTop: "0.1rem" }}>{item.day}</span>
                  <div>
                    <strong style={{ display: "block", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "var(--ink)", fontWeight: 400, marginBottom: "0.2rem" }}>{item.step}</strong>
                    <span style={{ fontSize: "0.72rem", color: "var(--ink2)", fontWeight: 300, lineHeight: 1.8 }}>{item.detail}</span>
                  </div>
                </div>
              ))}
              <div style={{ padding: "1.2rem 0", display: "grid", gridTemplateColumns: "80px 1fr", gap: "1rem" }}>
                <span style={{ fontFamily: "var(--serif)", fontSize: "0.72rem", color: "var(--earth)", fontWeight: 400 }}>+1–3 days</span>
                <div>
                  <strong style={{ display: "block", fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "var(--ink)", fontWeight: 400, marginBottom: "0.2rem" }}>Delivery</strong>
                  <span style={{ fontSize: "0.72rem", color: "var(--ink2)", fontWeight: 300, lineHeight: 1.8 }}>Same-day or next-day in Abuja. 1–3 days nationwide via courier. 3–7 days international.</span>
                </div>
              </div>
            </div>
          ),
        },
        {
          h2: "Rush order timeline — what's possible and what it requires",
          content: (
            <>
              {p("Rush commissions of 5–7 days are available for single pieces. This requires: same-day measurement confirmation, immediate fabric selection from our available stock (no special sourcing), and simple or no embroidery.")}
              {p("What rush orders cannot accommodate: complex hand embroidery, aso-oke weaving, group orders of more than 3 pieces, or fabric that needs to be sourced externally.")}
              {p("To request a rush commission: message us with your event date and the word 'rush' in your first message. We confirm availability immediately.")}
            </>
          ),
        },
        {
          h2: "Factors that extend turnaround",
          content: (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "0.5rem" }}>
              {extendFactors.map(([factor, detail]) => (
                <div key={factor} style={{ display: "flex", gap: "0.8rem" }}>
                  <span style={{ color: "var(--earth)", fontFamily: "var(--serif)", flexShrink: 0, fontSize: "0.9rem" }}>—</span>
                  <p style={{ fontSize: "0.75rem", color: "var(--ink2)", lineHeight: 1.9, fontWeight: 300 }}>
                    <strong style={{ fontWeight: 400, color: "var(--ink)" }}>{factor}:</strong> {detail}
                  </p>
                </div>
              ))}
            </div>
          ),
        },
        {
          h2: "How to plan your commission around a specific event date",
          content: (
            <>
              {p("The formula: event date minus 14 days (standard production) minus delivery days = latest possible commission start date. Add a 3-day buffer for anything unexpected.")}
              {p("Practical example: wedding on Saturday December 14. Subtract 14 days = November 30. Subtract 2 days for delivery = November 28. Add 3-day buffer = commission by November 25 at the latest.")}
              {p("For group orders (5+): use 21 days minimum instead of 14. For complex aso-oke or heavily embroidered pieces: use 18–21 days.")}
              {p("The earlier you commission, the more options you have for fabric selection and the more flexibility exists if anything needs adjustment. Commissions placed 4+ weeks before an event have the best outcomes.")}
            </>
          ),
        },
      ]}
      faq={[
        { q: "What is the minimum time for a bespoke native wear commission?", a: "5–7 days for a single piece with simple construction and available fabric. Rush orders require same-day measurement confirmation and fabric selection from stock. Message us with your event date to confirm rush availability." },
        { q: "Can I get a bespoke agbada in 2 weeks?", a: "Yes — 14 days is the standard production window for an agbada set. Measurement confirmation and fabric selection should be completed on day 1 for this timeline to hold." },
        { q: "Does delivery time count as part of the 7–14 days?", a: "No. The 7–14 days is production time. Delivery is additional: 1–3 days within Nigeria, 3–7 days internationally. For Abuja clients, same-day or next-day options are available." },
        { q: "What happens if my piece isn't ready by the promised date?", a: "Astoria confirms the production timeline before accepting a commission. If an unforeseen delay occurs, we communicate immediately with the updated timeline and, where possible, offer an expedited option." },
      ]}
      bottomCTA="Know your date. Begin your commission."
      ctaContext="bespoke native wear commission"
      schemaJson={schema}
    />
  );
}
