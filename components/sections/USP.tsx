"use client";

import { useState } from "react";

const PILLARS = [
  {
    title: "Evidence-Based MI",
    body:
      "400+ peer-reviewed studies underpin every conversation. Not generic AI advice.",
  },
  {
    title: "Real-Time Clinical Validation",
    body:
      "A second model audits every response for clinical accuracy before the member sees it. No perceptible latency.",
  },
  {
    title: "Culturally Tailored",
    body:
      "Adapts language, framing, and approach to each member’s background and values.",
  },
  {
    title: "Crisis-Safe by Design",
    body:
      "Structured risk assessment with escalation to the 988 Suicide & Crisis Lifeline when warranted. Part of the clinical architecture, not a disclaimer.",
  },
];

export function USP() {
  return (
    <section id="why-chronilogix" className="section bg-paper">
      <div className="container-page">
        <p className="eyebrow">Why Chronilogix</p>
        <h2 className="mt-4 max-w-3xl text-section font-normal text-ink">
          Built on a person.
          <br className="hidden md:block" /> Engineered for healthcare.
        </h2>

        <ResnicowCallout />

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className="flex items-start gap-4 rounded-2xl border border-ink/10 bg-white p-6"
            >
              <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-600/10 text-brand-700">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <path
                    d="M2 6.5 4.8 9 10 3.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <p className="text-base font-medium text-ink">{p.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <TechnicalNote />
      </div>
    </section>
  );
}

function ResnicowCallout() {
  return (
    <div className="mt-12 overflow-hidden rounded-[28px] border border-ink/10 bg-gradient-to-br from-brand-50 via-paper-warm to-paper p-8 md:p-14">
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-center">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-brand-700">
            The human intelligence behind the platform
          </p>
          <h3 className="mt-4 text-3xl font-normal leading-tight text-ink md:text-4xl">
            The platform is built on a person.
          </h3>
        </div>
        <div className="space-y-5 text-base leading-relaxed text-ink-soft md:text-lg">
          <p>
            Dr. Ken Resnicow is one of the world’s foremost experts in
            Motivational Interviewing and Cultural Tailoring. Three decades
            guiding patients across diverse backgrounds toward real, lasting
            change. Chronilogix is built on his life’s work — designed to
            reflect, not lecture. To ask the right question, in the right way,
            for the right person.
          </p>
        </div>
      </div>
    </div>
  );
}

function TechnicalNote() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-12 rounded-2xl border border-ink/10 bg-paper-warm">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-6 py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-medium text-ink">
          Technical note — for IT and procurement reviewers
        </span>
        <span
          className={`text-ink-muted transition-transform ${open ? "rotate-180" : ""}`}
        >
          ⌄
        </span>
      </button>
      {open && (
        <div className="border-t border-ink/5 px-6 pb-6 pt-4 text-sm leading-relaxed text-ink-soft">
          Chronilogix runs on a proprietary multi-model architecture with a
          real-time clinical validation layer — a second model audits every
          response for clinical accuracy before the member sees it.
          Corrections happen instantly, with no perceptible latency. The
          system was designed alongside Dr. Resnicow and is subject to
          continuous clinical review.
        </div>
      )}
    </div>
  );
}
