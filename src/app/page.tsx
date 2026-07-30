import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TechnologyStrip } from "@/components/sections/TechnologyStrip";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { OpenSource } from "@/components/sections/OpenSource";
import { MoreExperiments } from "@/components/sections/MoreExperiments";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { StartupFortune } from "@/components/sections/StartupFortune";
import { About } from "@/components/sections/About";
import { EngineeringValues } from "@/components/sections/EngineeringValues";
import { GithubCTA } from "@/components/sections/GithubCTA";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TechnologyStrip />
        <FeaturedWork />
        <OpenSource />
        <MoreExperiments />
        <Skills />
        <Experience />
        <StartupFortune />
        <About />
        <EngineeringValues />
        <GithubCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
