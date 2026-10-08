import type { Metadata } from "next";
import { company } from "./content";

// Set NEXT_PUBLIC_SITE_URL in production to the real domain.
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://klinflex.com").replace(
  /\/$/,
  "",
);

export const siteName = "Klinflex Oil";
export const defaultTitle = "Klinflex Oil | Marine, subsea and engineering services in Nigeria";
export const defaultDescription =
  "Indigenous Nigerian oil and gas services company: vessel chartering, ROVs, EPCI, manpower, tenders and regulatory compliance across all six geopolitical regions.";
export const ogImage = {
  url: "/images/hero.jpg",
  width: 1800,
  height: 1012,
  alt: "Offshore rig and crane vessel at sunset",
};

export const orgId = `${siteUrl}/#organization`;

/** Metadata for a page. Share images come from each route's opengraph-image / twitter-image file. */
export function pageMeta({
  title,
  absoluteTitle,
  description,
  path,
}: {
  title: string;
  /** Use the title as-is, skipping the "| Klinflex Oil" template. */
  absoluteTitle?: boolean;
  description: string;
  path: string;
}): Metadata {
  const full = absoluteTitle ? title : `${title} | ${siteName}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName,
      locale: "en_NG",
      title: full,
      description,
      url: path,
    },
    twitter: {
      card: "summary_large_image",
      title: full,
      description,
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": orgId,
  name: siteName,
  url: siteUrl,
  description: defaultDescription,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}${ogImage.url}`,
  telephone: "+2348097890745",
  email: company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "#23 Bashorun Okusanya Street, Lekki Phase 1",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  areaServed: { "@type": "Country", name: "Nigeria" },
  knowsAbout: [
    "Vessel chartering",
    "ROV services",
    "Engineering, procurement, construction and installation",
    "Manpower supply",
    "Tender and bid packaging",
    "NipeX and NCDMB registration",
  ],
};
