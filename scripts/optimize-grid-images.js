// scripts/optimize-grid-images.js
//
// Classifies and proportionally resizes portfolio grid images.
// NEVER crops — uses sharp's default `fit: 'inside'` behavior (width-only
// resize, height auto-calculated, full aspect ratio preserved).
//
// Classification logic (this is the important part):
//   - GRID_ONLY images (used only in the small portfolio grid cards)
//     -> resized to max-width 640px (2x a ~320px card at desktop)
//   - CASE_STUDY_SHARED images (also referenced in FeaturedProjectsData.js
//     as a coverImage / gallery item / showcase.screens item / beforeAfter
//     item) -> resized to max-width 1600px (safe ceiling for a full-width
//     case study hero image, ~2x an ~800px display context)
//
// Classification is derived by actually reading the source files listed
// below, not hardcoded — so if data files change later, re-running this
// script re-classifies correctly instead of silently reusing stale logic.

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "src");
const IMG_ROOT = path.join(ROOT, "Assets", "Images", "Portfolio");
const TEMP_DIR = path.join(__dirname, "..", ".temp-grid-optimized");

const GRID_ONLY_MAX_WIDTH = 640;
const CASE_STUDY_MAX_WIDTH = 1600;
const QUALITY = 78;
const EFFORT = 6;

// Folders in scope for this task. Web/ is excluded — already done in Issue 1,
// except Web8 which is handled separately by Task 4 below.
const SCAN_FOLDERS = ["Logo-Design", "Catalogues", "Graphic", "Poster", "Other", "UiUx"];

// ── Step 1: find every ImageHelper export name and its source file path ──
function parseImageHelperImports() {
  const helperSrc = fs.readFileSync(path.join(ROOT, "Helpers", "ImageHelper.js"), "utf8");
  const importRe = /^import\s+(\w+)\s+from\s+["'](.+?)["'];?$/gm;
  const map = {}; // exportName -> absolute file path
  let m;
  while ((m = importRe.exec(helperSrc)) !== null) {
    const [, exportName, relPath] = m;
    const abs = path.normalize(path.join(ROOT, "Helpers", relPath));
    map[exportName] = abs;
  }
  return map;
}

// ── Step 2: find every ImageHelper.<X> reference inside FeaturedProjectsData.js ──
function findCaseStudyReferencedExports() {
  const dataSrc = fs.readFileSync(path.join(ROOT, "Data", "FeaturedProjectsData.js"), "utf8");
  const refRe = /ImageHelper\.(\w+)/g;
  const set = new Set();
  let m;
  while ((m = refRe.exec(dataSrc)) !== null) set.add(m[1]);
  return set;
}

async function run() {
  // Create temp directory
  if (!fs.existsSync(TEMP_DIR)) {
    fs.mkdirSync(TEMP_DIR, { recursive: true });
  }

  const helperMap = parseImageHelperImports();
  const caseStudyExports = findCaseStudyReferencedExports();

  // Build reverse map: absolute file path -> is it case-study-shared?
  const caseStudyFiles = new Set();
  for (const [exportName, filePath] of Object.entries(helperMap)) {
    if (caseStudyExports.has(exportName)) caseStudyFiles.add(filePath);
  }

  const results = [];
  const orphans = [];

  for (const folder of SCAN_FOLDERS) {
    const dir = path.join(IMG_ROOT, folder);
    if (!fs.existsSync(dir)) continue;

    const files = fs.readdirSync(dir).filter((f) => /\.(webp|png|jpe?g)$/i.test(f));

    for (const filename of files) {
      const filePath = path.join(dir, filename);
      const tempFilePath = path.join(TEMP_DIR, filename);

      // Skip if this file isn't imported anywhere in ImageHelper.js at all
      const isReferenced = Object.values(helperMap).some(
        (p) => path.resolve(p) === path.resolve(filePath)
      );
      if (!isReferenced) {
        orphans.push(path.relative(IMG_ROOT, filePath));
        continue;
      }

      const isCaseStudyShared = caseStudyFiles.has(path.resolve(filePath));
      const targetWidth = isCaseStudyShared ? CASE_STUDY_MAX_WIDTH : GRID_ONLY_MAX_WIDTH;

      const before = fs.statSync(filePath).size;
      const meta = await sharp(filePath).metadata();
      const shouldResize = meta.width > targetWidth;

      const pipeline = sharp(filePath).webp({ quality: QUALITY, effort: EFFORT });
      const buffer = shouldResize
        ? await pipeline.resize({ width: targetWidth, withoutEnlargement: true }).toBuffer()
        : await pipeline.toBuffer();

      const newMeta = await sharp(buffer).metadata();

      // Write to temp directory first (outside OneDrive sync)
      fs.writeFileSync(tempFilePath, buffer);

      results.push({
        file: path.relative(IMG_ROOT, filePath),
        class: isCaseStudyShared ? "CASE_STUDY_SHARED" : "GRID_ONLY",
        targetWidth,
        beforeKB: (before / 1024).toFixed(1),
        afterKB: (buffer.length / 1024).toFixed(1),
        savingsPct: (((before - buffer.length) / before) * 100).toFixed(1),
        originalDims: `${meta.width}x${meta.height}`,
        newDims: `${newMeta.width}x${newMeta.height}`,
      });
    }
  }

  console.table(results);

  if (orphans.length > 0) {
    console.log("\n⚠️  Files found on disk but NOT imported anywhere in ImageHelper.js (skipped, not touched):");
    orphans.forEach((o) => console.log("  -", o));
  }

  const totalBefore = results.reduce((s, r) => s + parseFloat(r.beforeKB), 0);
  const totalAfter = results.reduce((s, r) => s + parseFloat(r.afterKB), 0);
  console.log(`\nTotal: ${totalBefore.toFixed(0)}KB -> ${totalAfter.toFixed(0)}KB ` +
    `(${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1)}% reduction) across ${results.length} files`);

  console.log("\n✓ Optimized files written to temp directory. Now copying to original location...");
  console.log("Please run the following command to complete the operation:");
  console.log(`powershell -Command "Get-ChildItem '${TEMP_DIR}\\*' | Copy-Item -Destination '${IMG_ROOT}' -Force"`);

  fs.writeFileSync(
    path.join(__dirname, "optimize-grid-images-report.json"),
    JSON.stringify(results, null, 2)
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
