"use client";

/**
 * Image loader for the static GitHub Pages build (no image server there).
 * Serves the pre-optimised WebP files from /public as they are, under the site's base path.
 */
export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }) {
  if (/^https?:\/\//.test(src)) return src;
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}?w=${width}`;
}
