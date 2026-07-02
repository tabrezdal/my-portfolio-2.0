import React, { useState, useEffect } from 'react';
import './CaseStudyTOC.css';

const TOC_ITEMS = [
  { id: 'cs-context', label: 'Context' },
  { id: 'cs-scope', label: 'Platform Scope' },
  { id: 'cs-problem', label: 'Problem' },
  { id: 'cs-process', label: 'Process' },
  { id: 'cs-design', label: 'Design' },
  { id: 'cs-complexity', label: 'Complexity' },
  { id: 'cs-gallery', label: 'Gallery' },
  { id: 'cs-tech', label: 'Tech Stack' },
  { id: 'cs-outcome', label: 'Outcome' },
];

const CaseStudyTOC = () => {
  const [activeId, setActiveId] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show TOC after hero section
    const heroObserver = new IntersectionObserver(
      ([entry]) => setIsVisible(!entry.isIntersecting),
      { threshold: 0 }
    );

    const hero = document.getElementById('cs-hero');
    if (hero) heroObserver.observe(hero);

    // Track active section
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    TOC_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    return () => {
      heroObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Filter to only show items that exist on the page
  const visibleItems = TOC_ITEMS.filter(({ id }) => document.getElementById(id));

  if (visibleItems.length === 0) return null;

  return (
    <nav
      className={`cs-toc ${isVisible ? 'cs-toc--visible' : ''}`}
      aria-label="Case study sections"
    >
      <p className="cs-toc__label">ON THIS PAGE</p>
      <ul className="cs-toc__list">
        {visibleItems.map(({ id, label }) => (
          <li key={id} className="cs-toc__item">
            <a
              href={`#${id}`}
              className={`cs-toc__link ${activeId === id ? 'cs-toc__link--active' : ''}`}
              onClick={(e) => handleClick(e, id)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CaseStudyTOC;
