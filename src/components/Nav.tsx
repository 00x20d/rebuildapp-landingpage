"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#how", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='fixed top-0 inset-x-0 z-50 w-full border-b border-border-soft bg-bg/80 backdrop-blur-md overflow-x-hidden'>
      <div className='mx-auto max-w-none md:max-w-6xl lg:max-w-7xl w-full px-3 sm:px-6 h-16 flex items-center justify-between'>
        <a
          href='#top'
          className='flex items-center gap-2 font-display font-semibold text-[17px] tracking-tight text-text-primary shrink-0'
        >
          <Image
            src='/rebuild-logo.png'
            alt='Rebuild Logo'
            width={200}
            height={100}
            className='h-7 sm:h-8 w-auto'
            priority
          />
        </a>

        <nav className='hidden md:flex items-center gap-8 text-[15px] text-text-secondary'>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className='hover:text-text-primary transition-colors'
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href='#get'
          className='hidden md:inline-block rounded-full bg-text-primary text-bg text-[14px] font-medium px-5 py-2.5 hover:bg-accent transition-colors shrink-0'
        >
          Download
        </a>

        <div className='md:hidden flex items-center gap-2 shrink-0'>
          <a
            href='#get'
            className='rounded-full bg-text-primary text-bg text-[12px] sm:text-[13px] font-medium px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-accent transition-colors whitespace-nowrap'
          >
            Download
          </a>

          <button
            type='button'
            onClick={() => setMenuOpen(!menuOpen)}
            className='shrink-0 w-9 h-9 flex items-center justify-center rounded-lg hover:bg-surface transition-colors'
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <X size={20} strokeWidth={1.75} className='text-text-primary' />
            ) : (
              <Menu
                size={20}
                strokeWidth={1.75}
                className='text-text-primary'
              />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className='md:hidden border-t border-border-soft bg-bg/95 backdrop-blur-md w-full'>
          <nav className='mx-auto max-w-none md:max-w-6xl lg:max-w-7xl w-full px-3 sm:px-6 py-4 flex flex-col gap-1'>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className='py-3 px-3 rounded-lg text-[15px] text-text-secondary hover:text-text-primary hover:bg-surface transition-colors'
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
