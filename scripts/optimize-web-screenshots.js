// scripts/optimize-web-screenshots.js
//
// Proportionally downscales the 9 full-page "web" portfolio screenshots
// used by the .screen hover-reveal effect (src/styles/main.css).
//
// IMPORTANT: This script NEVER crops. It only scales width + height by
// the same factor, preserving the full original aspect ratio and 100%
// of the visible page content — required because the hover effect
// reveals the entire image height on interaction.

const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const TARGET_WIDTH = 640; // ~2x the typical rendered card width; adjust if your grid columns render wider
const QUALITY = 78;       // visually lossless for screenshot content (flat UI colors compress well)
const EFFORT = 6;         // max compression effort (0-6), slower but smaller output

// Helper function to retry file operations with delays (for OneDrive file locking)
async function retryWithDelay(fn, retries = 5, delay = 500) {
  for (let i = 0; i < retries; i++) {
    try {
      return fn();
    } catch (err) {
      if (i === retries - 1) throw err;
      console.log(`  Retrying after ${delay}ms... (${i + 1}/${retries})`);
      await new Promise(resolve => setTimeout(resolve, delay));
      delay *= 2; // Exponential backoff
    }
  }
}

const DIR = path.join(__dirname, "..", "src", "Assets", "Images", "Portfolio", "Web");
const TEMP_DIR = path.join(__dirname, "..", ".temp-optimized");

const FILES = [
  "TZ Creation.webp",
  "TheZaika.webp",
  "TEZTigerNFT.webp",
  "IndieSports.webp",
  "Bidroid Web.webp",
  "OneGlint.webp",
  "EdXplore Frontend.webp",
  "Mobiotics - Homepage.webp",
  "GRM - Homepage.webp",
];

async function run() {
  // Create temp directory
  if (!fs.existsSync(TEMP_DIR)) {
    fs.mkdirSync(TEMP_DIR, { recursive: true });
  }

  const results = [];

  for (const filename of FILES) {
    const filePath = path.join(DIR, filename);
    const tempFilePath = path.join(TEMP_DIR, filename);

    if (!fs.existsSync(filePath)) {
      console.error(`✗ MISSING: ${filename} — skipping`);
      continue;
    }

    const before = fs.statSync(filePath).size;
    const meta = await sharp(filePath).metadata();

    // Only resize if the source is actually larger than target — never upscale
    const shouldResize = meta.width > TARGET_WIDTH;

    const pipeline = sharp(filePath).webp({ quality: QUALITY, effort: EFFORT });

    const buffer = shouldResize
      ? await pipeline.resize({ width: TARGET_WIDTH, withoutEnlargement: true }).toBuffer()
      // withoutEnlargement + fit default ('cover') would crop — we explicitly avoid 'cover'.
      // Since we only pass `width`, sharp's default fit is 'inside' scaling, which preserves
      // aspect ratio and does NOT crop. Height is auto-calculated proportionally.
      : await pipeline.toBuffer();

    const newMeta = await sharp(buffer).metadata();

    // Write to temp directory first (outside OneDrive sync)
    fs.writeFileSync(tempFilePath, buffer);

    const after = buffer.length;
    results.push({
      filename,
      beforeKB: (before / 1024).toFixed(1),
      afterKB: (after / 1024).toFixed(1),
      savingsPct: (((before - after) / before) * 100).toFixed(1),
      originalDims: `${meta.width}x${meta.height}`,
      newDims: `${newMeta.width}x${newMeta.height}`,
    });
  }

  console.table(results);

  const totalBefore = results.reduce((s, r) => s + parseFloat(r.beforeKB), 0);
  const totalAfter = results.reduce((s, r) => s + parseFloat(r.afterKB), 0);
  console.log(`\nTotal: ${totalBefore.toFixed(0)}KB → ${totalAfter.toFixed(0)}KB ` +
    `(${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1)}% reduction)`);

  console.log("\n✓ Optimized files written to temp directory. Now copying to original location...");
  console.log("Please run the following command to complete the operation:");
  console.log(`powershell -Command "Get-ChildItem '${TEMP_DIR}\\*' | Copy-Item -Destination '${DIR}' -Force"`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
