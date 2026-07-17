const fs = require('fs');
const inventory = JSON.parse(fs.readFileSync('css-selector-inventory.json', 'utf8'));

// Extract dead selectors grouped by file
const deadByFile = {};
const uncertainByFile = {};

for (const sel of inventory.selectors) {
  if (sel.classification === 'DEAD_NO_MATCHING_MARKUP') {
    if (!deadByFile[sel.file]) deadByFile[sel.file] = [];
    deadByFile[sel.file].push(sel);
  } else if (sel.classification === 'UNCERTAIN_DYNAMIC_BEM') {
    if (!uncertainByFile[sel.file]) uncertainByFile[sel.file] = [];
    uncertainByFile[sel.file].push(sel);
  }
}

console.log('\n=== DEAD SELECTORS BY FILE ===\n');
for (const [file, selectors] of Object.entries(deadByFile)) {
  console.log(`${file} (${selectors.length} selectors):`);
  selectors.forEach(sel => {
    console.log(`  Line ${sel.line}: ${sel.selector}`);
  });
  console.log('');
}

console.log('\n=== UNCERTAIN DYNAMIC BEM SELECTORS BY FILE ===\n');
for (const [file, selectors] of Object.entries(uncertainByFile)) {
  console.log(`${file} (${selectors.length} selectors):`);
  selectors.forEach(sel => {
    console.log(`  Line ${sel.line}: ${sel.selector} (${sel.classificationReason})`);
  });
  console.log('');
}

// Write detailed reports
fs.writeFileSync(
  'dead-selectors-report.json',
  JSON.stringify(deadByFile, null, 2),
  'utf8'
);
fs.writeFileSync(
  'uncertain-selectors-report.json',
  JSON.stringify(uncertainByFile, null, 2),
  'utf8'
);

console.log('✓ Reports written to dead-selectors-report.json and uncertain-selectors-report.json');
