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
      <div className="p-6 md:p-7">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-brand-700">
          {step.label}
        </p>
        <h3 className="mt-2.5 max-w-sm text-lg font-normal leading-snug text-ink md:text-xl">
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
    <div className="absolute inset-0 flex flex-col items-start justify-center bg-gradient-to-br from-paper via-paper to-brand-50/60 p-7 md:p-8">
      <div key={tick} className="flex w-full flex-col items-start">
        <BrainIcon />
        <h4 className="mt-3 text-2xl font-normal tracking-tight text-ink md:text-3xl">
          Listening
        </h4>

        <ul className="mt-6 space-y-3 self-stretch pl-5 md:mt-7 md:space-y-3.5 md:pl-7">
          {items.map((label, i) => (
            <li
              key={label}
              className="flex items-center gap-3 text-sm leading-snug text-ink md:text-base"
              style={{
                animation: `fadeUp 500ms ease-out ${i * 450 + 500}ms forwards`,
                opacity: 0,
              }}
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                <svg width="11" height="11" viewBox="0 0 9 9" fill="none" aria-hidden>
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
      className="relative inline-flex h-8 w-8 shrink-0 md:h-9 md:w-9"
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
      className="absolute inset-0 flex flex-col items-start justify-center gap-5 p-7 md:p-8"
      style={{
        background:
          "linear-gradient(135deg, #FFF5EE 0%, #FFE6D4 55%, #FFCDA8 100%)",
      }}
    >
      <div
        key={idx}
        className="w-full rounded-[24px] bg-white/85 px-5 py-4 text-sm leading-snug text-ink shadow-sm backdrop-blur-sm md:px-6 md:py-5 md:text-base"
        style={{
          animation: "fadeUp 600ms ease-out forwards",
          opacity: 0,
        }}
      >
        {SESSION_MESSAGES[idx]}
      </div>
      <AIOrb size={32} />
    </div>
  );
}

function MemoryVisual() {
  const STAGES = [
    { label: "Two Weeks Ago", text: "“Sundays feel impossible.”" },
    { label: "Last Session", text: "“Cooking grounds me.”" },
    { label: "Today", text: "“It's Sunday — what are you cooking today? Any dish in mind?”" },
  ];
  const STAGE_MS = 5000;
  const TRANSITION_MS = 900;
  // Resting horizontal position of the active circle, as % of viewport.
  // The orange "past" line trails off-screen to its left.
  const ACTIVE_POS_PCT = 20;
  const N = STAGES.length;
  const SEG_PCT = 100 / N; // one segment = 100% of viewport = 33.33% of track
  // The line ends at the last circle — no track beyond "Today".
  const LINE_END_PCT = (N - 1) * SEG_PCT;

  const [stage, setStage] = useState(0);
  const [animated, setAnimated] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setStage((s) => {
        const next = (s + 1) % N;
        // Snap-reset (no easing) when looping back to stage 0 so the
        // pipeline doesn't visibly rewind.
        if (next === 0) {
          setAnimated(false);
          requestAnimationFrame(() =>
            requestAnimationFrame(() => setAnimated(true)),
          );
        }
        return next;
      });
    }, STAGE_MS);
    return () => clearInterval(t);
  }, []);

  // Translate so the active circle (at track x = stage * 100% of viewport)
  // lands at viewport x = ACTIVE_POS_PCT.
  // Expressed as % of the track (track width = N * 100% of viewport):
  const translatePct = (ACTIVE_POS_PCT - stage * 100) / N;

  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-paper via-paper to-brand-50/40">
      {/* One long horizontal track containing all stages.
       *  Each circle + its label/quote live in the same segment, so they
       *  translate together as the track scrolls left. The orange line
       *  trails behind the active circle, extending off the left edge. */}
      <div
        className="absolute inset-y-0 left-0"
        style={{
          width: `${N * 100}%`,
          transform: `translateX(${translatePct}%)`,
          transition: animated
            ? `transform ${TRANSITION_MS}ms cubic-bezier(0.65, 0, 0.35, 1)`
            : "none",
        }}
      >
        {/* Grey baseline — runs from the first circle to the last circle */}
        <div
          className="absolute h-0.5 rounded-full bg-ink/15"
          style={{
            top: "calc(35% + 11px)",
            left: 0,
            width: `${LINE_END_PCT}%`,
          }}
        />
        {/* Orange "past" line — grows in lockstep with the track so it
         *  always terminates at the active circle's track position. */}
        <div
          className="absolute h-0.5 rounded-full bg-brand-600"
          style={{
            top: "calc(35% + 11px)",
            left: 0,
            width: `${stage * SEG_PCT}%`,
            transition: animated
              ? `width ${TRANSITION_MS}ms cubic-bezier(0.65, 0, 0.35, 1)`
              : "none",
          }}
        />

        {/* Each stage = one segment: circle on top, label + quote below */}
        {STAGES.map((s, i) => (
          <div
            key={i}
            className="absolute inset-y-0"
            style={{
              left: `${i * SEG_PCT}%`,
              width: `${SEG_PCT}%`,
            }}
          >
            <div className="absolute left-0 top-[35%]">
              <MemoryNode
                active={i <= stage}
                animated={animated}
                isFinal={i === N - 1}
              />
            </div>
            <div
              className="absolute left-0"
              style={{
                top: "calc(35% + 3rem)",
                right: `${ACTIVE_POS_PCT}%`,
              }}
            >
              <p className="text-xs font-medium text-brand-600 md:text-sm">
                {s.label}
              </p>
              <p className="mt-2.5 text-xl font-normal leading-snug text-ink md:text-2xl">
                {s.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MemoryNode({
  active,
  animated,
  isFinal,
}: {
  active: boolean;
  animated: boolean;
  isFinal: boolean;
}) {
  // Final node ("Today") swaps the tick circle for the AIOrb when active —
  // gives the loop a distinct terminal beat instead of a third identical tick.
  if (isFinal) {
    return (
      <span className="relative inline-block h-6 w-6">
        <span
          className="absolute inset-0 rounded-full bg-brand-100"
          style={{
            opacity: active ? 0 : 1,
            transition: animated ? "opacity 400ms ease-out 1400ms" : "none",
          }}
        />
        <span
          className="absolute inset-0 flex items-center justify-center"
          style={{
            opacity: active ? 1 : 0,
            transform: active ? "scale(1)" : "scale(0.7)",
            transition: animated
              ? "opacity 450ms ease-out 1400ms, transform 600ms cubic-bezier(0.34, 1.56, 0.64, 1) 1400ms"
              : "none",
          }}
        >
          <AIOrb size={24} />
        </span>
      </span>
    );
  }

  // Non-final nodes: peach pending → orange filled circle with a drawn-in tick
  return (
    <span
      className="flex h-6 w-6 items-center justify-center rounded-full shadow-sm"
      style={{
        backgroundColor: active ? "#FF7434" : "#FFE6D4",
        transition: animated
          ? "background-color 300ms ease-out 1350ms"
          : "none",
      }}
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 9 9"
        fill="none"
        aria-hidden
      >
        <path
          d="M1.5 4.5 3.5 6.5 7.5 2.5"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={10}
          style={{
            strokeDasharray: 10,
            strokeDashoffset: active ? 0 : 10,
            transition: animated
              ? "stroke-dashoffset 360ms cubic-bezier(0.65, 0, 0.35, 1) 1500ms"
              : "none",
          }}
        />
      </svg>
    </span>
  );
}
