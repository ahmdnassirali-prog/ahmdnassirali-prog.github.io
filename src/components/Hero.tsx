import Image from "next/image";
import { site, whatsappHref } from "@/config/site";
import Emph from "./Emph";
import Tilt from "./Tilt";
import { WhatsAppIcon } from "./BrandIcons";

/**
 * Hero + About. The first thing a client reads is who they would be working with.
 *
 * Grid (desktop): copy on the left in two blocks, portrait stage on the right
 * spanning both rows. On phones the DOM order gives: greeting, portrait, details.
 *
 * Portrait stage, back to front:
 *   glow    - blue wash, drifting slowest
 *   orbit   - a thin hand-drawn loop behind the photo
 *   photo   - the portrait exactly as supplied, in a rounded frame
 *   tags    - service tags over the studio backdrop, at different depths
 */
export default function Hero() {
  const { hero, about, ownerName } = site;
  const tagPos = [
    "left-[-2%] top-[12%] sm:left-[-10%]",
    "right-[-2%] top-[24%] sm:right-[-10%]",
    "left-[-12%] top-[32%]",
    "right-[-12%] top-[40%]",
  ];
  const tagDepth = ["-0.10", "-0.05", "-0.14", "-0.08"];

  return (
    <section id="top" className="grain relative isolate overflow-hidden bg-ink-0 pt-24 sm:pt-28">
      {/* atmosphere */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="rules absolute inset-0" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink-0" />
      </div>

      <div className="relative mx-auto max-w-[1560px] px-[var(--gutter)]">
        <div className="mb-8 flex items-center justify-between gap-6 sm:mb-10">
          <p data-reveal className="label flex items-center gap-3">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue" aria-hidden="true" />
            {ownerName} · {hero.role}
          </p>
          <p data-reveal className="label hidden sm:block">
            About
          </p>
        </div>

        <div className="grid gap-x-8 pb-[clamp(4rem,8vw,7rem)] lg:grid-cols-12">
          {/* A · greeting + what I do */}
          <div id="about" className="relative z-10 scroll-mt-28 lg:col-span-7 lg:row-start-1">
            <h1 data-lines className="display text-[clamp(3.6rem,8.8vw,8.6rem)]">
              {hero.greeting.map((line, i) => (
                <span key={line} className={`line-mask ${i === 1 ? "md:pl-[7%]" : ""}`}>
                  <span style={{ ["--d" as string]: `${100 + i * 120}ms` }}>
                    <Emph text={line} />
                  </span>
                </span>
              ))}
            </h1>
            <p
              data-reveal
              style={{ ["--d" as string]: "420ms" }}
              className="display mt-7 max-w-[33rem] text-[clamp(1.5rem,2.2vw,2.05rem)] leading-[1.14] text-bone"
            >
              {hero.intro}
            </p>
          </div>

          {/* B · portrait stage */}
          <div className="relative mt-14 lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:self-start">
            <Tilt max={2.5}>
              <figure className="relative mx-auto w-full max-w-[30rem] px-[6%] pt-[4%]">
                {/* glow */}
                <div aria-hidden="true" data-parallax="0.12" className="absolute inset-[-14%] -z-10">
                  <div
                    className="h-full w-full rounded-full"
                    style={{ background: "radial-gradient(closest-side, rgba(70,110,255,0.28), rgba(58,96,255,0.08) 60%, transparent)" }}
                  />
                </div>

                {/* orbit: drawn behind the photo, so it never crosses it */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 500 600"
                  fill="none"
                  preserveAspectRatio="none"
                  data-reveal
                  style={{ ["--d" as string]: "600ms" }}
                  className="orbit pointer-events-none absolute -inset-[6%] overflow-visible"
                >
                  <path
                    pathLength={1}
                    className="draw"
                    d="M 28 230 C 20 90, 150 8, 260 6 C 390 4, 482 80, 486 220 C 489 330, 484 400, 478 470"
                    stroke="rgba(237,231,220,0.42)"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                  <circle cx="28" cy="230" r="3.5" fill="var(--blue)" />
                  <circle cx="478" cy="470" r="2.5" fill="rgba(237,231,220,0.6)" />
                </svg>

                {/* photo, shown exactly as supplied */}
                <div
                  data-reveal
                  style={{ ["--d" as string]: "450ms" }}
                  className="relative overflow-hidden rounded-[2rem] border border-line-strong shadow-[0_50px_90px_-40px_rgba(0,0,0,0.95)]"
                >
                  <Image
                    src={hero.photo.src}
                    alt={hero.photo.alt}
                    width={hero.photo.width}
                    height={hero.photo.height}
                    priority
                    unoptimized
                    className="block h-auto w-full"
                  />
                </div>

                {/* tags: placed over the studio backdrop, clear of the face */}
                {hero.tags.slice(0, 4).map((tag, i) => (
                  <div
                    key={tag}
                    data-parallax={tagDepth[i]}
                    className={`absolute z-10 ${tagPos[i]} ${i > 1 ? "hidden sm:block" : ""}`}
                  >
                    <span
                      data-reveal
                      style={{ ["--d" as string]: `${750 + i * 120}ms` }}
                      className="relative flex items-center gap-2 whitespace-nowrap rounded-full border border-line-strong bg-ink-1/80 px-3.5 py-2 text-[0.8rem] text-bone shadow-[0_18px_40px_-18px_rgba(0,0,0,0.9)] backdrop-blur-md sm:px-4 sm:text-sm"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-blue" aria-hidden="true" />
                      {tag}
                    </span>
                  </div>
                ))}

                <figcaption className="sr-only">
                  {ownerName}, {hero.role}
                </figcaption>
              </figure>
            </Tilt>
          </div>

          {/* C · about + actions */}
          <div className="relative z-10 mt-12 lg:col-span-7 lg:row-start-2 lg:mt-9">
            <div className="grid gap-6 text-lg leading-relaxed text-bone-2 sm:grid-cols-2 sm:gap-8 sm:text-[1.05rem]">
              {about.paragraphs.map((p, i) => (
                <p key={i} data-reveal style={{ ["--d" as string]: `${520 + i * 90}ms` }}>
                  {p}
                </p>
              ))}
            </div>

            <div data-reveal style={{ ["--d" as string]: "700ms" }} className="mt-10 flex flex-wrap gap-3">
              <a href="#work" className="btn btn-primary">
                See My Work <span className="arrow" aria-hidden="true">→</span>
              </a>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                Message Me on WhatsApp
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-1 border-t border-line sm:grid-cols-3">
              {about.facts.map((f, i) => (
                <div
                  key={f.label}
                  data-reveal
                  style={{ ["--d" as string]: `${780 + i * 80}ms` }}
                  className={`border-b border-line py-4 sm:border-b-0 sm:pr-6 ${i > 0 ? "sm:border-l sm:pl-6" : ""}`}
                >
                  <dt className="label">{f.label}</dt>
                  <dd className="mt-1.5 text-[0.95rem] text-bone">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
