import type { Metadata } from "next";
import { LangProvider } from "@/components/LangProvider";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://1is4me.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "1is4me — AI Growth Partner",
    template: "%s · 1is4me",
  },
  description:
    "AI systems for growing businesses. We help SMB owners get back their time, scale their business, and grow their profit with AI + automation.",
  keywords: [
    "AI automation",
    "business automation",
    "AI agency",
    "SMB growth",
    "AI audit",
    "1is4me",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "1is4me",
    title: "1is4me — AI Growth Partner",
    description:
      "Learn It. Plan It. Build It. One AI-run team instead of the five hires you'd otherwise need.",
  },
  twitter: {
    card: "summary_large_image",
    title: "1is4me — AI Growth Partner",
    description:
      "Learn It. Plan It. Build It. AI systems for growing businesses.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Inter is the brand typeface — Black (900) carries the display type.
            Loaded as a stylesheet rather than via next/font so the build never
            depends on reaching Google at compile time. Google serves the
            Cyrillic subset off the same URL for the RU copy. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- the rule
            targets pages/_document, which the App Router does not have; this
            link sits in the root layout and so applies to every page. */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
        />
      </head>
      <body className="antialiased">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
