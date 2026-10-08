import { ImageResponse } from "next/og";
import { logoDataUrl, logoSize } from "@/lib/logo";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function Icon() {
  const logo = await logoDataUrl();
  const h = Math.round(size.height * 0.72);
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
          borderRadius: 0,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} width={w} height={h} alt="" />
      </div>
    ),
    size,
  );
}
