import Link from "next/link";
import Image from "next/image";

interface PieceProps {
  name: string;
  category: string;
  price: string;
  image: string;
  slug: string;
  whatsappMsg?: string;
}

const WA_BASE = "https://wa.me/2347015870376?text=";

export default function PieceCard({ name, category, price, image, slug, whatsappMsg }: PieceProps) {
  const msg = whatsappMsg || `Hello, I'm interested in commissioning ${name} (${category}) from Astoria. Please share more details.`;
  const waLink = WA_BASE + encodeURIComponent(msg);

  return (
    <div className="piece" data-cat={slug}>
      <div className="piece-img">
        <Image
          src={image}
          alt={`${name} — ${category} by Astoria Abuja`}
          fill
          sizes="(max-width: 600px) 50vw, (max-width: 900px) 33vw, 33vw"
          style={{ objectFit: "cover", objectPosition: "top center" }}
        />
        <div className="piece-overlay">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="piece-request"
          >
            <span className="req-label">Request This Piece</span>
            <span className="req-arrow">→</span>
          </a>
        </div>
      </div>
      <div className="piece-meta">
        <div>
          <p className="piece-name">{name}</p>
          <p className="piece-cat">{category}</p>
        </div>
        <span className="piece-price">{price}</span>
      </div>
    </div>
  );
}
