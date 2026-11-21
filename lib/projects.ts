export const categories = ["Residential", "Commercial", "Hospitality"] as const;

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type Project = {
  slug: string;
  title: string;
  category: (typeof categories)[number];
  summary: string;
  placeholder: boolean;
  tone: "sand" | "clay" | "olive";
  images: ProjectImage[];
  comparison?: { before: ProjectImage; after: ProjectImage };
};

export const projects: Project[] = [
  { slug: "residential-placeholder", title: "Residential placeholder", category: "Residential", summary: "This entry reserves space for residential photography and a project story.", placeholder: true, tone: "sand", images: [] },
  { slug: "commercial-placeholder", title: "Commercial placeholder", category: "Commercial", summary: "This entry reserves space for commercial photography and a project story.", placeholder: true, tone: "clay", images: [] },
  { slug: "hospitality-placeholder", title: "Hospitality placeholder", category: "Hospitality", summary: "This entry reserves space for hospitality photography and a project story.", placeholder: true, tone: "olive", images: [] },
];
