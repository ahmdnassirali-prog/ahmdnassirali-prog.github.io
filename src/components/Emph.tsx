import { Fragment } from "react";

/** Renders "Deserves a *Better*" with the starred word as <em> (blue italic via .display em). */
export default function Emph({ text }: { text: string }) {
  const parts = text.split(/(\*[^*]+\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("*") && part.endsWith("*") ? (
          <em key={i}>{part.slice(1, -1)}</em>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}

/** Plain text version for aria-labels and metadata. */
export const plain = (text: string) => text.replace(/\*/g, "");
