import Image from "next/image";
import Link from "next/link";
import { MaterialExperience } from "./material-experience";

const conceptPhoto = "https://images.pexels.com/photos/28576394/pexels-photo-28576394.jpeg";
const detailPhoto = "https://images.pexels.com/photos/37872783/pexels-photo-37872783.jpeg";

export function HomeOpening() {
  return (
    <>
      <section className="cinema-hero" aria-labelledby="cinema-title">
        <div className="cinema-image"><Image src={conceptPhoto} alt="Sunlight falls across a curved ivory sofa, textured wall and sculptural stone coffee table" fill sizes="100vw" preload quality={85} /></div>
        <div className="cinema-scrim" />
        <div className="wrap cinema-copy">
          <p className="eyebrow">Studio Point Zero · Ahmedabad</p>
          <h1 id="cinema-title">A home.<br />A feeling.<br /><em>Entirely yours.</em></h1>
          <p>Thoughtfully designed.<br />Deeply personal.</p>
          <Link href="/contact" className="cinema-link">Begin a conversation</Link>
        </div>
        <div className="cinema-footnote wrap"><a href="#studio-philosophy">Discover the studio</a></div>
      </section>
      <section className="studio-editorial wrap" id="studio-philosophy" aria-labelledby="philosophy-heading">
        <div className="editorial-intro"><p className="eyebrow">A personal approach to space</p><h2 id="philosophy-heading">Your home.<br /><em>Our own kind of care.</em></h2></div>
        <figure className="editorial-main-image"><div><Image src={conceptPhoto} alt="Concept interior with textured plaster, soft upholstery and natural stone in warm daylight" fill sizes="(max-width: 720px) 90vw, 48vw" quality={80} /></div></figure>
        <div className="editorial-story"><span className="editorial-rule" aria-hidden="true" /><p className="editorial-lead">A home is often made once in a lifetime. It deserves to be treated like our own.</p><p>That belief guides Nandini Shah and Studio Point Zero. From the way a room works to the detail your hand meets every day, we approach each decision with care, transparency and honesty.</p><Link href="/about" className="text-link">The story behind the studio</Link></div>
        <figure className="editorial-detail-image"><div><Image src={detailPhoto} alt="Concept interior detail with warm sunlight on an ivory sofa and timber frame" fill sizes="(max-width: 720px) 45vw, 23vw" quality={80} /></div></figure>
        <p className="editorial-closing">Function with intention.<br />Beauty with meaning.</p>
      </section>
      <MaterialExperience />
    </>
  );
}
