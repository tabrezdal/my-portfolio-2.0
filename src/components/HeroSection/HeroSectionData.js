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
  heroImage: `${process.env.PUBLIC_URL}/hero-image-optimized.webp`,

  // New 2026 data structure
  roleDescriptor: "Product Engineer",
  headline: ["Building Products", "That Matter"],
  valueStatement: "I help startups and enterprise teams build scalable React applications and intuitive product experiences that improve usability, performance, and business outcomes.",
  primaryCta: {
    label: "View Work",
    href: "#projects",
  },
  secondaryCta: {
    label: "Schedule a Call",
    href: "https://calendly.com/tabrez-dal",
  },
  proofPoint: {
    type: "stat",
    value: "5+",
    label: "Years Experience",
  },
};
