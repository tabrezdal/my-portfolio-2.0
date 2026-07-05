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

  // ── NEW: webpack chunk splitting ─────────────────────────────────────────
  webpack: {
    configure: (webpackConfig) => {
      // Skip all customisation in dev — only apply in production builds
      if (process.env.NODE_ENV !== 'production') {
        return webpackConfig;
      }

      webpackConfig.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: 6,
        maxAsyncRequests: 8,
        cacheGroups: {
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
            name: 'vendor-react',
            chunks: 'all',
            priority: 40,
          },
          swiper: {
            test: /[\\/]node_modules[\\/]swiper[\\/]/,
            name: 'vendor-swiper',
            chunks: 'async',
            priority: 30,
          },
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor-misc',
            chunks: 'all',
            priority: 20,
            minSize: 10000,
          },
        },
      };

      return webpackConfig;
    },
  },
};
