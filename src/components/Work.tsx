import Image from "next/image";
import { site, type Project } from "@/config/site";
import Intertitle from "./Intertitle";
import { BrowserFrame, PhoneFrame } from "./Frames";
import Tilt from "./Tilt";

function KindLabel({ project }: { project: Project }) {
  const label = project.kind === "concept" ? "Concept · Self-initiated" : "Client project";
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-3 py-1 text-xs font-medium text-ink-soft">
      <span
        className={`h-1.5 w-1.5 rounded-full ${project.status === "live" ? "bg-accent" : "bg-ink/30"}`}
        aria-hidden="true"
      />
      {label}
      {project.status === "in-progress" && <span className="text-ink-soft/80">· In progress</span>}
    </span>
  );
}

function FeatureProject({ project }: { project: Project }) {
  const img = project.images!;
  const url = project.url!;
  return (
    <article className="grid gap-10 lg:grid-cols-12 lg:gap-12" aria-labelledby={`p-${project.slug}`}>
      {/* media column */}
      <div className="relative lg:col-span-8">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-[12px]"
          aria-label={`Open the ${project.title} live concept (opens in a new tab)`}
        >
          <Tilt>
            <div data-reveal>
              <BrowserFrame url={url} className="shadow-[0_30px_70px_-35px_rgba(14,38,28,0.5)]">
                <div className="relative overflow-hidden">
                  <Image
                    src={img.desktop}
                    alt={img.alt}
                    width={1600}
                    height={956}
                    sizes="(min-width: 1024px) 62vw, 92vw"
                    className="block h-auto w-full transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.02]"
                  />
                  <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper opacity-0 transition-all duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 max-md:opacity-100">
                    View live concept <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </BrowserFrame>
            </div>
          </Tilt>
        </a>
        {img.mobile && (
          <div className="pointer-events-none absolute -bottom-10 right-3 hidden w-[19%] sm:block lg:right-[-2%]" aria-hidden="true">
            <div data-parallax="-0.08">
              <div data-reveal style={{ ["--d" as string]: "200ms" }}>
                <PhoneFrame>
                  <Image src={img.mobile} alt="" width={600} height={1208} sizes="12rem" className="block h-auto w-full" />
                </PhoneFrame>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* text column */}
      <div className="lg:col-span-4 lg:pt-2">
        <div data-reveal>
          <KindLabel project={project} />
          <h3 id={`p-${project.slug}`} className="font-display track-tight mt-6 text-5xl font-semibold sm:text-6xl">
            <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-150">
              {project.title}
            </a>
          </h3>
          <p className="mt-3 text-lg font-medium leading-snug">{project.summary}</p>
          <p className="mt-5 leading-relaxed text-ink-soft">{project.description}</p>

          <dl className="mt-8 grid grid-cols-[6rem_1fr] gap-y-3 border-t border-rule pt-6 text-sm">
            <dt className="text-ink-soft">Sector</dt>
            <dd>{project.sector}</dd>
            <dt className="text-ink-soft">Scope</dt>
            <dd>{project.scope.join(", ")}</dd>
            <dt className="text-ink-soft">Status</dt>
            <dd>{project.kind === "concept" ? "Self-initiated concept, not commissioned work" : "Commissioned client work"}</dd>
          </dl>

          <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-solid mt-9">
            Visit live concept <span className="arrow" aria-hidden="true">↗</span>
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>

      {/* detail strip */}
      {img.details && img.details.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-12 lg:col-span-12 lg:mt-14">
          {img.details.slice(0, 2).map((d, i) => (
            <figure
              key={d.src}
              data-reveal
              style={{ ["--d" as string]: `${i * 120}ms` }}
              className={i === 0 ? "sm:col-span-7 sm:col-start-2" : "sm:col-span-4 sm:mt-24"}
            >
              <div className="overflow-hidden rounded-[10px] border border-ink/10">
                <Image
                  src={d.src}
                  alt={d.alt}
                  width={1600}
                  height={956}
                  sizes={i === 0 ? "(min-width: 640px) 55vw, 92vw" : "(min-width: 640px) 32vw, 92vw"}
                  className="block h-auto w-full"
                />
              </div>
              <figcaption className="mt-3 text-sm text-ink-soft">{d.caption}</figcaption>
            </figure>
          ))}
        </div>
      )}
    </article>
  );
}

