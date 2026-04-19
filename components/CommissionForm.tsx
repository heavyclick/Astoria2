"use client";
import { useState, FormEvent } from "react";

const WA_BASE = "https://wa.me/2347015870376?text=";

interface Props {
  context?: string; // pre-fills message context e.g. "wedding agbada"
  cta?: string;
  dark?: boolean;
}

export default function CommissionForm({ context = "", cta = "Send Message", dark = false }: Props) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  function handle(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    const msg = `*New Commission Enquiry — Astoria*\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n${context ? `Occasion: ${context}\n` : ""}Message: ${form.message}\n\nSent via astoriagallery.online`;
    window.open(WA_BASE + encodeURIComponent(msg), "_blank");
    setSent(true);
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: `1px solid ${dark ? "rgba(250,248,244,0.15)" : "var(--border)"}`,
    padding: "0.7rem 0",
    fontFamily: "var(--sans)",
    fontSize: "0.82rem",
    fontWeight: 300,
    color: dark ? "var(--bg)" : "var(--ink)",
    outline: "none",
    marginBottom: "1.5rem",
    display: "block",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.55rem",
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    color: dark ? "rgba(250,248,244,0.5)" : "var(--earth)",
    fontWeight: 400,
    marginBottom: "0.3rem",
  };

  if (sent) {
    return (
      <div style={{ padding: "1.5rem", background: dark ? "rgba(250,248,244,0.05)" : "var(--bg2)", border: `1px solid ${dark ? "rgba(250,248,244,0.1)" : "var(--border)"}` }}>
        <p style={{ fontFamily: "var(--serif)", fontSize: "1rem", color: dark ? "var(--bg)" : "var(--ink)", marginBottom: "0.5rem" }}>We'll be in touch within 24 hours.</p>
        <p style={{ fontSize: "0.68rem", color: dark ? "rgba(250,248,244,0.5)" : "var(--ink2)" }}>WhatsApp has opened with your message. Hit send to reach us directly.</p>
        <button onClick={() => setSent(false)} style={{ marginTop: "1rem", fontSize: "0.58rem", letterSpacing: "0.15em", textTransform: "uppercase", color: dark ? "rgba(250,248,244,0.5)" : "var(--ink2)", background: "none", border: "none", cursor: "pointer", padding: 0 }}>Send another message</button>
      </div>
    );
  }

  return (
    <form onSubmit={submit}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 1.5rem" }}>
        <div>
          <label style={labelStyle}>Name</label>
          <input name="name" type="text" placeholder="Your name" required value={form.name} onChange={handle} style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Phone</label>
          <input name="phone" type="tel" placeholder="+234..." required value={form.phone} onChange={handle} style={inputStyle} />
        </div>
      </div>
      <div>
        <label style={labelStyle}>Email</label>
        <input name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handle} style={inputStyle} />
      </div>
      <div>
        <label style={labelStyle}>Message</label>
        <textarea
          name="message"
          placeholder={context ? `Tell us your timeline, colour preference, and any other details for your ${context}.` : "Tell us your occasion, timeline, and any preferences — we'll take it from there."}
          required
          value={form.message}
          onChange={handle}
          style={{ ...inputStyle, resize: "none", minHeight: 90, marginBottom: "1.5rem" }}
        />
      </div>
      <button type="submit" style={{
        width: "100%",
        padding: "0.9rem",
        background: dark ? "var(--bg)" : "var(--ink)",
        color: dark ? "var(--ink)" : "var(--bg)",
        fontFamily: "var(--sans)",
        fontSize: "0.6rem",
        letterSpacing: "0.28em",
        textTransform: "uppercase",
        fontWeight: 400,
        border: "none",
        cursor: "pointer",
      }}>
        {cta}
      </button>
      <p style={{ fontSize: "0.58rem", color: dark ? "rgba(250,248,244,0.35)" : "var(--ink3)", marginTop: "0.7rem", letterSpacing: "0.05em" }}>
        Opens WhatsApp with your message pre-filled · Response within 24 hours
      </p>
    </form>
  );
}
