import { ogCard } from "@/lib/og";

export const alt = "Klinflex Oil services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    title: "Six services, one accountable contractor.",
    tagline: "Vessels, ROVs, EPCI, manpower, tenders and registration",
    photo: "marine",
  });
}
