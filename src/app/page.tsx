"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ResearchPaper from "@/components/ResearchPaper";
import Projects from "@/components/Projects";
import AcademiaVerification from "@/components/AcademiaVerification";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      <Header />
      
      <main
        className="flex flex-col gap-y-16 px-6 sm:px-8 md:px-12 lg:px-16"
      >
        <Hero />
        <About />
        <Experience />
        <Skills />
        <AcademiaVerification />
        <Projects />
        <ResearchPaper />
        <Contact />
      </main>
    </div>
  );
}