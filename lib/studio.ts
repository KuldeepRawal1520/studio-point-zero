export const studio = {
  name: "Studio Point Zero",
  location: "Ahmedabad, India",
  description: "An interior design and turnkey solutions studio based in Ahmedabad, India.",
  phone: process.env.STUDIO_PHONE?.trim(),
  email: process.env.STUDIO_EMAIL?.trim(),
  whatsapp: process.env.STUDIO_WHATSAPP?.replace(/\D/g, ""),
  mapsUrl: process.env.STUDIO_MAPS_URL?.trim(),
};

export const services = [
  { name: "Residential interiors", description: "Consider how each room supports the rhythms of everyday life, from the first floor plan to the finishing details." },
  { name: "Turnkey interior solutions", description: "Bring design decisions, materials and site execution into a single project brief." },
  { name: "Custom furniture & modular kitchens", description: "Shape storage, work surfaces and built-in furniture around the dimensions of the room and the way it is used." },
  { name: "Commercial & hospitality spaces", description: "Plan interiors around how guests, customers and staff arrive, move and spend time in a space." },
];

export const journey = [
  { name: "Discovery", description: "Discuss the space, how it needs to work and what matters most." },
  { name: "Design", description: "Develop the layout, material palette and details together." },
  { name: "Execution", description: "Translate the design into on-site work, with decisions coordinated along the way." },
  { name: "Handover", description: "Walk through the finished space and review the final details." },
];

export function siteUrl() {
  const value = process.env.SITE_URL;
  return value ? new URL(value) : undefined;
}
