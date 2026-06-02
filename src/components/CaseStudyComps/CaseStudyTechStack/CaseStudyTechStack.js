import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./CaseStudyTechStack.css";

const TechStackPills = ({ groups }) => {
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
          <h2 className="cts-heading">Technologies used</h2>
          <p className="cts-subtext">
            A quick overview of the tools, frameworks and libraries that enabled the product.
          </p>
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
                    <img src={item.icon} alt={item.name} className="cts-pill__icon" draggable="false" />
                  )}
                  {item.faIcon && (
                    <i className={`${item.faIcon} cts-pill__icon--fa`} aria-hidden="true" />
                  )}
                  <span>{item.name}</span>
                  {item.category && <span className="cts-pill__category">{item.category}</span>}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const RoleBreakdown = ({ roles }) => {
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
          <h2 className="cts-heading">What I owned end-to-end</h2>
          <p className="cts-subtext">
            The responsibilities I owned while shaping the product experience.
          </p>
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
              <p className="cts-role-card__number">0{index + 1}</p>
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

const tokenise = (code) => {
  const patterns = [
    { type: "cmt", re: /\/\*[\s\S]*?\*\/|\/\/.*$/gm },
    { type: "str", re: /(["'`])(?:(?!\1)[^\\]|\\.)*\1/g },
    { type: "num", re: /\b\d+(?:\.\d+)?\b/g },
    { type: "kw", re: /\b(?:import|export|default|from|const|let|var|return|if|else|function|async|await|true|false|null|undefined|new|class|extends|this|typeof|useState|useEffect|useRef|useCallback|useMemo|switch|case|break|continue)\b/g },
    { type: "fn", re: /\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*(?=\()/g },
    { type: "tag", re: /<\/?[A-Za-z][A-Za-z0-9]*|<\/?[A-Za-z][A-Za-z0-9-]*/g },
    { type: "attr", re: /\b[a-zA-Z-]+(?=\=)/g },
    { type: "punct", re: /[{}[\]()=><;,.:]/g },
  ];

  const spans = [];
  patterns.forEach(({ type, re }) => {
    let m;
    while ((m = re.exec(code)) !== null) {
      spans.push({ start: m.index, end: m.index + m[0].length, type, text: m[0] });
      if (m.index === re.lastIndex) re.lastIndex += 1;
    }
  });

  spans.sort((a, b) => a.start - b.start);
  const merged = [];
  let cursor = 0;

  for (const span of spans) {
    if (span.start >= cursor) {
      merged.push(span);
      cursor = span.end;
    }
  }

  const result = [];
  cursor = 0;
  for (const { start, end, type, text } of merged) {
    if (cursor < start) {
      result.push({ type: "plain", text: code.slice(cursor, start) });
    }
    result.push({ type, text });
    cursor = end;
  }
  if (cursor < code.length) {
    result.push({ type: "plain", text: code.slice(cursor) });
  }

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

const CodeSnippetViewer = ({ snippets }) => {
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
          <h2 className="cts-heading cts-heading--light">Notable code contributions</h2>
          <p className="cts-subtext cts-subtext--light">
            Live examples of the code patterns and interface components I shipped.
          </p>
        </motion.div>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          className="cts-code-wrapper"
        >
          {snippets.length > 1 && (
            <div className="cts-code-tabs">
              {snippets.map((snippet, i) => (
                <button
                  key={i}
                  className={`cts-code-tab ${active === i ? "cts-code-tab--active" : ""}`}
                  onClick={() => setActive(i)}
                >
                  {snippet.filename || `Snippet ${i + 1}`}
                </button>
              ))}
            </div>
          )}

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

          <div className="cts-code-body">
            <HighlightedCode code={snippets[active]?.code || ""} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const PerformanceMetrics = ({ bars, stats }) => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setAnimate(true),
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  if ((!bars || bars.length === 0) && (!stats || stats.length === 0)) return null;

  return (
    <div className="cts-section cts-section--white" ref={ref}>
      <div className="container">
        <motion.div
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="cts-eyebrow">Impact</p>
          <h2 className="cts-heading">Performance metrics</h2>
          <p className="cts-subtext">
            Measured improvements and product gains achieved through this case study.
          </p>
        </motion.div>

        <div className="cts-perf-grid">
          <div className="cts-perf-bars">
            {bars?.map((item, index) => (
              <motion.div
                key={index}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="cts-perf-bar-row__label">
                  <span className="cts-perf-bar-row__name">{item.label}</span>
                  <span className="cts-perf-bar-row__value">{item.value}</span>
                </div>
                <div className="cts-perf-bar-track">
                  <div
                    className="cts-perf-bar-fill"
                    style={{ width: animate ? `${item.percentage || 90}%` : "0%" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="cts-stat-cards">
            {stats?.map((stat, index) => (
              <motion.div
                key={index}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="cts-stat-card"
              >
                <p className="cts-stat-card__value">
                  {stat.value} {stat.highlight ? <span>{stat.highlight}</span> : null}
                </p>
                <p className="cts-stat-card__label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectTimeline = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="cts-section cts-section--light">
      <div className="container">
        <motion.div
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="cts-eyebrow">Timeline</p>
          <h2 className="cts-heading">Delivery plan</h2>
          <p className="cts-subtext">
            The milestones and product moments that defined the project delivery.
          </p>
        </motion.div>

        <div className="cts-timeline">
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="cts-timeline-item"
            >
              <span className="cts-timeline-item__dot" />
              <p className="cts-timeline-item__date">{item.date}</p>
              <h4 className="cts-timeline-item__title">{item.title}</h4>
              <p className="cts-timeline-item__body">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CaseStudyTechStack = ({ project }) => {
  const showcase = project?.techShowcase;
  if (!showcase) return null;

  return (
    <>
      <TechStackPills groups={showcase.groups} />
      <RoleBreakdown roles={showcase.roles} />
      <CodeSnippetViewer snippets={showcase.snippets} />
      <PerformanceMetrics bars={showcase.bars} stats={showcase.stats} />
      <ProjectTimeline items={showcase.timeline} />
    </>
  );
};

export default CaseStudyTechStack;
