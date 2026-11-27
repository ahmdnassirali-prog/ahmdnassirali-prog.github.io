import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Essentials from "@/components/Essentials";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Essentials />
        <Work />
        <Services />
        <Pricing />
        <Contact />
      </main>
    </>
  );
}
