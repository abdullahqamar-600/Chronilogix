const NAV_LINKS = [
  { href: "#solution", label: "Solution" },
  { href: "#who-we-serve", label: "Who We Serve" },
  { href: "#why-chronilogix", label: "Why Chronilogix" },
];

export function Footer() {
  return (
    <footer
      className="relative isolate overflow-hidden bg-paper text-ink"
      style={{
        backgroundImage: "url('/footer.png')",
        backgroundSize: "100% auto",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container-page relative py-28 md:py-36 lg:py-44">
        <div className="flex flex-col gap-16 md:flex-row md:items-end md:justify-between md:gap-12">
          <div className="max-w-md">
            <img
              src="/cronilogix-logo.svg"
              alt="Chronilogix"
              className="h-9 w-auto md:h-10"
            />
            <p className="mt-8 text-base leading-relaxed text-ink-soft md:text-lg">
              Clinical-grade behavioral health coaching, at the scale your
              members deserve.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-col gap-5 md:items-end">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-base text-ink transition hover:text-ink-soft md:text-lg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-24 flex flex-col items-start gap-3 border-t border-ink/15 pt-8 text-xs text-ink-muted md:mt-32 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Chronilogix · HIPAA Compliant · Made in the USA</p>
          <p>Member data is never used to train our models.</p>
        </div>
      </div>
    </footer>
  );
}
