"use client";

import { CircleCheck, CirclePlay, Clock, Compass, Handshake } from "lucide-react";

import Reveal from "@/components/Reveal";
import { useLang } from "@/components/LangProvider";
import { Button, Container, Eyebrow, Panel, Wave } from "@/components/v2/ui";
import type { Copy } from "@/lib/v2/copy";

type HeroCopy = {
  eyebrow: string;
  /** Three display lines; the third one carries the green. */
  headline: readonly [string, string, string];
  lead: string;
  primaryCta: string;
  ghostCta: string;
  card: {
    /** Small muted line sitting above the product name. */
    kicker: string;
    title: string;
    desc: string;
    cta: string;
    chips: readonly [string, string, string];
  };
};

const copy: Copy<HeroCopy> = {
  en: {
    eyebrow: "Our Process",
    headline: ["A clear process.", "Real partnership.", "Stronger results."],
    lead: "We follow a proven process that removes guesswork, builds the right systems and helps your business grow with confidence.",
    primaryCta: "Start with Business Navigator",
    ghostCta: "See It in Action",
    card: {
      kicker: "Everything starts with",
      title: "Business Navigator",
      desc: "Answer a few questions, and we’ll map your business, find gaps and show the opportunities you should focus on first.",
      cta: "Get Your Free Audit",
      chips: ["100% Free", "Takes 2–3 Minutes", "No Commitment"],
    },
  },
  uz: {
    eyebrow: "Bizning jarayon",
    headline: [
      "Aniq jarayon.",
      "Haqiqiy hamkorlik.",
      "Kuchliroq natijalar.",
    ],
    lead: "Biz taxminlarni yoʻqotadigan, toʻgʻri tizimlarni quradigan va biznesingizga ishonch bilan oʻsishga yordam beradigan sinalgan jarayonga amal qilamiz.",
    primaryCta: "Business Navigator bilan boshlang",
    ghostCta: "Amalda koʻring",
    card: {
      kicker: "Hammasi shundan boshlanadi",
      title: "Business Navigator",
      desc: "Bir nechta savolga javob bering — biznesingizni xaritalaymiz, kamchiliklarni topamiz va avvalo qaysi imkoniyatlarga eʼtibor qaratish kerakligini koʻrsatamiz.",
      cta: "Bepul auditni oling",
      chips: ["100% bepul", "2–3 daqiqa vaqt oladi", "Majburiyatsiz"],
    },
  },
  ru: {
    eyebrow: "Наш процесс",
    headline: [
      "Ясный процесс.",
      "Настоящее партнёрство.",
      "Сильные результаты.",
    ],
    lead: "Мы работаем по проверенному процессу: он убирает догадки, выстраивает нужные системы и помогает вашему бизнесу расти уверенно.",
    primaryCta: "Начать с Business Navigator",
    ghostCta: "Посмотреть в действии",
    card: {
      kicker: "Всё начинается с",
      title: "Business Navigator",
      desc: "Ответьте на несколько вопросов — мы составим карту вашего бизнеса, найдём пробелы и покажем, на какие возможности стоит обратить внимание в первую очередь.",
      cta: "Получить бесплатный аудит",
      chips: ["100% бесплатно", "Занимает 2–3 минуты", "Без обязательств"],
    },
  },
};

/** Icons live outside the copy so every language reuses the same chip order. */
const CHIP_ICONS = [CircleCheck, Clock, Handshake];

/**
 * How It Works hero (reference/how_it_works.PNG): eyebrow, three-line display
 * headline, lead and the two CTAs on the left; on the right a bordered panel
 * introducing Business Navigator, with the green wave bleeding off the right
 * edge.
 *
 * Two things the mockup is specific about. The right track is wide here —
 * the panel is close to half the content column, not the third it is on
 * Solutions / Smart Tools — and the panel's CTA is indented to the text
 * column rather than the panel edge, so the button lives inside the same
 * block as the copy beside the compass. The reassurance chips sit below a
 * full-width hairline and are themselves divided by hairlines, which are
 * dropped below `sm` where the row has to wrap.
 */
