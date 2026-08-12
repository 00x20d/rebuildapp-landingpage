import PhoneFrame from "./PhoneFrame";
import {
  DashboardScreen,
  ChallengeScreen,
  UnlockScreen,
  LedgerMiniScreen,
} from "./PhoneScreens";
import Reveal from "./Reveal";

const steps = [
  {
    label: "dashboard",
    Screen: DashboardScreen,
    title: "See your budget at a glance",
    body: "Your streak, balance, and weekly challenges all in one place. No digging through settings, just clarity.",
  },
  {
    label: "challenge",
    Screen: ChallengeScreen,
    title: "Earn coins with real brain work",
    body: "30 to 60 second memory, pattern, and focus exercises. They rotate and get harder, so it stays real, not routine.",
  },
  {
    label: "unlock",
    Screen: UnlockScreen,
    title: "Spend coins on what matters",
    body: "Unlock apps for set minutes at set coin costs. You see the price upfront, every single time.",
  },
  {
    label: "insights",
    Screen: LedgerMiniScreen,
    title: "Track it like a budget",
    body: "A clear ledger of what you earned and what you spent. Catch patterns before they become habits.",
  },
];

export default function HowItWorks() {
  return (
    <section id='how' className='py-28 px-6 border-t border-border-soft'>
      <div className='mx-auto max-w-6xl lg:max-w-7xl'>
        <Reveal>
          <div className='text-center mb-20'>
            <span className='inline-block rounded-full border border-border-soft bg-surface px-5 py-2 text-[13px] sm:text-[14px] font-medium text-text-secondary mb-5'>
              How It Works
            </span>
            <h2 className='font-display font-semibold text-[32px] sm:text-[38px] lg:text-[44px] tracking-tight text-text-primary max-w-3xl mx-auto leading-tight'>
              How Rebuild helps you decrease <br /> your screen time easily
            </h2>
          </div>
        </Reveal>

        <div className='flex flex-col gap-24 lg:gap-32'>
          {steps.map((step, i) => (
            <div
              key={step.label}
              className={`grid md:grid-cols-2 gap-10 lg:gap-16 items-center ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
                <PhoneFrame label={step.label}>
                  <step.Screen />
                </PhoneFrame>
              </Reveal>

              <Reveal delay={100}>
                <div
                  className={
                    i % 2 === 1
                      ? "md:text-right md:items-end md:flex md:flex-col"
                      : ""
                  }
                >
                  <div className='font-mono text-[28px] sm:text-[36px] lg:text-[48px] text-accent mb-4 tabular font-semibold'>
                    0{i + 1}
                  </div>
                  <h3 className='font-display font-medium text-[22px] sm:text-[24px] lg:text-[28px] text-text-primary mb-3'>
                    {step.title}
                  </h3>
                  <p className='text-[14.5px] sm:text-[15.5px] leading-relaxed text-text-secondary max-w-sm'>
                    {step.body}
                  </p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        <Reveal delay={200}>
          <div className='mt-20 flex justify-center'>
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
