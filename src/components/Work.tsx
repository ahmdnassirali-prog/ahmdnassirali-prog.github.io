import Image from "next/image";
import { site, type Project } from "@/config/site";
import SectionHead from "./SectionHead";

/** Selected work on one screen: one card per project, each linking to the live site. */
function Card({ project, index }: { project: Project; index: number }) {
  const img = project.images!;
  const host = project.url!.replace(/^https?:\/\//, "").replace(/\/$/, "");
  const live = project.kind === "client";

  return (
    <article data-reveal style={{ ["--d" as string]: `${index * 120}ms` }} className="group">
      <a href={project.url!} target="_blank" rel="noopener noreferrer" className="block" aria-label={`Visit the ${project.title} website (opens in a new tab)`}>
        <div className="overflow-hidden rounded-[1rem] border border-line-strong bg-ink-2 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)]">
          <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-bone-3/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-bone-3/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-bone-3/50" />
            <span className="ml-3 truncate font-mono text-[0.7rem] text-bone-3">{host}</span>
          </div>
          <div className="relative aspect-[1600/956] overflow-hidden">
            <Image
              src={img.desktop}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 46vw, 92vw"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>
        </div>
      </a>

      <div className="mt-7 flex items-start justify-between gap-6">
        <div>
          <p className="label">
            {String(index + 1).padStart(2, "0")} · {project.sector} · {live ? "Client work" : "Concept"}
          </p>
          <h3 className="display mt-3 text-[clamp(2.4rem,4vw,3.6rem)]">{project.title}</h3>
          <p className="mt-1 text-bone">{project.subtitle}</p>
          <p className="mt-3 max-w-[34rem] leading-relaxed text-bone-2">{project.summary}</p>
        </div>
      </div>

      <a href={project.url!} target="_blank" rel="noopener noreferrer" className="btn btn-outline mt-6">
        Visit the site <span className="arrow" aria-hidden="true">↗</span>
      </a>
    </article>
  );
}

export default function Work() {
  const shown = site.projects.filter((p) => p.status === "completed" && p.url && p.images);

  return (
    <section id="work" className="relative scroll-mt-16 bg-ink-0 px-[var(--gutter)] py-[var(--section)]">
      <div className="mx-auto max-w-[1560px]">
        <SectionHead title="Selected *Work*" count={shown.length} aside="Open any project to see the live website." />
        <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
          {shown.map((p, i) => (
            <Card key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
