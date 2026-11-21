import type { Metadata } from "next";
import { Consultation, PageIntro, Placeholder } from "@/components/editorial";
import { studio } from "@/lib/studio";

export const metadata: Metadata = { title: "About", description: studio.description };

export default function AboutPage() {
  return (
    <>
      <PageIntro label="The studio" title="Studio Point Zero">{studio.description}</PageIntro>
      <section className="wrap section project-index split">
        <Placeholder tone="olive" label="Studio photography placeholder" />
        <div><p className="eyebrow">Design philosophy</p><h2>Start with the space.</h2><p className="lede">How daylight moves through a room, where things are kept and how people move from one space to the next are questions that shape the design.</p></div>
      </section>
      <section className="tinted"><div className="wrap section">
        <h2>What guides the design</h2>
        <ul className="journey values">
          <li><h3>Everyday use</h3><p>Let the needs of the people using the space guide its layout.</p></li>
          <li><h3>Material character</h3><p>Consider how a finish feels, wears and changes in the light.</p></li>
          <li><h3>Practical detailing</h3><p>Make decisions about fittings, finishes and storage as part of the overall design.</p></li>
        </ul>
      </div></section>
      <section id="founder" className="wrap section split">
        <Placeholder tone="clay" label="Founder portrait placeholder" />
        <div><p className="eyebrow">Founder</p><h2>Nandini Shah</h2><p className="founder-title">FOUNDER & PRINCIPLE ARCHITECT</p><p className="lede">Nandini founded Studio Point Zero in 2022 after completing her academics in the field. Her fascination with the way spaces influence how we live, feel and experience everyday life continues to shape the studio.</p><p>Her approach is rooted in treating each home as her own, with transparency and honesty throughout.</p></div>
      </section>
      <Consultation />
    </>
  );
}
