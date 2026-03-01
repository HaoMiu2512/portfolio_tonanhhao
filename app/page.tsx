"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import GlobalBackground from "./components/GlobalBackground";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Loading screen — unmounts after fade-out */}
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {/* Global animated background — fixed, visible across all sections */}
      <GlobalBackground />

      {/* Main content — always rendered but hidden behind loader */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          opacity: loading ? 0 : 1,
          transition: "opacity 0.6s ease",
          pointerEvents: loading ? "none" : "all",
        }}
      >
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
