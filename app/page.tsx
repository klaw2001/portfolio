import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import dynamic from "next/dynamic";

const About      = dynamic(() => import("@/components/sections/About"));
const Projects   = dynamic(() => import("@/components/sections/Projects"));
const TechStack  = dynamic(() => import("@/components/sections/TechStack"));
const Experience = dynamic(() => import("@/components/sections/Experience"));
const Skills     = dynamic(() => import("@/components/sections/Skills"));
const Contact    = dynamic(() => import("@/components/sections/Contact"));
const Footer     = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
