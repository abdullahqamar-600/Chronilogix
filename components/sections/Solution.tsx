"use client";

const STEPS = [
  {
    label: "Week 0 · Intake",
    title: "Marcus shares what matters to him.",
    Visual: IntakeVisual,
  },
  {
    label: "Week 6 · Session",
    title: "Chronilogix asks. Marcus reflects.",
    Visual: SessionVisual,
  },
  {
    label: "Week 24 · Outcome",
    title: "Habits hold. Numbers move.",
    Visual: OutcomeVisual,
  },
] as const;

export function Solution() {
  return (
    <section
      id="solution"
      className="relative overflow-hidden rounded-[28px] bg-paper-warm pt-24 md:pt-32 lg:pt-40"
    >
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="eyebrow">A member’s journey</p>
          <h2 className="mt-6 text-display font-normal tracking-tight text-ink">
            From a single question
            <br />
            to lasting change.
          </h2>
          <a
            href="#book-a-demo"
            className="mt-8 inline-flex items-center gap-2 text-base font-medium text-brand-700 transition hover:text-brand-800"
          >
            See how it works
            <Arrow />
          </a>
        </div>
      </div>

      <div className="mt-14 px-1.5 pb-1.5 md:mt-20 md:px-2 md:pb-2">
        <div className="grid gap-1.5 md:gap-2 lg:grid-cols-3">
          {STEPS.map((s) => (
            <StepCard key={s.label} step={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({
  step,
}: {
  step: { label: string; title: string; Visual: React.ComponentType };
}) {
  const { Visual } = step;
  return (
    <article className="group overflow-hidden rounded-2xl bg-white">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Visual />
      </div>
      <div className="p-6 md:p-8 lg:p-10">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-ink-muted">
          {step.label}
        </p>
        <h3 className="mt-3 max-w-sm text-xl font-normal leading-snug text-ink md:text-2xl">
          {step.title}
        </h3>
      </div>
    </article>
  );
}

function IntakeVisual() {
  const items = [
    { label: "Family", value: "wife, daughter (12)" },
    { label: "Work", value: "logistics manager" },
    { label: "Joy", value: "weekend cooking with Lila" },
    { label: "Worry", value: "fear of insulin" },
    { label: "Goal", value: "fewer takeout nights" },
  ];
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-paper via-paper to-brand-50/70 p-6 md:p-10">
      <div className="w-full max-w-[280px] rounded-2xl border border-ink/10 bg-white p-5 shadow-soft md:p-6">
        <div className="mb-5 flex items-center gap-3 border-b border-ink/5 pb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600/15 text-sm font-medium text-brand-700">
            M
          </span>
          <div>
            <p className="text-sm font-medium text-ink">Marcus, 47</p>
            <p className="text-[11px] text-ink-muted">Type 2 diabetes</p>
          </div>
        </div>
        <ul className="space-y-2.5">
          {items.map((it, i) => (
            <li
              key={it.label}
              className="flex items-baseline justify-between gap-3"
              style={{
                animation: `fadeUp 600ms ease-out ${i * 400 + 400}ms forwards`,
                opacity: 0,
              }}
            >
              <span className="text-[10px] uppercase tracking-[0.14em] text-ink-muted">
                {it.label}
              </span>
              <span className="text-right text-xs text-ink-soft">
                {it.value}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SessionVisual() {
  const bubbles = [
    { from: "ai", text: "Last week you said cooking felt heavy. Anything shifted?" },
    { from: "user", text: "A little. I cooked twice." },
    { from: "ai", text: "Twice. What made that possible?", highlight: true },
    { from: "user", text: "I stopped making excuses, I guess." },
  ];
  return (
    <div className="absolute inset-0 flex flex-col justify-end gap-2 bg-gradient-to-br from-brand-50/40 via-paper to-paper-warm p-6 md:p-10">
      {bubbles.map((b, i) => (
        <div
          key={i}
          className={`flex ${b.from === "user" ? "justify-end" : "justify-start"}`}
          style={{
            animation: `fadeUp 600ms ease-out ${i * 700 + 400}ms forwards`,
            opacity: 0,
          }}
        >
          <div
            className={`max-w-[82%] rounded-2xl px-4 py-2.5 text-sm leading-snug ${
              b.from === "user"
                ? "rounded-tr-md bg-ink text-white"
                : b.highlight
                  ? "rounded-tl-md bg-brand-600 text-white shadow-soft"
                  : "rounded-tl-md border border-ink/5 bg-white text-ink-soft"
            }`}
          >
            {b.text}
          </div>
        </div>
      ))}
    </div>
  );
}

function OutcomeVisual() {
  const milestones = [
    { week: "Week 4", note: "Cooked once at home" },
    { week: "Week 12", note: "Switched to home lunches" },
    { week: "Week 24", note: "Cooks 3× weekly with Lila" },
  ];
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-paper to-brand-50/60 p-6 md:p-10">
      <div className="relative w-full max-w-[280px]">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-x-0 top-0 h-full w-full"
          aria-hidden
        >
          <path
            d="M 8 78 Q 30 72 50 50 T 92 14"
            stroke="#FF7434"
            strokeWidth="0.5"
            fill="none"
            pathLength={100}
            strokeDasharray={100}
            strokeDashoffset={100}
            style={{ animation: "drawLine 2.4s ease-out 1.8s forwards" }}
          />
        </svg>

        <ul className="relative space-y-7">
          {milestones.map((m, i) => (
            <li
              key={m.week}
              className="flex items-center gap-3"
              style={{
                animation: `fadeUp 600ms ease-out ${i * 700 + 700}ms forwards`,
                opacity: 0,
                marginLeft: `${i * 18}%`,
              }}
            >
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-600 text-[8px] font-medium text-white">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden>
                  <path
                    d="M1.5 4.5 3 6 6.5 2.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-brand-700">
                  {m.week}
                </p>
                <p className="text-xs text-ink-soft">{m.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
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
