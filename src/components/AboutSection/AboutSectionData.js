import ImageHelper from "../../Helpers/ImageHelper";

export const AboutSectionData = {

  /** Small uppercase eyebrow label above the headline */
  eyebrow: "ABOUT ME",

  /**
   * Full-width headline — speaks to the dual Product Engineer identity.
   * Use \n to control line breaks.
   */
  headline: "I don't just design it —\nI ship it.",

  /** Shown below the photo */
  name: "Tabrez Dal",
  role: "Product Engineer — Software & UX",

  /**
   * Photo — uses existing ImageHelper import (no path changes needed).
   * Switch to ImageHelper.TzInSuit for the suit photo if preferred.
   */
  sectionImage: ImageHelper.AboutImage,
  sectionImageGrid: ImageHelper.AboutImageGrid,
  sectionImage700w: ImageHelper.AboutImage700w,

  /**
   * Signature text rendered in SVG cursive.
   * Update to your preferred name or initials.
   */
  mySignature: ImageHelper.MySignature,

  /**
   * Three narrative paragraphs.
   * No experience stats here — those live in the Experience section.
   * bold  → rendered as <strong>, introduces the paragraph
   * text  → the rest of the paragraph
   */
  paragraphs: [
    {
      id: 1,
      bold: "Product Engineer with 5+ years bridging software engineering and UX/UI design to deliver scalable, accessible web applications. ",
      text: "I've led end-to-end product development across healthcare SaaS, e-commerce, and enterprise platforms — owning the full cycle from user research and Figma design to React implementation and production deployment. Based in Dubai, UAE — open to senior product engineering, frontend engineering, and UX engineering roles across the UAE and globally.",
    },
    {
      id: 2,
      bold: "My edge is being equally fluent in design systems and frontend architecture — ",
      text: "I reduce back-and-forth between design and engineering teams, accelerate delivery, and build products that are both performant and delightful to use.",
    },
  ],

  /** Location tag */
  location: "Dubai, UAE · Available for Regional & Global Roles",

  /** CTA buttons — using existing shared PrimaryButton + BoxedButton */
  buttonData: {
    name: "Let's Connect",
    url: "https://www.linkedin.com/in/tabrezdal/",
    iconClass: "fa fa-linkedin",
  },
  buttonData2: {
    name: "Schedule a Meeting",
    url: "https://calendly.com/tabrez-dal",
    iconClass: "fa fa-calendar",
  },
};