import { site } from "@/config/site";
import Emph from "./Emph";

/**
 * "3 things every website needs", laid out like a poster: a laptop and phone
 * showing a generic website, with numbered speech-bubble cards pointing at them.
 * The screens are drawn in HTML (no client screenshots), sized with container units.
 */

function GenericSite({ compact = false }: { compact?: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0b1020] text-white [container-type:inline-size]">
      <div aria-hidden="true" className="absolute inset-0" style={{ background: "radial-gradient(70% 70% at 75% 40%, rgba(70,110,255,0.45), transparent 70%)" }} />
      {/* nav */}
      <div className="relative flex items-center justify-between" style={{ padding: compact ? "6cqw 6cqw" : "2.4cqw 4cqw" }}>
        <span className="flex items-center" style={{ gap: compact ? "2cqw" : "1cqw" }}>
          <span className="rounded-[25%] bg-[#5a86ff]" style={{ width: compact ? "6cqw" : "2.4cqw", height: compact ? "6cqw" : "2.4cqw" }} />
          <span className="font-semibold" style={{ fontSize: compact ? "4.4cqw" : "1.6cqw" }}>Your Business</span>
        </span>
        {compact ? (
          <span className="flex flex-col" style={{ gap: "1.2cqw" }}>
            <span className="block bg-white/70" style={{ width: "6cqw", height: "0.8cqw" }} />
            <span className="block bg-white/70" style={{ width: "6cqw", height: "0.8cqw" }} />
          </span>
        ) : (
          <span className="flex items-center" style={{ gap: "2.4cqw", fontSize: "1.2cqw" }}>
            <span className="text-white/70">Home</span>
            <span className="text-white/70">Services</span>
            <span className="text-white/70">About</span>
            <span className="text-white/70">Contact</span>
            <span className="rounded-full bg-[#2f5bf0] font-semibold" style={{ padding: "0.6cqw 1.6cqw" }}>
              Get started
            </span>
          </span>
        )}
      </div>
      {/* hero */}
      <div className="relative" style={{ padding: compact ? "8cqw 6cqw 0" : "5cqw 4cqw 0", maxWidth: compact ? "100%" : "52%" }}>
        <p className="font-[family-name:var(--font-instrument)] leading-[0.95]" style={{ fontSize: compact ? "11cqw" : "4.6cqw" }}>
          Grow your business online
        </p>
        <span className="mt-[2cqw] block rounded bg-white/25" style={{ width: compact ? "80%" : "70%", height: compact ? "1.8cqw" : "0.8cqw" }} />
        <span className="mt-[1.2cqw] block rounded bg-white/15" style={{ width: compact ? "60%" : "55%", height: compact ? "1.8cqw" : "0.8cqw" }} />
        <span
          className="mt-[3cqw] inline-block rounded-full bg-[#2f5bf0] font-semibold"
          style={{ fontSize: compact ? "4cqw" : "1.25cqw", padding: compact ? "2.4cqw 5cqw" : "0.8cqw 2cqw" }}
        >
          Contact us
        </span>
      </div>
      {/* layered panels */}
      {!compact && (
        <div aria-hidden="true" className="absolute" style={{ right: "6cqw", top: "16cqw", width: "34cqw", height: "24cqw" }}>
          <span className="absolute rounded-[1cqw] border border-white/20 bg-white/10 backdrop-blur" style={{ inset: "0 8cqw 6cqw 0" }} />
          <span className="absolute rounded-[1cqw] border border-white/25 bg-white/15 backdrop-blur" style={{ inset: "5cqw 0 0 9cqw" }} />
          <span className="absolute rounded-full bg-[#5a86ff]" style={{ left: "12cqw", top: "9cqw", width: "4cqw", height: "4cqw" }} />
          <span className="absolute rounded bg-white/40" style={{ left: "18cqw", top: "10cqw", width: "12cqw", height: "0.8cqw" }} />
          <span className="absolute rounded bg-white/25" style={{ left: "18cqw", top: "12cqw", width: "8cqw", height: "0.8cqw" }} />
        </div>
      )}
      {/* featured strip */}
      <div className="absolute inset-x-0 bottom-0 flex" style={{ gap: compact ? "3cqw" : "1.4cqw", padding: compact ? "0 6cqw 6cqw" : "0 4cqw 3cqw" }}>
        {Array.from({ length: compact ? 2 : 3 }).map((_, i) => (
          <span key={i} className="flex-1 rounded-[1cqw] border border-white/10 bg-white/[0.07]" style={{ height: compact ? "22cqw" : "8cqw" }} />
        ))}
      </div>
    </div>
  );
}

const arrowHead = (
  <marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
    <path d="M0 0L10 5L0 10z" fill="#7da2ff" />
  </marker>
);

/** One of the three points, drawn inside the screen. Sizes are container units of the screen. */
function Point({ n, title, body, compact }: { n: number; title: string; body: string; compact?: boolean }) {
  return (
    <div
      className="rounded-[1.2cqw] border border-[rgba(125,162,255,0.45)] bg-[#0e1634]/92 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.9)] backdrop-blur"
      style={{ padding: compact ? "3.6cqw 4.4cqw" : "1.5cqw 1.7cqw" }}
    >
      <p className="flex items-center font-semibold uppercase tracking-tight text-bone" style={{ gap: compact ? "2.4cqw" : "0.9cqw", fontSize: compact ? "4.6cqw" : "1.65cqw" }}>
        <span
          className="grid shrink-0 place-items-center rounded-full bg-blue-deep font-mono text-white"
          style={{ width: compact ? "7cqw" : "2.6cqw", height: compact ? "7cqw" : "2.6cqw", fontSize: compact ? "3.8cqw" : "1.35cqw" }}
        >
          {n}
        </span>
        {title}
      </p>
      <p className="text-bone-2" style={{ marginTop: compact ? "1.4cqw" : "0.6cqw", fontSize: compact ? "3.9cqw" : "1.35cqw", lineHeight: 1.35 }}>
        {body}
      </p>
    </div>
  );
}

