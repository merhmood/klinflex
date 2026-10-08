import { ImageResponse } from "next/og";
import { logoDataUrl, logoSize } from "@/lib/logo";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default async function Icon() {
  const logo = await logoDataUrl();
  const h = Math.round(size.height * 0.8);
  const w = Math.round((logoSize.width / logoSize.height) * h);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          borderRadius: 12,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} width={w} height={h} alt="" />
      </div>
    ),
    size,
  );
}
