import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a1424",
          color: "#e8590c",
          fontSize: 46,
          fontWeight: 800,
          borderRadius: 14,
        }}
      >
        K
      </div>
    ),
    size,
  );
}
