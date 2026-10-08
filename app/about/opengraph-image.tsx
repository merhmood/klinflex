import { ogCard } from "@/lib/og";

export const alt = "About Klinflex Oil";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    title: "An indigenous company built on safety and straight answers.",
    tagline: "About Klinflex Oil, Lekki, Lagos",
    photo: "lagos",
  });
}
