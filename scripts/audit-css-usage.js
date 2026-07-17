const postcss = require('postcss');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

function extractSelectors(cssFile) {
  const root = postcss.parse(fs.readFileSync(cssFile, 'utf8'), { from: cssFile });
  const rows = [];
  
  root.walkRules(rule => {
    rule.selectors.forEach(sel => {
      // Extract class tokens (.foo)
      const classMatches = [...sel.matchAll(/\.([a-zA-Z0-9_-]+)/g)];
      const classTokens = classMatches.map(m => m[1]);
      
      // Extract ID tokens (#foo)
      const idMatches = [...sel.matchAll(/#([a-zA-Z0-9_-]+)/g)];
      const idTokens = idMatches.map(m => m[1]);
      
      // Extract bare tag tokens (h1, body, etc.) - match tags at start or after combinators
      const tagMatches = [...sel.matchAll(/(?:^|[\s>+~,:])([a-zA-Z][a-zA-Z0-9]*)/g)];
      const tagTokens = tagMatches.map(m => m[1]).filter(tag => 
        !tag.startsWith('.') && !tag.startsWith('#') && tag !== ':'
      );
      
      // Check if inside @media, @supports, or other at-rule
      let insideAtRule = null;
      let parent = rule.parent;
      while (parent) {
        if (parent.type === 'atrule') {
          insideAtRule = `${parent.name} ${parent.params}`;
          break;
        }
        parent = parent.parent;
      }
      
      rows.push({
        file: cssFile,
        line: rule.source.start.line,
        selector: sel,
        classTokens: classTokens,
        idTokens: idTokens,
        tagTokens: tagTokens,
        insideAtRule: insideAtRule,
      });
    });
  });
  
  // Extract @keyframes animation names
  const keyframeNames = [];
  root.walkAtRules('keyframes', at => {
    keyframeNames.push({
      file: cssFile,
      line: at.source.start.line,
      animationName: at.params,
    });
  });
  
  return { rows, keyframeNames };
}

function main() {
  const cssFiles = glob.sync('src/**/*.css', { cwd: process.cwd() });
  
  // Exclude tokens.css per constraint #1
  const filesToProcess = cssFiles.filter(f => !f.endsWith('tokens.css'));
  
  console.log(`Processing ${filesToProcess.length} CSS files...`);
  
  const allRows = [];
  const allKeyframes = [];
  
  for (const file of filesToProcess) {
    const { rows, keyframeNames } = extractSelectors(file);
    allRows.push(...rows);
    allKeyframes.push(...keyframeNames);
    console.log(`  ${file}: ${rows.length} selectors, ${keyframeNames.length} keyframes`);
  }
  
  // Write inventory to JSON
  const inventory = {
    selectors: allRows,
    keyframes: allKeyframes,
    generatedAt: new Date().toISOString(),
  };
  
  const outputPath = path.join(process.cwd(), 'css-selector-inventory.json');
  fs.writeFileSync(outputPath, JSON.stringify(inventory, null, 2), 'utf8');
  
  console.log(`\n✓ Inventory written to ${outputPath}`);
  console.log(`  Total selectors: ${allRows.length}`);
  console.log(`  Total keyframes: ${allKeyframes.length}`);
}

main();
