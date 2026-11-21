import Link from "next/link";
import type { ReactNode } from "react";
import { studio } from "@/lib/studio";
import { Reveal } from "./motion";

export function Placeholder({ tone = "sand", label = "Photography placeholder", className = "" }: { tone?: string; label?: string; className?: string }) {
  return (
    <figure className={`placeholder placeholder-${tone} ${className}`}>
      <span className="placeholder-plane" aria-hidden="true" />
      <figcaption>{label}</figcaption>
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
    </footer>
  );
}
