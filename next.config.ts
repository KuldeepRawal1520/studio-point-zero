import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return ["residential", "commercial", "hospitality"].map((category) => ({
      source: `/projects/${category}-placeholder`,
      destination: `/projects/${category}-concept`,
      permanent: false,
    }));
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.pexels.com", pathname: "/photos/**" }],
  },
};

export default nextConfig;
