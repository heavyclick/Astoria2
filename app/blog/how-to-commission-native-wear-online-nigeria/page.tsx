import type { Metadata } from "next";
import BlogPost from "@/components/BlogPost";

export const metadata: Metadata = {
  title: "How to Commission Bespoke Native Wear Online in Nigeria | Astoria",
  description: "A step-by-step guide to commissioning bespoke native wear online in Nigeria — measurements, communication, fabric selection, payment, and red flags to avoid.",
  alternates: { canonical: "https://astoriagallery.online/blog/how-to-commission-native-wear-online-nigeria/" },
};

const p = (text: string) => <p style={{ fontSize: "0.78rem", color: "var(--ink2)", lineHeight: 2, fontWeight: 300, marginBottom: "1rem" }}>{text}</p>;
const schema = { "@context": "https://schema.org", "@type": "Article", headline: "How to Commission Bespoke Native Wear Online in Nigeria", url: "https://astoriagallery.online/blog/how-to-commission-native-wear-online-nigeria/", publisher: { "@type": "Organization", name: "Astoria", url: "https://astoriagallery.online/" }, breadcrumb: { "@type": "BreadcrumbList", itemListElement: [{"@type":"ListItem",position:1,name:"Home",item:"https://astoriagallery.online/"},{"@type":"ListItem",position:2,name:"Blog",item:"https://astoriagallery.online/blog/"},{"@type":"ListItem",position:3,name:"Commission Native Wear Online Nigeria",item:"https://astoriagallery.online/blog/how-to-commission-native-wear-online-nigeria/"}] } };

export default function Post4() {
  return (
    <BlogPost
      eyebrow="Commission Guide"
      h1="How to Commission Bespoke Native Wear Online in Nigeria — A Complete Guide"
      readTime="6 min read"
      keyword="commission native wear online Nigeria"
      opening="Most men avoid online commissions because they've been burned once. The piece came back slightly wrong — shoulder sitting, hem landing anywhere, the colour not quite what was agreed. The problem in almost every case is the same: the process lacked structure. This guide gives you the structure — what to send, what to confirm, what to agree in writing before production begins."
      parentLink={{ label: "Start Your Commission", href: "/commission/", anchor: "start your commission" }}
      sections={[
        { h2: "What 'bespoke' actually means vs what most tailors deliver", content: <>
          {p("Bespoke means your measurements are the pattern. The tailor starts from zero with your dimensions and builds the garment around them. No template. No size chart. No 'nearest standard size adjusted.'")}
          {p("What most online tailors actually do: they take one or two measurements (usually chest and height), select the closest standard template from their collection, and make minor adjustments. This is not bespoke. It will never fit the same as a true bespoke piece.")}
          {p("How to tell the difference: a genuine bespoke maker will ask for at least 6–8 measurements. If a tailor asks for fewer than that and claims to make bespoke, they are adjusting a standard size.")}
        </> },
        { h2: "Step-by-step: how to commission correctly", content: <>
          {[["Send a clear brief","Occasion, garment type, colour preference, any fabric ideas, and your event date. The more specific, the better the result."],["Get all measurements taken","Chest, shoulder width, arm length, waist, hip, trouser inseam, height. A reputable maker provides a guide. Take measurements twice."],["Confirm fabric selection in writing","Before production begins, agree on the fabric — name, colour, weight — in writing (WhatsApp message is sufficient). Ambiguity about fabric is the most common cause of disappointment."],["Agree the timeline explicitly","Confirm the expected completion date and delivery method in writing. Rush timelines should be agreed and confirmed before you pay."],["Confirm payment terms","Reputable makers do not require full payment upfront before measurements are confirmed. Agree the payment structure before production starts."],["Review before dispatch","Ask for a photo of the completed piece before it is dispatched. This is standard practice."]].map(([step,desc],i)=>(
            <div key={i} style={{ display:"grid",gridTemplateColumns:"28px 1fr",gap:"1rem",marginBottom:"1.2rem",alignItems:"start" }}>
              <span style={{ fontFamily:"var(--serif)",fontSize:"0.72rem",color:"var(--earth)",fontWeight:400 }}>0{i+1}</span>
              <div><strong style={{ display:"block",fontSize:"0.68rem",letterSpacing:"0.1em",textTransform:"uppercase" as const,color:"var(--ink)",fontWeight:400,marginBottom:"0.2rem" }}>{step}</strong><span style={{ fontSize:"0.72rem",color:"var(--ink2)",fontWeight:300,lineHeight:1.8 }}>{desc}</span></div>
            </div>
          ))}
        </> },
        { h2: "How to take your own measurements at home", content: <>
          {p("You need: a flexible tape measure, a pen and paper, and someone to help (measuring yourself is unreliable for most dimensions).")}
          {p("Chest: measure around the fullest part of your chest, under your arms, tape parallel to the floor. Don't pull tight — let the tape rest flat.")}
          {p("Shoulder width: measure from shoulder point to shoulder point across the back, with the tape resting along the natural slope of your shoulders.")}
          {p("Arm length: measure from the shoulder point to the wrist bone with your arm slightly bent.")}
          {p("Waist: measure around your natural waist — the narrowest point of your torso, typically above the hip bone.")}
          {p("Height: measure barefoot, standing straight against a wall.")}
          {p("Inseam (for trousers): measure from the crotch to the ankle bone on the inside of the leg.")}
        </> },
        { h2: "Red flags to avoid in online native wear commissions", content: <>
          {p("No measurement guide: if the maker doesn't ask for detailed measurements, they are not making bespoke.")}
          {p("Full payment required before any measurements confirmed: reputable makers confirm measurements and fabric before requiring payment.")}
          {p("No photos of previous work: any legitimate bespoke maker will have a portfolio. If they can't show you previous work, don't commission.")}
          {p("No written confirmation of fabric and timeline: if a maker won't confirm fabric selection and completion date in writing, you have no recourse when something is wrong.")}
          {p("Prices that seem implausibly low: bespoke production takes time. A 3-piece agbada made to measure in less than ₦50,000 is not bespoke — it is a standard size with basic embroidery.")}
        </> },
      ]}
      faq={[
        { q: "Is it safe to commission native wear online in Nigeria?", a: "Yes, with the right process. The key protections: get all fabric and timeline confirmations in writing, ask for progress photos, and don't pay in full before measurements are confirmed." },
        { q: "How many measurements should a bespoke tailor ask for?", a: "A minimum of 6: chest, shoulder, waist, arm length, trouser inseam, and height. A thorough maker will ask for more. Fewer than 4 measurements means the piece is not truly bespoke." },
        { q: "What if my measurements change between commission and delivery?", a: "If significant changes occur, communicate them before production begins. Most makers can accommodate minor adjustments. After production, alterations are typically available at additional cost." },
        { q: "Can I commission native wear online if I'm outside Nigeria?", a: "Yes. The measurement process works identically regardless of your location. Production and delivery timelines may be slightly longer for international shipping." },
      ]}
      bottomCTA="You know the process. Start with one message."
      ctaContext="bespoke native wear commission"
      schemaJson={schema}
    />
  );
}
