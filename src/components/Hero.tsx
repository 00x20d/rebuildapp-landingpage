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
            <h1 className='font-display font-extrabold tracking-wide text-[40px] sm:text-[56px] lg:text-[64px] leading-[1.02] tracking-tight text-text-primary'>
              The #1 App For
              <br />
              <span className='text-accent'>Cutting Screen Time</span>
            </h1>

            <p className='mt-4 text-[14px] sm:text-[15px] text-text-secondary'>
              Join over 2,000+ members rebuilding their attention
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
        <div className='relative mt-0 sm:mt-4'>
          {/* Background: scattered app icons spanning full screen width */}
          <div className='absolute inset-0 opacity-80'>
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
          <div className='relative mx-auto w-[320px] sm:w-100 lg:w-115 h-105 sm:h-130 lg:h-165 overflow-hidden'>
            <Image
              src='/hero/phone-mockup.svg'
              alt='Rebuild app on a phone'
              width={360}
              height={760}
              className='w-full h-auto'
              priority
            />
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
