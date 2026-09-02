import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "1is4Me — Growth Partner",
  description:
    "We help businesses understand, plan and build with confidence. One partner for your growth journey.",
};

/**
 * Shell for the new site (reference/*.PNG) while it is built page by page.
 *
 * The root layout already provides LangProvider and the font, so this only
 * lays the near-black ground. `z-10` puts it above the grain and vignette the
 * root body paints for the current landing — those belong to the old skin.
 */
export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-10 min-h-screen overflow-x-clip bg-night text-snow">
      {children}
    </div>
  );
}
