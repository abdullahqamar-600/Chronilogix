export function FinalCTA() {
  return (
    <section id="book-a-demo" className="section bg-ink text-white">
      <Glow />
      <div className="container-page relative">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <h2 className="max-w-2xl text-section font-normal leading-tight text-white">
              The shortage isn’t going away.
              <br />
              Your members don’t have to keep waiting.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75 md:text-lg">
              Book a 30-minute demo. We’ll show you Chronilogix in a live
              session, walk through the clinical methodology behind it, and
              model the impact for your specific member volume. No slide
              decks. Just the platform.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 md:justify-end">
            {/* TODO: Calendly URL */}
            <a href="#book-a-demo" className="btn-primary">
              Book a Demo
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path
                  d="M3 7h8M7.5 3.5 11 7l-3.5 3.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Glow() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute -top-32 -right-20 h-[420px] w-[420px] rounded-full bg-brand-600/40 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 h-[360px] w-[360px] rounded-full bg-brand-700/30 blur-3xl" />
    </div>
  );
}
