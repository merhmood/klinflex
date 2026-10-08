import type { Metadata } from "next";
import { pageMeta } from "@/lib/site";
import Link from "next/link";
import PageHero from "../components/PageHero";
import Visual from "../components/Visual";
import { capabilities, registry } from "@/lib/content";

export const metadata: Metadata = pageMeta({
  title: "Compliance and registrations",
  description:
    "NipeX verified contractor with CAC, FIRS, BPP, NCDMB, NSITF, ITF, PENCOM and ISO support for IOC and government vendors.",
  path: "/compliance",
});

const compliance = capabilities.find((c) => c.id === "compliance")!;

export default function Compliance() {
  return (
    <>
      <PageHero
        title="Verified, registered, compliant."
        lead="Klinflex is a NipeX verified contractor, registered with the bodies that IOCs and government agencies check before they award work. We handle the same process for our clients."
      />

      <section className="mx-auto w-full max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <h2 className="display text-[clamp(1.9rem,3.6vw,3.2rem)]">Registrations we hold and support</h2>
        <ul className="mt-12 grid grid-cols-2 border-l border-t border-line sm:grid-cols-4 lg:grid-cols-5">
          {registry.map((r) => (
            <li
              key={r}
              className="border-b border-r border-line px-5 py-8 text-xl font-medium tracking-tight transition-colors hover:bg-navy"
            >
              {r}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-line bg-navy py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-[1400px] items-start gap-14 px-5 md:px-10 lg:grid-cols-2 lg:gap-20">
          <div className="border border-line">
            <Visual id="compliance" alt="Certificates and compliance" />
          </div>
          <div className="space-y-12">
            {compliance.groups.map((g) => (
              <div key={g.heading} className="border-t border-flare pt-5">
                <h3 className="text-xl font-semibold tracking-tight">{g.heading}</h3>
                <ul className="mt-4 space-y-2.5 text-steel">
                  {g.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line py-20">
        <div className="mx-auto flex w-full max-w-[1400px] flex-wrap items-center justify-between gap-6 px-5 md:px-10">
          <p className="display text-[clamp(1.8rem,3.5vw,3rem)]">Need a certificate or registration?</p>
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