function Blueprint({ variant }: { variant: "hotel" | "education" }) {
  return (
    <svg viewBox="0 0 400 250" className="h-auto w-full text-ink/25" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4">
        <rect x="16" y="14" width="368" height="222" rx="6" />
        <line x1="16" y1="38" x2="384" y2="38" />
      </g>
      <g fill="currentColor" opacity="0.7">
        <rect x="30" y="22" width="40" height="8" rx="2" />
        <rect x="290" y="22" width="80" height="8" rx="4" />
      </g>
      {variant === "hotel" ? (
        <g fill="none" stroke="currentColor" strokeWidth="1.2">
          <rect x="30" y="52" width="340" height="96" rx="4" strokeDasharray="4 4" />
          <path d="M30 148 L120 92 L180 128 L250 76 L370 148" />
          <circle cx="320" cy="78" r="10" />
          <rect x="30" y="162" width="104" height="60" rx="4" />
          <rect x="148" y="162" width="104" height="60" rx="4" />
          <rect x="266" y="162" width="104" height="60" rx="4" />
        </g>
      ) : (
        <g fill="none" stroke="currentColor" strokeWidth="1.2">
          <rect x="30" y="56" width="150" height="14" rx="3" fill="currentColor" opacity="0.6" />
          <rect x="30" y="78" width="120" height="14" rx="3" fill="currentColor" opacity="0.6" />
          <rect x="30" y="104" width="160" height="6" rx="3" />
          <rect x="30" y="116" width="140" height="6" rx="3" />
          <rect x="30" y="136" width="70" height="18" rx="9" />
          <rect x="214" y="52" width="156" height="104" rx="4" strokeDasharray="4 4" />
          <rect x="30" y="170" width="160" height="52" rx="4" />
          <rect x="210" y="170" width="160" height="52" rx="4" />
        </g>
      )}
    </svg>
  );
}

function UpcomingProject({ project, delay }: { project: Project; delay: number }) {
  return (
    <article
      data-reveal
      style={{ ["--d" as string]: `${delay}ms` }}
      className="rounded-[12px] border border-dashed border-ink/20 p-6 sm:p-8"
      aria-labelledby={`p-${project.slug}`}
    >
      <div className="rounded-[8px] bg-paper-2/70 p-4">
        <Blueprint variant={project.slug === "hotel" ? "hotel" : "education"} />
      </div>
      <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
        <KindLabel project={project} />
        <span className="text-xs text-ink-soft">{project.sector}</span>
      </div>
      <h3 id={`p-${project.slug}`} className="font-display track-tight mt-4 text-2xl font-semibold sm:text-3xl">
        {project.title}
      </h3>
      <p className="mt-3 max-w-[44ch] leading-relaxed text-ink-soft">{project.description}</p>
      <p className="mt-6 text-sm font-medium text-ink-soft" aria-label="Live demo not yet available">
        Demo coming soon
      </p>
    </article>
  );
}

export default function Work() {
  const live = site.projects.filter((p) => p.status === "live" && p.url && p.images);
  const upcoming = site.projects.filter((p) => !(p.status === "live" && p.url && p.images));

  return (
    <section id="work" className="relative scroll-mt-6 bg-paper px-[var(--gutter)] pb-[var(--section)] pt-[clamp(3rem,8vw,7rem)]">
      <div className="mx-auto max-w-[1400px]">
        <Intertitle n={1} title="Selected work" />

        <div className="mb-16 grid gap-6 lg:grid-cols-12">
          <p data-reveal className="font-display track-tight text-3xl font-medium leading-[1.1] sm:text-4xl lg:col-span-8">
            Self-initiated concepts that show how I think about real businesses here: clear structure, local
            context, built to load fast.
          </p>
        </div>

        <div className="space-y-28">
          {live.map((p) => (
            <FeatureProject key={p.slug} project={p} />
          ))}

          {upcoming.length > 0 && (
            <div>
              <h3 className="mb-8 text-sm font-medium uppercase tracking-[0.14em] text-ink-soft">Next on the desk</h3>
              <div className="grid gap-6 md:grid-cols-2">
                {upcoming.map((p, i) => (
                  <UpcomingProject key={p.slug} project={p} delay={i * 80} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
