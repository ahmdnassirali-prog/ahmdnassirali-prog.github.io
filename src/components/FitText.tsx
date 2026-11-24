"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";

/**
 * Sets one line of display type so it spans its container exactly, edge to edge.
 * Measures at a base size, then scales the font-size; re-fits on resize and once webfonts load.
 */
export default function FitText({ children, className = "" }: { children: ReactNode; className?: string }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const box = boxRef.current;
    const text = textRef.current;
    if (!box || !text) return;
    const BASE = 100;
    const fit = () => {
      text.style.fontSize = `${BASE}px`;
      const w = text.getBoundingClientRect().width;
      if (w > 0) text.style.fontSize = `${((box.clientWidth / w) * BASE * 0.995).toFixed(2)}px`;
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(box);
    document.fonts?.ready.then(fit);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={boxRef} className={`w-full overflow-hidden ${className}`}>
      <span ref={textRef} className="inline-block whitespace-nowrap" style={{ fontSize: "9vw" }}>
        {children}
      </span>
    </div>
  );
}
