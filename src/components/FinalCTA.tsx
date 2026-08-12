import { Apple, PlayCircle } from "lucide-react";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section id="get" className="py-28 px-6 border-t border-border-soft">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display font-semibold text-[32px] sm:text-[38px] tracking-tight text-text-primary leading-tight">
            Stop scrolling on autopilot.
            <br />
            Start spending on purpose.
          </h2>
          <p className="mt-4 text-[15px] text-text-secondary max-w-md mx-auto">
            Free to start. Set your first blocked app in under two minutes.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#"
              className="flex items-center gap-2 rounded-full bg-text-primary text-bg text-[14px] font-medium px-6 py-3 hover:bg-accent transition-colors w-full sm:w-auto justify-center"
            >
              <Apple size={16} />
              Download for iOS
            </a>
            <a
              href="#"
              className="flex items-center gap-2 rounded-full border border-border text-text-primary text-[14px] font-medium px-6 py-3 hover:border-accent/50 transition-colors w-full sm:w-auto justify-center"
            >
              <PlayCircle size={16} />
              Join the Android waitlist
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
