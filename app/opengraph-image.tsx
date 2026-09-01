import { ImageResponse } from "next/og";

export const alt = "Nikita — Roblox / Luau Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, color: "#f5f7fa", background: "#08090c", fontFamily: "sans-serif", position: "relative" }}>
      <div style={{ position: "absolute", inset: 30, border: "1px solid rgba(255,255,255,.12)", display: "flex" }} />
      <div style={{ color: "#4da3ff", fontSize: 22, letterSpacing: 5, marginBottom: 28 }}>GAMEPLAY · ARCHITECTURE · SYSTEMS</div>
      <div style={{ fontSize: 130, lineHeight: .9, fontWeight: 800, letterSpacing: -8 }}>NIKITA</div>
      <div style={{ fontSize: 38, color: "#aeb7c4", marginTop: 28, letterSpacing: 5 }}>ROBLOX / LUAU DEVELOPER</div>
    </div>,
    size,
  );
}
