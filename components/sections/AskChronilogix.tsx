"use client";

import { useState } from "react";

const SUGGESTIONS = [
  { label: "Aetna case study", prompt: "Show me the Aetna outcome data." },
  { label: "Cost vs. live coaching", prompt: "How does Chronilogix compare on cost to live coaching?" },
  { label: "Pricing & ROI", prompt: "What does pricing look like for our population?" },
  { label: "HIPAA & data", prompt: "How is member data handled and stored?" },
];

const STATS = [
  { value: "400+", label: "clinical studies" },
  { value: "30 years", label: "of MI research" },
  { value: "HIPAA", label: "compliant" },
];

export function AskChronilogix() {
  const [value, setValue] = useState("");

  return (
    <section id="ask-chronilogix" className="section bg-brand-50">
      <div className="container-page">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <p className="eyebrow">Try it yourself</p>

          <h2 className="mt-6 text-section font-normal tracking-tight text-ink md:text-display">
            Ask anything about Chronilogix.
          </h2>

          <div className="mt-12 w-full">
            <div className="overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-soft transition focus-within:border-ink/30">
              <div className="relative p-5">
                <textarea
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  rows={3}
                  placeholder="Ask about clinical methodology, integration, pricing, or compliance…"
                  aria-label="Ask anything about Chronilogix"
                  className="w-full resize-none bg-transparent pr-12 text-left text-base leading-relaxed text-ink placeholder:text-ink-subtle focus:outline-none"
                />
                <button
                  type="button"
                  aria-label="Send"
                  disabled={!value.trim()}
                  className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white shadow-soft transition hover:bg-ink-soft disabled:cursor-not-allowed disabled:bg-ink/20"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path
                      d="M7 11V3M3.5 6.5 7 3l3.5 3.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex items-center justify-center gap-5 border-t border-ink/5 bg-paper-warm/60 px-5 py-3 text-[11px] text-ink-muted">
                {STATS.map((s, i) => (
                  <span key={s.label} className="inline-flex items-center gap-3">
                    <span className="inline-flex items-baseline gap-1.5">
                      <span className="font-medium text-ink">{s.value}</span>
                      <span>{s.label}</span>
                    </span>
                    {i < STATS.length - 1 && (
                      <span className="text-ink-subtle" aria-hidden>·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {SUGGESTIONS.map((s) => (
              <button
                key={s.label}
                type="button"
                onClick={() => setValue(s.prompt)}
                className="rounded-full border border-ink/15 bg-transparent px-3.5 py-1.5 text-xs text-ink-soft transition hover:border-ink/40 hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/20 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-50"
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
