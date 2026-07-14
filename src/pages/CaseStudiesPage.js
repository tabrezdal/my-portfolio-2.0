import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import FeaturedProjectsData from '../Data/FeaturedProjectsData';
import Header from '../layouts/Header/Header';
import Footer from '../layouts/Footer/Footer';
import ImageHelper from '../Helpers/ImageHelper';
import FloatingDock from '../sharedComponents/FloatingDock/FloatingDock';
import './CaseStudiesPage.css';

// Tech icon mapping based on available icons in ImageHelper
const TECH_ICON_MAP = {
  'React': ImageHelper.ReactIcon,
  'React 18': ImageHelper.ReactIcon,
  'React.js': ImageHelper.ReactIcon,
  'Redux': ImageHelper.ReduxIcon,
  'GraphQL': ImageHelper.GraphQLIcon,
  'Graph QL': ImageHelper.GraphQLIcon,
  'Node.js': ImageHelper.NodeJsIcon,
  'Node Js': ImageHelper.NodeJsIcon,
  'TypeScript': ImageHelper.TypescriptIcon,
  'Typescript': ImageHelper.TypescriptIcon,
  'HTML5': ImageHelper.HtmlIcon,
  'CSS3': ImageHelper.CssIcon,
  'Sass': ImageHelper.SaasIcon,
  'Material UI': ImageHelper.MuiIcon,
  'MUI v5': ImageHelper.MuiIcon,
  'Bootstrap': ImageHelper.BootstrapIcon,
  'MySQL': ImageHelper.MySqlIcon,
  'JSON': ImageHelper.JsonIcon,
  'JavaScript': ImageHelper.JavaScriptIcon,
  'Axios': ImageHelper.AxiosIcon,
  'Axio': ImageHelper.AxiosIcon,
  'jQuery': ImageHelper.JqueryIcon,
  'Jquery': ImageHelper.JqueryIcon,
  'ChatGPT': ImageHelper.ChatGPTIcon,
  'Less': ImageHelper.LessIcon,
  'Figma': ImageHelper.FigmaLogo,
};

// Default tech icons to show if no tech icons available
const DEFAULT_TECH_ICONS = [
  { name: 'React', icon: ImageHelper.ReactIcon },
  { name: 'Redux', icon: ImageHelper.ReduxIcon },
  { name: 'HTML5', icon: ImageHelper.HtmlIcon },
  { name: 'CSS3', icon: ImageHelper.CssIcon },
  { name: 'JavaScript', icon: ImageHelper.JavaScriptIcon },
  { name: 'Figma', icon: ImageHelper.FigmaLogo },
];

// Helper to separate domain tags from tech tags
const separateTags = (tags) => {
  if (!tags) return { domainTags: [], techTags: [] };

  const techKeywords = [
    'React', 'Redux', 'GraphQL', 'Node', 'TypeScript', 'Typescript',
    'HTML', 'CSS', 'Sass', 'Less', 'Bootstrap', 'Material UI', 'MUI',
    'MySQL', 'JSON', 'JavaScript', 'Axios', 'jQuery', 'ChatGPT', 'Figma',
    'Angular', 'Vue', 'Next.js', 'Chart.js', 'AG Grid', 'Flutter'
  ];

  const domainTags = [];
  const techTags = [];

  tags.forEach(tag => {
    const isTech = techKeywords.some(keyword => tag.toLowerCase().includes(keyword.toLowerCase()));
    if (isTech) {
      techTags.push(tag);
    } else {
      domainTags.push(tag);
    }
  });

  return { domainTags, techTags };
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
};

const staggerGrid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } }
};

