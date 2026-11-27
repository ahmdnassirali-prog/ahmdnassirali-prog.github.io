import { site } from "@/config/site";
import SectionHead from "./SectionHead";

/** A ruled matrix rather than cards: cells share hairlines like a printed table. */
export default function Services() {
  const items = site.services;
  return (
    <section
      id="services"
      className="grain relative scroll-mt-16 border-t border-line bg-ink-1 px-[var(--gutter)] py-[var(--section)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(60% 50% at 0% 0%, rgba(58,96,255,0.08), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-[1560px]">
        <SectionHead
          title="*Services*"
          count={items.length}
          aside="Everything a business website needs, handled by one person from the first sketch to the live site and after."
        />

        <ul role="list" className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s, i) => (
            <li
              key={s.title}
              data-reveal
              style={{ ["--d" as string]: `${i * 70}ms` }}
              className="group relative bg-ink-1 p-6 transition-colors duration-300 sm:p-9 [@media(hover:hover)]:hover:bg-ink-2"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-blue transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-x-100"
              />
              <span className="font-mono text-xs text-blue">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="display mt-5 text-[2.2rem] leading-none sm:mt-16 sm:text-[2.6rem]">{s.title}</h3>
              <p className="mt-4 max-w-[34ch] leading-relaxed text-bone-2">{s.body}</p>
            </li>
          ))}
          <li className="relative flex flex-col justify-between gap-10 bg-ink-2 p-7 sm:p-9">
            <p className="display text-[2.2rem] leading-[1.02] sm:text-[2.6rem]">
              Not sure what you need? <em>Ask.</em>
            </p>
            <a href="#contact" className="btn btn-outline self-start">
              Let’s Talk <span className="arrow" aria-hidden="true">→</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
