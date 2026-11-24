"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Project } from "@/config/site";

/**
 * Work index: the projects as a typographic table of contents.
 * On fine pointers, a preview of the hovered project floats beside the cursor and the
 * other rows recede. On touch, each row carries a small inline thumbnail instead.
 */
export default function ProjectIndex({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLOListElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const frame = useRef(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const tick = () => {
      const k = reduce ? 1 : 0.16;
      pos.current.x += (target.current.x - pos.current.x) * k;
      pos.current.y += (target.current.y - pos.current.y) * k;
      if (previewRef.current) {
        const tilt = reduce ? 0 : Math.max(-6, Math.min(6, (target.current.x - pos.current.x) * 0.05));
        previewRef.current.style.transform = `translate3d(${pos.current.x.toFixed(1)}px, ${pos.current.y.toFixed(1)}px, 0) rotate(${tilt.toFixed(2)}deg)`;
      }
      frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, []);

  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !listRef.current) return;
    const r = listRef.current.getBoundingClientRect();
    target.current = { x: e.clientX - r.left, y: e.clientY - r.top };
  };

  const shown = active !== null ? projects[active] : null;

  return (
    <div className="relative">
      <ol
        ref={listRef}
        onPointerMove={onMove}
        onPointerLeave={() => setActive(null)}
        className="relative border-b border-line"
      >
        {projects.map((p, i) => {
          const done = p.status === "completed" && p.images;
          const dim = active !== null && active !== i;
          const row = (
            <div className="grid grid-cols-[2.5rem_1fr_auto] items-center gap-x-4 gap-y-2 py-6 sm:grid-cols-[4rem_1fr_auto] md:grid-cols-[4rem_minmax(0,1fr)_14rem_13rem_2rem] md:py-8">
              <span className="font-mono text-xs text-bone-3">{String(i + 1).padStart(2, "0")}</span>
              <span
                className={`display text-[clamp(2.8rem,7.2vw,6.8rem)] leading-[0.95] transition-[color,transform] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                  done ? "" : "text-bone-3"
                } ${active === i ? "md:translate-x-4" : ""}`}
              >
                {p.title}
                {active === i && <em className="ml-3 text-[0.4em] text-blue">↗</em>}
              </span>
              {/* touch thumbnail */}
              {done ? (
                <span className="relative row-span-2 block w-24 overflow-hidden rounded-md border border-line md:hidden">
                  <Image src={p.images!.desktop} alt="" width={1600} height={956} sizes="6rem" className="block h-auto w-full" />
                </span>
              ) : (
                <span className="row-span-2 md:hidden" />
              )}
              <span className="col-start-2 text-sm text-bone-2 md:col-start-auto">{p.sector}</span>
              <span className="col-start-2 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-bone-3 md:col-start-auto">
                {p.kind === "client" ? "Client" : "Concept"} · {done ? <span className="text-blue">Completed</span> : "In development"}
              </span>
              <span aria-hidden="true" className="hidden text-right text-xl text-bone-3 md:block">
                {done ? "→" : "·"}
              </span>
            </div>
          );
          return (
            <li
              key={p.slug}
              onPointerEnter={(e) => e.pointerType === "mouse" && done && setActive(i)}
              className={`border-t border-line transition-opacity duration-300 ${dim ? "md:opacity-30" : ""}`}
            >
              {done ? (
                <a href={`#case-${p.slug}`} className="block focus-visible:outline-offset-0" onFocus={() => setActive(null)}>
                  {row}
                </a>
              ) : (
                <div aria-label={`${p.title}: in development, no live demo yet`}>{row}</div>
              )}
            </li>
          );
        })}
      </ol>

      {/* floating preview (fine pointers only) */}
      <div
        ref={previewRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-10 hidden md:block"
      >
        <div
          className={`-translate-x-1/2 -translate-y-1/2 transition-[opacity,scale] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] ${
            shown ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          <div className="relative aspect-[1600/956] w-[26rem] overflow-hidden rounded-[10px] border border-line-strong bg-ink-2 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.9)]">
            {projects.map((p, i) =>
              p.images ? (
                <Image
                  key={p.slug}
                  src={p.images.desktop}
                  alt=""
                  width={1600}
                  height={956}
                  sizes="26rem"
                  className={`absolute inset-0 block h-full w-full object-cover transition-opacity duration-300 ${
                    active === i ? "opacity-100" : "opacity-0"
                  }`}
                />
              ) : null,
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
