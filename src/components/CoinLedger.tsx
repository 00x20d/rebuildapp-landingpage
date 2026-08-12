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
                Every coin, itemized
              </h2>
              <p className='mt-3 text-[15px] text-text-secondary leading-relaxed max-w-sm'>
                Rebuild treats attention like money. Every challenge you solve
                is a deposit. Every app you unlock is a withdrawal. Nothing
                happens off the books.
              </p>
              <div className='mt-8 flex items-center gap-8 lg:gap-12'>
                <div>
                  <div className='text-[12px] text-text-tertiary mb-1'>
                    Net this week
                  </div>
                  <div className='font-mono tabular text-[28px] sm:text-[32px] text-accent'>
                    {total >= 0 ? "+" : ""}
                    {total}
                  </div>
                </div>
                <div>
                  <div className='text-[12px] text-text-tertiary mb-1'>
                    Challenges solved
                  </div>
                  <div className='font-mono tabular text-[28px] sm:text-[32px] text-text-primary'>
                    {transactions.filter((t) => t.kind === "earn").length}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className='rounded-2xl border border-border bg-surface overflow-hidden'>
              <div className='flex items-center justify-between px-6 py-4 border-b border-border-soft'>
                <span className='text-[13px] font-medium text-text-primary'>
                  Coin statement
                </span>
                <span className='text-[11px] font-mono tabular text-text-tertiary'>
                  this week
                </span>
              </div>

              <div className='divide-y divide-border-soft'>
                {transactions.map((t) => (
                  <div
                    key={t.label}
                    className='flex items-center justify-between px-6 py-3.5'
                  >
                    <div className='min-w-0'>
                      <div className='text-[13.5px] text-text-primary truncate'>
                        {t.label}
                      </div>
                      <div className='text-[11.5px] text-text-tertiary'>
                        {t.detail}
                      </div>
                    </div>
                    <div
                      className={`font-mono tabular text-[13.5px] shrink-0 pl-4 ${
                        t.kind === "earn"
                          ? "text-accent"
                          : "text-text-secondary"
                      }`}
                    >
                      {t.delta > 0 ? "+" : ""}
                      {t.delta}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="mt-16 flex justify-center">
            <a
              href="#get"
              className="min-w-[200px] sm:min-w-[240px] text-center rounded-full bg-text-primary text-bg text-[15px] font-medium px-10 py-4 hover:bg-accent transition-colors"
            >
              Get Rebuild
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
