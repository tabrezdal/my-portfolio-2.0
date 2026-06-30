import denim1 from '../Assets/Images/Portfolio/Catalogues/Denim Portfolio1.webp';
import denim2 from '../Assets/Images/Portfolio/Catalogues/Denim Portfolio2.webp';
import designer1 from '../Assets/Images/Portfolio/Catalogues/Designer Portfolio1.webp';
import designer2 from '../Assets/Images/Portfolio/Catalogues/Designer Portfolio2.webp';
import smp1 from '../Assets/Images/Portfolio/Graphic/SMP1.webp';
import smp2 from '../Assets/Images/Portfolio/Graphic/SMP2.webp';
import smp3 from '../Assets/Images/Portfolio/Graphic/SMP3.webp';
import smp4 from '../Assets/Images/Portfolio/Graphic/SMP4.webp';
import smp5 from '../Assets/Images/Portfolio/Graphic/SMP5.webp';
import smp6 from '../Assets/Images/Portfolio/Graphic/SMP6.webp';

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
    highlights: [
      "Led end-to-end UI/UX design and frontend development using Angular, TypeScript, and Figma",
      "Automated workflows reducing manual effort by 60% and saving 20+ hours weekly per user",
      "Designed system used by 10,000+ users across enterprise healthcare platform",
    ],
    skills: ["Angular", "TypeScript", "Figma", "Design Systems", "WCAG"],
    thumbnails: [
      { src: denim1, featured: true },
      { src: denim2, featured: false },
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
    highlights: [
      "Delivered web apps, mobile UIs, and a Chrome extension for international clients",
      "Designed 4 job portals in Figma and built React/Next.js frontends with SSR",
      "Independently managed design and development driving customer acquisition by 35%",
    ],
    skills: ["React", "Next.js", "Figma", "UX Research", "Chrome Extension"],
    thumbnails: [
      { src: designer1, featured: true },
      { src: designer2, featured: false },
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
    highlights: [
      "Engineered reusable React.js components cutting development time by 30%",
      "Revamped UIs with mobile-first design boosting user interaction by 50%",
      "Conducted 15+ user research and usability tests enabling data-driven decisions",
    ],
    skills: ["React.js", "Figma", "UX Research", "Responsive Design"],
    thumbnails: [
      { src: smp1, featured: true },
      { src: smp2, featured: false },
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
    highlights: [
      "Built 10+ production-ready web applications using React.js, TypeScript, and GraphQL",
      "Drove 60% increase in user engagement through consistent UI implementation",
      "Trained 3 junior developers reducing project timelines by 25%",
    ],
    skills: ["React.js", "TypeScript", "Redux", "GraphQL"],
    thumbnails: [
      { src: smp3, featured: true },
      { src: smp4, featured: false },
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
    highlights: [
      "Created 300+ design assets improving brand engagement by 40%",
      "Led website design and development from concept to deployment",
      "Designed marketing creatives, UI layouts, and branding systems",
    ],
    skills: ["Adobe Photoshop", "Illustrator", "Web Design", "Branding"],
    thumbnails: [
      { src: smp5, featured: true },
      { src: smp6, featured: false },
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
