import Image from "next/image";
import { site } from "@/config/site";
import Masthead from "./Masthead";
import { BrowserFrame, PhoneFrame } from "./Frames";

/**
 * Title page. Depth comes from four planes moving at different rates:
 *  back   - drafting grid (drifts slowest)
 *  mid    - the headline (moves with the page)
 *  front  - the RSSA desktop frame rising over the fold
 *  nearer - the phone frame, rising fastest and overlapping the desktop frame
 */
export default function Hero() {
  const rssa = site.projects.find((p) => p.status === "live" && p.images);

  return (
    <section id="top" className="grain relative isolate overflow-hidden bg-paper">
      {/* back plane: drafting grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div data-parallax="0.35" className="absolute inset-x-0 -top-[10%] h-[130%]">
          <svg className="h-full w-full text-rule" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="88" height="88" patternUnits="userSpaceOnUse">
                <path d="M88 0H0V88" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.55" />
              </pattern>
              <radialGradient id="fade" cx="70%" cy="40%" r="75%">
                <stop offset="0" stopColor="#fff" stopOpacity="1" />
                <stop offset="1" stopColor="#fff" stopOpacity="0" />
              </radialGradient>
              <mask id="gridmask">
                <rect width="100%" height="100%" fill="url(#fade)" />
              </mask>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" mask="url(#gridmask)" />
          </svg>
        </div>
      </div>

      <Masthead />

      <div className="relative mx-auto max-w-[1400px] px-[var(--gutter)]">
        {/* mid plane: the headline */}
        <div className="pb-16 pt-[clamp(4rem,13vh,8rem)] lg:pb-0">
          <h1
            data-lines
            className="font-display track-tighter max-w-[13ch] text-[clamp(2.9rem,8vw,6.6rem)] font-semibold leading-[0.95]"
          >
            {site.hero.headline.map((line, i) => (
              <span key={line} className="line-mask">
                <span style={{ ["--d" as string]: `${120 + i * 90}ms` }}>
                  {i === site.hero.headline.length - 1 ? (
                    <>
                      {line.replace(/\.$/, "")}
                      <span className="text-accent">.</span>
                    </>
                  ) : (
                    line
                  )}
                </span>
              </span>
            ))}
          </h1>

          <div className="mt-8 max-w-[34rem] sm:mt-10">
            <p data-reveal style={{ ["--d" as string]: "420ms" }} className="text-lg leading-relaxed text-ink-soft sm:text-xl">
              {site.hero.intro}
            </p>
            <div data-reveal style={{ ["--d" as string]: "520ms" }} className="mt-9 flex flex-wrap gap-3">
              <a href="#work" className="btn btn-solid">
                View my work <span className="arrow" aria-hidden="true">↓</span>
              </a>
              <a href="#contact" className="btn btn-ghost">
                Contact me
              </a>
            </div>
          </div>
        </div>

        {/* front planes: real work rising over the fold */}
        {rssa?.images && (
          <div
            aria-hidden="true"
            className="pointer-events-none relative mx-auto h-[clamp(15rem,52vw,40rem)] lg:ml-[40%] lg:mt-[-1rem] lg:h-[34rem]"
          >
            <div data-parallax="-0.12" className="absolute inset-x-0 top-0">
              <div data-reveal style={{ ["--d" as string]: "650ms" }}>
                <BrowserFrame url={rssa.url ?? ""} className="shadow-[0_40px_80px_-30px_rgba(14,38,28,0.45)]">
                  <Image
                    src={rssa.images.desktop}
                    alt=""
                    width={1600}
                    height={956}
                    priority
                    sizes="(min-width: 1024px) 60vw, 92vw"
                    className="block h-auto w-full"
                  />
                </BrowserFrame>
              </div>
            </div>
            {rssa.images.mobile && (
              <div
                data-parallax="-0.26"
                className="absolute -left-2 top-[38%] w-[27%] max-w-[13rem] sm:left-[-4%] lg:left-[-10%] lg:top-[22%] lg:w-[24%]"
              >
                <div data-reveal style={{ ["--d" as string]: "820ms" }}>
                  <PhoneFrame>
                    <Image
                      src={rssa.images.mobile}
                      alt=""
                      width={600}
                      height={1208}
                      sizes="13rem"
                      className="block h-auto w-full"
                    />
                  </PhoneFrame>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
