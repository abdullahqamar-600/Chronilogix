"use client";

import { useState } from "react";

type Persona = {
  key: string;
  tabLabel: string;
  situation: string;
  tension: string;
  resolution: string;
  proof: string;
  cta: string;
};

const PERSONAS: Persona[] = [
  {
    key: "employers",
    tabLabel: "Employers & HR",
    situation:
      "Mental health conditions and unmanaged chronic illness are the leading drivers of absenteeism, presenteeism, and voluntary turnover in your workforce. The cost shows up in your claims data every quarter.",
    tension:
      "The EAP your company pays for has single-digit utilization. The wellness app no one opens. The therapy benefit with a three-week wait. None of the current solutions are reaching the people who most need help — and the gap compounds every year you don’t solve it.",
    resolution:
      "Chronilogix integrates directly into your benefits stack. Every employee gets access to a clinically trained coaching experience — available the moment they need it, culturally tailored to who they are, and built on the science of what actually changes behavior long term. Not a hotline. Not a screening form. A real coaching relationship.",
    proof:
      "Aetna identified and engaged an additional 25% of employees not previously receiving care — using Chronilogix.",
    cta: "Talk to our team",
  },
  {
    key: "universities",
    tabLabel: "Universities",
    situation:
      "Your counseling center is overwhelmed. One counselor for every 200–300 students. Wait times stretching to two weeks. Students who need support today cannot be seen until next month.",
    tension:
      "Hiring more counselors isn’t financially realistic. And for many students — particularly those from cultural backgrounds where seeking mental health support carries stigma — a formal counseling appointment was never going to be the answer anyway. They need something private, immediate, and non-judgmental.",
    resolution:
      "Chronilogix is available the moment a student needs it. 3am before exams. After a hard phone call home. In the space between knowing something is wrong and being ready to tell anyone. It is culturally tailored, completely private, and it never makes a student wait. Built on the same MI methodology that Dr. Resnicow has applied across diverse student populations for three decades.",
    proof:
      "One counselor per 200–300 students. One-to-two week wait times. Chronilogix is available now.",
    cta: "See the university program",
  },
  {
    key: "health-plans",
    tabLabel: "Health Plans & Brokers",
    situation:
      "You’re responsible for the behavioral health and chronic care benefits of thousands — sometimes millions — of members. The need is real, urgent, and growing. The budget isn’t keeping pace.",
    tension:
      "At $60–70 PMPM, there are competing demands on every dollar — doctors, specialists, ER visits. Meaningful behavioral health coaching — the kind that actually produces outcomes — is too expensive to offer at real scale. And the cheaper alternatives don’t work.",
    resolution:
      "Chronilogix gives every member in your plan access to ongoing, evidence-based coaching — at a fraction of the cost of live care. Not a screening form. A real coaching relationship, grounded in proven clinical methodology, available 24 hours a day, 7 days a week. The same science that produced a 25% increase in care engagement for Aetna.",
    proof:
      "Chronilogix replaces up to 50% of live coaching calls — with no measurable decline in clinical outcomes.",
    cta: "Get a custom quote",
  },
  {
    key: "app-partners",
    tabLabel: "App Partners",
    situation:
      "You have a wellness app with real engagement. Users are showing up. But the coaching experience — the part that should drive lasting behavior change — is still shallow, and your most sophisticated users are starting to notice.",
    tension:
      "Building a genuinely clinical AI coaching engine takes years of behavioral science expertise and millions in development. Your product roadmap cannot wait for that. And your competitors are not standing still.",
    resolution:
      "Integrate Chronilogix as the clinical coaching intelligence inside your product. Dr. Resnicow’s 30-year methodology, embedded in your app — with no development overhead on your side. Every time you close a new health plan deal, Chronilogix is automatically included. Your product gets meaningfully better every time you close a deal.",
    proof:
      "Every new plan sale brings Chronilogix with it. Automatically.",
    cta: "Explore the partnership",
  },
];

export function WhoWeServe() {
  const [active, setActive] = useState(PERSONAS[0].key);
  const [openMobile, setOpenMobile] = useState<string>(PERSONAS[0].key);
  const current = PERSONAS.find((p) => p.key === active) ?? PERSONAS[0];

  return (
    <section id="who-we-serve" className="section bg-paper-warm">
      <div className="container-page">
        <p className="eyebrow">Who we serve</p>
        <h2 className="mt-4 max-w-3xl text-section font-normal text-ink">
          The care gap looks different depending on where you sit.
          <br className="hidden md:block" />
          We close it from every angle.
        </h2>

        <div className="mt-12 hidden lg:block">
          <div className="flex flex-wrap gap-2 border-b border-ink/10">
            {PERSONAS.map((p) => {
              const isActive = p.key === active;
              return (
                <button
                  key={p.key}
                  type="button"
                  onClick={() => setActive(p.key)}
                  className={`relative -mb-px px-5 py-4 text-sm font-medium transition ${
                    isActive ? "text-ink" : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {p.tabLabel}
                  {isActive && (
                    <span className="absolute inset-x-0 -bottom-px h-0.5 bg-brand-600" />
                  )}
                </button>
              );
            })}
          </div>

          <PersonaContent persona={current} />
        </div>

        <div className="mt-10 space-y-3 lg:hidden">
          {PERSONAS.map((p) => {
            const isOpen = p.key === openMobile;
            return (
              <div
                key={p.key}
                className="overflow-hidden rounded-2xl border border-ink/10 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenMobile(isOpen ? "" : p.key)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium text-ink"
                  aria-expanded={isOpen}
                >
                  <span>{p.tabLabel}</span>
                  <span
                    className={`text-ink-muted transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-ink/5 px-5 pb-6 pt-4">
                    <PersonaContent persona={p} compact />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PersonaContent({
  persona,
  compact,
}: {
  persona: Persona;
  compact?: boolean;
}) {
  return (
    <div
      className={`grid gap-10 ${compact ? "" : "mt-10 md:grid-cols-[1.2fr_1fr]"}`}
    >
      <div className="space-y-6">
        <Block label="Situation" body={persona.situation} />
        <Block label="Tension" body={persona.tension} />
        <Block label="Resolution" body={persona.resolution} />
      </div>
      <aside
        className={`flex flex-col justify-between gap-6 rounded-2xl border border-ink/10 bg-white p-6 ${
          compact ? "" : "md:p-8"
        }`}
      >
        <div>
          <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-brand-600">
            Proof
          </p>
          <p className="mt-3 text-lg font-medium leading-snug text-ink">
            {persona.proof}
          </p>
        </div>
        {/* TODO: persona-specific CTA destinations */}
        <a href="#book-a-demo" className="btn-primary self-start">
          {persona.cta}
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
      </aside>
    </div>
  );
}

function Block({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted">
        {label}
      </p>
      <p className="mt-2 text-base leading-relaxed text-ink-soft">{body}</p>
    </div>
  );
}
