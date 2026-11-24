import { site } from "@/config/site";
import { chapters } from "./chapters";

export function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="currentColor" />
      <path
        d="M9 9.5v13M13.5 9.5l2.6 13 2.4-9 2.4 9 2.6-13"
        fill="none"
        stroke="var(--paper)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Masthead() {
  return (
    <header className="relative z-20 px-[var(--gutter)] pt-5 sm:pt-7">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6">
        <a href="#top" className="group flex items-center gap-3" aria-label={`${site.name}, back to top`}>
          <Monogram className="h-8 w-8 text-ink transition-transform duration-200 group-hover:-rotate-6" />
          <span className="max-w-[11rem] text-[0.8rem] font-medium leading-tight sm:max-w-none sm:text-[0.95rem]">
            {site.name}
          </span>
        </a>
        <nav aria-label="Primary" className="flex items-center gap-7">
          <ul className="hidden items-center gap-7 text-[0.95rem] text-ink-soft lg:flex">
            {chapters.slice(0, 4).map((c) => (
              <li key={c.id}>
                <a href={`#${c.id}`} className="transition-colors duration-150 hover:text-ink">
                  {c.title}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-solid !h-10 !px-5 text-sm">
            Contact me
          </a>
        </nav>
      </div>
    </header>
  );
}
