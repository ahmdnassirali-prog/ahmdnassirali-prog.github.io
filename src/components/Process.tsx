"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { site } from "@/config/site";
import SectionHead from "./SectionHead";

/**
 * "Blueprint to live". One frame is carried through the four steps by the reader's scroll:
 * sitemap (Discovery) → wireframe drawn in (Design) → the real page wipes over it
 * (Development) → the address bar goes live (Launch). Illustrated with the RSSA concept.
 */

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const range = (p: number, s: number, e: number) => clamp((p - s) / (e - s));

function vars(p: number): CSSProperties {
  return {
    ["--map" as string]: (1 - range(p, 0.2, 0.3)).toFixed(3),
    ["--wire" as string]: range(p, 0.2, 0.3).toFixed(3),
    ["--draw" as string]: (1 - range(p, 0.24, 0.46)).toFixed(3),
    ["--wipe" as string]: ((1 - range(p, 0.5, 0.72)) * 100).toFixed(2),
  };
}
const stageOf = (p: number) => Math.min(3, Math.floor(clamp(p, 0, 0.999) * 4));
const project =
  site.projects.find((x) => x.slug === "rssa" && x.images) ??
  site.projects.find((x) => x.status === "completed" && x.images && x.url);
const BONE = "#ede7dc";

