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
 *   arch    - a tall rounded panel the portrait stands in; the head rises above it
 *   orbit   - a thin hand-drawn loop around the figure
 *   photo   - the cut-out portrait, fading into the page at the waist
 *   tags    - service tags floating at different depths
 */
export default function Hero() {
  const { hero, about, ownerName } = site;
  const tagPos = [
    "left-[-2%] top-[30%] sm:left-[-8%]",
    "right-[-2%] top-[18%] sm:right-[-6%]",
    "left-[0%] top-[62%] sm:left-[-10%]",
    "right-[0%] top-[52%] sm:right-[-8%]",
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
              <figure className="relative mx-auto aspect-[5/6] w-full max-w-[36rem]">
                {/* glow */}
                <div aria-hidden="true" data-parallax="0.12" className="absolute inset-[-12%] -z-10">
                  <div
                    className="h-full w-full rounded-full"
                    style={{ background: "radial-gradient(closest-side, rgba(70,110,255,0.30), rgba(58,96,255,0.08) 60%, transparent)" }}
                  />
                </div>

                {/* arch */}
                <div
                  aria-hidden="true"
                  data-curtain
                  style={{ ["--d" as string]: "300ms" }}
                  className="absolute inset-x-[10%] bottom-0 top-[17%] overflow-hidden rounded-t-[999px] border border-line-strong border-b-0 [mask-image:linear-gradient(to_bottom,#000_70%,transparent)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-ink-3 via-ink-2 to-ink-0" />
                  <div
                    className="absolute inset-0"
                    style={{ background: "radial-gradient(60% 45% at 50% 30%, rgba(90,134,255,0.28), transparent 70%)" }}
                  />
                </div>

                {/* orbit */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 500 600"
                  fill="none"
                  data-reveal
                  style={{ ["--d" as string]: "600ms" }}
                  className="orbit pointer-events-none absolute inset-0 h-full w-full overflow-visible"
                >
                  <path
                    pathLength={1}
                    className="draw"
                    d="M 62 210 C 70 90, 210 22, 330 52 C 452 82, 500 210, 470 320 C 446 410, 400 470, 352 520"
                    stroke="rgba(237,231,220,0.42)"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                  <path d="M 340 512 L 352 520 L 346 506" stroke="rgba(237,231,220,0.42)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="62" cy="210" r="3.5" fill="var(--blue)" />
                </svg>

                {/* photo */}
                <div data-parallax="-0.03" className="absolute inset-x-0 bottom-0 top-0">
                  <div data-reveal style={{ ["--d" as string]: "450ms" }} className="absolute inset-x-[4%] bottom-0 top-[2%]">
                    <Image
                      src={hero.photo.src}
                      alt={hero.photo.alt}
                      width={hero.photo.width}
                      height={hero.photo.height}
                      priority
                      sizes="(min-width: 1024px) 36vw, 90vw"
                      className="absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 object-contain object-bottom"
                      style={{
                        WebkitMaskImage: "linear-gradient(to bottom, #000 74%, transparent 99%)",
                        maskImage: "linear-gradient(to bottom, #000 74%, transparent 99%)",
                      }}
                    />
                  </div>
                </div>

                {/* tags */}
                {hero.tags.slice(0, 4).map((tag, i) => (
                  <div key={tag} data-parallax={tagDepth[i]} className={`absolute ${tagPos[i]} ${i > 1 ? "hidden sm:block" : ""}`}>
                    <span
                      data-reveal
                      style={{ ["--d" as string]: `${750 + i * 120}ms` }}
                      className="relative flex items-center gap-2 whitespace-nowrap rounded-full border border-line-strong bg-ink-1/75 px-3.5 py-2 text-[0.8rem] text-bone shadow-[0_18px_40px_-18px_rgba(0,0,0,0.9)] backdrop-blur-md sm:px-4 sm:text-sm"
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
