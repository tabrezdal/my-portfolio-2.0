// Alasus Technologies — enterprise UX / design system covers
import skillmineIndia from '../Assets/Images/Portfolio/UiUx/SkillMine [India]-Cover.webp';
import skillmineKSA from '../Assets/Images/Portfolio/UiUx/SkillMine [KSA]-Cover.webp';
import edxploreAdmin from '../Assets/Images/Portfolio/UiUx/EdXplore-Admin-Panel-Cover.webp';
import familyOffice from '../Assets/Images/Portfolio/UiUx/FamilyOffice360-Cover.webp';
import finverseGuru from '../Assets/Images/Portfolio/UiUx/Finverse-Guru-Revamped-by-TZ-Cover.webp';

// Self-Employed — Chrome extension, job portals, landing pages
import cryptoTracker from '../Assets/Images/Portfolio/Web/CryptoTracker.webp';
import a1Visas from '../Assets/Images/Portfolio/UiUx/A1-Visas-Passport-Photo-Service-Landing-Page-Cover.webp';
import propertyZone from '../Assets/Images/Portfolio/UiUx/PropertyZone-Landing-Page-Cover.webp';
import teachersIndia from '../Assets/Images/Portfolio/UiUx/TeachersIndia UI Revamped-Cover.webp';
import hopFlow from '../Assets/Images/Portfolio/UiUx/Hop-Registration-Flow-Design-Cover.webp';

// Zerozilla — mobile-first product UIs
import zerozillaProfile from '../Assets/Images/Portfolio/UiUx/ZeroZilla Profile-Cover.webp';
import bidroidNewUi from '../Assets/Images/Portfolio/UiUx/Bidroid App New UI.webp';
import cricbuzzApp from '../Assets/Images/Portfolio/UiUx/CricBuzz App UI.webp';
import linkedupApp from '../Assets/Images/Portfolio/UiUx/Linkedup App Ui Design [Cover].webp';
import myHabitApp from '../Assets/Images/Portfolio/UiUx/MyHabit-App-Ui-Design-Cover.webp';

// TJ Cloud Globe — production web apps
import edxploreFrontend from '../Assets/Images/Portfolio/Web/EdXplore Frontend.webp';
import grmHomepage from '../Assets/Images/Portfolio/Web/GRM - Homepage.webp';
import mobioticsHome from '../Assets/Images/Portfolio/Web/Mobiotics - Homepage.webp';
import oneGlint from '../Assets/Images/Portfolio/Web/OneGlint.webp';
import bidroidWeb from '../Assets/Images/Portfolio/Web/Bidroid Web.webp';

// Topclues Solution — graphic & brand assets
import topcluesInfographic from '../Assets/Images/Portfolio/Poster/Topclues Infographic.webp';
import topcluesCtr from '../Assets/Images/Portfolio/Poster/Topclues CTR Post.webp';
import weAreHiring from '../Assets/Images/Portfolio/Graphic/We_Are_Hiring_Full.webp';
import eidAlAdha from '../Assets/Images/Portfolio/Graphic/Eid_Al_Adha_Full.webp';
import naazClasses from '../Assets/Images/Portfolio/Poster/Naaz Classes Poster.webp';

