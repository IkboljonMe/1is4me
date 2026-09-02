import type { Metadata } from "next";

import Nav from "@/components/v2/Nav";
import Footer from "@/components/v2/Footer";
import Hero from "@/components/v2/pricing/Hero";
import Tiers from "@/components/v2/pricing/Tiers";
import Partnership from "@/components/v2/pricing/Partnership";
import CtaBand from "@/components/v2/pricing/CtaBand";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Start free. Upgrade when you're ready. Pay only for what creates real impact.",
};

/** Pricing — the sixth and final page of the rebuild (reference/pricing.PNG). */
export default function PricingPage() {
  return (
    <>
      <Nav active="pricing" />
      <main>
        <Hero />
        <Tiers />
        <Partnership />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
