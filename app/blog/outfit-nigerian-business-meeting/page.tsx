import type { Metadata } from "next";
import BlogPost from "@/components/BlogPost";

export const metadata: Metadata = {
  title: "What to Wear to a Nigerian Business Meeting — The 2025 Executive Guide | Astoria",
  description: "The best outfit for a Nigerian business meeting — senator suits, colours that project authority, and what to avoid. Updated 2025 guide with clear recommendations.",
  alternates: { canonical: "https://astoriagallery.online/blog/outfit-nigerian-business-meeting/" },
};

const p = (text: string) => (
  <p style={{ fontSize: "0.78rem", color: "var(--ink2)", lineHeight: 2, fontWeight: 300, marginBottom: "1rem" }}>{text}</p>
);

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What to Wear to a Nigerian Business Meeting — The 2025 Executive Guide",
  url: "https://astoriagallery.online/blog/outfit-nigerian-business-meeting/",
  publisher: { "@type": "Organization", name: "Astoria", url: "https://astoriagallery.online/" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://astoriagallery.online/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://astoriagallery.online/blog/" },
      { "@type": "ListItem", position: 3, name: "Outfit for Nigerian Business Meeting", item: "https://astoriagallery.online/blog/outfit-nigerian-business-meeting/" },
    ],
  },
};

const rankData = [
  { rank: "1", outfit: "Long-sleeve senator suit — navy, charcoal, or black", level: "Most appropriate" },
  { rank: "2", outfit: "Long-sleeve senator suit — forest green or deep burgundy", level: "Appropriate" },
  { rank: "3", outfit: "Structured kaftan set (senior executive settings only)", level: "Appropriate" },
  { rank: "4", outfit: "Short-sleeve senator suit — controlled colour", level: "Appropriate (warm weather)" },
  { rank: "5", outfit: "Western suit", level: "Appropriate — less culturally grounded" },
  { rank: "—", outfit: "Agbada", level: "Not appropriate — ceremonial register" },
  { rank: "—", outfit: "White or cream senator", level: "Avoid — carries ceremonial associations" },
];

