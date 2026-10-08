import type { Metadata } from "next";
import { pageMeta } from "@/lib/site";
import Link from "next/link";
import PageHero from "../components/PageHero";
import Visual from "../components/Visual";
import { regions, values } from "@/lib/content";
import { photoCredits } from "@/lib/photos";

export const metadata: Metadata = pageMeta({
  title: "About",
  description:
    "Klinflex Oil is an indigenous Nigerian oil and gas services company based in Lekki, Lagos, with a nationwide service network.",
  path: "/about",
});

const wrap = "mx-auto w-full max-w-[1400px] px-5 md:px-10";

export default function About() {
  return (
    <>
      <PageHero
        title="An indigenous company built on safety and straight answers."
        lead="Klinflex Oil delivers marine operations, offshore engineering, EPCI, ROV services, procurement, manpower and compliance for operators and indigenous companies alike."
        image="lagos"
      />

      <section className={`${wrap} grid gap-14 py-20 md:py-28 lg:grid-cols-2 lg:gap-20`}>
        <div className="space-y-6 text-lg leading-relaxed text-steel">
          <p>
            Our marine arm supports exploration, development and production with rigs,
            supply vessels, crew boats, barges and specialized marine equipment. We know
            how much a reliable charter matters to an offshore project, so we focus on
            safe, efficient and cost-effective solutions.
          </p>
          <p>
            We combine current technology, experienced people and OEM vendor relationships
            to deliver work that is both technically sound and commercially competitive.
            Whether we are supporting an IOC on a major offshore project or helping an
            indigenous company with regulatory compliance, the commitment is the same.
          </p>
        </div>
        <div className="border border-line">
          <Visual id="manpower" alt="Site team in safety vests and hard hats" />
        </div>
      </section>

      <section className="border-t border-line bg-navy py-20 md:py-28">
        <div className={`${wrap} grid gap-14 lg:grid-cols-2 lg:gap-20`}>
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-flare">Mission</h2>
            <p className="display mt-4 text-[clamp(1.6rem,2.6vw,2.4rem)]">
              World-class oil and gas services in a safe environment, with our clients&rsquo;
              needs above all else.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-flare">Vision</h2>
            <p className="display mt-4 text-[clamp(1.6rem,2.6vw,2.4rem)]">
              The most trusted and preferred indigenous oil and gas services company in Nigeria.
            </p>
          </div>
        </div>
      </section>

      <section className={`${wrap} py-20 md:py-28`}>
        <h2 className="display text-[clamp(1.9rem,3.6vw,3.2rem)]">How we work</h2>
        <div className="mt-12 grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="border-t border-flare pt-5">
              <h3 className="text-xl font-semibold tracking-tight">{v.title}</h3>
              <p className="mt-3 leading-relaxed text-steel">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line py-20 md:py-28">
        <div className={wrap}>
          <h2 className="display max-w-3xl text-[clamp(1.9rem,3.6vw,3.2rem)]">
            Nationwide reach from our Lagos head office.
          </h2>
          <ul className="mt-12 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
            {regions.map((r) => (
              <li
                key={r}
                className="flex items-center justify-between border-b border-r border-line px-6 py-8 text-xl font-medium tracking-tight"
              >
                {r}
                <span aria-hidden className="h-2 w-2 rounded-full bg-flare" />
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-12 inline-block rounded-sm bg-flare px-8 py-4 text-lg font-medium text-abyss transition-colors hover:bg-bone"
          >
            Work with us
          </Link>
        </div>
      </section>

      <section className="border-t border-line py-14">
        <div className={wrap}>
          <h2 className="text-sm font-semibold">Photo credits</h2>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-steel">
            Photography from Unsplash:{" "}
            {photoCredits.map((c, i) => (
              <span key={c.id}>
                <a
                  href={`https://unsplash.com/photos/${c.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-bone"
                >
                  {c.subject}
                </a>{" "}
                by {c.by}
                {i < photoCredits.length - 1 ? "; " : "."}
              </span>
            ))}
          </p>
        </div>
      </section>
    </>
  );
}
