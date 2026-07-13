const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Load inventory
const inventory = JSON.parse(fs.readFileSync('css-selector-inventory.json', 'utf8'));

// Get all JS/JSX files and HTML
const jsFiles = glob.sync('src/**/*.{js,jsx}', { cwd: process.cwd() });
const htmlFile = 'public/index.html';
const allSourceFiles = [...jsFiles, htmlFile];

// Read all source files content
const sourceContents = {};
for (const file of jsFiles) {
  sourceContents[file] = fs.readFileSync(file, 'utf8');
}
if (fs.existsSync(htmlFile)) {
  sourceContents[htmlFile] = fs.readFileSync(htmlFile, 'utf8');
}

// Known data-driven lookup maps (from task description)
const DATA_DRIVEN_PATTERNS = [
  { mapName: 'STATUS_MAP', file: 'CaseStudyContext.js' },
  { mapName: 'BADGE_CLS', file: 'CaseStudyPlatformScope.js' },
  { mapName: 'designTag', file: 'CaseStudyPlatformScope.js' },
  { mapName: 'devTag', file: 'CaseStudyPlatformScope.js' },
];

// Known library-injected class patterns
const LIBRARY_PATTERNS = {
  'react-bootstrap': [
    'btn', 'modal', 'badge', 'alert', 'carousel', 'dropdown', 'nav', 'navbar',
    'tab', 'tooltip', 'popover', 'collapse', 'accordion', 'card', 'list-group',
    'form-control', 'form-check', 'input-group'
  ],
  'swiper': [
    'swiper', 'swiper-slide', 'swiper-pagination', 'swiper-button', 'swiper-scrollbar'
  ],
  'react-scroll': [
    'active'
  ]
};

// Global tag selectors that need special verification
const GLOBAL_TAGS = new Set([
  'html', 'body', 'head', 'title', 'meta', 'link', 'script', 'style', 'div', 'span',
  'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a', 'img', 'ul', 'ol', 'li', 'dl', 'dt', 'dd',
  'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td', 'caption', 'col', 'colgroup',
  'form', 'input', 'button', 'select', 'option', 'textarea', 'label', 'fieldset', 'legend',
  'section', 'article', 'aside', 'header', 'footer', 'nav', 'main', 'figure', 'figcaption',
  'iframe', 'canvas', 'svg', 'video', 'audio', 'source', 'track', 'map', 'area'
]);

// Pseudo-elements that are browser-injected
const PSEUDO_ELEMENTS = new Set([
  '::before', '::after', '::first-letter', '::first-line', '::selection',
  '::-webkit-scrollbar', '::-webkit-scrollbar-thumb', '::-webkit-scrollbar-track',
  '::placeholder', '::-webkit-input-placeholder'
]);

function checkLiteralMatch(classTokens, idTokens, tagTokens) {
  // Check if any token appears as a literal in source files
  const allTokens = [...classTokens, ...idTokens, ...tagTokens];
  
  for (const token of allTokens) {
    for (const [file, content] of Object.entries(sourceContents)) {
      // Look for className= or class= with the token
      const patterns = [
        new RegExp(`className[^=]*=[^"'\\s]*["'][^"'\\s]*\\b${token}\\b`, 'i'),
        new RegExp(`class[^=]*=[^"'\\s]*["'][^"'\\s]*\\b${token}\\b`, 'i'),
        new RegExp(`"\\s*${token}\\s*"`),
        new RegExp(`'\\s*${token}\\s*'`),
      ];
      
      for (const pattern of patterns) {
        if (pattern.test(content)) {
          return { matched: true, token, file };
        }
      }
    }
  }
  
  return { matched: false };
}

function checkDynamicBEM(selector) {
  // Check for BEM modifier patterns like .foo--bar
  const bemModifierMatch = selector.match(/\.([a-zA-Z0-9_-]+)--([a-zA-Z0-9_-]+)/);
  if (bemModifierMatch) {
    const base = bemModifierMatch[1];
    const modifier = bemModifierMatch[2];
    
    // Look for template literal construction like `${base}--${variable}`
    for (const [file, content] of Object.entries(sourceContents)) {
      if (content.includes(`${base}--`) && (content.includes('${') || content.includes('`'))) {
        return { isDynamic: true, base, modifier, file };
      }
    }
  }
  
  return { isDynamic: false };
}

