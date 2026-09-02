import type { Metadata } from "next";

import Nav from "@/components/v2/Nav";
import Footer from "@/components/v2/Footer";
import Hero from "@/components/v2/solutions/Hero";
import Services from "@/components/v2/solutions/Services";
import AiPanel from "@/components/v2/solutions/AiPanel";
import Process from "@/components/v2/solutions/Process";
import CtaBand from "@/components/v2/solutions/CtaBand";

export const metadata: Metadata = {
  title: "Solutions — 1is4Me",
  description:
    "Three core services. One partner. We give you the knowledge, strategy and systems you need to grow with confidence.",
};

/** Solutions — the second page of the rebuild (reference/solutions.PNG). */
export default function SolutionsPage() {
  return (
    <>
      <Nav active="solutions" />
      <main>
        <Hero />
        <Services />
        <AiPanel />
        <Process />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
