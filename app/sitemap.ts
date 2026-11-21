import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { siteUrl } from "@/lib/studio";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  if (!base) return [];
  const projectPaths = projects.filter((project) => !project.conceptual).map((project) => `/projects/${project.slug}`);
  return ["/", "/projects", "/services", "/about", "/contact", ...projectPaths].map((path) => ({ url: new URL(path, base).href }));
}
