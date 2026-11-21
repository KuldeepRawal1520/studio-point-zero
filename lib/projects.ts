import { demoImages } from "./demo-images";

export const categories = ["Residential", "Commercial", "Hospitality"] as const;

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  position?: string;
};

export type Project = {
  slug: string;
  title: string;
  category: (typeof categories)[number];
  summary: string;
  conceptual: boolean;
  images: [ProjectImage, ...ProjectImage[]];
  comparison?: { before: ProjectImage; after: ProjectImage };
};

export const projects: Project[] = [
  {
    slug: "residential-concept", title: "Residential interiors", category: "Residential", conceptual: true,
    summary: "A conceptual portfolio example exploring warm living spaces, timber kitchens and restful bedrooms. These independent reference photographs illustrate a design direction.",
    images: [
      { src: demoImages.residential, alt: "Warm daylight on a linen sectional sofa and sculptural teak coffee table beneath a timber ceiling", position: "50% 62%", caption: "Living spaces · conceptual reference" },
      { src: demoImages.kitchen, alt: "Natural timber cabinetry and a veined stone island in a light-filled kitchen", position: "50% 58%", caption: "Kitchen and cabinetry · independent conceptual reference" },
      { src: demoImages.bedroom, alt: "Neutral upholstered bed with timber furnishings, layered bedding and warm bedside lighting", position: "50% 58%", caption: "Restful bedrooms · independent conceptual reference" },
    ],
  },
  {
    slug: "commercial-concept", title: "Workspaces & interiors", category: "Commercial", conceptual: true,
    summary: "A conceptual portfolio example of considered workspaces, warm timber and sculptural lighting. The reference photographs show independent spaces.",
    images: [
      { src: demoImages.office, alt: "Reflective sculptural pendant lights suspended beside warm timber panels and greenery", position: "50% 50%", caption: "Light and timber · conceptual reference" },
      { src: demoImages.lounge, alt: "Contemporary lounge chairs and a timber table beside full-height windows in an office lounge", position: "50% 55%", caption: "Spaces to meet · independent conceptual reference" },
    ],
  },
  {
    slug: "hospitality-concept", title: "Cafés & gathering spaces", category: "Hospitality", conceptual: true,
    summary: "A conceptual portfolio example exploring natural light, inviting seating and material warmth. These photographs are independent references for hospitality interiors.",
    images: [
      { src: demoImages.cafe, alt: "Sunlit contemporary café with a sculptural counter, timber accents and seating beside tall windows", position: "60% 50%", caption: "Café interiors · conceptual reference" },
      { src: demoImages.restaurant, alt: "Curved timber chairs and round tables with soft upholstery beside a sunlit restaurant window", position: "50% 60%", caption: "Furniture and atmosphere · independent conceptual reference" },
    ],
  },
];
