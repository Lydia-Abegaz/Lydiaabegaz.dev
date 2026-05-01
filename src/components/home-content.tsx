"use client";

import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/loading-screen";
import Navbar from "@/components/navbar";
import HeroNew from "@/components/hero-new";
import Services from "@/components/services";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import ParticleBackground from "@/components/particle-background";

export default function HomeContent() {
  const [isLoading, setIsLoading] = useState(true);
  const handleComplete = useCallback(() => setIsLoading(false), []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={handleComplete} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar />
          <main className="relative z-10">
            <HeroNew />
            <Services />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
