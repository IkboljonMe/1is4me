import type { Metadata } from "next";

import Nav from "@/components/v2/Nav";
import Footer from "@/components/v2/Footer";
import Hero from "@/components/v2/about/Hero";
import Team from "@/components/v2/about/Team";
import WhatWeDo from "@/components/v2/about/WhatWeDo";
import Values from "@/components/v2/about/Values";
import CtaBand from "@/components/v2/about/CtaBand";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "1is4Me helps businesses find direction, build strong systems and achieve real, measurable growth.",
};

/** About Us — fifth page of the rebuild (reference/about_us.PNG). */
export default function AboutPage() {
  return (
    <>
      <Nav active="about" />
      <main>
        <Hero />
        <Team />
        <WhatWeDo />
        <Values />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
