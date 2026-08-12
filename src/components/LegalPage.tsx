import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

type LegalPageProps = {
  title: string;
  children: React.ReactNode;
};

export default function LegalPage({ title, children }: LegalPageProps) {
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

      <main className="mx-auto max-w-3xl px-6 pt-16 pb-24">
        <span className="inline-block rounded-full border border-border-soft bg-surface px-5 py-2 text-[13px] sm:text-[14px] font-medium text-text-secondary">
          Legal
        </span>
        <h1 className="mt-6 font-display font-semibold text-[32px] sm:text-[38px] tracking-tight text-text-primary leading-tight">
          {title}
        </h1>

        <div className="legal-prose mt-12">{children}</div>
      </main>

      <Footer />
    </div>
  );
}
