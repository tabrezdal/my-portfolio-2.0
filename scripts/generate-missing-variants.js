// scripts/generate-missing-variants.js
//
// Generates specific missing image variants for Task C:
// - ProfilePic-grid.webp (80x80 for 40x40 display)
// - Testimonials Background-optimized.webp (appropriately sized for background)

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const SRC_DIR = path.join(ROOT, "src", "Assets", "Images");
const OUTPUT_DIR = path.join(ROOT, "src", "Assets", "Images", "project-grid-images");

const QUALITY = 80;
const EFFORT = 6;

async function run() {
  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log("Generating missing image variants...\n");

  // 1. ProfilePic-grid.webp (80x80 for 40x40 display, 2x retina)
  const profilePicSrc = path.join(SRC_DIR, "me", "ProfilePic.webp");
  const profilePicDest = path.join(OUTPUT_DIR, "ProfilePic-grid.webp");

  if (fs.existsSync(profilePicSrc)) {
    console.log("Processing ProfilePic.webp -> ProfilePic-grid.webp (80x80)...");
    await sharp(profilePicSrc)
      .resize({ width: 80, height: 80, fit: "inside", withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: EFFORT })
      .toFile(profilePicDest);
    const stats = fs.statSync(profilePicDest);
    console.log(`  ✓ Generated: ${stats.size} bytes\n`);
  } else {
    console.log("  ⚠ ProfilePic.webp not found, skipping\n");
  }

  // 2. Testimonials Background-optimized.webp
  // Current file is 98KB, used as background-image with background-size: contain
  // Container is full-width with auto height, so we target a reasonable width
  const testimonialSrc = path.join(SRC_DIR, "Backgrounds", "Testimonials Background.webp");
  const testimonialDest = path.join(SRC_DIR, "Backgrounds", "Testimonials Background-optimized.webp");

  if (fs.existsSync(testimonialSrc)) {
    console.log("Processing Testimonials Background.webp -> Testimonials Background-optimized.webp (1920x1080 max)...");
    const meta = await sharp(testimonialSrc).metadata();
    console.log(`  Original: ${meta.width}x${meta.height}, ${fs.statSync(testimonialSrc).size} bytes`);
    
    await sharp(testimonialSrc)
      .resize({ width: 1920, height: 1080, fit: "inside", withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: EFFORT })
      .toFile(testimonialDest);
    
    const newStats = fs.statSync(testimonialDest);
    const newMeta = await sharp(testimonialDest).metadata();
    console.log(`  ✓ Generated: ${newMeta.width}x${newMeta.height}, ${newStats.size} bytes\n`);
  } else {
    console.log("  ⚠ Testimonials Background.webp not found, skipping\n");
  }

  console.log("✓ All missing variants generated successfully!");
  console.log("\nNext steps:");
  console.log("1. Update Header.js to use ProfilePic-grid.webp");
  console.log("2. Update TestimonialSlider.css to use Testimonials Background-optimized.webp");
  console.log("3. Run npm run build to verify");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
