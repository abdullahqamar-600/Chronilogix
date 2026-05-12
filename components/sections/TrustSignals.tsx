import { AETNA_QUOTE, NamedQuote } from "@/components/NamedQuote";
import { ComplianceBadges } from "@/components/ComplianceBadges";

const STATS = [
  {
    value: "400+",
    label: "Peer-reviewed clinical studies validating our methodology",
  },
  {
    value: "50–70%",
    label: "Reduction in live-coaching cost for health plans",
  },
  {
    value: "25%",
    label: "Additional employees engaged in care (Aetna)",
  },
];

export function TrustSignals() {
  return (
    <section
      id="section-credibility-bar"
      className="section bg-brand-50"
    >
      <div className="container-page">
        <p className="eyebrow text-center">Trusted in healthcare</p>

        <div className="mx-auto mt-8 max-w-3xl">
          <NamedQuote
            quote={AETNA_QUOTE.quote}
            attribution={AETNA_QUOTE.attribution}
            variant="anchor"
          />
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3 md:gap-6">
          {STATS.map((stat) => (
            <div
              key={stat.value}
              className="border-t border-ink/10 pt-6 md:border-t-0 md:border-l md:pl-6 md:pt-0"
            >
              <p className="text-4xl font-medium tracking-tight text-ink md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-5 text-center">
          <ComplianceBadges />
          <p className="max-w-2xl text-base font-medium leading-snug text-ink md:text-lg">
            Member data is never used to train our models.
            <span className="ml-2 text-brand-700">Not now. Not ever.</span>
          </p>
          <p className="text-xs uppercase tracking-[0.18em] text-ink-muted">
            Built for healthcare. Verified for enterprise.
          </p>
        </div>
      </div>
    </section>
  );
}
