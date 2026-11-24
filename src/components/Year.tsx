"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/** Current year, rendered on the client so the page can stay fully static. */
export default function Year() {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => null,
  );
  return <span suppressHydrationWarning>{year ?? ""}</span>;
}
