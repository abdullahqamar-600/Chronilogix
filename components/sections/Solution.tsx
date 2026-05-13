"use client";

import { useEffect, useState } from "react";
import { AIOrb } from "@/components/AIOrb";

const SESSION_MESSAGES = [
  "What made that possible?",
  "What does that say about you?",
  "Where else in your life might that be true?",
  "What would feel different next week?",
];

const STEPS = [
  {
    label: "Listening",
    title: "Before any advice, it learns who you are.",
    Visual: IntakeVisual,
  },
  {
    label: "Asking",
    title: "It asks. It does not advise.",
    Visual: SessionVisual,
  },
  {
    label: "Remembering",
    title: "Every session builds on the last.",
    Visual: MemoryVisual,
  },
] as const;

export function Solution() {
  return (
    <section
      id="solution"
      className="relative overflow-hidden rounded-[28px] bg-paper-warm py-24 md:py-32 lg:py-40"
    >
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="eyebrow">The methodology</p>
          <h2 className="mt-6 text-display font-normal tracking-tight text-ink">
            Coaching that listens.
            <br />
            Asks. Remembers.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">
            Most AI gives information and calls it coaching. Chronilogix does
            what the science says actually works.
          </p>
        </div>
      </div>

      <div className="mt-14 px-1.5 pb-1.5 md:mt-20 md:px-2 md:pb-2">
        <div className="grid gap-1.5 md:gap-2 lg:grid-cols-3">
          {STEPS.map((step) => (
            <StepCard key={step.label} step={step} />
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
      <div className="relative aspect-square overflow-hidden">
        <Visual />
      </div>
      <div className="p-6 md:p-8 lg:p-10">
        <p className="text-sm font-medium text-brand-700">{step.label}</p>
        <h3 className="mt-3 max-w-sm text-xl font-normal leading-snug text-ink md:text-2xl">
          {step.title}
        </h3>
      </div>
    </article>
  );
}

function IntakeVisual() {
  const items = [
    "Values & Motivation",
    "Cultural Context",
    "Stress Patterns",
    "Daily Rhythms",
    "Goals & Barriers",
  ];

  // Loop the whole intro animation (brain fill + sequential checkmarks).
  // Total run is ~2800ms; rest a beat then replay.
  const LOOP_MS = 4500;
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTick((v) => v + 1), LOOP_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="absolute inset-0 flex flex-col items-start justify-center bg-gradient-to-br from-paper via-paper to-brand-50/60 p-8 md:p-10 lg:p-12">
      <div key={tick} className="flex w-full flex-col items-start">
        <BrainIcon />
        <h4 className="mt-4 text-3xl font-normal tracking-tight text-ink md:text-4xl">
          Listening
        </h4>

        <ul className="mt-8 space-y-4 self-stretch pl-6 md:mt-10 md:space-y-5 md:pl-8">
          {items.map((label, i) => (
            <li
              key={label}
              className="flex items-center gap-3.5 text-base leading-snug text-ink md:text-lg"
              style={{
                animation: `fadeUp 500ms ease-out ${i * 450 + 500}ms forwards`,
                opacity: 0,
              }}
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                <svg width="12" height="12" viewBox="0 0 9 9" fill="none" aria-hidden>
                  <path
                    d="M1.5 4.5 3.5 6.5 7.5 2.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function BrainIcon() {
  return (
    <span
      className="relative inline-flex h-10 w-10 shrink-0 md:h-11 md:w-11"
      aria-hidden
    >
      <img
        src="/brain-empty.svg"
        alt=""
        className="absolute inset-0 h-full w-full select-none"
        draggable={false}
      />
      <img
        src="/brain-loading.svg"
        alt=""
        className="absolute inset-0 h-full w-full select-none"
        draggable={false}
        style={{
          clipPath: "inset(100% 0 0 0)",
          animation: "brainFill 2400ms ease-out 400ms forwards",
        }}
      />
    </span>
  );
}

function SessionVisual() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIdx((i) => (i + 1) % SESSION_MESSAGES.length),
      3500,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div
      className="absolute inset-0 flex flex-col items-start justify-center gap-4 p-8 md:p-10"
      style={{
        background:
          "linear-gradient(135deg, #FFF5EE 0%, #FFE6D4 55%, #FFCDA8 100%)",
      }}
    >
      <div
        key={idx}
        className="w-full rounded-[28px] bg-white/85 px-6 py-5 text-base leading-snug text-ink shadow-sm backdrop-blur-sm md:px-7 md:py-6 md:text-lg"
        style={{
          animation: "fadeUp 600ms ease-out forwards",
          opacity: 0,
        }}
      >
        {SESSION_MESSAGES[idx]}
      </div>
      <AIOrb size={36} />
    </div>
  );
}

function MemoryVisual() {
  const STAGES = [
    { label: "Two Weeks Ago", text: "“Sundays are the hardest.”" },
    { label: "Last Session", text: "“Cooking grounds me.”" },
    { label: "Today", text: "“Building on both insights.”" },
  ];
  const STAGE_MS = 3500;
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setStage((s) => (s + 1) % STAGES.length),
      STAGE_MS,
    );
    return () => clearInterval(t);
  }, []);

  const isLast = stage === STAGES.length - 1;

  return (
    <div className="absolute inset-0 flex flex-col justify-center bg-gradient-to-br from-paper via-paper to-brand-50/40 p-8 md:p-10 lg:p-12">
      {/* Pipeline — full width, two nodes joined by a brand-colored line */}
      <div className="flex items-center">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white shadow-sm">
          <svg width="12" height="12" viewBox="0 0 9 9" fill="none" aria-hidden>
            <path
              d="M1.5 4.5 3.5 6.5 7.5 2.5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <div className="h-px flex-1 bg-brand-600" />
        {isLast ? (
          <AIOrb size={28} />
        ) : (
          <span className="h-7 w-7 shrink-0 rounded-full bg-brand-100" />
        )}
      </div>

      {/* Label + quote — crossfade on stage change */}
      <div key={stage} className="mt-8 md:mt-10">
        <p
          className="text-sm font-medium text-brand-600 md:text-base"
          style={{
            animation: "fadeUp 450ms ease-out forwards",
            opacity: 0,
          }}
        >
          {STAGES[stage].label}
        </p>
        <p
          className="mt-3 text-2xl font-normal leading-snug text-ink md:text-3xl"
          style={{
            animation: "fadeUp 600ms ease-out 180ms forwards",
            opacity: 0,
          }}
        >
          {STAGES[stage].text}
        </p>
      </div>
    </div>
  );
}
