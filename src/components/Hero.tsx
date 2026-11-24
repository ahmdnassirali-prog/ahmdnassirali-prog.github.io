import Image from "next/image";
import { site } from "@/config/site";
import Emph from "./Emph";
import { BrowserFrame, PhoneFrame } from "./Frames";
import Tilt from "./Tilt";

/**
 * Hero. Oversized editorial headline with the real work set beside its last line.
 * The showcase is a layered stage in perspective:
 *   back   - a second RSSA screen, dimmed, drifting slowest
 *   mid    - the RSSA homepage in a browser frame
 *   front  - the phone view, rising fastest
 *   light  - a soft blue wash behind everything
 */
export default function Hero() {
  const rssa = site.projects.find((p) => p.status === "completed" && p.images && p.url);
  const lines = site.hero.headline;

  return (
    <section id="top" className="grain relative isolate overflow-hidden bg-ink-0 pt-24 sm:pt-28">
      {/* atmosphere */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="rules absolute inset-0" />
        <div
          data-parallax="0.2"
          className="absolute right-[-10%] top-[28%] h-[70vmax] w-[70vmax] rounded-full opacity-90"
          style={{ background: "radial-gradient(closest-side, rgba(58,96,255,0.20), rgba(58,96,255,0.06) 55%, transparent)" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink-0" />
      </div>

      <div className="relative mx-auto max-w-[1560px] px-[var(--gutter)]">
        <div className="mb-8 flex items-center justify-between gap-6 sm:mb-10">
          <p data-reveal className="label flex items-center gap-3">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue" aria-hidden="true" />
            {site.name} · Independent
          </p>
          <p data-reveal className="label hidden sm:block">Portfolio</p>
        </div>

        <h1 data-lines className="display text-[clamp(3.4rem,9.4vw,10rem)]">
          {lines.map((line, i) => (
            <span
              key={line}
              className={`line-mask ${i === 1 ? "md:pl-[8.33%]" : ""}`}
            >
              <span style={{ ["--d" as string]: `${100 + i * 110}ms` }}>
                <Emph text={line} />
              </span>
            </span>
          ))}
        </h1>

        <div className="mt-10 grid gap-14 pb-[clamp(4rem,9vw,8rem)] lg:mt-0 lg:grid-cols-12 lg:gap-8">
          {/* copy */}
          <div className="lg:col-span-5 lg:pt-10 xl:col-span-4">
            <p data-reveal style={{ ["--d" as string]: "450ms" }} className="max-w-[30rem] text-lg leading-relaxed text-bone-2 sm:text-[1.2rem]">
              {site.hero.intro}
            </p>
            <div data-reveal style={{ ["--d" as string]: "550ms" }} className="mt-10 flex flex-wrap gap-3">
              <a href="#work" className="btn btn-primary">
                Explore My Work <span className="arrow" aria-hidden="true">→</span>
              </a>
              <a href="#contact" className="btn btn-outline">
                Let’s Talk
              </a>
            </div>
            <p data-reveal style={{ ["--d" as string]: "650ms" }} className="label mt-10 flex items-center gap-3">
              <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
              {site.hero.locationLine}
            </p>
          </div>

          {/* layered showcase of real work */}
          {rssa?.images && (
            <div className="relative mb-10 lg:col-span-7 lg:col-start-6 lg:mb-0 lg:-mt-[6rem] xl:-mt-[7.5rem]">
              <a
                href="#work"
                className="group relative block [perspective:1800px]"
                aria-label={`See the ${rssa.title} concept in Selected Work`}
              >
                <Tilt max={3}>
                  <div className="relative aspect-[16/11.5] lg:[transform:rotateY(-11deg)_rotateX(5deg)] lg:[transform-style:preserve-3d]">
                    {/* back plane */}
                    {rssa.images.details?.[0] && (
                      <div data-parallax="0.07" className="absolute right-0 top-0 w-[72%] opacity-55">
                        <div data-reveal style={{ ["--d" as string]: "650ms" }}>
                          <BrowserFrame url="" className="shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)]">
                            <Image src={rssa.images.details[0].src} alt="" width={1600} height={956} sizes="40vw" className="block h-auto w-full" />
                          </BrowserFrame>
                        </div>
                      </div>
                    )}
                    {/* mid plane */}
                    <div data-parallax="-0.04" className="absolute bottom-[6%] left-[4%] w-[86%]">
                      <div data-reveal style={{ ["--d" as string]: "760ms" }}>
                        <BrowserFrame url={rssa.url ?? ""} className="shadow-[0_60px_120px_-40px_rgba(0,0,0,0.95)]">
                          <Image
                            src={rssa.images.desktop}
                            alt=""
                            width={1600}
                            height={956}
                            priority
                            sizes="(min-width: 1024px) 52vw, 92vw"
                            className="block h-auto w-full"
                          />
                        </BrowserFrame>
                      </div>
                    </div>
                    {/* front plane */}
                    {rssa.images.mobile && (
                      <div data-parallax="-0.16" className="absolute -bottom-[14%] -left-[3%] w-[24%] sm:left-[-6%]">
                        <div data-reveal style={{ ["--d" as string]: "900ms" }}>
                          <PhoneFrame>
                            <Image src={rssa.images.mobile} alt="" width={600} height={1208} sizes="16rem" className="block h-auto w-full" />
                          </PhoneFrame>
                        </div>
                      </div>
                    )}
                  </div>
                </Tilt>

                {/* caption tag */}
                <span className="absolute -bottom-16 right-0 flex items-center gap-3 text-sm text-bone-2 sm:-bottom-10">
                  <span className="label hidden !text-bone-3 sm:inline">Featured</span>
                  <span className="text-bone">{rssa.title}</span>
                  <span className="text-bone-3">· {rssa.kind === "client" ? "Client project" : "Independent concept"}</span>
                  <span className="arrow text-blue transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden="true">↓</span>
                </span>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
