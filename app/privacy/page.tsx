import type { Metadata } from "next";
import { pageMeta } from "@/lib/site";
import Legal, { type LegalSection } from "../components/Legal";
import { company } from "@/lib/content";

export const metadata: Metadata = pageMeta({
  title: "Privacy policy",
  description:
    "How Klinflex Oil collects, uses and protects personal information.",
  path: "/privacy",
});

const email = (
  <a href={`mailto:${company.email}`}>{company.email}</a>
);

const sections: LegalSection[] = [
  {
    id: "who-we-are",
    heading: "Who we are",
    body: (
      <p>
        Klinflex Oil (&ldquo;Klinflex&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is an oil
        and gas services company based at {company.address}. This policy explains how we
        handle personal information when you use this website or deal with us as a client,
        supplier, job applicant or business contact. We process personal data in line with
        the Nigeria Data Protection Act 2023 (NDPA) and the regulations of the Nigeria Data
        Protection Commission.
      </p>
    ),
  },
  {
    id: "what-we-collect",
    heading: "Information we collect",
    body: (
      <>
        <p>We collect only what we need to respond to you and deliver our services:</p>
        <ul>
          <li>
            <strong>Enquiry details</strong>: your name, company, email address, the service
            you are asking about and the message you write in our contact form.
          </li>
          <li>
            <strong>Correspondence</strong>: emails, calls and messages exchanged with us.
          </li>
          <li>
            <strong>Project and registration documents</strong>: company records, tax and
            statutory certificates, staff details and technical documents that clients give
            us so we can prepare bids, registrations and certificates on their behalf.
          </li>
          <li>
            <strong>Recruitment information</strong>: CVs, qualifications, safety training
            records and references for manpower supply.
          </li>
          <li>
            <strong>Basic technical data</strong>: standard server logs such as IP address,
            browser type and pages requested, created automatically when you visit.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "contact-form",
    heading: "How the contact form works",
    body: (
      <p>
        This website does not store contact form submissions. When you press &ldquo;Send
        enquiry&rdquo;, the form opens your own email application with your message
        pre-filled and addressed to {email}. Nothing is sent until you send that email
        yourself. Once we receive it, we handle it as described in this policy.
      </p>
    ),
  },
  {
    id: "how-we-use",
    heading: "How we use information",
    body: (
      <>
        <p>We use personal information to:</p>
        <ul>
          <li>respond to enquiries and prepare quotations or proposals;</li>
          <li>deliver contracted services, including vessel, ROV, EPCI, staffing, tender and registration work;</li>
          <li>submit documents to regulators, IOCs and platforms such as NipeX and NCDMB at a client&rsquo;s request;</li>
          <li>meet legal, tax, safety and regulatory obligations;</li>
          <li>keep our systems secure and improve this website.</li>
        </ul>
        <p>
          Our lawful bases are your consent, performance of a contract or steps taken before
          entering one, compliance with a legal obligation, and our legitimate interest in
          running and securing our business.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    heading: "Who we share it with",
    body: (
      <>
        <p>We do not sell personal information. We share it only when needed:</p>
        <ul>
          <li>
            with regulators, agencies, operators and platforms (for example CAC, FIRS, NCDMB,
            NIMASA, NipeX and IOC vendor portals) where a client has asked us to file or
            support an application;
          </li>
          <li>with vessel owners, crew providers, OEMs and subcontractors involved in a project;</li>
          <li>with professional advisers and IT or email service providers who work under confidentiality obligations;</li>
          <li>with authorities where the law requires it.</li>
        </ul>
        <p>
          If information is transferred outside Nigeria, for example to an international
          vendor portal, we take steps to ensure it remains protected as the NDPA requires.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    heading: "How long we keep it",
    body: (
      <p>
        We keep personal information only as long as needed for the purpose it was collected
        for, including any legal, tax, accounting or contractual retention period. Unsuccessful
        enquiries and recruitment records are deleted or anonymised once they are no longer
        needed.
      </p>
    ),
  },
  {
    id: "security",
    heading: "Security",
    body: (
      <p>
        We use reasonable technical and organisational measures to protect information from
        loss, misuse and unauthorised access, and we limit access to people who need it. No
        system is completely secure, so please avoid sending sensitive information by email
        unless it is necessary, and tell us at once if you think a message has gone astray.
      </p>
    ),
  },
  {
    id: "cookies",
    heading: "Cookies and analytics",
    body: (
      <p>
        This website does not currently use advertising or tracking cookies, and it loads
        its fonts from our own server. If we add analytics or similar tools in future, we
        will update this policy and ask for consent where the law requires it.
      </p>
    ),
  },
  {
    id: "your-rights",
    heading: "Your rights",
    body: (
      <>
        <p>Under the NDPA you have the right to:</p>
        <ul>
          <li>be informed about, and ask for a copy of, the personal data we hold about you;</li>
          <li>ask us to correct inaccurate or incomplete data;</li>
          <li>ask us to delete data we no longer have a lawful reason to keep;</li>
          <li>object to or ask us to restrict certain processing, and withdraw consent at any time;</li>
          <li>receive your data in a portable format where applicable;</li>
          <li>complain to the Nigeria Data Protection Commission.</li>
        </ul>
        <p>To use any of these rights, email {email}. We may need to confirm your identity first.</p>
      </>
    ),
  },
  {
    id: "third-party",
    heading: "Links to other sites",
    body: (
      <p>
        This website may link to regulator, client or partner websites. We do not control
        them and are not responsible for their privacy practices.
      </p>
    ),
  },
  {
    id: "changes",
    heading: "Changes and contact",
    body: (
      <p>
        We may update this policy and will change the date above when we do. Questions about
        privacy can be sent to {email} or by phone on{" "}
        <a href={company.phoneHref}>{company.phone}</a>.
      </p>
    ),
  },
];

export default function Privacy() {
  return (
    <Legal
      title="Privacy policy"
      lead="What we collect, why we collect it and the choices you have."
      updated="8 October 2026"
      sections={sections}
    />
  );
}
