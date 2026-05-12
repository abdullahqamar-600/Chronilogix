"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#solution", label: "Solution" },
  { href: "#who-we-serve", label: "Who We Serve" },
  { href: "#why-chronilogix", label: "Why Chronilogix" },
  { href: "#pricing", label: "Pricing" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 w-full transition-all ${
        scrolled
          ? "bg-paper/85 backdrop-blur-md border-b border-ink/5"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <a href="#" className="flex items-center gap-2 text-ink">
          <Logo />
          <span className="text-base font-medium tracking-tight">Chronilogix</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-soft transition hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div
          className={`hidden lg:flex transition-opacity duration-200 ${
            scrolled ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          {/* TODO: Calendly URL */}
          <a
            href="#book-a-demo"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white shadow-soft transition hover:bg-ink-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2"
          >
            Book a Demo
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-ink/10"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span
              className={`block h-px w-5 bg-ink transition-transform ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-ink transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-px w-5 bg-ink transition-transform ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-ink/5 bg-paper">
          <div className="container-page py-6">
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-ink-soft transition hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#book-a-demo"
                className="mt-2 inline-flex items-center justify-center gap-2 self-start rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white shadow-soft transition hover:bg-ink-soft"
              >
                Book a Demo
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

function Logo() {
  return (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-brand-600 text-white">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
        <path
          d="M7 1.4v2.8M7 9.8v2.8M3.1 3.1l2 2M8.9 8.9l2 2M1.4 7h2.8M9.8 7h2.8M3.1 10.9l2-2M8.9 5.1l2-2"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
