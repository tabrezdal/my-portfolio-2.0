import ImageHelper from "../../Helpers/ImageHelper";

export const AboutSectionData = {

  /** Small uppercase eyebrow label above the headline */
  eyebrow: "About",

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
      bold: "Most teams hire a designer and a developer separately. I'm both. ",
      text: "As a Product Engineer, I close the gap between how a product looks and how it works — from blank Figma files to deployed React applications. I don't hand things off to myself; I own the full journey, and that changes what's possible in every project.",
    },
    {
      id: 2,
      bold: "I think in systems before I think in screens. ",
      text: "Every component I design, I consider how it's built. Every line of code I write, I consider how it's experienced. Whether it's a design system that has to scale across multiple teams or an MVP that has to ship in six weeks, I work backwards from user outcomes and build forward from solid architecture.",
    },
    {
      id: 3,
      bold: "The details others skip are where I live. ",
      text: "The 200ms that makes a hover feel intentional. The error message that builds trust instead of friction. The empty state that tells you exactly what to do next. These micro-decisions are invisible when they're right — and they're the difference between a product that merely works and one people actually enjoy.",
    },
  ],

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