function checkLibraryInjected(classTokens) {
  for (const token of classTokens) {
    for (const [lib, patterns] of Object.entries(LIBRARY_PATTERNS)) {
      if (patterns.some(pattern => token.includes(pattern))) {
        return { isLibrary: true, library: lib, token };
      }
    }
  }
  return { isLibrary: false };
}

function isGlobalSelector(tagTokens, selector) {
  // Check if selector is a bare tag or pseudo-element
  if (tagTokens.length > 0 && selector === tagTokens[0]) {
    return true;
  }
  if (PSEUDO_ELEMENTS.has(selector)) {
    return true;
  }
  return false;
}

function classifySelector(sel) {
  const { selector, classTokens, idTokens, tagTokens } = sel;
  
  // Check for global/tag selectors first
  if (isGlobalSelector(tagTokens, selector)) {
    sel.classification = 'USED_GLOBAL_TAG';
    sel.classificationReason = 'Global tag or pseudo-element selector';
    return;
  }
  
  // Check library-injected classes
  const libraryCheck = checkLibraryInjected(classTokens);
  if (libraryCheck.isLibrary) {
    sel.classification = 'USED_LIBRARY_INJECTED';
    sel.classificationReason = `Library-injected class: ${libraryCheck.library}`;
    return;
  }
  
  // Check dynamic BEM
  const bemCheck = checkDynamicBEM(selector);
  if (bemCheck.isDynamic) {
    sel.classification = 'UNCERTAIN_DYNAMIC_BEM';
    sel.classificationReason = `Dynamic BEM modifier: ${bemCheck.base}--${bemCheck.modifier}`;
    sel.bemInfo = bemCheck;
    return;
  }
  
  // Check literal match
  const literalMatch = checkLiteralMatch(classTokens, idTokens, tagTokens);
  if (literalMatch.matched) {
    sel.classification = 'USED_LITERAL_MATCH';
    sel.classificationReason = `Literal match in ${literalMatch.file}`;
    sel.matchInfo = literalMatch;
    return;
  }
  
  // No match found
  sel.classification = 'DEAD_NO_MATCHING_MARKUP';
  sel.classificationReason = 'No literal match found in source files';
}

// Classify all selectors
console.log(`Classifying ${inventory.selectors.length} selectors...`);

let usedCount = 0;
let deadCount = 0;
let uncertainCount = 0;
let globalCount = 0;
let libraryCount = 0;

for (const sel of inventory.selectors) {
  classifySelector(sel);
  
  if (sel.classification.startsWith('USED')) {
    usedCount++;
  } else if (sel.classification.startsWith('DEAD')) {
    deadCount++;
  } else if (sel.classification.startsWith('UNCERTAIN')) {
    uncertainCount++;
  }
  if (sel.classification === 'USED_GLOBAL_TAG') globalCount++;
  if (sel.classification === 'USED_LIBRARY_INJECTED') libraryCount++;
}

console.log(`\nClassification results:`);
console.log(`  USED (literal): ${usedCount - globalCount - libraryCount}`);
console.log(`  USED (global tags): ${globalCount}`);
console.log(`  USED (library-injected): ${libraryCount}`);
console.log(`  DEAD: ${deadCount}`);
console.log(`  UNCERTAIN: ${uncertainCount}`);

// Write updated inventory
inventory.classificationSummary = {
  total: inventory.selectors.length,
  usedLiteral: usedCount - globalCount - libraryCount,
  usedGlobalTag: globalCount,
  usedLibrary: libraryCount,
  dead: deadCount,
  uncertain: uncertainCount,
  classifiedAt: new Date().toISOString(),
};

fs.writeFileSync('css-selector-inventory.json', JSON.stringify(inventory, null, 2), 'utf8');
console.log(`\n✓ Updated inventory with classifications`);
