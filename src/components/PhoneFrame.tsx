import type { ReactNode } from "react";

export default function PhoneFrame({
  children,
  label = "screen budget",
  size = "default",
}: {
  children: ReactNode;
  label?: string;
  size?: "default" | "compact";
}) {
  return (
    <div className={`relative mx-auto select-none ${size === "compact" ? "w-[240px]" : "w-[280px]"}`}>
      <div
        className="absolute -inset-16 -z-10 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-accent), transparent 70%)" }}
        aria-hidden
      />

      <div className="rounded-[36px] border border-border bg-surface p-2 shadow-2xl shadow-black/60">
        <div className="rounded-[28px] border border-border-soft bg-bg overflow-hidden">
          <div className="flex items-center justify-between px-5 pt-4 pb-2 text-[11px] text-text-tertiary font-mono">
            <span>9:41</span>
            <span>{label}</span>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
