// scripts/generate-grid-variants.js
//
// Generates grid-sized variants (~480px width) for specific case study images
// and the About section profile photo. These are used for srcset responsive images.

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "src");
const IMG_ROOT = path.join(ROOT, "Assets", "Images");
const GRID_OUTPUT_DIR = path.join(IMG_ROOT, "project-grid-images");

const GRID_WIDTH = 480;
const QUALITY = 78;
const EFFORT = 6;

// Images to generate grid variants for
// Format: [sourcePath, outputFilename]
const IMAGES_TO_PROCESS = [
  // Case study cover images
  ["Portfolio/UiUx/MenuOnline [Cover].webp", "MenuOnline [Cover]-grid.webp"],
  ["Portfolio/UiUx/MenuOnline-Foundation-Cover.webp", "MenuOnline-Foundation-Cover-grid.webp"],
  ["Portfolio/UiUx/MyHabit-App-Ui-Design-Cover.webp", "MyHabit-App-Ui-Design-Cover-grid.webp"],
  ["Portfolio/UiUx/TezHUB-Cover.webp", "TezHUB-Cover-grid.webp"],
  ["Portfolio/UiUx/EatExpress.webp", "EatExpress-grid.webp"],
  ["Portfolio/UiUx/EdXplore-Admin-Panel-_Mobile-Version-Cover.webp", "EdXplore-Admin-Panel-_Mobile-Version-Cover-grid.webp"],
  ["Portfolio/UiUx/EdXplore-Admin-Panel-Cover.webp", "EdXplore-Admin-Panel-Cover-grid.webp"],
  ["Portfolio/UiUx/EdXplore-Header-Revamp-Cover.webp", "EdXplore-Header-Revamp-Cover-grid.webp"],
  ["Portfolio/UiUx/Hotel-Resort-Management-Cover.webp", "Hotel-Resort-Management-Cover-grid.webp"],
  ["Portfolio/UiUx/Meco-Cover.webp", "Meco-Cover-grid.webp"],
  ["Portfolio/UiUx/Meco-Final-Cover.webp", "Meco-Final-Cover-grid.webp"],
  // About section profile photo
  ["me/Tabrez-at-dubai-mall.webp", "Tabrez-at-dubai-mall-grid.webp"],
];

async function run() {
  // Create output directory if it doesn't exist
  if (!fs.existsSync(GRID_OUTPUT_DIR)) {
    fs.mkdirSync(GRID_OUTPUT_DIR, { recursive: true });
  }

  const results = [];

  for (const [sourceRelPath, outputFilename] of IMAGES_TO_PROCESS) {
    const sourcePath = path.join(IMG_ROOT, sourceRelPath);
    const outputPath = path.join(GRID_OUTPUT_DIR, outputFilename);

    // Check if source exists
    if (!fs.existsSync(sourcePath)) {
      console.log(`⚠️  Source file not found: ${sourceRelPath}`);
      continue;
    }

    try {
      const before = fs.statSync(sourcePath).size;
      const meta = await sharp(sourcePath).metadata();

      // Resize to grid width
      const pipeline = sharp(sourcePath).webp({ quality: QUALITY, effort: EFFORT });
      const buffer = await pipeline.resize({ 
        width: GRID_WIDTH, 
        withoutEnlargement: true,
        fit: 'inside'
      }).toBuffer();

      const newMeta = await sharp(buffer).metadata();

      // Write to output directory
      fs.writeFileSync(outputPath, buffer);

      results.push({
        source: sourceRelPath,
        output: outputFilename,
        beforeKB: (before / 1024).toFixed(1),
        afterKB: (buffer.length / 1024).toFixed(1),
        savingsPct: (((before - buffer.length) / before) * 100).toFixed(1),
        originalDims: `${meta.width}x${meta.height}`,
        newDims: `${newMeta.width}x${newMeta.height}`,
      });

      console.log(`✓ Generated: ${outputFilename}`);
    } catch (err) {
      console.error(`✗ Error processing ${sourceRelPath}:`, err.message);
    }
  }

  console.table(results);

  const totalBefore = results.reduce((s, r) => s + parseFloat(r.beforeKB), 0);
  const totalAfter = results.reduce((s, r) => s + parseFloat(r.afterKB), 0);
  console.log(`\nTotal: ${totalBefore.toFixed(0)}KB -> ${totalAfter.toFixed(0)}KB ` +
    `(${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1)}% reduction) across ${results.length} files`);

  console.log(`\n✓ Grid variants written to: ${GRID_OUTPUT_DIR}`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
