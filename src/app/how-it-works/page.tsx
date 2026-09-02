import type { Metadata } from "next";

import Nav from "@/components/v2/Nav";
import Footer from "@/components/v2/Footer";
import Hero from "@/components/v2/how-it-works/Hero";
import Steps from "@/components/v2/how-it-works/Steps";
import Stages from "@/components/v2/how-it-works/Stages";
import Trust from "@/components/v2/how-it-works/Trust";
import Clients from "@/components/v2/how-it-works/Clients";
import CtaBand from "@/components/v2/how-it-works/CtaBand";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "A proven process that removes guesswork, builds the right systems and helps your business grow with confidence.",
};

/** How It Works — fourth page of the rebuild (reference/how_it_works.PNG). */
export default function HowItWorksPage() {
  return (
    <>
      <Nav active="how-it-works" />
      <main>
        <Hero />
        <Steps />
        <Stages />
        <Trust />
        <Clients />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
