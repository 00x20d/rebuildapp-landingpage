"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "What is Rebuild?",
    a: "Rebuild is a screen time app that blocks the apps you choose by default. You earn screen time coins by completing short brain challenges, then spend those coins to unlock the apps you actually want to use.",
  },
  {
    q: "Is Rebuild free?",
    a: "Rebuild is free to download and set up your first 4 blocked app. Additional features may be part of a paid tier.",
  },
  {
    q: "How does the app blocking work?",
    a: "You choose which apps to block. Rebuild uses Apple's Screen Time API to enforce the block at the system level, so it holds even if you try to remove the app.",
  },
  {
    q: "What are the brain challenges?",
    a: "Short exercises like memory recall, pattern matching, and focus holds. Typically 30 to 60 seconds. They rotate and scale in difficulty so they stay a genuine task, not something you memorize.",
  },
  {
    q: "How does the coin economy work?",
    a: "Every challenge you complete earns coins. Every app unlock costs coins. You set how many minutes an unlock buys, so the budget reflects your own priorities.",
  },
  {
    q: "Is my data private?",
    a: "Rebuild doesn't sell tracking data or run ads. App usage stays on your device and syncs only for your own account. Full details will live in the privacy policy before launch.",
  },
  {
    q: "What happens if I run out of coins?",
    a: "Blocked apps stay blocked until you earn more coins by completing another challenge. That's the point. There's no way to pay your way around it with cash.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id='faq' className='py-28 px-6 border-t border-border-soft'>
      <div className='mx-auto max-w-4xl lg:max-w-5xl'>
        <Reveal>
          <h2 className='font-display font-semibold text-[32px] sm:text-[36px] tracking-tight text-text-primary mb-12 lg:mb-16 text-center'>
            Frequently asked questions
          </h2>
        </Reveal>

        <div className='flex flex-col divide-y border-border-soft border-t border-b'>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className='w-full flex items-center justify-between gap-4 py-5 text-left'
                >
                  <span className='text-[14.5px] font-medium text-text-primary'>
                    {f.q}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`shrink-0 text-text-tertiary transition-transform ${
                      isOpen ? "rotate-180 text-accent" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pb-5"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className='overflow-hidden'>
                    <p className='text-[14px] leading-relaxed text-text-secondary pr-8'>
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
