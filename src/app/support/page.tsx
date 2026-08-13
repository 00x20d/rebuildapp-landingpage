import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Support - Rebuild",
  description:
    "Having problems with Rebuild? Our support team is fully committed to helping you. Just send us a message.",
};

export default function SupportPage() {
  return (
    <div className="bg-bg min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b border-border-soft bg-bg/80 backdrop-blur-md">
        <div className="mx-auto max-w-3xl px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center font-display font-semibold text-[17px] tracking-tight text-text-primary shrink-0"
          >
            <Image
              src="/rebuild-logo.png"
              alt="Rebuild Logo"
              width={200}
              height={100}
              className="h-7 sm:h-8 w-auto"
              priority
            />
          </Link>

          <Link
            href="/"
            className="text-[13.5px] text-text-secondary hover:text-text-primary transition-colors"
          >
            Back to home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 pt-28 sm:pt-36 pb-24 text-center">
        <h1 className="font-display font-semibold text-[40px] sm:text-[52px] tracking-tight text-text-primary leading-[1.05]">
          Support
        </h1>
        <p className="mt-6 text-[16px] leading-relaxed text-text-secondary max-w-md mx-auto">
          We&apos;re sorry to hear that you&apos;re having problems with
          Rebuild. Our support team is fully committed to helping you and will
          gladly address any concerns or any feedback you may have. Just send
          us a message.
        </p>

        <a
          href="mailto:hello@tryrebuild.app"
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-text-primary text-bg text-[14px] font-medium px-6 py-3 hover:bg-accent transition-colors"
        >
          <Mail size={16} />
          Email us
        </a>
      </main>

      <Footer />
    </div>
  );
}
