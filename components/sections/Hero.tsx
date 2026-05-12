export function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden rounded-[28px]"
      style={{
        backgroundColor: "#D8C9BC",
        backgroundImage: "url('/hero-landscape.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/20 via-black/5 to-transparent"
      />
      <div className="container-page relative flex min-h-screen flex-col items-center text-center">
        <div className="pt-24 md:pt-32">
          <h1 className="max-w-5xl text-display font-normal tracking-tight text-ink">
            Clinical-grade coaching.
            <br className="hidden md:block" />
            For every member you serve.
          </h1>
        </div>

        <div className="mt-auto flex max-w-2xl flex-col items-center gap-6 pb-14 md:pb-20">
          <p className="text-base leading-relaxed text-ink-soft md:text-lg">
            Chronilogix is the AI-native behavioral health and chronic care
            coaching platform built on Dr. Ken Resnicow’s life’s work in
            Motivational Interviewing — clinical-grade outcomes at a fraction
            of the cost of live care.
          </p>

          {/* TODO: Calendly URL */}
          <a
            href="#book-a-demo"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-white shadow-soft transition hover:bg-ink-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2"
          >
            Book a Demo
            <Arrow />
          </a>

          <GlassPill />
        </div>
      </div>
    </section>
  );
}

function GlassPill() {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/25 px-4 py-2 shadow-soft backdrop-blur-md">
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-white">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
          <path
            d="M7 1.4v2.8M7 9.8v2.8M3.1 3.1l2 2M8.9 8.9l2 2M1.4 7h2.8M9.8 7h2.8M3.1 10.9l2-2M8.9 5.1l2-2"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="text-xs font-medium text-ink md:text-sm">
        Built on 30 years of clinical research in Motivational Interviewing
      </span>
    </div>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M3 7h8M7.5 3.5 11 7l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
