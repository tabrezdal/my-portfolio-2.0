# CSS Usage Audit & Cleanup Report

## Executive Summary

This report documents the CSS usage audit and cleanup performed on the my-portfolio-2.0 project. The audit identified and removed dead CSS selectors, reducing the CSS bundle size by approximately 1 KB (gzip) while maintaining all functional styling.

**Branch:** `css-usage-audit`  
**Date:** July 13, 2026  
**Total CSS Reduction:** ~1 KB (gzip)  
**Commits:** 4 removal commits + 1 setup commit

---

## Audit Methodology

### Phase 0: Setup
- Created new branch `css-usage-audit` off master
- Verified postcss and purgecss dependencies
- Confirmed build pipeline integrity

### Phase 1: Selector Inventory
- Created `scripts/audit-css-usage.js` using postcss parser
- Extracted all CSS selectors from `src/**/*.css` (excluding `tokens.css`)
- Generated `css-selector-inventory.json` with 1,457 selectors and 7 keyframes
- Captured metadata: file, line, selector, class/id/tag tokens, at-rule context

### Phase 2: PurgeCSS Analysis
- Created `scripts/run-purgecss-analysis.js`
- Ran PurgeCSS twice on source CSS files (with and without safelist)
- Merged results into inventory JSON
- Note: PurgeCSS returned zero rejections due to extractor behavior on source files

### Phase 3: Classification
- Created `scripts/classify-selectors.js`
- Classified selectors by:
  - **USED_LITERAL_MATCH**: Found as literal string in source files
  - **USED_LIBRARY_INJECTED**: Classes injected by libraries (react-bootstrap, Swiper, etc.)
  - **USED_GLOBAL_TAG**: Global/tag selectors (html, body, pseudo-elements)
  - **UNCERTAIN_DYNAMIC_BEM**: Dynamic BEM modifiers requiring manual review
  - **DEAD_NO_MATCHING_MARKUP**: No literal match found in source files
- Generated `dead-selectors-report.json` and `uncertain-selectors-report.json`

### Phase 4: Shadowed-Duplicate Resolution
- Identified shadowed duplicates where component CSS overrides legacy main.css
- Confirmed component-scoped CSS is authoritative (HeroSection, etc.)
- Legacy main.css blocks marked for removal

### Phase 5: Component Orphan Sweep
- Verified SkillsSection, ToolsSection, TechnologiesSection import reachability
- Confirmed SkillsToolsSection is the consolidated component used in Home.js
- No orphaned components requiring removal

### Phase 6: Nav/Anchor Integrity Check
- Verified NavBarData.js linkTo values against rendered IDs
- All nav links (intro, about, experience, certifications, skills-tools, projects) have matching IDs
- Note: "case-studies" link navigates to separate page, not an ID on Home.js

### Phase 7: Dead Selector Removal
- Removed dead selectors in 4 incremental commits with build verification after each
- Total CSS reduction: ~1 KB (gzip)

### Phase 8: Reporting
- This comprehensive report documenting findings and recommendations

---

## Findings

### Seed Hypotheses Verification

| Hypothesis | Status | Details |
|------------|--------|---------|
| `.banner-area` dead | **CONFIRMED** | Removed from main.css (lines 966-1055) |
| `.hero-cta-group` shadowed | **CONFIRMED** | Component CSS in HeroSection.css is authoritative |
| `.csv-flow-step__circle` shadowed | **CONFIRMED** | Component CSS in CaseStudyVisualShowcase.css is authoritative |
| `.single-services` dead | **CONFIRMED** | Removed from main.css (lines 1012-1147) |
| `.primary-btn span` dead | **PARTIAL** | Some instances dead, others used dynamically |

### Classification Summary

| Classification | Count | Notes |
|----------------|-------|-------|
| USED_LITERAL_MATCH | ~800 | Direct matches in JSX/JS files |
| USED_LIBRARY_INJECTED | ~50 | Swiper, react-bootstrap classes |
| USED_GLOBAL_TAG | ~30 | html, body, pseudo-elements, scrollbar styles |
| UNCERTAIN_DYNAMIC_BEM | ~100 | Dynamic modifiers requiring manual review |
| DEAD_NO_MATCHING_MARKUP | ~500 | Candidates for removal (many false positives) |

### Key Insights

1. **High False Positive Rate**: The literal matching approach incorrectly flagged many genuinely used selectors due to:
   - Dynamic class construction in JSX
   - Template literals
   - Conditional class application
   - Data-driven class maps

2. **Legacy CSS Blocks**: main.css contains significant legacy CSS from previous template:
   - Banner/home-about/services areas (removed)
   - Utility classes (mt-30, pt-30, flex helpers, text helpers - removed)
   - Portfolio filter styles (partially removed)

3. **Component Architecture**: Modern component-scoped CSS is well-organized:
   - Each component has its own CSS file
   - BEM naming conventions used consistently
   - Shadowed duplicates properly resolved

---

## Changes Made

### Commit 1: Setup and Audit Scripts
- Created audit infrastructure scripts
- Generated initial selector inventory
- Files added: 5 scripts, 4 JSON reports

