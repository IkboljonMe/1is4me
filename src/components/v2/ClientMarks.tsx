import { Leaf } from "lucide-react";

/**
 * The three clients we can actually name, as hand-set wordmarks.
 *
 * Shared so the home page's proof strip and the How It Works page's trust row
 * cannot drift apart. Exactly these three: no counts, no testimonials, no
 * extra logos — proof is only ever what we can name.
 *
 * TODO(assets): replace the type below with the real logo artwork (SVG
 * preferred) once the clients supply it. It is set in type here purely
 * because no artwork exists yet.
 */

/** Short hairline between two wordmarks. Hidden once they stack. */
function Divider() {
  return (
    <span
      aria-hidden
      className="hidden h-14 w-px shrink-0 bg-edge-strong sm:block"
    />
  );
}

export default function ClientMarks({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-x-8 gap-y-8 sm:gap-x-12 ${className}`}
    >
      {/* Placek i co — script-ish italic serif over a gold swash. */}
      <div className="flex shrink-0 flex-col items-center">
        <span className="font-serif text-[26px] italic leading-none tracking-wide text-snow sm:text-[30px]">
          Placek i co
        </span>
        <span
          aria-hidden
          className="mt-2 h-[3px] w-[88%] rounded-full bg-gold"
        />
      </div>

      <Divider />

      {/* GUZAR RESTAURANT — letter-spaced gold caps. */}
      <div className="flex shrink-0 flex-col items-center">
        <span className="font-serif text-[24px] font-semibold leading-none tracking-[0.16em] text-gold sm:text-[28px]">
          GUZAR
        </span>
        <span className="mt-2 text-[10px] font-medium leading-none tracking-[0.38em] text-gold/75">
          RESTAURANT
        </span>
      </div>

      <Divider />

      {/* Kokand Dry Fruits — bold script mark with the leaf accent. */}
      <div className="flex shrink-0 flex-col items-center">
        <span className="relative inline-flex items-end">
          <span className="font-serif text-[26px] font-bold italic leading-none tracking-tight text-snow sm:text-[30px]">
            Kokand
          </span>
          <Leaf
            aria-hidden
            strokeWidth={1.5}
            className="absolute -right-1 -top-3 h-4 w-4 text-leaf-bright"
          />
        </span>
        <span className="mt-2 text-[10px] font-medium leading-none tracking-[0.32em] text-snow-soft">
          DRY FRUITS
        </span>
      </div>
    </div>
  );
}
