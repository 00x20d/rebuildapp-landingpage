import Link from "next/link";
import Image from "next/image";

const columns = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "/#how" },
      { label: "Features", href: "/#features" },
      { label: "Reviews", href: "/#reviews" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Support", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "Instagram", href: "#" },
      { label: "TikTok", href: "#" },
      { label: "X", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-soft pt-16 pb-10 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-10 pb-14">
          <div>
            <div className="mb-3">
              <Image
                src='/rebuild-logo.png'
                alt='Rebuild Logo'
                width={200}
                height={100}
                className='h-7 sm:h-8 w-auto'
              />
            </div>
            <p className="text-[13px] text-text-secondary leading-relaxed max-w-[220px]">
              Screen time you earn back, spent on purpose.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <div className="text-[12px] uppercase tracking-wide text-text-tertiary mb-4">
                {col.title}
              </div>
              <div className="flex flex-col gap-3">
                {col.links.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="text-[13.5px] text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border-soft flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-text-tertiary">© 2026 Rebuild. All rights reserved.</p>
          <div className="flex items-center gap-3 text-[12px] text-text-tertiary">
            <span className="rounded-md border border-border px-2.5 py-1">App Store</span>
            <span className="rounded-md border border-border px-2.5 py-1">Google Play</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