function Specimen({ p, stage, specRef }: { p: number; stage: number; specRef?: React.Ref<HTMLDivElement> }) {
  const live = stage === 3;
  const host = project?.url?.replace(/^https?:\/\//, "").replace(/\/$/, "") ?? "your-business.com";
  return (
    <div
      ref={specRef}
      style={vars(p)}
      className="overflow-hidden rounded-[14px] border border-line-strong bg-ink-2 shadow-[0_60px_120px_-50px_rgba(0,0,0,0.9)]"
    >
      <div className="flex h-9 items-center gap-3 border-b border-line px-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-bone/20" />
          <span className="h-2 w-2 rounded-full bg-bone/20" />
          <span className="h-2 w-2 rounded-full bg-bone/20" />
        </div>
        <div className="mx-auto flex min-w-0 items-center gap-2 rounded-full bg-bone/[0.06] px-3 py-0.5 font-mono text-[0.68rem] text-bone-3">
          <span
            className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-300 ${live ? "bg-blue" : "bg-bone/25"}`}
            aria-hidden="true"
          />
          <span className="truncate">{live ? host : stage === 0 ? "notes / sitemap" : "draft / homepage"}</span>
        </div>
        <span className={`w-10 text-right font-mono text-[0.62rem] uppercase tracking-wider text-blue transition-opacity duration-300 ${live ? "opacity-100" : "opacity-0"}`}>
          Live
        </span>
      </div>

      <div className="relative aspect-[1600/956]">
        {/* Discovery */}
        <svg viewBox="0 0 1600 956" className="absolute inset-0 h-full w-full" style={{ opacity: "var(--map)" }} aria-hidden="true">
          <path d="M800 250 V330 M260 330 H1340 M260 330 V390 M620 330 V390 M980 330 V390 M1340 330 V390" stroke={BONE} strokeOpacity="0.3" strokeWidth="2" fill="none" />
          <rect x="680" y="150" width="240" height="100" rx="12" fill="#2f5bf0" />
          <text x="800" y="212" textAnchor="middle" fontSize="34" fill="#fff" fontFamily="inherit">Home</text>
          {["Services", "Port of Berbera", "Release steps", "Contact"].map((t, i) => (
            <g key={t}>
              <rect x={150 + i * 360} y="390" width="220" height="90" rx="12" fill="none" stroke={BONE} strokeOpacity="0.4" strokeWidth="2" />
              <text x={260 + i * 360} y="445" textAnchor="middle" fontSize="26" fill={BONE} fillOpacity="0.8" fontFamily="inherit">{t}</text>
            </g>
          ))}
          <g fontSize="28" fill={BONE} fontFamily="inherit">
            <rect x="150" y="600" width="610" height="190" rx="10" fill={BONE} fillOpacity="0.06" />
            <text x="185" y="660" fillOpacity="0.95">Who it is for</text>
            <text x="185" y="710" fillOpacity="0.6">Importers in Somaliland</text>
            <text x="185" y="752" fillOpacity="0.6">and Ethiopia</text>
            <rect x="840" y="600" width="610" height="190" rx="10" fill={BONE} fillOpacity="0.06" />
            <text x="875" y="660" fillOpacity="0.95">What it must do</text>
            <text x="875" y="710" fillOpacity="0.6">Make quote requests easy</text>
            <text x="875" y="752" fillOpacity="0.6">on every screen</text>
          </g>
        </svg>

        {/* Design */}
        <svg viewBox="0 0 1600 956" className="absolute inset-0 h-full w-full" style={{ opacity: "var(--wire)" }} aria-hidden="true">
          <g fill="none" stroke={BONE} strokeOpacity="0.55" strokeWidth="3" style={{ strokeDasharray: 1, strokeDashoffset: "var(--draw)" } as CSSProperties}>
            <rect x="80" y="40" width="50" height="50" rx="10" pathLength={1} />
            <rect x="1340" y="36" width="190" height="58" rx="29" pathLength={1} />
            <rect x="80" y="300" width="560" height="78" rx="6" pathLength={1} />
            <rect x="80" y="398" width="360" height="78" rx="6" pathLength={1} />
            <rect x="80" y="496" width="620" height="78" rx="6" pathLength={1} />
            <rect x="80" y="630" width="520" height="18" rx="9" pathLength={1} />
            <rect x="80" y="664" width="480" height="18" rx="9" pathLength={1} />
            <rect x="80" y="740" width="170" height="58" rx="29" pathLength={1} />
            <rect x="270" y="740" width="220" height="58" rx="29" pathLength={1} />
            <rect x="760" y="300" width="760" height="520" rx="8" pathLength={1} />
            <path d="M760 820 L1010 560 L1180 700 L1330 520 L1520 820" pathLength={1} />
            <rect x="1250" y="170" width="200" height="260" rx="14" pathLength={1} />
          </g>
        </svg>

        {/* Development + Launch */}
        {project?.images && (
          <div className="absolute inset-0" style={{ clipPath: "inset(0 calc(var(--wipe) * 1%) 0 0)" }}>
            <Image
              src={project.images.desktop}
              alt={stage >= 2 ? project.images.alt : ""}
              fill
              sizes="(min-width: 1024px) 60vw, 92vw"
              className="object-cover object-top"
            />
          </div>
        )}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 w-[2px] bg-blue shadow-[0_0_24px_4px_rgba(58,96,255,0.45)]"
          style={{ left: "calc(100% - var(--wipe) * 1%)", opacity: "calc(min(var(--wipe), 100 - var(--wipe)) / 4)" }}
        />
      </div>
    </div>
  );
}

function Pinned() {
  const trackRef = useRef<HTMLDivElement>(null);
  const specRef = useRef<HTMLDivElement>(null);
  const barRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = trackRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const p = clamp(-r.top / (r.height - window.innerHeight));
      const spec = specRef.current;
      if (spec) for (const [k, v] of Object.entries(vars(p))) spec.style.setProperty(k, String(v));
      barRefs.current.forEach((b, i) => {
        if (b) b.style.transform = `scaleX(${clamp(p * 4 - i).toFixed(4)})`;
      });
      setStage(stageOf(p));
    };
    const on = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
      cancelAnimationFrame(frame);
    };
  }, []);

  const s = site.process[stage];

  return (
    <div ref={trackRef} className="relative h-[400vh]">
      <div className="sticky top-0 flex h-screen flex-col justify-center gap-8 pt-20 pb-8">
        {/* timeline */}
        <ol className="grid grid-cols-4 gap-6">
          {site.process.map((st, i) => (
            <li key={st.title} aria-current={stage === i ? "step" : undefined}>
              <div className="relative h-px bg-line-strong">
                <span
                  ref={(el) => {
                    barRefs.current[i] = el;
                  }}
                  className="absolute inset-0 origin-left scale-x-0 bg-blue"
                />
              </div>
              <div className={`mt-4 flex items-baseline gap-3 transition-colors duration-300 ${stage === i ? "text-bone" : "text-bone-3"}`}>
                <span className="font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>
                <span className="display text-[clamp(1.6rem,2.4vw,2.4rem)]">{st.title}</span>
              </div>
            </li>
          ))}
        </ol>

        <div className="grid min-h-0 grid-cols-12 items-end gap-8">
          <div className="col-span-8 min-h-0">
            <div className="mx-auto max-h-[62vh] w-full" style={{ maxWidth: "calc(62vh * 1600 / 956)" }}>
              <Specimen p={0} stage={stage} specRef={specRef} />
            </div>
          </div>
          <div className="col-span-4 pb-2">
            <p key={stage} className="display animate-[fadeUp_600ms_cubic-bezier(0.23,1,0.32,1)] text-[clamp(5rem,9vw,9rem)] leading-none text-blue">
              {String(stage + 1).padStart(2, "0")}
            </p>
            <p className="display mt-4 text-4xl">{s.title}</p>
            <p className="mt-4 max-w-[34ch] leading-relaxed text-bone-2">{s.body}</p>
            <p className="label mt-8">Illustrated with the {project?.title ?? "concept"} concept</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const STATIC_P = [0.1, 0.47, 0.62, 1];

function Stacked() {
  return (
    <ol className="space-y-20">
      {site.process.map((s, i) => (
        <li key={s.title} className="grid grid-cols-[minmax(0,1fr)] gap-8 md:grid-cols-12 md:items-center">
          <div data-reveal className="md:col-span-5">
            <p className="display text-7xl leading-none text-blue">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="display mt-3 text-4xl">{s.title}</h3>
            <p className="mt-3 max-w-[40ch] leading-relaxed text-bone-2">{s.body}</p>
          </div>
          <div data-reveal style={{ ["--d" as string]: "100ms" }} className="min-w-0 md:col-span-7">
            <Specimen p={STATIC_P[i]} stage={i} />
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function Process() {
  return (
    <section
      id="process"
      className="grain relative scroll-mt-16 border-t border-line bg-ink-1 px-[var(--gutter)] pt-[var(--section)] pb-[var(--section)] lg:pb-10"
    >
      <div className="relative mx-auto max-w-[1560px]">
        <SectionHead title="The *Process*" aside="Four clear steps from the first conversation to a live website. You always know what happens next." />
        <div className="process-pinned">
          <Pinned />
        </div>
        <div className="process-stacked">
          <Stacked />
        </div>
      </div>
    </section>
  );
}
