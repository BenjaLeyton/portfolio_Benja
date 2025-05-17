"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Introduction from "@/components/introduction";
import AboutMe from "@/components/about-me";
import Services from "@/components/services";
import Portfolio from "@/components/portfolio";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { CoverParticles } from "@/components/cover-particles";

export default function Home() {
  const [particlesActive, setParticlesActive] = useState(true);

  const toggleParticles = () => {
    setParticlesActive(!particlesActive);
  };

  return (
    // ← cambiamos overflow-hidden por overflow-x-hidden
    <main className="relative overflow-x-hidden min-h-screen">
      {particlesActive && <CoverParticles />}
      <div className="relative z-10">
        <Navbar />

        {/* Switch */}
        <div className="fixed top-4 right-4 z-50 sm:top-6 sm:right-6">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={particlesActive}
              onChange={toggleParticles}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">
              {particlesActive ? "Partículas activadas" : "Partículas desactivadas"}
            </span>
          </label>
        </div>

        <Introduction />
        <AboutMe />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
