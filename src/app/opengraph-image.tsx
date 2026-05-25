import { ImageResponse } from "next/og";

export const alt = "Rahul Maurya";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        padding: "80px",
        fontFamily: "sans-serif",
      }}
    >
      {/* Accent dot */}
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: 16,
          background: "#6366f1",
          marginBottom: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 32,
          fontWeight: 700,
          color: "white",
        }}
      >
        R
      </div>

      <div style={{ fontSize: 72, fontWeight: 800, color: "white", lineHeight: 1.1, marginBottom: 20 }}>
        Rahul Maurya
      </div>

      <div style={{ fontSize: 32, color: "#a5b4fc", fontWeight: 400 }}>
        Product Manager
      </div>

      {/* Bottom rule */}
      <div
        style={{
          position: "absolute",
          bottom: 80,
          right: 80,
          fontSize: 24,
          color: "#6366f1",
          fontWeight: 600,
        }}
      >
        rahulmaurya.vercel.app
      </div>
    </div>,
    { ...size }
  );
}
