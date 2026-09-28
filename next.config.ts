import type { NextConfig } from "next";
import path from "path";

// The site is a single scroll now; old standalone pages land on their section.
const retiredPages = ["about", "skills", "experience", "contact", "projects"];

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return retiredPages.map((page) => ({
      source: `/${page}`,
      destination: `/#${page === "projects" ? "work" : page === "skills" ? "experience" : page}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
