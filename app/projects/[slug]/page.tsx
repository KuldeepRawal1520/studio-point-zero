import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Consultation, PageIntro } from "@/components/editorial";
import { BeforeAfter, Gallery } from "@/components/projects";
import { projects } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) notFound();
  return { title: project.title, description: project.summary, robots: project.conceptual ? { index: false, follow: false } : undefined };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) notFound();
  const { comparison } = project;
  return (
    <>
      <PageIntro label={`${project.category}${project.conceptual ? " · Conceptual portfolio example" : ""}`} title={project.title}>{project.summary}</PageIntro>
      <section className="wrap section project-index" aria-label="Project photographs">
        <Gallery images={project.images} />
        {comparison && <BeforeAfter before={comparison.before} after={comparison.after} />}
        <Link href="/projects" className="text-link">Back to projects</Link>
      </section>
      <Consultation />
    </>
  );
}
