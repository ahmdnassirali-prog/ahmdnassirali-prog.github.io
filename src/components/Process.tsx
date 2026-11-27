import { site } from "@/config/site";
import SectionHead from "./SectionHead";

/** The four steps as a plain ruled list: number, title, one short description. */
export default function Process() {
  return (
    <section
      id="process"
      className="grain relative scroll-mt-16 border-t border-line bg-ink-1 px-[var(--gutter)] py-[var(--section)]"
    >
      <div className="relative mx-auto max-w-[1560px]">
        <SectionHead
          title="The *Process*"
          aside="Four clear steps from the first conversation to a live website. You always know what happens next."
        />

        <ol className="grid border-t border-line sm:grid-cols-2 lg:grid-cols-4 lg:border-b">
          {site.process.map((s, i) => (
            <li
              key={s.title}
              data-reveal
              style={{ ["--d" as string]: `${i * 80}ms` }}
              className={`border-b border-line py-8 sm:py-10 lg:border-b-0 ${
                i % 2 ? "sm:border-l sm:pl-6" : "sm:pr-6"
              } ${i === 2 ? "lg:border-l lg:pl-6" : ""}`}
            >
              <p className="display text-6xl leading-none text-blue sm:text-7xl">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="display mt-6 text-3xl sm:text-4xl">{s.title}</h3>
              <p className="mt-3 max-w-[34ch] leading-relaxed text-bone-2">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
