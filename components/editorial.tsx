import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { studio } from "@/lib/studio";
import { Reveal } from "./motion";
import { SocialLinks } from "./social-links";

export function EditorialPhoto({ src, alt, position = "50% 50%" }: { src: string; alt: string; position?: string }) {
  return (
    <figure className="editorial-photo">
      <Image src={src} alt={alt} fill sizes="(max-width: 720px) 90vw, 45vw" style={{ objectPosition: position }} />
    </figure>
  );
}

export function PageIntro({ label, title, children }: { label: string; title: string; children: ReactNode }) {
  return (
    <section className="wrap page-intro">
      <p className="eyebrow">{label}</p>
      <h1>{title}</h1>
      <p className="lede">{children}</p>
    </section>
  );
}

export function Consultation() {
  return (
    <section className="consultation">
      <Reveal className="wrap consultation-inner">
        <div><p className="eyebrow">Consultation</p><h2>Tell us about your space.</h2></div>
        <Link href="/contact" className="button button-light">Start an enquiry</Link>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="wrap footer">
      <Link href="/" className="wordmark">STUDIO <span>POINT ZERO</span></Link>
      <p>{studio.location}</p>
      <Link href="/contact" className="text-link">Contact the studio</Link>
      <SocialLinks />
      <p className="demo-imagery-note">Selected imagery is for design demonstration purposes. Original Studio Point Zero project photography will be added soon.</p>
    </footer>
  );
}
