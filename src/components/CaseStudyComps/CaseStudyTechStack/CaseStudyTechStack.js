import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./CaseStudyTechStack.css";

/* ─────────────────────────────────────────
   B1. Tech Stack Pills
───────────────────────────────────────── */
const TechStackPills = ({ groups, title, subtitle }) => {
  if (!groups || groups.length === 0) return null;

  return (
    <div className="cts-section cts-section--white">
      <div className="container">
        <motion.div
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="cts-eyebrow">Tech Stack</p>
          <h2 className="cts-heading">{title || "Technologies used"}</h2>
          {subtitle && <p className="cts-subtext">{subtitle}</p>}
        </motion.div>

        {groups.map((group, gi) => (
          <div key={gi} className="cts-stack-group">
            <p className="cts-stack-group__label">{group.category}</p>
            <div className="cts-stack-grid">
              {group.items.map((item, ii) => (
                <motion.div
                  key={ii}
                  variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.35, delay: ii * 0.06 }}
                  className="cts-pill"
                >
                  {item.icon && !item.faIcon && (
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="cts-pill__icon"
                      draggable="false"
                    />
                  )}
                  {item.faIcon && (
                    <i
                      className={`${item.faIcon} cts-pill__icon--fa`}
                      aria-hidden="true"
                    />
                  )}
                  <span>{item.name}</span>
                  {item.category && (
                    <span className="cts-pill__category">{item.category}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────
   B2. Role & Architecture Breakdown
───────────────────────────────────────── */
const RoleBreakdown = ({ roles, title, subtitle }) => {
  if (!roles || roles.length === 0) return null;

  return (
    <div className="cts-section cts-section--light">
      <div className="container">
        <motion.div
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="cts-eyebrow">My Contribution</p>
          <h2 className="cts-heading">{title || "What I owned end-to-end"}</h2>
          {subtitle && <p className="cts-subtext">{subtitle}</p>}
        </motion.div>

        <div className="cts-role-grid">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cts-role-card"
            >
              <p className="cts-role-card__number">
                0{index + 1}
              </p>
              <h4 className="cts-role-card__title">{role.title}</h4>
              <p className="cts-role-card__body">{role.body}</p>
              {role.tags && role.tags.length > 0 && (
                <div className="cts-role-card__tags">
                  {role.tags.map((tag, ti) => (
                    <span key={ti} className="cts-role-card__tag">{tag}</span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────
   B3. Code Snippet Viewer (tabbed)
   Renders syntax-highlighted JSX/React code
   using simple token-class spans — no lib needed
───────────────────────────────────────── */

// Minimal tokeniser — handles JSX well enough for portfolio display
const tokenise = (code) => {
  // Order matters — more specific patterns first
  const patterns = [
    { type: "cmt",   re: /\/\*[\s\S]*?\*\/|\/\/.*/g },
    { type: "str",   re: /(["'`])(?:(?!\1)[^\\]|\\.)*\1/g },
    { type: "num",   re: /\b\d+(\.\d+)?\b/g },
    { type: "kw",    re: /\b(import|export|default|from|const|let|var|return|if|else|function|arrow|async|await|true|false|null|undefined|new|class|extends|this|typeof|useState|useEffect|useRef|useCallback|useMemo)\b/g },
    { type: "fn",    re: /\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*(?=\()/g },
    { type: "tag",   re: /<\/?[A-Z][a-zA-Z0-9.]*|<\/?[a-z][a-zA-Z0-9-]*/g },
    { type: "attr",  re: /\b[a-zA-Z-]+(?==)/g },
    { type: "punct", re: /[{}[\]()=><;,.:]/g },
  ];

  // Build a flat list of [start, end, type] spans
  const spans = [];
  patterns.forEach(({ type, re }) => {
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(code)) !== null) {
      spans.push({ start: m.index, end: m.index + m[0].length, type, text: m[0] });
    }
  });

  // Sort & de-overlap (first-come wins)
  spans.sort((a, b) => a.start - b.start);
  const merged = [];
  let cursor = 0;
  for (const span of spans) {
    if (span.start < cursor) continue; // overlapping, skip
    merged.push(span);
    cursor = span.end;
  }

  // Build output segments
  const result = [];
  cursor = 0;
  for (const { start, end, type, text } of merged) {
    if (cursor < start) result.push({ type: "plain", text: code.slice(cursor, start) });
    result.push({ type, text });
    cursor = end;
  }
  if (cursor < code.length) result.push({ type: "plain", text: code.slice(cursor) });
  return result;
};

const CodeLine = ({ segments }) => (
  <span>
    {segments.map((seg, i) =>
      seg.type === "plain" ? (
        <span key={i}>{seg.text}</span>
      ) : (
        <span key={i} className={`cts-tok-${seg.type}`}>{seg.text}</span>
      )
    )}
  </span>
);

const HighlightedCode = ({ code }) => {
  const lines = code.split("\n");
  return (
    <pre>
      {lines.map((line, i) => (
        <React.Fragment key={i}>
          <CodeLine segments={tokenise(line)} />
          {i < lines.length - 1 && "\n"}
        </React.Fragment>
      ))}
    </pre>
  );
};

const CodeSnippetViewer = ({ snippets, title, subtitle }) => {
  const [active, setActive] = useState(0);

  if (!snippets || snippets.length === 0) return null;

  return (
    <div className="cts-section cts-section--dark">
      <div className="container">
        <motion.div
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="cts-eyebrow cts-eyebrow--light">Engineering</p>
          <h2 className="cts-heading cts-heading--light">
            {title || "Notable code contributions"}
          </h2>
          {subtitle && (
            <p className="cts-subtext cts-subtext--light">{subtitle}</p>
          )}
        </motion.div>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="cts-code-wrapper"
        >
          {/* Tab bar */}
          {snippets.length > 1 && (
            <div className="cts-code-tabs">
              {snippets.map((s, i) => (
                <button
                  key={i}
                  className={`cts-code-tab ${active === i ? "cts-code-tab--active" : ""}`}
                  onClick={() => setActive(i)}
                >
                  {s.filename || `snippet-${i + 1}`}
                </button>
              ))}
            </div>
          )}

          {/* Chrome bar */}
          <div className="cts-code-header">
            <span className="cts-code-header__dot cts-code-header__dot--red" />
            <span className="cts-code-header__dot cts-code-header__dot--yellow" />
            <span className="cts-code-header__dot cts-code-header__dot--green" />
            <span className="cts-code-header__filename">
              {snippets[active]?.filename || "component.jsx"}
            </span>
            <span className="cts-code-header__lang">
              {snippets[active]?.lang || "JSX"}
            </span>
          </div>

          {/* Code */}
          <div className="cts-code-body">
            <HighlightedCode code={snippets[active]?.code || ""} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────
   B4. Performance / Impact Metrics
───────────────────────────────────────── */
const PerformanceMetrics = ({ bars, stats, title, subtitle }) => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (!bars && !stats) return null;

  return (
    <div className="cts-section cts-section--white" ref={ref}>
      <div className="container">
        <motion.div
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="cts-eyebrow">Impact & Performance</p>
          <h2 className="cts-heading">{title || "Measurable results"}</h2>
          {subtitle && <p className="cts-subtext">{subtitle}</p>}
        </motion.div>

        <div className="cts-perf-grid">
          {/* Bars */}
          {bars && bars.length > 0 && (
            <div className="cts-perf-bars">
              {bars.map((bar, i) => (
                <motion.div
                  key={i}
                  variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="cts-perf-bar-row__label">
                    <span className="cts-perf-bar-row__name">{bar.label}</span>
                    <span className="cts-perf-bar-row__value">{bar.display || `${bar.value}%`}</span>
                  </div>
                  <div className="cts-perf-bar-track">
                    <div
                      className="cts-perf-bar-fill"
                      style={{ width: animate ? `${bar.value}%` : "0%" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Stat cards */}
          {stats && stats.length > 0 && (
            <div className="cts-stat-cards">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="cts-stat-card"
                >
                  <p className="cts-stat-card__value">
                    {stat.prefix && <span>{stat.prefix}</span>}
                    {stat.value}
                    {stat.suffix && <span>{stat.suffix}</span>}
                  </p>
                  <p className="cts-stat-card__label">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────
   B5. Project Timeline
───────────────────────────────────────── */
const ProjectTimeline = ({ items, title, subtitle }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="cts-section cts-section--light">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5" style={{ marginBottom: 40 }}>
            <motion.div
              variants={{ hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="cts-eyebrow">Timeline</p>
              <h2 className="cts-heading">{title || "Project progression"}</h2>
              {subtitle && <p className="cts-subtext">{subtitle}</p>}
            </motion.div>
          </div>

          <div className="col-lg-7 col-md-7">
            <div className="cts-timeline">
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="cts-timeline-item"
                >
                  <div className="cts-timeline-item__dot" />
                  <p className="cts-timeline-item__date">{item.date}</p>
                  <h5 className="cts-timeline-item__title">{item.title}</h5>
                  <p className="cts-timeline-item__body">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────
   MASTER EXPORT — CaseStudyTechStack
───────────────────────────────────────── */
const CaseStudyTechStack = ({ project }) => {
  const tech = project?.techShowcase;
  if (!tech) return null;

  return (
    <>
      {tech.stackGroups && (
        <TechStackPills
          groups={tech.stackGroups}
          title={tech.stackTitle}
          subtitle={tech.stackSubtitle}
        />
      )}

      {tech.roles && (
        <RoleBreakdown
          roles={tech.roles}
          title={tech.rolesTitle}
          subtitle={tech.rolesSubtitle}
        />
      )}

      {tech.snippets && (
        <CodeSnippetViewer
          snippets={tech.snippets}
          title={tech.snippetsTitle}
          subtitle={tech.snippetsSubtitle}
        />
      )}

      {(tech.perfBars || tech.perfStats) && (
        <PerformanceMetrics
          bars={tech.perfBars}
          stats={tech.perfStats}
          title={tech.perfTitle}
          subtitle={tech.perfSubtitle}
        />
      )}

      {tech.timeline && (
        <ProjectTimeline
          items={tech.timeline}
          title={tech.timelineTitle}
          subtitle={tech.timelineSubtitle}
        />
      )}
    </>
  );
};

export default CaseStudyTechStack;

export {
  TechStackPills,
  RoleBreakdown,
  CodeSnippetViewer,
  PerformanceMetrics,
  ProjectTimeline,
};
