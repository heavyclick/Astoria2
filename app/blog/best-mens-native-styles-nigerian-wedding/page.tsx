import type { Metadata } from "next";
import Link from "next/link";
import BlogPost from "@/components/BlogPost";

export const metadata: Metadata = {
  title: "Best Men's Native Styles for Nigerian Weddings in 2025 | Astoria",
  description: "A complete guide to men's native wear for Nigerian weddings — agbada, senator suits, kaftan sets. Ranked by formality, with colour guides and price ranges.",
  alternates: { canonical: "https://astoriagallery.online/blog/best-mens-native-styles-nigerian-wedding/" },
};

const p = (text: string) => <p style={{ fontSize: "0.78rem", color: "var(--ink2)", lineHeight: 2, fontWeight: 300, marginBottom: "1rem" }}>{text}</p>;
const li = (items: string[]) => <ul style={{ paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column" as const, gap: "0.6rem", marginTop: "0.5rem" }}>{items.map((item,i)=><li key={i} style={{ display: "flex", gap: "0.8rem", fontSize: "0.78rem", color: "var(--ink2)", lineHeight: 1.8, fontWeight: 300 }}><span style={{ color: "var(--earth)", fontFamily: "var(--serif)", flexShrink: 0 }}>—</span>{item}</li>)}</ul>;

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Men's Native Styles for Nigerian Weddings in 2025",
  url: "https://astoriagallery.online/blog/best-mens-native-styles-nigerian-wedding/",
  publisher: { "@type": "Organization", name: "Astoria", url: "https://astoriagallery.online/" },
  breadcrumb: { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://astoriagallery.online/" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://astoriagallery.online/blog/" }, { "@type": "ListItem", position: 3, name: "Best Men's Native Styles for Nigerian Weddings", item: "https://astoriagallery.online/blog/best-mens-native-styles-nigerian-wedding/" }] },
};

export default function Post1() {
  return (
    <BlogPost
      eyebrow="Wedding & Owambe"
      h1="Best Men's Native Styles for Nigerian Weddings in 2025"
      readTime="8 min read"
      keyword="best men native style for wedding"
      opening="The most important outfit at a Nigerian wedding is the one the groom remembers at 60. Not the most expensive. Not the most elaborate. The one that fit, suited the occasion, and looked right in every photograph taken that day. This guide covers every style option — ranked by formality, with clear guidance on who each suits best."
      parentLink={{ label: "Wedding & Owambe", href: "/shop-by-event/wedding-owambe/", anchor: "commission your wedding piece" }}
      sections={[
        { h2: "The 5 best native styles for Nigerian wedding guests — ranked by formality", content: <>{p("1. Agbada (Full 3-piece) — Most formal. For grooms, fathers of the groom, and senior family at high-ceremony weddings. Outer robe in aso-oke or embroidered voile. Maximum presence, maximum cultural weight.")}{p("2. Senator suit (Long-sleeve, embroidered) — Formal. The most versatile choice for weddings. Appropriate for every role, every formality level. Available with heavy or light embroidery.")}{p("3. Kaftan set — Highly formal, single-piece. A different kind of formality to agbada — more contained, less dramatic. Strong choice for very traditional and religious ceremonies.")}{p("4. Senator suit (Short-sleeve) — Smart formal. Appropriate for outdoor weddings in hot weather. Less ceremonial than a long-sleeve, but intentional and correct.")}{p("5. Buba and soro — Smart casual. The foundational two-piece. Appropriate for guests and less formal wedding occasions.")} </> },
        { h2: "What to wear if you're the groom — agbada vs senator vs kaftan", content: <>{p("For Nigerian church, registry, and white-wedding ceremonies: a long-sleeve senator suit or full agbada. Both are correct. The senator is more versatile; the agbada makes a stronger visual statement.")}{p("For traditional marriage (igba nkwu, introduction, court): full agbada or kaftan in the family's designated colour is the standard. Senator suits are acceptable depending on the family preference.")}{p("The clear recommendation for most grooms: commission both. A senator suit for the church ceremony and a full agbada for the reception. The photographs from both will look right.")} </> },
        { h2: "What to wear as a groomsman", content: <>{p("Matching senator suits in the groom's chosen colour are the most common groomsmen look. The suit allows each man to fit individually while presenting as a coordinated group.")}{p("Aso-ebi — family-coordinated fabric — can be worn as agbada or senator depending on the formality level the family has agreed on. If buying aso-ebi fabric yourself, commission each piece to individual measurements rather than buying a standard size.")} </> },
        { h2: "Colour guide — what works for day vs evening Nigerian weddings", content: <>{p("Day ceremonies (outdoor, afternoon): lighter colours photograph better. White, ivory, cream, soft gold, and pale blue work well in natural light.")}{p("Evening ceremonies and receptions: richer, deeper colours carry well. Cobalt blue, forest green, deep burgundy, and black photograph with authority and look strong in venue lighting.")}{p("One practical rule: coordinate with the wedding colour scheme if one exists. If the couple hasn't specified, choose a colour that won't compete with or clash against the bridal party.")} </> },
        { h2: "How much should a wedding native outfit cost in Nigeria?", content: <>{p("Guest outfit: ₦45,000–₦120,000 for a well-made senator or kaftan set. More for a full agbada.")}{p("Groomsmen set: ₦45,000–₦120,000 per person, depending on garment type and embroidery complexity.")}{p("Groom's outfit: ₦120,000–₦250,000 for a bespoke agbada or senior senator set. The groom's piece should be the highest-quality piece at the wedding.")}{p("Group discount: Astoria offers adjusted pricing for group commissions of 5 or more sets. Message with your event date and number of sets.")} </> },
      ]}
      faq={[
        { q: "How early should I commission a wedding outfit?", a: "Minimum 3 weeks for a single piece. For group orders of 5 or more, minimum 4 weeks. Rush commissions within 2 weeks are possible — message with your exact event date to confirm availability." },
        { q: "Can I commission matching outfits for the entire wedding party?", a: "Yes. Astoria does group commissions for groomsmen, fathers, and aso-ebi coordination. Message us with the number of sets and your event date." },
        { q: "What's the difference between aso-oke and voile for wedding agbada?", a: "Aso-oke is a hand-woven traditional fabric with a distinctive texture — more formal, heavier, and culturally significant. Voile is a lighter fabric that takes embroidery well and drapes more freely. Both are appropriate for weddings; the choice depends on the level of formality and your personal preference." },
        { q: "Should the groom wear agbada or senator?", a: "Both are correct. An agbada makes a stronger visual statement and is considered the most formal traditional option. A senator suit is more contained and versatile — many grooms now prefer it for the church ceremony and commission an agbada for the reception." },
      ]}
      bottomCTA="You're in every photograph. Commission a piece that belongs there."
      ctaContext="wedding native wear"
      schemaJson={schema}
    />
  );
}
