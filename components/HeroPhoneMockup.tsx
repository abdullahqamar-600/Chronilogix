"use client";

import { useEffect, useState } from "react";
import { AIOrb } from "@/components/AIOrb";

const CONVERSATION = {
  aiQuestionLines: [
    "You mentioned last time that anxiety mostly shows up on Sunday evenings.",
    "What does that feel like when it starts?",
  ],
  userReply:
    "Like dread. I start thinking about everything I didn’t finish and everything waiting for me. My chest gets tight and I just want Monday to be over before it starts.",
  aiReflectionLines: [
    "So it’s less about Monday itself, and more about feeling behind before you’ve even begun.",
    "Like you’re already losing a race you haven’t started yet.",
  ],
};

const LINE_GAP = 700; // ms between lines fading in
const CYCLE_MS = 11000;

const SCREEN = {
  top: (24 / 1375) * 100,
  left: (34 / 671) * 100,
  width: (612 / 671) * 100,
  height: (1326 / 1375) * 100,
  radius: "13.4% / 6.18%",
};

const NOTCH = {
  top: (41 / 1375) * 100,
  left: (243 / 671) * 100,
  width: (194 / 671) * 100,
  height: (57 / 1375) * 100,
};

export function HeroPhoneMockup({ progress }: { progress: number }) {
  // Phone is hidden at page load and rises into view as the hero
  // runway is scrolled. At peak ~55% is visible so it sits lower.
  const phoneRiseLinear = clamp01((progress - 0.12) / (0.65 - 0.12));
  const phoneRise = easeInOutCubic(phoneRiseLinear);
  const phoneTranslateY = 100 - phoneRise * 55;

  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center"
      style={{
        transform: `translateY(${phoneTranslateY}%)`,
        willChange: "transform",
      }}
    >
      <div className="relative aspect-[671/1375] w-[clamp(290px,31vw,440px)]">
        <img
          src="/iphone/Iphone.svg"
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full select-none"
          draggable={false}
        />

        <ChatScreen active={phoneRise > 0.05} />

        <img
          src="/iphone/Notch.png"
          alt=""
          aria-hidden
          className="absolute select-none"
          style={{
            top: `${NOTCH.top}%`,
            left: `${NOTCH.left}%`,
            width: `${NOTCH.width}%`,
            height: `${NOTCH.height}%`,
          }}
          draggable={false}
        />
      </div>
    </div>
  );
}

function ChatScreen({ active }: { active: boolean }) {
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (!active) {
      setCycle(0);
      return;
    }
    const interval = setInterval(() => {
      setCycle((c) => c + 1);
    }, CYCLE_MS);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <div
      className="absolute overflow-hidden"
      style={{
        top: `${SCREEN.top}%`,
        left: `${SCREEN.left}%`,
        width: `${SCREEN.width}%`,
        height: `${SCREEN.height}%`,
        borderRadius: SCREEN.radius,
        background: "linear-gradient(180deg, #FFFBE8 0%, #FFE8AA 100%)",
        color: "#583C14",
      }}
    >
      {active && (
        <div key={cycle} className="flex h-full flex-col px-7 pb-7 pt-[14%]">
          {/* AI Orb */}
          <div
            style={{
              animation: "fadeUp 600ms ease-out 200ms forwards",
              opacity: 0,
            }}
          >
            <AIOrb size={22} />
          </div>

          {/* Greeting */}
          <h3
            className="mt-2 text-2xl font-medium leading-none tracking-tight"
            style={{
              animation: "fadeUp 600ms ease-out 500ms forwards",
              opacity: 0,
              color: "#583C14",
            }}
          >
            Hi!
          </h3>

          {/* AI Question — lines fade in */}
          <LinesFadeIn
            lines={CONVERSATION.aiQuestionLines}
            startDelay={1500}
            lineGap={LINE_GAP}
            className="mt-3 space-y-1 text-[13px] leading-[1.45]"
          />

          {/* User Reply — fade-up bubble */}
          <div
            className="mt-5 flex justify-end"
            style={{
              animation: "fadeUp 600ms ease-out 3700ms forwards",
              opacity: 0,
            }}
          >
            <div
              className="max-w-[82%] rounded-2xl border px-3.5 py-2.5 text-[13px] leading-[1.45]"
              style={{
                background: "#FFFAE9",
                borderColor: "#FFF8DF",
                color: "#583C14",
              }}
            >
              {CONVERSATION.userReply}
            </div>
          </div>

          {/* AI Reflection — lines fade in */}
          <LinesFadeIn
            lines={CONVERSATION.aiReflectionLines}
            startDelay={5400}
            lineGap={LINE_GAP}
            className="mt-5 space-y-1 text-[13px] leading-[1.45]"
          />
        </div>
      )}
    </div>
  );
}

/** Line-by-line fade-up reveal. Each line is rendered as a block-level
 *  span so layout is reserved up front (opacity: 0 → 1 via animation). */
function LinesFadeIn({
  lines,
  startDelay,
  lineGap,
  className,
}: {
  lines: string[];
  startDelay: number;
  lineGap: number;
  className?: string;
}) {
  return (
    <div className={className} style={{ color: "#583C14" }}>
      {lines.map((line, i) => (
        <span
          key={i}
          className="block"
          style={{
            animation: `fadeUp 500ms ease-out ${startDelay + i * lineGap}ms forwards`,
            opacity: 0,
          }}
        >
          {line}
        </span>
      ))}
    </div>
  );
}

function clamp01(n: number) {
  return Math.min(Math.max(n, 0), 1);
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
