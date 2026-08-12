import { Coins, Camera, Check } from "lucide-react";

export function DashboardScreen() {
  return (
    <div className="px-5 pt-4 pb-6">
      <div className="text-[11px] text-text-secondary mb-4">Your streak</div>
      <div className="flex justify-center mb-5">
        <div
          className="h-32 w-32 rounded-full flex items-center justify-center"
          style={{
            background:
              "conic-gradient(var(--color-accent) 0deg 260deg, var(--color-border) 260deg 360deg)",
          }}
        >
          <div className="h-[104px] w-[104px] rounded-full bg-bg flex flex-col items-center justify-center">
            <span className="font-mono tabular text-[28px] leading-none text-text-primary">12</span>
            <span className="text-[10px] text-text-tertiary mt-1">days on budget</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-xl border border-border-soft bg-surface px-3 py-2.5 text-center">
          <div className="font-mono tabular text-[16px] text-text-primary">38</div>
          <div className="text-[10.5px] text-text-tertiary">coins earned</div>
        </div>
        <div className="rounded-xl border border-border-soft bg-surface px-3 py-2.5 text-center">
          <div className="font-mono tabular text-[16px] text-text-primary">6</div>
          <div className="text-[10.5px] text-text-tertiary">challenges done</div>
        </div>
      </div>
    </div>
  );
}

export function ChallengeScreen() {
  const tiles = [1, 1, 0, 0, 1, 0];
  return (
    <div className="px-5 pt-4 pb-6">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[13px] text-text-primary font-medium">Memory sprint</span>
        <span className="font-mono tabular text-[11px] text-text-tertiary">0:42</span>
      </div>
      <p className="text-[11px] text-text-secondary mb-4">Repeat the highlighted pattern</p>
      <div className="grid grid-cols-3 gap-2 mb-5">
        {tiles.map((on, i) => (
          <div
            key={i}
            className={`aspect-square rounded-lg border ${
              on ? "bg-accent border-accent" : "bg-surface border-border-soft"
            }`}
          />
        ))}
      </div>
      <div className="rounded-xl border border-border-soft bg-surface px-3 py-2.5 flex items-center justify-between">
        <span className="text-[12px] text-text-secondary">Reward</span>
        <span className="flex items-center gap-1 font-mono tabular text-[13px] text-accent">
          <Coins size={12} /> +6
        </span>
      </div>
    </div>
  );
}

export function UnlockScreen() {
  return (
    <div className="px-5 pt-4 pb-6 flex flex-col items-center">
      <div className="text-[11px] text-text-secondary mb-4 self-start">Unlock app</div>
      <div className="h-16 w-16 rounded-2xl bg-surface border border-border-soft flex items-center justify-center mb-4">
        <Camera size={24} className="text-text-secondary" strokeWidth={1.75} />
      </div>
      <div className="text-[14px] text-text-primary mb-1">Instagram</div>
      <div className="text-[11px] text-text-tertiary mb-5">12 minutes of access</div>

      <div className="w-full rounded-xl border border-border-soft bg-surface px-4 py-3 flex items-center justify-between mb-3">
        <span className="text-[12px] text-text-secondary">Cost</span>
        <span className="font-mono tabular text-[13px] text-text-primary">-12 coins</span>
      </div>

      <div className="w-full rounded-xl bg-accent text-bg text-center text-[12.5px] font-medium py-2.5 flex items-center justify-center gap-1.5">
        <Check size={14} strokeWidth={2.5} />
        Confirm unlock
      </div>
    </div>
  );
}

export function LedgerMiniScreen() {
  const rows = [
    { label: "Pattern match", delta: 9 },
    { label: "Instagram, 12 min", delta: -12 },
    { label: "Focus hold", delta: 5 },
    { label: "YouTube, 8 min", delta: -8 },
  ];
  return (
    <div className="px-5 pt-4 pb-5">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] text-text-secondary">This week</span>
        <span className="font-mono tabular text-[12px] text-accent">+8 net</span>
      </div>
      <div className="flex flex-col divide-y divide-border-soft border-t border-border-soft">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center justify-between py-2.5">
            <span className="text-[12.5px] text-text-primary truncate pr-3">{r.label}</span>
            <span
              className={`font-mono tabular text-[12.5px] shrink-0 ${
                r.delta > 0 ? "text-accent" : "text-text-secondary"
              }`}
            >
              {r.delta > 0 ? "+" : ""}
              {r.delta}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
