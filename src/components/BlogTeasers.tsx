import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const posts = [
  { title: "Why screen time limits alone don't work", tag: "Behavior" },
  { title: "The dopamine loop, explained simply", tag: "Science" },
  { title: "How to actually stick with a digital budget", tag: "Guide" },
  {
    title: "Small habits that change your relationship with your phone",
    tag: "Habits",
  },
];

export default function BlogTeasers() {
  return (
    <section className='py-28 px-6 border-t border-border-soft'>
      <div className='mx-auto max-w-6xl lg:max-w-7xl'>
        <Reveal>
          <div className='text-center mb-12 lg:mb-16'>
            <span className='inline-block rounded-full border border-border-soft bg-surface px-5 py-2 text-[13px] sm:text-[14px] font-medium text-text-secondary mb-5'>
              From the Blog
            </span>
            <h2 className='font-display font-semibold text-[32px] sm:text-[38px] lg:text-[44px] tracking-tight text-text-primary max-w-3xl mx-auto leading-tight'>
              Screen Time Reduction Guide
            </h2>
          </div>
        </Reveal>

        <div className='grid sm:grid-cols-2 gap-4 lg:gap-6'>
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <a
                href='#'
                className='block h-full rounded-2xl border border-border bg-surface p-6 hover:border-accent/40 transition-colors'
              >
                <div className='aspect-[4/3] rounded-xl border border-dashed border-border-soft bg-bg mb-5 flex items-center justify-center text-[11px] text-text-tertiary'>
                  Post image
                </div>
                <div className='text-[11px] text-accent mb-2'>{p.tag}</div>
                <h3 className='font-display font-medium text-[15.5px] sm:text-[17px] text-text-primary leading-snug'>
                  {p.title}
                </h3>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className='mt-16 flex flex-col sm:flex-row justify-center items-center gap-4'>
            <a
              href='#'
              className='min-w-[200px] sm:min-w-[240px] text-center rounded-full bg-text-primary text-bg text-[15px] font-medium px-10 py-4 hover:bg-accent transition-colors flex items-center justify-center gap-2'
            >
              Read more <ArrowRight size={18} />
            </a>
            <a
              href='#get'
              className='min-w-[200px] sm:min-w-[240px] text-center rounded-full border border-border text-text-primary text-[15px] font-medium px-10 py-4 hover:border-accent hover:text-accent transition-colors'
            >
              Get Rebuild
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
