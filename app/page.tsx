"use client";
import Link from "next/link";
import Image from "next/image";
import FadeUp from "@/components/FadeUp";
import CollectionGrid from "@/components/CollectionGrid";
import CommissionForm from "@/components/CommissionForm";

const WA = "https://wa.me/2347015870376?text=Hello%2C%20I%27d%20like%20to%20commission%20a%20bespoke%20piece%20from%20Astoria.";
const marqueeItems = ["Bespoke Commissions","Native Formal Attire","Smart Casual","Abuja, Nigeria","Made to Measure","Calm Authority","Ships Worldwide","7–14 Days to Completion"];

const events = [
  { title:"Wedding & Owambe", label:"You're in every photograph. Dress accordingly.", cta:"See Wedding Pieces", href:"/shop-by-event/wedding-owambe/", img:"/images/diplomat-model.jpg" },
  { title:"Date Night", label:"She noticed before you said a word.", cta:"See Date Night Pieces", href:"/shop-by-event/date-night/", img:"/images/commander-model.jpg" },
  { title:"Business Meeting", label:"Walk in and change the energy.", cta:"See Business Pieces", href:"/shop-by-event/business-meeting/", img:"/images/sovereign-model.jpg" },
  { title:"Everyday Smart Casual", label:"Too intentional to be casual. Too relaxed to be formal.", cta:"See Everyday Pieces", href:"/shop-by-event/everyday-smart-casual/", img:"/images/IMG_2881.JPG" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <p className="eyebrow">Abuja, Nigeria</p>
          <h1 className="hero-headline">Not worn.<br /><em>Inhabited.</em></h1>
          <p className="hero-sub">Bespoke menswear for the Man — native formal and smart casual, made to measure. Clothing that works as hard as you do, without announcing it.</p>
          <div className="hero-actions">
            <Link className="btn-primary" href="/shop-by-event/">Shop by Occasion</Link>
            <Link className="btn-ghost" href="/commission/"><span>Commission a Piece</span><span className="btn-ghost-line" /></Link>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-img-main">
            <Image src="/images/diplomat-model.jpg" alt="Bespoke agbada by Astoria — Nigerian menswear Abuja" fill priority sizes="50vw" style={{objectFit:"cover",objectPosition:"top center"}} />
            <div className="hero-piece-tag">
              <span className="tag-name">The Abuja Agbada</span>
              <span className="tag-cat">Native Formal</span>
            </div>
          </div>
          <div className="hero-img-sub">
            <div className="hero-img-cell">
              <Image src="/images/commander-model.jpg" alt="Bespoke senator suit — Astoria Nigerian menswear" fill sizes="25vw" style={{objectFit:"cover",objectPosition:"top center"}} />
            </div>
            <div className="hero-img-cell">
              <Image src="/images/IMG_2881.JPG" alt="Bespoke aso-oke set — Astoria Nigerian menswear Abuja" fill sizes="25vw" style={{objectFit:"cover",objectPosition:"top center"}} />
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-strip" aria-hidden="true">
        <div className="marquee-inner">
          {[...marqueeItems,...marqueeItems].map((item,i)=>(
            <span key={i} className="marquee-item">{item} <span className="marquee-dot" /></span>
          ))}
        </div>
      </div>

      {/* STATEMENT */}
      <FadeUp>
        <div className="statement">
          <span className="statement-num">01</span>
          <div>
            <p className="statement-body">Most men dress to be seen.<br />Astoria dresses you to be<br /><em>taken seriously</em> —<br />before you say a word.</p>
            <p className="statement-aside">Every piece is cut from your measurements, sewn by hand, and delivered in 7–14 days. Native agbada, senator suits, kaftan sets — each one built for the rooms you actually need to own.</p>
          </div>
        </div>
      </FadeUp>

      {/* SHOP BY EVENT */}
      <FadeUp>
        <section style={{padding:"5rem var(--pad)",borderBottom:"1px solid var(--border)"}}>
          <div style={{marginBottom:"3rem"}}>
            <p style={{fontSize:"0.6rem",letterSpacing:"0.3em",textTransform:"uppercase",color:"var(--earth)",fontWeight:400,marginBottom:"0.8rem"}}>By Occasion</p>
            <h2 style={{fontFamily:"var(--serif)",fontWeight:300,fontSize:"clamp(1.8rem,3vw,3rem)",color:"var(--ink)",marginBottom:"0.5rem"}}>What's the occasion?</h2>
            <p style={{fontSize:"0.78rem",color:"var(--ink2)",fontWeight:300}}>Every room has a dress code. Some are written. Most aren't.</p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:"2px"}}>
            {events.map(ev=>(
              <Link key={ev.href} href={ev.href} style={{textDecoration:"none",display:"block",background:"var(--bg2)",position:"relative",overflow:"hidden"}}>
                <div style={{width:"100%",aspectRatio:"3/4",position:"relative",overflow:"hidden"}}>
                  <Image src={ev.img} alt={`${ev.title} — Astoria bespoke Nigerian menswear`} fill sizes="25vw" style={{objectFit:"cover",objectPosition:"top center",transition:"transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)"}} />
                  <div style={{position:"absolute",inset:0,background:"linear-gradient(to top,rgba(26,24,20,0.7) 0%,transparent 50%)"}} />
                  <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"1.5rem"}}>
                    <p style={{fontFamily:"var(--serif)",fontSize:"1rem",color:"var(--bg)",fontWeight:400,marginBottom:"0.4rem"}}>{ev.title}</p>
                    <p style={{fontSize:"0.68rem",color:"rgba(250,248,244,0.7)",fontWeight:300,lineHeight:1.6,marginBottom:"1rem"}}>{ev.label}</p>
                    <span style={{fontSize:"0.55rem",letterSpacing:"0.2em",textTransform:"uppercase",color:"var(--bg)",fontWeight:400,borderBottom:"1px solid rgba(250,248,244,0.4)",paddingBottom:"0.2rem"}}>{ev.cta} →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </FadeUp>

      {/* COLLECTION PREVIEW */}
      <FadeUp>
        <section className="collection" id="collection">
          <div className="collection-top">
            <div className="collection-title"><span>Current Works</span>Current Collection</div>
            <Link href="/buy-native-wear-nigeria/" className="btn-ghost"><span>View all pieces</span><span className="btn-ghost-line"/></Link>
          </div>
          <CollectionGrid showFilter={true} gridClass="pieces" />
          <p style={{fontSize:"0.68rem",color:"var(--ink2)",fontWeight:300,lineHeight:1.9,marginTop:"2rem",paddingTop:"2rem",borderTop:"1px solid var(--border)",maxWidth:520}}>Each piece is made once — for you. These are reference styles. Your commission is cut to your measurements and specifications.</p>
        </section>
      </FadeUp>

      {/* PHILOSOPHY */}
      <FadeUp>
        <section className="philosophy">
          <div className="philosophy-image-wrap">
            <div className="philosophy-img" style={{position:"relative"}}>
              <Image src="/images/sovereign-model.jpg" alt="Bespoke tailoring in progress — Astoria Nigerian menswear Abuja" fill sizes="50vw" style={{objectFit:"cover",objectPosition:"top center"}} />
            </div>
            <div className="philosophy-float">
              <p className="philosophy-float-quote">"Built to be worn, not just owned."</p>
              <p className="philosophy-float-attr">The Astoria Principle</p>
            </div>
          </div>
          <div>
            <p className="phil-eyebrow">The Principle</p>
            <h2 className="phil-headline">Your culture is the strength.<br />The cut is the weapon.</h2>
            <div className="phil-body">
              <p>Astoria makes Nigerian menswear that belongs in boardrooms, weddings, and every room that matters — without asking permission to be there.</p>
              <p>We don't do off-the-rack. Every piece is made to your exact measurements, in fabrics chosen for the Nigerian climate and your specific occasion.</p>
              <p><em>You walk in. The room adjusts.</em></p>
            </div>
          </div>
        </section>
      </FadeUp>

      {/* COMMISSION CTA */}
      <FadeUp>
        <section style={{padding:"6rem var(--pad)",background:"var(--ink)"}}>
          <div style={{maxWidth:720,margin:"0 auto",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4rem",alignItems:"start"}}>
            <div>
              <p style={{fontSize:"0.6rem",letterSpacing:"0.3em",textTransform:"uppercase",color:"rgba(250,248,244,0.4)",fontWeight:400,marginBottom:"2rem"}}>The Atelier</p>
              <h2 style={{fontFamily:"var(--serif)",fontWeight:300,fontSize:"clamp(2rem,4vw,3.8rem)",lineHeight:1.05,color:"var(--bg)",marginBottom:"1rem"}}>Made once.<br /><em style={{color:"rgba(250,248,244,0.55)"}}>For you.</em></h2>
              <p style={{fontSize:"0.78rem",color:"rgba(250,248,244,0.55)",fontWeight:300,lineHeight:2,marginBottom:"3rem",maxWidth:340}}>Tell us what you need — native or modern, formal or everyday. We'll handle the rest: measurements, fabric selection, production, and delivery in 7–14 days.</p>
              <div style={{display:"flex",gap:"3rem",paddingTop:"2rem",borderTop:"1px solid rgba(250,248,244,0.08)"}}>
                {[["100%","Made to Measure"],["7–14","Days to Completion"],["24hr","Commission Response"]].map(([n,l])=>(
                  <div key={l}>
                    <span style={{fontFamily:"var(--serif)",fontSize:"1.6rem",color:"rgba(250,248,244,0.7)",fontWeight:300,display:"block"}}>{n}</span>
                    <span style={{fontSize:"0.52rem",letterSpacing:"0.15em",textTransform:"uppercase",color:"rgba(250,248,244,0.3)",fontWeight:300}}>{l}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <CommissionForm dark={true} cta="Send Message" />
            </div>
          </div>
        </section>
      </FadeUp>
    </>
  );
}
