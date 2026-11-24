import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Folio from "@/components/Folio";

export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <Work />
        <Services />
        <About />
        <Process />
        <Contact />
      </main>
      <Folio />
    </>
  );
}
