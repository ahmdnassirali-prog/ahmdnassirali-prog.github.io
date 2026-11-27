import { site, packageHref } from "@/config/site";
import SectionHead from "./SectionHead";

function Check() {
  return (
    <svg viewBox="0 0 16 16" className="mt-[0.35em] h-3.5 w-3.5 shrink-0 text-blue" aria-hidden="true">
      <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Packages as a vertical list. Each row shows the name and price; clicking it opens the
 * full details. Native <details>/<summary>: keyboard and screen-reader friendly, no JS needed.
 */
export default function Pricing() {
  const { packages, note } = site.pricing;
  return (
    <section
      id="pricing"
      className="relative scroll-mt-16 border-t border-line bg-ink-0 px-[var(--gutter)] py-[var(--section)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(60% 50% at 50% 0%, rgba(58,96,255,0.08), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-[1560px]">
        <SectionHead
          title="*Pricing*"
          count={packages.length}
          aside="Three clear packages, priced in US dollars. Open one to see everything it includes, then message me on WhatsApp to get started."
        />

        <div className="border-b border-line">
          {packages.map((p, i) => (
            <details
              key={p.name}
              data-reveal
              style={{ ["--d" as string]: `${i * 80}ms` }}
              className={`group border-t border-line transition-colors duration-300 open:bg-ink-1 ${p.featured ? "relative" : ""}`}
            >
              <summary className="flex cursor-pointer list-none items-center gap-4 px-1 py-6 sm:gap-8 sm:px-6 sm:py-8 [&::-webkit-details-marker]:hidden">
                <span className="font-mono text-xs text-bone-3">{String(i + 1).padStart(2, "0")}</span>
                <span className="flex min-w-0 flex-1 flex-wrap items-center gap-x-5 gap-y-2">
                  <span className="display text-[clamp(2.2rem,4.6vw,4rem)] leading-none transition-colors duration-200 group-hover:text-blue">
                    {p.name}
                  </span>
                  {p.featured && (
                    <span className="inline-flex items-center gap-2 rounded-full border border-blue/40 bg-blue/[0.08] px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-blue">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue" aria-hidden="true" />
                      Most popular
                    </span>
                  )}
                </span>
                <span className="flex items-baseline gap-2">
                  <span className="display text-[clamp(2.2rem,4.6vw,4rem)] leading-none">${p.price}</span>
                  <span className="label hidden sm:inline">USD</span>
                </span>
                <span
                  aria-hidden="true"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line-strong text-bone transition-transform duration-300 group-open:rotate-45 group-hover:border-bone"
                >
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5">
                    <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="sr-only">Show details</span>
              </summary>

              <div className="grid gap-8 px-1 pb-8 group-open:animate-[fadeUp_500ms_cubic-bezier(0.23,1,0.32,1)] sm:px-6 sm:pb-10 md:grid-cols-12 md:pl-[4.5rem]">
                <ul role="list" className="space-y-3 text-bone-2 md:col-span-7">
                  {p.features.map((f) => (
                    <li key={f} className={`flex gap-3 leading-relaxed ${f.startsWith("Everything in") ? "text-bone" : ""}`}>
                      <Check />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-5 md:col-span-4 md:col-start-9 md:items-end md:text-right">
                  <p className="font-mono text-[0.72rem] uppercase leading-relaxed tracking-[0.06em] text-bone-3">{p.terms}</p>
                  <a
                    href={packageHref(p.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn self-start md:self-end ${p.featured ? "btn-primary" : "btn-outline"}`}
                  >
                    Get started <span className="arrow" aria-hidden="true">→</span>
                    <span className="sr-only">with the {p.name} package on WhatsApp (opens in a new tab)</span>
                  </a>
                </div>
              </div>
            </details>
          ))}
        </div>

        <p data-reveal className="mt-8 max-w-[60ch] text-sm leading-relaxed text-bone-2">
          {note}
        </p>
      </div>
    </section>
  );
}
