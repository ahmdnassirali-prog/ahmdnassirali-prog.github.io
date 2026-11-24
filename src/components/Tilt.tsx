"use client";

import { useRef, type ReactNode } from "react";

/** Gentle pointer-follow tilt. Fine pointers only; does nothing on touch or reduced motion. */
export default function Tilt({ children, max = 4, className = "" }: { children: ReactNode; max?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  const enabled = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const onMove = (e: React.PointerEvent) => {
    if (!enabled() || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      if (!ref.current) return;
      ref.current.style.transform = `perspective(1400px) rotateX(${(-y * max).toFixed(2)}deg) rotateY(${(x * max).toFixed(2)}deg) translateY(-4px)`;
    });
  };
  const onLeave = () => {
    cancelAnimationFrame(frame.current);
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}
