import CommissionForm from "./CommissionForm";

interface Props {
  headline: string;
  subline?: string;
  cta?: string;
  context?: string;
}

export default function PageCTA({ headline, subline, cta = "Send Message", context }: Props) {
  return (
    <section style={{
      padding: "6rem var(--pad)",
      background: "var(--ink)",
      marginTop: "4rem",
    }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <p style={{
          fontFamily: "var(--serif)",
          fontWeight: 300,
          fontSize: "clamp(1.8rem, 3.5vw, 3.2rem)",
          lineHeight: 1.1,
          color: "var(--bg)",
          marginBottom: subline ? "1rem" : "3rem",
          fontStyle: "italic",
        }}>
          {headline}
        </p>
        {subline && (
          <p style={{
            fontSize: "0.78rem",
            color: "rgba(250,248,244,0.55)",
            fontWeight: 300,
            lineHeight: 2,
            marginBottom: "3rem",
            maxWidth: 480,
          }}>
            {subline}
          </p>
        )}
        <CommissionForm context={context} cta={cta} dark={true} />
      </div>
    </section>
  );
}
