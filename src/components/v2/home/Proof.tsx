"use client";

import Reveal from "@/components/Reveal";
import { Container, SectionHead } from "@/components/v2/ui";
import ClientMarks from "@/components/v2/ClientMarks";
import { useLang } from "@/components/LangProvider";
import type { Copy } from "@/lib/v2/copy";

/**
 * The client strip from reference/home.PNG — one line of reassurance over
 * three client wordmarks.
 *
 * Exactly the three clients the mockup shows. No counts, no testimonials,
 * no extra logos: proof is only ever what we can actually name.

 */

type ProofCopy = { title: string };

const copy: Copy<ProofCopy> = {
  en: { title: "Trusted by businesses that want to grow" },
  uz: { title: "Oʻsishni istagan bizneslar bizga ishonadi" },
  ru: { title: "Нам доверяют компании, которые хотят расти" },
};

export default function Proof() {
  const { lang } = useLang();
  const t = copy[lang];

  return (
    <section className="pt-8 sm:pt-10">
      <Container>
        <Reveal>
          <SectionHead title={t.title} />
        </Reveal>

        <Reveal delay={80}>
          <ClientMarks className="mt-7 sm:mt-8 lg:gap-x-20" />
        </Reveal>
      </Container>
    </section>
  );
}
