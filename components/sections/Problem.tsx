const STATS = [
  { value: "15M+", label: "Global coach & clinician shortage" },
  { value: "27M", label: "Americans without coverage" },
  { value: "$60–70", label: "PMPM cost of live coaching" },
];

export function Problem() {
  return (
    <section
      id="problem"
      className="relative overflow-hidden rounded-[28px] bg-paper"
    >
      <div className="grid lg:min-h-[640px] lg:grid-cols-2">
        <div className="relative aspect-square lg:aspect-auto">
          <img
            src="/problem.png"
            alt="A person standing alone in a golden field, looking at their phone."
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center p-10 md:p-14 lg:p-16 xl:p-20">
          <p className="eyebrow">The problem</p>

          <h2 className="mt-6 max-w-md text-section font-normal tracking-tight text-ink">
            Most of your people
            <br />
            never ask for help.
          </h2>

          <p className="mt-6 max-w-sm text-base leading-relaxed text-ink-soft md:text-lg">
            And the ones who do are stuck on a waitlist.
          </p>

          <ul className="mt-12 space-y-5 md:space-y-6">
            {STATS.map((s) => (
              <li
                key={s.value}
                className="flex items-baseline gap-5 border-t border-ink/10 pt-5"
              >
                <span className="min-w-[5.5rem] text-3xl font-normal tracking-tight text-ink md:text-4xl">
                  {s.value}
                </span>
                <span className="text-sm leading-snug text-ink-muted">
                  {s.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