export default function Hero() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <section className="relative isolate overflow-hidden bg-night">
      <Wave className="-right-[26%] -top-[2%] aspect-[3/2] w-[150%] opacity-40 sm:-right-[14%] sm:w-[100%] lg:-right-[10%] lg:-top-[22%] lg:w-[66%] lg:opacity-70" />

      <Container className="relative z-10 grid gap-10 pt-10 pb-10 sm:pt-12 sm:pb-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)] lg:items-center lg:gap-12 lg:pt-14 lg:pb-14">
        {/* ------------------------------------------- left: the proposition */}
        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <Eyebrow>{t.eyebrow}</Eyebrow>
              {/* The short rule trailing the label in the mockup. */}
              <span aria-hidden className="h-px w-7 bg-leaf-bright/70" />
            </div>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="mt-3 text-[clamp(2rem,8.4vw,3.2rem)] leading-[1.05] font-semibold tracking-[-0.035em] text-snow lg:text-[clamp(2.7rem,4.2vw,3.85rem)]">
              {t.headline.map((line, i) => (
                <span
                  key={line}
                  className={`block ${i === 2 ? "text-leaf-bright" : ""}`}
                >
                  {line}
                </span>
              ))}
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-6 max-w-[29rem] text-[15px] leading-[1.65] text-snow-soft sm:mt-7 sm:text-base">
              {t.lead}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Button href="/audit-form">{t.primaryCta}</Button>
              <Button href="#how-we-work" variant="ghost">
                {t.ghostCta}
                <CirclePlay aria-hidden size={18} strokeWidth={1.5} />
              </Button>
            </div>
          </Reveal>
        </div>

        {/* --------------------------------- right: the Business Navigator card */}
        <Reveal delay={160} className="lg:w-full lg:justify-self-end">
          <Panel className="p-6 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.95)] sm:p-7">
            <div className="flex items-start gap-4 sm:gap-5">
              <span className="grid size-14 shrink-0 place-items-center rounded-full border border-leaf/40 sm:size-[72px]">
                <Compass
                  aria-hidden
                  size={26}
                  strokeWidth={1.5}
                  className="text-leaf-bright sm:size-8"
                />
              </span>

              <div className="min-w-0">
                <p className="text-[13px] text-snow-muted sm:text-[15px]">
                  {t.card.kicker}
                </p>
                <h2 className="mt-0.5 text-[20px] font-semibold tracking-tight text-leaf-bright sm:text-[26px]">
                  {t.card.title}
                </h2>
                <p className="mt-3 text-[13px] leading-[1.6] text-snow-soft sm:text-sm">
                  {t.card.desc}
                </p>
              </div>
            </div>

            {/* From `sm` the CTA is indented past the compass so it lines up
                with the copy column, as in the mockup. Below that the column
                is too narrow for it, so it drops to a full-width bar aligned
                to the panel edge instead. */}
            <div className="mt-6 sm:mt-7 sm:pl-[92px]">
              <Button href="/audit-form" className="w-full sm:w-auto">
                {t.card.cta}
              </Button>
            </div>

            <ul className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2.5 border-t border-edge pt-4 sm:mt-7 sm:gap-x-0 sm:pt-5">
              {t.card.chips.map((chip, i) => {
                const Icon = CHIP_ICONS[i];
                return (
                  <li
                    key={chip}
                    className={`flex items-center gap-2 text-[12px] text-snow-soft sm:text-[13px] ${
                      i > 0 ? "sm:ml-4 sm:border-l sm:border-edge sm:pl-4" : ""
                    }`}
                  >
                    <Icon
                      aria-hidden
                      size={16}
                      strokeWidth={1.5}
                      className="shrink-0 text-leaf-bright"
                    />
                    {chip}
                  </li>
                );
              })}
            </ul>
          </Panel>
        </Reveal>
      </Container>
    </section>
  );
}
