import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/studio";

export default function robots(): MetadataRoute.Robots {
  const base = siteUrl();
  return base
    ? { rules: { userAgent: "*", allow: "/" }, sitemap: new URL("/sitemap.xml", base).href }
    : { rules: { userAgent: "*", disallow: "/" } };
}
