const { PurgeCSS } = require("purgecss");
const fs = require("fs");
const path = require("path");
const config = require("../purgecss.config.js");

async function runPurgeCSSAnalysis() {
  // Create config pointing to SOURCE CSS files, not build output
  const glob = require('glob');
  const sourceCssFiles = glob.sync('src/**/*.css', { cwd: process.cwd() })
    .filter(f => !f.endsWith('tokens.css'));
  
  const configWithSource = {
    ...config,
    css: sourceCssFiles,
  };
  
  console.log("Running PurgeCSS with safelist on source CSS...");
  const resultsWithSafelist = await new PurgeCSS().purge(configWithSource);
  
  // Create config without safelist
  const configWithoutSafelist = {
    ...configWithSource,
    safelist: {
      standard: [],
      deep: [],
    },
  };
  
  console.log("Running PurgeCSS without safelist on source CSS...");
  const resultsWithoutSafelist = await new PurgeCSS().purge(configWithoutSafelist);
  
  // Extract rejected selectors from both runs
  const rejectedWithSafelist = new Set();
  const rejectedWithoutSafelist = new Set();
  
  for (const result of resultsWithSafelist) {
    if (result.rejected && result.rejected.length > 0) {
      result.rejected.forEach(sel => rejectedWithSafelist.add(sel));
    }
  }
  
  for (const result of resultsWithoutSafelist) {
    if (result.rejected && result.rejected.length > 0) {
      result.rejected.forEach(sel => rejectedWithoutSafelist.add(sel));
    }
  }
  
  console.log(`\nWith safelist: ${rejectedWithSafelist.size} rejected selectors`);
  console.log(`Without safelist: ${rejectedWithoutSafelist.size} rejected selectors`);
  
  // Load the inventory
  const inventoryPath = path.join(process.cwd(), 'css-selector-inventory.json');
  const inventory = JSON.parse(fs.readFileSync(inventoryPath, 'utf8'));
  
  // Tag each selector with PurgeCSS results
  inventory.selectors.forEach(sel => {
    // Extract the main class/id from the selector for matching
    // This is a simplified approach - PurgeCSS works on full selectors
    const selectorText = sel.selector;
    
    if (rejectedWithoutSafelist.has(selectorText)) {
      if (rejectedWithSafelist.has(selectorText)) {
        sel.purgecssStatus = 'rejected_both';
      } else {
        sel.purgecssStatus = 'rejected_without_safelist_only';
      }
    } else {
      sel.purgecssStatus = 'kept_with_safelist';
    }
  });
  
  // Write updated inventory
  inventory.purgecssAnalysis = {
    rejectedWithSafelist: Array.from(rejectedWithSafelist),
    rejectedWithoutSafelist: Array.from(rejectedWithoutSafelist),
    analyzedAt: new Date().toISOString(),
  };
  
  fs.writeFileSync(inventoryPath, JSON.stringify(inventory, null, 2), 'utf8');
  console.log(`\n✓ Updated inventory with PurgeCSS analysis`);
  
  // Write separate rejected lists for reference
  fs.writeFileSync(
    path.join(process.cwd(), 'purgecss-rejected-with-safelist.json'),
    JSON.stringify(Array.from(rejectedWithSafelist), null, 2),
    'utf8'
  );
  fs.writeFileSync(
    path.join(process.cwd(), 'purgecss-rejected-without-safelist.json'),
    JSON.stringify(Array.from(rejectedWithoutSafelist), null, 2),
    'utf8'
  );
  
  console.log(`✓ Rejected selector lists written`);
}

runPurgeCSSAnalysis().catch(err => {
  console.error("PurgeCSS analysis failed:", err);
  process.exit(1);
});
