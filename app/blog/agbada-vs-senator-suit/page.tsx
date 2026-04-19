import type { Metadata } from "next";
import BlogPost from "@/components/BlogPost";

export const metadata: Metadata = {
  title: "Agbada vs Senator Suit — How to Choose and When to Wear Each | Astoria",
  description: "Agbada vs senator suit — a complete comparison by occasion, formality, climate, and cost. When each is right, when each is wrong, and how to choose.",
  alternates: { canonical: "https://astoriagallery.online/blog/agbada-vs-senator-suit/" },
};

const p = (text: string) => <p style={{ fontSize: "0.78rem", color: "var(--ink2)", lineHeight: 2, fontWeight: 300, marginBottom: "1rem" }}>{text}</p>;

const tableData = [
  { factor: "Formality", agbada: "Maximum — ceremonial and social", senator: "High — professional and social" },
  { factor: "Best occasion", agbada: "Weddings, owambe, installation", senator: "Business, weddings, date night, everyday" },
  { factor: "Heat suitability", agbada: "Lower — heavier fabric", senator: "Higher — lighter options available" },
  { factor: "Seated for long hours", agbada: "Challenging — outer robe", senator: "Comfortable — contained silhouette" },
  { factor: "Group appropriateness", agbada: "Strong — commands space", senator: "Strong — works in any group size" },
  { factor: "Starting price", agbada: "₦120,000", senator: "₦45,000" },
];

const schema = { "@context": "https://schema.org", "@type": "Article", headline: "Agbada vs Senator Suit — How to Choose and When to Wear Each", url: "https://astoriagallery.online/blog/agbada-vs-senator-suit/", publisher: { "@type": "Organization", name: "Astoria", url: "https://astoriagallery.online/" }, breadcrumb: { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://astoriagallery.online/" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://astoriagallery.online/blog/" }, { "@type": "ListItem", position: 3, name: "Agbada vs Senator Suit", item: "https://astoriagallery.online/blog/agbada-vs-senator-suit/" }] } };

export default function Post3() {
  return (
    <BlogPost
      eyebrow="Style Guide"
      h1="Agbada vs Senator Suit — How to Choose and When to Wear Each"
      readTime="7 min read"
      keyword="agbada vs senator suit Nigeria"
      opening="Two garments, two completely different social registers. Choosing wrong doesn't ruin the occasion — but choosing right elevates it. The agbada and the senator suit are both correct. They are not interchangeable. Understanding when each belongs is the difference between wearing what is expected and wearing what is right."
      parentLink={{ label: "Buy Agbada in Nigeria", href: "/buy-agbada-nigeria/", anchor: "buy agbada in Nigeria" }}
      sections={[
        { h2: "What an agbada communicates vs what a senator suit communicates", content: <>
          {p("The agbada communicates ceremony, occasion, and cultural authority. When a man walks into a room in a full 3-piece agbada, the immediate signal is: this is a significant event and this man understands that. It's designed for group settings — weddings, owambe, installations — where the garment speaks before the person does.")}
          {p("The senator suit communicates professional authority and cultural groundedness. It is the Nigerian executive uniform. It belongs in a boardroom, at a business meeting, at a wedding as a guest, and on a date. It carries less dramatic visual weight than the agbada, which makes it more versatile.")}
        </> },
        { h2: "Agbada vs senator suit — full comparison", content: <>
          <div style={{ overflowX: "auto", marginTop: "1rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.72rem" }}>
              <thead>
                <tr>{["Factor","Agbada","Senator Suit"].map(h=><th key={h} style={{ textAlign:"left",padding:"0.7rem 1rem",borderBottom:"1px solid var(--ink)",fontSize:"0.55rem",letterSpacing:"0.15em",textTransform:"uppercase" as const,color:"var(--earth)",fontWeight:400 }}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {tableData.map((row,i)=>(
                  <tr key={i} style={{ borderBottom:"1px solid var(--border)" }}>
                    <td style={{ padding:"0.7rem 1rem",color:"var(--ink)",fontWeight:400,fontSize:"0.72rem" }}>{row.factor}</td>
                    <td style={{ padding:"0.7rem 1rem",color:"var(--ink2)",fontWeight:300,fontSize:"0.72rem" }}>{row.agbada}</td>
                    <td style={{ padding:"0.7rem 1rem",color:"var(--ink2)",fontWeight:300,fontSize:"0.72rem" }}>{row.senator}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </> },
        { h2: "When to wear an agbada (and when it's the wrong choice)", content: <>
          {p("Right for: Nigerian weddings (especially as groom, father of the groom, or senior family). High-formality owambe and social celebrations. Traditional ceremonies, installations, chieftaincy events. Any occasion where maximum presence is required and expected.")}
          {p("Wrong for: Business meetings and boardrooms — the agbada carries ceremony energy into a professional space. Date nights — too ceremonial for an intimate setting. International professional events. Any setting where you'll be seated for long periods (the outer robe makes this uncomfortable).")}
        </> },
        { h2: "When to wear a senator suit (and when it's not enough)", content: <>
          {p("Right for: Nigerian business meetings and boardrooms. Weddings as a guest or groomsman. Date nights. Naming ceremonies. Smart casual occasions. International meetings where you want to project cultural confidence.")}
          {p("Not enough for: Occasions where the agbada is the cultural expectation — groom at a traditional wedding, a senior family member at a high-ceremony event. These settings have a dress code even when it isn't stated.")}
        </> },
        { h2: "Can you wear a senator suit to a Nigerian wedding?", content: <>
          {p("Yes — in every role except possibly the groom at a very traditional ceremony. A well-made senator suit is appropriate for guests at any formality level, for groomsmen who want a clean coordinated look, and even for grooms who prefer a less dramatic silhouette.")}
          {p("If you're the groom: the senator suit is correct and increasingly common. Many grooms now commission a senator for the ceremony and an agbada for the reception — getting the versatility of the senator for the photographs and the ceremonial weight of the agbada for the celebration.")}
        </> },
      ]}
      faq={[
        { q: "Is an agbada or senator suit more expensive?", a: "An agbada is generally more expensive due to more fabric, more production time, and typically more embroidery. Astoria senator suits start from ₦45,000. Agbada sets start from ₦120,000." },
        { q: "Can I wear a senator suit to a traditional wedding?", a: "Yes. A senator suit is appropriate for most roles at a traditional wedding. For the groom or head of family at a very formal traditional ceremony, an agbada may be more appropriate — but this is a cultural judgement call, not a rule." },
        { q: "Which is more comfortable to wear for a full day?", a: "The senator suit is more comfortable for full-day events. The agbada's outer robe adds heat and restricts movement in ways that become noticeable after several hours." },
        { q: "Are there agbada styles that are less formal?", a: "Yes. A shorter outer robe in lightweight linen with minimal embroidery reads as smart casual agbada — the modern interpretation of the traditional form. Astoria makes this as a specific commission." },
      ]}
      bottomCTA="Know what you need. Commission it."
      ctaContext="agbada or senator suit"
      schemaJson={schema}
    />
  );
}
