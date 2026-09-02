import type { Metadata } from "next";

import Nav from "@/components/v2/Nav";
import Footer from "@/components/v2/Footer";
import Hero from "@/components/v2/smart-tools/Hero";
import ToolGrid from "@/components/v2/smart-tools/ToolGrid";
import ComingSoon from "@/components/v2/smart-tools/ComingSoon";
import Process from "@/components/v2/smart-tools/Process";
import CtaBand from "@/components/v2/smart-tools/CtaBand";

export const metadata: Metadata = {
  title: "Smart Tools",
  description:
    "A collection of intelligent tools that help you save time, work smarter and make better decisions.",
};

/** Smart Tools — third page of the rebuild (reference/smart_tools.PNG). */
export default function SmartToolsPage() {
  return (
    <>
      <Nav active="smart-tools" />
      <main>
        <Hero />
        <ToolGrid />
        <ComingSoon />
        <Process />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
