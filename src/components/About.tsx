import { site } from "@/config/site";
import Intertitle from "./Intertitle";

export default function About() {
  const { about, ownerName, location } = site;
  return (
    <section id="about" className="grain relative bg-paper px-[var(--gutter)] py-[var(--section)]">
      <div className="mx-auto max-w-[1400px]">
        <Intertitle n={3} title="About" />

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p
              data-lines
              className="font-display track-tighter text-[clamp(2.6rem,6.4vw,5.6rem)] font-semibold leading-[0.98]"
            >
              {about.lead.split(", ").map((part, i, arr) => (
                <span key={part} className="line-mask">
                  <span style={{ ["--d" as string]: `${i * 90}ms` }}>
                    {part}
                    {i < arr.length - 1 ? "," : ""}
                  </span>
                </span>
              ))}
            </p>
            <p data-reveal className="mt-8 text-sm text-ink-soft">
              {ownerName ? `${ownerName} · ` : ""}Independent web designer &amp; developer · Based in {location},
              working worldwide
            </p>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 lg:pt-3">
            <div className="space-y-6 text-lg leading-relaxed">
              {about.paragraphs.map((p, i) => (
                <p key={i} data-reveal style={{ ["--d" as string]: `${i * 80}ms` }} className={i ? "text-ink-soft" : ""}>
                  {p}
                </p>
              ))}
            </div>

            <dl className="mt-12">
              {about.principles.map((pr, i) => (
                <div
                  key={pr.title}
                  data-reveal
                  style={{ ["--d" as string]: `${i * 70}ms` }}
                  className="grid grid-cols-[minmax(8rem,10rem)_1fr] gap-6 border-t border-rule py-5"
                >
                  <dt className="font-medium">{pr.title}</dt>
                  <dd className="text-ink-soft">{pr.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
