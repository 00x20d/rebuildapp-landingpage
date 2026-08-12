import Reveal from "./Reveal";

const tiers = [
  { name: "Foundation", day: "Day 1", size: 44, glow: 0.25 },
  { name: "Framework", day: "Day 7", size: 52, glow: 0.35 },
  { name: "Structure", day: "Day 14", size: 60, glow: 0.45 },
  { name: "Keystone", day: "Day 30", size: 68, glow: 0.55 },
  { name: "Skyline", day: "Day 60", size: 76, glow: 0.7 },
  { name: "Monument", day: "Day 90", size: 84, glow: 0.85 },
  { name: "Landmark", day: "Day 180", size: 92, glow: 1 },
  { name: "Legacy", day: "Day 365", size: 100, glow: 1 },
];

function Orb({ tier }: { tier: (typeof tiers)[number] }) {
  return (
    <div className="flex flex-col items-center gap-3 shrink-0 w-28">
      <div
        className="rounded-full"
        style={{
          width: tier.size,
          height: tier.size,
          background:
            "radial-gradient(circle at 35% 30%, var(--color-accent), var(--color-accent-dim) 70%)",
          boxShadow: `0 0 ${28 * tier.glow}px ${6 * tier.glow}px color-mix(in srgb, var(--color-accent) ${
            tier.glow * 60
          }%, transparent)`,
        }}
      />
      <div className="text-center">
        <div className="text-[13px] text-text-primary">{tier.name}</div>
        <div className="text-[11px] font-mono tabular text-text-tertiary">{tier.day}</div>
      </div>
    </div>
  );
}

export default function AchievementOrbs() {
  const loop = [...tiers, ...tiers];

  return (
    <section className="py-24 border-t border-border-soft">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="max-w-lg mb-14">
            <p className="text-[12px] uppercase tracking-wide text-text-tertiary mb-2">
              Achievements
            </p>
            <h2 className="font-display font-semibold text-[30px] tracking-tight text-text-primary">
              Unlock a tier for every milestone
            </h2>
            <p className="mt-3 text-[15px] text-text-secondary leading-relaxed">
              Stay under budget long enough and Rebuild is quite literally built, one
              streak at a time.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={100}>
        <div className="overflow-hidden">
          <div className="flex gap-14 w-max animate-marquee py-4">
            {loop.map((tier, i) => (
              <Orb key={`${tier.name}-${i}`} tier={tier} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
