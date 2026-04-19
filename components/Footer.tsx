import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-brand-col">
          <p className="footer-brand">Astoria</p>
          <p className="footer-tagline">Bespoke menswear for the man who walks in and the room adjusts.<br />Abuja, Nigeria.</p>
        </div>
        <div>
          <p className="footer-col-title">Collection</p>
          <ul className="footer-links">
            <li><Link href="/buy-agbada-nigeria/">Buy Agbada in Nigeria</Link></li>
            <li><Link href="/buy-native-wear-nigeria/">Buy Native Wear</Link></li>
            <li><Link href="/shop-african-wear-for-men/">African Wear for Men</Link></li>
            <li><Link href="/buy-nigerian-native-clothes-online/">Buy Online</Link></li>
          </ul>
        </div>
        <div>
          <p className="footer-col-title">By Occasion</p>
          <ul className="footer-links">
            <li><Link href="/shop-by-event/wedding-owambe/">Wedding & Owambe</Link></li>
            <li><Link href="/shop-by-event/date-night/">Date Night</Link></li>
            <li><Link href="/shop-by-event/business-meeting/">Business Meeting</Link></li>
            <li><Link href="/shop-by-event/everyday-smart-casual/">Everyday Smart Casual</Link></li>
          </ul>
        </div>
        <div>
          <p className="footer-col-title">Astoria</p>
          <ul className="footer-links">
            <li><Link href="/commission/">Commission</Link></li>
            <li><Link href="/about/">About</Link></li>
            <li><Link href="/blog/">Blog</Link></li>
            <li><a href="https://instagram.com/astoriagallery" target="_blank" rel="noopener noreferrer">@astoriagallery (Instagram)</a></li>
            <li><a href="https://tiktok.com/@astoriagallery" target="_blank" rel="noopener noreferrer">@astoriagallery (TikTok)</a></li>
            <li><a href="https://wa.me/2347015870376" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
          </ul>
        </div>
      </footer>
      <div className="footer-bottom">
        <p className="footer-copy">© {new Date().getFullYear()} Astoria. All rights reserved. · Made in Abuja</p>
        <p className="footer-copy">astoriagallery.online</p>
      </div>
    </>
  );
}
