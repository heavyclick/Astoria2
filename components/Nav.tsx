"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Collection", href: "/buy-native-wear-nigeria/", sub: [
    { label: "Buy Agbada", href: "/buy-agbada-nigeria/" },
    { label: "Native Wear", href: "/buy-native-wear-nigeria/" },
    { label: "African Wear", href: "/shop-african-wear-for-men/" },
    { label: "Shop Online", href: "/buy-nigerian-native-clothes-online/" },
  ]},
  { label: "By Occasion", href: "/shop-by-event/", sub: [
    { label: "Wedding & Owambe", href: "/shop-by-event/wedding-owambe/" },
    { label: "Date Night", href: "/shop-by-event/date-night/" },
    { label: "Business Meeting", href: "/shop-by-event/business-meeting/" },
    { label: "Everyday Smart Casual", href: "/shop-by-event/everyday-smart-casual/" },
  ]},
  { label: "Commission", href: "/commission/" },
  { label: "About", href: "/about/" },
  { label: "Blog", href: "/blog/" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <>
      <nav className="site-nav">
        <Link className="nav-logo" href="/">Astoria</Link>
        <ul className="nav-links" id="nav-links">
          {links.map(l => (
            <li key={l.label} style={{ position: "relative" }}
              onMouseEnter={() => l.sub ? setActiveDropdown(l.label) : undefined}
              onMouseLeave={() => setActiveDropdown(null)}>
              <Link href={l.href}>{l.label}</Link>
              {l.sub && activeDropdown === l.label && (
                <div style={{
                  position: "absolute", top: "100%", left: 0, background: "rgba(250,248,244,0.98)",
                  border: "1px solid var(--border)", minWidth: 200, zIndex: 200,
                  backdropFilter: "blur(12px)", padding: "0.5rem 0",
                }}>
                  {l.sub.map(s => (
                    <Link key={s.href} href={s.href} style={{
                      display: "block", padding: "0.6rem 1.2rem",
                      fontSize: "0.62rem", letterSpacing: "0.12em",
                      textTransform: "uppercase", color: "var(--ink2)",
                      textDecoration: "none",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--ink)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--ink2)")}
                    >{s.label}</Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
        <button className="nav-hamburger" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          <span style={open ? { transform: "rotate(45deg) translate(4px,4px)" } : {}} />
          <span style={open ? { opacity: 0 } : {}} />
          <span style={open ? { transform: "rotate(-45deg) translate(4px,-4px)" } : {}} />
        </button>
      </nav>
      {open && (
        <div style={{
          position: "fixed", top: 60, left: 0, right: 0, zIndex: 99,
          background: "rgba(250,248,244,0.97)", borderBottom: "1px solid var(--border)",
          padding: "1.5rem 1.5rem 2rem", backdropFilter: "blur(12px)",
        }}>
          {links.map(l => (
            <div key={l.label} style={{ marginBottom: "1rem" }}>
              <Link href={l.href} style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ink)", textDecoration: "none", display: "block", marginBottom: l.sub ? "0.5rem" : 0 }} onClick={() => setOpen(false)}>{l.label}</Link>
              {l.sub && l.sub.map(s => (
                <Link key={s.href} href={s.href} style={{ fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink2)", textDecoration: "none", display: "block", paddingLeft: "1rem", marginBottom: "0.3rem" }} onClick={() => setOpen(false)}>{s.label}</Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