const CaseStudiesPage = () => {
  const shouldReduceMotion = useReducedMotion();
  const projects = FeaturedProjectsData;

  // Fallback to ensure meta tags are set for lazy-loaded routes
  React.useEffect(() => {
    document.title = 'Case Studies | Product & UX Engineering — Tabrez Dal';
    
    const setDescription = (content) => {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'description';
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    const setCanonical = (href) => {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    const setOGMeta = (property, content) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    setDescription('Explore 12 case studies in product design and front-end engineering — SaaS, healthcare, and e-commerce work by Tabrez Dal, Product Engineer.');
    setCanonical('https://tabrezdal.com/case-studies');
    setOGMeta('og:title', 'Case Studies | Tabrez Dal');
    setOGMeta('og:description', 'Explore 12 case studies in product design and front-end engineering — SaaS, healthcare, and e-commerce work by Tabrez Dal, Product Engineer.');
    setOGMeta('og:url', 'https://tabrezdal.com/case-studies');
    setOGMeta('og:type', 'website');
    setOGMeta('og:image', 'https://tabrezdal.com/og-image.webp');
  }, []);

  return (
    <>
      <Helmet defer={false}>
        <title>Case Studies | Product & UX Engineering — Tabrez Dal</title>
        <meta
          name="description"
          content="Explore 12 case studies in product design and front-end engineering — SaaS, healthcare, and e-commerce work by Tabrez Dal, Product Engineer."
        />
        <link rel="canonical" href="https://tabrezdal.com/case-studies" />

        <meta property="og:title" content="Case Studies | Tabrez Dal" />
        <meta
          property="og:description"
          content="Explore 12 case studies in product design and front-end engineering — SaaS, healthcare, and e-commerce work by Tabrez Dal, Product Engineer."
        />
        <meta property="og:url" content="https://tabrezdal.com/case-studies" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://tabrezdal.com/og-image.webp" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Case Studies | Tabrez Dal" />
        <meta
          name="twitter:description"
          content="Explore 12 case studies in product design and front-end engineering — SaaS, healthcare, and e-commerce work by Tabrez Dal, Product Engineer."
        />
        <meta name="twitter:image" content="https://tabrezdal.com/og-image.webp" />
      </Helmet>
      <Header />
      <main className="case-studies-page">

        {/* Page hero */}
        <motion.div
          className="case-studies-hero"
          variants={shouldReduceMotion ? {} : fadeUp}
          initial="hidden"
          animate="visible"
        >
          <p className="case-studies-hero__label">Work</p>
          <h1 className="case-studies-hero__title">Case Studies</h1>
          <p className="case-studies-hero__count">
            {projects.length} project{projects.length !== 1 ? 's' : ''} across
            design, engineering, and systems
          </p>
        </motion.div>

        {/* Grid */}
        {projects.length === 0 ? (
          <div className="case-studies-empty">No case studies yet.</div>
        ) : (
          <motion.div
            className="case-studies-grid"
            variants={shouldReduceMotion ? {} : staggerGrid}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project, index) => {
              const { domainTags, techTags } = separateTags(project.tags);

              // Get tech icons from actual tech tags, or use defaults if none
              const techIconsToShow = techTags.length > 0
                ? techTags
                    .map((tag) => ({ tag, iconSrc: TECH_ICON_MAP[tag] }))
                    .filter(({ iconSrc }) => iconSrc)
                    .slice(0, 3)
                : DEFAULT_TECH_ICONS.slice(0, 3);

              // Tooltip shows only tech tags (no duplication with domain tags)
              const tooltipTags = techTags.length > 0 ? techTags : DEFAULT_TECH_ICONS.map(t => t.name);

              return (
                <motion.div
                  key={project.id}
                  variants={shouldReduceMotion ? {} : fadeUp}
                >
                  <Link
                    to={`/case-study/${project.slug}`}
                    className="case-study-card"
                  >
                    {/* Image */}
                    <div className="case-study-card__img-wrap">
                      <img
                        src={project.coverImage || ImageHelper.CaseStudyPlaceholder}
                        srcSet={project.coverImageGrid ? `${project.coverImageGrid} 640w, ${project.coverImage} 1200w` : undefined}
                        sizes="(max-width: 640px) 100vw, 602px"
                        alt={project.coverImage ? project.title : `${project.title} — cover image coming soon`}
                        className="case-study-card__img"
                        loading={index === 0 ? 'eager' : 'lazy'}
                        fetchPriority={index === 0 ? 'high' : undefined}
                        width={800}
                        height={300}
                      />
                    </div>

                    {/* Body */}
                    <div className="case-study-card__body">
                      {/* Header with title, role, and year */}
                      <div className="case-study-card__header">
                        <div className="case-study-card__header-left">
                          <h2 className="case-study-card__title">{project.title}</h2>
                          {project.role && (
                            <p className="case-study-card__subtitle">{project.role}</p>
                          )}
                        </div>
                        {project.year && (
                          <span className="case-study-card__year">{project.year}</span>
                        )}
                      </div>

                      {/* Divider */}
                      {(project.role && project.shortDescription) && (
                        <div className="case-study-card__divider" />
                      )}

                      {/* Description */}
                      {project.shortDescription && (
                        <p className="case-study-card__description">
                          {project.shortDescription}
                        </p>
                      )}

                      {/* Bottom bar */}
                      <div className="case-study-card__bottom">
                        {/* Domain tags — left */}
                        {domainTags.length > 0 && (
                          <div className="case-study-card__tags">
                            {domainTags.slice(0, 3).map((tag) => (
                              <span key={tag} className="case-study-card__tag">
                                {tag}
                              </span>
                            ))}
                            {domainTags.length > 3 && (
                              <span className="case-study-card__tag">
                                +{domainTags.length - 3}
                              </span>
                            )}
                          </div>
                        )}

                        {/* Tech icons — right */}
                        <div className="case-study-card__tech">
                          {techIconsToShow.map(({ tag, iconSrc }) => (
                            <div key={tag} className="case-study-card__tech-icon">
                              <img src={iconSrc} alt={tag || 'Technology icon'} />
                            </div>
          ))}
                          <div className="case-study-card__tech-tooltip">
                            {tooltipTags.join('  ·  ')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}

      </main>
      <Footer />
      <FloatingDock />
    </>
  );
};

export default CaseStudiesPage;
