const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  // ── existing PurgeCSS style config ──────────────────────────────────────
  style: {
    postcss: {
      plugins: [
        // Only run PurgeCSS in production builds — dev mode hangs without this
        process.env.NODE_ENV === 'production' && purgecss({
          content: [
            './src/**/*.{js,jsx,ts,tsx}',
            './public/index.html',
          ],
          defaultExtractor: content =>
            content.match(/[\w-/:]+(?<!:)/g) || [],
          safelist: {
            standard: [
              'active', 'show', 'hide', 'open', 'closed', 'visible',
              'invisible', 'selected', 'disabled', 'loading', 'error',
              'success', 'expanded', 'collapsed', 'fade', 'in', 'out',
              'is-active', 'is-open', 'is-visible', 'no-scroll',
            ],
            greedy: [
              /^html/, /^body/, /^noscript/, /^:root/, /^data-/,
              /^aria-/, /^swiper/, /^slick/, /^modal/, /^tooltip/,
              /^dropdown/, /^tab/, /^nav/, /^scroll/, /^animate/,
              /^transition/,
            ],
          },
        }),
      ].filter(Boolean),  // removes the `false` when not in production
    },
  },
};
