import Link from "next/link";
import { Consultation, Placeholder } from "@/components/editorial";
import { Reveal } from "@/components/motion";
import { ProjectGrid } from "@/components/projects";
import { projects } from "@/lib/projects";
import { journey, services, studio } from "@/lib/studio";

export default function Home() {
  return (
    <>
      <section className="hero">
        <Placeholder className="hero-art" label="Hero photography placeholder" />
        <div className="wrap hero-content">
          <p className="eyebrow">Interior design & turnkey solutions · Ahmedabad</p>
          <h1>Spaces shaped<br /> <em>around you.</em></h1>
          <Link href="/projects" className="button button-light">Explore the portfolio</Link>
        </div>
      </section>
      <section className="wrap section">
        <Reveal className="split">
          <div><p className="eyebrow">The studio</p><h2>Begin with<br /> the way you live.</h2></div>
          <div className="body-copy"><p>{studio.description} Each brief begins with the people who use a space and the routines it needs to support.</p><Link className="text-link" href="/about">About Studio Point Zero</Link></div>
        </Reveal>
      </section>
      <section className="wrap section section-rule">
        <Reveal className="section-heading"><div><p className="eyebrow">Portfolio</p><h2>Featured projects</h2></div><Link className="text-link" href="/projects">View all categories</Link></Reveal>
        <ProjectGrid projects={projects.slice(0, 2)} asymmetric />
      </section>
      <section className="tinted">
        <Reveal className="wrap section split philosophy">
          <Placeholder tone="olive" label="Material study placeholder" />
          <div><p className="eyebrow">Design philosophy</p><h2>Make room for the essentials.</h2><p className="lede">Light, proportion and material can change how a room feels. We use them to give the things you do every day a place of their own.</p></div>
        </Reveal>
      </section>
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
        <Placeholder tone="clay" label="Founder portrait placeholder" />
        <div><p className="eyebrow">The founder</p><h2>Meet the studio.</h2><p className="lede">Founder profile forthcoming.</p><Link href="/about#founder" className="text-link">Visit the founder section</Link></div>
      </section>
      <Consultation />
    </>
  );
}
