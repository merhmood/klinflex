import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import PageHero from "../../components/PageHero";
import { capabilities } from "@/lib/content";
import JsonLd from "../../components/JsonLd";
import { orgId, pageMeta, siteUrl } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return capabilities.map((c) => ({ slug: c.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = capabilities.find((x) => x.id === slug);
  if (!c) return {};
  return pageMeta({
    title: c.title,
    description: c.summary,
    path: `/services/${c.id}`,
    image: `/images/${c.id}.jpg`,
  });
}

// The page shell renders immediately; the slug-dependent content streams in
// behind this boundary so navigation stays instant.
export default function ServicePage({ params }: Props) {
  return (
    <Suspense fallback={<ServiceFallback />}>
      <ServiceContent params={params} />
    </Suspense>
  );
}

function ServiceFallback() {
  return (
    <section
      aria-busy="true"
      className="min-h-[70svh] border-b border-line bg-navy"
    />
  );
}

async function ServiceContent({ params }: Props) {
  const { slug } = await params;
  const idx = capabilities.findIndex((x) => x.id === slug);
  if (idx < 0) notFound();
  const c = capabilities[idx];
  const next = capabilities[(idx + 1) % capabilities.length];

  const url = `${siteUrl}/services/${c.id}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: c.title,
      description: c.summary,
      url,
      provider: { "@id": orgId },
      areaServed: { "@type": "Country", name: "Nigeria" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: c.title,
        itemListElement: c.groups.flatMap((g) =>
          g.items.map((name) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name },
          })),
        ),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
        { "@type": "ListItem", position: 3, name: c.title, item: url },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHero title={c.title} lead={c.summary} image={c.id}>
        <Link
          href="/contact"
          className="mt-10 inline-block rounded-sm bg-flare px-6 py-3 font-medium text-abyss transition-colors hover:bg-bone"
        >
          Request this service
        </Link>
      </PageHero>

      <div className="mx-auto w-full max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {c.groups.map((g) => (
            <section key={g.heading} className="border-t border-flare pt-5">
              <h2 className="text-xl font-semibold tracking-tight">{g.heading}</h2>
              <ul className="mt-5 space-y-3 text-steel">
                {g.items.map((i) => (
                  <li key={i} className="border-b border-line pb-3">
                    {i}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>

      <section className="border-t border-line bg-navy py-16">
        <div className="mx-auto flex w-full max-w-[1400px] flex-wrap items-center justify-between gap-6 px-5 md:px-10">
          <Link href="/services" className="text-steel hover:text-bone">
            All services
          </Link>
          <Link
            href={`/services/${next.id}`}
            className="text-xl font-medium tracking-tight hover:text-flare md:text-2xl"
          >
            Next: {next.title}
          </Link>
        </div>
      </section>
    </>
  );
}