export default function Essentials() {
  const [a, b, c] = site.essentials;

  return (
    <section
      id="essentials"
      className="grain relative scroll-mt-16 overflow-hidden border-t border-line bg-ink-1 px-[var(--gutter)] py-[clamp(3.5rem,7vh,5.5rem)]"
    >
      <div className="relative mx-auto max-w-[1400px]">
        <h2 data-lines className="display text-center text-[clamp(2.8rem,5.6vw,5.6rem)]">
          <span className="line-mask">
            <span>
              <Emph text="3 Things Your Website *Needs*" />
            </span>
          </span>
        </h2>
        <p data-reveal className="mt-3 text-center text-lg text-bone-2">
          Want more customers from your website? Start with these three.
        </p>

        {/* tablets & desktop: laptop, the three points inside the screen */}
        <div data-reveal className="relative mx-auto mt-10 hidden w-full max-w-[980px] sm:block">
          <div className="rounded-t-[1.1rem] bg-[#0b0c10] p-[1.6%] pb-[2.4%] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)] ring-1 ring-line-strong">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[0.3rem] [container-type:inline-size]">
              <GenericSite />
              <div aria-hidden="true" className="absolute inset-0 bg-[#05070f]/45" />
              {/* markers on the page */}
              {[
                { n: 1, x: "13%", y: "47%" },
                { n: 2, x: "75%", y: "38%" },
                { n: 3, x: "50%", y: "86%" },
              ].map((d) => (
                <span
                  key={d.n}
                  aria-hidden="true"
                  className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-deep shadow-[0_0_0_0.8cqw_rgba(58,96,255,0.3)]"
                  style={{ left: d.x, top: d.y, width: "1.6cqw", height: "1.6cqw" }}
                />
              ))}
              <svg aria-hidden="true" viewBox="0 0 160 100" preserveAspectRatio="none" className="draw-on absolute inset-0 h-full w-full" data-reveal style={{ ["--d" as string]: "400ms" }} fill="none">
                <defs>{arrowHead}</defs>
                <path pathLength={1} d="M20.8 47 C 20 56, 14 58, 12 63" stroke="#7da2ff" strokeWidth="1.6" vectorEffect="non-scaling-stroke" markerEnd="url(#ah)" />
                <path pathLength={1} d="M120 38 C 126 32, 128 24, 128 21" stroke="#7da2ff" strokeWidth="1.6" vectorEffect="non-scaling-stroke" markerEnd="url(#ah)" />
                <path pathLength={1} d="M80 86 C 92 86, 100 80, 104 73" stroke="#7da2ff" strokeWidth="1.6" vectorEffect="non-scaling-stroke" markerEnd="url(#ah)" />
              </svg>
              {/* the three points */}
              <div data-reveal style={{ ["--d" as string]: "600ms" }} className="absolute left-[3%] top-[64%] w-[29%]">
                <Point n={1} title={a.title} body={a.body} />
              </div>
              <div data-reveal style={{ ["--d" as string]: "750ms" }} className="absolute right-[3%] top-[4%] w-[29%]">
                <Point n={2} title={b.title} body={b.body} />
              </div>
              <div data-reveal style={{ ["--d" as string]: "900ms" }} className="absolute left-[60%] top-[50%] w-[29%]">
                <Point n={3} title={c.title} body={c.body} />
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="relative -mx-[6%] h-[clamp(10px,1.3vw,16px)] rounded-b-[1.1rem] bg-gradient-to-b from-[#3a3d45] via-[#26282e] to-[#16171b] ring-1 ring-line">
            <div className="absolute left-1/2 top-0 h-[42%] w-[15%] -translate-x-1/2 rounded-b-[0.5rem] bg-[#4a4d56]" />
          </div>
        </div>

        {/* phones: a phone with the three points inside */}
        <div data-reveal className="mx-auto mt-8 w-[78%] max-w-[20rem] sm:hidden">
          <div className="rounded-[2rem] bg-[#0b0c10] p-[3.5%] ring-1 ring-line-strong">
            <div className="relative aspect-[9/17] overflow-hidden rounded-[1.6rem] [container-type:inline-size]">
              <GenericSite compact />
              <div aria-hidden="true" className="absolute inset-0 bg-[#05070f]/55" />
              <div className="absolute inset-x-[5%] bottom-[5%] flex flex-col" style={{ gap: "3cqw" }}>
                {[a, b, c].map((e, i) => (
                  <Point key={e.title} n={i + 1} title={e.title} body={e.body} compact />
                ))}
              </div>
            </div>
          </div>
        </div>

        <p data-reveal className="mt-8 text-center">
          <span className="display text-[1.4rem] italic text-bone-2">Your website isn’t just a page online. </span>
          <span className="display text-[1.4rem]">
            It’s your <em className="text-blue">best salesperson.</em>
          </span>
        </p>
      </div>
    </section>
  );
}
