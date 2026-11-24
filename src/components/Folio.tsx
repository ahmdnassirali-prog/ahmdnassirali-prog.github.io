"use client";

import { useEffect, useRef, useState } from "react";
import { chapters } from "./chapters";

/**
 * The folio: a small running header that names the chapter you are in,
 * and opens the chapter index. Hidden on the title page.
 */
export default function Folio() {
  const [current, setCurrent] = useState<number>(-1);
  const [open, setOpen] = useState(false);
  const [up, setUp] = useState(true);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let frame = 0;
    let lastY = window.scrollY;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      if (Math.abs(y - lastY) > 6) {
        setUp(y < lastY);
        lastY = y;
      }
      const line = window.innerHeight * 0.4;
      let idx = -1;
      chapters.forEach((c, i) => {
        const el = document.getElementById(c.id);
        if (el && el.getBoundingClientRect().top <= line) idx = i;
      });
      setCurrent(idx);
    };
    const on = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      if (!panelRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    panelRef.current?.querySelector("a")?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  // Shown inside the chapters while reading back up (or while the index is open);
  // it steps aside on the closing Contact chapter so the ending stays clean.
  const visible = open || (current >= 0 && current < chapters.length - 1 && up);
  const c = chapters[Math.max(0, current)];

  return (
    <div
      ref={panelRef}
      className={`fixed bottom-4 left-1/2 z-40 -translate-x-1/2 transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] sm:bottom-6 sm:left-6 sm:translate-x-0 ${
        visible ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0 sm:translate-x-0"
      }`}
      aria-hidden={!visible}
    >
      <div
        id="folio-index"
        className={`absolute bottom-full left-0 mb-2 w-60 origin-bottom-left rounded-2xl border border-white/10 bg-ink p-2 text-paper shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] transition-[opacity,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:origin-bottom ${
          open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
        }`}
        hidden={!open}
      >
        <nav aria-label="Chapters">
          <ul>
            {chapters.map((ch, i) => (
              <li key={ch.id}>
                <a
                  href={`#${ch.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={i === current ? "location" : undefined}
                  className={`flex items-baseline gap-3 rounded-xl px-3 py-2.5 text-[0.95rem] transition-colors duration-150 hover:bg-white/10 ${
                    i === current ? "text-paper" : "text-paper/65"
                  }`}
                >
                  <span className="font-display w-5 text-xs tabular-nums text-accent-light">
                    {String(ch.n).padStart(2, "0")}
                  </span>
                  {ch.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="folio-index"
        tabIndex={visible ? 0 : -1}
        className="flex h-11 items-center gap-3 rounded-full border border-white/10 bg-ink py-0 pl-4 pr-3 text-sm text-paper shadow-[0_12px_30px_-12px_rgba(0,0,0,0.5)] transition-transform duration-150 active:scale-[0.97]"
      >
        <span className="font-display text-xs tabular-nums text-accent-light">{String(c.n).padStart(2, "0")}</span>
        <span key={c.id} className="min-w-[6.5rem] text-left">
          {c.title}
        </span>
        <span className="sr-only">, open chapter index</span>
        <svg
          viewBox="0 0 16 16"
          className={`h-4 w-4 text-paper/70 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path d="M4 10l4-4 4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
