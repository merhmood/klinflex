"use client";

import Link from "next/link";
import Brand from "./Brand";
import { useEffect, useState } from "react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/compliance", label: "Compliance" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-abyss/70 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:px-10">
          <Link
            href="/"
            onClick={close}
            aria-label="Klinflex Oil home"
          >
            <Brand />
          </Link>

          {/* Desktop */}
          <nav
            aria-label="Primary"
            className="hidden items-center gap-9 md:flex"
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-steel transition-colors hover:text-bone"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-sm bg-bone px-4 py-2 text-sm font-medium text-abyss transition-colors hover:bg-flare hover:text-bone"
            >
              Contact us
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 flex h-11 w-11 items-center justify-center md:hidden"
          >
            <span className="relative block h-3.5 w-6">
              <span
                className={`absolute left-0 h-0.5 w-6 bg-bone transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-6 bg-bone transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-6 bg-bone transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile panel. Sibling of the header, not a child: the header's backdrop-blur
        would otherwise become the containing block and clip this fixed panel. */}
      <nav
        id="mobile-menu"
        aria-label="Mobile"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-abyss px-5 pb-10 pt-6 md:hidden"
      >
        <ul className="border-t border-line">
          {links.map((l) => (
            <li key={l.href} className="border-b border-line">
              <Link
                href={l.href}
                onClick={close}
                className="block py-5 text-3xl font-semibold tracking-tight"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          onClick={close}
          className="mt-8 block rounded-sm bg-flare px-6 py-4 text-center text-lg font-medium text-abyss"
        >
          Contact us
        </Link>
      </nav>
    </>
  );
}
