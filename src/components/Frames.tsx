import type { ReactNode } from "react";

export function BrowserFrame({
  url,
  children,
  className = "",
}: {
  url: string;
  children: ReactNode;
  className?: string;
}) {
  const host = url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  return (
    <div className={`overflow-hidden rounded-[10px] border border-line-strong bg-ink-2 ${className}`}>
      <div className="flex h-7 items-center gap-3 border-b border-line px-3 sm:h-8">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-bone/20" />
          <span className="h-2 w-2 rounded-full bg-bone/20" />
          <span className="h-2 w-2 rounded-full bg-bone/20" />
        </div>
        {host && (
          <div className="mx-auto max-w-[70%] truncate rounded-full bg-bone/[0.06] px-3 py-0.5 font-mono text-[0.62rem] text-bone-3 sm:text-[0.68rem]">
            {host}
          </div>
        )}
        <div className="w-8" aria-hidden="true" />
      </div>
      {children}
    </div>
  );
}

export function PhoneFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-[1.7rem] border border-line-strong bg-ink-1 p-[5px] shadow-[0_40px_80px_-24px_rgba(0,0,0,0.85)] ${className}`}
    >
      <div className="overflow-hidden rounded-[1.35rem]">{children}</div>
    </div>
  );
}
