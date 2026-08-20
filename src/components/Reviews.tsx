import { Star } from "lucide-react";
import Reveal from "./Reveal";

const reviews = [
  {
    quote:
      "I've tried every screen time app out there. This is the first one where the block actually held, because I had to earn my way past it.",
    name: "J.",
    role: "Member",
  },
  {
    quote:
      "Seeing the coin balance drop when I open Instagram changed how often I open it. Turns out I didn't want it that badly.",
    name: "A.",
    role: "Member",
  },
  {
    quote:
      "The challenges are short enough that I actually do them, and honestly my memory recall got noticeably faster after a few weeks.",
    name: "M.",
    role: "Member",
  },
  {
    quote:
      "Simple, no lecture, no guilt trip. Just a balance and a cost. That's the part that stuck.",
    name: "S.",
    role: "Member",
  },
];

export default function Reviews() {
  return (
    <section id='reviews' className='py-28 px-6 border-t border-border-soft'>
      <div className='mx-auto max-w-6xl lg:max-w-7xl'>
        <Reveal>
          <div className='text-center mb-10 lg:mb-14'>
            <span className='inline-block rounded-full border border-border-soft bg-surface px-5 py-2 text-[13px] sm:text-[14px] font-medium text-text-secondary mb-5'>
              Reviews
            </span>
            <h2 className='font-display font-semibold text-[32px] sm:text-[38px] lg:text-[44px] tracking-tight text-text-primary max-w-3xl mx-auto leading-tight'>
              What people say about Rebuild
            </h2>
          </div>
        </Reveal>

        <div className='mt-4 grid sm:grid-cols-2 gap-4 lg:gap-6'>
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 70}>
              <div className='h-full rounded-2xl border border-border bg-surface p-6 lg:p-8 flex flex-col hover:border-accent/30 transition-colors'>
                <div className='flex gap-0.5 mb-4 text-accent'>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      size={16}
                      fill='currentColor'
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <p className=' sm:text-[16px] leading-relaxed text-text-secondary flex-1'>
                  &ldquo;{r.quote}&rdquo;
                </p>
                <div className='mt-5 flex items-center gap-3'>
                  <div className='h-8 w-8 rounded-full bg-bg border border-border-soft flex items-center justify-center text-[11px] text-text-tertiary font-mono'>
                    {r.name}
                  </div>
                  <div className='text-[12px] text-text-secondary'>
                    {r.role}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className='mt-16 flex justify-center'>
            <a
              href='#get'
              className='min-w-50 sm:min-w-60 text-center rounded-full bg-text-primary text-bg text-[15px] font-medium px-10 py-4 hover:bg-accent transition-colors'
            >
              Get Rebuild
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
