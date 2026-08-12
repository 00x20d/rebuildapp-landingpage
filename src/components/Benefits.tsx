import { Target, Moon, Users, Zap, Brain, Smile } from "lucide-react";
import Reveal from "./Reveal";

const benefits = [
  { icon: Target, label: "More focus during the day" },
  { icon: Moon, label: "Less scrolling before bed" },
  { icon: Zap, label: "More energy for real tasks" },
  { icon: Brain, label: "Sharper recall from challenges" },
  { icon: Users, label: "More time for people, not feeds" },
  { icon: Smile, label: "Less anxious about pickup habits" },
];

export default function Benefits() {
  return (
    <section className='py-28 px-6 border-t border-border-soft'>
      <div className='mx-auto max-w-6xl lg:max-w-7xl'>
        <Reveal>
          <div className='text-center mb-14 lg:mb-16'>
            <span className='inline-block rounded-full border border-border-soft bg-surface px-5 py-2 text-[13px] sm:text-[14px] font-medium text-text-secondary mb-5'>
              User Results
            </span>
            <h2 className='font-display font-semibold text-[32px] sm:text-[38px] lg:text-[44px] tracking-tight text-text-primary max-w-3xl mx-auto leading-tight'>
              What users commonly report
            </h2>
          </div>
        </Reveal>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6'>
          {benefits.map((b, i) => (
            <Reveal key={b.label} delay={i * 50}>
              <div className='flex items-center gap-3 rounded-xl border border-border bg-surface px-5 py-5 hover:border-accent/30 transition-colors'>
                <b.icon
                  size={20}
                  className='text-accent shrink-0'
                  strokeWidth={1.75}
                />
                <span className='text-[14px] text-text-primary leading-snug'>
                  {b.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className='mt-16 flex justify-center'>
            <a
              href='#get'
              className='min-w-[200px] sm:min-w-[240px] text-center rounded-full bg-text-primary text-bg text-[15px] font-medium px-10 py-4 hover:bg-accent transition-colors'
            >
              Get Rebuild
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
