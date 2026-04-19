"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Piece, pieces as staticPieces, getImageSrc, getCategorySlug } from "@/lib/pieces";

interface Props {
  filter?: "all" | "native" | "smart";
  showFilter?: boolean;
  gridClass?: string;
}

export default function CollectionGrid({ filter: initialFilter = "all", showFilter = false, gridClass = "pieces" }: Props) {
  const [pieces, setPieces] = useState<Piece[]>(staticPieces);
  const [activeFilter, setActiveFilter] = useState(initialFilter);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/pieces")
      .then(r => {
        if (!r.ok) throw new Error();
        return r.json();
      })
      .then((data: Piece[]) => {
        if (data && data.length > 0) setPieces(data);
      })
      .catch(() => {
        // Supabase not configured yet — use static fallback silently
      })
      .finally(() => setLoaded(true));
  }, []);

  const filtered = pieces.filter(p => {
    if (activeFilter === "all") return true;
    const slug = p.categorySlug || getCategorySlug(p.category);
    return slug === activeFilter;
  });

  return (
    <div>
      {showFilter && (
        <div className="filters" role="group" aria-label="Filter collection" style={{ marginBottom: "1.5rem" }}>
          {([
            { key: "all", label: "All" },
            { key: "native", label: "Native Formal" },
            { key: "smart", label: "Smart Casual" },
          ] as const).map(({ key, label }) => (
            <button
              key={key}
              className={`filter-btn${activeFilter === key ? " active" : ""}`}
              onClick={() => setActiveFilter(key)}
              aria-pressed={activeFilter === key}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      <div className={gridClass}>
        {filtered.map(p => {
          const imgSrc = getImageSrc(p);
          const msg = `Hello, I'm interested in commissioning ${p.name} (${p.category}) from Astoria. Price listed at ${p.price}. Please share more details.`;
          const waLink = `https://wa.me/2347015870376?text=${encodeURIComponent(msg)}`;

          return (
            <div key={p.id} className="piece">
              <div className="piece-img" style={{ position: "relative" }}>
                <Image
                  src={imgSrc}
                  alt={`${p.name} — ${p.category} by Astoria Abuja`}
                  fill
                  sizes="(max-width:600px) 50vw, (max-width:900px) 50vw, 33vw"
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                  unoptimized={imgSrc.startsWith("http")}
                />
                <div className="piece-overlay">
                  <a href={waLink} target="_blank" rel="noopener noreferrer" className="piece-request">
                    <span className="req-label">Request This Piece</span>
                    <span className="req-arrow">→</span>
                  </a>
                </div>
              </div>
              <div className="piece-meta">
                <div>
                  <p className="piece-name">{p.name}</p>
                  <p className="piece-cat">{p.category}</p>
                </div>
                <span className="piece-price">{p.price}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
