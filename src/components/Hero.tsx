import { Apple, PlayCircle } from "lucide-react";
import PhoneFrame from "./PhoneFrame";
import PhoneMockup from "./PhoneMockup";
import { DashboardScreen } from "./PhoneScreens";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id='top' className='pt-56 pb-28 px-6'>
      <div className='mx-auto max-w-6xl lg:max-w-7xl grid md:grid-cols-2 gap-14 lg:gap-20 items-center'>
        <Reveal>
          <div>
            <h1 className='font-display font-semibold text-[40px] sm:text-[52px] leading-[1.05] tracking-tight text-text-primary'>
              Every app starts locked.
              <br />
              <span className='text-text-secondary'>
                You earn your way back in.
              </span>
            </h1>

            <p className='mt-6 text-[16px] leading-relaxed text-text-secondary max-w-md'>
              Rebuild blocks the apps that eat your day by default. Solve a
              short brain challenge, earn screen time coins, and spend them on
              the time you actually want, not the time an algorithm picked for
              you.
            </p>

            <div className='mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-3'>
              <a
                href='#get'
                className='flex items-center gap-2 rounded-full bg-text-primary text-bg text-[14px] font-medium px-5 py-3 hover:bg-accent transition-colors'
              >
                <Apple size={16} />
                Download for iOS
              </a>
              <a
                href='#get'
                className='flex items-center gap-2 rounded-full border border-border text-text-primary text-[14px] font-medium px-5 py-3 hover:border-accent/50 transition-colors'
              >
                <PlayCircle size={16} />
                Android waitlist
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className='relative'>
            <div className='hidden sm:block absolute -right-6 -top-6 w-[240px] rotate-6 opacity-70 scale-95'>
              <PhoneFrame label='dashboard' size='compact'>
                <DashboardScreen />
              </PhoneFrame>
            </div>
            <div className='relative -rotate-3'>
              <PhoneMockup />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
