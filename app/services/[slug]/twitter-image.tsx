import { ogCard } from "@/lib/og";
import { capabilities, tiles } from "@/lib/content";

export const alt = "Klinflex Oil service";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return capabilities.map((c) => ({ slug: c.id }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = capabilities.find((x) => x.id === slug);
  const t = tiles.find((x) => x.id === slug);
  return ogCard({
    title: c?.title ?? "Klinflex Oil services",
    tagline: t?.tagline ?? "Oil and gas services in Nigeria",
    photo: c ? c.id : "hero",
  });
}
