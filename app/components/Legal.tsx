import PageHero from "./PageHero";

export type LegalSection = { id: string; heading: string; body: React.ReactNode };

export default function Legal({
  title,
  lead,
  updated,
  sections,
}: {
  title: string;
  lead: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero title={title} lead={lead}>
        <p className="mt-6 text-sm text-steel">Last updated {updated}</p>
      </PageHero>
      <div className="mx-auto grid w-full max-w-[1400px] gap-14 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)] lg:gap-24">
        <nav aria-label="On this page" className="lg:sticky lg:top-28 lg:self-start">
          <ul className="space-y-3 border-l border-line pl-4 text-sm text-steel">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="hover:text-bone">
                  {s.heading}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="max-w-3xl space-y-14">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-28">
              <h2 className="text-2xl font-semibold tracking-tight">{s.heading}</h2>
              <div className="mt-4 space-y-4 leading-relaxed text-steel [&_a]:text-bone [&_a]:underline [&_li]:pl-1 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
                {s.body}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
