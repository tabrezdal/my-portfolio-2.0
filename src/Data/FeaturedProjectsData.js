import ImageHelper from "../Helpers/ImageHelper";

const FeaturedProjectsData = [

  /* ── cs01 · MyCricle ─────────────────────────────────────── */
  {
    id: "cs01", title: "MyCricle", slug: "mycricle",
    category: "SaaS Platform Design + Engineering",
    tags: ["White-label SaaS", "React 18", "GraphQL", "Design System", "Multi-surface"],
    year: "2023", role: "Sole Principal Designer + Primary Frontend Developer", duration: "6–7 months",

    engagementType: "Direct Client", clientGeography: "Canada",
    domain: "Hospitality SaaS", deploymentStatus: "Milestone",
    totalScreens: 253, teamComposition: "Solo — Design + Engineering", liveUrl: "https://mycircle.placeholder.com",
    figmaUrl: "https://figma.com/placeholder/mycircle",
    loomUrl: "https://loom.com/placeholder/mycircle",
    mandate: "Build a white-label SaaS platform consolidating guest WiFi analytics, SMS/email blast marketing, loyalty programs, reputation management, and POS integration — for restaurant and hotel operators across North America — from design system through production code across three repositories.",
    shortDescription: "White-label hospitality SaaS unifying guest WiFi, multi-channel marketing, loyalty, and POS — 253 screens across 10 modules, 3 repositories, built solo over 6–7 months for a Canadian direct client.",
    problem: "Restaurant and hotel operators across North America managed guest WiFi, email/SMS campaigns, loyalty programs, and reputation tools across 4–5 disconnected platforms — no shared guest data, no unified reporting, no way to run coordinated marketing from one place.",

    platformScopeTitle: "5 surfaces. 3 repositories. 1 design system.",
    platformScopeSubtitle: "White-label hospitality SaaS covering every operator and guest touchpoint — governed by a single token-based design language.",
    platformSurfaces: [
      { name: "Operator Admin Dashboard", audience: "Restaurant & Hotel Operators", screens: 120, designOwnership: "Full", devOwnership: "Full", badge: "Primary", note: "Main platform — sole designer and primary frontend developer (Repo 1)" },
      { name: "Smart WiFi Module", audience: "Operators managing guest WiFi", screens: 50, designOwnership: "Full", devOwnership: "Full", badge: "Primary", note: "Separate repository (Repo 3) — complete design and engineering ownership" },
      { name: "Guest WiFi Splash Pages", audience: "In-venue guests joining WiFi", screens: 18, designOwnership: "Full", devOwnership: "Full", badge: "Supporting", note: "White-label, operator-branded mobile web experience" },
      { name: "Loyalty Check-in Kiosk", audience: "In-venue customers earning loyalty points", screens: 25, designOwnership: "Full", devOwnership: "Contributed", badge: "Supporting", note: "Tablet-first loyalty check-in — design owned, partial dev contribution" },
      { name: "Email & SMS Campaign Templates", audience: "Campaign recipients", screens: 40, designOwnership: "Full", devOwnership: "Contributed", badge: "Supporting", note: "Branded templates with live two-panel preview in campaign builder" },
    ],
    ownershipMatrix: {
      design:      { value: 100, note: "Full design system + all 5 surfaces, built from scratch" },
      development: { value: 75,  note: "Primary contributor across 3 repos — full on Admin Dashboard + WiFi module" },
      research:    { value: 100, note: "Sole product discovery, competitive analysis, and UX strategy" },
    },

    problemFrame: {
      statement: "5 tools. No shared guest data. Zero unified marketing.",
      statementAccent: "Every guest interaction was siloed — WiFi didn't know about loyalty, loyalty didn't know about campaigns.",
      context: "Restaurant operators had no single view of guests. WiFi logins, loyalty check-ins, email blast history, and reputation alerts lived in separate dashboards with no cross-platform intelligence. Coordinated promotions required manual export-import across tools — work that rarely got done.",
      painpoints: [
        { title: "No unified guest intelligence", desc: "Operators couldn't correlate a guest's WiFi login with their loyalty tier, past orders, or email engagement — all in separate databases.", severity: "critical" },
        { title: "Campaign tools outside the platform", desc: "SMS and email blasts required manual CSV export from POS into external marketing tools — audience targeting was always stale.", severity: "critical" },
        { title: "No real-time operator visibility", desc: "WiFi performance, loyalty redemption rates, and reputation trends couldn't be seen together — let alone acted on together.", severity: "high" },
        { title: "White-label with no token system", desc: "Every new operator brand required manual screen duplication. No token architecture existed to support multi-tenant customisation at scale.", severity: "high" },
      ],
      auditItems: [
        { icon: "fa fa-random",      title: "No shared data layer",          body: "WiFi, loyalty, and marketing had separate databases with no real-time bridge.", badge: "Architecture" },
        { icon: "fa fa-paint-brush", title: "No white-label system",         body: "Operator branding required manual screen duplication — not a scalable token system.", badge: "Design System" },
        { icon: "fa fa-eye",         title: "No live preview in builders",   body: "Campaign builders had no preview panel — operators sent test messages to see output.", badge: "UX Pattern" },
        { icon: "fa fa-table",       title: "No data-dense admin tables",    body: "Guest management required spreadsheet exports — no in-platform filtering, sorting, or bulk operations.", badge: "Admin UX" },
      ],
      solutionBridge: {
        icon: "fa fa-cogs",
        title: "Our approach: Build a hub — not a feature list",
        body: "Designed MyCricle as a hub architecture — a central platform where all 10 modules share one guest identity and one data layer. Every campaign builder uses a live-preview pattern. Every data surface uses a shared AG Grid Enterprise table system. Every operator surface renders under their own brand via a token system that requires zero redesign to switch.",
      },
    },

    process: [
      { heading: "Platform Discovery",       body: "Mapped all 10 module workflows against operator mental models. Competitive analysis of Toast, Square, and Lightspeed to identify white-label and data-sharing gaps." },
      { heading: "Design System First",      body: "Built token system — colors, spacing, typography, radius, elevation — before designing any screen. 80+ auto-layout components in Figma." },
      { heading: "Live-Preview Pattern",     body: "Established two-panel wizard as the platform signature pattern: left = configuration form, right = live device preview. Applied across all campaign builders." },
      { heading: "Multi-Surface Execution",  body: "Designed 5 surfaces sequentially — admin dashboard, WiFi module, splash pages, kiosk, email/SMS templates — each adapting the design system for its form factor." },
      { heading: "Engineering Across 3 Repos", body: "Implemented in React 18 + TypeScript. Built custom AG Grid Enterprise wrappers, DnD builder interfaces (@dnd-kit, react-beautiful-dnd, react-nestable), and runtime token provider syncing Figma tokens to CSS variables." },
    ],

    designPrinciples: {
      title: "Design for operators who are also running a restaurant",
      subtitle: "Every decision was filtered through one constraint: a restaurant operator has 8 seconds per task during a busy service.",
      items: [
        { title: "One brand, any operator",     desc: "Every component is white-label by default. Colors, logos, and domain swap via tokens — no screen-level redesign when a new operator onboards.", tag: "White-label Architecture" },
        { title: "Show the output, not the form", desc: "Campaign builders never hide the end result. The live-preview panel makes configuration confidence instant — reducing test sends.", tag: "Live Preview Pattern" },
        { title: "Data density without complexity", desc: "Operator tables show everything relevant per row. AG Grid Enterprise handles the heavy lifting; the design handles the hierarchy.", tag: "Data Display" },
        { title: "Tokens all the way down",     desc: "Colors, spacing, radius, elevation, and typography are all token values. This is what makes white-label work and what keeps 3 repos consistent.", tag: "Systems Thinking" },
      ],
      closingQuote: "When the design system is strong enough, the 5th surface costs less than the 1st. That's the only scalable hospitality SaaS strategy.",
    },

    complexitySignals: [
      { icon: "fa fa-paint-brush", title: "White-label at token level",          body: "Every UI element supports operator-brand customisation via CSS variables synced from a Figma token provider — no rebuilding screens per operator." },
      { icon: "fa fa-th",          title: "5 distinct design surfaces",          body: "Operator admin dashboard, WiFi module app, customer splash pages, loyalty kiosk, and email/SMS templates — all sharing one design language across 3 separate codebases." },
      { icon: "fa fa-code-fork",   title: "3 simultaneous DnD libraries",        body: "@dnd-kit, react-beautiful-dnd, and react-nestable coexisted in one frontend — each serving a different builder surface with incompatible interaction models." },
      { icon: "fa fa-eye",         title: "Live two-panel preview wizards",       body: "Campaign builders across email, SMS, and WiFi all required a live right-panel device render that updated in real time as the operator configured settings on the left." },
      { icon: "fa fa-table",       title: "AG Grid Enterprise at operator scale", body: "Guest management tables required AG Grid Enterprise with custom cell renderers, virtual scrolling, and multi-column sort — matching the design system." },
      { icon: "fa fa-plug",        title: "Production integration stack",         body: "Twilio (SMS/MMS), Stripe (subscriptions), AWS S3, Firebase (auth/real-time), Redis (caching), PostgreSQL — each reflected in the UX through loading and async state design." },
    ],
    complexityCallout: "One designer. Five surfaces. Three codebases. Six months. North American hospitality operators depending on it in production.",

    outcome: "Delivered a production-grade white-label SaaS platform to major engineering milestone — 253 screens across 10 modules, 3 repositories, with a design system requiring zero redesign to onboard a new operator brand.",
    metrics: [
      { label: "Screens designed", value: "253" }, { label: "Modules delivered", value: "10" },
      { label: "Repositories built", value: "3" }, { label: "Engagement", value: "6–7 Months" },
    ],
    learnings: [
      { title: "Token systems before screens", body: "Jumping to screens before finalising the token architecture caused 3 rounds of rework when white-label requirements evolved. Token-first is not optional for multi-tenant products." },
      { title: "DnD library selection is non-trivial", body: "Three DnD libraries coexisting created real engineering complexity. Earlier prototyping of each builder's interaction model would have clarified library selection before the scaffold was written." },
    ],

    showcase: {
      screens: [{ image: ImageHelper.TezHUBCover, label: "Operator Dashboard" }],
      screensTitle: "Platform screens", screensSubtitle: "253 screens across 5 surfaces — designed in Figma, implemented in React 18.",
      features: [
        { icon: "fa fa-paint-brush", title: "White-label Token System",     body: "Operator brand tokens sync from Figma to runtime CSS variables — logo, palette, and domain switch per operator without rebuilding.", tag: "Core Architecture" },
        { icon: "fa fa-eye",         title: "Live Two-Panel Wizards",       body: "Every campaign builder shows a live device preview on the right as operators configure settings on the left — real-time confidence, no test sends.", tag: "Signature Pattern" },
        { icon: "fa fa-table",       title: "AG Grid Enterprise Tables",    body: "Guest data tables with virtual scrolling, custom cell renderers, multi-column sort, and bulk selection — thousands of records.", tag: "Data Density" },
        { icon: "fa fa-th",          title: "10 Integrated Modules",        body: "WiFi, Blast Campaign, Auto Responders, Loyalty, Reputation, POS, Signage, Scheduling, SMS Chat, and Tools — all sharing one guest data layer.", tag: "Platform Scale" },
      ],
      featuresTitle: "Key platform capabilities",
      designSystem: {
        projectName: "MyCricle",
        colors: [
          { name: "Brand Purple", hex: "#6B48FF" }, { name: "Purple Light", hex: "#9B7BFF" },
          { name: "Surface",      hex: "#F9F9FF" }, { name: "Text Primary", hex: "#1A1A2E" },
          { name: "Text Muted",   hex: "#6B7280" }, { name: "Success",      hex: "#10B981" },
          { name: "Warning",      hex: "#F59E0B" }, { name: "Error",        hex: "#EF4444" },
        ],
        typography: [
          { label: "H1",   size: "30px", weight: 700, sample: "Operator Dashboard"  },
          { label: "H2",   size: "24px", weight: 600, sample: "Smart WiFi Analytics"},
          { label: "Body", size: "14px", weight: 400, sample: "Guest management..."  },
          { label: "Label",size: "10px", weight: 700, sample: "STATUS · ACTIVE"      },
        ],
        components: true,
      },
      userFlow: [
        { icon: "fa fa-sign-in",    label: "Operator Login",   sub: "SSO / Auth",       type: "active" },
        { icon: "fa fa-tachometer", label: "Hub Dashboard",    sub: "10 modules",       type: "active" },
        { icon: "fa fa-wifi",       label: "WiFi Module",      sub: "Hotspot config",   type: "active" },
        { icon: "fa fa-bullhorn",   label: "Blast Campaign",   sub: "SMS + Email",      type: "active" },
        { icon: "fa fa-star",       label: "Loyalty Setup",    sub: "Stamps + rewards", type: "active" },
      ],
      userFlowTitle: "Core operator workflow",
      userFlowSubtitle: "Configure, campaign, and track — all without leaving the dashboard.",
    },

    techShowcase: {
      stackGroups: [
        {
          category: "Design & Prototyping",
          items: [{ name: "Figma", faIcon: "fa fa-pencil-square-o" }, { name: "FigJam", faIcon: "fa fa-comments" }],
        },
        {
          category: "Frontend",
          items: [
            { name: "React 18",      icon: ImageHelper.ReactIcon      },
            { name: "TypeScript",    icon: ImageHelper.TypescriptIcon  },
            { name: "Apollo Client", icon: ImageHelper.GraphQLIcon     },
            { name: "MUI v5",        icon: ImageHelper.MuiIcon         },
            { name: "Redux Toolkit", icon: ImageHelper.ReduxIcon       },
          ],
        },
      ],
      stackTitle: "Tools & technologies",
      roles: [
        { title: "Sole Principal Designer",     body: "Complete design system, 5 surface types, and all 253 screens — from token architecture through high-fidelity production Figma.", tags: ["Design System", "Multi-surface", "Figma", "Token Architecture"] },
        { title: "Primary Frontend Developer",  body: "Built 3 React 18 + TypeScript repositories. DnD builders, AG Grid tables, runtime token provider.", tags: ["React 18", "TypeScript", "Apollo GraphQL", "AG Grid Enterprise"] },
      ],
      rolesTitle: "End-to-end ownership",
      perfStats: [
        { value: "253", suffix: "",  label: "Screens designed"   },
        { value: "10",  suffix: "+", label: "Modules delivered"  },
        { value: "3",   suffix: "",  label: "Repositories built" },
        { value: "5",   suffix: "",  label: "Design surfaces"    },
      ],
      perfTitle: "Project at a glance",
      timeline: [
        { date: "Month 1",   title: "Discovery + Design System",      body: "Platform audit, operator interviews, token architecture, 80+ component library in Figma." },
        { date: "Month 2–3", title: "Admin Dashboard + WiFi Module",  body: "253 screens designed across 10 modules. WiFi module (Repo 3) built in parallel." },
        { date: "Month 4–7", title: "Engineering + Multi-Surface",    body: "React implementation across 3 repos. Campaign builders with live-preview, loyalty kiosk, splash pages, email/SMS templates." },
      ],
      timelineTitle: "How 6–7 months unfolded",
    },

    coverImage: ImageHelper.TezHUBCover,
    coverImageGrid: ImageHelper.TezHUBCoverGrid,
    gallery: [ImageHelper.TezHUBCover],
    tools: ["Figma", "React 18", "TypeScript", "Apollo GraphQL", "MUI v5", "Redux Toolkit", "AG Grid Enterprise"],
    figmaEmbed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F92E8ayZCG6pK6z0d5rVfNX%2FTezHUB-by-TZ%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DjlchnmRhNK7OpwWH-1",
    prevSlug: null, nextSlug: "jobzshala",
  },


  /* ── cs02 · JobzShala ─────────────────────────────────────── */
  {
    id: "cs02", title: "JobzShala", slug: "jobzshala",
    category: "Multi-Portal Platform Design",
    tags: ["HR Tech", "Multi-portal", "Design System", "React/Next.js", "Live Production"],
    year: "2024", role: "Sole Product Designer + Engineering Contributor", duration: "8 months",

    engagementType: "Freelance", clientGeography: "India",
    domain: "HR Tech / Recruitment", deploymentStatus: "Live",
    totalScreens: 240, teamComposition: "Solo Designer + Partial Engineering", liveUrl: "https://jobzshala.placeholder.com",
    figmaUrl: "https://figma.com/placeholder/jobzshala",
    loomUrl: "https://loom.com/placeholder/jobzshala",
    mandate: "Design the complete JobzShala platform ecosystem — six interconnected recruitment portals serving job seekers, employers, college students, placement coordinators, staffing agencies, and enterprise HR teams — from a single token-based design system, live in production.",
    shortDescription: "Six interconnected recruitment portals — job seekers, employers, campus students, college admins, staffing agencies, and enterprise ATS — all sharing one design system. 240+ screens. 8 months. One designer. All live.",
    problem: "India's recruitment market had no unified platform serving every participant in the hiring lifecycle under one brand. Six distinct user types operated across separate tools with no shared intelligence and no coherent experience across the hiring funnel.",

    platformScopeTitle: "6 portals. 1 design system. All live.",
    platformScopeSubtitle: "Every portal in the ecosystem was designed by one freelance designer and went live in production — serving six distinct user types under a single unified brand.",
    platformSurfaces: [
      { name: "Main Portal", audience: "Job Seekers & Employers", screens: 60, designOwnership: "Full", devOwnership: "Contributed", badge: "Primary", note: "8–10 React/Next.js + Chart.js components implemented to unblock dev team" },
      { name: "Hiring Portal", audience: "HR Teams & Employers", screens: 57, designOwnership: "Full", devOwnership: "None", badge: "Primary", note: "B2B SaaS — subscription tiers ₹35K–₹1.2L/yr; AI candidate search included" },
      { name: "Campus Portal", audience: "College Students", screens: 50, designOwnership: "Full", devOwnership: "None", badge: "Supporting", note: "B2B2C — Visume (video resume) feature; students access via institutional account" },
      { name: "College Portal", audience: "Placement Coordinators", screens: 45, designOwnership: "Full", devOwnership: "None", badge: "Supporting", note: "Bulk student upload with 6-state validation flow; 1,276-record test case confirmed" },
      { name: "Recruit ATS", audience: "Staffing Agencies", screens: 42, designOwnership: "Full", devOwnership: "None", badge: "Supporting", note: "Triple-entity model: Clients × Candidates × Team; 12-column recruiter analytics" },
      { name: "ATS Landing Page", audience: "Enterprise Agency Prospects", screens: 2, designOwnership: "Full", devOwnership: "None", badge: "Supporting", note: "Lead capture funnel → Recruit ATS sales pipeline" },
    ],
    ownershipMatrix: {
      design:      { value: 100, note: "All 6 portals + shared design system — solo freelance ownership" },
      development: { value: 15,  note: "8–10 React/Next.js + Chart.js components on Main Portal to unblock dev team" },
      research:    { value: 100, note: "Competitive audit (Naukri, LinkedIn India, Shine), user persona mapping, IA strategy" },
    },

    problemFrame: {
      statement: "Six user types. Zero shared experience.",
      statementAccent: "Every participant in India's hiring lifecycle was using a different product — none of them talking to each other.",
      context: "India's recruitment market was fragmented: job seekers on Naukri, employers on LinkedIn India, college placement cells in Excel sheets, staffing agencies running their own ATS. There was no platform bringing all six audiences into one coherent brand architecture — sharing candidate data, job listings, and business intelligence across the funnel.",
      painpoints: [
        { title: "No unified candidate identity",    desc: "A job seeker on jobzshala.com was invisible to the Campus Portal student, the Hiring Portal employer, and the Recruit ATS recruiter — even if they were the same person.", severity: "critical" },
        { title: "Campus hiring was manual",          desc: "College placement coordinators managed placement drives via WhatsApp groups, PDF schedules, and manual shortlisting — no digital workflow.", severity: "critical" },
        { title: "No subscription business model UX", desc: "The employer-side had no clear SaaS pricing architecture — no tiered plans, no credit system for candidate unlocks, no billing interface.", severity: "high" },
        { title: "AI features with no design system", desc: "AI Resume Maker, AI candidate search, and AI screening questions were planned but had no consistent UI pattern for AI-generated content across portals.", severity: "medium" },
      ],
      auditItems: [
        { icon: "fa fa-sitemap",     title: "No cross-portal IA strategy",      body: "Each portal being designed in isolation — no shared navigation pattern, no unified component language.", badge: "IA"                },
        { icon: "fa fa-tag",         title: "No design system foundation",       body: "Without tokens, six portals would visually diverge after the first sprint — impossible to maintain consistency solo.", badge: "Design System"  },
        { icon: "fa fa-credit-card", title: "Subscription UX not designed",      body: "B2B pricing, credit-gated candidate access, and GST invoice management had no UX precedent in the codebase.", badge: "Business Model" },
      ],
      solutionBridge: {
        icon: "fa fa-sitemap",
        title: "Our approach: Design system first, then portals — not the reverse",
        body: "Built the full token-based design system (6 colour palettes, 9-step scales, 13-size type system, 12+ button variants, 4 sub-brand logos) before designing a single product screen. Designed each portal in priority order with cross-portal interdependencies mapped upfront.",
      },
    },

    process: [
      { heading: "Ecosystem Architecture",   body: "Mapped all 6 portal relationships: College → Campus student identity chain, Hiring → Campus opportunities mode, Main Portal as SEO acquisition engine. Cross-portal data flows documented before design began." },
      { heading: "Design System Build",      body: "6-palette, 9-step token scales; 13-size type scale (Major Third multiplier); 12+ button variants; 4 sub-brand logo variants; 3-tier icon library. System first, portals second." },
      { heading: "Portal-by-Portal Design",  body: "Main Portal → Hiring Portal → Campus Portal → College Portal → Recruit ATS → ATS Landing. Cross-portal components shared from the design system throughout." },
      { heading: "AI Feature Integration",   body: "Consistent AI UI patterns across portals: 'Hello I am JobZ AI' modal, AI Resume Maker flow, AI screening question generator — each with distinct machine-vs-human content differentiation." },
      { heading: "Engineering Contribution", body: "When dev team hit Chart.js implementation blockers on the Main Portal dashboard, stepped in to build 8–10 React/Next.js components directly — unblocking the team and shipping on schedule." },
    ],

    designPrinciples: {
      title: "Platform coherence over portal identity",
      subtitle: "Six portals. Six user types. One truth: a user should never feel lost when they cross a portal boundary.",
      items: [
        { title: "Token system = platform coherence",       desc: "The design system token architecture is what made six portals feel like one brand. Without it, consistency would have been impossible to maintain solo across an 8-month engagement.", tag: "Systems Thinking"  },
        { title: "Empty states are first-class",            desc: "The 13-section candidate profile and 11-section student profile both start empty for every new user. Every section was designed with populated AND empty states.", tag: "UX Completeness"   },
        { title: "Subscription drives the information architecture", desc: "Every screen on the employer and agency side was designed with subscription tier in mind. Free users see locked features — not blank screens.", tag: "Business Model UX" },
        { title: "Design unblocks engineering",             desc: "When Chart.js dashboard components were blocking the dev team, building them directly was the right call. A designer who can write production React is a force multiplier.", tag: "UX Engineering"   },
      ],
      closingQuote: "Six portals, one designer, eight months. The design system is what made that possible.",
    },

    complexitySignals: [
      { icon: "fa fa-sitemap",      title: "6 interconnected portals, 1 design system", body: "Solo freelance ownership of six distinct B2B and B2C web products under one unified token-based design system — designed sequentially over 8 months and shipped to production." },
      { icon: "fa fa-link",         title: "Cross-portal data interdependencies",        body: "College → Campus student identity chain, Hiring → Campus opportunities mode — architectural complexity that had to be mapped before any screen was designed." },
      { icon: "fa fa-user-circle",  title: "13-section candidate profile",               body: "Every section has a populated and empty state, a completion percentage signal, and a privacy control. 13 sections × 3 states = 39 distinct design variants." },
      { icon: "fa fa-upload",       title: "Bulk upload with 6-state validation",        body: "College Portal: drag-and-drop → parse → All/Without Errors/With Errors filter tabs → error row highlight (red) → confirm → import. 1,276-record test case confirmed." },
      { icon: "fa fa-robot",        title: "AI features across 3 portals",               body: "AI Resume Maker, AI candidate search, AI screening questions — each with consistent UI patterns distinguishing machine-generated from human-authored content." },
      { icon: "fa fa-code",         title: "Designer who unblocked engineering",          body: "Built 8–10 React/Next.js + Chart.js components on the Main Portal when the dev team hit blockers — a commercially valuable capability that shipped the feature on time." },
    ],
    complexityCallout: "One freelance designer. Six portals. 240+ screens. Eight months. All live in production across real URLs.",

    outcome: "Six interconnected recruitment portals went live in production — all publicly accessible — serving job seekers, employers, college students, placement coordinators, staffing agencies, and enterprise HR teams under a single coherent brand.",
    metrics: [
      { label: "Portals live",     value: "6"    }, { label: "Screens designed", value: "240+" },
      { label: "Freelance period", value: "8 Mo." }, { label: "Designers",        value: "1"    },
    ],
    learnings: [
      { title: "Map cross-portal dependencies before any screen", body: "The College → Campus identity chain was discovered mid-project. Discovering it earlier would have saved a redesign of the student profile onboarding flow." },
      { title: "Build the system wider than you think you need", body: "The token system initially covered 4 portals. Adding Recruit ATS required extending the sub-brand system. Design systems should be built for the whole ecosystem from day one." },
    ],

    showcase: {
      screensTitle: "240+ screens", screensSubtitle: "6 portals live in production — Main, Hiring, Campus, College, Recruit ATS, ATS Landing.",
      features: [
        { icon: "fa fa-palette",    title: "6-Palette Token Design System",     body: "Navy #1B0F80, Yellow #FEC000, Sky Blue #2228F9 — each with 9-step scales. 4 sub-brand logo variants, 13-size type scale (Major Third multiplier).", tag: "Design System"     },
        { icon: "fa fa-robot",      title: "AI-Powered Recruitment Features",   body: "AI Resume Maker, AI candidate search, AI screening question generator — consistent UI patterns distinguishing machine from human content.",            tag: "AI Integration"    },
        { icon: "fa fa-video-camera",title:"Visume — Video Resume",             body: "First-in-category video resume feature on the Campus Portal — students record and submit video introductions alongside CVs.",                          tag: "Product Innovation" },
        { icon: "fa fa-upload",     title: "Bulk Upload + Error Validation",    body: "College Portal: drag-and-drop → parse → error row highlight (red inline) → All/With Errors/Without filter tabs → import. 1,276-record tested.",        tag: "Enterprise UX"     },
      ],
      featuresTitle: "Platform capabilities",
      designSystem: {
        projectName: "JobzShala",
        colors: [
          { name: "Navy Primary",  hex: "#1B0F80" }, { name: "Yellow Accent", hex: "#FEC000" },
          { name: "Sky Blue",      hex: "#2228F9" }, { name: "Surface",       hex: "#F8F9FA" },
          { name: "Text Dark",     hex: "#1A1A2E" }, { name: "Text Grey",     hex: "#6B7280" },
          { name: "Success",       hex: "#10B981" }, { name: "Error",         hex: "#EF4444" },
        ],
        typography: [
          { label: "H1",    size: "48px", weight: 800, sample: "Find Your Dream Job"  },
          { label: "H2",    size: "30px", weight: 700, sample: "Dashboard Overview"   },
          { label: "Body",  size: "16px", weight: 400, sample: "Search 50,000+ jobs"  },
          { label: "Label", size: "10px", weight: 700, sample: "LIVE JOB · OPEN"      },
        ],
        components: true,
      },
      userFlow: [
        { icon: "fa fa-search",      label: "Job Search",       sub: "6-dimension filter", type: "active" },
        { icon: "fa fa-user-circle", label: "Profile Build",    sub: "13 sections",        type: "active" },
        { icon: "fa fa-paper-plane", label: "Apply",            sub: "1-click apply",      type: "active" },
        { icon: "fa fa-tasks",       label: "Track Application",sub: "5-stage tracker",    type: "active" },
        { icon: "fa fa-briefcase",   label: "Hired",            sub: "Offer stage",        type: "active" },
      ],
      userFlowTitle: "Job seeker core journey",
    },

    techShowcase: {
      stackGroups: [
        { category: "Design",  items: [{ name: "Figma", faIcon: "fa fa-pencil-square-o" }, { name: "FigJam", faIcon: "fa fa-comments" }] },
        { category: "Frontend (Engineering Contribution)", items: [{ name: "React/Next.js", icon: ImageHelper.ReactIcon }, { name: "Chart.js", faIcon: "fa fa-pie-chart" }, { name: "SCSS", icon: ImageHelper.SaasIcon }] },
      ],
      stackTitle: "Tools & technologies",
      roles: [
        { title: "Sole Product Designer",   body: "End-to-end design ownership across 6 portals — token architecture, design system, 240+ high-fidelity screens, interactive prototypes.", tags: ["Design System", "Multi-portal", "Figma"] },
        { title: "Engineering Contributor", body: "Built 8–10 React/Next.js + Chart.js components on the Main Portal to unblock the dev team — dashboard charts, data tables, and filter UI.", tags: ["React", "Next.js", "Chart.js"] },
      ],
      rolesTitle: "What I owned",
      perfStats: [
        { value: "6",   suffix: "",    label: "Portals live"          },
        { value: "240", suffix: "+",   label: "Screens designed"      },
        { value: "8",   suffix: " Mo", label: "Freelance duration"    },
        { value: "10",  suffix: "+",   label: "React components built"},
      ],
      perfTitle: "Delivery at a glance",
      timeline: [
        { date: "May 2024",           title: "Discovery + Design System",   body: "Ecosystem architecture, competitive audit, 6-palette token system, component library." },
        { date: "Jun–Sep 2024",       title: "Main + Hiring + Campus + College Portals", body: "240+ screens across 4 portals. AI feature UI patterns, bulk upload, Visume." },
        { date: "Oct 2024–Jan 2025",  title: "Recruit ATS + Engineering + Go Live", body: "ATS triple-entity model, Chart.js engineering contribution, all 6 portals live." },
      ],
      timelineTitle: "May 2024 → January 2025",
    },

    coverImage: null,
    gallery: [],
    tools: ["Figma", "FigJam", "React/Next.js", "Chart.js", "SCSS"],
    figmaEmbed: null,
    prevSlug: "mycricle", nextSlug: "eatexpress",
  },

  /* ── cs03 · EatExpress ────────────────────────────────────── */
  {
    id: "cs03", title: "EatExpress", slug: "eatexpress",
    category: "Mobile App Design — Two-Sided Marketplace",
    tags: ["Food Delivery", "UAE", "Two-sided Marketplace", "261 Screens", "Design System"],
    year: "2023", role: "Principal Product Designer", duration: "4 months",

    engagementType: "Direct Client", clientGeography: "UAE",
    domain: "Food Tech / Delivery", deploymentStatus: "Concept",
    totalScreens: 261, teamComposition: "Solo Designer (Design only)", liveUrl: null,
    figmaUrl: "https://figma.com/placeholder/eatexpress",
    loomUrl: "https://loom.com/placeholder/eatexpress",
    mandate: "Design a market-adapted, feature-advanced food delivery platform for UAE/Dubai — both a consumer ordering app and a full restaurant partner operations platform — going beyond the Zomato/Swiggy reference brief with UAE-specific features: AED, Arabic, +971, halal dietary filters, and Split Bill.",
    shortDescription: "Dual-platform food delivery for UAE — 261 screens across a complete consumer ordering experience (75 screens) and a full restaurant partner operations platform (186 screens), unified under a single token-based design system.",
    problem: "A Dubai-based client needed a market-adapted food delivery alternative competitive with Zomato and Swiggy — with UAE-specific features and advanced capabilities that the reference apps lacked, on both the consumer and restaurant operator sides.",

    platformScopeTitle: "2 apps. 261 screens. 1 brand system.",
    platformScopeSubtitle: "Consumer ordering experience and a comprehensive restaurant operations management platform — distinct visual identities, shared design system.",
    platformSurfaces: [
      { name: "Customer App", audience: "Food delivery consumers — UAE market", screens: 75, designOwnership: "Full", devOwnership: "None", badge: "Primary", note: "Complete ordering journey: discovery → cart → checkout → tracking → Split Bill → Diet Mode" },
      { name: "Partner App", audience: "Restaurant owners and operators", screens: 186, designOwnership: "Full", devOwnership: "None", badge: "Primary", note: "Full restaurant operations: orders, inventory, analytics, ads, invoicing, dual-track feedback, GSTIN" },
    ],
    ownershipMatrix: {
      design:      { value: 100, note: "Both apps fully designed — brand guidelines, design system, all 261 screens" },
      development: { value: 0,   note: "Design-only engagement — development handled separately" },
      research:    { value: 90,  note: "Competitive benchmarking (Zomato/Swiggy), UAE market research, user flow mapping" },
    },

    problemFrame: {
      statement: "Zomato in Dubai. But Dubai isn't India.",
      statementAccent: "The brief said 'replicate Zomato.' The product required market-adapted original thinking.",
      context: "The UAE food delivery market is distinct: AED currency, Arabic-first interfaces, +971 phone numbers, UAE payment methods, halal dietary requirements, and a restaurant partner landscape with GSTIN-equivalent compliance needs. A straight Zomato port would have been wrong for this market.",
      painpoints: [
        { title: "No UAE-market-adapted reference", desc: "Existing apps in UAE (Deliveroo, Talabat) have different interaction models. A Zomato clone wouldn't be competitive in this market.", severity: "critical" },
        { title: "Restaurant partners had no analytics", desc: "Partners needed outlet-level analytics, menu-to-cart conversion data, and multi-location comparison — not just order notifications.", severity: "high" },
        { title: "No Split Bill for group dining", desc: "Group dining is a primary use case in Dubai's restaurant culture. Contact picker + equal/custom split was absent from all reference apps.", severity: "high" },
        { title: "No Arabic RTL architecture", desc: "Supporting Arabic required RTL-aware component design from the start — not a post-design localisation layer.", severity: "high" },
      ],
      auditItems: [
        { icon: "fa fa-globe",       title: "Zomato/Swiggy not designed for UAE", body: "Indian-market UX patterns (INR, domestic payment rails, Hindi content) don't map to AED, Arabic, or UAE food culture.", badge: "Market Fit"    },
        { icon: "fa fa-bar-chart",   title: "Partner analytics were minimal",     body: "Reference apps showed order counts. Operators needed outlet-level conversion analytics and trend indicators.",             badge: "Analytics Gap" },
        { icon: "fa fa-file-text-o", title: "No financial compliance UI",         body: "GSTIN, invoice recovery, bank account management — critical for UAE restaurant operator compliance, absent from consumer-focused apps.", badge: "Compliance Gap" },
      ],
      solutionBridge: {
        icon: "fa fa-lightbulb-o",
        title: "Our approach: Use the brief as a floor, not a ceiling",
        body: "Delivered the full Zomato/Swiggy feature set as baseline — then added Split Bill, Diet Mode, outlet-level analytics, dual-feedback management (Complaints vs. Reviews), GSTIN compliance, invoice recovery, and 6-language RTL support. Two distinct visual identities (red Consumer, orange Partner) under one token system.",
      },
    },

    process: [
      { heading: "Competitive Research",      body: "Benchmarked Zomato, Swiggy, Deliveroo, and Talabat. Identified 12 features absent from the reference brief that UAE market conditions required." },
      { heading: "Dual-Brand Design System",  body: "Lexend Deca type system (35+ named styles), dual-brand tokens (red Consumer, orange Partner), 6-step scales with AAA accessibility ratings." },
      { heading: "Customer App (75 screens)", body: "Home → Restaurant → Cart → Checkout → Live Tracking → Split Bill → Diet Mode → Wallet. AED, +971, Arabic, halal filters, Dubai neighborhoods." },
      { heading: "Partner App (186 screens)", body: "Order pipeline (Preparing/Ready/Picked), Inventory, Outlet Analytics (conversion rate), Ads, Dual-track Feedback (Complaints vs Reviews), GSTIN, Invoicing, Support." },
    ],

    designPrinciples: {
      title: "Two products. One DNA. Different personas.",
      subtitle: "The consumer app and partner app share every token but serve fundamentally different mental models.",
      items: [
        { title: "Market-adapted, not market-copied",     desc: "The brief said Zomato. The product required UAE-native thinking: AED, Arabic, +971, UAE payment methods, halal filters, Dubai location context.", tag: "Product Judgment"   },
        { title: "Dual-brand from one token system",      desc: "Red for the consumer (appetite, warmth). Orange for the partner (energy, business). Same spacing, typography, component patterns. Different identity, same DNA.", tag: "Brand Architecture" },
        { title: "Partner app is a SaaS product",         desc: "186 screens covering the complete restaurant lifecycle isn't a companion app — it's a SaaS operator platform. Analytics, compliance, and invoicing are first-class features.", tag: "Product Scope"     },
        { title: "Empty and error states first",          desc: "Diet Mode with no matching restaurants. No orders pending. Network error during checkout. Both apps designed with empty states before happy paths.", tag: "UX Completeness"   },
      ],
      closingQuote: "261 screens where the 200th is as well-considered as the 1st — that's the standard.",
    },

    complexitySignals: [
      { icon: "fa fa-users",      title: "Two full apps — two design disciplines",   body: "261 screens across 2 apps with separate visual identities. Consumer UX and operator SaaS UX are fundamentally different disciplines applied simultaneously." },
      { icon: "fa fa-money",      title: "Split Bill — group dining fintech",         body: "Contact picker, equal/custom split amounts, payment confirmation per participant — a mini-fintech feature absent from all reference apps." },
      { icon: "fa fa-leaf",       title: "Diet Mode — dietary overlay system",        body: "A toggle that filters all restaurant listings and menu items simultaneously — a systematic filter architecture, not just tag labels." },
      { icon: "fa fa-bar-chart",  title: "Outlet-level conversion analytics",         body: "Restaurant partners see menu-to-cart conversion rate, outlet comparison, and trend indicators (↑/↓) — a business intelligence layer on top of order management." },
      { icon: "fa fa-comments-o", title: "Dual-track feedback management",            body: "Complaints and Reviews as separate modules — different lifecycle states (Open/Dismissed/Resolved/Expired) and different operator workflows." },
      { icon: "fa fa-language",   title: "6-language + RTL architecture",             body: "Arabic (default UAE), English, French, Italian, Greek, Japanese — RTL-aware component architecture built into the system from the start." },
    ],
    complexityCallout: "261 screens. Two apps. UAE market adaptation. Split Bill. Diet Mode. Outlet analytics. One designer.",

    outcome: "Delivered a market-differentiated dual-platform food delivery application with 261 screens — going significantly beyond the reference brief with UAE-specific features, original product thinking, and a production-ready design system.",
    metrics: [
      { label: "Customer App screens", value: "75"  }, { label: "Partner App screens", value: "186" },
      { label: "Total screens",        value: "261" }, { label: "Named type styles",   value: "35+" },
    ],
    learnings: [
      { title: "Audit the reference before accepting it", body: "Treating 'replicate Zomato' as the product ceiling would have produced a poor-fit product for UAE. Market research before brief acceptance — always." },
      { title: "Partner-side UX is its own problem", body: "186 partner screens took as long as 75 consumer screens. GSTIN, invoice recovery, and outlet analytics are each as complex as any consumer feature." },
    ],

    showcase: {
      screens: [{ image: ImageHelper.EatExpress, label: "Platform Cover" }],
      screensTitle: "Customer App + Partner App", screensSubtitle: "261 screens — complete ordering journey and full restaurant operations platform.",
      features: [
        { icon: "fa fa-money",     title: "Split Bill",               body: "Contact picker → equal/custom split → payment confirmation per participant. Group dining fintech absent from all reference apps.", tag: "Consumer Innovation" },
        { icon: "fa fa-leaf",      title: "Diet Mode",                body: "Toggle overlay filtering all restaurant listings and menu items simultaneously by dietary preference — systematic filter architecture.", tag: "Consumer Innovation" },
        { icon: "fa fa-tasks",     title: "Partner Order Pipeline",   body: "Preparing → Ready → Picked Kanban with per-order countdown timers, issue reporting, and delivery partner status.", tag: "Operations UX"       },
        { icon: "fa fa-language",  title: "6-Language + RTL",         body: "Arabic (default), English, French, Italian, Greek, Japanese — RTL-aware component architecture built from the start.", tag: "Localisation"        },
      ],
      featuresTitle: "Features beyond the brief",
      designSystem: {
        projectName: "EatExpress",
        colors: [
          { name: "Customer Red",    hex: "#CB202D" }, { name: "Customer Red 100", hex: "#FFECEE" },
          { name: "Partner Orange",  hex: "#E77710" }, { name: "Black",            hex: "#000000" },
          { name: "Success Green",   hex: "#008000" }, { name: "Grey 400",         hex: "#676767" },
          { name: "Surface",         hex: "#F0F1F3" }, { name: "White",            hex: "#FFFFFF" },
        ],
        typography: [
          { label: "H1",   size: "40px", weight: 700, sample: "Find Food Near You"          },
          { label: "Body", size: "16px", weight: 400, sample: "Lexend Deca — readability-optimised" },
          { label: "Small",size: "12px", weight: 400, sample: "Preparing · 18 min"          },
          { label: "Label",size: "10px", weight: 700, sample: "OPEN · AED 35 min"           },
        ],
        components: true,
      },
      userFlow: [
        { icon: "fa fa-home",          label: "Home Feed",    sub: "Diet Mode + wallet",  type: "active" },
        { icon: "fa fa-cutlery",       label: "Restaurant",   sub: "Menu + cart",         type: "active" },
        { icon: "fa fa-credit-card",   label: "Checkout",     sub: "AED + promo",         type: "active" },
        { icon: "fa fa-map-marker",    label: "Live Track",   sub: "Map + timeline",      type: "active" },
        { icon: "fa fa-users",         label: "Split Bill",   sub: "Group dining",        type: "active" },
      ],
      userFlowTitle: "Consumer ordering journey",
    },

    techShowcase: {
      stackGroups: [
        { category: "Design", items: [{ name: "Figma", faIcon: "fa fa-pencil-square-o" }, { name: "Lexend Deca", faIcon: "fa fa-font" }] },
      ],
      stackTitle: "Design tools",
      roles: [
        { title: "Principal Product Designer", body: "Complete design ownership: competitive research, dual-brand design system (Lexend Deca, 30+ color tokens), 261 screens across 2 apps, interactive Figma prototypes.", tags: ["Figma", "Mobile Design", "Design System", "Two-sided Marketplace"] },
      ],
      rolesTitle: "What I owned",
      perfStats: [
        { value: "261", suffix: "",  label: "Total screens"        }, { value: "75",  suffix: "", label: "Customer App" },
        { value: "186", suffix: "",  label: "Partner App"          }, { value: "35",  suffix: "+",label: "Type styles"  },
      ],
      perfTitle: "Project scale",
      timeline: [
        { date: "Month 1",   title: "Research + Design System", body: "Competitive benchmarking. Lexend Deca type system, dual-brand token architecture, component library." },
        { date: "Month 2",   title: "Customer App (75 screens)", body: "Full consumer journey — home, discovery, cart, checkout, Split Bill, Diet Mode, wallet, 6-language, UAE adaptations." },
        { date: "Month 3–4", title: "Partner App (186 screens)", body: "Order pipeline, inventory, outlet analytics, ads, dual-track feedback, GSTIN compliance, invoicing, support." },
      ],
      timelineTitle: "4 months: brief to dual-app prototype",
    },

    coverImage: ImageHelper.EatExpress,
    coverImageGrid: ImageHelper.EatExpressGrid,
    gallery: [ImageHelper.EatExpress],
    tools: ["Figma", "FigJam", "Lexend Deca"],
    figmaEmbed: null,
    prevSlug: "jobzshala", nextSlug: "iehp-cmm",
  },


  /* ── cs04 · IEHP CMM ─────────────────────────────────────── */
  {
    id: "cs04", title: "IEHP Care Manager Maintenance", slug: "iehp-cmm",
    category: "Enterprise Dashboard Design + Engineering",
    tags: ["Healthcare", "Enterprise", "Angular", "Dashboard", "Production"],
    year: "2023", role: "Sole Product Designer + Frontend Developer (Angular)", duration: "4 months",

    engagementType: "Contractor", clientGeography: "USA",
    domain: "Healthcare / Enterprise SaaS", deploymentStatus: "Production",
    totalScreens: 62, teamComposition: "Solo — Design + Angular Engineering", liveUrl: null,
    figmaUrl: "https://figma.com/placeholder/iehp-cmm",
    loomUrl: "https://loom.com/placeholder/iehp-cmm",
    mandate: "Design and build an internal operational command centre for IEHP's care manager workforce — enabling real-time workload visibility, care plan assignment, and operational reporting across 35 care managers managing 30,000+ care plans in 4 Southern California regions.",
    shortDescription: "Internal enterprise platform managing 30,000+ care plan assignments across 35 care managers in 4 California regions — replacing fragmented manual processes with a single data-dense command centre. 62 screens. Shipped to production. Designed and built solo.",
    problem: "IEHP managed care plan assignment for 30,000+ members manually across spreadsheets — no unified workload visibility, no automated reassignment when care managers went on leave, no real-time regional capacity view.",

    problemFrame: {
      statement: "30,000 care plans. 35 managers. Managed in spreadsheets.",
      statementAccent: "Delayed assignments and coverage gaps were operational risks growing with scale.",
      context: "IEHP's care plan assignment depended on manual coordination: spreadsheets tracked assignments, email threads handled reassignments, regional capacity was unknown until a care manager raised the alarm. At 30,940 care plans, this was beyond what manual processes could reliably handle.",
      painpoints: [
        { title: "No real-time workload visibility",    desc: "Admins couldn't see current workload distribution across 35 care managers without manually pulling data from multiple sources.", severity: "critical" },
        { title: "Manual reassignment was error-prone", desc: "When a care manager went on leave, 500+ care plans needed manual reassignment — a process taking days and prone to gaps and duplicates.", severity: "critical" },
        { title: "No regional capacity data",           desc: "Low Desert, High Desert, Riverside County, San Bernardino County — each had different capacity but no single comparative view.", severity: "high" },
        { title: "No RBAC — all staff saw everything",  desc: "Care managers could see data outside their scope. The system needed role-based views: admins see everything; care managers see only their workload.", severity: "medium" },
      ],
      auditItems: [
        { icon: "fa fa-table",    title: "Spreadsheet as operational system",  body: "30,940 care plan assignments maintained in shared spreadsheets — no audit trail, no automation, no real-time view.", badge: "Process Gap"  },
        { icon: "fa fa-eye-slash",title: "No workload visualisation",          body: "No way to see workload distribution in real time without manually counting rows across multiple files.", badge: "Visibility Gap" },
        { icon: "fa fa-shield",   title: "Flat permission model",              body: "Admin and care manager views were identical — both saw all regional data and all manager assignments.", badge: "RBAC Gap"       },
      ],
      solutionBridge: {
        icon: "fa fa-tachometer",
        title: "Our approach: Design a command centre — not a CRUD interface",
        body: "Designed a multi-chart dashboard (donut, bar, carousel, sparklines), care manager management, care plan assignment by type (Complex/Basic/General/Behavioral Health), regional capacity, schedule/availability, parametric report generation, and RBAC — all under two distinct role views. 3+ pre-design BRD sessions shaped the architecture before any screen was drawn.",
      },
    },

    process: [
      { heading: "Pre-Design BRD Sessions",   body: "3+ documented Q&A sessions with IEHP stakeholders before design began. Mapped care manager lifecycle, assignment workflows, 4-region structure, and reporting requirements — product thinking before pixels." },
      { heading: "Multi-Chart Dashboard",     body: "KPI cards (30,940 total / 19,046 active / 35 managers / 1 on leave), donut chart (care plan types), high-workload carousel, monthly bar chart, per-manager sparklines. Each widget justified against operational need." },
      { heading: "RBAC Role Views",           body: "Admin: full sidebar (7 modules). Care Manager: Care Manager + Schedule only. Same codebase, two information architectures." },
      { heading: "62-Screen System",          body: "Care Manager module, Care Plan module (4 types), Region module (4 regions), Schedule/Availability, Report Generation, Printed Report output, RBAC Privileges." },
      { heading: "Angular Implementation",    body: "Sole Angular + TypeScript + CSS frontend developer. Forms, data tables, notification system, chart widgets, report generation, and printed IEHP-branded report templates — shipped to IEHP intranet production." },
    ],

    designPrinciples: {
      title: "Enterprise tooling for operational decisions, not data entry",
      subtitle: "The care plan assignment system handles real patient lives. Design had to earn that trust.",
      items: [
        { title: "Data at a glance, decisions in context", desc: "The dashboard answers 4 operational questions on login: total load, distribution, high-risk managers, and trend over time. Every widget has exactly one job.", tag: "Dashboard Design" },
        { title: "RBAC as information architecture", desc: "Admin and Care Manager views are distinct information architectures — not permission flags on the same interface.", tag: "RBAC UX" },
        { title: "Reports are a design surface", desc: "The IEHP-branded Roster Details printed report is a design deliverable as important as any dashboard screen.", tag: "Operational Deliverables" },
        { title: "Pre-design is product design", desc: "Three BRD sessions before any wireframe shaped the entire CMM architecture. The questions asked in those sessions are visible in every module.", tag: "Product Thinking" },
      ],
      closingQuote: "The most important design decision in CMM was the BRD session — not the dashboard layout.",
    },

    complexitySignals: [
      { icon: "fa fa-database",        title: "30,000+ care plans in a live system",  body: "The numbers in the CMM design file are real operational data — 30,940 total, 19,046 active. Designed for production at real scale." },
      { icon: "fa fa-tasks",           title: "Multi-chart dashboard orchestration",   body: "Donut, high-workload carousel, monthly bar chart, per-manager sparklines — four visualisation patterns coordinated on one admin dashboard." },
      { icon: "fa fa-shield",          title: "RBAC in design and engineering",        body: "Admin vs. Care Manager views required different sidebar navigation and data visibility — same codebase, two information architectures." },
      { icon: "fa fa-file-text-o",     title: "Printed IEHP-branded report output",    body: "CMM Roster Details report is a printed deliverable with IEHP branding — design extending beyond the UI into formal operational documents." },
      { icon: "fa fa-question-circle", title: "Pre-design BRD discovery",             body: "3+ documented Q&A sessions with IEHP stakeholders before any wireframe — care manager lifecycle, workflows, regional structure, reporting requirements all mapped first." },
    ],
    complexityCallout: "One person. US healthcare enterprise client. 30,000 care plans. Design and Angular development. Shipped to production.",

    outcome: "Production-shipped enterprise dashboard enabling IEHP administrators to manage care plan assignment across 30,940 care plans and 35 care managers in real time — replacing spreadsheet-based manual processes.",
    metrics: [
      { label: "Care plans in system", value: "30,940" }, { label: "Screens designed",      value: "62"    },
      { label: "Care managers",        value: "35"     }, { label: "CA regions covered",    value: "4"     },
    ],
    learnings: [
      { title: "BRD sessions are UX research", body: "Pre-design Q&A documents shaped the entire CMM architecture. Treating stakeholder sessions as formal product discovery — not informal briefings — produced a system that mapped exactly to operational need." },
      { title: "KPI card numbers are design decisions", body: "What to show on the dashboard hero (30,940 total, 19,046 active, 35 managers, 1 on leave) required deliberate decisions about what an admin needs on login. The numbers themselves are the UX." },
    ],

    showcase: {
      screensTitle: "62 screens", screensSubtitle: "Enterprise care plan management — designed and built in Angular for IEHP intranet production.",
      features: [
        { icon: "fa fa-tachometer",      title: "Multi-Chart Admin Dashboard",       body: "KPI cards, donut (plan type distribution), high-workload carousel, monthly bar chart, per-manager sparklines — all on one screen.", tag: "Dashboard Design"    },
        { icon: "fa fa-shield",          title: "RBAC Role Views",                   body: "Admin: full 7-module sidebar. Care Manager: Care Manager + Schedule only. Two information architectures from one codebase.", tag: "Access Control UX"   },
        { icon: "fa fa-calendar",        title: "Availability & Leave Management",   body: "Care manager availability table with Start/End dates, Active/Planned/Inactive status, Approval status, and bulk multi-select.", tag: "Operations UX"      },
        { icon: "fa fa-file-text-o",     title: "Parametric Report Generation",      body: "Filter by care plan type, manager, region, date range → generates a printed IEHP-branded Roster Details report.", tag: "Operational Deliverables" },
      ],
      featuresTitle: "System capabilities",
      designSystem: {
        projectName: "IEHP CMM",
        colors: [
          { name: "IEHP Blue",   hex: "#0054A6" }, { name: "Blue Light",  hex: "#5B9BD5" },
          { name: "Surface",     hex: "#F5F7FA" }, { name: "Text Dark",   hex: "#1A1A2E" },
          { name: "Success",     hex: "#28A745" }, { name: "Warning",     hex: "#FFC107" },
          { name: "Error",       hex: "#DC3545" }, { name: "Border",      hex: "#E5E7EB" },
        ],
        typography: [
          { label: "H1",   size: "28px", weight: 700, sample: "CMM Dashboard"           },
          { label: "H2",   size: "22px", weight: 600, sample: "Care Manager Overview"   },
          { label: "Body", size: "14px", weight: 400, sample: "30,940 Total Care Plans" },
          { label: "Label",size: "10px", weight: 700, sample: "STATUS · ACTIVE"         },
        ],
        components: true,
      },
      userFlow: [
        { icon: "fa fa-sign-in",    label: "SSO Login",        sub: "IEHP intranet",    type: "active" },
        { icon: "fa fa-tachometer", label: "CMM Dashboard",    sub: "30,940 plans",     type: "active" },
        { icon: "fa fa-users",      label: "Manager Mgmt",     sub: "35 managers",      type: "active" },
        { icon: "fa fa-file-o",     label: "Plan Assignment",  sub: "4 plan types",     type: "active" },
        { icon: "fa fa-file-text",  label: "Generate Report",  sub: "IEHP branded PDF", type: "active" },
      ],
      userFlowTitle: "Admin operational workflow",
    },

    techShowcase: {
      stackGroups: [
        { category: "Design",               items: [{ name: "Figma", faIcon: "fa fa-pencil-square-o" }] },
        { category: "Frontend Engineering", items: [{ name: "Angular", faIcon: "fa fa-code" }, { name: "TypeScript", icon: ImageHelper.TypescriptIcon }, { name: "CSS3", icon: ImageHelper.CssIcon }] },
      ],
      stackTitle: "Tools & technologies",
      roles: [
        { title: "Sole Product Designer",       body: "Pre-design BRD sessions, full 62-screen Figma system, multi-chart dashboard architecture, RBAC information design, printed report design — aligned to IEHP brand.", tags: ["Figma", "Dashboard Design", "RBAC UX"] },
        { title: "Sole Frontend Developer",     body: "Angular + TypeScript + CSS implementation — forms, data tables, notification system, chart widgets, printed report templates. Shipped to IEHP intranet production.", tags: ["Angular", "TypeScript", "CSS"] },
      ],
      rolesTitle: "Solo end-to-end ownership",
      perfStats: [
        { value: "30K",  suffix: "+", label: "Care plans in system"  }, { value: "62",  suffix: "",  label: "Screens designed"    },
        { value: "35",   suffix: "",  label: "Care managers managed" }, { value: "4",   suffix: "",  label: "CA regions covered"  },
      ],
      perfTitle: "Operational scale",
      timeline: [
        { date: "Month 1",   title: "BRD Discovery + Architecture",  body: "3+ Q&A sessions with IEHP. Mapped care manager lifecycle, RBAC requirements, 4-region structure." },
        { date: "Month 2",   title: "Dashboard + Core Modules",      body: "Multi-chart dashboard, Care Manager module, Care Plan module (4 types), RBAC views. 62-screen Figma completed." },
        { date: "Month 3–4", title: "Angular Implementation + QA",   body: "Full Angular + TypeScript build. Forms, tables, notification system, report generation, printed output. Shipped to IEHP intranet." },
      ],
      timelineTitle: "4 months: BRD through production",
    },

    coverImage: null,
    gallery: [],
    tools: ["Figma", "Angular", "TypeScript", "CSS3"],
    figmaEmbed: null,
    prevSlug: "eatexpress", nextSlug: "iehp-hsf",
  },


  /* ── cs05 · IEHP HSF ─────────────────────────────────────── */
  {
    id: "cs05", title: "IEHP Healthcare Scholarship Fund", slug: "iehp-hsf",
    category: "Enterprise Portal Design — Dual Interface",
    tags: ["Healthcare", "WCAG", "Enterprise", "Scholarship", "Production"],
    year: "2023", role: "Product Designer (Contractor)", duration: "3–4 months",

    engagementType: "Contractor", clientGeography: "USA",
    domain: "Healthcare / EdTech", deploymentStatus: "Production",
    totalScreens: 77, teamComposition: "Solo — Externally Reviewed by IEHP Senior Designer", liveUrl: null,
    figmaUrl: "https://figma.com/placeholder/iehp-hsf",
    loomUrl: "https://loom.com/placeholder/iehp-hsf",
    mandate: "Digitise IEHP's medical scholarship programme — scholar-facing portal for 500 physicians and nurse practitioners across 4 California universities, and an admin panel for IEHP operations staff — compliant with the IEHP Design System, IEHP Brand Guidelines, and WCAG accessibility standards.",
    shortDescription: "Dual-interface platform managing IEHP's medical scholarship programme for 500 scholars across 4 universities. 77 screens. WCAG compliant. Externally reviewed by IEHP's senior designer. Shipped to production.",
    problem: "IEHP managed medical scholarships for 500+ physicians and nurse practitioners manually — no digital scholarship tracking, no event coordination, no community forum, and no admin analytics. The programme served 4 universities across California with 14 medical specialisations.",

    platformScopeTitle: "Scholar portal + Admin panel + Mobile. One IEHP system.",
    platformScopeSubtitle: "A single contractor owned both sides of the scholarship platform — externally reviewed against the IEHP Design System and WCAG standards.",
    platformSurfaces: [
      { name: "Scholar Portal (Desktop)", audience: "500+ physicians & nurse practitioners", screens: 24, designOwnership: "Full", devOwnership: "None", badge: "Primary", note: "Multi-method auth, 3-step registration wizard, news, events, community, peers directory, inbox" },
      { name: "Admin Panel (Desktop)",    audience: "IEHP Operations Staff",                screens: 40, designOwnership: "Full", devOwnership: "None", badge: "Primary", note: "8-chart analytics dashboard, 500-record scholar table, bulk upload, reports" },
      { name: "Mobile Views",             audience: "Scholars on mobile devices",           screens: 13, designOwnership: "Full", devOwnership: "None", badge: "Supporting", note: "Mobile-first login, registration wizard (3 steps), WCAG accessibility links in footer" },
    ],
    ownershipMatrix: {
      design:      { value: 100, note: "All 77 screens — externally reviewed by IEHP's senior designer (Shriram) against IEHP Design System + WCAG" },
      development: { value: 0,   note: "Design-only engagement — development by IEHP internal team" },
      research:    { value: 80,  note: "User flow mapping, WCAG audit, IEHP brand guidelines compliance" },
    },

    problemFrame: {
      statement: "500 healthcare scholars. Managed via email and spreadsheets.",
      statementAccent: "Physicians and nurse practitioners building careers had no digital home in the programme that shaped them.",
      context: "IEHP's scholarship programme trained physicians and nurse practitioners across 4 California universities (UCR, LLU, LLU NP, CUSM) in 14 medical specialisations. Registrations, event RSVPs, community communications, and post-academic tracking were all managed manually.",
      painpoints: [
        { title: "No digital scholar identity",         desc: "Scholars had no platform to maintain their profile, view scholarship status, RSVP events, or connect with peers.", severity: "critical" },
        { title: "No operational analytics for IEHP",  desc: "Admin staff had no real-time view of programme health — no completion rates, no university comparisons, no engagement dashboards.", severity: "high" },
        { title: "Bulk scholar management was manual",  desc: "Onboarding a new cohort required manual data entry per scholar. No CSV import, no validation, no error-row detection.", severity: "high" },
        { title: "No WCAG-compliant interface",         desc: "A healthcare scholarship platform serving medical professionals required WCAG-accessible design from the start.", severity: "medium" },
      ],
      auditItems: [
        { icon: "fa fa-users",            title: "No scholar community infrastructure",  body: "Scholars had no way to connect with peers or build the professional network the programme was designed to foster.", badge: "Community Gap"   },
        { icon: "fa fa-bar-chart",        title: "No programme analytics",               body: "IEHP had no data on scholarship distribution by university, award type, or engagement level.", badge: "Analytics Gap"  },
        { icon: "fa fa-universal-access", title: "WCAG compliance not addressed",        body: "Healthcare platform serving medical professionals required first-class accessibility — not a post-design add-on.", badge: "Accessibility" },
      ],
      solutionBridge: {
        icon: "fa fa-graduation-cap",
        title: "Our approach: Build a programme home — for scholars and for IEHP",
        body: "Scholar portal: multi-method auth, registration wizard, news, events + RSVP, community forum, peers directory, inbox. Admin panel: 8-chart dashboard, 500-record scholar table with bulk operations, bulk CSV import with error-row validation, report generation. WCAG compliance built in throughout. Reviewed by IEHP's senior designer Shriram.",
      },
    },

    process: [
      { heading: "Platform Scope Mapping",       body: "Scholar lifecycle (registration → active scholarship → graduation → post-academic tracking) and admin workflows (onboarding, event management, communications, reporting)." },
      { heading: "IEHP Design System Alignment", body: "Studied and applied IEHP Design System and Brand Guidelines throughout — a compliance requirement reviewed by IEHP's own senior designer, not just a style preference." },
      { heading: "Scholar Portal (24 screens)",  body: "3-path auth (OTP, magic link, password), 3-step registration wizard, home dashboard, news, events + RSVP, community forum, peers directory, inbox, dynamic form templates (${{EventName}} variables)." },
      { heading: "Admin Panel (40 screens)",     body: "8-chart analytics dashboard with university filter, 500-record scholars table, bulk CSV upload with error-row preview, individual scholar profile, inbox, reports, event logs." },
      { heading: "Mobile + WCAG Review",         body: "Mobile-first variants of core flows. External WCAG review by Shriram (Senior UI/UX Designer, IEHP). Submitted to production." },
    ],

    designPrinciples: {
      title: "Trust-building UX for a healthcare scholarship programme",
      subtitle: "Physicians and nurse practitioners depend on this programme for their careers. The design had to communicate institutional credibility.",
      items: [
        { title: "IEHP design system as the baseline",        desc: "Working within an established design system requires as much skill as building one. Alignment and compliance were their own design problems.", tag: "Design System Compliance" },
        { title: "Scholars need a community, not a form",     desc: "The community forum, peers directory, and event RSVP system were the purpose of the platform — not scope additions.", tag: "Scholar Experience"     },
        { title: "Admin analytics justify the programme",     desc: "The 8-chart dashboard isn't decoration — it's the intelligence layer that proves the scholarship programme's impact to IEHP leadership.", tag: "Operational Value"      },
        { title: "WCAG as a design constraint, not checklist",desc: "Accessibility built into every component decision — from authentication flow's inline method expansion to mobile footer's accessibility links.", tag: "Accessibility"          },
      ],
      closingQuote: "A platform externally reviewed by the client's own senior designer is a portfolio signal that most projects don't carry.",
    },

    complexitySignals: [
      { icon: "fa fa-universal-access", title: "WCAG compliance — externally reviewed",   body: "All 77 screens designed against WCAG standards and reviewed by Shriram, IEHP's Senior UI/UX Designer — an external quality validation most portfolio projects don't have." },
      { icon: "fa fa-key",              title: "3-path authentication system",             body: "6-digit email OTP, magic link, and password — three distinct sign-in flows with separate UI states, escape hatches, and error handling." },
      { icon: "fa fa-bar-chart",        title: "8 chart types in one admin dashboard",    body: "Scholars by University (line), Profile Completion (leaderboard), Event Registration (bars), Scholar Type (donut), Award Type (grouped bar), Engagement (diverging bar), Specialisations (pie)." },
      { icon: "fa fa-upload",           title: "Bulk upload with error-row validation",   body: "3-step wizard: Upload File → Preview (All/Without Errors/With Errors filter tabs, error rows highlighted red) → Import. Healthcare scholar cohort onboarding." },
      { icon: "fa fa-wpforms",          title: "Dynamic template variable injection",     body: "Event survey and RSVP forms use ${{EventName}} variable syntax — a CMS templating system for IEHP staff to create reusable dynamic forms." },
    ],
    complexityCallout: "One designer. US healthcare enterprise. WCAG compliance. Externally reviewed. 77 screens across three surfaces. Shipped to production.",

    outcome: "Production-shipped scholarship management platform — scholar portal, admin panel, and mobile views — IEHP Design System and WCAG compliant, externally reviewed by IEHP's senior designer.",
    metrics: [
      { label: "Screens designed",    value: "77"  }, { label: "Scholars served",     value: "500" },
      { label: "Universities covered",value: "4"   }, { label: "Chart types",         value: "8"   },
    ],
    learnings: [
      { title: "External design review is a quality multiplier", body: "Shriram's review against the IEHP Design System forced precision that self-review doesn't. Request external review on every enterprise engagement." },
      { title: "Dynamic form templates need their own design system", body: "The ${{EventName}} template syntax required a defined content API that operations staff would use. Design decisions here were product decisions — scope them explicitly." },
    ],

    showcase: {
      screensTitle: "77 screens", screensSubtitle: "Scholar portal + Admin panel + Mobile — WCAG compliant, externally reviewed, shipped to production.",
      features: [
        { icon: "fa fa-key",          title: "3-Method Authentication",     body: "OTP email code, magic link, and password — three distinct sign-in paths with separate UI states and error handling.", tag: "Auth System"          },
        { icon: "fa fa-list-ol",      title: "3-Step Registration Wizard",  body: "Basic Details → Scholar Details (academic, contact, preferences, post-academic) → Waiver Form (HIPAA consent, signature + date).", tag: "Onboarding UX"       },
        { icon: "fa fa-bar-chart",    title: "8-Chart Admin Dashboard",     body: "University line chart, profile completion leaderboard, event registration bars, scholar type donut, award type grouped bar, engagement diverging bar.", tag: "Data Visualisation"  },
        { icon: "fa fa-upload",       title: "Bulk Scholar Upload",         body: "3-step CSV import: Upload → Preview (error rows red) → Import. All/Without Errors/With Errors filter tabs. Full cohort onboarding.", tag: "Enterprise Operations"},
      ],
      featuresTitle: "Platform capabilities",
      designSystem: {
        projectName: "IEHP HSF",
        colors: [
          { name: "IEHP Blue",    hex: "#0054A6" }, { name: "Blue Light",  hex: "#4A90D9" },
          { name: "Surface",      hex: "#F5F7FA" }, { name: "Text Primary", hex: "#1A1A2E" },
          { name: "Success",      hex: "#28A745" }, { name: "Warning",      hex: "#FFC107" },
          { name: "Error",        hex: "#DC3545" }, { name: "White",        hex: "#FFFFFF" },
        ],
        typography: [
          { label: "H1",   size: "32px", weight: 700, sample: "Healthcare Scholar Portal"        },
          { label: "H2",   size: "24px", weight: 600, sample: "Scholars Overview"                },
          { label: "Body", size: "14px", weight: 400, sample: "500 scholars across 4 universities"},
          { label: "Label",size: "10px", weight: 700, sample: "UNREAD · SCHOLARSHIP"             },
        ],
        components: true,
      },
      userFlow: [
        { icon: "fa fa-sign-in",  label: "Register / Login", sub: "3 auth methods",  type: "active" },
        { icon: "fa fa-list-ol",  label: "Onboarding",       sub: "3-step wizard",   type: "active" },
        { icon: "fa fa-home",     label: "Scholar Home",     sub: "News + events",   type: "active" },
        { icon: "fa fa-calendar", label: "Event RSVP",       sub: "Dynamic form",    type: "active" },
        { icon: "fa fa-comments", label: "Community",        sub: "Forum + peers",   type: "active" },
      ],
      userFlowTitle: "Scholar journey",
    },

    techShowcase: {
      stackGroups: [
        { category: "Design & Compliance", items: [{ name: "Figma", faIcon: "fa fa-pencil-square-o" }, { name: "IEHP Design System", faIcon: "fa fa-building" }, { name: "WCAG 2.1", faIcon: "fa fa-universal-access" }] },
      ],
      stackTitle: "Design tools & compliance standards",
      roles: [
        { title: "Product Designer (Contractor)", body: "Platform architecture, 3-path auth UX, registration wizard, 8-chart admin dashboard, bulk upload, dynamic event forms — aligned to IEHP Design System and WCAG.", tags: ["Figma", "IEHP Design System", "WCAG", "Healthcare UX"] },
      ],
      rolesTitle: "What I owned",
      perfStats: [
        { value: "77",  suffix: "",  label: "Screens designed"         }, { value: "500", suffix: "+", label: "Scholars in programme" },
        { value: "8",   suffix: "",  label: "Chart types in dashboard" }, { value: "3",   suffix: "",  label: "Auth methods"         },
      ],
      perfTitle: "Project at a glance",
      timeline: [
        { date: "Month 1",   title: "Architecture + Scholar Portal", body: "Scope mapping, IEHP Design System study, 3-path auth, 3-step registration wizard, scholar home, news, events, community, peers directory." },
        { date: "Month 2",   title: "Admin Panel + Analytics",      body: "8-chart dashboard, scholars table (500 records), bulk CSV upload with error-row validation, scholar profile (admin), inbox, reports." },
        { date: "Month 3–4", title: "Mobile + WCAG Review + Production", body: "Mobile-first variants. External WCAG review by Shriram (IEHP Senior UI/UX Designer). Production submission." },
      ],
      timelineTitle: "3–4 months to production",
    },

    coverImage: null,
    gallery: [],
    tools: ["Figma", "IEHP Design System", "WCAG 2.1"],
    figmaEmbed: null,
    prevSlug: "iehp-cmm", nextSlug: "myhabit",
  },

  /* ── cs06 · MyHabit ──────────────────────────────────────── */
  {
    id: "cs06", title: "MyHabit", slug: "myhabit",
    category: "Mobile App Design — B2C Consumer",
    tags: ["Mobile App", "B2C", "iOS & Android", "Wellness", "Design System"],
    year: "2023", role: "Sole Product Designer", duration: "3–4 months",

    engagementType: "Employment", clientGeography: "Global",
    domain: "Wellness / Productivity", deploymentStatus: "Delivered",
    totalScreens: 159, teamComposition: "Solo Designer — Flutter dev team separate", liveUrl: null,
    figmaUrl: "https://figma.com/placeholder/myhabit",
    loomUrl: "https://loom.com/placeholder/myhabit",
    mandate: "Design a complete B2C habit tracking app — black and white visual system, three distinct habit paradigms (Regular, Negative, One Time), a Journey coaching module, and full 10-language support including Arabic — for iOS and Android via Flutter.",
    shortDescription: "Complete B2C habit tracking and behaviour change app — 159+ screens across 7 modules, built from a 'black and white only' brief that became a distinctive visual system. iOS + Android. 10-language support. Full design system.",
    problem: "Generic habit apps use a single check-in model — marking a habit done or not done. This fails for three psychologically distinct types: positive daily routines (check in to confirm), negative habits where success means NOT doing something (inverted model), and one-time commitments (singular completion, no streak logic).",

    problemFrame: {
      statement: "One check-in model. Three different psychologies.",
      statementAccent: "Negative habits work backwards. One-time habits are singular. A single model handles none of them well.",
      context: "Habit tracking apps like Habitica and Streaks treat all habits identically. Building a morning run (positive) is cognitively different from quitting smoking (negative — success means NOT doing it) and submitting a form before a deadline (one-time — no streak, just completion). MyHabit needed three distinct models.",
      painpoints: [
        { title: "Inverted psychology for negative habits", desc: "A negative habit like 'no alcohol' starts the day as successful. Users should uncheck it only on failure — the inverse of a positive habit.", severity: "critical" },
        { title: "One-time habits have no streak logic",    desc: "A habit that happens once (dentist appointment, file taxes) has no streak, no daily check-in, different completion semantics.", severity: "critical" },
        { title: "No coaching module in reference apps",    desc: "Expert-curated 30-day Journey programmes require enrollment commitment mechanics and phase-based progress — not present in competing apps.", severity: "high" },
        { title: "B&W constraint with no system",          desc: "A 'black and white only' brief without a systematic approach would produce a flat, undifferentiated UI.", severity: "medium" },
      ],
      auditItems: [
        { icon: "fa fa-check-square", title: "Single interaction model for all habits", body: "Habitica and Streaks offer one check-in pattern — does not accommodate inverted psychology of negative habits or singular nature of one-time commitments.", badge: "UX Limitation" },
        { icon: "fa fa-road",         title: "No structured coaching programmes",       body: "Journey (expert 30-day programme with day-by-day tasks and phases) does not exist in reference apps.", badge: "Feature Gap" },
        { icon: "fa fa-globe",        title: "No RTL language architecture",            body: "10-language support including Arabic requires RTL-aware component design from the start.", badge: "Localisation Gap" },
      ],
      solutionBridge: {
        icon: "fa fa-cogs",
        title: "Our approach: Build three habit models, not one",
        body: "Designed three distinct creation flows, card interaction states, and history semantics: Regular (check-in daily), Negative (starts complete, uncheck on failure), One Time (date-specific, single completion). Built a B&W design system with selective pastel category accents. Journey module with enrollment commitment mechanics and day-by-day execution.",
      },
    },

    process: [
      { heading: "Competitive Research",     body: "Analysed Habitica, Streaks, Fabulous, and Done. Identified the single-model limitation as the core differentiation opportunity." },
      { heading: "Three Habit Models",       body: "Defined Regular, Negative, and One Time paradigms — each with distinct card UI, creation flow, interaction model, and history semantics. The most critical product design decision in the project." },
      { heading: "B&W Design System",       body: "Black/white primary system with selective pastel category accents. 8+ habit card variants. Illustrated icon system. Component library documented in Figma." },
      { heading: "7 Module Design",          body: "Onboarding, Today Dashboard, Habit Management, History & Analytics, Journey (30-day coaching), Timer, Profile & Settings. 159+ screens across all modules." },
      { heading: "Journey + Flutter Handoff",body: "Journey: enrollment with swipe-to-confirm commitment, streak-loss warning, phase-based 30-day plans, day-by-day task execution. Complete Flutter dev handoff." },
    ],

    designPrinciples: {
      title: "Three paradigms. One visual system.",
      subtitle: "The constraint of 'black and white only' forced a design system solution — not a style decision.",
      items: [
        { title: "Model the psychology, not just the UI", desc: "Negative habits need inverted interaction models. One-time habits need singular completion semantics. Design the psychology first, then the component that serves it.", tag: "Behavioural Design" },
        { title: "Constraints produce systems",           desc: "The 'black and white only' brief wasn't a limitation — it was a forcing function for a system where colour is used sparingly and purposefully. Category accents earn their place.", tag: "Design Thinking"   },
        { title: "Coaching is a product, not a feature", desc: "The Journey module with enrollment commitment, streak-loss warnings, and phase-based day plans is a coaching product embedded in a habit tracker — not a feature bolted on.", tag: "Product Thinking"  },
        { title: "Empty states for every section",       desc: "Every habit card, every history view, every analytics chart was designed with both populated and empty states. Edge cases are where trust is won or lost.", tag: "UX Completeness"   },
      ],
      closingQuote: "The best habit app doesn't just track. It understands which habit you're trying to build — and why it's different from all the others.",
    },

    complexitySignals: [
      { icon: "fa fa-random",     title: "3 habit paradigms with different UX",   body: "Regular, Negative, and One Time each have different card states, creation flows, interaction models, and history semantics — three systems, not three variants." },
      { icon: "fa fa-road",       title: "Journey coaching module",                body: "Expert 30-day programmes with enrollment swipe-to-confirm, streak-loss warnings, phase-based plans, and day-by-day task execution." },
      { icon: "fa fa-cog",        title: "8-parameter habit configuration",        body: "Type, name, colour, icon, frequency, goal, time-of-day, advanced settings — progressive disclosure so creation feels simple, powerful when needed." },
      { icon: "fa fa-globe",      title: "10-language + RTL architecture",          body: "Arabic, English + 8 others — RTL-aware component design built from the start, not a post-design localisation layer." },
    ],
    complexityCallout: "Three habit psychologies. One B&W design system. 159+ screens. iOS + Android. 10 languages. Solo designer.",

    outcome: "Delivered a complete B2C habit tracking application — 159+ screens, 7 modules, full component library — from a 'black and white only' brief that became a distinctive product visual system.",
    metrics: [
      { label: "Screens designed", value: "159+" }, { label: "Modules",    value: "7"  },
      { label: "Languages",        value: "10"   }, { label: "Paradigms",  value: "3"  },
    ],
    learnings: [
      { title: "Product research before accepting the brief", body: "The 'black and white' visual brief came without product specification. Competitive research independently identified the three-habit-type opportunity. Bring product thinking into design-only briefs." },
    ],

    showcase: {
      screens: [{ image: ImageHelper.MyHabitAppUiDesignCover, label: "MyHabit App" }],
      screensTitle: "159+ screens", screensSubtitle: "B2C mobile habit tracking — iOS + Android via Flutter.",
      features: [
        { icon: "fa fa-check-square",  title: "3 Habit Paradigms",         body: "Regular (daily check-in), Negative (starts complete, uncheck on failure), One Time (date-specific, singular completion). Three models, three UX systems.", tag: "Core Innovation" },
        { icon: "fa fa-road",          title: "Journey Coaching Module",   body: "Expert 30-day programmes: enrollment swipe-to-confirm, streak-loss warnings, phase-based plans, day-by-day execution.", tag: "Coaching System" },
        { icon: "fa fa-cog",           title: "8-Parameter Habit Builder", body: "Type, name, colour, icon, frequency, goal, time-of-day, advanced settings — progressive disclosure across all parameters.", tag: "Configuration UX"},
        { icon: "fa fa-globe",         title: "10-Language Support",       body: "Arabic, English + 8 more. RTL-aware component architecture built from the start — not a post-design add-on.", tag: "Localisation"    },
      ],
      featuresTitle: "What made MyHabit different",
      designSystem: {
        projectName: "MyHabit",
        colors: [
          { name: "Primary Black",  hex: "#000000" }, { name: "Pure White",    hex: "#FFFFFF" },
          { name: "Surface Grey",   hex: "#F5F5F5" }, { name: "Border Grey",   hex: "#E0E0E0" },
          { name: "Category Green", hex: "#A8D5B5" }, { name: "Category Pink", hex: "#F5A0B5" },
          { name: "Category Blue",  hex: "#A0C4F5" }, { name: "Category Orange",hex:"#F5C4A0" },
        ],
        typography: [
          { label: "H1",   size: "28px", weight: 700, sample: "Today's Habits"         },
          { label: "H2",   size: "22px", weight: 600, sample: "Morning Routine"        },
          { label: "Body", size: "15px", weight: 400, sample: "3 of 8 habits done"     },
          { label: "Label",size: "10px", weight: 700, sample: "NEGATIVE · DAILY"       },
        ],
        components: true,
      },
      userFlow: [
        { icon: "fa fa-play",        label: "Onboarding",  sub: "Name entry",         type: "active" },
        { icon: "fa fa-home",        label: "Today",       sub: "Habit list",         type: "active" },
        { icon: "fa fa-plus-circle", label: "Add Habit",   sub: "8 parameters",       type: "active" },
        { icon: "fa fa-road",        label: "Journey",     sub: "30-day programme",   type: "active" },
        { icon: "fa fa-bar-chart",   label: "History",     sub: "Streak + analytics", type: "active" },
      ],
      userFlowTitle: "Core user journey",
    },

    techShowcase: {
      stackGroups: [
        { category: "Design", items: [{ name: "Figma", faIcon: "fa fa-pencil-square-o" }, { name: "Flutter Handoff", faIcon: "fa fa-mobile" }] },
      ],
      stackTitle: "Design tools",
      roles: [
        { title: "Sole Product Designer", body: "Competitive research, 3-paradigm habit model architecture, B&W design system, 159+ screens across 7 modules, component library, Flutter handoff.", tags: ["Figma", "Mobile Design", "iOS & Android", "B2C UX"] },
      ],
      rolesTitle: "What I owned",
      perfStats: [
        { value: "159",  suffix: "+", label: "Screens designed"  }, { value: "7",   suffix: "",  label: "App modules"     },
        { value: "3",    suffix: "",  label: "Habit paradigms"   }, { value: "10",  suffix: "",  label: "Languages"       },
      ],
      perfTitle: "Project scale",
      timeline: [
        { date: "Month 1",   title: "Research + Design System", body: "Competitive analysis, 3-habit paradigm design, B&W design system, component library (8+ card variants)." },
        { date: "Month 2",   title: "Core Modules",             body: "Onboarding, Today Dashboard, Habit Management (3 types), History & Analytics. Full populated + empty state coverage." },
        { date: "Month 3–4", title: "Journey + Handoff",        body: "Journey coaching module, Timer, Profile & Settings (10-language, premium subscription). Flutter dev handoff." },
      ],
      timelineTitle: "3–4 months: brief to Flutter handoff",
    },

    coverImage: ImageHelper.MyHabitAppUiDesignCover,
    coverImageGrid: ImageHelper.MyHabitAppUiDesignCoverGrid,
    gallery: [ImageHelper.MyHabitAppUiDesignCover],
    tools: ["Figma"],
    figmaEmbed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9HMIWUKmHtSMvLxLszUto4%2FMyHabit-App-Ui-Design-by-Tabrez%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DwKtDUoJGhEdHoW9P-1",
    prevSlug: "iehp-hsf", nextSlug: "menuonline",
  },


  /* ── cs07 · MenuOnline ───────────────────────────────────── */
  {
    id: "cs07", title: "MenuOnline", slug: "menuonline",
    category: "SaaS Platform Design + Engineering",
    tags: ["Restaurant Tech", "SaaS", "POS", "KDS", "UX Engineer"],
    year: "2023", role: "UX Engineer — Design + Frontend Code", duration: "3–4 months",

    engagementType: "Employment", clientGeography: "Global",
    domain: "Restaurant Tech / F&B Operations", deploymentStatus: "Delivered",
    totalScreens: 57, teamComposition: "Solo — Design + Engineering (UX Engineer)", liveUrl: null,
    figmaUrl: "https://figma.com/placeholder/menuonline",
    loomUrl: "https://loom.com/placeholder/menuonline",
    mandate: "Design and engineer a comprehensive restaurant management SaaS platform — 13 primary modules covering POS, KDS, reservations, inventory, marketing automation, and analytics — for Admin, Manager, Kitchen, Waiter, and Driver roles across dine-in, online orders, and delivery simultaneously.",
    shortDescription: "Restaurant management SaaS with 13 operational modules — POS, Kitchen Display, reservations, waitlisting, inventory, multi-channel marketing, and analytics — designed and engineered solo as a UX Engineer. 5 user roles, real-time order state machine.",
    problem: "Restaurant operators needed a single platform for POS, KDS, table management, reservations, waitlisting, marketing, inventory, and analytics — managing dine-in, online orders, and delivery simultaneously — with role-appropriate interfaces for 5 distinct user types.",

    problemFrame: {
      statement: "13 restaurant operations. 5 user roles. No unified platform.",
      statementAccent: "POS, KDS, reservations, and marketing lived in separate tools — none sharing the same order state.",
      context: "Multi-service food businesses run on fragmented systems. The POS doesn't talk to the KDS. The KDS doesn't update the Counter Display. Marketing campaigns don't integrate with the customer database. Reservations and waitlisting are separate from table management.",
      painpoints: [
        { title: "Order state not shared across systems",  desc: "POS accepted an order that KDS had to manually re-enter. Counter Display was updated by kitchen staff calling across the floor.", severity: "critical" },
        { title: "Marketing had no customer data",         desc: "SMS and email campaigns required manual export from POS into a separate marketing tool — audience targeting was always stale.", severity: "high" },
        { title: "No multi-location architecture",         desc: "Multi-outlet restaurant brands had no way to manage settings and reporting across locations from a single admin.", severity: "medium" },
        { title: "Role-based access not designed",         desc: "Kitchen staff, waiters, and drivers were using the same admin interface — seeing more than they needed, less context than they required.", severity: "medium" },
      ],
      auditItems: [
        { icon: "fa fa-share-alt", title: "No shared order state machine", body: "Order status wasn't synchronised across POS, KDS, Counter Display, and customer SMS notification — chaos during peak service.", badge: "State Management" },
        { icon: "fa fa-users",     title: "Role-based access not designed",body: "Kitchen staff and owners used the same admin interface — different needs, same UI.", badge: "RBAC Gap"         },
        { icon: "fa fa-tag",       title: "Tax system one-size-fits-all",  body: "Multi-named tax configuration (GST, HST, Service Tax, Alcohol Tax, Meat Tax) impossible in existing systems.", badge: "Compliance Gap"  },
      ],
      solutionBridge: {
        icon: "fa fa-cutlery",
        title: "Our approach: One order state. Five role views. Thirteen modules.",
        body: "Designed a real-time order state machine (New → In Process → Ready → Completed → Cancelled) synchronised across POS, KDS, Counter Display, and customer SMS. 5 role-appropriate interfaces. Multi-axis tax engine, geospatial delivery, multi-gateway payments, embeddable widget system. Engineered in React + TypeScript + MUI v5.",
      },
    },

    process: [
      { heading: "Platform Architecture",    body: "Mapped 13 module interdependencies, 5 role permission scopes, and order state lifecycle before designing a single screen." },
      { heading: "3-Panel POS Interface",    body: "Category sidebar, item grid with modifier groups, live order panel with real-time tax calculation and coupon engine — the most complex single screen in the system." },
      { heading: "KDS Kanban Design",        body: "Real-time Kanban: status columns (New/In Process/Ready), per-ticket countdown timers, chef assignment, item-level check-off. State syncs to POS and Counter Display." },
      { heading: "13-Module System",         body: "POS, Order Management, KDS, Counter Display, Menus, Tools, Reservations, Waiting List, Tables, Customers, Staff & Roles, Store Setup, Inventory, Marketing (Email/SMS/WhatsApp), Analytics, Online Store." },
      { heading: "React Engineering",        body: "Sole frontend engineer. React + TypeScript + MUI v5 + GraphQL + AG Grid. Multi-axis tax engine, SMS template variable injection (${{Customer_Name}}), embeddable iframe widget generators." },
    ],

    designPrinciples: {
      title: "One order. Five views. Zero synchronisation delay.",
      subtitle: "Every module in MenuOnline is designed around a shared order state — not as a standalone feature.",
      items: [
        { title: "State machine before features", desc: "The order lifecycle (New → In Process → Ready → Completed → Cancelled) was designed as an architectural decision. Every module that touches orders is a view of that state.", tag: "State Architecture" },
        { title: "Role views, not feature flags", desc: "Kitchen staff see orders only. Waiters see tables and orders. Managers see everything. Role interfaces designed from the ground up — not filtered from an admin screen.", tag: "RBAC Design"        },
        { title: "Embeddable = extensible",       desc: "Menu widget and reservation widget iframe generators allow operators to extend MenuOnline to their own websites — a product-within-a-product decision.", tag: "Platform Thinking"  },
        { title: "Tax as configuration",          desc: "GST, HST, Service Tax, Alcohol Tax, Meat Tax — each named, numbered, and percentage-configurable. Multi-axis tax is the operational reality of multi-region F&B.", tag: "Business Compliance"},
      ],
      closingQuote: "A restaurant POS is not a checkout form. It's an operational command centre for the most time-pressured business environment in retail.",
    },

    complexitySignals: [
      { icon: "fa fa-cutlery",     title: "3-panel POS interface",              body: "Category sidebar + item grid with modifier groups + live order panel with real-time tax, coupons, and contextual waiter/table/customer assignment — the most complex single screen in the system." },
      { icon: "fa fa-share-alt",   title: "Real-time order state machine",       body: "New → In Process → Ready → Completed → Cancelled — synchronised across POS, KDS, Counter Display, and SMS notifications simultaneously." },
      { icon: "fa fa-calculator",  title: "Multi-axis tax engine",              body: "Named taxes (GST, HST, Service Tax, Alcohol Tax, Meat Tax) with configurable numbers and percentages — item-level tax assignment across all order contexts." },
      { icon: "fa fa-code",        title: "Embeddable widget system",           body: "Iframe code generator for Menu and Reservation widgets — operators embed MenuOnline functionality directly in their own restaurant websites." },
      { icon: "fa fa-commenting",  title: "SMS template variable injection",    body: "Dynamic message templates with `{Customer_Name}`, `{Waiting_Time}` variable syntax across Online Order, Cashier, and Reservation notification contexts." },
    ],
    complexityCallout: "13 modules. 5 user roles. One order state machine. Designed and engineered solo as a UX Engineer.",

    outcome: "Delivered a comprehensive restaurant management SaaS — 13 modules, 5 role-based interfaces, real-time order state synchronisation across POS/KDS/Counter Display/SMS — designed and engineered by a single UX Engineer.",
    metrics: [
      { label: "Modules designed",  value: "13"  }, { label: "Pages designed",  value: "57"  },
      { label: "User roles",        value: "5"   }, { label: "Portfolio score", value: "8.4" },
    ],
    learnings: [
      { title: "Order state before module design", body: "Designing the shared order state machine before any module UI was the right sequencing. Modules built on a defined state are coherent; independently built modules connected afterwards are not." },
    ],

    showcase: {
      screens: [
        { image: ImageHelper.MenuOnline,              label: "MenuOnline Platform"    },
        { image: ImageHelper.MenuOnlineFoundationCover,label: "Platform Foundation"  },
      ],
      screensTitle: "57 pages", screensSubtitle: "Complete restaurant SaaS platform — 13 modules, 5 roles, designed and engineered solo.",
      features: [
        { icon: "fa fa-cutlery",    title: "3-Panel POS Interface",       body: "Category sidebar, item grid with modifiers, live order panel with real-time tax and coupons — the core of every restaurant's daily operation.", tag: "Core Feature"    },
        { icon: "fa fa-tasks",      title: "Kanban Kitchen Display (KDS)", body: "Real-time order board: status columns, per-ticket countdown timers, chef assignment, item-level check-off — synced to POS and Counter Display.", tag: "Operations"      },
        { icon: "fa fa-bullhorn",   title: "Multi-Channel Marketing",     body: "Email, SMS, WhatsApp campaign templates with {Customer_Name} variable injection — using real customer data from the platform.", tag: "Marketing"       },
        { icon: "fa fa-barcode",    title: "Embeddable Widgets",          body: "Iframe code generators for Menu and Reservation widgets — operators embed MenuOnline in their own restaurant websites.", tag: "Platform Extension"},
      ],
      featuresTitle: "Platform capabilities",
      designSystem: {
        projectName: "MenuOnline",
        colors: [
          { name: "Primary Blue", hex: "#0378b8" }, { name: "Blue Light",  hex: "#62bdfc" },
          { name: "Surface",      hex: "#F9F9FF" }, { name: "Text Dark",   hex: "#222222" },
          { name: "Success",      hex: "#28c840" }, { name: "Warning",     hex: "#febc2e" },
          { name: "Error",        hex: "#ff5f57" }, { name: "Border",      hex: "#E0E0E0" },
        ],
        typography: [
          { label: "H1",   size: "26px", weight: 700, sample: "Today's Orders"              },
          { label: "H2",   size: "20px", weight: 600, sample: "Order Management"            },
          { label: "Body", size: "14px", weight: 400, sample: "Table 4 · 3 items · AED 120" },
          { label: "Label",size: "10px", weight: 700, sample: "IN PROCESS · KITCHEN"        },
        ],
        components: true,
      },
      userFlow: [
        { icon: "fa fa-sign-in",     label: "Login",           sub: "Role-based",      type: "active" },
        { icon: "fa fa-cutlery",     label: "POS Order",       sub: "3-panel UI",      type: "active" },
        { icon: "fa fa-tasks",       label: "KDS Kitchen",     sub: "Kanban flow",     type: "active" },
        { icon: "fa fa-credit-card", label: "Payment",         sub: "Multi-gateway",   type: "active" },
        { icon: "fa fa-check",       label: "Order Complete",  sub: "SMS notification",type: "active" },
      ],
      userFlowTitle: "Core order pipeline",
    },

    techShowcase: {
      stackGroups: [
        { category: "Design", items: [{ name: "Figma", faIcon: "fa fa-pencil-square-o" }] },
        { category: "Frontend Engineering", items: [{ name: "React", icon: ImageHelper.ReactIcon }, { name: "TypeScript", icon: ImageHelper.TypescriptIcon }, { name: "MUI v5", icon: ImageHelper.MuiIcon }, { name: "GraphQL", icon: ImageHelper.GraphQLIcon }] },
      ],
      stackTitle: "Tools & technologies",
      roles: [
        { title: "UX Engineer — Design + Code", body: "Sole designer and sole frontend engineer. Platform architecture, 13-module design, 57 screens, and full React + TypeScript + MUI v5 implementation including real-time state management.", tags: ["Figma", "React", "TypeScript", "MUI v5", "GraphQL"] },
      ],
      rolesTitle: "Solo UX Engineering",
      perfStats: [
        { value: "13",   suffix: "",    label: "Platform modules"   }, { value: "57",   suffix: "",    label: "Pages designed"    },
        { value: "5",    suffix: "",    label: "User roles"         }, { value: "8.4",  suffix: "/10", label: "Portfolio score"   },
      ],
      perfTitle: "Project at a glance",
      timeline: [
        { date: "Month 1",   title: "Architecture + POS + KDS",   body: "Platform module map, order state machine, 3-panel POS, Kanban KDS. Role-based access architecture defined." },
        { date: "Month 2",   title: "13-Module System Design",    body: "All 13 modules: Menus, Reservations, Waiting List, Tables, Customers, Staff, Store Setup, Inventory, Marketing, Analytics, Online Store." },
        { date: "Month 3–4", title: "React Engineering",          body: "Full React + TypeScript + MUI v5 implementation. Multi-axis tax engine, SMS template variables, payment gateway orchestration, iframe widget generators." },
      ],
      timelineTitle: "3–4 months: design system to production engineering",
    },

    coverImage: ImageHelper.MenuOnline,
    coverImageGrid: ImageHelper.MenuOnlineGrid,
    gallery: [ImageHelper.MenuOnline, ImageHelper.MenuOnlineFoundationCover],
    tools: ["Figma", "React", "TypeScript", "MUI v5", "GraphQL", "AG Grid"],
    figmaEmbed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Ffk5h0eLTzisiDKps17PweI%2FMenuOnline-by-TZ%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DRSOySh5J75YcPzlK-1",
    prevSlug: "myhabit", nextSlug: "edxplore",
  },


  /* ── cs08 · EdXplore ─────────────────────────────────────── */
  {
    id: "cs08", title: "EdXplore Admin Panel", slug: "edxplore",
    category: "Admin Panel Design + Engineering Lead",
    tags: ["EdTech", "B2B SaaS", "React 18", "Engineering Lead", "RBAC"],
    year: "2023", role: "Admin Panel Designer + Frontend Engineering Lead", duration: "3 months",

    engagementType: "Agency", clientGeography: "India",
    domain: "EdTech / B2B SaaS", deploymentStatus: "Archived",
    totalScreens: 93, teamComposition: "Solo Design — Led 5 Dev Engineers", liveUrl: null,
    figmaUrl: "https://figma.com/placeholder/edxplore",
    loomUrl: "https://loom.com/placeholder/edxplore",
    mandate: "Design India's leading EdTech skilling platform admin panel end-to-end — and simultaneously lead a 5-person junior development team — delivering multi-role institute management, 8-step onboarding wizard, course publishing, and B2B SaaS subscription billing.",
    shortDescription: "Sole designer (93 screens) and frontend engineering lead (5 junior devs) for EdXplore's multi-portal EdTech platform — 4-role RBAC, 8-step institute onboarding wizard, 5-state content lifecycle, B2B SaaS billing.",
    problem: "India's leading skilling platform had no unified admin system — institute approvals happened over email, course management was across disconnected tools, and no role-based interface separated Super Admin from Content Admin from Partner operations.",

    platformScopeTitle: "4 portals. 1 engineering team. Dual-role ownership.",
    platformScopeSubtitle: "Sole designer on both admin panels. Frontend engineering lead directing 5 junior developers across the full 4-portal system.",
    platformSurfaces: [
      { name: "Admin Panel (Desktop)", audience: "Platform Administrators",            screens: 73, designOwnership: "Full", devOwnership: "Full",     badge: "Primary",    note: "End-to-end solo ownership — design, React implementation, and QA" },
      { name: "Admin Panel (Mobile)",  audience: "Field Officers — on-site approvals", screens: 20, designOwnership: "Full", devOwnership: "Full",     badge: "Primary",    note: "Mobile-first experience designed for one-handed field use" },
      { name: "User-Facing Portal",    audience: "Students discovering institutes",    screens: 16, designOwnership: "None", devOwnership: "Led Team",  badge: "Led Team",   note: "Design by another Zerozilla designer — Tabrez led 5 devs on implementation" },
      { name: "Platform Homepage",     audience: "New visitors",                       screens: 1,  designOwnership: "None", devOwnership: "Led Team",  badge: "Led Team",   note: "Design by another Zerozilla designer — Tabrez led team implementation" },
    ],
    ownershipMatrix: {
      design:      { value: 85,  note: "Admin panels (93 screens) fully owned — user portal designed by another Zerozilla team member" },
      development: { value: 90,  note: "Admin panel: sole developer. User portal + homepage: led 5 junior developers" },
      research:    { value: 100, note: "8 administrator user interviews, competitive audit, and 8-step onboarding UX research" },
    },

    problemFrame: {
      statement: "500 institutes. Managed over email. No audit trail.",
      statementAccent: "India's leading skilling platform was approving training institutes via email threads.",
      context: "EdXplore managed hundreds of verified training institutes, trending courses, and B2B subscriber accounts — all through email chains, spreadsheets, and a basic CMS. Institute onboarding required 8 stages of data collection with no structured flow. Admin users had different operational needs but no RBAC system.",
      painpoints: [
        { title: "No structured institute onboarding", desc: "Institute approval required collecting Profile, Business Details, Staff, Centres, Financials, Documents, Listing, and Consent via email — 8 data categories, no form flow.", severity: "critical" },
        { title: "No role-based access control",        desc: "Super Admin, Admin, Content Admin, Partner — all using the same interface. Financial data visible to content editors.", severity: "critical" },
        { title: "No content lifecycle system",         desc: "Course and institute content had no approval workflow — published, pending, draft, and rejected states managed via email.", severity: "high" },
        { title: "No mobile admin for field officers",  desc: "Field officers visiting institutes on-site had no mobile interface — all deferred to desktop back at the office.", severity: "high" },
      ],
      auditItems: [
        { icon: "fa fa-envelope", title: "Email-based institute approval",  body: "No structured intake form, no audit trail, no status visibility for institute applicants or admin reviewers.", badge: "Process Gap"   },
        { icon: "fa fa-shield",   title: "Flat permission model",          body: "Content Admin and Super Admin saw identical navigation with identical action capabilities.", badge: "RBAC Gap"       },
        { icon: "fa fa-refresh",  title: "No content state management",    body: "Published content and draft content looked identical to admins — no visual differentiation between live, pending, and rejected.", badge: "Workflow Gap"  },
      ],
      solutionBridge: {
        icon: "fa fa-graduation-cap",
        title: "Our approach: Wizard, RBAC, and lifecycle in 3 months",
        body: "8-step institute onboarding wizard, 4-role RBAC with adaptive sidebar navigation, 5-state content lifecycle (Published → Approval Pending → Verification Pending → Update Pending → Drafts), and a mobile admin panel for field officers. Simultaneously led 5 junior developers implementing the full 4-portal system.",
      },
    },

    process: [
      { heading: "User Research",          body: "8 administrator interviews — mapped daily workflows: institute onboarding, course publishing, subscription management, and field officer tasks." },
      { heading: "RBAC Architecture",      body: "Defined 4 roles (Super Admin, Admin, Content Admin, Partner) with permission matrices. Sidebar navigation adapts per role." },
      { heading: "8-Step Wizard Design",   body: "Profile → Business Details → Staff → Centres → Financials → Documents → Institute Listing → Consent. Independent validation, partial-save, and resumable progress per step." },
      { heading: "93-Screen System",       body: "Admin Panel Desktop (73) + Mobile (20). Content lifecycle, bulk CSV import with error preview, data tables, Razorpay subscription billing, report generation." },
      { heading: "Engineering Leadership", body: "Led 5 junior developers on the user portal and homepage. Code reviews, architecture decisions, sprint planning — while solo-building the admin panel simultaneously." },
    ],

    designPrinciples: {
      title: "Design for the admin who knows what institute onboarding costs",
      subtitle: "Every screen decision was tested against the real operational cost of getting it wrong at scale.",
      items: [
        { title: "Wizard beats form",               desc: "8-stage onboarding as one long form would have 40%+ abandonment. Progressive disclosure across 8 steps with partial save makes complex data collection manageable.", tag: "Progressive Disclosure" },
        { title: "RBAC as information architecture", desc: "Each role's sidebar isn't a permission flag on the same menu — it's a distinct information architecture. Super Admin and Content Admin need different mental models.", tag: "RBAC Design"            },
        { title: "5 content states, all visible",   desc: "Published, Approval Pending, Verification Pending, Update Pending, Drafts — each with distinct visual status and clear next action. Admins should never need to ask 'what's the status?'", tag: "Status Design"        },
        { title: "Design and engineering together",  desc: "Leading 5 junior devs while solo-designing meant every design decision had to be immediately translatable to React 18 + MUI v5. Design-engineer fluency was the job.", tag: "UX Engineering"        },
      ],
      closingQuote: "Leading a junior dev team while designing solo is its own design problem. Every decision has two audiences: the admin user and the developer implementing it.",
    },

    complexitySignals: [
      { icon: "fa fa-users",    title: "First confirmed engineering leadership", body: "Sole designer on the admin panels AND frontend engineering lead directing 5 junior developers on the user portal — context-switching between design critique and code review daily." },
      { icon: "fa fa-shield",   title: "Multi-role RBAC system",                body: "Super Admin, Admin, Content Admin, and Partner — each with adaptive sidebar navigation and scoped action set. A single mis-permission was a live platform risk." },
      { icon: "fa fa-list-ol",  title: "8-step institute onboarding wizard",    body: "Profile → Business Details → Staff → Centres → Financials → Documents → Institute Listing → Consent — with independent validation, partial-save, and resumable progress." },
      { icon: "fa fa-refresh",  title: "5-state content lifecycle",             body: "Published → Approval Pending → Verification Pending → Update Pending → Drafts — state transition rules, audit trail, and notification triggers per path." },
      { icon: "fa fa-upload",   title: "Bulk CSV import with error-row preview",body: "Importing 500+ institute records: parse → highlight error rows inline → All/With Errors/Without filter tabs → confirm → import." },
    ],
    complexityCallout: "Solo designer. Engineering team lead. Four portals. Three months. Shipped to India's leading B2B EdTech platform.",

    outcome: "Delivered EdXplore admin panel (93 screens) and led frontend engineering for the full 4-portal system — 8-step wizard, 4-role RBAC, 5-state content lifecycle, mobile field officer panel — within a 3-month agency engagement.",
    metrics: [
      { label: "Screens designed (admin)", value: "93"     }, { label: "Portals in system", value: "4"      },
      { label: "Dev team size",            value: "5 devs" }, { label: "Wizard steps",      value: "8"      },
    ],
    learnings: [
      { title: "Engineering leadership is a design problem", body: "Directing 5 junior devs while solo designing required constant translation between design intent and implementation reality. The skill is knowing which design decisions are negotiable under engineering constraints." },
      { title: "Validate data models before designing screens", body: "The institute table was redesigned twice after discovering the backend data model didn't support some filter combinations. API contract before screen contract." },
    ],

    showcase: {
      screens: [
        { image: ImageHelper.EdXploreAdminPanel,              label: "Admin Panel Desktop" },
        { image: ImageHelper.EdXploreAdminPanelMobileVersion, label: "Admin Panel Mobile"  },
        { image: ImageHelper.EdXploreHeaderRevamp,            label: "Header Revamp"        },
      ],
      screensTitle: "Desktop + Mobile Admin Panel", screensSubtitle: "93 screens designed solo — 73 desktop + 20 mobile admin.",
      features: [
        { icon: "fa fa-list-ol",     title: "8-Step Institute Onboarding", body: "Profile → Business → Staff → Centres → Financials → Documents → Listing → Consent — partial-save and resumable progress per step.", tag: "Core Feature"    },
        { icon: "fa fa-shield",      title: "4-Role RBAC Navigation",      body: "Super Admin, Admin, Content Admin, Partner — each with a distinct adaptive sidebar. RBAC as information architecture, not a permission flag.", tag: "Admin UX"        },
        { icon: "fa fa-refresh",     title: "5-State Content Lifecycle",   body: "Published → Approval Pending → Verification Pending → Update Pending → Drafts — visual differentiation and next-action CTAs per state.", tag: "Workflow Design"  },
        { icon: "fa fa-upload",      title: "Bulk CSV Import",             body: "Drag-and-drop → parse → error-row highlight inline → All/With Errors/Without filter → confirm → import. Handles 500+ institute records.", tag: "Enterprise UX"   },
      ],
      featuresTitle: "Admin panel capabilities",
      designSystem: {
        projectName: "EdXplore",
        colors: [
          { name: "Primary Blue", hex: "#0378b8" }, { name: "Blue Light",  hex: "#62bdfc" },
          { name: "Surface",      hex: "#F9F9FF" }, { name: "Text Dark",   hex: "#222222" },
          { name: "Success",      hex: "#28c840" }, { name: "Warning",     hex: "#febc2e" },
          { name: "Error",        hex: "#ff5f57" }, { name: "Border",      hex: "#E0E0E0" },
        ],
        typography: [
          { label: "H1",   size: "26px", weight: 700, sample: "Institute Dashboard"    },
          { label: "H2",   size: "20px", weight: 600, sample: "Manage Institutes"      },
          { label: "Body", size: "14px", weight: 400, sample: "500 institutes enrolled"},
          { label: "Label",size: "10px", weight: 700, sample: "STATUS · PENDING"       },
        ],
        components: true,
      },
      userFlow: [
        { icon: "fa fa-sign-in",    label: "Admin Login",    sub: "Role-based SSO",  type: "active" },
        { icon: "fa fa-university", label: "Institute List", sub: "500+ records",    type: "active" },
        { icon: "fa fa-eye",        label: "Review Profile", sub: "8-step data",     type: "active" },
        { icon: "fa fa-check",      label: "Approve/Reject", sub: "Instant update",  type: "active" },
        { icon: "fa fa-envelope",   label: "Auto-Notify",    sub: "Email triggered", type: "active" },
      ],
      userFlowTitle: "Institute approval flow",
    },

    techShowcase: {
      stackGroups: [
        { category: "Design", items: [{ name: "Figma", faIcon: "fa fa-pencil-square-o" }, { name: "Notion", faIcon: "fa fa-book" }] },
        { category: "Frontend", items: [{ name: "React 18", icon: ImageHelper.ReactIcon }, { name: "TypeScript", icon: ImageHelper.TypescriptIcon }, { name: "MUI v5", icon: ImageHelper.MuiIcon }, { name: "styled-components", icon: ImageHelper.CssIcon }] },
      ],
      stackTitle: "Tools & technologies",
      roles: [
        { title: "Admin Panel Designer + Developer", body: "Sole designer and developer for 93-screen admin panel (desktop + mobile). Full ownership from user research through React 18 implementation and QA.", tags: ["Figma", "React 18", "TypeScript", "MUI v5"] },
        { title: "Frontend Engineering Lead",        body: "Led 5 junior developers implementing the user portal and homepage — code review, architectural decisions, sprint planning, and unblocking.", tags: ["Team Leadership", "Code Review", "React 18"] },
      ],
      rolesTitle: "Dual-role ownership",
      perfStats: [
        { value: "93",  suffix: "",      label: "Screens designed (admin)" }, { value: "4",   suffix: "",      label: "Portals in system" },
        { value: "5",   suffix: " devs", label: "Team led"                 }, { value: "8",   suffix: "",      label: "Wizard steps"      },
      ],
      perfTitle: "Project at a glance",
      timeline: [
        { date: "Month 1",   title: "Research + Admin Panel Design",  body: "8 admin interviews, RBAC architecture, 8-step wizard UX, content lifecycle. 73 desktop screens designed." },
        { date: "Month 2",   title: "Mobile Admin + Engineering Start",body: "20 mobile admin screens. Led junior devs on user portal setup. Began admin panel React implementation." },
        { date: "Month 3",   title: "Full Engineering + QA",          body: "Admin panel: completed React 18 solo. User portal: led team to delivery. QA across all 4 portals." },
      ],
      timelineTitle: "3 months: research through 4-portal delivery",
    },

    coverImage: ImageHelper.EdXploreAdminPanel,
    coverImageGrid: ImageHelper.EdXploreAdminPanelGrid,
    gallery: [ImageHelper.EdXploreAdminPanel, ImageHelper.EdXploreAdminPanelMobileVersion],
    tools: ["Figma", "React 18", "TypeScript", "MUI v5", "styled-components"],
    figmaEmbed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FSlofBkzRyGfy7lMBB0CaQc%2FEdXplore-Admin-Panel%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DvqoFr3c4I7uqGycb-1",
    prevSlug: "menuonline", nextSlug: "meco-motorsports",
  },

  /* ── cs09 · MECO Motorsports ────────────────────────────────── */
  {
    id: "cs09", title: "MECO Motorsports", slug: "meco-motorsports",
    category: "Web Design + Frontend Engineering",
    tags: ["Motorsports", "React", "Greenfield", "Live", "Design + Code"],
    year: "2023", role: "Sole Designer + Sole Frontend Engineer", duration: "2–3 months",

    engagementType: "Agency", clientGeography: "India",
    domain: "Motorsports", deploymentStatus: "Live",
    totalScreens: 33, teamComposition: "Solo — Design + Engineering", liveUrl: "https://meco.placeholder.com",
    figmaUrl: "https://figma.com/placeholder/meco",
    loomUrl: "https://loom.com/placeholder/meco",
    mandate: "Design and build the complete digital presence for India's premier motorsport organisation from scratch — visual identity system, 33 production screens across 10+ page types, and full React.js frontend implementation shipped to a live domain.",
    shortDescription: "Complete digital presence for India's premier motorsport organisation — designed from a 3-colour brief (red, black, white) into a full visual system, 33 screens across 10+ page types, and React.js implementation live at mecomotorsports.co.in.",
    problem: "MECO had no unified digital presence. Event information lived across PDFs and social media posts. Potential sponsors had no online destination. Participants couldn't find race registration. The brand didn't reflect the scale of India's premier motorsport organisation.",

    problemFrame: {
      statement: "India's biggest motorsports company. No digital home.",
      statementAccent: "Sponsors, fans, and race participants had nowhere to go — and the brand looked like it.",
      context: "MECO owned premier racing tracks, organised national championships, and managed top racing teams — but their digital presence was PDFs, Instagram posts, and email blasts. Potential sponsors couldn't find event details. Participants couldn't register online. The brand didn't match the product.",
      painpoints: [
        { title: "No unified digital presence",     desc: "Event details were split across 5 channels — Facebook, PDFs, WhatsApp, email, and a broken website from 2+ years ago.", severity: "critical" },
        { title: "Sponsor acquisition was manual",  desc: "Sponsorship packages went out as Word documents via email. No online portfolio, no credibility anchor for potential sponsors.", severity: "critical" },
        { title: "Brand didn't communicate premium",desc: "Existing visuals were inconsistent and didn't reflect the scale of MECO's national championships.", severity: "high" },
        { title: "Multi-audience, one channel",     desc: "Racers, parents of junior drivers, corporate event bookers, and media all needed different information — pushed through Instagram.", severity: "high" },
      ],
      auditItems: [
        { icon: "fa fa-globe",       title: "Broken site, 2+ years old",    body: "The existing MECO website was non-functional and had no mobile layout — not updated since before the company's national expansion.", badge: "Digital Presence" },
        { icon: "fa fa-handshake-o", title: "No sponsor anchor online",     body: "Potential sponsors received Word documents. No online track record, no event history visible at a URL.", badge: "Conversion"      },
        { icon: "fa fa-paint-brush", title: "Inconsistent brand identity",  body: "4 different logo versions in circulation. No typography system, no documented brand colours.", badge: "Brand System"    },
      ],
      solutionBridge: {
        icon: "fa fa-flag-checkered",
        title: "Our approach: Build a brand experience — not just a website",
        body: "Started by establishing a visual language from the 3-colour brief (red, black, white) — tyre tread motifs, chevron CTAs, racing flag grid elements, speed-motion typography. Structured the site around 3 audiences: racers (events/registration), corporates (tracks/booking), and media (press/gallery). 33 screens. 10+ page types. React.js. Live.",
      },
    },

    process: [
      { heading: "Domain Research",         body: "Self-directed research into MECO's event history, Indian motorsport calendar, and international motorsport sites (F1, MRF, FMSCI). No precedent at the agency for this domain." },
      { heading: "Visual Language Design",  body: "Brand system from 3-colour brief: tyre tread grid backgrounds, chevron CTAs, racing flag border elements, speed-motion typography. V1 delivered and iterated to V2." },
      { heading: "Multi-Audience IA",       body: "Site architecture for 4 audiences: racing enthusiasts (events/results), parents of junior drivers (academy/safety), corporate bookers (tracks/events), media (press/gallery)." },
      { heading: "33 Screens, 10+ Pages",   body: "Homepage, About, Academy (Karting + Racing), Team, Tracks (3 facilities + pricing), Products (6 sub-pages), Events, Gallery, Documentary, Press Release, Contact." },
      { heading: "React Implementation",    body: "Sole frontend engineer. React.js + Material UI + custom CSS animations. Counter animations, sliding hero banners, animated newsfeed, micro-interactions. Shipped to mecomotorsports.co.in." },
    ],

    designPrinciples: {
      title: "Brand first. Website second. Racing speed always.",
      subtitle: "A motorsports brand that looks slow online has already lost. Every decision communicated speed, prestige, and credibility.",
      items: [
        { title: "First impression = authority",      desc: "The hero section had one job: make MECO look like the most credible motorsports brand in India within 3 seconds. Dark, cinematic, large typography.", tag: "Brand Strategy"       },
        { title: "Conversion over content",           desc: "Every page had a single primary CTA. Sponsor page → Contact. Events → Register. Tracks → Visit. No page was built just to have content.", tag: "Conversion Design"    },
        { title: "Domain research before brief",      desc: "No motorsport web precedent at the agency meant building the brief from domain research. The chevron motifs and tyre tread grids came from studying the sport, not the client doc.", tag: "Research-First Design" },
        { title: "V1 to V2 without scope extension", desc: "Client brief evolved mid-project. V1 delivered then revised to V2 — refined typography, enhanced animation system — within the original timeline.", tag: "Iterative Design"     },
      ],
      closingQuote: "A motorsports brand that looks slow online is already losing. Every pixel should communicate speed.",
    },

    complexitySignals: [
      { icon: "fa fa-users",          title: "Multi-audience single-site architecture", body: "Racers, parents, corporate event bookers, and media — all landing on the same site. IA serves each without fragmenting the experience." },
      { icon: "fa fa-flag-checkered", title: "Greenfield with no domain precedent",     body: "No existing site, no brand assets, no motorsport web precedent at the agency. Every visual element came from domain research — tyre tread motifs, chevron CTAs, racing flag grids." },
      { icon: "fa fa-code",           title: "Design-to-production in one role",        body: "Sole designer and sole React engineer. Figma and the codebase stayed in sync with no handoff gap — every component-level design decision mapped directly to implementation." },
      { icon: "fa fa-refresh",        title: "V1 to V2 without timeline extension",     body: "Client brief evolved mid-project. V1 delivered then revised to V2 with refined typography, enhanced animation, and restructured event pages — within the original timeline." },
    ],
    complexityCallout: "One person. No domain precedent. 33 screens designed and shipped to a live production domain.",

    outcome: "Delivered India's premier motorsport organisation's complete digital presence — 33 screens, visual brand system from a 3-colour brief, and full React.js implementation live at mecomotorsports.co.in.",
    metrics: [
      { label: "Screens designed",  value: "33"   }, { label: "Page types", value: "10+"  },
      { label: "Design phases",     value: "2"    }, { label: "Status",     value: "Live" },
    ],
    learnings: [
      { title: "Moodboard alignment before design execution", body: "V1→V2 rework came from visual expectation misalignment. A structured moodboard session in week 1 would have prevented one full revision cycle." },
      { title: "Content-first for event-heavy sites", body: "Several event pages were designed before receiving final copy and race dates. Real content reshaped layouts. Content-first is not optional for sites where dates and results are the core offering." },
    ],

    showcase: {
      beforeAfter: [
        {
          context: "Homepage — Design Evolution",
          before: { image: ImageHelper.MecoWebUi,      caption: "V1 Concept — bold typography, dark-first aesthetic, speed-kinetic visual language." },
          after:  { image: ImageHelper.MecoFinalWebUi, caption: "V2 Final — refined layout, cinematic hero, enhanced animation system, production-ready." },
        },
      ],
      screens: [
        { image: ImageHelper.MecoWebUi,      label: "V1 Concept"  },
        { image: ImageHelper.MecoFinalWebUi, label: "V2 Final"    },
      ],
      screensTitle: "V1 → V2 design evolution", screensSubtitle: "Two complete design phases — concept exploration to production-ready final.",
      features: [
        { icon: "fa fa-flag-checkered", title: "Cinematic Hero Section",     body: "Full-bleed dark hero with speed-motion typography and high-contrast CTA — communicates authority instantly.", tag: "Visual Design"     },
        { icon: "fa fa-calendar",       title: "Events & Championships Hub", body: "Structured event listing replacing scattered PDFs and social posts — race calendar, results, and standings.", tag: "Content Architecture" },
        { icon: "fa fa-handshake-o",    title: "Sponsorship Section",        body: "Tiered sponsorship packages as a scannable comparison — designed to convert on first scroll without a PDF send.", tag: "Conversion Design"  },
        { icon: "fa fa-graduation-cap", title: "Racing Academy Pages",       body: "Karting and racing programme pages with age groups, safety information, and enrolment CTAs for parents and junior driver prospects.", tag: "Audience Design"   },
      ],
      featuresTitle: "What was built",
      designSystem: {
        projectName: "MECO Motorsports",
        colors: [
          { name: "Racing Red",    hex: "#E53935" }, { name: "Racing Black", hex: "#0A0A0A" },
          { name: "Speed White",   hex: "#FFFFFF" }, { name: "Surface Dark", hex: "#111111" },
          { name: "Accent Gold",   hex: "#FFD600" }, { name: "Text Muted",   hex: "#555555" },
        ],
        typography: [
          { label: "Hero",  size: "52px", weight: 800, sample: "INDIA RACING SERIES"    },
          { label: "H2",    size: "32px", weight: 700, sample: "Championship 2023"      },
          { label: "Body",  size: "15px", weight: 400, sample: "India's premier tracks" },
          { label: "Label", size: "10px", weight: 700, sample: "LIVE EVENT · OPEN"     },
        ],
        components: true,
      },
      userFlow: [
        { icon: "fa fa-home",        label: "Homepage",    sub: "Brand intro",     type: "active" },
        { icon: "fa fa-calendar",    label: "Events",      sub: "Race calendar",   type: "active" },
        { icon: "fa fa-trophy",      label: "Championship",sub: "Standings",       type: "active" },
        { icon: "fa fa-handshake-o", label: "Sponsorship", sub: "Tier comparison", type: "active" },
        { icon: "fa fa-envelope",    label: "Contact",     sub: "CTA conversion",  type: "active" },
      ],
      userFlowTitle: "Corporate sponsor journey",
    },

    techShowcase: {
      stackGroups: [
        { category: "Design", items: [{ name: "Figma", faIcon: "fa fa-pencil-square-o" }, { name: "FigJam", faIcon: "fa fa-comments" }] },
        { category: "Frontend", items: [{ name: "React.js", icon: ImageHelper.ReactIcon }, { name: "Material UI", icon: ImageHelper.MuiIcon }, { name: "JavaScript", icon: ImageHelper.JavaScriptIcon }, { name: "CSS3", icon: ImageHelper.CssIcon }] },
      ],
      stackTitle: "Tools & technologies",
      roles: [
        { title: "Sole Visual Designer",     body: "Brand system from 3-colour brief, visual language, tyre tread motifs, chevron CTAs, speed-motion typography. V1 concept through V2 final production design.", tags: ["Figma", "Brand Identity", "Visual Design"] },
        { title: "Sole Frontend Engineer",   body: "Full React.js + Material UI implementation. Counter animations, sliding hero, animated newsfeed, micro-interactions. Shipped to mecomotorsports.co.in.", tags: ["React.js", "Material UI", "CSS Animations"] },
      ],
      rolesTitle: "One person. All of it.",
      perfStats: [
        { value: "33",   suffix: "",  label: "Screens designed" }, { value: "10",  suffix: "+", label: "Page types"      },
        { value: "2",    suffix: "",  label: "Design phases"    }, { value: "Live",suffix: "",  label: "Status"          },
      ],
      perfTitle: "Project at a glance",
      timeline: [
        { date: "Week 1–3",  title: "Domain Research + Visual Language", body: "MECO history, Indian motorsport research, Autixir reference study. Brand system: palette, tyre tread motifs, chevron CTAs." },
        { date: "Week 4–6",  title: "V1 Concept Design",                 body: "Homepage, Tracks, Events, Academy, Championship — 29 screens. Client delivery and review." },
        { date: "Week 7–12", title: "V2 Final Design + React Launch",    body: "V2 refinement (33 screens final). Full React.js build with CSS animations. Shipped to mecomotorsports.co.in." },
      ],
      timelineTitle: "2–3 months from brief to live domain",
    },

    coverImage: ImageHelper.MecoFinalWebUi,
    coverImageGrid: ImageHelper.MecoFinalWebUiGrid,
    gallery: [ImageHelper.MecoWebUi, ImageHelper.MecoFinalWebUi],
    tools: ["Figma", "FigJam", "React.js", "Material UI"],
    figmaEmbed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FRhxolZEwe1bjcxfIXgnc7A%2FMeco-Web-UiUx-Final-Design-by-Tabrez-Dal%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3D0uXfBHcLc4zqsbK3-1",
    prevSlug: "edxplore", nextSlug: "hotel-resort-management",
  },


  /* ── cs10 · Hotel & Resort Management ───────────────────── */
  {
    id: "cs10", title: "Hotel & Resort Management", slug: "hotel-resort-management",
    category: "Product Design — Hospitality Marketplace",
    tags: ["Hospitality", "Marketplace", "India Market", "UPI", "GST"],
    year: "2023", role: "Sole Product Designer", duration: "1–2 months",

    engagementType: "Agency", clientGeography: "India",
    domain: "Hospitality / Travel", deploymentStatus: "Delivered",
    totalScreens: 45, teamComposition: "Solo Designer (Design only)", liveUrl: null,
    figmaUrl: "https://figma.com/placeholder/hotel-resort",
    loomUrl: "https://loom.com/placeholder/hotel-resort",
    mandate: "Design a B2C hospitality marketplace — discovery, search, multi-property booking across 6 property types, 4-step checkout with Indian payment methods (UPI, PhonePe, Google Pay), GST transparency, dining, activities, and B2B advertising — adapted for the Indian market.",
    shortDescription: "India-focused hospitality marketplace — 45 screens covering property discovery across 6 categories, 4-step booking funnel with GST transparency and UPI integration, dining, activities, and B2B advertising. Designed solo for a confidential Zerozilla client.",
    problem: "The Indian short-break hospitality market lacked a unified platform combining hotel bookings, resort stays, villa accommodation, activity booking, and dining — under one brand, with proper Indian payment methods, GST transparency, and UPI support.",

    problemFrame: {
      statement: "6 hospitality categories. No unified booking platform for India.",
      statementAccent: "Hotels, resorts, villas, activities, dining, and courses — each needed separate apps in the Indian short-break market.",
      context: "India's short-break travel market was fragmented: OYO for budget hotels, MakeMyTrip for packages, separate apps for activities. The client wanted a single platform serving leisure travellers — with INR pricing, UPI/PhonePe/Google Pay, and GST breakdowns as table stakes.",
      painpoints: [
        { title: "No unified short-break platform",     desc: "Booking a resort, activity, and dining for a weekend required 3 separate platforms — no combined checkout, no shared guest profile.", severity: "critical" },
        { title: "Indian payment methods not standard", desc: "UPI, PhonePe, Google Pay, Net Banking — dominant in India but treated as secondary options in most hospitality platforms.", severity: "high" },
        { title: "GST transparency required",           desc: "Indian B2C bookings require visible GST breakdown in checkout — legally required and a trust signal for consumers.", severity: "high" },
        { title: "Activities had no discovery layer",   desc: "Leisure travellers planning a resort weekend also want activities and dining — these had no discoverable category in the same platform.", severity: "medium" },
      ],
      auditItems: [
        { icon: "fa fa-rupee",  title: "INR pricing not properly handled", body: "Reference platforms used international models. INR, GST display, and UPI are table stakes for Indian B2C.", badge: "Market Fit"    },
        { icon: "fa fa-hotel",  title: "6 property types, no unified search", body: "Hotels, Resorts, Villas, Activities, Courses, More — no shared search and filter architecture.", badge: "IA Gap"         },
        { icon: "fa fa-receipt",title: "No GST transparency",               body: "Visible GST breakdown in checkout is legally required and a trust signal — missing from reference models.", badge: "Compliance Gap" },
      ],
      solutionBridge: {
        icon: "fa fa-hotel",
        title: "Our approach: One platform for the Indian weekend getaway",
        body: "Unified discovery layer with search across 6 property types (Hotels, Resorts, Villas, Activities, Courses, More). 4-step booking funnel (Room Selection → Guest Details → Special Requests → Payment) with coupon engine, GST transparency, and UPI/PhonePe/Google Pay/Net Banking. Cross-sell between bookings, dining, and activities.",
      },
    },

    process: [
      { heading: "Platform Architecture",     body: "Mapped 6 property types, booking funnel stages, account management flows, dining and activities cross-sell, and B2B advertising section." },
      { heading: "Discovery + Search Design", body: "Homepage hero with unified search (destination, dates, guests), 6-tab listing grid, date+guest filter, availability-state cards." },
      { heading: "4-Step Booking Funnel",    body: "Room Selection + coupon → Guest Details → Special Requests → Payment (GST breakdown + UPI/PhonePe/Google Pay/Net Banking/Card). Success, failure, and partial payment states." },
      { heading: "Full Platform Design",     body: "45 screens: Discovery, Search, Property Detail (anchor-link sub-nav, 10+ sections), Booking funnel, Auth (Sign In, Sign Up, Guest Checkout), Dining, Activities, Account Management, B2B Advertise." },
    ],

    designPrinciples: {
      title: "The Indian short-break deserves a native experience",
      subtitle: "UPI, GST, INR — not afterthoughts. First-class decisions that communicate platform credibility to Indian consumers.",
      items: [
        { title: "Indian payment methods as trust signals", desc: "UPI and PhonePe aren't niche options in India — they're the primary method for 60%+ of digital transactions. Their presence in checkout communicates 'built for India'.", tag: "Market Adaptation" },
        { title: "GST transparency = booking confidence", desc: "Showing GST breakdown in the booking summary isn't just a legal requirement — it's a trust signal. Indian consumers are trained to expect it and suspicious when it's absent.", tag: "Trust Design"       },
        { title: "Cross-sell earns more than separate tabs", desc: "Property bookings that surface nearby dining and activities get higher booking value. The cross-sell architecture is designed as discovery — not upsell popups.", tag: "Revenue Design"    },
        { title: "Anchor-link navigation for long pages", desc: "A property detail page with 10+ sections (Rooms, Activities, Gallery, Reviews, Policies, Map) needed anchor-link sub-navigation — no pagination, no page loads, full scanning control.", tag: "Navigation UX"    },
      ],
      closingQuote: "A hospitality marketplace for India that ignores UPI, GST, and INR is a hospitality marketplace for someone else's market.",
    },

    complexitySignals: [
      { icon: "fa fa-hotel",        title: "6 property types in one search",       body: "Hotels, Resorts, Villas, Activities, Courses, More — unified search with shared filter system, tab-based listing grid, and availability-state cards." },
      { icon: "fa fa-shopping-cart",title: "4-step booking funnel with GST",       body: "Room Selection → Guest Details → Special Requests → Payment — coupon engine, availability-state detection, GST line-item breakdown, partial payment state." },
      { icon: "fa fa-inr",          title: "Indian payment method matrix",          body: "UPI (QR), PhonePe, Google Pay, Net Banking, Card — all first-class options in checkout with GST registration and tax compliance built in." },
      { icon: "fa fa-building",     title: "Property detail anchor-navigation",    body: "Single property detail page with 10+ content sections and anchor-link sub-nav (Overview, Rooms, Activities, Gallery, Reviews, Policies, Map) — no pagination." },
    ],
    complexityCallout: "45 screens. 6 property types. 4-step checkout. Indian payment methods. GST. Cross-sell architecture. Solo designer.",

    outcome: "Delivered a complete hospitality marketplace — 45 screens covering the full consumer journey from discovery through booking and checkout — adapted for the Indian market with INR, UPI, GST, and cross-category discovery.",
    metrics: [
      { label: "Screens designed",   value: "45"  }, { label: "Property types",  value: "6"   },
      { label: "Checkout steps",     value: "4"   }, { label: "Payment methods", value: "6+"  },
    ],
    learnings: [
      { title: "Payment method research is market research", body: "Understanding UPI, PhonePe, and GST requirements required researching Indian consumer behaviour and legal requirements — not just UX patterns. Market research and payment UX are the same conversation in Indian product design." },
    ],

    showcase: {
      screens: [{ image: ImageHelper.HotelResortManagement, label: "Platform Design" }],
      screensTitle: "45 screens", screensSubtitle: "India-market hospitality marketplace — 6 property types, 4-step booking, Indian payment methods.",
      features: [
        { icon: "fa fa-search",       title: "Unified Multi-Category Search",  body: "Hero search across Hotels, Resorts, Villas, Activities, Courses — date picker, guest count, destination — one query, 6 listing tabs.", tag: "Discovery UX"      },
        { icon: "fa fa-shopping-cart",title: "4-Step Booking Funnel",         body: "Room Selection + coupon → Guest Details → Special Requests → Payment (GST breakdown + UPI/PhonePe/Google Pay/Net Banking/Card).", tag: "Checkout UX"       },
        { icon: "fa fa-inr",          title: "Indian Payment Methods",        body: "UPI, PhonePe, Google Pay, Net Banking, Card — first-class options in checkout with GST line-item breakdown per Indian tax law.", tag: "Market Adaptation" },
        { icon: "fa fa-bullhorn",     title: "B2B Advertise With Us",         body: "Lead capture for property owners and activity providers — tiered feature listing and enquiry form for platform partnership.", tag: "B2B Revenue"       },
      ],
      featuresTitle: "Platform capabilities",
      designSystem: {
        projectName: "Hotel & Resort Management",
        colors: [
          { name: "Primary Blue", hex: "#0378b8" }, { name: "Blue Light",  hex: "#62bdfc" },
          { name: "Surface",      hex: "#F9F9FF" }, { name: "Text Dark",   hex: "#222222" },
          { name: "Success",      hex: "#28c840" }, { name: "Warning",     hex: "#febc2e" },
          { name: "Error",        hex: "#ff5f57" }, { name: "Border",      hex: "#E0E0E0" },
        ],
        typography: [
          { label: "H1",   size: "32px", weight: 700, sample: "Find Your Perfect Stay"   },
          { label: "H2",   size: "24px", weight: 600, sample: "Search Results"           },
          { label: "Body", size: "14px", weight: 400, sample: "₹4,500 / night (+ GST)"  },
          { label: "Label",size: "10px", weight: 700, sample: "BOOKING · CONFIRMED"      },
        ],
        components: true,
      },
      userFlow: [
        { icon: "fa fa-home",         label: "Discovery",       sub: "6 categories",   type: "active" },
        { icon: "fa fa-list",         label: "Search Results",  sub: "Filter + sort",  type: "active" },
        { icon: "fa fa-hotel",        label: "Property Detail", sub: "10+ sections",   type: "active" },
        { icon: "fa fa-inr",          label: "Payment",         sub: "UPI + GST",      type: "active" },
        { icon: "fa fa-check",        label: "Confirmation",    sub: "Booking success",type: "active" },
      ],
      userFlowTitle: "Core booking journey",
    },

    techShowcase: {
      stackGroups: [{ category: "Design", items: [{ name: "Figma", faIcon: "fa fa-pencil-square-o" }] }],
      stackTitle: "Design tools",
      roles: [{ title: "Sole Product Designer", body: "Platform architecture, 6-category discovery, 4-step booking funnel, Indian payment methods, dining and activities, B2B advertising. All 45 screens in Figma.", tags: ["Figma", "Marketplace Design", "India Market"] }],
      rolesTitle: "What I owned",
      perfStats: [
        { value: "45", suffix: "",  label: "Screens designed"    }, { value: "6",  suffix: "",  label: "Property categories" },
        { value: "4",  suffix: "",  label: "Checkout steps"      }, { value: "6",  suffix: "+", label: "Payment methods"     },
      ],
      perfTitle: "Project scope",
      timeline: [
        { date: "Month 1",  title: "Architecture + Discovery",  body: "Scope mapping, 6-category IA, homepage, search and listing, property detail page (10+ anchor sections)." },
        { date: "Month 2",  title: "Booking Funnel + Full System", body: "4-step checkout (GST + UPI), auth flows, dining, activities, account management, booking states, B2B advertising." },
      ],
      timelineTitle: "1–2 months: architecture to full platform",
    },

    coverImage: ImageHelper.HotelResortManagement,
    coverImageGrid: ImageHelper.HotelResortManagementGrid,
    gallery: [ImageHelper.HotelResortManagement],
    tools: ["Figma"],
    figmaEmbed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fmnhx8mn78DZByk1jIVfdG9%2FHotel-%2526-Resort-Management%3Ftype%3Ddesign%26node-id%3D2%253A2%26mode%3Ddesign%26t%3DGwoNfQcYYcekQc6j-1",
    prevSlug: "meco-motorsports", nextSlug: "asin-vault",
  },


  /* ── cs11 · ASIN Vault ────────────────────────────────────── */
  {
    id: "cs11", title: "ASIN Vault", slug: "asin-vault",
    category: "Chrome Extension Design + Engineering",
    tags: ["Chrome Extension", "Amazon FBA", "UK Client", "E-Commerce Analytics", "Design + Code"],
    year: "2024", role: "Solo UX Designer + Frontend Engineer", duration: "2 months",

    engagementType: "Freelance", clientGeography: "UK",
    domain: "E-Commerce / Amazon FBA Analytics", deploymentStatus: "Live",
    totalScreens: 14, teamComposition: "Solo — Design + Engineering", liveUrl: null,
    figmaUrl: "https://figma.com/placeholder/asin-vault",
    loomUrl: "https://loom.com/placeholder/asin-vault",
    mandate: "Design and build a commercial Chrome extension for Amazon FBA/FBM sellers — brand identity (3 logo variants), design system, 14 UI screens, and coded HTML/CSS/JS frontend packaged for Chrome Web Store distribution.",
    shortDescription: "Amazon seller analytics Chrome extension — brand identity, design system, 14 screens, and complete HTML/CSS/JS frontend — designed and built solo for a London client. Published commercially to the Chrome Web Store.",
    problem: "Amazon FBA/FBM sellers managing multi-ASIN catalogues had no browser-native tool to monitor Buy Box ownership, stock thresholds, and profitability margins in real time without leaving Amazon Seller Central.",

    problemFrame: {
      statement: "Amazon sellers can't see what matters — without leaving Amazon.",
      statementAccent: "Buy Box status, stock alerts, and profitability data were always three apps away.",
      context: "Amazon FBA/FBM sellers monitoring multi-ASIN lines faced fragmented data: Buy Box ownership in Seller Central, stock in inventory tools, profit in spreadsheets. The vision: a browser-layer companion surfacing critical signals while the seller is already in Seller Central.",
      painpoints: [
        { title: "No browser-native analytics layer",    desc: "Sellers had to leave Amazon Seller Central to check profitability, stock alerts, and Buy Box status — breaking their operational flow.", severity: "critical" },
        { title: "Multi-marketplace data was scattered", desc: "UK, US, Germany, and France marketplaces each required separate tool logins. No unified multi-marketplace view existed in the browser.", severity: "high" },
        { title: "No activation/licensing system",       desc: "A commercial SaaS extension requires access gating — activation codes, licensing, and subscription flow — not handled by default in Chrome extensions.", severity: "medium" },
      ],
      auditItems: [
        { icon: "fa fa-globe",    title: "Helium 10/Jungle Scout require app switch", body: "Existing tools need sellers to exit Amazon entirely to get analytics — the opposite of a browser companion.", badge: "Market Gap"      },
        { icon: "fa fa-map",      title: "No multi-marketplace unified view",         body: "UK, US, DE, FR Amazon marketplaces require separate monitoring — no cross-marketplace dashboard in the browser.", badge: "Feature Gap"    },
        { icon: "fa fa-lock",     title: "No SaaS access model for extensions",       body: "Chrome extensions don't have built-in billing — activation codes and licensing required custom design.", badge: "Product Design" },
      ],
      solutionBridge: {
        icon: "fa fa-amazon",
        title: "Our approach: Browser companion — not another SaaS tab",
        body: "Built ASIN Vault as a lightweight browser-layer tool: connects to Amazon SP-API, tracks Buy Box ownership and stock thresholds across UK/US/DE/FR, calculates FBA vs FBM profitability, and surfaces alerts without leaving Seller Central. Brand identity (3 logo variants), design system, 14 screens, complete HTML/CSS/JS build packaged for Chrome Web Store.",
      },
    },

    process: [
      { heading: "Market Research",              body: "Benchmarked Helium 10, Jungle Scout, FBA Multitool, and Keepa. Identified browser-native analytics as the key differentiator — lightweight companion vs full SaaS dashboard." },
      { heading: "Brand Identity",               body: "3 logo variants (primary, icon-only, reversed). Dark blue + gold color system. Typography for a B2B Amazon seller tool — professional, analytical aesthetic." },
      { heading: "Design System + 14 Screens",   body: "7 Figma component pages: UI Guidelines, Form Components, Buttons, Cards, Complex Components. 14 product screens: Dashboard, ASIN Tracker, Profit Calculator, Stock Alerts, SP-API Connection, Activation." },
      { heading: "HTML/CSS/JS Build + Packaging",body: "Full frontend: HTML, CSS, JavaScript. Chrome manifest configuration, popup architecture, local storage for settings. Packaged and verified for Chrome Web Store submission." },
    ],

    designPrinciples: {
      title: "Browser companion, not another SaaS tab",
      subtitle: "A Chrome extension popup is 400px wide. Every design decision is load-bearing.",
      items: [
        { title: "Data density in popup constraints", desc: "Fixed viewport constraints made every pixel load-bearing. ASIN data cards, stock alerts, and profit figures competed for the same space — no decorative room.", tag: "Constrained Design"   },
        { title: "Activation as product UX",         desc: "The activation/onboarding screen is the first impression of a paid product — it has to communicate value before asking for credentials.", tag: "Commercial Product UX" },
        { title: "Multi-marketplace by default",     desc: "UK, US, DE, FR — not buried in settings, but a first-class navigation dimension. International sellers are the core user, not an edge case.", tag: "User Precision"       },
      ],
      closingQuote: "A Chrome extension popup is 400px wide. Every design decision is load-bearing.",
    },

    complexitySignals: [
      { icon: "fa fa-amazon",      title: "Amazon domain expertise required",       body: "Buy Box mechanics, FBA vs FBM profit calculation, ASIN structure, SP-API connection — a complex e-commerce domain with specific data models and seller mental models." },
      { icon: "fa fa-puzzle-piece",title: "Chrome extension architecture",          body: "Manifest configuration, popup vs background script architecture, Chrome storage API, extension packaging — platform-specific engineering knowledge required." },
      { icon: "fa fa-lock",        title: "Activation/licensing system design",    body: "A commercial SaaS extension requires activation codes and access gating — custom UX design for a problem that standard app patterns don't address." },
      { icon: "fa fa-globe",       title: "4-marketplace SP-API architecture",     body: "UK, US, Germany, France — four Amazon marketplaces with separate API connections, separate ASIN catalogues, combined dashboard views." },
    ],
    complexityCallout: "Brand identity. Design system. 14 screens. Chrome extension. HTML/CSS/JS build. Published commercially. Solo. 2 months.",

    outcome: "Delivered complete commercial Chrome extension: brand identity, design system, 14 UI screens, and HTML/CSS/JS frontend. Client (AbstractTek Ltd, London) published to Chrome Web Store commercially post-delivery.",
    metrics: [
      { label: "UI screens",    value: "14"             }, { label: "Logo variants",  value: "3"   },
      { label: "Marketplaces",  value: "4"              }, { label: "Distribution",   value: "Chrome Web Store" },
    ],
    learnings: [
      { title: "Chrome extension constraints are a design system problem", body: "Fixed popup viewport and manifest restrictions made every design decision load-bearing. Constraints at this level require systems thinking, not screen-by-screen decisions." },
    ],

    showcase: {
      screensTitle: "14 screens", screensSubtitle: "Amazon seller analytics Chrome extension — brand identity, design system, HTML/CSS/JS build. Published to Chrome Web Store.",
      features: [
        { icon: "fa fa-amazon",     title: "Buy Box Tracking",             body: "Real-time Buy Box ownership monitoring per ASIN — price, seller, eligibility status, and win/loss trend.", tag: "Core Feature"     },
        { icon: "fa fa-calculator", title: "FBA vs FBM Profit Calculator", body: "Per-ASIN profitability comparing FBA fees vs FBM logistics — net margin, ROI, and breakeven price per unit.", tag: "Analytics"        },
        { icon: "fa fa-bell",       title: "Stock Threshold Alerts",       body: "Configurable stock warning thresholds — alerts before inventory runs out, with reorder point calculations.", tag: "Operational Tool" },
        { icon: "fa fa-lock",       title: "Activation / Licensing",       body: "Commercial access gate via activation code — first-impression UX for a paid product communicating value before authentication.", tag: "Commercial UX"    },
      ],
      featuresTitle: "Extension capabilities",
      designSystem: {
        projectName: "ASIN Vault",
        colors: [
          { name: "Primary Navy",  hex: "#1A1F36" }, { name: "Accent Gold",   hex: "#F4B942" },
          { name: "Surface Dark",  hex: "#252B48" }, { name: "Surface Light", hex: "#F5F7FA" },
          { name: "Success",       hex: "#10B981" }, { name: "Warning",       hex: "#F59E0B" },
          { name: "Error",         hex: "#EF4444" }, { name: "White",         hex: "#FFFFFF" },
        ],
        typography: [
          { label: "H1",   size: "18px", weight: 700, sample: "ASIN Dashboard"         },
          { label: "H2",   size: "14px", weight: 600, sample: "Buy Box Status"          },
          { label: "Body", size: "12px", weight: 400, sample: "B07XYZ · UK · Live"     },
          { label: "Label",size: "10px", weight: 700, sample: "BUY BOX · ACTIVE"       },
        ],
        components: true,
      },
      userFlow: [
        { icon: "fa fa-lock",      label: "Activation",  sub: "License code",       type: "active" },
        { icon: "fa fa-link",      label: "SP-API Setup",sub: "4 marketplaces",     type: "active" },
        { icon: "fa fa-amazon",    label: "Buy Box",     sub: "Real-time status",   type: "active" },
        { icon: "fa fa-bell",      label: "Stock Alerts",sub: "Threshold warnings", type: "active" },
        { icon: "fa fa-bar-chart", label: "Profit Calc", sub: "FBA vs FBM",         type: "active" },
      ],
      userFlowTitle: "Amazon seller workflow",
    },

    techShowcase: {
      stackGroups: [
        { category: "Design", items: [{ name: "Figma", faIcon: "fa fa-pencil-square-o" }] },
        { category: "Frontend", items: [{ name: "HTML5", icon: ImageHelper.HtmlIcon }, { name: "CSS3", icon: ImageHelper.CssIcon }, { name: "JavaScript", icon: ImageHelper.JavaScriptIcon }] },
      ],
      stackTitle: "Tools & technologies",
      roles: [{ title: "Solo UX Designer + Frontend Engineer", body: "Brand identity (3 logo variants), design system (7 Figma component pages), 14 product screens, complete HTML/CSS/JS Chrome extension build — packaged for Chrome Web Store.", tags: ["Figma", "HTML", "CSS", "JavaScript", "Chrome Extension"] }],
      rolesTitle: "End-to-end ownership",
      perfStats: [
        { value: "14",  suffix: "",  label: "UI screens"          }, { value: "3",   suffix: "",  label: "Logo variants"       },
        { value: "4",   suffix: "",  label: "Amazon marketplaces" }, { value: "100", suffix: "%", label: "Design + Dev owned"  },
      ],
      perfTitle: "Project at a glance",
      timeline: [
        { date: "Dec 2023", title: "Research + Brand + Design System", body: "Competitive analysis. 3 logo variants. 7-page component system in Figma." },
        { date: "Jan 2024", title: "14 Screens + Chrome Extension Build", body: "14 product screens. Full HTML/CSS/JS build, Chrome manifest, packaged for Web Store. Client delivery." },
      ],
      timelineTitle: "Dec 2023 – Jan 2024",
    },

    coverImage: null,
    gallery: [],
    tools: ["Figma", "HTML5", "CSS3", "JavaScript"],
    figmaEmbed: null,
    prevSlug: "hotel-resort-management", nextSlug: "mobiotics",
  },


  /* ── cs12 · Mobiotics ────────────────────────────────────── */
  /* NOTE: Design-only engagement — Zerozilla in-house designer held design.
     Tabrez's contribution: sole React 18 frontend engineer.              */
  {
    id: "cs12", title: "Mobiotics", slug: "mobiotics",
    category: "Frontend Engineering — Enterprise Marketing",
    tags: ["React 18", "OTT", "Enterprise", "Live", "Frontend Engineering"],
    year: "2023", role: "Sole Frontend Developer", duration: "2–3 months",

    engagementType: "Agency", clientGeography: "India",
    domain: "Media Tech / OTT Infrastructure", deploymentStatus: "Live",
    totalScreens: 22, teamComposition: "Solo Frontend Engineer (Design by Zerozilla designer)", liveUrl: "https://mobiotics.placeholder.com",
    figmaUrl: "https://figma.com/placeholder/mobiotics",
    loomUrl: "https://loom.com/placeholder/mobiotics",
    mandate: "Build the complete Mobiotics enterprise marketing website in React 18 — pixel-perfect implementation from Figma dev copy — 22 pages covering 9 OTT product lines, multi-persona B2B messaging, enterprise lead generation, and JSON-driven content management for client self-service post-handoff.",
    shortDescription: "Frontend engineering for Mobiotics' enterprise marketing website — 22 pages, 9 OTT product lines, React 18 + MUI v5. JSON content layer for client self-service. Live at mobiotics.com. Design by Zerozilla in-house designer; engineering solely by Tabrez.",
    problem: "Mobiotics needed a multi-product enterprise marketing website positioning 9 OTT product lines to multiple B2B buyer personas — broadcasters, pay-TV operators, telecoms, and media companies — with a content architecture that the Mobiotics team could self-manage post-handoff.",

    problemFrame: {
      statement: "9 OTT products. Multiple B2B buyer personas. Static website.",
      statementAccent: "A media tech company selling enterprise infrastructure to broadcasters in 30+ countries deserved an enterprise website.",
      context: "Mobiotics serves broadcasters, pay-TV operators, telecoms, and media companies with OTT infrastructure. Each of 9 product lines (vLive, vLite MOOC, Sounds, vApps, vDRM, vCMS, etc.) needed distinct landing pages with persona-specific messaging — and the team needed to update content post-launch without engineering support.",
      painpoints: [
        { title: "9 products, undifferentiated website",  desc: "vLive, vLite, vApps, vDRM — each targets different enterprise buyer personas but the existing site treated them as a feature list.", severity: "critical" },
        { title: "No self-service content layer",          desc: "Post-handoff content updates required re-engaging engineering — unsustainable for a company shipping product announcements regularly.", severity: "high" },
        { title: "Multi-persona messaging not structured", desc: "Broadcasters and telecoms buy OTT infrastructure differently — the site needed architecture for persona-targeted messaging.", severity: "high" },
      ],
      auditItems: [
        { icon: "fa fa-list",   title: "Product pages were feature dumps",    body: "Existing product pages listed capabilities without addressing buyer persona pain points.", badge: "Messaging Gap"    },
        { icon: "fa fa-wrench", title: "Content not self-serviceable",        body: "Every copy update required engineering involvement — not scalable for a company with active product marketing.", badge: "Maintenance Gap" },
      ],
      solutionBridge: {
        icon: "fa fa-code",
        title: "Engineering solution: JSON content layer + modular React architecture",
        body: "Built a JSON-driven content architecture where all product descriptions, feature lists, client logos, and page copy are stored in structured JSON files — allowing the Mobiotics team to update content post-handoff without engineering. Implemented 22 pages in React 18 + MUI v5 with EmailJS lead forms, Tawk.to live chat, Lottie animations, and a mid-project mega menu redesign delivered within timeline.",
      },
    },

    process: [
      { heading: "Figma-to-React Engineering", body: "Pixel-perfect React 18 implementation from Figma dev copy provided by Zerozilla in-house designer. Engineering translation, not design." },
      { heading: "JSON Content Architecture",   body: "Designed and implemented JSON content layer — all product names, descriptions, feature lists, client logos, and CTA text in structured JSON files for client self-service post-handoff." },
      { heading: "Third-Party Integrations",    body: "EmailJS (lead gen forms with Formik + Yup validation), Tawk.to (live chat widget), Lottie (hero animations), react-multi-carousel (client logo carousel), Google Analytics." },
      { heading: "Mid-Project Scope Change",    body: "4-panel mega menu redesigned mid-project at 80% completion — absorbed and delivered within original timeline." },
    ],

    designPrinciples: {
      title: "Engineering decisions that enable the design",
      subtitle: "No design ownership — but the JSON content layer was an engineering UX decision that made the whole product maintainable.",
      items: [
        { title: "JSON as content management", desc: "Storing all page copy in structured JSON files wasn't a technical requirement — it was a product decision that made the Mobiotics team self-sufficient after handoff. Engineering as product thinking.", tag: "Product Engineering" },
        { title: "Pixel-perfect as a professional standard", desc: "Implementing a Figma file created by another designer to exact spec requires discipline. Every spacing value, colour token, and interaction state was matched precisely.", tag: "Engineering Craft" },
        { title: "Scope change without scope extension", desc: "The mega menu redesign at 80% completion was absorbed without timeline extension — a project management and technical decision made simultaneously.", tag: "Professional Delivery" },
      ],
      closingQuote: "The JSON content layer was the most valuable thing I shipped on this project — not the code, the architecture decision.",
    },

    complexitySignals: [
      { icon: "fa fa-code",       title: "JSON content layer for client self-service", body: "All product descriptions, feature lists, and page copy stored in structured JSON — enabling client self-service content updates post-handoff with zero engineering involvement." },
      { icon: "fa fa-sitemap",    title: "9 OTT product lines, multi-persona IA",      body: "vLive, vLite MOOC, Sounds, vApps, vDRM, vCMS + 3 more — each with distinct landing pages, persona-targeted messaging, and product-specific feature architecture." },
      { icon: "fa fa-refresh",    title: "Mid-project scope change absorbed",           body: "4-panel mega menu redesigned at 80% completion without extending the original timeline — simultaneous technical and project management decision." },
      { icon: "fa fa-cogs",       title: "Third-party integration stack",               body: "EmailJS + Formik + Yup (lead forms), Tawk.to (live chat), Lottie (hero animations), react-multi-carousel — all integrated and configured from scratch." },
    ],
    complexityCallout: "22 pages. 9 OTT product lines. JSON content layer. React 18. Live at mobiotics.com. Engineering-only engagement.",

    outcome: "Delivered Mobiotics enterprise marketing website — 22 pages, React 18, JSON content layer enabling client self-service — live at mobiotics.com.",
    metrics: [
      { label: "Pages built",     value: "22"  }, { label: "OTT product lines", value: "9"    },
      { label: "Status",          value: "Live"}, { label: "Content model",     value: "JSON" },
    ],
    learnings: [
      { title: "Propose the JSON architecture, don't wait for it to be asked", body: "No one asked for a JSON content layer — it was an engineering decision made proactively. The best engineering contributions come from product thinking, not just task execution." },
    ],

    showcase: {
      screens: [{ image: ImageHelper.Web8, label: "Mobiotics Website" }],
      screensTitle: "22 pages", screensSubtitle: "Enterprise OTT marketing website — React 18, JSON content layer, live at mobiotics.com.",
      features: [
        { icon: "fa fa-file-code-o", title: "JSON Content Architecture",   body: "All product copy, feature lists, and client logos in structured JSON — client self-service content management post-handoff with zero engineering involvement.", tag: "Engineering UX"    },
        { icon: "fa fa-th-large",    title: "9 OTT Product Landing Pages", body: "vLive, vLite MOOC, Sounds, vApps, vDRM, vCMS + 3 more — each with persona-targeted messaging and feature-specific layouts.", tag: "Product Architecture" },
        { icon: "fa fa-film",        title: "Lottie Hero Animations",      body: "High-fidelity Lottie animations on product hero sections — lightweight, scalable, and brand-consistent across all 9 product pages.", tag: "Motion Design"      },
        { icon: "fa fa-envelope",    title: "Lead Gen Forms",              body: "EmailJS integration with Formik + Yup validation — enterprise contact forms across all product pages with field-level validation and success states.", tag: "Conversion"         },
      ],
      featuresTitle: "Engineering capabilities",
      designSystem: {
        projectName: "Mobiotics",
        colors: [
          { name: "Primary Dark",  hex: "#1A1A2E" }, { name: "Accent Blue",  hex: "#0F3460" },
          { name: "Highlight",     hex: "#E94560" }, { name: "Surface",      hex: "#F8F9FA" },
          { name: "Text Dark",     hex: "#1A1A2E" }, { name: "Text Muted",   hex: "#6B7280" },
          { name: "White",         hex: "#FFFFFF" }, { name: "Border",       hex: "#E5E7EB" },
        ],
        typography: [
          { label: "H1",   size: "48px", weight: 700, sample: "OTT Infrastructure"      },
          { label: "H2",   size: "32px", weight: 600, sample: "vLive — Live Streaming"  },
          { label: "Body", size: "16px", weight: 400, sample: "Enterprise OTT solutions"},
          { label: "Label",size: "10px", weight: 700, sample: "PRODUCT · ENTERPRISE"    },
        ],
        components: true,
      },
      userFlow: [
        { icon: "fa fa-home",       label: "Homepage",      sub: "9 product overview",  type: "active" },
        { icon: "fa fa-play",       label: "Product Page",  sub: "vLive / vDRM / etc",  type: "active" },
        { icon: "fa fa-users",      label: "About",         sub: "Company + team",      type: "active" },
        { icon: "fa fa-envelope",   label: "Contact",       sub: "Lead gen form",       type: "active" },
        { icon: "fa fa-comment",    label: "Live Chat",     sub: "Tawk.to",             type: "active" },
      ],
      userFlowTitle: "Enterprise prospect journey",
    },

    techShowcase: {
      stackGroups: [
        {
          category: "Frontend Engineering",
          items: [
            { name: "React 18",  icon: ImageHelper.ReactIcon      },
            { name: "MUI v5",    icon: ImageHelper.MuiIcon         },
            { name: "JavaScript",icon: ImageHelper.JavaScriptIcon  },
            { name: "CSS3",      icon: ImageHelper.CssIcon         },
          ],
        },
        {
          category: "Third-Party Integrations",
          items: [
            { name: "EmailJS",  faIcon: "fa fa-envelope"  },
            { name: "Tawk.to",  faIcon: "fa fa-comment"   },
            { name: "Lottie",   faIcon: "fa fa-film"      },
            { name: "Formik",   faIcon: "fa fa-check-square-o" },
          ],
        },
      ],
      stackTitle: "Frontend engineering stack",
      roles: [
        { title: "Sole Frontend Developer", body: "React 18 + MUI v5 implementation of 22 pages from Figma dev copy. JSON content layer architecture, EmailJS lead forms, Tawk.to live chat, Lottie animations, mega menu. Live at mobiotics.com.", tags: ["React 18", "MUI v5", "JSON Architecture", "EmailJS"] },
      ],
      rolesTitle: "Engineering-only engagement",
      perfStats: [
        { value: "22",   suffix: "",    label: "Pages built"           }, { value: "9",    suffix: "",    label: "OTT product lines"  },
        { value: "Live", suffix: "",    label: "mobiotics.com"         }, { value: "JSON", suffix: "",    label: "Content model"       },
      ],
      perfTitle: "Engineering scope",
      timeline: [
        { date: "Month 1",   title: "Setup + Core Pages",          body: "React 18 scaffold, MUI v5 theme, JSON architecture, homepage, product pages (9 lines), About." },
        { date: "Month 2",   title: "Integrations + Scope Change", body: "EmailJS forms, Tawk.to, Lottie animations. Mid-project mega menu redesign absorbed and delivered. QA + launch." },
      ],
      timelineTitle: "2–3 months: Figma to live domain",
    },

    coverImage: ImageHelper.Web8,
    gallery: [ImageHelper.Web8],
    tools: ["React 18", "MUI v5", "JavaScript", "EmailJS", "Tawk.to", "Lottie", "Formik"],
    figmaEmbed: null,
    prevSlug: "asin-vault", nextSlug: null,
  },

];

export default FeaturedProjectsData;
