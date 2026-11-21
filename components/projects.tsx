"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { categories, type Project, type ProjectImage } from "@/lib/projects";

export function ProjectGrid({ projects, asymmetric = false }: { projects: Project[]; asymmetric?: boolean }) {
  return (
    <ul className={asymmetric ? "project-grid asymmetric" : "project-grid"}>
      {projects.map((project) => {
        const cover = project.images[0];
        return (
          <li key={project.slug}>
            <Link className="project-card" href={`/projects/${project.slug}`}>
              <div className="portfolio-photo project-cover">
                <Image src={cover.src} alt={cover.alt} fill sizes="(max-width: 720px) 90vw, 46vw" style={{ objectPosition: cover.position }} />
              </div>
              <p className="eyebrow">{project.category}{project.conceptual ? " · Conceptual example" : ""}</p>
              <h3>{project.title}</h3>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function ProjectFilter({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? projects : projects.filter((project) => project.category === filter);
  return (
    <>
      <div className="filter-bar" role="group" aria-label="Project category">
        {["All", ...categories].map((category) => (
          <button key={category} type="button" aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}</button>
        ))}
      </div>
      <p className="sr-only" role="status">{list.length} {list.length === 1 ? "entry" : "entries"}</p>
      <ProjectGrid projects={list} />
    </>
  );
}

export function Gallery({ images }: { images: ProjectImage[] }) {
  const [selected, setSelected] = useState(0);
  const image = images[selected];
  if (!image) return null;
  return (
    <section aria-label="Project gallery">
      <figure>
        <div className="gallery-image"><Image src={image.src} alt={image.alt} fill sizes="(max-width: 1240px) 92vw, 1160px" style={{ objectPosition: image.position }} /></div>
        {image.caption && <figcaption>{image.caption}</figcaption>}
      </figure>
      {images.length > 1 && (
        <div className="gallery-controls">
          <button type="button" onClick={() => setSelected((selected + images.length - 1) % images.length)}>Previous image</button>
          <span role="status">{selected + 1} of {images.length}</span>
          <button type="button" onClick={() => setSelected((selected + 1) % images.length)}>Next image</button>
        </div>
      )}
    </section>
  );
}

export function BeforeAfter({ before, after }: { before: ProjectImage; after: ProjectImage }) {
  const [position, setPosition] = useState(50);
  return (
    <section className="comparison" aria-label="Before-and-after photographs">
      <div className="gallery-image">
        <Image src={before.src} alt={`Before: ${before.alt}`} fill sizes="(max-width: 1240px) 92vw, 1160px" />
        <Image src={after.src} alt={`After: ${after.alt}`} fill sizes="(max-width: 1240px) 92vw, 1160px" style={{ clipPath: `inset(0 0 0 ${position}%)` }} />
      </div>
      <label>Before and after
        <input type="range" min="0" max="100" value={position} aria-valuetext={`${position}% before, ${100 - position}% after`} onChange={(event) => setPosition(Number(event.target.value))} />
      </label>
    </section>
  );
}
