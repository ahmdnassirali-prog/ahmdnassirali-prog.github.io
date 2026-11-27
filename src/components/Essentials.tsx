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

function Card({ n, title, body }: { n: number; title: string; body: string }) {
  return (
    <div className="rounded-[1.3rem] bg-bone p-5 text-ink-0 shadow-[0_30px_60px_-28px_rgba(0,0,0,0.95)] xl:p-6">
      <p className="display text-[2.6rem] leading-none text-blue-deep">{n}.</p>
      <h3 className="mt-2 text-[1.2rem] font-semibold uppercase leading-tight tracking-tight">{title}</h3>
      <p className="mt-1.5 text-[0.92rem] leading-snug text-ink-3/80">{body}</p>
    </div>
  );
}

const arrowHead = (
  <marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
    <path d="M0 0L10 5L0 10z" fill="var(--blue)" />
  </marker>
);

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

        {/* desktop: card | arrow | laptop | arrows | cards */}
        <div className="mt-10 hidden items-center lg:grid lg:grid-cols-[minmax(0,1fr)_4.5rem_minmax(0,2.1fr)_4.5rem_minmax(0,1fr)]">
          <div data-reveal style={{ ["--d" as string]: "300ms" }}>
            <Card n={1} title={a.title} body={a.body} />
          </div>
          <svg aria-hidden="true" viewBox="0 0 72 40" className="draw-on w-full" data-reveal style={{ ["--d" as string]: "500ms" }} fill="none">
            <defs>{arrowHead}</defs>
            <path pathLength={1} d="M70 20 C 50 6, 26 6, 6 20" stroke="var(--blue)" strokeWidth="2" markerEnd="url(#ah)" />
          </svg>
          <div data-reveal className="relative">
            <div className="rounded-t-[1.1rem] bg-[#0b0c10] p-[1.8%] pb-[2.6%] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)] ring-1 ring-line-strong">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[0.3rem]">
                <GenericSite />
              </div>
            </div>
            <div aria-hidden="true" className="relative -mx-[7%] h-[clamp(10px,1.3vw,16px)] rounded-b-[1.1rem] bg-gradient-to-b from-[#3a3d45] via-[#26282e] to-[#16171b] ring-1 ring-line">
              <div className="absolute left-1/2 top-0 h-[42%] w-[15%] -translate-x-1/2 rounded-b-[0.5rem] bg-[#4a4d56]" />
            </div>
          </div>
          <svg aria-hidden="true" viewBox="0 0 72 300" preserveAspectRatio="none" className="draw-on h-[19rem] w-full" data-reveal style={{ ["--d" as string]: "650ms" }} fill="none">
            <defs>{arrowHead}</defs>
            <path pathLength={1} d="M2 150 C 40 150, 30 62, 66 62" stroke="var(--blue)" strokeWidth="2" vectorEffect="non-scaling-stroke" markerEnd="url(#ah)" />
            <path pathLength={1} d="M2 150 C 40 150, 30 238, 66 238" stroke="var(--blue)" strokeWidth="2" vectorEffect="non-scaling-stroke" markerEnd="url(#ah)" />
          </svg>
          <div className="flex h-[22rem] flex-col justify-between">
            <div data-reveal style={{ ["--d" as string]: "800ms" }}>
              <Card n={2} title={b.title} body={b.body} />
            </div>
            <div data-reveal style={{ ["--d" as string]: "950ms" }}>
              <Card n={3} title={c.title} body={c.body} />
            </div>
          </div>
        </div>

        {/* phones & tablets: laptop, arrow, cards */}
        <div className="mt-10 lg:hidden">
          <div data-reveal className="mx-auto w-[94%] max-w-[36rem]">
            <div className="rounded-t-[1rem] bg-[#0b0c10] p-[1.8%] pb-[2.6%] ring-1 ring-line-strong">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[0.3rem]">
                <GenericSite />
              </div>
            </div>
            <div aria-hidden="true" className="-mx-[7%] h-3 rounded-b-[1rem] bg-gradient-to-b from-[#3a3d45] to-[#16171b]" />
          </div>
          <svg aria-hidden="true" viewBox="0 0 40 60" className="draw-on mx-auto my-4 h-14 w-10" data-reveal fill="none">
            <defs>{arrowHead}</defs>
            <path pathLength={1} d="M20 2 C 8 20, 32 34, 20 54" stroke="var(--blue)" strokeWidth="2" markerEnd="url(#ah)" />
          </svg>
          <ol className="grid gap-3 sm:grid-cols-3">
            {[a, b, c].map((e, i) => (
              <li key={e.title} data-reveal style={{ ["--d" as string]: `${i * 80}ms` }}>
                <Card n={i + 1} title={e.title} body={e.body} />
              </li>
            ))}
          </ol>
        </div>

        <p data-reveal className="mt-10 text-center">
          <span className="display text-[1.5rem] italic text-bone-2">Your website isn’t just a page online. </span>
          <span className="display text-[1.5rem]">
            It’s your <em className="text-blue">best salesperson.</em>
          </span>
        </p>
      </div>
    </section>
  );
}
