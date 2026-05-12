const COLUMNS: { title: string; links: string[] }[] = [
  {
    title: "Platform",
    links: ["How It Works", "The Methodology", "Integrations", "Changelog"],
  },
  {
    title: "Solutions",
    links: ["Employers", "Universities", "Health Plans", "App Partners"],
  },
  {
    title: "Company",
    links: ["About", "Dr. Ken Resnicow", "Careers", "Blog", "Responsible AI"],
  },
  {
    title: "Resources",
    links: ["Case Studies", "Trust & Security", "Clinical Approach"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "HIPAA Notice"],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-page py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-medium uppercase tracking-[0.16em] text-white/50">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/80 transition hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-start gap-3 py-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Chronilogix · HIPAA Compliant · Made in the USA</p>
          <p className="text-white/40">
            Member data is never used to train our models.
          </p>
        </div>
      </div>
    </footer>
  );
}
