import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Consultation, PageIntro, Placeholder } from "@/components/editorial";
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
  return { title: project.title, description: project.summary, robots: project.placeholder ? { index: false, follow: true } : undefined };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) notFound();
  const { comparison } = project;
  return (
    <>
      <PageIntro label={project.category} title={project.title}>{project.summary}</PageIntro>
      <section className="wrap section project-index" aria-label="Project photographs">
        {project.images.length ? <Gallery images={project.images} /> : <Placeholder className="detail-placeholder" tone={project.tone} />}
        {comparison && <BeforeAfter before={comparison.before} after={comparison.after} />}
        <Link href="/projects" className="text-link">Back to projects</Link>
      </section>
      <Consultation />
    </>
  );
}
