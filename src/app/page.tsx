import CTA from "@/components/CTA";
import Doors from "@/components/Doors";
import Footer from "@/components/Footer";
import Gaps from "@/components/Gaps";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Offers from "@/components/Offers";
import Outcomes from "@/components/Outcomes";
import Process from "@/components/Process";
import Proof from "@/components/Proof";
import Team from "@/components/Team";

/**
 * Section order is load-bearing — each block creates the reason for the next:
 * hook → what we sell → where you're stuck → which door → what you get →
 * how it runs → who we are → proof → one action.
 */
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Offers />
        <Gaps />
        <Doors />
        <Outcomes />
        <Process />
        <Team />
        <Proof />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
