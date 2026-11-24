import type { ReactNode } from "react";

export function BrowserFrame({
  url,
  children,
  className = "",
  dark = false,
}: {
  url: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  const host = url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  return (
    <div
      className={`overflow-hidden rounded-[10px] border ${
        dark ? "border-white/10 bg-[#0b1f17]" : "border-ink/10 bg-white"
      } ${className}`}
    >
      <div
        className={`flex h-8 items-center gap-3 border-b px-3 sm:h-9 ${
          dark ? "border-white/10" : "border-ink/10 bg-[#f7f6f2]"
        }`}
      >
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        </div>
        {host && (
          <div className="mx-auto max-w-[70%] truncate rounded-full bg-ink/[0.05] px-3 py-0.5 text-[0.7rem] text-ink-soft sm:text-xs">
            {host}
          </div>
        )}
        <div className="w-10" aria-hidden="true" />
      </div>
      {children}
    </div>
  );
}

export function PhoneFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-[1.6rem] bg-ink p-[5px] shadow-[0_30px_60px_-20px_rgba(14,38,28,0.55)] ${className}`}
    >
      <div className="overflow-hidden rounded-[1.3rem]">{children}</div>
    </div>
  );
}
