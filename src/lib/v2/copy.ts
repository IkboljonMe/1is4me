import type { Lang } from "@/lib/content";

/**
 * Every v2 section keeps its own copy beside its component, as
 * `Copy<{...}>` — one object per language, so a section can be written,
 * translated and reviewed on its own.
 *
 * Copy rules carried over from the blueprint: numbers over adjectives, and
 * nothing invented. Proof slots stay empty until real numbers exist.
 */
export type Copy<T> = Record<Lang, T>;
