import { User } from "lucide-react";
import Reveal from "./Reveal";

const slots = ["@handle", "@handle", "@handle", "@handle"];

export default function Creators() {
  return (
    <section className="py-24 px-6 border-t border-border-soft">
      <div className="mx-auto max-w-6xl lg:max-w-7xl">
        <Reveal>
          <p className="text-center text-[12px] uppercase tracking-wide text-text-tertiary mb-10">
            Creator partners
          </p>
        </Reveal>
        <Reveal delay={80}>
          <div className="flex flex-wrap justify-center gap-10 lg:gap-16">
            {slots.map((handle, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className="h-16 w-16 lg:h-20 lg:w-20 rounded-full bg-surface border border-border flex items-center justify-center hover:border-accent/30 transition-colors">
                  <User size={24} className="text-text-tertiary" strokeWidth={1.5} />
                </div>
                <span className="text-[12px] text-text-tertiary">{handle}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
