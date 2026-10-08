import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Visual from "./components/Visual";
import { tiles } from "@/lib/content";
import { defaultDescription, defaultTitle, pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: defaultTitle,
  absoluteTitle: true,
  description: defaultDescription,
  path: "/",
});

const wrap = "mx-auto w-full max-w-[1400px] px-5 md:px-10";

// The home page is a set of short entry points. Each section ends in a link
// to the page that holds the full detail.
export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-32 md:pb-24">
        <div aria-hidden className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-abyss/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/40 to-transparent" />
        </div>
        <div className={`${wrap} relative`}>
          <h1 className="display max-w-5xl text-[clamp(2.75rem,8vw,7.5rem)]">
            <span className="rise block" style={{ animationDelay: "0.1s" }}>
              Marine, subsea
            </span>
            <span className="rise block" style={{ animationDelay: "0.25s" }}>
              and engineering
            </span>
            <span className="rise block text-bone/70" style={{ animationDelay: "0.4s" }}>
              for Nigeria&rsquo;s energy sector.
            </span>
          </h1>
          <p
            className="rise mt-8 max-w-xl text-lg leading-relaxed text-bone/80 md:text-xl"
            style={{ animationDelay: "0.7s" }}
          >
            An indigenous oil and gas services company, working in all six geopolitical
            regions.
          </p>
          <div className="rise mt-10 flex flex-wrap gap-4" style={{ animationDelay: "0.85s" }}>
            <Link
              href="/services"
              className="rounded-sm bg-bone px-6 py-3 font-medium text-abyss transition-colors hover:bg-flare hover:text-bone"
            >
              See what we do
            </Link>
            <Link
              href="/contact"
              className="rounded-sm border border-white/30 px-6 py-3 font-medium transition-colors hover:border-bone"
            >
              Talk to our team
            </Link>
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <section className="border-t border-line py-20 md:py-28">
        <div className={wrap}>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <h2 className="display text-[clamp(2rem,4.5vw,4rem)]">Six services</h2>
            <Link href="/services" className="text-steel hover:text-bone">
              All services
            </Link>
          </div>
          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {tiles.map((t) => (
              <Link key={t.id} href={`/services/${t.id}`} className="group block">
                <Visual
                  id={t.id}
                  alt={t.name}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="aspect-[4/3] border border-line transition-colors group-hover:border-flare"
                />
                <h3 className="mt-4 text-lg font-semibold tracking-tight">{t.name}</h3>
                <p className="mt-1 text-steel">{t.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance teaser */}
      <section className="border-t border-line bg-navy py-20 md:py-28">
        <div className={`${wrap} flex flex-wrap items-center justify-between gap-8`}>
          <div className="max-w-2xl">
            <h2 className="display text-[clamp(2rem,4.5vw,4rem)]">
              A NipeX verified contractor.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-steel">
              Registered with CAC, FIRS, BPP, NCDMB and the other bodies IOCs check before
              they award work.
            </p>
          </div>
          <Link
            href="/compliance"
            className="rounded-sm border border-white/25 px-6 py-3 font-medium transition-colors hover:border-bone"
          >
            View registrations
          </Link>
        </div>
      </section>

      {/* About teaser */}
      <section className="border-t border-line py-20 md:py-28">
        <div className={`${wrap} grid items-center gap-10 lg:grid-cols-2 lg:gap-20`}>
          <div className="border border-line">
            <Visual id="about" alt="Engineers reviewing a project plan" />
          </div>
          <div>
            <h2 className="display text-[clamp(2rem,4.5vw,4rem)]">
              We sit on the same side as our clients.
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-steel">
              Safety-first, client-first and based in Lekki, Lagos.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-block rounded-sm border border-white/25 px-6 py-3 font-medium transition-colors hover:border-bone"
            >
              About Klinflex
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line bg-navy py-20 md:py-28">
        <div className={`${wrap} flex flex-wrap items-center justify-between gap-8`}>
          <h2 className="display max-w-3xl text-[clamp(2rem,4.5vw,4rem)]">
            Tell us about the job.
          </h2>
          <Link
            href="/contact"
            className="rounded-sm bg-flare px-8 py-4 text-lg font-medium text-abyss transition-colors hover:bg-bone"
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
