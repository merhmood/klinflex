import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const logoSize = { width: 404, height: 475 };

/** public/logo.png as a data URL, for ImageResponse (share cards and icons). */
export async function logoDataUrl() {
  const buf = await readFile(join(process.cwd(), "public", "logo.png"));
  return `data:image/png;base64,${buf.toString("base64")}`;
}
