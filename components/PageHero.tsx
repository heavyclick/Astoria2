interface PageHeroProps {
  eyebrow: string;
  headline: string | React.ReactNode;
  sub?: string;
  children?: React.ReactNode;
}

export default function PageHero({ eyebrow, headline, sub, children }: PageHeroProps) {
  return (
    <div className="page-hero">
      <p className="page-hero-eyebrow">{eyebrow}</p>
      <h1>{headline}</h1>
      {sub && <p className="page-hero-sub">{sub}</p>}
      {children}
    </div>
  );
}
