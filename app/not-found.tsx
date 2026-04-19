import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem var(--pad)",
      textAlign: "center",
      background: "var(--bg)",
    }}>
      <span style={{
        fontFamily: "var(--serif)",
        fontSize: "clamp(4rem,12vw,10rem)",
        color: "var(--bg2)",
        fontWeight: 300,
        lineHeight: 1,
        display: "block",
        marginBottom: "2rem",
        letterSpacing: "-0.02em",
      }}>
        404
      </span>
      <p style={{
        fontFamily: "var(--serif)",
        fontSize: "clamp(1.2rem,2.5vw,2rem)",
        color: "var(--ink)",
        fontWeight: 300,
        marginBottom: "1rem",
        lineHeight: 1.2,
      }}>
        This page doesn't exist.
      </p>
      <p style={{
        fontSize: "0.75rem",
        color: "var(--ink2)",
        fontWeight: 300,
        lineHeight: 2,
        maxWidth: 380,
        marginBottom: "3rem",
      }}>
        The page you're looking for may have moved or the URL may be incorrect.
      </p>
      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", justifyContent: "center" }}>
        <Link href="/" className="btn-primary">Back to Home</Link>
        <Link href="/commission/" className="btn-ghost">
          <span>Commission a piece</span>
          <span className="btn-ghost-line" />
        </Link>
      </div>
      <div style={{
        marginTop: "5rem",
        display: "flex",
        gap: "2.5rem",
        flexWrap: "wrap",
        justifyContent: "center",
      }}>
        {[
          ["Buy Agbada", "/buy-agbada-nigeria/"],
          ["Native Wear", "/buy-native-wear-nigeria/"],
          ["Shop by Occasion", "/shop-by-event/"],
          ["Blog", "/blog/"],
        ].map(([label, href]) => (
          <Link
            key={href}
            href={href}
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--ink2)",
              textDecoration: "none",
              fontWeight: 300,
            }}
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
