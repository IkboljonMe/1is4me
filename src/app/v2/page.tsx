import Nav from "@/components/v2/Nav";
import Hero from "@/components/v2/Hero";
import Achieve from "@/components/v2/Achieve";
import Doors from "@/components/v2/Doors";
import Tools from "@/components/v2/Tools";
import Proof from "@/components/v2/Proof";
import CtaBand from "@/components/v2/CtaBand";
import Footer from "@/components/v2/Footer";

/**
 * Home — the first page of the rebuild (reference/home.PNG).
 *
 * Each section owns its own vertical rhythm and its own EN/UZ/RU copy, so a
 * section can be reworked without touching this file or its neighbours.
 */
export default function V2Home() {
  return (
    <>
      <Nav active="home" />
      <main>
        <Hero />
        <Achieve />
        <Doors />
        <Tools />
        <Proof />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
