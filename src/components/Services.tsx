import { site } from "@/config/site";
import Intertitle from "./Intertitle";

export default function Services() {
  return (
    <section id="services" className="ground-dark grain relative scroll-mt-0 px-[var(--gutter)] py-[var(--section)]">
      <div className="mx-auto max-w-[1400px]">
        <Intertitle n={2} title="Services" dark />

        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <p
                data-lines
                className="font-display track-tight text-[clamp(2.2rem,4.6vw,3.9rem)] font-medium leading-[1.02]"
              >
                <span className="line-mask"><span>Everything your</span></span>
                <span className="line-mask"><span style={{ ["--d" as string]: "80ms" }}>website needs,</span></span>
                <span className="line-mask">
                  <span style={{ ["--d" as string]: "160ms" }} className="text-accent-light">from one person.</span>
                </span>
              </p>
              <p data-reveal className="mt-7 max-w-[38ch] leading-relaxed text-bone-soft">
                No hand-offs and no agency layers. You talk to the person designing and building your site.
              </p>
              <a data-reveal href="#contact" className="btn btn-solid mt-9">
                Contact me <span className="arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <ul className="lg:col-span-7 lg:col-start-6" role="list">
            {site.services.map((s, i) => (
              <li
                key={s.title}
                data-reveal
                style={{ ["--d" as string]: `${i * 60}ms` }}
                className="group border-t border-rule-dark py-8 last:border-b sm:py-10"
              >
                <div className="grid gap-3 sm:grid-cols-[1fr_1.1fr] sm:gap-10">
                  <h3 className="font-display track-tight text-2xl font-medium transition-[color,transform] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] sm:text-[1.9rem] sm:leading-tight [@media(hover:hover)]:group-hover:translate-x-2 [@media(hover:hover)]:group-hover:text-accent-light">
                    {s.title}
                  </h3>
                  <p className="leading-relaxed text-bone-soft">{s.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
