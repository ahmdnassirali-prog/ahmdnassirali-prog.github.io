import type { NextConfig } from "next";

/**
 * GitHub Pages build: `GITHUB_PAGES=true` turns on a static export into ./out.
 * `PAGES_BASE_PATH` is set by the deploy workflow when the site lives at
 * username.github.io/<repo>; it is empty for a username.github.io repo.
 * Locally (npm run dev / build / start) nothing changes.
 */
const isPages = process.env.GITHUB_PAGES === "true";
const basePath = isPages ? process.env.PAGES_BASE_PATH ?? "" : "";

const nextConfig: NextConfig = {
  ...(isPages
    ? {
        output: "export",
        basePath,
        trailingSlash: true,
        images: { loader: "custom", loaderFile: "./src/lib/image-loader.ts" },
      }
    : {}),
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