export default function Post5() {
  return (
    <BlogPost
      eyebrow="Business & Professional"
      h1="What to Wear to a Nigerian Business Meeting — The 2025 Executive Guide"
      readTime="7 min read"
      keyword="outfit for Nigerian business meeting"
      opening="The Nigerian boardroom has its own dress code. It's not written anywhere but everyone in the room knows it. The man in a well-cut senator suit walks in already calibrated to the environment. The man in a Western suit is technically correct and slightly foreign. The man in an agbada has misread the register entirely. Getting this right is not about fashion. It is about reading the room before you're in it."
      parentLink={{ label: "Business Meeting Pieces", href: "/shop-by-event/business-meeting/", anchor: "commission your business piece" }}
      sections={[
        {
          h2: "The case for native wear over Western suits in Nigerian business settings",
          content: (
            <>
              {p("A Western suit is borrowed formality. It says 'I have adopted the professional uniform of a different tradition.' A senator suit in a controlled colour says 'I am at home in this room, in this culture, in this conversation.' The difference is subtle in description and unmistakable in person.")}
              {p("This is increasingly understood at the highest levels of Nigerian business and government. The senator suit is not a concession to tradition. It is an exercise of cultural authority in a setting where that authority is directly relevant.")}
              {p("The one counterargument: if you will be the only Nigerian in a room of international counterparts who have no context for native wear, a Western suit may be contextually simpler. In any predominantly Nigerian business setting, the senator suit is the stronger choice.")}
            </>
          ),
        },
        {
          h2: "Best outfit options for a Nigerian business meeting — ranked by formality",
          content: (
            <>
              <div style={{ overflowX: "auto", marginTop: "0.5rem" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.72rem" }}>
                  <thead>
                    <tr>
                      {["#", "Outfit", "Assessment"].map(h => (
                        <th key={h} style={{ textAlign: "left", padding: "0.7rem 1rem", borderBottom: "1px solid var(--ink)", fontSize: "0.55rem", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "var(--earth)", fontWeight: 400 }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {rankData.map((row, i) => (
                      <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                        <td style={{ padding: "0.7rem 1rem", color: "var(--earth)", fontFamily: "var(--serif)", fontWeight: 400, fontSize: "0.78rem" }}>{row.rank}</td>
                        <td style={{ padding: "0.7rem 1rem", color: "var(--ink)", fontWeight: 300, fontSize: "0.72rem" }}>{row.outfit}</td>
                        <td style={{ padding: "0.7rem 1rem", color: row.level.includes("Not") || row.level.includes("Avoid") ? "#8B1A1A" : "var(--ink2)", fontWeight: 300, fontSize: "0.72rem" }}>{row.level}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ),
        },
        {
          h2: "Colours that project authority in a Nigerian professional setting",
          content: (
            <>
              {p("Navy: the most reliable business colour. Projects discipline, competence, and calm. Works in every lighting condition and photographs well.")}
              {p("Charcoal and deep grey: formal without ceremony. Appropriate for very senior meetings and high-stakes settings.")}
              {p("Forest green: increasingly strong in Nigerian business contexts. Carries cultural associations with growth and authority. Works well with gold embroidery.")}
              {p("Black: unambiguous formality. Reserve for the most senior or highest-stakes meetings.")}
              {p("Avoid white and cream: these colours carry strong ceremonial and social associations in Nigerian culture. In a business meeting they create a slight disconnect — as if the garment is dressed for an occasion the meeting is not.")}
            </>
          ),
        },
        {
          h2: "Does it matter if the meeting includes international counterparts?",
          content: (
            <>
              {p("Less than you might expect. A well-made senator suit in a controlled colour is increasingly recognised in international business settings — particularly London, New York, and other cities with significant Nigerian professional communities.")}
              {p("The key is execution: fit, fabric quality, and colour discipline matter most. A perfectly fitting navy senator suit reads as executive-level professional in any context. The same garment in a poor fit or loud colour does not.")}
              {p("If you are presenting to a purely international audience with no Nigerian context — a pitch to European investors who have never encountered Nigerian professional culture — a Western suit may reduce friction. This is a pragmatic choice, not a cultural concession.")}
            </>
          ),
        },
        {
          h2: "What to avoid — outfits that undermine your authority",
          content: (
            <>
              {p("Agbada in a working business meeting: the outer robe signals ceremony and celebration. In a boardroom it reads as a mismatch — as if the meeting is less important than the garment.")}
              {p("Heavy or ornate embroidery: the embroidery that belongs on a wedding agbada does not belong at a strategy meeting. Business senator suits should use functional, minimal embroidery — enough to distinguish the garment, not enough to dominate it.")}
              {p("Poor fit: more damaging in a professional setting than in a social one. An ill-fitting garment reads as careless in a room where attention to detail is expected.")}
              {p("Mismatched colours: a top and trouser that don't sit together clearly. The senator suit should read as a coherent unit.")}
            </>
          ),
        },
      ]}
      faq={[
        { q: "What is the best outfit for a Nigerian boardroom?", a: "A long-sleeve senator suit in navy, charcoal, forest green, or black. Minimal embroidery. Quality fabric appropriate for full-day wear. Made to your measurements so it fits correctly through a long meeting." },
        { q: "Can I wear a cap to a Nigerian business meeting?", a: "It is a personal choice in most settings. For standard boardroom and professional meetings, a cap is optional. For government meetings, senior executive gatherings, and very formal professional contexts, a cap is appropriate and expected." },
        { q: "Should I wear a senator suit or Western suit to a business meeting in Nigeria?", a: "A senator suit in a controlled colour is the stronger choice in any predominantly Nigerian business setting. It projects cultural confidence that a Western suit cannot. A Western suit is acceptable but less contextually powerful." },
        { q: "How far in advance should I commission a business senator suit?", a: "Standard production is 7–14 days from measurement confirmation. For a specific meeting date, commission at least 3 weeks in advance. Rush orders available with prior confirmation." },
      ]}
      bottomCTA="Walk in and change the energy."
      ctaContext="business senator suit"
      schemaJson={schema}
    />
  );
}
