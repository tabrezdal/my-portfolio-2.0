import ImageHelper from "../Helpers/ImageHelper";

const FeaturedProjectsData = [
  {
    id: "cs01",
    title: "TezHub",
    slug: "tezhub",
    category: "Product Design",
    tags: ["SaaS", "Figma", "UX Research"],
    year: "2023",
    role: "Lead UI/UX Designer",
    duration: "4 months",
    shortDescription:
      "Unified 7–8 fragmented restaurant products into a single, cohesive SaaS platform spanning POS, digital signage, and loyalty.",
    problem:
      "Disparate legacy tools forced restaurant operators to context-switch constantly, increasing training time and error rate.",
    process: [
      {
        heading: "Discovery & Audit",
        body: "Audited all 8 existing products, mapped overlapping flows, and ran stakeholder interviews to identify consolidation opportunities.",
      },
      {
        heading: "Information Architecture",
        body: "Restructured navigation around user roles (Owner, Manager, Staff) rather than product silos, reducing top-level items by 60%.",
      },
      {
        heading: "Design System",
        body: "Built a shared component library in Figma covering 80+ components, enabling consistent UI across all modules.",
      },
      {
        heading: "Prototyping & Testing",
        body: "Ran 3 rounds of usability testing with 12 restaurant operators; iterated on onboarding flow and order-management screen.",
      },
    ],
    outcome:
      "Unified platform reduced operator onboarding time by 40% and increased feature adoption from 2 modules to 6+ per account.",
    metrics: [
      { label: "Onboarding time", value: "−40%" },
      { label: "Modules used per account", value: "2 → 6+" },
      { label: "Components in design system", value: "80+" },
    ],
    coverImage: ImageHelper.TezHUBCover,
    gallery: [ImageHelper.TezHUBCover],
    tools: ["Figma", "FigJam", "Maze"],

    /* ── Problem Frame ── */
    problemFrame: {
      statement: "8 separate products. Zero shared experience.",
      statementAccent: "Restaurant operators were burning time just switching tools.",
      context:
        "Every module — POS, signage, loyalty, marketing — lived in a different app with a different UI language, login, and support system. Staff training took weeks. Mistakes were frequent.",
      painpoints: [
        {
          title: "No single source of truth",
          desc: "Owners had to log into 3–4 apps just to check today's sales, loyalty points, and signage schedules.",
          severity: "critical",
        },
        {
          title: "Inconsistent UI patterns",
          desc: "Each product used different navigation, spacing, and component styles — creating re-learning friction every time users switched contexts.",
          severity: "critical",
        },
        {
          title: "Slow staff onboarding",
          desc: "New hires needed separate training for each tool, averaging 3+ weeks before they could operate independently.",
          severity: "high",
        },
        {
          title: "No role-based access control",
          desc: "All staff saw all features regardless of their role, exposing sensitive financial data and increasing error rates.",
          severity: "high",
        },
        {
          title: "Mobile workflows absent",
          desc: "No mobile experience for floor staff who needed quick order checks and table updates during service.",
          severity: "medium",
        },
      ],
      auditItems: [
        {
          icon: "fa fa-random",
          title: "Inconsistent navigation",
          body: "7 different nav patterns across 8 products. No shared mental model.",
          badge: "Heuristic #4",
        },
        {
          icon: "fa fa-eye-slash",
          title: "Poor visual hierarchy",
          body: "Critical actions (new order, close tab) had identical visual weight as settings.",
          badge: "Heuristic #8",
        },
        {
          icon: "fa fa-exclamation-triangle",
          title: "No error prevention",
          body: "Destructive actions (delete, refund) had no confirmation dialogs or undo states.",
          badge: "Heuristic #5",
        },
        {
          icon: "fa fa-clock-o",
          title: "Slow task completion",
          body: "Average 12 clicks to complete a table-turn flow. Industry benchmark: 5.",
          badge: "Efficiency",
        },
        {
          icon: "fa fa-mobile",
          title: "Zero mobile support",
          body: "None of the 8 products had a responsive layout or mobile-native experience.",
          badge: "Accessibility",
        },
        {
          icon: "fa fa-puzzle-piece",
          title: "No shared component system",
          body: "Button styles, form inputs, and modals were built independently per product — 8× the tech debt.",
          badge: "System Design",
        },
      ],
      solutionBridge: {
        icon: "fa fa-lightbulb-o",
        title: "Our approach: Consolidate around user roles, not product silos",
        body: "Rather than porting each product into a single shell, we restructured the entire information architecture around what each user type (Owner, Manager, Staff) needs to accomplish. Navigation became role-aware. Components became shared. Every module lived under one login, one design language, one experience.",
      },
    },

    /* ── Design Principles ── */
    designPrinciples: {
      title: "The thinking behind every decision",
      subtitle:
        "These principles governed every design decision — from navigation structure to micro-interaction timing.",
      items: [
        {
          title: "Clarity over decoration",
          desc: "Every visual element earns its place. If it doesn't communicate something useful, it's removed. Restaurant operators work fast — the UI should never slow them down.",
          tag: "Core Principle",
        },
        {
          title: "Role-aware by default",
          desc: "The system knows who you are and shows only what's relevant. Owners see financials. Staff see tasks. Managers see both. Nothing more, nothing less.",
          tag: "Personalisation",
        },
        {
          title: "One action per screen moment",
          desc: "At any point in a workflow, there's one primary action that's visually dominant. We eliminated decision paralysis by removing competing CTAs.",
          tag: "Cognitive Load",
        },
        {
          title: "Modular and scalable",
          desc: "Every component was built as a token-driven, auto-layout Figma element. New modules can be added without breaking the visual language or requiring redesign.",
          tag: "System Thinking",
        },
        {
          title: "Error states are first-class citizens",
          desc: "We designed every error, empty, and loading state before the happy path. Edge cases are where trust is won or lost.",
          tag: "Reliability",
        },
      ],
      closingQuote:
        "Great product design isn't about how good it looks — it's about how invisibly it works.",
    },

    /* ── Learnings ── */
    learnings: [
      {
        title: "Start with IA, not screens",
        body: "We initially jumped to wireframes before fully resolving the information architecture. Rebuilding IA mid-design cost 2 weeks. Always resolve structure first.",
      },
      {
        title: "Involve engineers in design system decisions",
        body: "Some of our Figma component variants didn't map cleanly to React props. Earlier dev involvement would have saved handoff friction.",
      },
      {
        title: "Test on real hardware earlier",
        body: "POS flows looked great on Figma but felt slow on actual tablets. We should have prototyped on device by week 4, not week 10.",
      },
    ],

    figmaEmbed:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F92E8ayZCG6pK6z0d5rVfNX%2FTezHUB-by-TZ%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DjlchnmRhNK7OpwWH-1",
    prevSlug: null,
    nextSlug: "edxplore-admin-panel",

    /* ── Section A: Visual Showcase ── */
    showcase: {
      // Before / After pairs
      beforeAfter: [
        {
          context: "Dashboard — Navigation",
          before: {
            image: ImageHelper.TezHUBCover,
            caption:
              "Original: 8 separate apps with no shared nav, inconsistent spacing and competing visual languages.",
          },
          after: {
            image: ImageHelper.TezHUBCover,
            caption:
              "Redesigned: Unified role-based sidebar, single token system, consistent 8px grid.",
          },
        },
      ],

      // Screen gallery
      screens: [
        { image: ImageHelper.TezHUBCover, label: "Dashboard" },
        { image: ImageHelper.TezHUBCover, label: "POS Module" },
        { image: ImageHelper.TezHUBCover, label: "Digital Signage" },
        { image: ImageHelper.TezHUBCover, label: "Loyalty Program" },
        { image: ImageHelper.TezHUBCover, label: "Analytics" },
        { image: ImageHelper.TezHUBCover, label: "Onboarding" },
      ],
      screensTitle: "Complete screen library",
      screensSubtitle:
        "Every screen designed with auto-layout, component variants, and responsive constraints. Click to view full size.",

      // Feature highlights
      features: [
        {
          icon: "fa fa-sitemap",
          title: "Role-Based Navigation",
          body: "Navigation restructured around Owner, Manager, and Staff roles — reducing cognitive load and eliminating irrelevant menu items per user type.",
          tag: "Information Architecture",
        },
        {
          icon: "fa fa-cubes",
          title: "Unified Component Library",
          body: "80+ shared components built in Figma with auto-layout and constraint-based resizing — usable across all 8 product modules.",
          tag: "Design System",
        },
        {
          icon: "fa fa-mobile",
          title: "Responsive Across Devices",
          body: "Designed mobile-first breakpoints for POS (tablet), Signage (large display), and back-office (desktop) simultaneously.",
          tag: "Multi-Platform",
        },
        {
          icon: "fa fa-line-chart",
          title: "Contextual Analytics",
          body: "Embedded data visualisations inline with operational screens — managers see KPIs without switching to a separate reporting tool.",
          tag: "UX Decision",
        },
        {
          icon: "fa fa-check-circle",
          title: "Onboarding in 3 Steps",
          body: "Reduced onboarding from a 12-screen wizard to a 3-step contextual setup flow, validated with 12 restaurant operators.",
          tag: "Usability",
        },
        {
          icon: "fa fa-paint-brush",
          title: "Single Token System",
          body: "All colours, spacing, radius, and shadow values tokenised — enabling future white-labelling and theme switching with zero redesign.",
          tag: "Scalability",
        },
      ],
      featuresTitle: "Key design decisions",
      featuresSubtitle:
        "Every decision was grounded in research findings and validated through usability testing.",

      // Design system preview
      designSystem: {
        projectName: "TezHub",
        colors: [
          { name: "Primary", hex: "#0378b8" },
          { name: "Primary Light", hex: "#62bdfc" },
          { name: "Surface", hex: "#f9f9ff" },
          { name: "On-Surface", hex: "#222222" },
          { name: "Muted", hex: "#777777" },
          { name: "Border", hex: "#e0e0e0" },
          { name: "Success", hex: "#28c840" },
          { name: "Error", hex: "#ff5f57" },
          { name: "Black", hex: "#000000" },
          { name: "White", hex: "#ffffff" },
        ],
        typography: [
          { label: "H1", size: "28px", weight: 700, sample: "Platform Dashboard" },
          { label: "H2", size: "22px", weight: 600, sample: "Module Overview" },
          { label: "H3", size: "18px", weight: 600, sample: "Section Heading" },
          { label: "Body", size: "14px", weight: 400, sample: "Restaurant operators use..." },
          { label: "Small", size: "12px", weight: 400, sample: "Last updated 2 hours ago" },
          { label: "Label", size: "10px", weight: 700, sample: "STATUS · ACTIVE" },
        ],
        components: true,
      },

      // Mobile screens
      mobileScreens: [
        { image: ImageHelper.TezHUBCover, label: "POS Tablet", sublabel: "iPad · 768px" },
        { image: ImageHelper.TezHUBCover, label: "Manager App", sublabel: "Mobile · 390px" },
        { image: ImageHelper.TezHUBCover, label: "Signage Display", sublabel: "TV · 1920px" },
      ],
      mobileTitle: "Designed for every surface",
      mobileSubtitle:
        "POS runs on tablets, staff app on mobile, and digital menu on large displays — all sharing the same design tokens.",

      // User flow
      userFlow: [
        { icon: "fa fa-sign-in", label: "Login", sub: "Role detected", type: "active" },
        { icon: "fa fa-tachometer", label: "Dashboard", sub: "Contextual KPIs", type: "active" },
        { icon: "fa fa-cutlery", label: "New Order", sub: "POS Module", type: "active" },
        { icon: "fa fa-credit-card", label: "Payment", sub: "Multi-method", type: "active" },
        { icon: "fa fa-check", label: "Confirmation", sub: "Receipt + KDS", type: "active" },
        { icon: "fa fa-bar-chart", label: "Analytics", sub: "Auto-updated", type: "active" },
      ],
      userFlowTitle: "Core order flow",
      userFlowSubtitle:
        "The primary job-to-be-done for a restaurant operator — placing and closing an order — reduced to 5 intentional steps.",
    },

    /* ── Section B: Tech Showcase ── */
    techShowcase: {
      // Stack pills grouped by category
      stackGroups: [
        {
          category: "Design & Prototyping",
          items: [
            { name: "Figma",     faIcon: "fa fa-pencil-square-o" },
            { name: "FigJam",    faIcon: "fa fa-comments" },
            { name: "Maze",      faIcon: "fa fa-flask" },
            { name: "Lottie",    faIcon: "fa fa-film" },
          ],
        },
        {
          category: "Frontend Implementation",
          items: [
            { name: "React.js",    icon: ImageHelper.ReactIcon },
            { name: "Redux",       icon: ImageHelper.ReduxIcon },
            { name: "TypeScript",  icon: ImageHelper.TypescriptIcon },
            { name: "Sass / Less", icon: ImageHelper.SaasIcon },
            { name: "Bootstrap",   icon: ImageHelper.BootstrapIcon },
          ],
        },
        {
          category: "APIs & Data",
          items: [
            { name: "GraphQL",  icon: ImageHelper.GraphQLIcon },
            { name: "Axios",    icon: ImageHelper.AxiosIcon },
            { name: "Node.js",  icon: ImageHelper.NodeJsIcon },
            { name: "MySQL",    icon: ImageHelper.MySqlIcon },
          ],
        },
      ],
      stackTitle: "Tools & technologies",
      stackSubtitle:
        "Design and engineering ran in parallel — Figma prototypes were handed off directly to React component specs.",

      // Role breakdown
      roles: [
        {
          title: "Lead UI/UX Designer",
          body: "Owned the full design process from discovery workshops through to high-fidelity prototypes and usability testing with 12 restaurant operators.",
          tags: ["Figma", "FigJam", "Maze", "User Testing"],
        },
        {
          title: "Design System Architect",
          body: "Structured a token-based component library (80+ components) with documented variants, states, and responsive constraints.",
          tags: ["Tokens", "Auto Layout", "Component Variants"],
        },
        {
          title: "Frontend Developer",
          body: "Translated Figma specs to React components with pixel-perfect fidelity, implementing shared hooks and a context-based auth/role system.",
          tags: ["React", "TypeScript", "Redux", "CSS Modules"],
        },
        {
          title: "UX Researcher",
          body: "Planned and moderated 3 rounds of moderated usability tests, synthesised findings into a prioritised backlog of 22 UX improvements.",
          tags: ["Usability Testing", "Affinity Mapping", "Jobs-to-be-Done"],
        },
      ],
      rolesTitle: "What I owned end-to-end",
      rolesSubtitle:
        "As the sole designer and contributing engineer, I bridged the gap between design intent and production output.",

      // Code snippets
      snippets: [
        {
          filename: "useRoleNav.ts",
          lang: "TypeScript",
          code: `// Role-based navigation hook — TezHub
// Returns filtered nav items based on user role

import { useMemo } from "react";
import { useSelector } from "react-redux";
import type { NavItem, UserRole } from "../types";
import { ALL_NAV_ITEMS } from "../constants/navigation";

export const useRoleNav = (): NavItem[] => {
  const role = useSelector(
    (state: RootState) => state.auth.user?.role
  );

  return useMemo(() => {
    if (!role) return [];
    return ALL_NAV_ITEMS.filter(
      (item) => item.allowedRoles.includes(role as UserRole)
    );
  }, [role]);
};`,
        },
        {
          filename: "TokenProvider.tsx",
          lang: "TSX",
          code: `// Design token provider — maps Figma tokens to CSS vars
// Enables white-label theming at runtime

import React, { createContext, useContext } from "react";

interface Tokens {
  colorPrimary: string;
  colorSurface: string;
  radiusBase: string;
  spacingUnit: number;
}

const defaultTokens: Tokens = {
  colorPrimary: "#0378b8",
  colorSurface: "#f9f9ff",
  radiusBase: "8px",
  spacingUnit: 8,
};

const TokenContext = createContext<Tokens>(defaultTokens);

export const TokenProvider: React.FC<{
  tokens?: Partial<Tokens>;
  children: React.ReactNode;
}> = ({ tokens = {}, children }) => {
  const merged = { ...defaultTokens, ...tokens };

  // Sync to CSS custom properties for non-JS consumers
  React.useLayoutEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--color-primary", merged.colorPrimary);
    root.style.setProperty("--color-surface", merged.colorSurface);
    root.style.setProperty("--radius-base", merged.radiusBase);
  }, [merged]);

  return (
    <TokenContext.Provider value={merged}>
      {children}
    </TokenContext.Provider>
  );
};

export const useTokens = () => useContext(TokenContext);`,
        },
      ],
      snippetsTitle: "Notable code contributions",
      snippetsSubtitle:
        "Selected patterns that highlight the bridge between design system thinking and production-grade React engineering.",

      // Performance bars
      perfBars: [
        { label: "Onboarding completion rate", value: 92, display: "92%" },
        { label: "Task success rate (usability tests)", value: 87, display: "87%" },
        { label: "Navigation error reduction", value: 73, display: "−73%" },
        { label: "Design-to-dev handoff accuracy", value: 95, display: "95%" },
      ],
      perfStats: [
        { value: "40", suffix: "%", label: "Faster onboarding" },
        { value: "80", suffix: "+", label: "Components built" },
        { value: "6", suffix: "+", label: "Modules adopted" },
        { value: "12", prefix: "", suffix: "", label: "Operators tested" },
      ],
      perfTitle: "Measurable impact",
      perfSubtitle:
        "Results validated through usability testing, stakeholder reviews, and post-launch adoption tracking.",

      // Timeline
      timeline: [
        {
          date: "Week 1–2",
          title: "Discovery & Stakeholder Workshops",
          body: "Audited all 8 products, ran 6 stakeholder interviews, and mapped overlapping user journeys across modules.",
        },
        {
          date: "Week 3–4",
          title: "Information Architecture & Wireframes",
          body: "Restructured IA around user roles, created 40+ wireframes across key flows, and validated with 4 operators.",
        },
        {
          date: "Week 5–10",
          title: "High-Fidelity Design & Design System",
          body: "Built the full Figma component library (80+ components) and designed all screens with interactive prototypes.",
        },
        {
          date: "Week 11–12",
          title: "Usability Testing & Iteration",
          body: "3 rounds of moderated testing with 12 restaurant operators — 22 issues identified and resolved before handoff.",
        },
        {
          date: "Week 13–16",
          title: "Frontend Implementation",
          body: "Translated Figma specs to production React components, implemented role-based routing and the token provider system.",
        },
      ],
      timelineTitle: "How it unfolded",
      timelineSubtitle:
        "4 months from first stakeholder call to production-ready frontend components.",
    },
  },

  /* ══════════════════════════════════════════ */

  {
    id: "cs02",
    title: "EdXplore Admin Panel",
    slug: "edxplore-admin-panel",
    category: "Dashboard Design",
    tags: ["Admin", "Education", "Figma", "Mobile"],
    year: "2023",
    role: "UI/UX Designer",
    duration: "3 months",
    shortDescription:
      "Designed the desktop and mobile admin panel for India's leading skilling platform — enabling institutes to manage courses and enrollments at scale.",
    problem:
      "Administrators were using spreadsheets and email threads to manage 500+ training institutes, causing delays and data loss.",
    process: [
      {
        heading: "User Research",
        body: "Interviewed 8 platform administrators to map daily workflows, pain points, and priority actions.",
      },
      {
        heading: "Wireframing",
        body: "Low-fidelity wireframes for 30+ screens covering institute management, course publishing, and analytics dashboards.",
      },
      {
        heading: "Responsive Design",
        body: "Designed desktop and mobile versions in parallel, sharing a common token system to ensure visual consistency.",
      },
      {
        heading: "Handoff",
        body: "Delivered annotated Figma specs with redlines, interaction notes, and a developer Q&A doc.",
      },
    ],
    outcome:
      "Admin task completion time dropped by 55%; mobile version enabled field officers to approve institutes on-the-go.",
    metrics: [
      { label: "Task completion time", value: "−55%" },
      { label: "Screens designed", value: "30+" },
      { label: "Platforms covered", value: "Desktop + Mobile" },
    ],
    coverImage: ImageHelper.EdXploreAdminPanel,
    gallery: [ImageHelper.EdXploreAdminPanel, ImageHelper.EdXploreAdminPanelMobileVersion],
    tools: ["Figma", "Notion", "Zeplin"],

    /* ── Problem Frame ── */
    problemFrame: {
      statement: "500+ institutes managed through spreadsheets and email threads.",
      statementAccent: "The platform was growing faster than the tools could handle.",
      context:
        "Platform administrators had no central system. Institute approvals happened over email. Course updates were tracked in shared Google Sheets. Data loss was routine. Decisions were delayed by days.",
      painpoints: [
        {
          title: "No centralised admin dashboard",
          desc: "Admins used 4+ separate tools — email, spreadsheets, a basic CMS, and WhatsApp — to manage daily operations.",
          severity: "critical",
        },
        {
          title: "Manual institute approval process",
          desc: "Each institute application required back-and-forth emails, manual document checks, and no audit trail.",
          severity: "critical",
        },
        {
          title: "Zero mobile access for field officers",
          desc: "Field officers visiting institutes on-site had no way to update records or approve applications in real time.",
          severity: "high",
        },
        {
          title: "No analytics or reporting",
          desc: "Platform leadership had no visibility into enrollment trends, course performance, or institute health without manual data pulls.",
          severity: "high",
        },
        {
          title: "Inconsistent data entry",
          desc: "Different admins entered data in different formats — no validation, no standards, frequent duplicates.",
          severity: "medium",
        },
      ],
      auditItems: [
        {
          icon: "fa fa-table",
          title: "No structured data views",
          body: "Spreadsheets used for institute lists had no filtering, sorting, or status tracking.",
          badge: "Data Management",
        },
        {
          icon: "fa fa-envelope",
          title: "Email-driven approvals",
          body: "No workflow system — approvals depended on individual email responses with no SLA or visibility.",
          badge: "Process Gap",
        },
        {
          icon: "fa fa-bar-chart",
          title: "No reporting layer",
          body: "Leadership had zero real-time visibility. Reports were compiled manually each month.",
          badge: "Analytics",
        },
        {
          icon: "fa fa-mobile",
          title: "Desktop-only workflows",
          body: "Field officers on site had no mobile tools — all updates were deferred until they returned to office.",
          badge: "Mobile Gap",
        },
      ],
      solutionBridge: {
        icon: "fa fa-tasks",
        title: "Our approach: Build a purpose-built admin operating system",
        body: "We designed a unified admin panel that replaced all 4 fragmented tools — with structured workflows for institute approvals, real-time analytics, course management, and a mobile-first experience for field officers. Every feature was prioritised against admin interviews and validated through usability testing.",
      },
    },

    /* ── Design Principles ── */
    designPrinciples: {
      title: "Principles that shaped every screen",
      subtitle:
        "Admin tools are used under pressure, at speed. These principles ensured the UI never got in the way.",
      items: [
        {
          title: "Data density without clutter",
          desc: "Admins need to see a lot at once — but not everything. We used progressive disclosure to surface what matters now and hide what doesn't.",
          tag: "Information Design",
        },
        {
          title: "Action-oriented layouts",
          desc: "Every screen was designed around a primary action. Institute list → Approve. Course draft → Publish. Analytics → Export. No dead ends.",
          tag: "Task Design",
        },
        {
          title: "Mobile parity, not mobile compromise",
          desc: "The mobile version wasn't a stripped-down afterthought — it was a purpose-designed experience for field officers with different tasks and contexts.",
          tag: "Responsive Strategy",
        },
        {
          title: "Audit trails by default",
          desc: "Every approval, rejection, and edit is logged with a timestamp and actor. Trust requires traceability.",
          tag: "Trust & Safety",
        },
      ],
      closingQuote:
        "An admin tool that makes people feel powerful without overwhelming them — that's the hardest kind of UX to get right.",
    },

    /* ── Learnings ── */
    learnings: [
      {
        title: "Validate data models before designing screens",
        body: "We redesigned the institute table twice after discovering the backend data model didn't support some filter combinations we'd assumed. API-first thinking would have saved a week.",
      },
      {
        title: "Field officers needed more than mobile — they needed offline",
        body: "We discovered post-launch that field officers often worked in low-connectivity areas. Offline support should have been scoped from day one.",
      },
    ],

    figmaEmbed:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FSlofBkzRyGfy7lMBB0CaQc%2FEdXplore-Admin-Panel%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DvqoFr3c4I7uqGycb-1",
    prevSlug: "tezhub",
    nextSlug: "meco-motorsports",

    /* ── Section A: Visual Showcase ── */
    showcase: {
      screens: [
        { image: ImageHelper.EdXploreAdminPanel, label: "Dashboard" },
        { image: ImageHelper.EdXploreAdminPanelMobileVersion, label: "Mobile View" },
        { image: ImageHelper.EdXploreHeaderRevamp, label: "Header Revamp" },
        { image: ImageHelper.EdXploreAdminPanel, label: "Institute List" },
        { image: ImageHelper.EdXploreAdminPanelMobileVersion, label: "Mobile Approvals" },
      ],
      screensTitle: "Desktop & mobile screens",
      screensSubtitle:
        "30+ screens designed across desktop and mobile — sharing a single token system for visual consistency.",

      features: [
        {
          icon: "fa fa-table",
          title: "Institute Management Table",
          body: "Sortable, filterable data table handling 500+ institutes with inline status updates and bulk action support.",
          tag: "Core Feature",
        },
        {
          icon: "fa fa-mobile",
          title: "Field Officer Mobile App",
          body: "Stripped-down mobile interface for on-site institute approvals — optimised for one-handed use and low-bandwidth conditions.",
          tag: "Mobile-First",
        },
        {
          icon: "fa fa-bar-chart",
          title: "Enrollment Analytics",
          body: "Real-time enrollment and course performance dashboards replacing the manual spreadsheet workflow.",
          tag: "Data Visualisation",
        },
        {
          icon: "fa fa-search",
          title: "Revamped Search & Header",
          body: "Contextual search with type-ahead suggestions and quick-action shortcuts — reducing average task time by 55%.",
          tag: "Navigation",
        },
      ],
      featuresTitle: "Key design decisions",

      designSystem: {
        projectName: "EdXplore",
        colors: [
          { name: "Primary", hex: "#0378b8" },
          { name: "Accent", hex: "#62bdfc" },
          { name: "Surface", hex: "#f9f9ff" },
          { name: "Text Dark", hex: "#222222" },
          { name: "Text Muted", hex: "#777777" },
          { name: "Success", hex: "#28c840" },
          { name: "Warning", hex: "#febc2e" },
          { name: "Error", hex: "#ff5f57" },
        ],
        typography: [
          { label: "H1", size: "26px", weight: 700, sample: "Institute Dashboard" },
          { label: "H2", size: "20px", weight: 600, sample: "Course Overview" },
          { label: "Body", size: "14px", weight: 400, sample: "500 institutes enrolled" },
          { label: "Label", size: "10px", weight: 700, sample: "STATUS · PENDING" },
        ],
        components: true,
      },

      mobileScreens: [
        { image: ImageHelper.EdXploreAdminPanelMobileVersion, label: "Institute List", sublabel: "Mobile · 390px" },
        { image: ImageHelper.EdXploreAdminPanel, label: "Desktop Panel", sublabel: "Desktop · 1440px" },
        { image: ImageHelper.EdXploreAdminPanelMobileVersion, label: "Approval Flow", sublabel: "Mobile · 390px" },
      ],
      mobileTitle: "Desktop + mobile, same system",
      mobileSubtitle:
        "Field officers use mobile; platform managers use desktop — both share the same design token system.",

      userFlow: [
        { icon: "fa fa-sign-in",    label: "Admin Login",    sub: "Role: Super Admin", type: "active" },
        { icon: "fa fa-university", label: "Institute List",  sub: "500+ records",      type: "active" },
        { icon: "fa fa-eye",        label: "Review Details",  sub: "Docs + KYC",        type: "active" },
        { icon: "fa fa-check",      label: "Approve / Reject", sub: "Instant update",  type: "active" },
        { icon: "fa fa-envelope",   label: "Auto Notify",    sub: "Email triggered",    type: "active" },
      ],
      userFlowTitle: "Institute approval flow",
    },

    /* ── Section B: Tech Showcase ── */
    techShowcase: {
      stackGroups: [
        {
          category: "Design",
          items: [
            { name: "Figma",   faIcon: "fa fa-pencil-square-o" },
            { name: "Notion",  faIcon: "fa fa-book" },
            { name: "Zeplin",  faIcon: "fa fa-code" },
          ],
        },
        {
          category: "Frontend",
          items: [
            { name: "React.js",   icon: ImageHelper.ReactIcon },
            { name: "JavaScript", icon: ImageHelper.JavaScriptIcon },
            { name: "Bootstrap",  icon: ImageHelper.BootstrapIcon },
            { name: "CSS3",       icon: ImageHelper.CssIcon },
          ],
        },
      ],

      roles: [
        {
          title: "UI/UX Designer",
          body: "Designed 30+ screens across desktop and mobile, built the full design system, and ran 8 user interviews to validate flows.",
          tags: ["Figma", "Wireframing", "Prototyping"],
        },
        {
          title: "Frontend Developer",
          body: "Implemented the admin panel in React with component-level code splitting, lazy loading, and an accessible data table.",
          tags: ["React", "JavaScript", "Bootstrap", "CSS Modules"],
        },
      ],
      rolesTitle: "My dual contribution",

      perfBars: [
        { label: "Task completion time reduction", value: 55, display: "−55%" },
        { label: "Mobile approval flow efficiency", value: 80, display: "+80%" },
        { label: "Design system coverage", value: 100, display: "100% of screens" },
      ],
      perfStats: [
        { value: "30", suffix: "+", label: "Screens designed" },
        { value: "55", suffix: "%", label: "Faster task time" },
        { value: "2",  suffix: "",  label: "Platforms covered" },
        { value: "8",  suffix: "",  label: "Users interviewed" },
      ],
      perfTitle: "Measurable impact",

      timeline: [
        { date: "Month 1", title: "Research & Wireframes",    body: "8 admin interviews, IA mapping, 30+ low-fi wireframes." },
        { date: "Month 2", title: "High-Fidelity Design",     body: "Full desktop + mobile design with shared token system and interactive Figma prototype." },
        { date: "Month 3", title: "Dev Handoff & Build",      body: "Annotated spec delivery, React implementation, and QA against Figma." },
      ],
    },
  },

  /* ══════════════════════════════════════════ */

  {
    id: "cs03",
    title: "MECO Motorsports",
    slug: "meco-motorsports",
    category: "Web Design",
    tags: ["Branding", "Motorsports", "Web", "Figma"],
    year: "2023",
    role: "UI/UX Designer",
    duration: "2 months",
    shortDescription:
      "End-to-end website design for India's premier motorsports management company — from initial concept through final production-ready prototype.",
    problem:
      "MECO had no unified digital presence; event information was scattered across PDFs and social media, losing potential sponsors and participants.",
    process: [
      {
        heading: "Brand Immersion",
        body: "Deep-dive into MECO's event history, sponsorship decks, and competitor sites to establish a visual language that feels fast and premium.",
      },
      {
        heading: "Concept Exploration",
        body: "Produced 3 visual directions ranging from editorial-minimal to bold-kinetic; team aligned on a high-contrast dark theme with speed-inspired typography.",
      },
      {
        heading: "Final Design",
        body: "Full multi-page website covering Home, Events, Tracks, Championships, and Sponsorship — with a fully linked Figma prototype.",
      },
    ],
    outcome:
      "Delivered two design phases (exploration + final) that became the foundation for MECO's development sprint.",
    metrics: [
      { label: "Design phases", value: "2" },
      { label: "Pages designed", value: "8+" },
      { label: "Prototype fidelity", value: "High" },
    ],
    coverImage: ImageHelper.MecoFinalWebUi,
    gallery: [ImageHelper.MecoWebUi, ImageHelper.MecoFinalWebUi],
    tools: ["Figma", "FigJam"],

    /* ── Problem Frame ── */
    problemFrame: {
      statement: "India's biggest motorsports company had no digital home.",
      statementAccent: "Sponsors, fans, and participants had nowhere to go.",
      context:
        "MECO owned premier racing tracks, organised national championships, and managed top racing teams — but their entire digital presence was a collection of PDFs, outdated social media posts, and email chains. Potential sponsors couldn't find event details. Participants couldn't register online. The brand didn't match the product.",
      painpoints: [
        {
          title: "No unified digital presence",
          desc: "Event details lived across 5 different places — Facebook, PDFs, WhatsApp broadcasts, email blasts, and a broken website.",
          severity: "critical",
        },
        {
          title: "Sponsor acquisition was entirely manual",
          desc: "Sponsorship packages were sent as Word documents via email. No digital deck, no online presence to validate credibility.",
          severity: "critical",
        },
        {
          title: "Participant registration off-platform",
          desc: "Race registrations happened via Google Forms with no confirmation flow, no payment integration, and frequent data loss.",
          severity: "high",
        },
        {
          title: "Brand didn't communicate premium",
          desc: "Existing visuals were inconsistent, low-resolution, and didn't reflect the scale and prestige of the championships MECO ran.",
          severity: "high",
        },
      ],
      auditItems: [
        {
          icon: "fa fa-globe",
          title: "No website",
          body: "The existing site was broken on mobile and hadn't been updated in 2+ years.",
          badge: "Digital Presence",
        },
        {
          icon: "fa fa-handshake-o",
          title: "No sponsorship landing experience",
          body: "Potential sponsors had no way to evaluate MECO's reach, past events, or package tiers online.",
          badge: "Conversion",
        },
        {
          icon: "fa fa-calendar",
          title: "Events were invisible",
          body: "No structured events page. Race calendars existed only as image files on Instagram.",
          badge: "Discoverability",
        },
        {
          icon: "fa fa-paint-brush",
          title: "Inconsistent brand identity",
          body: "4 different logo versions across channels. No typography system, no brand colours documented.",
          badge: "Brand System",
        },
      ],
      solutionBridge: {
        icon: "fa fa-flag-checkered",
        title: "Our approach: Design a brand experience, not just a website",
        body: "We started by establishing a visual language — fast, dark, cinematic, premium — that matched the energy of motorsport. Then we built the site structure around the three key audiences: sponsors, participants, and fans. Every page had a single conversion goal. The design had to communicate credibility on first impression.",
      },
    },

    /* ── Design Principles ── */
    designPrinciples: {
      title: "Designing for speed, prestige, and trust",
      subtitle:
        "Motorsports is visceral and premium. Every design decision was made to reflect that energy.",
      items: [
        {
          title: "First impression = authority",
          desc: "The hero section had one job: make MECO look like the most credible motorsports brand in India within 3 seconds. Dark, cinematic, large typography.",
          tag: "Brand Strategy",
        },
        {
          title: "Conversion over content",
          desc: "Every page was designed with a single primary CTA. Sponsor page → Contact. Events → Register. Tracks → Visit. No page was built just to have content.",
          tag: "Goal-Oriented Design",
        },
        {
          title: "Visual hierarchy tells the story",
          desc: "We used scale contrast aggressively — massive headlines, small supporting text — to create scannable, editorial layouts that communicate instantly.",
          tag: "Typography System",
        },
        {
          title: "Brand system before screens",
          desc: "We defined the full token system — colours, type scale, spacing, motion — before designing a single screen. This made the final design feel cohesive across 8 pages.",
          tag: "Systems Thinking",
        },
      ],
      closingQuote:
        "A motorsports brand that looks slow online is already losing — the design needed to feel as fast as the cars.",
    },

    /* ── Learnings ── */
    learnings: [
      {
        title: "Stakeholder alignment on visual direction takes longer than design",
        body: "We spent nearly as much time aligning the client on the dark, cinematic direction as we did designing it. A moodboard alignment session in week 1 would have saved two rounds of revisions.",
      },
      {
        title: "Content strategy should precede design",
        body: "We designed several pages before receiving final copy and image assets — leading to layout rework when real content arrived. Content-first would have been more efficient.",
      },
    ],

    figmaEmbed:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FRhxolZEwe1bjcxfIXgnc7A%2FMeco-Web-UiUx-Final-Design-by-Tabrez-Dal%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3D0uXfBHcLc4zqsbK3-1",
    prevSlug: "edxplore-admin-panel",
    nextSlug: null,

    /* ── Section A: Visual Showcase ── */
    showcase: {
      beforeAfter: [
        {
          context: "Homepage — Visual Direction",
          before: {
            image: ImageHelper.MecoWebUi,
            caption: "Concept phase: Exploring bold typography, dark-first aesthetic, and speed-motion visual language.",
          },
          after: {
            image: ImageHelper.MecoFinalWebUi,
            caption: "Final: Refined layout, cinematic hero, consistent component system, and production-ready prototype.",
          },
        },
      ],

      screens: [
        { image: ImageHelper.MecoWebUi,      label: "Concept Homepage" },
        { image: ImageHelper.MecoFinalWebUi, label: "Final Homepage" },
        { image: ImageHelper.MecoFinalWebUi, label: "Events Page" },
        { image: ImageHelper.MecoWebUi,      label: "Tracks Page" },
        { image: ImageHelper.MecoFinalWebUi, label: "Championships" },
        { image: ImageHelper.MecoFinalWebUi, label: "Sponsorship" },
      ],
      screensTitle: "Full page designs",
      screensSubtitle:
        "8 production-ready pages — two full design phases from concept to final.",

      features: [
        {
          icon: "fa fa-flag-checkered",
          title: "Cinematic Hero Section",
          body: "Full-bleed dark hero with motion-blur race imagery, bold display type, and a high-contrast CTA — designed to communicate speed instantly.",
          tag: "Visual Identity",
        },
        {
          icon: "fa fa-calendar",
          title: "Events & Championships Hub",
          body: "Structured event listing with filter-by-series, location, and date — replacing scattered PDFs and social media posts.",
          tag: "Information Architecture",
        },
        {
          icon: "fa fa-map-marker",
          title: "Track Pages",
          body: "Dedicated track profile pages with circuit maps, lap records, and upcoming event schedules.",
          tag: "Content Design",
        },
        {
          icon: "fa fa-handshake-o",
          title: "Sponsorship Section",
          body: "Tiered sponsorship packages presented as a scannable visual comparison — designed to convert on the first scroll.",
          tag: "Conversion Design",
        },
      ],
      featuresTitle: "Design highlights",

      designSystem: {
        projectName: "MECO Motorsports",
        colors: [
          { name: "Racing Black", hex: "#0a0a0a" },
          { name: "Speed White", hex: "#ffffff" },
          { name: "Accent Red", hex: "#e53935" },
          { name: "Accent Gold", hex: "#ffd600" },
          { name: "Surface", hex: "#111111" },
          { name: "Muted", hex: "#555555" },
        ],
        typography: [
          { label: "Hero", size: "52px", weight: 800, sample: "INDIA RACING SERIES" },
          { label: "H2",   size: "32px", weight: 700, sample: "Championship 2023" },
          { label: "H3",   size: "22px", weight: 600, sample: "Event Details" },
          { label: "Body", size: "15px", weight: 400, sample: "MECO manages premier tracks..." },
        ],
        components: true,
      },

      userFlow: [
        { icon: "fa fa-home",        label: "Homepage",     sub: "Brand intro",      type: "active" },
        { icon: "fa fa-calendar",    label: "Events",       sub: "Browse races",     type: "active" },
        { icon: "fa fa-map",         label: "Tracks",       sub: "Circuit details",  type: "active" },
        { icon: "fa fa-trophy",      label: "Championships", sub: "Standings",       type: "active" },
        { icon: "fa fa-handshake-o", label: "Sponsorship",  sub: "Get in touch",     type: "active" },
      ],
      userFlowTitle: "Sponsor acquisition flow",
    },

    /* ── Section B: Tech Showcase ── */
    techShowcase: {
      stackGroups: [
        {
          category: "Design",
          items: [
            { name: "Figma",   faIcon: "fa fa-pencil-square-o" },
            { name: "FigJam",  faIcon: "fa fa-comments" },
          ],
        },
        {
          category: "Frontend (handoff-ready)",
          items: [
            { name: "React.js",   icon: ImageHelper.ReactIcon },
            { name: "HTML5",      icon: ImageHelper.HtmlIcon },
            { name: "CSS3",       icon: ImageHelper.CssIcon },
            { name: "JavaScript", icon: ImageHelper.JavaScriptIcon },
          ],
        },
      ],

      roles: [
        {
          title: "Visual Designer",
          body: "Directed the full visual identity — typography system, colour palette, motion language, and grid — establishing MECO's premium digital brand.",
          tags: ["Visual Design", "Branding", "Typography"],
        },
        {
          title: "UI/UX Designer",
          body: "Designed 8 fully linked pages with interaction prototyping in Figma — ready to hand off directly to a frontend developer.",
          tags: ["Figma", "Prototyping", "Responsive Design"],
        },
      ],
      rolesTitle: "What I delivered",

      perfStats: [
        { value: "2",  suffix: "",  label: "Design phases" },
        { value: "8",  suffix: "+", label: "Pages designed" },
        { value: "3",  suffix: "",  label: "Visual directions explored" },
        { value: "1",  suffix: "",  label: "Unified brand system" },
      ],
      perfTitle: "Project scope",

      timeline: [
        { date: "Week 1–2", title: "Brand Immersion & Concept Exploration", body: "3 visual directions explored; team aligned on dark, speed-kinetic aesthetic." },
        { date: "Week 3–5", title: "Concept Phase Delivery",                body: "Full concept website (MecoWebUi) — 8 pages, interactive prototype." },
        { date: "Week 6–8", title: "Final Production Design",               body: "Refined to final production-ready Figma (MecoFinalWebUi) with developer annotations." },
      ],
    },
  },
];

export default FeaturedProjectsData;
