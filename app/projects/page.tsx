import type { Metadata } from "next";
import { Consultation, PageIntro } from "@/components/editorial";
import { ProjectFilter } from "@/components/projects";
import { projects } from "@/lib/projects";

export const metadata: Metadata = { title: "Concept Portfolio", description: "Explore conceptual interior references by category for the Studio Point Zero design demonstration." };

export default function ProjectsPage() {
  return (
    <>
      <PageIntro label="Concept portfolio" title="Spaces to imagine.">Explore conceptual examples by type of space. Each collection brings together independent reference photographs for this design demonstration.</PageIntro>
      <section className="wrap section project-index" aria-label="Portfolio entries"><ProjectFilter projects={projects} /></section>
      <Consultation />
    </>
  );
}
