"use client";
import { useState, FormEvent } from "react";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";

const WA_BASE = "https://wa.me/2347015870376?text=";

const faq = [
  { q: "Is there a deposit to begin a commission?", a: "No deposit is required to start the conversation. Payment is confirmed after fabric selection and before production begins." },
  { q: "What payment methods do you accept?", a: "Bank transfer and mobile money. Details provided after your commission is confirmed." },
  { q: "What if I'm unhappy with the finished piece?", a: "Adjustments based on the measurements provided are included. For a significant fitting issue, we offer an alteration or remake at cost of materials only." },
  { q: "Can I commission something I don't see in the collection?", a: "Yes. The collection is a reference, not a limit. If you have a specific style, colour, or occasion in mind, describe it in your message." },
];

export default function CommissionPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  function handle(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    const msg = `*New Commission — Astoria*\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage: ${form.message}\n\nSent via astoriagallery.online/commission/`;
    window.open(WA_BASE + encodeURIComponent(msg), "_blank");
    setSent(true);
  }

  return (
    <>
      {/* Hero */}
      <div style={{ padding: "10rem var(--pad) 5rem", borderBottom: "1px solid var(--border)", background: "var(--ink)" }}>
        <p style={{ fontSize: "0.6rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(250,248,244,0.4)", fontWeight: 400, marginBottom: "2rem", display: "flex", alignItems: "center", gap: "1rem" }}>
          <span style={{ display: "block", width: 24, height: 1, background: "rgba(250,248,244,0.3)" }} />
          Commission
        </p>
        <h1 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: "clamp(2.6rem,5vw,5.8rem)", lineHeight: 1.0, color: "var(--bg)", marginBottom: "2rem", letterSpacing: "-0.01em" }}>
          Start Your<br /><em style={{ color: "rgba(250,248,244,0.5)" }}>Commission</em>
        </h1>
        <p style={{ fontSize: "0.78rem", color: "rgba(250,248,244,0.5)", maxWidth: 420, lineHeight: 2, fontWeight: 300 }}>
          Every Astoria piece begins with a conversation. There is no automated process, no size chart, no form that generates a quote. You tell us what you need. We build it.
        </p>
      </div>

      {/* Two-column layout */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>

        {/* Form side */}
        <div style={{ padding: "5rem var(--pad)", borderRight: "1px solid var(--border)" }}>
          <FadeUp>
            <p style={{ fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--earth)", fontWeight: 400, marginBottom: "0.6rem" }}>What to include</p>
            <ul style={{ listStyle: "none", marginBottom: "3rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {["The occasion — wedding, business meeting, date night, casual, something else","Your city — so we can confirm delivery timeline","Your event date or deadline, if you have one","Any colour or fabric preferences you already have"].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "0.8rem", fontSize: "0.72rem", color: "var(--ink2)", fontWeight: 300, lineHeight: 1.8 }}>
                  <span style={{ color: "var(--earth)", fontFamily: "var(--serif)", flexShrink: 0 }}>—</span>{item}
                </li>
              ))}
            </ul>
            <p style={{ fontSize: "0.72rem", color: "var(--ink3)", fontWeight: 300, marginBottom: "3rem", fontStyle: "italic" }}>That's it. We'll guide everything else.</p>

            {sent ? (
              <div style={{ padding: "2rem", background: "var(--bg2)", border: "1px solid var(--border)" }}>
                <p style={{ fontFamily: "var(--serif)", fontSize: "1.1rem", color: "var(--ink)", marginBottom: "0.5rem" }}>We'll be in touch within 24 hours.</p>
                <p style={{ fontSize: "0.72rem", color: "var(--ink2)", lineHeight: 1.9 }}>WhatsApp is open with your message pre-filled. Hit send to reach us directly.</p>
                <button onClick={() => setSent(false)} style={{ marginTop: "1.2rem", fontSize: "0.58rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--earth)", background: "none", border: "none", cursor: "pointer", padding: 0 }}>Send another message</button>
              </div>
            ) : (
              <form onSubmit={submit}>
                <p style={{ fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--earth)", fontWeight: 400, marginBottom: "2rem" }}>Your Commission Message</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 1.5rem" }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input className="form-input" id="name" name="name" type="text" placeholder="Your name" required value={form.name} onChange={handle} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone</label>
                    <input className="form-input" id="phone" name="phone" type="tel" placeholder="+234..." required value={form.phone} onChange={handle} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input className="form-input" id="email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handle} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="message">Your Commission</label>
                  <textarea className="form-textarea" id="message" name="message" placeholder="Tell us your occasion, timeline, and any preferences — we'll take it from there." required value={form.message} onChange={handle} style={{ minHeight: 120 }} />
                </div>
                <button type="submit" className="form-submit">Send Message</button>
                <p style={{ fontSize: "0.58rem", color: "var(--ink3)", marginTop: "0.7rem", letterSpacing: "0.05em" }}>Opens WhatsApp · Response within 24 hours</p>
              </form>
            )}
          </FadeUp>
        </div>

        {/* Info side */}
        <div style={{ padding: "5rem var(--pad)", background: "var(--bg2)" }}>
          <FadeUp>
            {/* Process */}
            <div style={{ marginBottom: "3rem", paddingBottom: "3rem", borderBottom: "1px solid var(--border)" }}>
              <p style={{ fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--earth)", fontWeight: 400, marginBottom: "1.5rem" }}>The Process</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                {[
                  ["You message us", "We respond within 24 hours"],
                  ["Measurements", "We send a guide — takes about 10 minutes at home"],
                  ["Fabric selection", "We share options with photos. You approve"],
                  ["Production", "7–14 days from confirmation"],
                  ["Delivery", "Shipped to your door in Nigeria or worldwide"],
                ].map(([step, desc], i) => (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "28px 1fr", gap: "0.8rem", alignItems: "start" }}>
                    <span style={{ fontFamily: "var(--serif)", fontSize: "0.72rem", color: "var(--earth)", fontWeight: 400 }}>0{i + 1}</span>
                    <div>
                      <strong style={{ display: "block", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink)", fontWeight: 400, marginBottom: "0.15rem" }}>{step}</strong>
                      <span style={{ fontSize: "0.7rem", color: "var(--ink2)", fontWeight: 300 }}>{desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct WhatsApp */}
            <div style={{ marginBottom: "3rem", paddingBottom: "3rem", borderBottom: "1px solid var(--border)" }}>
              <p style={{ fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--earth)", fontWeight: 400, marginBottom: "0.8rem" }}>Direct WhatsApp</p>
              <p style={{ fontFamily: "var(--serif)", fontSize: "1.1rem", color: "var(--ink)", fontWeight: 300, marginBottom: "0.4rem" }}>+234 701 587 0376</p>
              <p style={{ fontSize: "0.7rem", color: "var(--ink2)", fontWeight: 300, lineHeight: 1.8, marginBottom: "1rem" }}>Message us directly at any time. We respond within 24 hours.</p>
              <a href="https://wa.me/2347015870376" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                Open WhatsApp
              </a>
            </div>

            {/* FAQ */}
            <div>
              <p style={{ fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--earth)", fontWeight: 400, marginBottom: "1.5rem" }}>Common Questions</p>
              {faq.map((f, i) => (
                <div key={i} style={{ marginBottom: "1.5rem", paddingBottom: "1.5rem", borderBottom: "1px solid var(--border)" }}>
                  <p style={{ fontFamily: "var(--serif)", fontSize: "0.9rem", color: "var(--ink)", fontWeight: 400, marginBottom: "0.4rem" }}>{f.q}</p>
                  <p style={{ fontSize: "0.7rem", color: "var(--ink2)", lineHeight: 1.8, fontWeight: 300 }}>{f.a}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </>
  );
}
