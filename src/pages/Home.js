import React, { useEffect } from "react";
import AboutSection from "../components/AboutSection/AboutSection";
import HeroSection from "../components/HeroSection/HeroSection";
import SkillsSection from "../components/SkillsSection/SkillsSection";
import TechnologiesSection from "../components/TechnologiesSection/TechnologiesSection";
import ToolsSection from "../components/ToolsSection/ToolsSection";
import Footer from "../layouts/Footer/Footer";
import Header from "../layouts/Header/Header";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";
import CtaSection from "../components/CtaSection/CtaSection";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ToolsSection />
      <TechnologiesSection />
      <CtaSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default Home;