export const ExperienceData = [
  {
    id: 1,
    role: "Technical Consultant — Frontend & UX",
    company: "Alasus Technologies",
    client: "IEHP (Healthcare)",
    location: "Hyderabad, India (Remote)",
    period: "Aug 2024 – Aug 2025",
    duration: "1 year",
    type: "Contract",
    color: "#0378b8",
    ctaLabel: "View Responsibilities ↓",
    highlights: [
      "Redesigned 60+ healthcare workflows into clean UX flows — improved navigation efficiency by 35% for 10,000+ daily users",
      "Built a full Angular + TypeScript design system used across 3 enterprise platforms, reducing dev handoff time by 30%",
      "Achieved WCAG 2.2 compliance across all internal and public-facing views — first time in the platform's history",
      "Automated key workflows cutting manual effort by 60%, saving each user 20+ hours weekly",
    ],
    skills: ["Angular", "TypeScript", "Figma", "Design Systems", "WCAG"],
    thumbnails: [
      { src: skillmineIndia, featured: true },
      { src: edxploreAdmin, featured: false },
      { src: familyOffice, featured: false },
      { src: finverseGuru, featured: false },
      { src: skillmineKSA, featured: false },
    ],
  },
  {
    id: 2,
    role: "Independent UX Consultant",
    company: "Self-Employed",
    client: null,
    location: "Hybrid",
    period: "May 2023 – Aug 2024",
    duration: "1 year 4 months",
    type: "Freelance",
    color: "#62bdfc",
    ctaLabel: "See What I Built ↓ ⭐",
    highlights: [
      "Shipped a Chrome extension for e-commerce product analysis — from UX research to production in 8 weeks solo",
      "Designed 4 job portals in Figma and built React/Next.js frontends with SSR — improved SEO load times by 40%",
      "Drove customer acquisition by 35% for a retail MVP through targeted UX restructuring and conversion-focused design",
      "Delivered UX strategy for a University of Toronto Ph.D. research tool — added industry best practices to academic work",
    ],
    skills: ["React", "Next.js", "Figma", "UX Research", "Chrome Extension"],
    thumbnails: [
      { src: cryptoTracker, featured: true },
      { src: a1Visas, featured: false },
      { src: propertyZone, featured: false },
      { src: teachersIndia, featured: false },
      { src: hopFlow, featured: false },
    ],
  },
  {
    id: 3,
    role: "Software Engineer — Frontend & UX",
    company: "Zerozilla",
    client: null,
    location: "Bangalore, India",
    period: "Aug 2022 – Apr 2023",
    duration: "9 months",
    type: "Full-time",
    color: "#8490ff",
    ctaLabel: "View Contributions ↓",
    highlights: [
      "Built a reusable React.js component library cutting development time by 30% across 5+ product teams",
      "Revamped mobile-first UI across 3 platforms — boosted user interaction by 50% and reduced bounce rate by 25%",
      "Ran 15+ usability tests across multiple personas, enabling data-driven product decisions that shipped within 2 sprints",
      "Maintained 90% on-time delivery across all projects through tight stakeholder alignment and agile execution",
    ],
    skills: ["React.js", "Figma", "UX Research", "Responsive Design"],
    thumbnails: [
      { src: zerozillaProfile, featured: true },
      { src: bidroidNewUi, featured: false },
      { src: cricbuzzApp, featured: false },
      { src: linkedupApp, featured: false },
      { src: myHabitApp, featured: false },
    ],
  },
  {
    id: 4,
    role: "Frontend Developer",
    company: "TJ Cloud Globe",
    client: null,
    location: "Rajkot, India",
    period: "Nov 2021 – Aug 2022",
    duration: "10 months",
    type: "Full-time",
    color: "#006BFF",
    ctaLabel: "What I Worked On ↓",
    highlights: [
      "Built 10+ production-ready web apps using React.js, TypeScript, Redux, and GraphQL — all shipped on schedule",
      "Drove a 60% increase in user engagement through consistent, performant UI implementation across MVC projects",
      "Trained 3 junior developers on modular coding and version control best practices — reduced PR review cycles by 25%",
      "Improved code quality across React, Laravel, and CodeIgniter projects through systematic refactoring and style standards",
    ],
    skills: ["React.js", "TypeScript", "Redux", "GraphQL"],
    thumbnails: [
      { src: edxploreFrontend, featured: true },
      { src: grmHomepage, featured: false },
      { src: mobioticsHome, featured: false },
      { src: oneGlint, featured: false },
      { src: bidroidWeb, featured: false },
    ],
  },
  {
    id: 5,
    role: "Graphic & Web Designer",
    company: "Topclues Solution",
    client: null,
    location: "Junagadh, India",
    period: "Jun 2020 – Nov 2021",
    duration: "1 year 6 months",
    type: "Full-time",
    color: "#28a745",
    ctaLabel: "View Impact ↓",
    highlights: [
      "Created 300+ ad creatives, UI layouts, and brand assets that drove a 40% expansion in client brand presence",
      "Led end-to-end website design and development — from brief to launch — for 5+ client brands",
      "Established consistent visual identity systems for multi-platform campaigns across print, web, and social",
    ],
    skills: ["Adobe Photoshop", "Illustrator", "Web Design", "Branding"],
    thumbnails: [
      { src: topcluesInfographic, featured: true },
      { src: topcluesCtr, featured: false },
      { src: weAreHiring, featured: false },
      { src: eidAlAdha, featured: false },
      { src: naazClasses, featured: false },
    ],
  },
];

export const EducationData = {
  degree: "B.E. Computer Engineering",
  institution: "Gujarat Technological University",
  location: "Ahmedabad, India",
  period: "2017 – 2021",
  cgpa: "8.45 / 10.00",
};
