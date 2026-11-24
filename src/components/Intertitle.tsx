type Props = { n: number; title: string; dark?: boolean };

/** Chapter opener: a ruled line that wipes in, the chapter number and title. */
export default function Intertitle({ n, title, dark }: Props) {
  return (
    <div className="mb-14 sm:mb-20">
      <div
        data-wipe
        className={`h-px w-full ${dark ? "bg-rule-dark" : "bg-rule"}`}
        aria-hidden="true"
      />
      <div className="mt-5 flex items-baseline gap-4">
        <span
          className={`font-display text-sm tabular-nums ${dark ? "text-accent-light" : "text-accent"}`}
          aria-hidden="true"
        >
          {String(n).padStart(2, "0")}
        </span>
        <h2
          data-reveal
          className="font-display text-sm font-medium uppercase tracking-[0.14em]"
        >
          {title}
        </h2>
      </div>
    </div>
  );
}
