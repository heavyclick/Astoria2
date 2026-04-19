"use client";
import { useState, useEffect, useRef, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Piece {
  id: string;
  name: string;
  category: "Native Formal" | "Smart Casual";
  price: string;
  price_value: number | null;
  image_url: string;
  image_path: string | null;
  description: string | null;
  details: string[];
  published: boolean;
  sort_order: number;
  created_at: string;
}

const EMPTY_FORM = {
  name: "",
  category: "Native Formal" as "Native Formal" | "Smart Casual",
  price: "",
  price_value: "",
  description: "",
  details: "",
  published: true,
  sort_order: "0",
};

export default function AdminPiecesPage() {
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);

  const [pieces, setPieces] = useState<Piece[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState({ ...EMPTY_FORM });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Load pieces
  async function loadPieces() {
    setLoading(true);
    const res = await fetch("/api/pieces");
    if (res.status === 401) { router.push("/admin/login"); return; }
    const data = await res.json();
    setPieces(data);
    setLoading(false);
  }

  useEffect(() => { loadPieces(); }, []);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  }

  function openAdd() {
    setEditingId(null);
    setForm({ ...EMPTY_FORM });
    setImageFile(null);
    setImagePreview(null);
    setError(""); setSuccess("");
    setShowForm(true);
  }

  function openEdit(p: Piece) {
    setEditingId(p.id);
    setForm({
      name: p.name,
      category: p.category as "Native Formal" | "Smart Casual",
      price: p.price,
      price_value: p.price_value?.toString() || "",
      description: p.description || "",
      details: p.details.join("\n"),
      published: p.published,
      sort_order: p.sort_order.toString(),
    });
    setImageFile(null);
    setImagePreview(p.image_url);
    setError(""); setSuccess("");
    setShowForm(true);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(""); setSuccess("");

    try {
      let image_url = imagePreview || "";
      let image_path: string | null = null;

      // Upload new image if selected
      if (imageFile) {
        setUploadProgress("Uploading image...");
        const fd = new FormData();
        fd.append("file", imageFile);
        const upRes = await fetch("/api/upload", { method: "POST", body: fd });
        if (!upRes.ok) {
          const upData = await upRes.json();
          setError(upData.error || "Image upload failed");
          setSubmitting(false);
          setUploadProgress("");
          return;
        }
        const upData = await upRes.json();
        image_url = upData.url;
        image_path = upData.path;
        setUploadProgress("");
      }

      if (!image_url) { setError("Please select an image"); setSubmitting(false); return; }

      const payload = {
        name: form.name,
        category: form.category,
        price: form.price,
        price_value: form.price_value ? parseInt(form.price_value) : null,
        image_url,
        ...(image_path ? { image_path } : {}),
        description: form.description || null,
        details: form.details.split("\n").map(d => d.trim()).filter(Boolean),
        published: form.published,
        sort_order: parseInt(form.sort_order) || 0,
      };

      const url = editingId ? `/api/pieces/${editingId}` : "/api/pieces";
      const method = editingId ? "PATCH" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const d = await res.json();
        setError(d.error || "Failed to save piece");
      } else {
        setSuccess(editingId ? "Piece updated." : "Piece added.");
        setShowForm(false);
        loadPieces();
      }
    } catch (err) {
      setError("Unexpected error. Try again.");
    }
    setSubmitting(false);
  }

  async function togglePublished(p: Piece) {
    await fetch(`/api/pieces/${p.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ published: !p.published }),
    });
    loadPieces();
  }

  async function handleDelete(p: Piece) {
    if (!confirm(`Delete "${p.name}"? This cannot be undone.`)) return;
    const res = await fetch(`/api/pieces/${p.id}`, { method: "DELETE" });
    if (res.ok) {
      setSuccess(`"${p.name}" deleted.`);
      loadPieces();
    } else {
      setError("Delete failed.");
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  const toggleBtn = (pub: boolean): React.CSSProperties => ({
    fontSize: "0.55rem", letterSpacing: "0.15em", textTransform: "uppercase" as const,
    color: pub ? "var(--earth)" : "var(--ink3)", background: "none",
    border: `1px solid ${pub ? "rgba(10,42,18,0.3)" : "var(--border)"}`,
    padding: "0.4rem 0.9rem", cursor: "pointer",
  });

  const banner = (type: "success" | "error"): React.CSSProperties => ({
    padding: "0.8rem 1rem",
    background: type === "success" ? "var(--earth)" : "#8B1A1A",
    color: "#fff",
    fontSize: "0.7rem",
    letterSpacing: "0.05em",
    marginBottom: "1.5rem",
  });

  const s: Record<string, React.CSSProperties> = {
    wrap: { minHeight: "100vh", background: "var(--bg2)", fontFamily: "var(--sans)" },
    topbar: { background: "var(--bg)", borderBottom: "1px solid var(--border)", padding: "1rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center" },
    logo: { fontFamily: "var(--serif)", fontSize: "1rem", letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "var(--ink)", fontWeight: 400 },
    topRight: { display: "flex", alignItems: "center", gap: "1.5rem" },
    logoutBtn: { fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "var(--ink2)", background: "none", border: "none", cursor: "pointer", fontWeight: 300 },
    main: { padding: "2rem" },
    header: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" },
    title: { fontFamily: "var(--serif)", fontSize: "1.6rem", fontWeight: 300, color: "var(--ink)" },
    addBtn: { padding: "0.7rem 1.8rem", background: "var(--ink)", color: "var(--bg)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase" as const, border: "none", cursor: "pointer", fontWeight: 400 },
    grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1px", background: "var(--border)" },
    card: { background: "var(--bg)", padding: "0", overflow: "hidden" },
    cardImg: { width: "100%", aspectRatio: "3/2", position: "relative" as const, background: "var(--bg2)", overflow: "hidden" },
    cardBody: { padding: "1rem" },
    cardName: { fontFamily: "var(--serif)", fontSize: "1rem", fontWeight: 400, color: "var(--ink)", marginBottom: "0.2rem" },
    cardMeta: { fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "var(--ink3)", marginBottom: "0.8rem" },
    cardPrice: { fontFamily: "var(--serif)", fontSize: "0.9rem", color: "var(--earth)", fontWeight: 400, marginBottom: "0.8rem" },
    cardActions: { display: "flex", gap: "0.5rem", borderTop: "1px solid var(--border)", paddingTop: "0.8rem", flexWrap: "wrap" as const },
    editBtn: { fontSize: "0.55rem", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "var(--ink)", background: "none", border: "1px solid var(--border)", padding: "0.4rem 0.9rem", cursor: "pointer" },
    deleteBtn: { fontSize: "0.55rem", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "#8B1A1A", background: "none", border: "1px solid rgba(139,26,26,0.2)", padding: "0.4rem 0.9rem", cursor: "pointer" },

    overlay: { position: "fixed" as const, inset: 0, background: "rgba(26,24,20,0.5)", zIndex: 200, display: "flex", alignItems: "flex-start", justifyContent: "flex-end" },
    drawer: { background: "var(--bg)", width: "100%", maxWidth: 520, height: "100vh", overflowY: "auto" as const, padding: "2rem", boxShadow: "-4px 0 24px rgba(26,24,20,0.1)" },
    drawerTitle: { fontFamily: "var(--serif)", fontSize: "1.4rem", fontWeight: 300, color: "var(--ink)", marginBottom: "0.3rem" },
    drawerSub: { fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: "var(--ink3)", marginBottom: "2rem" },
    closeBtn: { background: "none", border: "none", fontSize: "1.2rem", color: "var(--ink2)", cursor: "pointer", float: "right" as const, marginTop: "-0.2rem" },
    imgUploadArea: { border: "1px dashed var(--border)", padding: "0", cursor: "pointer", position: "relative" as const, marginBottom: "0", background: "var(--bg2)", overflow: "hidden" },
    imgPreview: { width: "100%", aspectRatio: "1", position: "relative" as const, background: "var(--bg2)" },
    imgPlaceholder: { width: "100%", aspectRatio: "1", display: "flex", flexDirection: "column" as const, alignItems: "center", justifyContent: "center", gap: "0.5rem", color: "var(--ink3)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase" as const, minHeight: 160 },
    checkWrap: { display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "0.5rem" },
    submitBtn: { width: "100%", padding: "1rem", background: submitting ? "var(--ink2)" : "var(--ink)", color: "var(--bg)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase" as const, border: "none", cursor: submitting ? "not-allowed" : "pointer", marginTop: "1.5rem" },
    empty: { textAlign: "center" as const, padding: "6rem 2rem", color: "var(--ink3)", fontSize: "0.75rem", letterSpacing: "0.1em" },
    unpubBadge: { display: "inline-block", padding: "0.2rem 0.5rem", background: "rgba(176,170,162,0.2)", fontSize: "0.5rem", letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "var(--ink3)", marginLeft: "0.5rem" },
  };

  return (
    <div style={s.wrap}>
      {/* Topbar */}
      <div style={s.topbar}>
        <span style={s.logo}>Astoria</span>
        <div style={s.topRight}>
          <span style={{ fontSize: "0.6rem", color: "var(--ink3)", letterSpacing: "0.1em" }}>Admin</span>
          <button style={s.logoutBtn} onClick={handleLogout}>Sign Out</button>
        </div>
      </div>

      <div style={s.main}>
        <div style={s.header}>
          <div>
            <h1 style={s.title}>Collection</h1>
            <p style={{ fontSize: "0.65rem", color: "var(--ink3)", letterSpacing: "0.1em", marginTop: "0.2rem" }}>{pieces.length} piece{pieces.length !== 1 ? "s" : ""} total</p>
          </div>
          <button style={s.addBtn} onClick={openAdd}>+ Add Piece</button>
        </div>

        {success && <div style={banner("success")}>{success}</div>}
        {error && !showForm && <div style={banner("error")}>{error}</div>}

        {loading ? (
          <div style={s.empty}>Loading collection...</div>
        ) : pieces.length === 0 ? (
          <div style={s.empty}>
            <p>No pieces yet.</p>
            <p style={{ marginTop: "0.5rem" }}>Click "Add Piece" to get started.</p>
          </div>
        ) : (
          <div style={s.grid}>
            {pieces.map(p => (
              <div key={p.id} style={s.card}>
                <div style={s.cardImg}>
                  <Image
                    src={p.image_url}
                    alt={p.name}
                    fill
                    sizes="300px"
                    style={{ objectFit: "cover", objectPosition: "top center" }}
                    unoptimized
                  />
                  {!p.published && (
                    <div style={{ position: "absolute", top: "0.6rem", left: "0.6rem", background: "rgba(26,24,20,0.7)", padding: "0.3rem 0.6rem" }}>
                      <span style={{ fontSize: "0.5rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#fff" }}>Hidden</span>
                    </div>
                  )}
                </div>
                <div style={s.cardBody}>
                  <p style={s.cardName}>{p.name}</p>
                  <p style={s.cardMeta}>{p.category}</p>
                  <p style={s.cardPrice}>{p.price}</p>
                  {p.description && <p style={{ fontSize: "0.68rem", color: "var(--ink2)", lineHeight: 1.7, marginBottom: "0.8rem" }}>{p.description.slice(0, 80)}{p.description.length > 80 ? "…" : ""}</p>}
                  <div style={s.cardActions}>
                    <button style={s.editBtn} onClick={() => openEdit(p)}>Edit</button>
                    <button style={toggleBtn(p.published)} onClick={() => togglePublished(p)}>{p.published ? "Hide" : "Publish"}</button>
                    <button style={s.deleteBtn} onClick={() => handleDelete(p)}>Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Slide-in drawer form */}
      {showForm && (
        <div style={s.overlay} onClick={(e) => { if (e.target === e.currentTarget) setShowForm(false); }}>
          <div style={s.drawer}>
            <button style={s.closeBtn} onClick={() => setShowForm(false)}>✕</button>
            <h2 style={s.drawerTitle}>{editingId ? "Edit Piece" : "Add New Piece"}</h2>
            <p style={s.drawerSub}>{editingId ? "Update piece details" : "Fill in the details — all fields with * are required"}</p>

            {error && <div style={{ ...banner("error"), marginBottom: "1.5rem" }}>{error}</div>}

            <form onSubmit={handleSubmit}>
              {/* Image upload */}
              <div className="form-group">
                <label className="form-label">Photo *</label>
                <div
                  style={s.imgUploadArea}
                  onClick={() => fileRef.current?.click()}
                  title="Click to upload image"
                >
                  {imagePreview ? (
                    <div style={s.imgPreview}>
                      <Image src={imagePreview} alt="Preview" fill sizes="520px" style={{ objectFit: "cover", objectPosition: "top center" }} unoptimized />
                      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "rgba(26,24,20,0.5)", padding: "0.5rem", textAlign: "center" }}>
                        <span style={{ fontSize: "0.55rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#fff" }}>Click to change</span>
                      </div>
                    </div>
                  ) : (
                    <div style={s.imgPlaceholder}>
                      <span style={{ fontSize: "2rem", color: "var(--ink3)" }}>+</span>
                      <span>Click to upload photo</span>
                      <span style={{ fontSize: "0.6rem", opacity: 0.6 }}>JPEG, PNG or WebP · Max 5MB</span>
                    </div>
                  )}
                </div>
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/jpeg,image/jpg,image/png,image/webp"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                {uploadProgress && <p style={{ fontSize: "0.65rem", color: "var(--earth)", marginTop: "0.5rem", letterSpacing: "0.08em" }}>{uploadProgress}</p>}
                <p style={{ fontSize: "0.58rem", color: "var(--ink3)", marginTop: "0.5rem" }}>Tip: compress at squoosh.app before uploading for faster load times.</p>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="name">Piece Name *</label>
                <input className="form-input" id="name" name="name" type="text" placeholder="e.g. The Abuja Agbada" required value={form.name} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="category">Category *</label>
                <select className="form-select" id="category" name="category" value={form.category} onChange={handleChange}>
                  <option value="Native Formal">Native Formal</option>
                  <option value="Smart Casual">Smart Casual</option>
                </select>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="price">Display Price *</label>
                  <input className="form-input" id="price" name="price" type="text" placeholder="₦185,000" required value={form.price} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="price_value">Numeric Value</label>
                  <input className="form-input" id="price_value" name="price_value" type="number" placeholder="185000" value={form.price_value} onChange={handleChange} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="description">Description</label>
                <textarea className="form-textarea" id="description" name="description" placeholder="Short description of the piece — what it is, who it's for." value={form.description} onChange={handleChange} style={{ minHeight: 80 }} />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="details">Details (one per line)</label>
                <textarea className="form-textarea" id="details" name="details" placeholder={"Hand-embroidered neckline\nPremium aso-oke fabric\nThree-piece set\nCustom fit — 7–14 days"} value={form.details} onChange={handleChange} style={{ minHeight: 100 }} />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", alignItems: "end" }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label" htmlFor="sort_order">Sort Order</label>
                  <input className="form-input" id="sort_order" name="sort_order" type="number" placeholder="0" value={form.sort_order} onChange={handleChange} />
                  <p style={{ fontSize: "0.55rem", color: "var(--ink3)", marginTop: "0.3rem" }}>Lower = appears first</p>
                </div>
                <div style={s.checkWrap}>
                  <input
                    type="checkbox"
                    id="published"
                    name="published"
                    checked={form.published}
                    onChange={handleChange}
                    style={{ accentColor: "var(--earth)", width: 14, height: 14 }}
                  />
                  <label htmlFor="published" style={{ fontSize: "0.65rem", letterSpacing: "0.1em", color: "var(--ink2)", cursor: "pointer" }}>
                    Published (visible on site)
                  </label>
                </div>
              </div>

              <button type="submit" style={s.submitBtn} disabled={submitting}>
                {submitting ? "Saving..." : editingId ? "Update Piece" : "Add to Collection"}
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                style={{ width: "100%", padding: "0.8rem", background: "transparent", color: "var(--ink2)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", border: "1px solid var(--border)", cursor: "pointer", marginTop: "0.5rem" }}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
