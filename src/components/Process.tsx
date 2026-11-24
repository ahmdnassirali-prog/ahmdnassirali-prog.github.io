"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { site } from "@/config/site";
import Intertitle from "./Intertitle";

/**
 * Signature move: "Blueprint to live".
 * One specimen frame is carried through the four steps by the reader's scroll:
 * a sitemap (Discovery) is redrawn as a wireframe (Design), the wireframe is wiped
 * into the real built page (Development), and the address bar goes live (Launch).
 * Illustrated with the RSSA concept, the one real project on this site.
 */

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const range = (p: number, start: number, end: number) => clamp((p - start) / (end - start));

function vars(p: number): CSSProperties {
  return {
    ["--map" as string]: (1 - range(p, 0.2, 0.3)).toFixed(3),
    ["--wire" as string]: range(p, 0.2, 0.3).toFixed(3),
    ["--draw" as string]: (1 - range(p, 0.24, 0.46)).toFixed(3),
    ["--wipe" as string]: ((1 - range(p, 0.5, 0.72)) * 100).toFixed(2),
  };
}

const stageOf = (p: number) => Math.min(3, Math.floor(clamp(p, 0, 0.999) * 4));

const project = site.projects.find((x) => x.status === "live" && x.images && x.url);

function Specimen({ p, stage, specRef }: { p: number; stage: number; specRef?: React.Ref<HTMLDivElement> }) {
  const live = stage === 3;
  const host = project?.url?.replace(/^https?:\/\//, "").replace(/\/$/, "") ?? "your-business.com";
  return (
    <figure className="w-full">
      <div
        ref={specRef}
        style={vars(p)}
        className="overflow-hidden rounded-[12px] border border-ink/10 bg-white shadow-[0_40px_90px_-40px_rgba(14,38,28,0.45)]"
      >
        {/* address bar */}
        <div className="flex h-9 items-center gap-3 border-b border-ink/10 bg-[#f7f6f2] px-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          </div>
          <div className="mx-auto flex min-w-0 items-center gap-2 rounded-full bg-ink/[0.05] px-3 py-0.5 text-xs text-ink-soft">
            <span
              className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-300 ${live ? "bg-[#1f9d55]" : "bg-ink/25"}`}
              aria-hidden="true"
            />
            <span className="truncate">{live ? host : stage === 0 ? "notes / sitemap" : "draft / homepage"}</span>
          </div>
          <span
            className={`w-10 text-right text-[0.65rem] font-semibold uppercase tracking-wider transition-opacity duration-300 ${
              live ? "text-[#1f9d55] opacity-100" : "opacity-0"
            }`}
          >
            Live
          </span>
        </div>

        <div className="relative aspect-[1600/956] bg-[#fbfaf7]">
          {/* Discovery: sitemap and notes */}
          <svg
            viewBox="0 0 1600 956"
            className="absolute inset-0 h-full w-full text-ink"
            style={{ opacity: "var(--map)" }}
            aria-hidden="true"
          >
            <g fontFamily="inherit" fill="currentColor">
              <g stroke="currentColor" strokeOpacity="0.35" strokeWidth="2" fill="none">
                <path d="M800 250 V330 M260 330 H1340 M260 330 V390 M620 330 V390 M980 330 V390 M1340 330 V390" />
              </g>
              <rect x="680" y="150" width="240" height="100" rx="14" fill="#111813" />
              <text x="800" y="212" textAnchor="middle" fontSize="34" fill="#efeee8" fontWeight="600">Home</text>
              {["Services", "Port of Berbera", "Release steps", "Contact"].map((t, i) => (
                <g key={t}>
                  <rect x={150 + i * 360} y="390" width="220" height="90" rx="14" fill="none" stroke="currentColor" strokeOpacity="0.5" strokeWidth="2" />
                  <text x={260 + i * 360} y="445" textAnchor="middle" fontSize="27" fillOpacity="0.8">{t}</text>
                </g>
              ))}
              <g fontSize="28" fillOpacity="0.75">
                <rect x="150" y="600" width="610" height="190" rx="10" fill="#f3e6c9" fillOpacity="1" />
                <text x="185" y="660" fontWeight="600" fillOpacity="1">Who it is for</text>
                <text x="185" y="710">Importers in Somaliland</text>
                <text x="185" y="752">and Ethiopia</text>
                <rect x="840" y="600" width="610" height="190" rx="10" fill="#dfe9e2" fillOpacity="1" />
                <text x="875" y="660" fontWeight="600" fillOpacity="1">What it must do</text>
                <text x="875" y="710">Make quote requests easy</text>
                <text x="875" y="752">on every screen</text>
              </g>
            </g>
          </svg>

          {/* Design: wireframe drawn in */}
          <svg
            viewBox="0 0 1600 956"
            className="absolute inset-0 h-full w-full text-ink"
            style={{ opacity: "var(--wire)" }}
            aria-hidden="true"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.55"
              strokeWidth="3"
              pathLength={1}
              style={{ strokeDasharray: 1, strokeDashoffset: "var(--draw)" } as CSSProperties}
            >
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

          {/* Development: the real page wipes over the wireframe */}
          {project?.images && (
            <div className="absolute inset-0" style={{ clipPath: "inset(0 calc(var(--wipe) * 1%) 0 0)" }}>
              <Image
                src={project.images.desktop}
                alt={stage >= 2 ? project.images.alt : ""}
                fill
                sizes="(min-width: 1024px) 55vw, 92vw"
                className="object-cover object-top"
              />
            </div>
          )}
          {/* wipe edge */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 w-px bg-accent"
            style={{
              left: "calc(100% - var(--wipe) * 1%)",
              opacity: "calc(min(var(--wipe), 100 - var(--wipe)) / 4)",
            }}
          />
        </div>
      </div>
      <figcaption className="mt-4 text-sm text-ink-soft">
        Illustrated with the {project?.title ?? "concept"} concept, from first notes to the live page.
      </figcaption>
    </figure>
  );
}

function StepText({ i, active }: { i: number; active: boolean }) {
  const s = site.process[i];
  return (
    <div className={`transition-opacity duration-500 ${active ? "opacity-100" : "opacity-35"}`}>
      <div className="flex items-baseline gap-4">
        <span className="font-display w-6 text-sm tabular-nums text-accent">{String(i + 1).padStart(2, "0")}</span>
        <h3 className="font-display track-tight text-3xl font-semibold xl:text-4xl">{s.title}</h3>
      </div>
      <p
        className={`ml-10 max-w-[36ch] overflow-hidden leading-relaxed text-ink-soft transition-[max-height,opacity,margin] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          active ? "mt-3 max-h-40 opacity-100" : "mt-0 max-h-0 opacity-0"
        }`}
      >
        {s.body}
      </p>
    </div>
  );
}

function Pinned() {
  const trackRef = useRef<HTMLDivElement>(null);
  const specRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = trackRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const p = clamp(-r.top / total);
      const v = vars(p);
      const spec = specRef.current;
      if (spec) for (const [k, val] of Object.entries(v)) spec.style.setProperty(k, String(val));
      if (barRef.current) barRef.current.style.transform = `scaleY(${p.toFixed(4)})`;
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

  return (
    <div ref={trackRef} className="relative h-[380vh]">
      <div className="sticky top-0 flex h-screen items-center">
        <div className="grid w-full grid-cols-12 items-center gap-10">
          <div className="relative col-span-4">
            <div className="absolute -left-6 top-1 h-full w-px bg-rule" aria-hidden="true">
              <div ref={barRef} className="h-full w-px origin-top scale-y-0 bg-accent" />
            </div>
            <ol className="space-y-9">
              {site.process.map((s, i) => (
                <li key={s.title} aria-current={stage === i ? "step" : undefined}>
                  <StepText i={i} active={stage === i} />
                </li>
              ))}
            </ol>
          </div>
          <div className="col-span-8">
            <Specimen p={0} stage={stage} specRef={specRef} />
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
        <li key={s.title} className="grid gap-8 md:grid-cols-12 md:items-center">
          <div data-reveal className="md:col-span-5">
            <div className="flex items-baseline gap-4">
              <span className="font-display text-sm tabular-nums text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display track-tight text-3xl font-semibold">{s.title}</h3>
            </div>
            <p className="mt-3 max-w-[40ch] leading-relaxed text-ink-soft">{s.body}</p>
          </div>
          <div data-reveal style={{ ["--d" as string]: "100ms" }} className="md:col-span-7">
            <Specimen p={STATIC_P[i]} stage={i} />
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function Process() {
  return (
    <section id="process" className="relative bg-paper-2 px-[var(--gutter)] pt-[var(--section)] pb-[var(--section)] lg:pb-16">
      <div className="mx-auto max-w-[1400px]">
        <Intertitle n={4} title="Process" />
        <p
          data-reveal
          className="font-display track-tight mb-4 max-w-[22ch] text-[clamp(2rem,4.4vw,3.6rem)] font-medium leading-[1.04]"
        >
          Four steps from first conversation to a live website.
        </p>
        <div className="process-pinned">
          <Pinned />
        </div>
        <div className="process-stacked mt-14">
          <Stacked />
        </div>
      </div>
    </section>
  );
}
