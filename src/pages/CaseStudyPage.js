import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";
import CaseStudyHero from "../components/CaseStudyComps/CaseStudyHero/CaseStudyHero";
import CaseStudyOverview from "../components/CaseStudyComps/CaseStudyOverview/CaseStudyOverview";
import CaseStudyProcess from "../components/CaseStudyComps/CaseStudyProcess/CaseStudyProcess";
import CaseStudyOutcome from "../components/CaseStudyComps/CaseStudyOutcome/CaseStudyOutcome";
import CaseStudyGallery from "../components/CaseStudyComps/CaseStudyGallery/CaseStudyGallery";
import CaseStudyNav from "../components/CaseStudyComps/CaseStudyNav/CaseStudyNav";
import CaseStudyVisualShowcase from "../components/CaseStudyComps/CaseStudyVisualShowcase/CaseStudyVisualShowcase";
import CaseStudyTechStack from "../components/CaseStudyComps/CaseStudyTechStack/CaseStudyTechStack";
import FeaturedProjectsData from "../Data/FeaturedProjectsData";

const CaseStudyPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = FeaturedProjectsData.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) {
      document.title = `${project.title} — Case Study | Tabrez Dal`;
    }
  }, [slug, project]);

  if (!project) {
    navigate("/");
    return null;
  }

  return (
    <div>
      <Header />

      {/* 1. Hero — dark cinematic opener */}
      <CaseStudyHero project={project} />

      {/* 2. Overview — problem statement + meta */}
      <CaseStudyOverview project={project} />

      {/* 3. Process — how I approached it */}
      <CaseStudyProcess project={project} />

      {/* 4. Visual Showcase — before/after, screens, features, design system, mobile, flow */}
      <CaseStudyVisualShowcase project={project} />

      {/* 5. Tech Stack — pills, role breakdown, code snippets, perf metrics, timeline */}
      <CaseStudyTechStack project={project} />

      {/* 6. Outcome — key results + metrics */}
      <CaseStudyOutcome project={project} />

      {/* 7. Figma embed + image gallery */}
      <CaseStudyGallery project={project} />

      {/* 8. Prev / Next navigation */}
      <CaseStudyNav project={project} />

      <Footer />
    </div>
  );
};

export default CaseStudyPage;
