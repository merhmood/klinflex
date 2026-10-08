import type { Metadata } from "next";
import { pageMeta } from "@/lib/site";
import Link from "next/link";
import PageHero from "../components/PageHero";
import Visual from "../components/Visual";
import type { ArtId } from "../components/Illustration";
import { capabilities } from "@/lib/content";

export const metadata: Metadata = pageMeta({
  title: "Services",
  description:
    "Vessel chartering, ROVs, EPCI, manpower, tenders and registration support for Nigeria's oil and gas sector.",
  path: "/services",
});

export default function Services() {
  return (
    <>
      <PageHero
        title="Six services, one accountable contractor."
        lead="From chartering a vessel to getting your company registered on NipeX, pick the service you need or combine them on one project."
      />
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10">
        {capabilities.map((c, i) => (
          <article
            key={c.id}
            className="grid items-center gap-10 border-b border-line py-16 md:py-24 lg:grid-cols-2 lg:gap-20"
          >
            <Link
              href={`/services/${c.id}`}
              className={`block border border-line transition-colors hover:border-flare ${
                i % 2 ? "lg:order-2" : ""
              }`}
            >
              <Visual id={c.id as ArtId} alt={c.title} />
            </Link>
            <div>
              <h2 className="display text-[clamp(1.9rem,3.6vw,3.2rem)]">{c.title}</h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-steel">{c.summary}</p>
              <Link
                href={`/services/${c.id}`}
                className="mt-8 inline-block rounded-sm border border-white/20 px-6 py-3 font-medium transition-colors hover:border-bone"
              >
                View details
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
