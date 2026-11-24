"use client";

import { useEffect } from "react";

/**
 * One small motion runtime for the whole page.
 *  - [data-reveal], [data-wipe], [data-lines]: get `.is-in` when they enter the viewport.
 *  - [data-parallax="0.12"]: translates on scroll at that rate relative to the viewport centre.
 * Everything is transform/opacity/clip-path, batched in one rAF.
 */
export default function Motion() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const targets = document.querySelectorAll<HTMLElement>("[data-reveal],[data-wipe],[data-lines],[data-curtain]");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    targets.forEach((t) => io.observe(t));

    if (reduce) return () => io.disconnect();

    const layers = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      for (const el of layers) {
        const host = (el.parentElement ?? el) as HTMLElement;
        const r = host.getBoundingClientRect();
        if (r.bottom < -vh * 0.5 || r.top > vh * 1.5) continue;
        const speed = parseFloat(el.dataset.parallax || "0");
        const offset = (r.top + r.height / 2 - vh / 2) * speed;
        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
