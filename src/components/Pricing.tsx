import { site, packageHref } from "@/config/site";
import SectionHead from "./SectionHead";

function Check() {
  return (
    <svg viewBox="0 0 16 16" className="mt-[0.35em] h-3.5 w-3.5 shrink-0 text-blue" aria-hidden="true">
      <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Three packages in the same ruled matrix as Services: cells share hairlines rather than floating as cards. */
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
          aside="Three clear packages, priced in US dollars. Pick one and message me on WhatsApp to get started."
        />

        <ul role="list" className="grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
          {packages.map((p, i) => (
            <li
              key={p.name}
              data-reveal
              style={{ ["--d" as string]: `${i * 80}ms` }}
              className={`relative flex flex-col p-7 sm:p-9 ${p.featured ? "bg-ink-2" : "bg-ink-0"}`}
            >
              <article aria-labelledby={`pkg-${p.name}`} className="flex h-full flex-col">
                {p.featured && <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-blue" />}

                <div className="flex min-h-7 flex-wrap items-center justify-between gap-3">
                  <h3 id={`pkg-${p.name}`} className="label !text-bone">
                    {p.name}
                  </h3>
                  {p.featured && (
                    <span className="inline-flex items-center gap-2 rounded-full border border-blue/40 bg-blue/[0.08] px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-blue">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue" aria-hidden="true" />
                      Most popular
                    </span>
                  )}
                </div>

                <p className="mt-10 flex items-baseline gap-3 sm:mt-14">
                  <span className="display text-[clamp(4rem,7vw,6.5rem)] leading-none">${p.price}</span>
                  <span className="label">USD</span>
                </p>

                <ul role="list" className="mt-10 space-y-3 border-t border-line pt-8 text-bone-2">
                  {p.features.map((f) => (
                    <li key={f} className={`flex gap-3 leading-relaxed ${f.startsWith("Everything in") ? "text-bone" : ""}`}>
                      <Check />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-10">
                  <p className="border-t border-line pt-5 font-mono text-[0.72rem] uppercase leading-relaxed tracking-[0.06em] text-bone-3">
                    {p.terms}
                  </p>
                  <a
                    href={packageHref(p.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn mt-6 w-full justify-center ${p.featured ? "btn-primary" : "btn-outline"}`}
                  >
                    Get started <span className="arrow" aria-hidden="true">→</span>
                    <span className="sr-only">with the {p.name} package on WhatsApp (opens in a new tab)</span>
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <p data-reveal className="mt-8 max-w-[60ch] text-sm leading-relaxed text-bone-2">
          {note}
        </p>
      </div>
    </section>
  );
}
