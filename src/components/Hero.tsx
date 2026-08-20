import Image from "next/image";
import { Download } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id='top' className='relative pt-32 pb-8 overflow-hidden'>
      {/* Top text — centered */}
      <div className='mx-auto max-w-4xl px-6 text-center'>
        <Reveal>
          <div className='flex flex-col items-center'>
            <h1 className='font-display font-extrabold tracking-wide text-[40px] sm:text-[56px] lg:text-[64px] leading-[1.02] text-text-primary'>
              The #1 App For
              <br />
              <span className='text-accent'>Cutting Screen Time</span>
            </h1>

            <p className='mt-4 text-[16px] sm:text-[18px] text-text-secondary'>
              Join many other members rebuilding their attention
              {/* TODO: replace with the real member count once available */}
            </p>

            {/* App Store badge — TODO: replace src + href with the real listing */}
            <a
              href='https://apps.apple.com/app/id6780354301'
              target='_blank'
              rel='noopener noreferrer'
              className='mt-7 inline-block'
            >
              <Image
                src='/hero/app-store-badge.svg'
                alt='Download on the App Store'
                width={160}
                height={52}
                className='h-10 w-auto'
                priority
              />
            </a>
          </div>
        </Reveal>
      </div>

      {/* Visual — full-width app-icons background + phone mockup, bottom clipped */}
      <Reveal delay={150}>
        <div className='relative mt-8 sm:mt-4'>
          {/* Background: scattered app icons spanning full screen width */}
          <div className='absolute inset-0 mt-12 opacity-80'>
            {/* unoptimized: serve the raw file so swapping this placeholder in
                /public shows up immediately instead of hitting Next's image cache */}
            <Image
              src='/hero/logo-background.webp'
              alt=''
              fill
              sizes='100vw'
              className='object-cover'
              priority
              unoptimized
            />
          </div>

          {/* Fade the top of the icon grid into the page bg, transparent by mid-image */}
          <div className='absolute inset-0 bg-linear-to-b from-bg via-bg/75 via-45% to-transparent to-60%' />

          {/* Phone mockup — fixed height so its bottom is cut off */}
          <div className='relative mx-auto mt-12 w-75 sm:w-100 lg:w-115 h-120 sm:h-130 lg:h-165 overflow-hidden'>
            <Image
              src='/hero/phone-mockup.svg'
              alt='Rebuild app on a phone'
              width={360}
              height={760}
              className='w-full h-auto'
              priority
            />
            {/* Fade the bottom of the phone into the page bg.
                phone-mockup.svg has ~9.3% horizontal padding baked into its
                viewBox (2625 wide, content rect 2140 starting at x=243), so we
                inset by the same amount on each side to match the asset's
                actual width. The fade stops ~12% from the bottom (~1.5 cm at
                typical DPI) instead of spanning half the height. */}
            <div className='absolute inset-x-[9%] inset-y-0 bg-linear-to-t from-bg to-transparent to-12%' />
          </div>
        </div>
      </Reveal>

      {/* Download CTA — pulled up to overlap the clipped edge */}
      <Reveal delay={250}>
        <div className='px-6 mt-16 flex justify-center'>
          <a
            href='#get'
            className='inline-flex items-center gap-2 rounded-full bg-text-primary text-bg text-[14px] font-medium px-6 py-3 hover:bg-accent transition-colors'
          >
            <Download size={16} />
            Download on iOS
          </a>
        </div>
      </Reveal>
    </section>
  );
}
