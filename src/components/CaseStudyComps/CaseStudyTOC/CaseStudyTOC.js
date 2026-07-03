import React, { useState, useEffect } from 'react';
import './CaseStudyTOC.css';

// Only include sections that exist in the case study page
// Order matches the visual order on the page
const TOC_ITEMS = [
  { id: 'cs-hero',       label: 'Hero'        },
  { id: 'cs-context',    label: 'Context'     },
  { id: 'cs-scope',      label: 'Scope'       },
  { id: 'cs-problem',    label: 'Problem'     },
  { id: 'cs-process',    label: 'Process'     },
  { id: 'cs-design',     label: 'Design'      },
  { id: 'cs-complexity', label: 'Complexity'  },
  { id: 'cs-showcase',   label: 'Showcase'    },
  { id: 'cs-tech',       label: 'Tech Stack'  },
  { id: 'cs-outcome',    label: 'Outcome'     },
  { id: 'cs-gallery',    label: 'Gallery'     },
];

const CaseStudyTOC = () => {
  const [activeId, setActiveId]     = useState('');
  const [isVisible, setIsVisible]   = useState(false);

  useEffect(() => {
    // Filter to only sections that exist in the DOM
    const existingItems = TOC_ITEMS.filter(
      ({ id }) => !!document.getElementById(id)
    );

    if (existingItems.length === 0) return;

    // Show TOC after hero scrolls out of view
    const hero = document.querySelector('.csh-root, [id="cs-hero"]');
    let heroObserver;

    if (hero) {
      heroObserver = new IntersectionObserver(
        ([entry]) => setIsVisible(!entry.isIntersecting),
        { threshold: 0 }
      );
      heroObserver.observe(hero);
    } else {
      // No hero found — show immediately
      setIsVisible(true);
    }

    // Track which section is in view
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        // Find the topmost visible section
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: '-10% 0px -80% 0px',
        threshold: 0,
      }
    );

    existingItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    return () => {
      heroObserver?.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    // Account for fixed header height
    const headerHeight = 70;
    const top = el.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  // Only render items whose section exists in the DOM
  const visibleItems = TOC_ITEMS.filter(
    ({ id }) => !!document.getElementById(id)
  );

  if (visibleItems.length === 0) return null;

  return (
    <nav
      className={`cs-toc ${isVisible ? 'cs-toc--visible' : ''}`}
      aria-label="On this page"
    >
      <p className="cs-toc__label">ON THIS PAGE</p>
      <ul className="cs-toc__list" role="list">
        {visibleItems.map(({ id, label }) => (
          <li key={id} role="listitem">
            <a
              href={`#${id}`}
              className={`cs-toc__link ${activeId === id ? 'cs-toc__link--active' : ''}`}
              onClick={(e) => handleClick(e, id)}
              aria-current={activeId === id ? 'location' : undefined}
            >
              <span className="cs-toc__dot" aria-hidden="true" />
              <span className="cs-toc__text">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CaseStudyTOC;
