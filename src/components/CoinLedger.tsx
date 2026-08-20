import Image from "next/image";
import Reveal from "./Reveal";

const transactions = [
  {
    label: "Memory sprint, 6 cards",
    detail: "Challenge completed",
    delta: 6,
    kind: "earn" as const,
  },
  {
    label: "Pattern match, hard",
    detail: "Challenge completed",
    delta: 9,
    kind: "earn" as const,
  },
  {
    label: "Instagram, 12 min",
    detail: "Unlocked",
    delta: -12,
    kind: "spend" as const,
  },
  {
    label: "Focus hold, 45s",
    detail: "Challenge completed",
    delta: 5,
    kind: "earn" as const,
  },
  {
    label: "YouTube, 8 min",
    detail: "Unlocked",
    delta: -8,
    kind: "spend" as const,
  },
  {
    label: "Number recall, 8 digits",
    detail: "Challenge completed",
    delta: 8,
    kind: "earn" as const,
  },
];

export default function CoinLedger() {
  const total = transactions.reduce((sum, t) => sum + t.delta, 0);

  return (
    <section id='ledger' className='py-28 px-6 border-t border-border-soft'>
      <div className='mx-auto max-w-6xl lg:max-w-7xl'>
        <div className='grid md:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20 items-center'>
          <Reveal>
            <div>
              <h2 className='font-display font-semibold text-[32px] sm:text-[36px] tracking-tight text-text-primary'>
                Be the one who decides
              </h2>
              <p className='mt-3 text-[16px] text-text-secondary leading-relaxed max-w-sm'>
                Rebuild creates a moment of intention between the impulse and
                the scroll, helping you become more present, focused, and in
                control of your phone use.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className='relative aspect-3/4 w-full overflow-hidden'>
              <Image
                src='/howitworks/coin-ledger.webp'
                alt='Coin ledger statement for the week'
                fill
                sizes='(max-width: 768px) 100vw, 50vw'
                className='object-contain p-3 sm:p-5'
              />
            </div>
          </Reveal>
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
