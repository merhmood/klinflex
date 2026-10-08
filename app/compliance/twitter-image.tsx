import { ogCard } from "@/lib/og";

export const alt = "Klinflex Oil compliance and registrations";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    title: "Verified, registered, compliant.",
    tagline: "NipeX verified contractor. CAC, FIRS, BPP, NCDMB",
    photo: "compliance",
  });
}
