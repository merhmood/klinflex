import { ogCard } from "@/lib/og";

export const alt = "Klinflex Oil: marine, subsea and engineering services in Nigeria";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    title: "Marine, subsea and engineering for Nigeria's energy sector.",
    tagline: "Oil and gas services across all six regions of Nigeria",
    photo: "hero",
  });
}
