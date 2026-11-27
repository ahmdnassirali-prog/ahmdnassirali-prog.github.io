import Image from "next/image";
import { site, type Project } from "@/config/site";
import { BrowserFrame, PhoneFrame } from "./Frames";
import SectionHead from "./SectionHead";
import ProjectIndex from "./ProjectIndex";

function KindTag({ project }: { project: Project }) {
  const client = project.kind === "client";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.08em] ${
        client ? "border-bone/40 bg-bone/[0.06] text-bone" : "border-blue/40 bg-blue/[0.08] text-blue"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${client ? "bg-bone" : "bg-blue"}`} aria-hidden="true" />
      {client ? "Client project" : "Independent concept"} · Completed
    </span>
  );
}

function Feature({ project, index }: { project: Project; index: number }) {
  const img = project.images!;
  const url = project.url!;
  const host = url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
  const flip = index % 2 === 0; // alternate the composition so consecutive projects don't repeat
  const visit = project.kind === "concept" ? "Visit live concept" : "Visit live site";
  const overview = [
    { label: "Client", value: project.kind === "client" ? project.subtitle ?? project.title : "Self-initiated" },
    { label: "Sector", value: project.sector },
    { label: "Services", value: project.scope.join(", ") },
    {
      label: "Status",
      value:
        project.kind === "concept"
          ? `Completed. Independent concept, not commissioned by ${project.subtitle ?? project.title}.`
          : "Completed. Live in production.",
    },
  ];

  return (
    <article id={`case-${project.slug}`} aria-labelledby={`p-${project.slug}`} className="scroll-mt-24">
      {/* rail */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="label !text-bone">{String(index).padStart(2, "0")}</span>
          <KindTag project={project} />
        </div>
        <a href={url} {...ext} className="label link-u !text-bone">
          {host} ↗<span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>

      {/* title crosses into the cover */}
      <div className={`relative z-10 mt-6 flex flex-col gap-4 sm:mt-10 lg:flex-row lg:items-end ${flip ? "lg:flex-row-reverse" : ""}`}>
        <h3
          id={`p-${project.slug}`}
          className="display shrink-0 text-[clamp(6rem,22vw,21rem)] leading-[0.85] lg:-mb-[0.3em] lg:leading-[0.8]"
        >
          <a href={url} {...ext} className="transition-colors duration-300 hover:text-blue">
            {project.title}
          </a>
        </h3>
        <div className={`max-w-[26rem] pb-8 lg:pb-[6vw] ${flip ? "lg:mr-auto" : "lg:ml-auto lg:text-right"}`}>
          {project.subtitle && <p className="display text-3xl italic text-bone-2 sm:text-4xl">{project.subtitle}</p>}
          <p className="mt-3 text-bone-2">{project.summary}</p>
        </div>
      </div>

      {/* full-bleed cover */}
      <div className="relative mx-[calc(50%-50vw)] border-y border-line">
        <a href={url} {...ext} className="group relative block overflow-hidden bg-ink-2 lg:max-h-[min(72vh,44rem)]" aria-label={`${visit}: ${project.title} (opens in a new tab)`}>
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background: `radial-gradient(90% 90% at ${flip ? "15%" : "85%"} 0%, rgba(58,96,255,0.22), transparent 60%), linear-gradient(180deg, #17191e, #0c0d10)`,
            }}
          />
          <div aria-hidden="true" className="rules absolute inset-0 opacity-40" />
          <div className="relative mx-auto grid max-w-[1560px] grid-cols-12 items-end gap-4 px-[var(--gutter)] pt-[clamp(5rem,9vw,9rem)] sm:gap-6">
            <div data-curtain className={`col-span-12 sm:col-span-9 ${flip ? "sm:order-2" : ""}`}>
              <div data-parallax="-0.03">
                <BrowserFrame url={url} className="rounded-b-none border-b-0 shadow-[0_-30px_90px_-30px_rgba(58,96,255,0.4)]">
                  <div className="overflow-hidden">
                    <Image
                      src={img.desktop}
                      alt={img.alt}
                      width={1600}
                      height={956}
                      sizes="(min-width: 1024px) 70vw, 92vw"
                      className="block h-auto w-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.025]"
                    />
                  </div>
                </BrowserFrame>
              </div>
            </div>
            {img.mobile && (
              <div className={`col-span-3 hidden self-start sm:block ${flip ? "sm:order-1" : ""}`} data-reveal style={{ ["--d" as string]: "200ms" }}>
                <div data-parallax="-0.1" className="pt-[45%]">
                  <PhoneFrame>
                    <Image src={img.mobile} alt="" width={600} height={1208} sizes="18vw" className="block h-auto w-full" />
                  </PhoneFrame>
                </div>
              </div>
            )}
          </div>
          <span
            className={`absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-bone px-4 py-2 text-sm font-medium text-ink-0 transition-[opacity,transform] duration-300 sm:bottom-auto sm:top-6 sm:translate-y-1 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 sm:group-focus-visible:translate-y-0 sm:group-focus-visible:opacity-100 ${
              flip ? "sm:left-[var(--gutter)] sm:right-auto" : "sm:right-[var(--gutter)]"
            }`}
          >
            {visit} <span aria-hidden="true">↗</span>
          </span>
        </a>
      </div>

      {/* case overview */}
      <dl className="grid grid-cols-2 border-b border-line lg:grid-cols-4">
        {overview.map((o, i) => (
          <div
            key={o.label}
            data-reveal
            style={{ ["--d" as string]: `${i * 70}ms` }}
            className={`py-6 pr-6 ${i % 2 ? "border-l border-line pl-5 lg:pl-6" : ""} ${i === 2 ? "border-t border-line lg:border-l lg:border-t-0 lg:pl-6" : ""} ${
              i === 3 ? "border-t border-line lg:border-t-0" : ""
            }`}
          >
            <dt className="label">{o.label}</dt>
            <dd className="mt-3 text-sm leading-relaxed sm:text-base">{o.value}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-12 grid gap-10 lg:grid-cols-12">
        <p data-reveal className={`display text-[clamp(1.35rem,2.6vw,2.4rem)] leading-[1.15] text-bone lg:col-span-7 ${flip ? "lg:col-start-6" : ""}`}>
          {project.description}
        </p>
        <div data-reveal className={`lg:col-span-3 lg:self-end ${flip ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-10 lg:text-right"}`}>
          <a href={url} {...ext} className="btn btn-primary">
            {visit} <span className="arrow" aria-hidden="true">↗</span>
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>

    </article>
  );
}

export default function Work() {
  const isShown = (p: Project) => p.status === "completed" && p.url && p.images;
  const live = site.projects.filter(isShown);

  return (
    <section id="work" className="relative scroll-mt-16 bg-ink-0 px-[var(--gutter)] pb-[var(--section)] pt-[clamp(4rem,8vw,7rem)]">
      <div className="mx-auto max-w-[1560px]">
        <SectionHead
          title="Selected *Work*"
          count={site.projects.length}
          aside="Client work and independent concepts, each built around a real business: clear structure, local context, and pages that load fast."
        />

        <ProjectIndex projects={site.projects} />

        <div className="mt-[clamp(4rem,8vw,7rem)] space-y-[clamp(5rem,9vw,8rem)]">
          {live.map((p, i) => (
            <Feature key={p.slug} project={p} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
