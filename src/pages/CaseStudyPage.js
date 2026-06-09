import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";
import CaseStudyHero from "../components/CaseStudyComps/CaseStudyHero/CaseStudyHero";
import CaseStudyOverview from "../components/CaseStudyComps/CaseStudyOverview/CaseStudyOverview";
import CaseStudyProblemFrame from "../components/CaseStudyComps/CaseStudyProblemFrame/CaseStudyProblemFrame";
import CaseStudyProcess from "../components/CaseStudyComps/CaseStudyProcess/CaseStudyProcess";
import CaseStudyDesignPrinciples from "../components/CaseStudyComps/CaseStudyDesignPrinciples/CaseStudyDesignPrinciples";
import CaseStudyVisualShowcase from "../components/CaseStudyComps/CaseStudyVisualShowcase/CaseStudyVisualShowcase";
import CaseStudyTechStack from "../components/CaseStudyComps/CaseStudyTechStack/CaseStudyTechStack";
import CaseStudyOutcome from "../components/CaseStudyComps/CaseStudyOutcome/CaseStudyOutcome";
import CaseStudyGallery from "../components/CaseStudyComps/CaseStudyGallery/CaseStudyGallery";
import CaseStudyNav from "../components/CaseStudyComps/CaseStudyNav/CaseStudyNav";
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

      {/* 1. Hero — cinematic dark opener with metrics strip */}
      <CaseStudyHero project={project} />

      {/* 2. Overview — problem statement + meta grid */}
      <CaseStudyOverview project={project} />

      {/* 3. Problem Framing — painpoints + UX audit + solution bridge */}
      <CaseStudyProblemFrame project={project} />

      {/* 4. Process — how I approached it */}
      <CaseStudyProcess project={project} />

      {/* 5. Design Principles — strategic thinking display */}
      <CaseStudyDesignPrinciples project={project} />

      {/* 6. Visual Showcase — before/after, screens, features, design system, mobile, flow */}
      <CaseStudyVisualShowcase project={project} />

      {/* 7. Tech Stack — pills, role breakdown, code snippets, perf metrics, timeline */}
      <CaseStudyTechStack project={project} />

      {/* 8. Outcome — giant metrics, statement, learnings */}
      <CaseStudyOutcome project={project} />

      {/* 9. Figma embed + image gallery */}
      <CaseStudyGallery project={project} />

      {/* 10. Prev / Next navigation */}
      <CaseStudyNav project={project} />

      <Footer />
    </div>
  );
};

export default CaseStudyPage;
