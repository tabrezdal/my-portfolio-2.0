// src/utils/animationVariants.js
// Shared Framer Motion animation variants.
// Import from here — never define inline variants in components.

// ─── Fade Up (most common — used for section entries) ───────────────────────
export const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ─── Fade Up (large distance) ───────────────────────────────────────────────
export const fadeUpLargeVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ─── Fade Up (extra large distance) ───────────────────────────────────────
export const fadeUpExtraLargeVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ─── Fade Up (massive distance) ───────────────────────────────────────────
export const fadeUpMassiveVariants = {
  hidden: { opacity: 0, y: 200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ─── Fade In (no Y movement) ────────────────────────────────────────────────
export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// ─── Fade Down ───────────────────────────────────────────────────────────────
export const fadeDownVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ─── Fade Down (large distance) ───────────────────────────────────────────────
export const fadeDownLargeVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ─── Fade Left ───────────────────────────────────────────────────────────────
export const fadeLeftVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ─── Fade Left (large distance) ─────────────────────────────────────────────
export const fadeLeftLargeVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ─── Fade Left (extra large distance) ───────────────────────────────────────
export const fadeLeftExtraLargeVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ─── Fade Right ──────────────────────────────────────────────────────────────
export const fadeRightVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ─── Fade Right (large distance) ────────────────────────────────────────────
export const fadeRightLargeVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ─── Scale Up ────────────────────────────────────────────────────────────────
export const scaleUpVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// ─── Scale Up (0.8) ───────────────────────────────────────────────────────────
export const scaleUp08Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

// ─── Scale Up (smaller scale) ──────────────────────────────────────────────
export const scaleUpSmallVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// ─── Scale Up with Fade Up ───────────────────────────────────────────────────
export const scaleUpFadeUpVariants = {
  hidden: { scale: 0, y: 60 },
  visible: {
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ─── Scale Up (no opacity) ───────────────────────────────────────────────────
export const scaleUpNoOpacityVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ─── Helper Functions ─────────────────────────────────────────────────────
// These return full motion props objects (variants, initial, animate, transition)
// Used for quick staggered animations with custom delays

export const fadeUp = (delay = 0) => ({
  variants: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  initial: "hidden",
  animate: "visible",
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay },
});

export const fadeIn = (delay = 0) => ({
  variants: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  initial: "hidden",
  animate: "visible",
  transition: { duration: 0.7, delay },
});

// ─── Stagger Container ───────────────────────────────────────────────────────
// Used for parent containers with staggered children animations
export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// ─── Stats Reveal ────────────────────────────────────────────────────────────
// Used for individual stat items in StatsBar
export const statsReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

// ─── Stats Stagger ────────────────────────────────────────────────────────────
// Used for StatsBar container to stagger stat items
export const statsStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

// ─── Hero Text Reveal ─────────────────────────────────────────────────────────
// Staggered text reveal for hero section: role descriptor → headline → value statement → CTAs
// Timing: 400ms per element, 100ms stagger delay between each
// Easing: easeOut — elements arrive and settle, no bounce
export const heroTextReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// ─── Hero Text Stagger Container ───────────────────────────────────────────────
// Parent container for hero text elements with staggered children
export const heroTextStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0,
    },
  },
};

// ─── Hero Image Float ─────────────────────────────────────────────────────────
// Subtle floating animation for hero image (desktop only)
export const heroImageFloat = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
