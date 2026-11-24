import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#0e261c",
          color: "#eeece4",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 28 }}>
          <div style={{ width: 44, height: 44, borderRadius: 11, background: "#eaa53d" }} />
          {site.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 84, fontWeight: 700, lineHeight: 1, letterSpacing: -3 }}>
          {site.hero.headline.map((l) => (
            <div key={l}>{l}</div>
          ))}
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#a8b4ab" }}>{`Web design & development · ${site.location} and worldwide`}</div>
      </div>
    ),
    size,
  );
}
