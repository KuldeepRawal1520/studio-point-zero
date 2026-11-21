import type { Metadata } from "next";
import { Consultation, PageIntro } from "@/components/editorial";
import { services, journey } from "@/lib/studio";

export const metadata: Metadata = { title: "Services", description: "Interior design, turnkey solutions, custom furniture and modular kitchens in Ahmedabad." };

export default function ServicesPage() {
  return (
    <>
      <PageIntro label="What we do" title="Interior design services">Explore design and execution for homes, workplaces and hospitality spaces.</PageIntro>
      <section className="wrap section project-index" aria-label="Studio services">
        <ul className="service-list">{services.map((service) => <li key={service.name}><h2>{service.name}</h2><p>{service.description}</p></li>)}</ul>
      </section>
      <section className="tinted">
        <div className="wrap section"><h2>The turnkey design journey</h2>
          <ol className="journey">{journey.map((step) => <li key={step.name}><h3>{step.name}</h3><p>{step.description}</p></li>)}</ol>
        </div>
      </section>
      <Consultation />
    </>
  );
}
