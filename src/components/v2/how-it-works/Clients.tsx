"use client";

import { CircleCheck } from "lucide-react";

import { useLang } from "@/components/LangProvider";
import Reveal from "@/components/Reveal";
import ClientMarks from "@/components/v2/ClientMarks";
import { Button, Container } from "@/components/v2/ui";
import type { Copy } from "@/lib/v2/copy";

/**
 * The trust row of the How It Works page (reference/how_it_works.PNG): the
 * client wordmarks on the left, the audit CTA on the right.
 *
 * The mockup shows only two wordmarks because its CTA sits where the third
 * would be — but the clients are proof, not layout, so all three render here.
 * They come from the shared <ClientMarks />, so this row and the home page's
 * proof strip cannot drift apart.
 */

type Content = {
  title: string;
  cta: string;
  /** The two reassurances under the button. */
  chips: readonly [string, string];
};

const copy: Copy<Content> = {
  en: {
    // Same line as the home page's proof strip — kept identical in all three
    // languages so the two pages agree.
    title: "Trusted by businesses that want to grow",
    cta: "Get Your Free Audit",
    chips: ["No commitment", "Takes 2–3 minutes"],
  },
  uz: {
    title: "Oʻsishni istagan bizneslar bizga ishonadi",
    cta: "Bepul auditni oling",
    chips: ["Majburiyatsiz", "2–3 daqiqa vaqt oladi"],
  },
  ru: {
    title: "Нам доверяют компании, которые хотят расти",
    cta: "Получить бесплатный аудит",
    chips: ["Без обязательств", "Занимает 2–3 минуты"],
  },
};

/**
 * The check-marked reassurances that sit under an audit button.
 *
 * Exported because the closing band on this page carries the same pair, and
 * the two must stay identical; ui.tsx is shared with the other pages, so the
 * row lives beside the section that introduces it instead.
 */
export function AuditChips({
  items,
  className = "",
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <ul
      className={`flex flex-wrap items-center justify-center gap-x-6 gap-y-2 ${className}`}
    >
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-1.5 text-[13px] text-snow-soft"
        >
          <CircleCheck
            aria-hidden
            size={15}
            strokeWidth={1.5}
            className="shrink-0 text-leaf-bright"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Clients() {
  const { lang } = useLang();
  const t = copy[lang];

  // No bottom padding: the closing band below supplies the gap, exactly as
  // the home page's proof strip does.
  return (
    <section className="pt-10 sm:pt-12 lg:pt-14">
      <Container>
        <Reveal>
          {/* The label sits in a hairline rule, as in the mockup. */}
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            {/* The rules only earn their place once there is room for them;
                on a phone the label stands on its own. */}
            <span aria-hidden className="hidden h-px flex-1 bg-edge sm:block" />
            <h2 className="text-center text-[15px] font-medium tracking-tight text-snow sm:text-[17px]">
              {t.title}
            </h2>
            <span aria-hidden className="hidden h-px flex-1 bg-edge sm:block" />
          </div>
        </Reveal>

        <Reveal delay={80}>
          {/* Three wordmarks plus the CTA only fit side by side on a wide
              screen, so the row stacks and re-centres below `lg`. */}
          <div className="mt-8 flex flex-col items-center gap-8 sm:mt-9 lg:flex-row lg:justify-between lg:gap-10">
            <ClientMarks className="lg:min-w-0 lg:flex-1 lg:justify-start lg:gap-x-10" />

            <div className="flex w-full shrink-0 flex-col items-center gap-3 sm:w-auto">
              <Button href="/audit-form" className="w-full sm:w-auto">
                {t.cta}
              </Button>
              <AuditChips items={t.chips} />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
