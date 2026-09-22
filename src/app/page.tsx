import { About } from "@/components/sections/About";
import { Chamber } from "@/components/sections/Chamber";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <About />
      <Chamber />
    </main>
  );
}
