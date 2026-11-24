import { site } from "@/config/site";
import Emph from "./Emph";

export default function About() {
  const { about, ownerName } = site;
  return (
    <section id="about" className="relative scroll-mt-16 bg-ink-0 px-[var(--gutter)] py-[var(--section)]">
      <div className="mx-auto max-w-[1560px]">
        <div className="grid gap-10 lg:grid-cols-12">
          <h2 data-reveal className="label lg:col-span-2 lg:pt-5">About</h2>
          <p
            data-reveal
            className="display text-[clamp(2.4rem,5.4vw,5.6rem)] leading-[1.02] lg:col-span-10"
          >
            <Emph text={about.statement} />
          </p>
        </div>

        <div className="mt-20 grid gap-14 border-t border-line pt-12 lg:grid-cols-12">
          {ownerName && (
            <p data-reveal className="display text-3xl lg:col-span-2">
              {ownerName}
            </p>
          )}
          <div className={`space-y-6 text-lg leading-relaxed text-bone-2 lg:col-span-5 ${ownerName ? "" : "lg:col-start-3"}`}>
            {about.paragraphs.map((p, i) => (
              <p key={i} data-reveal style={{ ["--d" as string]: `${i * 90}ms` }}>
                {p}
              </p>
            ))}
          </div>
          <dl className="lg:col-span-4 lg:col-start-9">
            {about.facts.map((f, i) => (
              <div
                key={f.label}
                data-reveal
                style={{ ["--d" as string]: `${i * 80}ms` }}
                className="flex items-baseline justify-between gap-6 border-b border-line py-4 first:pt-0"
              >
                <dt className="label shrink-0">{f.label}</dt>
                <dd className="text-right">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
