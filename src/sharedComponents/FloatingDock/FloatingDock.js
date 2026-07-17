import { useState, useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';
import CV from '../../Assets/Docs/Tabrez_Dal_Senior_Product_Engineer_CV.pdf';
import './FloatingDock.css';

function FloatingDock() {
  const [visible, setVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`floating-dock ${visible ? 'floating-dock--visible' : ''} ${shouldReduceMotion ? 'floating-dock--no-motion' : ''}`}
      aria-label="Quick actions"
      role="complementary"
    >
      {/* Left action: Send message */}
      <button
        className="floating-dock__action"
        onClick={scrollToContact}
        aria-label="Send a message"
        type="button"
      >
        <svg className="floating-dock__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
        <span className="floating-dock__label">Send me a message</span>
      </button>

      {/* Separator */}
      <div className="floating-dock__separator" aria-hidden="true" />

      {/* Right action: Download resume */}
      <a
        className="floating-dock__action"
        href={CV}
        download="Tabrez_Dal_Senior_Product_Engineer_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download resume PDF"
      >
        <svg className="floating-dock__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7 10 12 15 17 10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        <span className="floating-dock__label">Download Resume</span>
      </a>
    </div>
  );
}

export default FloatingDock;