import type { Metadata } from "next";
import { pageMeta } from "@/lib/site";
import PageHero from "../components/PageHero";
import ContactForm from "../components/ContactForm";
import { company } from "@/lib/content";

export const metadata: Metadata = pageMeta({
  title: "Contact",
  description:
    "Talk to Klinflex Oil about vessels, ROVs, EPCI, manpower, tenders or compliance. Head office in Lekki Phase 1, Lagos.",
  path: "/contact",
});

export default function Contact() {
  return (
    <>
      <PageHero
        title="Tell us about the job."
        lead="Share the scope and timeline and we will come back with how we can help."
      />
      <section className="mx-auto grid w-full max-w-[1400px] gap-14 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
        <dl className="space-y-8 text-lg">
          <div>
            <dt className="text-sm text-steel">Phone</dt>
            <dd>
              <a href={company.phoneHref} className="hover:text-flare">
                {company.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm text-steel">Email</dt>
            <dd>
              <a href={`mailto:${company.email}`} className="hover:text-flare">
                {company.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm text-steel">Head office</dt>
            <dd>{company.address}</dd>
          </div>
          <div>
            <dt className="text-sm text-steel">Coverage</dt>
            <dd>All six geopolitical regions of Nigeria</dd>
          </div>
        </dl>
        <ContactForm email={company.email} />
      </section>
    </>
  );
}
