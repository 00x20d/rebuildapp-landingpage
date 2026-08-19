"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

const sentences = [
  "We built Rebuild",
  "for people who are tired of feeling pulled through their day by a screen.",
  "It helps you become someone who chooses where their attention goes,",
  "so your phone supports the life you want instead of quietly taking you away from it.",
];

const stats = [
  { value: "52 min", label: "Average daily screen time reduced" },
  { value: "84%", label: "Still active after 30 days" },
  { value: 28600, label: "Brain challenges completed", isCounter: true },
];

function useCounter(target: number, start: boolean, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let frameId: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) frameId = requestAnimationFrame(step);
    };
    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [start, target, duration]);

  return count;
}

function StatCounter({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);
  const count = useCounter(value, start);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div className='font-mono tabular text-[32px] sm:text-[40px] lg:text-[48px] text-accent'>
        {count.toLocaleString()}+
      </div>
      <div className='mt-1.5 text-[12px] sm:text-[14px] text-text-secondary leading-snug'>
        {label}
      </div>
    </div>
  );
}

const TRIGGER_TOP = 80;
const REVEAL_THRESHOLD = 350; // px of accumulated scroll per sentence

export default function Mission() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [revealedCount, setRevealedCount] = useState(1);

  // Mirrors of state kept in refs so the scroll handlers always read the
  // current value without needing revealedCount in a dependency array —
  // that would tear down and re-add the window listeners on every reveal
  // step, which is where events used to get lost.
  const revealedCountRef = useRef(1);
  const accumulatedDeltaRef = useRef(0);
  const lockedRef = useRef(false);
  const lastTouchYRef = useRef<number | null>(null);

  useEffect(() => {
    revealedCountRef.current = revealedCount;
  }, [revealedCount]);

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    if (!section || !sticky) return;

    const commitReveal = (deltaY: number) => {
      accumulatedDeltaRef.current = Math.max(
        0,
        accumulatedDeltaRef.current + deltaY,
      );
      const newRevealed = Math.min(
        sentences.length,
        Math.max(
          1,
          Math.floor(accumulatedDeltaRef.current / REVEAL_THRESHOLD) + 1,
        ),
      );
      if (newRevealed !== revealedCountRef.current) {
        revealedCountRef.current = newRevealed;
        setRevealedCount(newRevealed);
      }
      // Reaching the end releases the lock going forward. Unwinding back
      // to 0 releases it going backward — scrolling up now actually gets
      // you out, instead of leaving you stuck re-reading in reverse.
      if (newRevealed >= sentences.length || accumulatedDeltaRef.current <= 0) {
        lockedRef.current = false;
      }
    };

    const getLockState = () => {
      const elRect = section.getBoundingClientRect();
      const stickyRect = sticky.getBoundingClientRect();
      return {
        inRange:
          stickyRect.top <= TRIGGER_TOP && elRect.bottom > TRIGGER_TOP + 200,
        pastTop: stickyRect.top > TRIGGER_TOP,
      };
    };

    const tryEngage = (deltaY: number, e: WheelEvent | TouchEvent) => {
      if (lockedRef.current) {
        // Page scroll position hasn't moved while locked, so there's no
        // need to touch layout again — this is the hot path during a
        // fling, which can dispatch dozens of events per frame.
        e.preventDefault();
        commitReveal(deltaY);
        return;
      }

      const { inRange, pastTop } = getLockState();
      if (inRange && revealedCountRef.current < sentences.length) {
        lockedRef.current = true;
        e.preventDefault();
        commitReveal(deltaY);
      } else if (pastTop) {
        accumulatedDeltaRef.current = 0;
        if (revealedCountRef.current !== 1) {
          revealedCountRef.current = 1;
          setRevealedCount(1);
        }
      }
    };

    const handleWheel = (e: WheelEvent) => tryEngage(e.deltaY, e);

    const handleTouchStart = (e: TouchEvent) => {
      lastTouchYRef.current = e.touches[0]?.clientY ?? null;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const currentY = e.touches[0]?.clientY;
      if (currentY == null || lastTouchYRef.current == null) return;
      // Match wheel's deltaY sign: finger moving up = positive = scroll down.
      const deltaY = lastTouchYRef.current - currentY;
      lastTouchYRef.current = currentY;
      tryEngage(deltaY, e);
    };

    const handleTouchEnd = () => {
      lastTouchYRef.current = null;
    };

    let listenersAttached = false;
    const attach = () => {
      if (listenersAttached) return;
      listenersAttached = true;
      window.addEventListener("wheel", handleWheel, { passive: false });
      window.addEventListener("touchstart", handleTouchStart, {
        passive: true,
      });
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleTouchEnd, { passive: true });
    };
    const detach = () => {
      if (!listenersAttached) return;
      listenersAttached = false;
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };

    // Only pay for wheel/touch listeners (and the geometry reads they can
    // trigger) while the section is anywhere near the viewport. The rest
    // of the page scrolls with zero overhead from this component.
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          attach();
        } else {
          detach();
          lockedRef.current = false;
        }
      },
      { rootMargin: "200px 0px 200px 0px", threshold: 0 },
    );
    sectionObserver.observe(section);

    return () => {
      sectionObserver.disconnect();
      detach();
    };
  }, []); // mounted once — no more listener churn on every reveal step

  return (
    <section
      ref={sectionRef}
      className='relative py-28 px-6 border-border-soft'
      style={{ minHeight: "200vh" }}
    >
      <div
        ref={stickyRef}
        className='sticky top-20'
        style={{ height: "calc(100vh - 6rem)" }}
      >
        <div className='h-full mx-auto max-w-4xl lg:max-w-5xl flex flex-col items-center justify-center text-center'>
          <Reveal>
            <p className='font-display text-[26px] sm:text-[32px] lg:text-[38px] leading-[1.35] text-text-primary'>
              {sentences.map((sentence, i) => (
                <span
                  key={i}
                  className={`transition-colors duration-700 ease-out ${
                    i < revealedCount
                      ? "text-text-primary"
                      : "text-text-tertiary"
                  }`}
                >
                  {i === 0 ? sentence : ` ${sentence}`}
                </span>
              ))}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className='mt-16 w-full grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10'>
              {stats.map((s) => (
                <div key={s.label}>
                  {s.isCounter ? (
                    <StatCounter value={s.value as number} label={s.label} />
                  ) : (
                    <div>
                      <div className='font-mono tabular text-[32px] sm:text-[40px] lg:text-[48px] text-accent'>
                        {s.value}
                      </div>
                      <div className='mt-1.5 text-[12px] sm:text-[14px] text-text-secondary leading-snug'>
                        {s.label}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className='mt-14 flex justify-center'>
              <a
                href='#get'
                className='min-w-[200px] sm:min-w-[240px] text-center rounded-full bg-text-primary text-bg text-[15px] font-medium px-10 py-4 hover:bg-accent transition-colors'
              >
                Get Rebuild
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
