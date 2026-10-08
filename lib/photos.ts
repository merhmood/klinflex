import { existsSync } from "node:fs";
import path from "node:path";

const dir = path.join(process.cwd(), "public", "images");

export const hasPhoto = (id: string) => existsSync(path.join(dir, `${id}.jpg`));

// Photos are from Unsplash (free to use under the Unsplash License).
export const photoCredits = [
  { file: "hero", subject: "Offshore rig and crane vessel", by: "J.f Manzanero", id: "3J2FB7BItdA" },
  { file: "marine", subject: "Offshore construction vessel", by: "J.f Manzanero", id: "0eqs4wjebyc" },
  { file: "rov", subject: "Subsea equipment lit over the seabed", by: "NOAA", id: "BfLOn4V0JgQ" },
  { file: "epci", subject: "Offshore platform topsides", by: "Laurenz Kruty", id: "kmeBkhMZ8Wc" },
  { file: "manpower", subject: "Safety-vested site team", by: "Ana Lucia Videira", id: "JjG6_-Fhkd4" },
  { file: "tenders", subject: "Reviewing contract documents", by: "Amina Atar", id: "Mqc-m8kgxkg" },
  { file: "compliance", subject: "Signing documents", by: "Romain Dancre", id: "doplSDELX7E" },
  { file: "about", subject: "Engineers reviewing a plan", by: "ThisisEngineering", id: "xYCBw1uIP_M" },
  { file: "lagos", subject: "Lagos waterfront", by: "Nupo Deyon Daniel", id: "67ruAEYmp4c" },
];
