import Link from "next/link";
import { company } from "@/lib/content";

const cols = [
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/compliance", label: "Compliance" },
      { href: "/contact", label: "Contact" },
      { href: "/privacy", label: "Privacy policy" },
      { href: "/terms", label: "Terms of service" },
    ],
  },
  {
    heading: "Services",
    links: [
      { href: "/services/marine", label: "Vessel chartering" },
      { href: "/services/rov", label: "ROVs and mini ROVs" },
      { href: "/services/epci", label: "EPCI" },
      { href: "/services/manpower", label: "Manpower" },
      { href: "/services/tenders", label: "Tenders" },
      { href: "/services/compliance", label: "Registration" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line py-16">
      <div className="mx-auto grid w-full max-w-[1400px] gap-12 px-5 md:px-10 lg:grid-cols-[2fr_1fr_1fr_1.5fr]">
        <div>
          <p className="text-2xl font-semibold tracking-tight">
            Klinflex<span className="text-flare"> Oil</span>
          </p>
          <p className="mt-3 max-w-xs text-steel">
            Partnering for excellence in Nigeria&rsquo;s energy sector.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.heading}>
            <h2 className="text-sm font-semibold">{c.heading}</h2>
            <ul className="mt-4 space-y-2.5 text-steel">
              {c.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-bone">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h2 className="text-sm font-semibold">Head office</h2>
          <address className="mt-4 space-y-2.5 not-italic text-steel">
            <p>{company.address}</p>
            <p>
              <a href={company.phoneHref} className="hover:text-bone">
                {company.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${company.email}`} className="hover:text-bone">
                {company.email}
              </a>
            </p>
          </address>
        </div>
      </div>
    </footer>
  );
}
