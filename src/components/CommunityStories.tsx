import Reveal from "./Reveal";

const posts = [
  {
    user: "u/dev_marcus",
    day: "Day 19",
    body: "Caught myself about to pay 12 coins just to check notifications out of habit. Closed the app instead. Small win but it felt different this time.",
  },
  {
    user: "u/quietmornings",
    day: "Day 41",
    body: "The weekly ledger is what did it for me. Seeing 60+ coins go to one app made the habit visible in a way a screen time number never did.",
  },
  {
    user: "u/rebuilding_renee",
    day: "Day 8",
    body: "Still getting used to actually having to think before opening things. Annoying at first, genuinely useful by day 5.",
  },
];

export default function CommunityStories() {
  return (
    <section className="py-28 px-6 border-t border-border-soft">
      <div className="mx-auto max-w-6xl lg:max-w-7xl">
        <Reveal>
          <div className="max-w-lg mb-10">
            <p className="text-[12px] uppercase tracking-wide text-text-tertiary mb-2">
              Community
            </p>
            <h2 className="font-display font-semibold text-[32px] sm:text-[36px] tracking-tight text-text-primary">
              Real stories from the Rebuild community
            </h2>
          </div>
        </Reveal>

        <div className="mt-4 grid md:grid-cols-3 gap-4 lg:gap-6">
          {posts.map((p, i) => (
            <Reveal key={p.user} delay={i * 80}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6 hover:border-accent/30 transition-colors">
                <div className="flex items-center gap-2 mb-3 text-[12px] text-text-tertiary">
                  <span className="text-text-secondary">{p.user}</span>
                  <span>·</span>
                  <span className="font-mono tabular">{p.day}</span>
                </div>
                <p className="text-[14px] leading-relaxed text-text-secondary">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 flex items-center justify-center gap-12 lg:gap-20 text-center">
            <div>
              <div className="font-mono tabular text-[28px] sm:text-[32px] text-text-primary">6,280</div>
              <div className="text-[12px] text-text-tertiary mt-1">Active members</div>
            </div>
            <div>
              <div className="font-mono tabular text-[28px] sm:text-[32px] text-text-primary">142</div>
              <div className="text-[12px] text-text-tertiary mt-1">Posts today</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={250}>
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
