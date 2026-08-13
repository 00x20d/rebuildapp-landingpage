import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Rebuild - Spend Your Screen Time on Purpose",
  description:
    "Rebuild blocks your apps by default. Earn screen time coins by completing short brain challenges, then spend them to unlock the apps you actually chose.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
