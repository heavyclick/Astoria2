"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push("/admin/pieces");
    } else {
      const data = await res.json();
      setError(data.error || "Login failed");
    }
    setLoading(false);
  }

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--bg)",
      padding: "2rem",
    }}>
      <div style={{ width: "100%", maxWidth: 380 }}>
        <p style={{
          fontFamily: "var(--serif)",
          fontSize: "1.4rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "var(--ink)",
          marginBottom: "0.5rem",
          fontWeight: 400,
        }}>
          Astoria
        </p>
        <p style={{
          fontSize: "0.6rem",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "var(--ink3)",
          fontWeight: 300,
          marginBottom: "3rem",
        }}>
          Admin Access
        </p>

        {error && (
          <div style={{
            padding: "0.8rem 1rem",
            background: "#8B1A1A",
            color: "#fff",
            fontSize: "0.7rem",
            letterSpacing: "0.05em",
            marginBottom: "1.5rem",
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input
              className="form-input"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@astoriagallery.online"
              required
              autoComplete="email"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="password">Password</label>
            <input
              className="form-input"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="form-submit"
            disabled={loading}
            style={{ marginTop: "2rem", opacity: loading ? 0.6 : 1 }}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p style={{
          marginTop: "2rem",
          fontSize: "0.58rem",
          color: "var(--ink3)",
          letterSpacing: "0.1em",
          textAlign: "center",
        }}>
          This page is not linked from the public site.
        </p>
      </div>
    </div>
  );
}
