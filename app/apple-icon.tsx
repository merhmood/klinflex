import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
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
          fontSize: 128,
          fontWeight: 800,
          borderRadius: 0,
        }}
      >
        K
      </div>
    ),
    size,
  );
}
