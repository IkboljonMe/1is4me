import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Shared primitives for the v2 site (reference/*.PNG).
 *
 * Every section is built by a different pass, so anything that appears more
 * than once lives here — one button, one card surface, one heading rhythm.
 * Sections must not re-roll these locally.
 *
 * Tokens (src/app/globals.css): night / panel / panel-2 / edge / leaf / snow.
 */

/** Page gutter + max width. Matches the ~92% content column in the mockups. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1180px] px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

/** Small green all-caps label above a heading. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-leaf-bright">
      {children}
    </span>
  );
}

/** Centred section title + optional one-line lead. */
export function SectionHead({
  title,
  lead,
  className = "",
}: {
  title: ReactNode;
  lead?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-[26px] font-semibold tracking-tight text-snow sm:text-[30px]">
        {title}
      </h2>
      {lead ? (
        <p className="mt-2 text-sm text-snow-muted sm:text-[15px]">{lead}</p>
      ) : null}
    </div>
  );
}

/** The dark card surface used for every framed block. */
export function Panel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-edge bg-panel ${className}`}
    >
      {children}
    </div>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  /** Renders the trailing arrow. On by default for primary. */
  arrow?: boolean;
};

/**
 * The two button styles in the mockups: the green gradient pill and the
 * outlined one beside it. Always a link — every CTA on the site navigates.
 */
export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  arrow,
}: ButtonProps) {
  const showArrow = arrow ?? variant === "primary";
  const base =
    "group inline-flex items-center justify-center gap-2.5 rounded-xl px-6 py-3.5 text-[15px] font-semibold transition";
  const skin =
    variant === "primary"
      ? "bg-gradient-to-b from-leaf to-leaf-deep text-white shadow-[0_10px_30px_-12px_rgba(70,147,45,0.9)] hover:from-leaf-bright hover:to-leaf"
      : "border border-edge-strong bg-transparent text-snow hover:border-leaf hover:text-leaf-bright";

  return (
    <Link href={href} className={`${base} ${skin} ${className}`}>
      {children}
      {showArrow ? (
        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
          →
        </span>
      ) : null}
    </Link>
  );
}

/**
 * The green wave-glow artwork from the mockups (reference/bg.PNG).
 * Decorative only, so it is a plain background image rather than an <img>.
 */
export function Wave({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute select-none bg-cover bg-center bg-no-repeat mix-blend-screen ${className}`}
      style={{
        backgroundImage: "url('/assets/wave.webp')",
        transform: flip ? "scaleX(-1)" : undefined,
        // The artwork is bright-on-near-black, not transparent. Screen blending
        // drops most of its ground, and this mask fades what is left, so the
        // image's own rectangle can never show as a seam across a panel.
        maskImage:
          "radial-gradient(ellipse at center, #000 30%, transparent 72%)",
        WebkitMaskImage:
          "radial-gradient(ellipse at center, #000 30%, transparent 72%)",
      }}
    />
  );
}
