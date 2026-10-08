import Link from "next/link";
import PageHero from "./components/PageHero";

export default function NotFound() {
  return (
    <PageHero
      title="That page doesn't exist."
      lead="The link may be out of date. Start from the services list or contact our team."
    >
      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/services"
          className="rounded-sm bg-bone px-6 py-3 font-medium text-abyss transition-colors hover:bg-flare hover:text-bone"
        >
          View services
        </Link>
        <Link
          href="/contact"
          className="rounded-sm border border-white/30 px-6 py-3 font-medium transition-colors hover:border-bone"
        >
          Contact us
        </Link>
      </div>
    </PageHero>
  );
}
