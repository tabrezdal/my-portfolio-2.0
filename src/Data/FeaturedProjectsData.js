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
    gallery: [ImageHelper.TezHUBCover, ImageHelper.BidroidAppBanner],
    tools: ["Figma", "FigJam", "Maze"],
    showcase: {
      beforeAfter: [
        {
          context: "Consolidating legacy restaurant software into one dashboard.",
          before: {
            image: ImageHelper.BidroidOldUI,
            caption: "Fragmented legacy workflow",
          },
          after: {
            image: ImageHelper.TezHUBCover,
            caption: "Unified operations hub",
          },
        },
      ],
      screens: [
        { image: ImageHelper.TezHUBCover, label: "Modern operations dashboard" },
        { image: ImageHelper.BidroidAppBanner, label: "Staff task flow" },
        { image: ImageHelper.TabrezDalExpertProductDesignerCover, label: "Order and loyalty insights" },
      ],
      features: [
        {
          icon: "fa fa-layer-group",
          title: "Modular architecture",
          body: "Designed a flexible product structure so new restaurant modules can be added without adding user complexity.",
          tag: "Scalable",
        },
        {
          icon: "fa fa-user-check",
          title: "Role-based access",
          body: "Defined clear permissions for owners, managers, and staff to reduce errors and simplify onboarding.",
          tag: "Secure",
        },
        {
          icon: "fa fa-bolt",
          title: "Rapid decision support",
          body: "Surface key KPIs in a single view so operators can act quickly during busy service windows.",
          tag: "Efficiency",
        },
      ],
      designSystem: {
        projectName: "TezHub UI Kit",
        colors: [
          { hex: "#0378b8" },
          { hex: "#62bdfc" },
          { hex: "#111111" },
          { hex: "#f4f7fb" },
        ],
        typography: [
          { label: "Heading", sample: "Poppins Bold 36px" },
          { label: "Body", sample: "Poppins Regular 16px" },
          { label: "Label", sample: "Poppins Medium 12px" },
        ],
        components: [
          { label: "Primary button", variant: "primary" },
          { label: "Ghost button", variant: "ghost" },
          { label: "Tag chip", variant: "outline" },
        ],
      },
      mobileScreens: [
        { image: ImageHelper.EatExpress, label: "Mobile staff view" },
        { image: ImageHelper.CasualChic, label: "Mobile task manager" },
      ],
      userFlow: [
        { title: "Login & role select", subtitle: "Secure access for each restaurant role." },
        { title: "Dashboard overview", subtitle: "Immediate visibility into orders, inventory, and payouts." },
        { title: "Order execution", subtitle: "Fast order management for floor staff and kitchen teams." },
        { title: "Analytics & handoff", subtitle: "Insights for owners to measure loyalty and sales." },
      ],
    },
    techShowcase: {
      groups: [
        {
          category: "Design",
          items: [
            { name: "Figma", icon: ImageHelper.FigmaLogo },
            { name: "Adobe XD", icon: ImageHelper.AdobeXdLogo },
            { name: "Photoshop", icon: ImageHelper.PhotoshopLogo },
          ],
        },
        {
          category: "Frontend",
          items: [
            { name: "React", icon: ImageHelper.ReactIcon },
            { name: "HTML", icon: ImageHelper.HtmlIcon },
            { name: "CSS", icon: ImageHelper.CssIcon },
            { name: "JavaScript", icon: ImageHelper.JavaScriptIcon },
          ],
        },
        {
          category: "Backend",
          items: [
            { name: "Node.js", icon: ImageHelper.NodeJsIcon },
            { name: "MySQL", icon: ImageHelper.MySqlIcon },
            { name: "Axios", icon: ImageHelper.AxiosIcon },
            { name: "JSON", icon: ImageHelper.JsonIcon },
          ],
        },
      ],
      roles: [
        {
          title: "Product strategy",
          body: "Built the product roadmap with stakeholders to align modules, workflow, and launch priorities.",
          tags: ["Roadmapping", "Stakeholder alignment"],
        },
        {
          title: "UX design",
          body: "Created wireframes, prototypes, and cross-platform layouts for owners, managers, and staff.",
          tags: ["Mobile-first", "Dashboard UX"],
        },
        {
          title: "Design system",
          body: "Delivered reusable typography, spacing, and color tokens to speed design handoff.",
          tags: ["Component library", "Consistency"],
        },
      ],
      snippets: [
        {
          filename: "DashboardHeader.jsx",
          lang: "JSX",
          code: `import React from "react";

const DashboardHeader = ({ title, stats }) => {
  return (
    <header className="dashboard-header">
      <div>
        <p className="eyebrow">{title}</p>
        <h2>{stats.heading}</h2>
      </div>
      <div className="status-pill">{stats.status}</div>
    </header>
  );
};

export default DashboardHeader;`,
        },
        {
          filename: "MetricCard.jsx",
          lang: "JSX",
          code: `import React from "react";

const MetricCard = ({ label, value }) => (
  <div className="metric-card">
    <span className="metric-value">{value}</span>
    <p className="metric-label">{label}</p>
  </div>
);

export default MetricCard;`,
        },
      ],
      bars: [
        { label: "Design consistency", value: "90%", percentage: 90 },
        { label: "Prototype coverage", value: "100%", percentage: 100 },
        { label: "Speed to handoff", value: "78%", percentage: 78 },
      ],
      stats: [
        { label: "Usability improvement", value: "40%" },
        { label: "Cross-module reuse", value: "80+" },
        { label: "Launch confidence", value: "High" },
      ],
      timeline: [
        {
          date: "Week 1",
          title: "Discovery",
          body: "Stakeholder mapping, existing audit, and research synthesis.",
        },
        {
          date: "Week 4",
          title: "Design",
          body: "High-fidelity screens and interaction refinements for the core product.",
        },
        {
          date: "Week 8",
          title: "Delivery",
          body: "Developer-ready assets, redlines, and component specifications.",
        },
      ],
    },
    figmaEmbed:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F92E8ayZCG6pK6z0d5rVfNX%2FTezHUB-by-TZ%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DjlchnmRhNK7OpwWH-1",
    prevSlug: null,
    nextSlug: "edxplore-admin-panel",
  },
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
    gallery: [ImageHelper.EdXploreAdminPanel, ImageHelper.EdXploreAdminPanelMobileVersion, ImageHelper.EdXploreHeaderRevamp],
    tools: ["Figma", "Notion", "Zeplin"],
    showcase: {
      beforeAfter: [
        {
          context: "Transforming a manual admin workflow into a polished dashboard.",
          before: {
            image: ImageHelper.EdXploreHeaderRevamp,
            caption: "Email-heavy course management",
          },
          after: {
            image: ImageHelper.EdXploreAdminPanel,
            caption: "Data-driven admin experience",
          },
        },
      ],
      screens: [
        { image: ImageHelper.EdXploreAdminPanel, label: "Admin desktop dashboard" },
        { image: ImageHelper.EdXploreAdminPanelMobileVersion, label: "Mobile approval flow" },
        { image: ImageHelper.FamilyOffice360, label: "Insights and analytics" },
      ],
      features: [
        {
          icon: "fa fa-chart-line",
          title: "Actionable analytics",
          body: "Elevated institute performance tracking with simple visual summaries and alerts.",
          tag: "Data-first",
        },
        {
          icon: "fa fa-mobile-alt",
          title: "Mobile approvals",
          body: "Built a lightweight mobile experience for field officers to approve institutes instantly.",
          tag: "Flexible",
        },
        {
          icon: "fa fa-clipboard-check",
          title: "Admin workflows",
          body: "Structured onboarding and course publishing flows to reduce time spent in email threads.",
          tag: "Reliable",
        },
      ],
      designSystem: {
        projectName: "EdXplore UI System",
        colors: [
          { hex: "#0378b8" },
          { hex: "#62bdfc" },
          { hex: "#0f1f3f" },
          { hex: "#f5fbff" },
        ],
        typography: [
          { label: "Heading", sample: "Poppins SemiBold 32px" },
          { label: "Body", sample: "Poppins Regular 15px" },
          { label: "Caption", sample: "Poppins Medium 12px" },
        ],
        components: [
          { label: "Primary button", variant: "primary" },
          { label: "Secondary button", variant: "outline" },
          { label: "Input field", variant: "ghost" },
        ],
      },
      mobileScreens: [
        { image: ImageHelper.EdXploreAdminPanelMobileVersion, label: "Mobile admin flow" },
        { image: ImageHelper.FMSCIHomepageRevamp, label: "Mobile summary screen" },
      ],
      userFlow: [
        { title: "Institute intake", subtitle: "Capture requests with structured intake forms." },
        { title: "Course setup", subtitle: "Manage courses, seats, and schedules from one place." },
        { title: "Approval & tracking", subtitle: "Make real-time decisions from mobile or desktop." },
        { title: "Performance review", subtitle: "Track adoption and program health with clear metrics." },
      ],
    },
    techShowcase: {
      groups: [
        {
          category: "Design",
          items: [
            { name: "Figma", icon: ImageHelper.FigmaLogo },
            { name: "Adobe XD", icon: ImageHelper.AdobeXdLogo },
          ],
        },
        {
          category: "Frontend",
          items: [
            { name: "HTML", icon: ImageHelper.HtmlIcon },
            { name: "CSS", icon: ImageHelper.CssIcon },
            { name: "Bootstrap", icon: ImageHelper.BootstrapIcon },
            { name: "React", icon: ImageHelper.ReactIcon },
          ],
        },
        {
          category: "Backend",
          items: [
            { name: "TypeScript", icon: ImageHelper.TypescriptIcon },
            { name: "Node.js", icon: ImageHelper.NodeJsIcon },
            { name: "MySQL", icon: ImageHelper.MySqlIcon },
            { name: "Axios", icon: ImageHelper.AxiosIcon },
          ],
        },
      ],
      roles: [
        {
          title: "UX research",
          body: "Synthesized admin workflows and distilled complex operations into intuitive screens.",
          tags: ["Research", "Interviews"],
        },
        {
          title: "Responsive design",
          body: "Delivered experience parity across desktop and mobile with shared design tokens.",
          tags: ["Mobile", "Desktop"],
        },
        {
          title: "Developer handoff",
          body: "Created redlines, interaction diagrams, and accessibility guidance for engineering.",
          tags: ["Handoff", "Spec docs"],
        },
      ],
      snippets: [
        {
          filename: "CourseCard.jsx",
          lang: "JSX",
          code: `import React from "react";

const CourseCard = ({ course }) => (
  <div className="course-card">
    <h3>{course.title}</h3>
    <p>{course.description}</p>
    <span>{course.status}</span>
  </div>
);

export default CourseCard;`,
        },
        {
          filename: "ApprovalTiles.jsx",
          lang: "JSX",
          code: `import React from "react";

const ApprovalTiles = ({ approvals }) => (
  <div className="approval-grid">
    {approvals.map((item) => (
      <div key={item.id} className="approval-tile">
        <p>{item.label}</p>
        <strong>{item.count}</strong>
      </div>
    ))}
  </div>
);

export default ApprovalTiles;`,
        },
      ],
      bars: [
        { label: "Copy reduction", value: "68%", percentage: 68 },
        { label: "Approval speed", value: "72%", percentage: 72 },
        { label: "UI reuse", value: "86%", percentage: 86 },
      ],
      stats: [
        { label: "Admin efficiency", value: "55%" },
        { label: "Screens shipped", value: "30+" },
        { label: "Mobile readiness", value: "100%" },
      ],
      timeline: [
        {
          date: "Week 1",
          title: "Research",
          body: "Administrator interviews and workflow mapping.",
        },
        {
          date: "Week 3",
          title: "Design",
          body: "Wireframes, prototypes, and visual refinements.",
        },
        {
          date: "Week 6",
          title: "Handoff",
          body: "Annotated developer-ready docs and specs.",
        },
      ],
    },
    figmaEmbed:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FSlofBkzRyGfy7lMBB0CaQc%2FEdXplore-Admin-Panel%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DvqoFr3c4I7uqGycb-1",
    prevSlug: "tezhub",
    nextSlug: "meco-motorsports",
  },
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
    showcase: {
      beforeAfter: [
        {
          context: "Reimagining the brand’s online presence for speed and events.",
          before: {
            image: ImageHelper.GRM,
            caption: "Text-heavy existing event site",
          },
          after: {
            image: ImageHelper.MecoFinalWebUi,
            caption: "Bold, immersive motorsports experience",
          },
        },
      ],
      screens: [
        { image: ImageHelper.MecoWebUi, label: "Homepage hero and event teaser" },
        { image: ImageHelper.MecoFinalWebUi, label: "Race calendar and sponsorship panel" },
        { image: ImageHelper.FamilyOffice360, label: "Featured event highlights" },
      ],
      features: [
        {
          icon: "fa fa-flag-checkered",
          title: "Event discovery",
          body: "A fast-moving homepage designed to surface upcoming races and latest news instantly.",
          tag: "Speed",
        },
        {
          icon: "fa fa-bullseye",
          title: "Sponsor showcase",
          body: "Built prominent sponsor placements with strong brand rhythm and motion.",
          tag: "Premium",
        },
        {
          icon: "fa fa-mobile-alt",
          title: "Mobile-first flow",
          body: "Optimized for on-the-go fans checking event details from their phones.",
          tag: "Responsive",
        },
      ],
      designSystem: {
        projectName: "MECO Brand System",
        colors: [
          { hex: "#111111" },
          { hex: "#e52423" },
          { hex: "#f7f7f7" },
          { hex: "#ffffff" },
        ],
        typography: [
          { label: "Headline", sample: "Poppins Black 38px" },
          { label: "Body", sample: "Poppins Regular 15px" },
          { label: "Utility", sample: "Poppins Medium 12px" },
        ],
        components: [
          { label: "Primary CTA", variant: "primary" },
          { label: "Outline CTA", variant: "outline" },
          { label: "Chip", variant: "ghost" },
        ],
      },
      mobileScreens: [
        { image: ImageHelper.SundeshSolarWebsiteRevamp, label: "Mobile event view" },
        { image: ImageHelper.UpStreamLife, label: "Mobile schedule flow" },
      ],
      userFlow: [
        { title: "Discover events", subtitle: "Users find upcoming races and registration details." },
        { title: "Sponsorship details", subtitle: "Sponsors see premium placement and brand stories." },
        { title: "Ticket purchase", subtitle: "Fast checkout with clear event access details." },
        { title: "Post-event follow-up", subtitle: "Fans can review past results and stay connected." },
      ],
    },
    techShowcase: {
      groups: [
        {
          category: "Design",
          items: [
            { name: "Figma", icon: ImageHelper.FigmaLogo },
            { name: "Illustrator", icon: ImageHelper.IllustratorLogo },
          ],
        },
        {
          category: "Frontend",
          items: [
            { name: "HTML", icon: ImageHelper.HtmlIcon },
            { name: "CSS", icon: ImageHelper.CssIcon },
            { name: "JavaScript", icon: ImageHelper.JavaScriptIcon },
            { name: "Bootstrap", icon: ImageHelper.BootstrapIcon },
          ],
        },
        {
          category: "Support",
          items: [
            { name: "GitHub", icon: ImageHelper.GithubLogo },
            { name: "Axios", icon: ImageHelper.AxiosIcon },
          ],
        },
      ],
      roles: [
        {
          title: "Brand system",
          body: "Created a bold visual identity rooted in motorsport energy and premium sponsorship legibility.",
          tags: ["Branding", "UI"],
        },
        {
          title: "SEO-driven layout",
          body: "Structured content for conversions and easy event discovery.",
          tags: ["Content", "Experience"],
        },
        {
          title: "Prototype handoff",
          body: "Delivered pixel-accurate screens with clear developer notes.",
          tags: ["Handoff", "Quality"],
        },
      ],
      snippets: [
        {
          filename: "HeroBanner.jsx",
          lang: "JSX",
          code: `import React from "react";

const HeroBanner = ({ title, subtitle, image }) => (
  <section className="hero-banner">
    <div className="hero-copy">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
    <img src={image} alt="Hero visual" />
  </section>
);

export default HeroBanner;`,
        },
        {
          filename: "SponsorGrid.jsx",
          lang: "JSX",
          code: `import React from "react";

const SponsorGrid = ({ sponsors }) => (
  <div className="sponsor-grid">
    {sponsors.map((sponsor) => (
      <div key={sponsor.name} className="sponsor-card">
        <img src={sponsor.logo} alt={sponsor.name} />
      </div>
    ))}
  </div>
);

export default SponsorGrid;`,
        },
      ],
      bars: [
        { label: "Brand clarity", value: "92%", percentage: 92 },
        { label: "Event conversion", value: "84%", percentage: 84 },
        { label: "Prototype coverage", value: "100%", percentage: 100 },
      ],
      stats: [
        { label: "Landing conversion", value: "+38%" },
        { label: "Sponsor visibility", value: "High" },
        { label: "Pages designed", value: "8+" },
      ],
      timeline: [
        {
          date: "Week 1",
          title: "Concept",
          body: "Visual direction research and brand alignment.",
        },
        {
          date: "Week 2",
          title: "Design",
          body: "Homepage, events, and sponsorship screens.",
        },
        {
          date: "Week 3",
          title: "Prototype",
          body: "Final interactive handoff for development.",
        },
      ],
    },
    figmaEmbed:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FRhxolZEwe1bjcxfIXgnc7A%2FMeco-Web-UiUx-Final-Design-by-Tabrez-Dal%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3D0uXfBHcLc4zqsbK3-1",
    prevSlug: "edxplore-admin-panel",
    nextSlug: null,
  },
];

export default FeaturedProjectsData;
