import { ogCard } from "@/lib/og";

export const alt = "Contact Klinflex Oil";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    title: "Tell us about the job.",
    tagline: "Talk to our team in Lekki, Lagos",
    photo: "lagos",
  });
}
