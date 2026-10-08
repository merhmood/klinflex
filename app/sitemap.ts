import type { MetadataRoute } from "next";
import { capabilities } from "@/lib/content";
import { siteUrl } from "@/lib/site";

// Update this date when site content changes meaningfully.
const lastModified = "2026-10-08";

const pages: { path: string; priority: number; changeFrequency: "monthly" | "yearly" }[] = [
  { path: "", priority: 1, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  ...capabilities.map((c) => ({
    path: `/services/${c.id}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  })),
  { path: "/compliance", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((p) => ({
    url: `${siteUrl}${p.path}`,
    lastModified,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
