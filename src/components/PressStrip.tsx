import Reveal from "./Reveal";

const slots = ["Press logo", "Press logo", "Press logo", "Press logo", "Press logo"];

export default function PressStrip() {
  return (
    <section className="py-10 px-6 border-t border-border-soft">
      <Reveal>
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-[11px] tracking-wide uppercase text-text-tertiary mb-6">
            As featured in
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60">
            {slots.map((s, i) => (
              <div
                key={i}
                className="h-6 w-28 rounded border border-dashed border-border flex items-center justify-center text-[10px] text-text-tertiary"
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
