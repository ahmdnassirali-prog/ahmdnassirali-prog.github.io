"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/config/site";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
];

/**
 * Logo: a "D." monogram. D for Digital Experience Designer, closed with the same
 * full stop the headlines use, set in the blue accent.
 */
export function Mark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="15.25" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.2" />
      <path
        d="M10.5 9.5v13M10.5 9.5h3.25a6.5 6.5 0 0 1 0 13H10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="23.4" cy="21.1" r="1.7" fill="var(--blue)" />
    </svg>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled && !open
          ? "border-b border-line bg-ink-0/75 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1560px] items-center justify-between gap-6 px-[var(--gutter)] sm:h-20">
        <a href="#top" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <Mark className="h-8 w-8 text-bone transition-transform duration-300 group-hover:rotate-[-8deg]" />
          <span className="max-w-[10.5rem] text-[0.8rem] leading-tight text-bone sm:max-w-none sm:text-sm">
            {site.name}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          <ul className="flex items-center gap-8 text-sm text-bone-2">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors duration-150 hover:text-bone">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-primary !h-10 !px-5 text-sm">
            Let’s Talk
          </a>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="relative grid h-11 w-11 place-items-center rounded-full border border-line-strong md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span
            aria-hidden="true"
            className={`absolute h-px w-4 bg-bone transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-[3px]"}`}
          />
          <span
            aria-hidden="true"
            className={`absolute h-px w-4 bg-bone transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-[3px]"}`}
          />
        </button>
      </div>

      <div
        id="mobile-menu"
        ref={menuRef}
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-ink-0 px-[var(--gutter)] pb-10 pt-8 md:hidden"
      >
        <nav aria-label="Mobile">
          <ul className="border-t border-line">
            {[...links, { href: "#contact", label: "Contact" }].map((l, i) => (
              <li key={l.href} className="border-b border-line">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-5"
                >
                  <span className="display text-5xl">{l.label}</span>
                  <span className="label">{String(i + 1).padStart(2, "0")}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="label mt-10">{site.hero.locationLine}</p>
      </div>
    </header>
  );
}
