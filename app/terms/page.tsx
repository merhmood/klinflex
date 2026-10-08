import type { Metadata } from "next";
import { pageMeta } from "@/lib/site";
import Link from "next/link";
import Legal, { type LegalSection } from "../components/Legal";
import { company } from "@/lib/content";

export const metadata: Metadata = pageMeta({
  title: "Terms of service",
  description:
    "Terms for using the Klinflex Oil website and our services, including our refund policy.",
  path: "/terms",
});

const email = <a href={`mailto:${company.email}`}>{company.email}</a>;

const sections: LegalSection[] = [
  {
    id: "about-terms",
    heading: "About these terms",
    body: (
      <p>
        These terms apply to your use of the Klinflex Oil website and to services we provide
        unless a signed contract, purchase order or charter party says otherwise. If it does,
        that document prevails where it conflicts with these terms. By using this website or
        engaging us, you agree to them.
      </p>
    ),
  },
  {
    id: "services",
    heading: "Our services",
    body: (
      <>
        <p>
          We provide vessel chartering and marine services, ROV services, EPCI, procurement,
          manpower supply, tender and bid packaging, and registration and compliance support,
          as described on this website. Descriptions on the site are general information, not
          an offer. Scope, price, schedule and deliverables are fixed in a written quotation,
          proposal or contract that you accept.
        </p>
        <p>
          Some services depend on third parties, including vessel owners, OEMs, regulators and
          IOC procurement teams. Where that is the case, dates we give are estimates unless a
          contract commits us to them.
        </p>
      </>
    ),
  },
  {
    id: "no-guarantee",
    heading: "Regulatory and tender outcomes",
    body: (
      <p>
        When we prepare bids, registrations, certificates or licences, we do the work with
        professional care, but decisions belong to the regulator, platform or client who
        receives them. We cannot guarantee that a bid will be won, or that a registration,
        certificate or licence will be granted or renewed, or how long an agency will take.
        You are responsible for the accuracy and completeness of the information and
        documents you give us.
      </p>
    ),
  },
  {
    id: "fees",
    heading: "Quotations, fees and payment",
    body: (
      <ul>
        <li>Quotations state the fees and are valid for the period shown on them.</li>
        <li>
          Unless the quotation says otherwise, fees exclude VAT, government and agency
          charges, third-party costs, travel and mobilisation, which we pass on at cost.
        </li>
        <li>
          We may require an advance or mobilisation payment before work starts, and we will
          invoice milestones or periods as set out in the quotation.
        </li>
        <li>Invoices are payable within the period stated on them.</li>
      </ul>
    ),
  },
  {
    id: "refunds",
    heading: "Refund policy",
    body: (
      <>
        <p>
          Much of our work involves committing time, people, vessels, equipment and
          government or third-party fees, so refunds depend on how far the work has
          progressed. Unless a signed contract says otherwise:
        </p>
        <ul>
          <li>
            <strong>Before work starts.</strong> If you cancel in writing before we have
            begun work or committed any third-party cost, we will refund any advance payment
            in full.
          </li>
          <li>
            <strong>After work starts.</strong> If you cancel after work has begun, we will
            refund the unused part of your payment after deducting the fees for work already
            done and any non-recoverable costs we have committed on your behalf.
          </li>
          <li>
            <strong>Government and third-party fees.</strong> Fees paid to agencies,
            regulators, platforms, certifying bodies, vessel owners or other third parties
            are refundable only if, and to the extent that, the third party refunds them to
            us.
          </li>
          <li>
            <strong>Chartering and mobilisation.</strong> Vessel, crew, ROV and equipment
            bookings follow the cancellation and demobilisation terms in the charter or
            service agreement, which may include cancellation charges.
          </li>
          <li>
            <strong>Services we fail to deliver.</strong> If we do not deliver a service we
            agreed to deliver, or deliver it materially below the agreed scope, tell us in
            writing within 14 days. We will first try to put it right at no extra charge. If
            we cannot, we will refund the fee for the part not delivered.
          </li>
          <li>
            <strong>Outcomes outside our control.</strong> Fees are not refundable because a
            bid is unsuccessful, or because a regulator or client refuses, delays or declines
            an application that we prepared and submitted correctly on the information you
            provided.
          </li>
        </ul>
        <p>
          To request a refund, email {email} with your invoice number and the reason. We will
          acknowledge the request within 5 business days and, where a refund is due, pay it
          to the original payment method within 30 days of agreeing it.
        </p>
      </>
    ),
  },
  {
    id: "client-duties",
    heading: "Your responsibilities",
    body: (
      <ul>
        <li>Give us accurate, complete and lawful information and documents on time.</li>
        <li>Provide access, approvals and decisions we reasonably need to do the work.</li>
        <li>Follow the HSE rules and safety instructions that apply to any site or vessel.</li>
        <li>
          Do not ask us to submit false, altered or misleading documents. We will refuse and
          may end the engagement.
        </li>
      </ul>
    ),
  },
  {
    id: "hse",
    heading: "Health, safety and environment",
    body: (
      <p>
        We operate a zero-tolerance policy on safety violations. We may stop or decline any
        activity we judge unsafe or non-compliant with applicable law, and doing so is not a
        breach of our obligations to you.
      </p>
    ),
  },
  {
    id: "ip",
    heading: "Intellectual property and confidentiality",
    body: (
      <>
        <p>
          The content, design and illustrations on this website belong to Klinflex Oil or its
          licensors. You may view and print pages for your own business use, but you may not
          copy, resell or republish them without our written permission.
        </p>
        <p>
          Each party will keep the other&rsquo;s non-public information confidential and use
          it only for the engagement, except where disclosure is required by law or needed to
          make a filing you have asked us to make.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    heading: "Limitation of liability",
    body: (
      <>
        <p>
          Nothing in these terms excludes liability that cannot be excluded by law, including
          for death or personal injury caused by negligence or for fraud.
        </p>
        <p>
          Subject to that, we are not liable for indirect or consequential loss, loss of
          profit, loss of contract or loss of opportunity, and our total liability arising from
          any engagement is limited to the fees you paid us for that engagement. This website
          is provided as is, and we do not promise it will always be available or error-free.
        </p>
      </>
    ),
  },
  {
    id: "termination",
    heading: "Suspension and termination",
    body: (
      <p>
        Either party may end an engagement by written notice, subject to the refund policy
        above and payment for work done and costs committed up to the termination date. We may
        suspend work if an invoice is overdue or if continuing would put people, the
        environment or legal compliance at risk.
      </p>
    ),
  },
  {
    id: "law",
    heading: "Governing law and disputes",
    body: (
      <p>
        These terms are governed by the laws of the Federal Republic of Nigeria. We will try
        to resolve any dispute through good-faith discussion first. If that fails, the courts
        of Lagos State have jurisdiction, unless a signed contract provides for arbitration
        or another forum.
      </p>
    ),
  },
  {
    id: "changes",
    heading: "Changes and contact",
    body: (
      <p>
        We may update these terms and will change the date above when we do. The terms in
        force when you accept a quotation apply to that engagement. Our handling of personal
        data is described in the <Link href="/privacy">Privacy Policy</Link>. Questions can be
        sent to {email} or by phone on <a href={company.phoneHref}>{company.phone}</a>.
      </p>
    ),
  },
];

export default function Terms() {
  return (
    <Legal
      title="Terms of service"
      lead="The terms for using this website and working with Klinflex Oil, including how refunds work."
      updated="8 October 2026"
      sections={sections}
    />
  );
}
