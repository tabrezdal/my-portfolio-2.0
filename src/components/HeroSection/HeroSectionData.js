import ImageHelper from "../../Helpers/ImageHelper";

export const HeroSectionData = {
  // Legacy fields - kept for backward compatibility, deprecated
  introStatingLine: "This is me",
  name: "Tabrez Dal",
  introLine:
    "Product Engineer — Software & UX with 5+ years of experience building scalable frontend systems and delivering product-driven user experiences.",
  buttonData: {
    name: "Download CV",
    url: "https://drive.google.com/file/d/1BTrwtxWpF9m3OyaFJdjhcZIKaQxSzWGX/view?usp=drive_link",
  },
  heroImage: `${process.env.PUBLIC_URL}/hero-image.webp`,

  // New 2026 data structure
  roleDescriptor: "Product Engineer — Software & UX",
  headline: ["Building Products", "That Matter"],
  valueStatement: "I bridge engineering and design to ship scalable React products and intuitive user experiences — from Figma to production, across SaaS, healthcare, and e-commerce.",
  primaryCta: {
    label: "View Work",
    href: "#projects",
  },
  secondaryCta: {
    label: "Schedule a Call",
    href: "https://calendly.com/tabrez-dal",
  },
  proofPoint: [
    {
      type: "stat",
      value: "5+",
      label: "Years Experience",
    },
    {
      type: "stat",
      value: "25+",
      label: "Products Shipped",
    },
    {
      type: "stat",
      value: "10K+",
      label: "Users Impacted",
    },
  ],
};
