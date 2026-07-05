const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  // ── existing PurgeCSS style config ──────────────────────────────────────
  style: {
    postcss: {
      plugins: [
        purgecss({
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
      ],
    },
  },

  // ── NEW: webpack chunk splitting ─────────────────────────────────────────
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.optimization = {
        ...webpackConfig.optimization,
        splitChunks: {
          chunks: 'all',
          maxInitialRequests: 6,
          maxAsyncRequests: 8,
          cacheGroups: {
            // Isolate React and React-DOM into their own chunk
            // (changes rarely, cache-busts less often)
            react: {
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
              name: 'vendor-react',
              chunks: 'all',
              priority: 40,
            },
            // Isolate Swiper into its own chunk
            swiper: {
              test: /[\\/]node_modules[\\/]swiper[\\/]/,
              name: 'vendor-swiper',
              chunks: 'async',
              priority: 30,
            },
            // Everything else from node_modules
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendor-misc',
              chunks: 'all',
              priority: 20,
              minSize: 10000,
            },
          },
        },
      };
      return webpackConfig;
    },
  },
};
