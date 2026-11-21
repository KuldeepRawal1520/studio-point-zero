import type { Metadata } from "next";
import { Consultation, PageIntro } from "@/components/editorial";
import { ProjectFilter } from "@/components/projects";
import { projects } from "@/lib/projects";

export const metadata: Metadata = { title: "Projects", description: "Browse the Studio Point Zero portfolio by project category." };

export default function ProjectsPage() {
  return (
    <>
      <PageIntro label="Portfolio" title="Projects">Browse by type of space. Photography and project stories are forthcoming.</PageIntro>
      <section className="wrap section project-index" aria-label="Portfolio entries"><ProjectFilter projects={projects} /></section>
      <Consultation />
    </>
  );
}
