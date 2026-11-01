import { ImageResponse } from "next/og";
export const alt =
  "Hi, I’m Chris. Computer Science & Statistics at Duke.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#f5f7fc",
        padding: 70,
        color: "#17243d",
      }}
    >
      <div style={{ display: "flex", fontSize: 25 }}>
        CHRIS HILL / CS + STATISTICS @ DUKE
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 85,
          letterSpacing: -4,
          lineHeight: 1.05,
        }}
      >
        <span>Hi, I’m</span>
        <span style={{ color: "#315bea" }}>Chris</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 22,
        }}
      >
        <span>Software. AI research. Technology with purpose.</span>
        <span>chrisjhill.com</span>
      </div>
    </div>,
    size,
  );
}
