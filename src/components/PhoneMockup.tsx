import { Lock, Camera, Music2, Play, Coins } from "lucide-react";
import PhoneFrame from "./PhoneFrame";

const apps = [
  { name: "Instagram", icon: Camera, cost: 12, state: "locked" as const },
  { name: "TikTok", icon: Music2, cost: 12, state: "locked" as const },
  { name: "YouTube", icon: Play, cost: 8, state: "unlocked" as const },
];

export default function PhoneMockup() {
  return (
    <PhoneFrame>
      <div className="px-5 pt-3 pb-5 border-b border-border-soft">
        <div className="text-[11px] text-text-secondary mb-1.5">Your balance</div>
        <div className="flex items-baseline gap-1.5">
          <Coins size={18} className="text-accent mb-0.5" strokeWidth={2} />
          <span className="font-mono tabular text-[32px] leading-none font-medium text-text-primary">
            42
          </span>
          <span className="text-[13px] text-text-secondary">coins</span>
        </div>
      </div>

      <div className="px-3 py-3 flex flex-col gap-1.5">
        {apps.map((app) => (
          <div
            key={app.name}
            className="flex items-center justify-between rounded-xl px-3 py-2.5 border border-border-soft bg-surface"
          >
            <div className="flex items-center gap-2.5">
              <app.icon size={16} className="text-text-secondary" strokeWidth={1.75} />
              <span className="text-[13px] text-text-primary">{app.name}</span>
            </div>

            {app.state === "locked" ? (
              <div className="flex items-center gap-1 text-[11px] font-mono tabular text-text-tertiary">
                <Lock size={11} strokeWidth={2} />
                {app.cost}
              </div>
            ) : (
              <span className="text-[11px] font-mono tabular text-accent">open</span>
            )}
          </div>
        ))}
      </div>

      <div className="px-3 pb-4 pt-1">
        <div className="rounded-xl bg-accent text-bg text-center text-[12.5px] font-medium py-2.5">
          Start a challenge → earn coins
        </div>
      </div>
    </PhoneFrame>
  );
}
