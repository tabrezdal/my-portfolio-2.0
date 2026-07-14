import React, { useEffect, lazy, Suspense } from "react";
import { Helmet } from 'react-helmet-async';
import HeroSection from "../components/HeroSection/HeroSection";
import StatsBar from "../components/StatsBar/StatsBar";
import LogoStrip from "../components/LogoStrip/LogoStrip";
import Footer from "../layouts/Footer/Footer";
import Header from "../layouts/Header/Header";
import CtaSection from "../components/CtaSection/CtaSection";
import StructuredData from "../components/StructuredData/StructuredData";
import FloatingDock from "../sharedComponents/FloatingDock/FloatingDock";

// Lazy-load below-fold and non-critical sections to reduce bundle size
const AboutSection = lazy(() => import("../components/AboutSection/AboutSection"));
const ProjectsSection = lazy(() => import("../components/ProjectsSection/ProjectsSection"));
const ExperienceSection = lazy(() => import("../components/ExperienceSection/ExperienceSection"));
const CertificationsSection = lazy(() => import("../components/CertificationsSection/CertificationsSection"));
const EducationSection = lazy(() => import("../components/EducationSection/EducationSection"));
const ProcessSection = lazy(() => import("../components/ProcessSection/ProcessSection"));
const WhatIBringSection = lazy(() => import("../components/WhatIBringSection/WhatIBringSection"));
const ContactSection = lazy(() => import("../components/ContactSection/ContactSection"));
const SkillsToolsSection = lazy(() => import("../components/SkillsToolsSection/SkillsToolsSection"));
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
        <meta name="description" content="Portfolio of Tabrez Dal — Product Engineer specialising in Software Engineering and UX/UI Design. 6+ years across SaaS, healthcare, and e-commerce." />
        <meta property="og:title" content="Tabrez Dal — Product Engineer, Software & UX" />
        <meta property="og:description" content="Portfolio of Tabrez Dal — Product Engineer specialising in Software Engineering and UX/UI Design. 6+ years across SaaS, healthcare, and e-commerce." />
        <meta property="og:image" content="https://tabrezdal.com/og-image.webp" />
        <meta property="og:url" content="https://tabrezdal.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tabrez Dal Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tabrez Dal — Product Engineer, Software & UX" />
        <meta name="twitter:description" content="6+ years building scalable frontend systems and product-driven experiences." />
        <meta name="twitter:image" content="https://tabrezdal.com/og-image.webp" />
        <link rel="canonical" href="https://tabrezdal.com/" />
        <link rel="preload" href="/hero-image-optimized.webp" as="image" fetchpriority="high" />
      </Helmet>
      <Header />
      <main id="main-content">
        <HeroSection />
        <StatsBar />
        <LogoStrip />
        <Suspense fallback={<div style={{ minHeight: 200 }} />}>
          <FeaturedProjectsSection />
        </Suspense>
        <Suspense fallback={<div style={{ minHeight: 200 }} />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<div style={{ minHeight: 200 }} />}>
          <ProcessSection />
        </Suspense>
        <Suspense fallback={<div style={{ minHeight: 200 }} />}>
          <WhatIBringSection />
        </Suspense>
        <Suspense fallback={<div style={{ minHeight: 200 }} />}>
          <SkillsToolsSection />
        </Suspense>
        <Suspense fallback={<div style={{ minHeight: 200 }} />}>
          <ExperienceSection />
        </Suspense>
        <Suspense fallback={<div style={{ minHeight: 200 }} />}>
          <EducationSection />
        </Suspense>
        <Suspense fallback={<div style={{ minHeight: 200 }} />}>
          <CertificationsSection />
        </Suspense>
        <Suspense fallback={<div style={{ minHeight: 200 }} />}>
          <ProjectsSection />
        </Suspense>
        <Suspense fallback={<div style={{ minHeight: 200 }} />}>
          <TestimonialSlider />
        </Suspense>
        <Suspense fallback={<div style={{ minHeight: 200 }} />}>
          <ContactSection />
        </Suspense>
        <CtaSection />
      </main>
      <Footer />
      <FloatingDock />
    </div>
  );
};

export default Home;