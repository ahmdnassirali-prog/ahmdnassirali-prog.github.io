import Emph from "./Emph";

/** Oversized editorial section title, with an optional superscript count and a side note. */
export default function SectionHead({
  title,
  count,
  aside,
}: {
  title: string;
  count?: number;
  aside?: string;
}) {
  return (
    <div className="mb-16 grid items-end gap-8 sm:mb-24 lg:grid-cols-12">
      <h2 data-lines className="display text-[clamp(3.4rem,9vw,9.5rem)] lg:col-span-8">
        <span className="line-mask">
          <span>
            <Emph text={title} />
            {count !== undefined && (
              <sup className="ml-2 align-top font-mono text-[0.13em] tracking-normal text-blue not-italic">
                ({String(count).padStart(2, "0")})
              </sup>
            )}
          </span>
        </span>
      </h2>
      {aside && (
        <p data-reveal className="max-w-[26rem] text-bone-2 lg:col-span-4 lg:pb-4">
          {aside}
        </p>
      )}
    </div>
  );
}
