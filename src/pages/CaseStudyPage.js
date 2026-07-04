import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";

// ── Existing sections ──────────────────────
import CaseStudyHero       from "../components/CaseStudyComps/CaseStudyHero/CaseStudyHero";
import CaseStudyProcess    from "../components/CaseStudyComps/CaseStudyProcess/CaseStudyProcess";
import CaseStudyDesignPrinciples from "../components/CaseStudyComps/CaseStudyDesignPrinciples/CaseStudyDesignPrinciples";
import CaseStudyVisualShowcase   from "../components/CaseStudyComps/CaseStudyVisualShowcase/CaseStudyVisualShowcase";
import CaseStudyTechStack  from "../components/CaseStudyComps/CaseStudyTechStack/CaseStudyTechStack";
import CaseStudyOutcome    from "../components/CaseStudyComps/CaseStudyOutcome/CaseStudyOutcome";
import CaseStudyGallery    from "../components/CaseStudyComps/CaseStudyGallery/CaseStudyGallery";
import CaseStudyNav        from "../components/CaseStudyComps/CaseStudyNav/CaseStudyNav";
import CaseStudyProblemFrame from "../components/CaseStudyComps/CaseStudyProblemFrame/CaseStudyProblemFrame";

// ── NEW sections ───────────────────────────
import CaseStudyContext     from "../components/CaseStudyComps/CaseStudyContext/CaseStudyContext";
import CaseStudyPlatformScope from "../components/CaseStudyComps/CaseStudyPlatformScope/CaseStudyPlatformScope";
import CaseStudyComplexitySignals from "../components/CaseStudyComps/CaseStudyComplexitySignals/CaseStudyComplexitySignals";
import CaseStudyCTA from "../components/CaseStudyComps/CaseStudyCTA/CaseStudyCTA";
import CaseStudyTOC from "../components/CaseStudyComps/CaseStudyTOC/CaseStudyTOC";

import FeaturedProjectsData from "../Data/FeaturedProjectsData";

const CaseStudyPage = () => {
  const { slug }   = useParams();
  const navigate   = useNavigate();
  const project    = FeaturedProjectsData.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    navigate("/");
    return null;
  }

  /* Conditional render guards */
  const hasMultipleSurfaces =
    project.platformSurfaces && project.platformSurfaces.length > 1;

  const hasComplexitySignals =
    project.complexitySignals && project.complexitySignals.length > 0;

  return (
    <div>
      <Helmet>
        <title>{project.title} — Case Study | Tabrez Dal</title>
        <meta name="description" content={project.shortDescription || `Case study: ${project.title} — designed and developed by Tabrez Dal.`} />
        <meta property="og:title" content={`${project.title} — Case Study | Tabrez Dal`} />
        <meta property="og:description" content={project.shortDescription || `Case study: ${project.title}`} />
        <meta property="og:image" content={project.coverImage || 'https://tabrezdal.com/og-image.webp'} />
        <meta property="og:url" content={`https://tabrezdal.com/case-study/${project.slug}`} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${project.title} — Case Study | Tabrez Dal`} />
        <meta name="twitter:image" content={project.coverImage || 'https://tabrezdal.com/og-image.webp'} />
      </Helmet>
      <Header />
      <main id="main-content">
        <CaseStudyTOC />
        {/* 1. Hero — cinematic dark opener with metrics strip */}
        <CaseStudyHero project={project} />

        {/* 2. Context — project brief, mandate, identity card (replaces Overview) */}
        <CaseStudyContext project={project} />

        {/* 3. Platform Scope — multi-surface/portal architecture [CONDITIONAL] */}
        {hasMultipleSurfaces && (
          <CaseStudyPlatformScope project={project} />
        )}

        {/* 4. Problem Frame — pain points, UX audit, solution bridge */}
        <CaseStudyProblemFrame project={project} />

        {/* 5. Process — research → IA → design → testing */}
        <CaseStudyProcess project={project} />

        {/* 6. Design Principles — strategic thinking display (dark) */}
        <CaseStudyDesignPrinciples project={project} />

        {/* 7. Complexity Signals — what made this uniquely hard [CONDITIONAL] */}
        {hasComplexitySignals && (
          <CaseStudyComplexitySignals project={project} />
        )}

        {/* 8. Visual Showcase — before/after, screens, features, design system, mobile, flow */}
        <CaseStudyVisualShowcase project={project} />

        {/* 9. Tech Stack — pills, role breakdown, code viewer, perf metrics, timeline */}
        <CaseStudyTechStack project={project} />

        {/* 10. Outcome — giant metrics, outcome quote, learnings */}
        <CaseStudyOutcome project={project} />

        {/* 11. CTA — Schedule a call / Send email */}
        <CaseStudyCTA
          liveUrl={project?.liveUrl}
          figmaUrl={project?.figmaUrl}
          loomUrl={project?.loomUrl}
        />

        {/* 12. Figma embed + image gallery */}
        <CaseStudyGallery project={project} />

        {/* 13. Prev / Next project navigation */}
        <CaseStudyNav project={project} />
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudyPage;