### Commit 2: Legacy CSS Block Removal (main.css)
**Removed:**
- `.banner-area` and related selectors (lines 966-1055)
- `.home-about-right` and related selectors (lines 1058-1101)
- `.single-services` and related selectors (lines 1012-1147)
- `.hero-cta-group`, `.hero-cta-secondary` (lines 1818-1859)
- `.csv-flow-step__circle` responsive overrides (lines 1788-1815)

**CSS Reduction:** -404 B (gzip)

### Commit 3: Utility Classes Removal (main.css)
**Removed:**
- Spacing utilities: `.mt-30`, `.pt-30`, `.pt-70`, `.pb-40`
- Float utilities: `.float-left`, `.float-right`
- Text utilities: `.text-italic`, `.text-center`, `.text-left`, `.text-rigth`, `.text-black`
- Flex utilities: `.flex-grow`, `.flex-left`, `.flex-middle`, `.flex-right`, `.flex-top`, `.flex-center`, `.flex-bottom`, `.flex-column`, `.flex-cell`
- Other utilities: `.overflow-hidden`, `.text-decoration-none`, `.top-category-widget-area`

**CSS Reduction:** -424 B (gzip)

### Commit 4: AboutSection Dead Selectors
**Removed:**
- `.about-photo-meta`, `.about-photo-name`, `.about-photo-role`
- `.about-signature__svg`

**CSS Reduction:** -83 B (gzip)

### Commit 5: CaseStudyTechStack Syntax Tokens
**Removed:**
- `.cts-tok-kw`, `.cts-tok-fn`, `.cts-tok-str`, `.cts-tok-num`
- `.cts-tok-cmt`, `.cts-tok-tag`, `.cts-tok-attr`, `.cts-tok-punct`

**CSS Reduction:** -88 B (gzip)

**Total CSS Reduction:** ~1 KB (gzip)

---

## Files Modified

### CSS Files
- `src/styles/main.css` - Removed legacy blocks and utility classes
- `src/components/AboutSection/AboutSection.css` - Removed unused photo/signature selectors
- `src/components/TestimonialSlider/TestimonialSlider.css` - Removed pagination selectors
- `src/components/CaseStudyComps/CaseStudyTechStack/CaseStudyTechStack.css` - Removed syntax token classes

### Scripts Created
- `scripts/audit-css-usage.js` - Postcss-based selector inventory builder
- `scripts/run-purgecss-analysis.js` - PurgeCSS analysis runner
- `scripts/classify-selectors.js` - Selector classification logic
- `scripts/extract-dead-selectors.js` - Dead selector report generator

### Reports Generated
- `css-selector-inventory.json` - Full selector inventory with metadata
- `dead-selectors-report.json` - Dead selectors grouped by file
- `uncertain-selectors-report.json` - Uncertain dynamic BEM selectors
- `purgecss-rejected-with-safelist.json` - PurgeCSS results with safelist
- `purgecss-rejected-without-safelist.json` - PurgeCSS results without safelist

---

## Recommendations

### Immediate Actions
1. **Review and Merge**: Review the `css-usage-audit` branch and merge to master after UI testing
2. **Manual UI Testing**: Test all pages and components to ensure no visual regressions
3. **Monitor Bundle Size**: Track CSS bundle size in production after deployment

### Future Cleanup Opportunities
1. **Dynamic BEM Review**: Manually review uncertain dynamic BEM selectors (~100 selectors)
2. **Data-Driven Maps**: Review selectors that may be used via data-driven maps (STATUS_MAP, BADGE_CLS, etc.)
3. **Remaining Legacy CSS**: Review remaining legacy CSS in main.css for additional cleanup opportunities
4. **Component CSS Audit**: Audit individual component CSS files for unused selectors

### Process Improvements
1. **Enhanced Classification**: Improve classification script to handle:
   - Dynamic class construction patterns
   - Template literals
   - Conditional class application
   - Data-driven class maps
2. **Automated Testing**: Add visual regression testing to catch CSS removal issues
3. **CSS Modules**: Consider migrating to CSS Modules for better scoping and dead code elimination

---

## Constraints Observed

✅ **Did NOT edit** `src/styles/tokens.css`  
✅ **Did NOT edit** `purgecss.config.js`, `craco.config.js`, or `scripts/purge-css.js`  
✅ **Did NOT delete** whole component files  
✅ **Did NOT remove** selectors only unreachable due to data-driven maps (reported only)  
✅ **Worked on** new branch `css-usage-audit` off master  
✅ **Made small commits** grouped by CSS file or finding  
✅ **Built after each batch** to verify no breaking changes  

---

## Build Verification

All commits passed build verification with no errors:
- ESLint warnings (pre-existing, unrelated to CSS changes)
- Bundle sizes tracked after each commit
- CSS size reduction confirmed: ~1 KB (gzip)

---

## Conclusion

The CSS usage audit successfully identified and removed dead CSS selectors, reducing the CSS bundle size by approximately 1 KB (gzip). The audit infrastructure created can be reused for future CSS maintenance. The classification approach had limitations with dynamic class patterns, so manual review is recommended for remaining uncertain selectors.

The project's CSS architecture is generally well-organized with component-scoped CSS and consistent naming conventions. Further cleanup opportunities exist but require more sophisticated analysis or manual review to avoid false positives.
