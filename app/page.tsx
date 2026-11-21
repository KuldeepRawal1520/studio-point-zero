import Link from "next/link";
import { HomeOpening } from "@/components/home-opening";
import { SpatialStudy } from "@/components/spatial-study";
import { Consultation, EditorialPhoto } from "@/components/editorial";
import { demoImages } from "@/lib/demo-images";
import { Reveal } from "@/components/motion";
import { ProjectGrid } from "@/components/projects";
import { projects } from "@/lib/projects";
import { journey, services } from "@/lib/studio";

export default function Home() {
  return (
    <>
      <HomeOpening />
      <section className="wrap section section-rule">
        <Reveal className="section-heading"><div><p className="eyebrow">Concept portfolio</p><h2>Spaces to imagine.</h2></div><Link className="text-link" href="/projects">View all categories</Link></Reveal>
        <ProjectGrid projects={projects.slice(0, 2)} asymmetric />
      </section>
      <SpatialStudy />
      <section className="wrap section split">
        <div><p className="eyebrow">Services</p><h2>Design through execution.</h2></div>
        <div>
          <ul className="line-list">{services.map((service) => <li key={service.name}>{service.name}</li>)}</ul>
          <Link href="/services" className="text-link">Explore our services</Link>
        </div>
      </section>
      <section className="wrap section section-rule">
        <p className="eyebrow">The turnkey design journey</p><h2>From brief to handover.</h2>
        <ol className="journey">{journey.map((step) => <li key={step.name}><h3>{step.name}</h3><p>{step.description}</p></li>)}</ol>
      </section>
      <section className="wrap section section-rule split">
        <EditorialPhoto src={demoImages.desk} alt="Illustrative workspace with a timber desk, shelves and greenery beside a softly lit window" position="50% 58%" />
        <div><p className="eyebrow">The founder</p><h2>Nandini Shah</h2><p className="founder-title">FOUNDER & PRINCIPLE ARCHITECT</p><p className="lede">Fascinated by how spaces influence everyday life, Nandini founded Studio Point Zero in 2022. Every home is approached with the care of making her own.</p><Link href="/about#founder" className="text-link">Discover the studio story</Link></div>
      </section>
      <Consultation />
    </>
  );
}
