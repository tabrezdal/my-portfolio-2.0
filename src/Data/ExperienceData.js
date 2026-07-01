import denim1 from '../Assets/Images/Portfolio/Catalogues/Denim Portfolio1.webp';
import denim2 from '../Assets/Images/Portfolio/Catalogues/Denim Portfolio2.webp';
import denim3 from '../Assets/Images/Portfolio/Catalogues/Denim Portfolio3.webp';
import denim4 from '../Assets/Images/Portfolio/Catalogues/Denim Portfolio4.webp';
import denim5 from '../Assets/Images/Portfolio/Catalogues/Denim Portfolio5.webp';
import designer1 from '../Assets/Images/Portfolio/Catalogues/Designer Portfolio1.webp';
import designer2 from '../Assets/Images/Portfolio/Catalogues/Designer Portfolio2.webp';
import designer3 from '../Assets/Images/Portfolio/Catalogues/Designer Portfolio3.webp';
import designer4 from '../Assets/Images/Portfolio/Catalogues/Designer Portfolio4.webp';
import designer5 from '../Assets/Images/Portfolio/Catalogues/Designer Portfolio5.webp';
import smp1 from '../Assets/Images/Portfolio/Graphic/SMP1.webp';
import smp2 from '../Assets/Images/Portfolio/Graphic/SMP2.webp';
import smp3 from '../Assets/Images/Portfolio/Graphic/SMP3.webp';
import smp4 from '../Assets/Images/Portfolio/Graphic/SMP4.webp';
import smp5 from '../Assets/Images/Portfolio/Graphic/SMP5.webp';
import smp6 from '../Assets/Images/Portfolio/Graphic/SMP6.webp';
import smp7 from '../Assets/Images/Portfolio/Graphic/SMP7.webp';
import smp8 from '../Assets/Images/Portfolio/Graphic/SMP8.webp';
import smp9 from '../Assets/Images/Portfolio/Graphic/SMP9.webp';
import smp10 from '../Assets/Images/Portfolio/Graphic/SMP10.webp';
import smp11 from '../Assets/Images/Portfolio/Graphic/SMP11.webp';
import smp12 from '../Assets/Images/Portfolio/Graphic/SMP12.webp';

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
      { src: denim1, featured: true },
      { src: denim2, featured: false },
      { src: denim3, featured: false },
      { src: denim4, featured: false },
      { src: denim5, featured: false },
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
    ctaLabel: "See What I Built ↓",
    highlights: [
      "Shipped a Chrome extension for e-commerce product analysis — from UX research to production in 8 weeks solo",
      "Designed 4 job portals in Figma and built React/Next.js frontends with SSR — improved SEO load times by 40%",
      "Drove customer acquisition by 35% for a retail MVP through targeted UX restructuring and conversion-focused design",
      "Delivered UX strategy for a University of Toronto Ph.D. research tool — added industry best practices to academic work",
    ],
    skills: ["React", "Next.js", "Figma", "UX Research", "Chrome Extension"],
    thumbnails: [
      { src: designer1, featured: true },
      { src: designer2, featured: false },
      { src: designer3, featured: false },
      { src: designer4, featured: false },
      { src: designer5, featured: false },
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
      { src: smp1, featured: true },
      { src: smp2, featured: false },
      { src: smp3, featured: false },
      { src: smp4, featured: false },
      { src: smp5, featured: false },
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
      { src: smp6, featured: true },
      { src: smp7, featured: false },
      { src: smp8, featured: false },
      { src: smp9, featured: false },
      { src: smp10, featured: false },
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
      { src: smp11, featured: true },
      { src: smp12, featured: false },
      { src: smp1, featured: false },
      { src: smp2, featured: false },
      { src: smp3, featured: false },
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
