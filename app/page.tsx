import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { AskChronilogix } from "@/components/sections/AskChronilogix";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { WhoWeServe } from "@/components/sections/WhoWeServe";
import { USP } from "@/components/sections/USP";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main className="flex flex-col gap-2 p-2 md:gap-3 md:p-3">
        <Hero />
        <AskChronilogix />
        <Problem />
        <Solution />
        <WhoWeServe />
        <USP />
        <TrustSignals />
      </main>
      <Footer />
    </>
  );
}
