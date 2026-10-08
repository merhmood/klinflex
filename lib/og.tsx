/* eslint-disable @next/next/no-img-element -- ImageResponse renders to a PNG; next/image does not apply */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

const W = 1200;
const H = 630;

/** Branded social card: page photo, dark wash, wordmark, title. */
export async function ogCard({
  title,
  tagline,
  photo,
}: {
  title: string;
  tagline?: string;
  photo: string;
}) {
  let bg: string | undefined;
  try {
    const buf = await readFile(join(process.cwd(), "public", "images", `${photo}.jpg`));
    bg = `data:image/jpeg;base64,${buf.toString("base64")}`;
  } catch {
    bg = undefined;
  }

  const titleSize = title.length > 60 ? 54 : title.length > 36 ? 66 : 80;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#04080e",
        }}
      >
        {bg && (
          <img
            src={bg}
            width={W}
            height={H}
            alt=""
            style={{ position: "absolute", top: 0, left: 0, objectFit: "cover" }}
          />
        )}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: W,
            height: H,
            display: "flex",
            background:
              "linear-gradient(to top, rgba(4,8,14,0.96) 0%, rgba(4,8,14,0.78) 45%, rgba(4,8,14,0.55) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            padding: "60px 72px 72px",
          }}
        >
          <div style={{ display: "flex", fontSize: 42, fontWeight: 700, color: "#eceff3" }}>
            <span>Klinflex</span>
            <span style={{ color: "#e8590c", marginLeft: 12 }}>Oil</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: titleSize,
                fontWeight: 700,
                lineHeight: 1.04,
                letterSpacing: -2,
                color: "#eceff3",
                maxWidth: 1000,
              }}
            >
              {title}
            </div>
            {tagline && (
              <div style={{ display: "flex", marginTop: 24, fontSize: 32, color: "#a9b8c8" }}>
                {tagline}
              </div>
            )}
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: W,
            height: 10,
            display: "flex",
            background: "#e8590c",
          }}
        />
      </div>
    ),
    { width: W, height: H },
  );
}
