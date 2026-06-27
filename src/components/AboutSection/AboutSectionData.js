import ImageHelper from "../../Helpers/ImageHelper";
import { SectionTitleHelper } from "../../Helpers/SectionTitleHelper";

export const AboutSectionData = {
  sectionTitle: SectionTitleHelper.aboutMe,
  description: [
    {
      id: 1,
      desc: "Product Engineer — Software & UX with 5+ years of experience leading end-to-end design and development of user-centric web applications. Demonstrated ownership in product design from concept to execution, having developed 20+ production-ready React-based SPAs and shipped multiple web projects from scratch. Designed user interfaces, wireframes, and interactive prototypes for 25+ projects, integrating UX/UI best practices, design systems, accessibility (WCAG), and human-centered design — boosting user satisfaction by 60%. Spearheaded SaaS platforms and MVPs for startups while optimizing enterprise-level web applications, with the ability to adapt quickly and contribute effectively in cross-functional teams.",
    },
  ],
  buttonData: {
    name: "Let's Connect",
    url: "https://www.linkedin.com/in/tabrezdal/",
  },
   buttonData2: {
    name: "Schedule a Meeting",
    url: "https://calendly.com/tabrez-dal/recruiter-intro-dubai",
  },
  sectionImage: ImageHelper?.AboutImage,
};
