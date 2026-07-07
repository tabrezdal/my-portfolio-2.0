import React, { useEffect, lazy, Suspense } from "react";
import { Helmet } from 'react-helmet-async';
import AboutSection from "../components/AboutSection/AboutSection";
import HeroSection from "../components/HeroSection/HeroSection";
import StatsBar from "../components/StatsBar/StatsBar";
import SkillsSection from "../components/SkillsSection/SkillsSection";
import TechnologiesSection from "../components/TechnologiesSection/TechnologiesSection";
import ToolsSection from "../components/ToolsSection/ToolsSection";
import Footer from "../layouts/Footer/Footer";
import Header from "../layouts/Header/Header";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";
import CtaSection from "../components/CtaSection/CtaSection";
import StructuredData from "../components/StructuredData/StructuredData";
import ExperienceSection from "../components/ExperienceSection/ExperienceSection";
import CertificationsSection from "../components/CertificationsSection/CertificationsSection";
import EducationSection from "../components/EducationSection/EducationSection";
import ProcessSection from "../components/ProcessSection/ProcessSection";
import WhatIBringSection from "../components/WhatIBringSection/WhatIBringSection";
import ContactSection from "../components/ContactSection/ContactSection";

const TestimonialSlider = lazy(() => import("../components/TestimonialSlider/TestimonialSlider"));
const FeaturedProjectsSection = lazy(() => import("../components/FeaturedProjectsSection/FeaturedProjectsSection"));

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <StructuredData />
      <Helmet>
        <title>Tabrez Dal — Product Engineer, Software & UX</title>
        <meta name="description" content="Portfolio of Tabrez Dal — Product Engineer specialising in Software Engineering and UX/UI Design. 6+ years building scalable frontend systems and product-driven experiences." />
        <meta property="og:title" content="Tabrez Dal — Product Engineer, Software & UX" />
        <meta property="og:description" content="6+ years building scalable frontend systems and product-driven experiences across SaaS, healthcare, and e-commerce." />
        <meta property="og:image" content="https://tabrezdal.com/og-image.webp" />
        <meta property="og:url" content="https://tabrezdal.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tabrez Dal Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tabrez Dal — Product Engineer, Software & UX" />
        <meta name="twitter:description" content="6+ years building scalable frontend systems and product-driven experiences." />
        <meta name="twitter:image" content="https://tabrezdal.com/og-image.webp" />
      </Helmet>
      <Header />
      <main id="main-content">
        <HeroSection />
        <StatsBar />
        <AboutSection />
        <ProcessSection />
        <WhatIBringSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <SkillsSection />
        <ToolsSection />
        <TechnologiesSection />
        <CtaSection />
        <Suspense fallback={<div style={{ minHeight: 200 }} />}>
          <FeaturedProjectsSection />
        </Suspense>
        <ProjectsSection />
        <Suspense fallback={<div style={{ minHeight: 200 }} />}>
          <TestimonialSlider />
        </Suspense>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
