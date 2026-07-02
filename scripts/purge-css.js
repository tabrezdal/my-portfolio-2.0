// scripts/purge-css.js
const { PurgeCSS } = require("purgecss");
const fs = require("fs");
const path = require("path");
const config = require("../purgecss.config.js");

(async () => {
  const results = await new PurgeCSS().purge(config);

  if (results.length === 0) {
    console.warn("⚠️  PurgeCSS returned no results — check your css/content globs in purgecss.config.js");
    process.exit(0);
  }

  for (const result of results) {
    // result.file is the original matched css file path — write purged content back to it
    fs.writeFileSync(result.file, result.css, "utf8");
    const kb = (Buffer.byteLength(result.css, "utf8") / 1024).toFixed(1);
    console.log(`✓ Purged ${path.relative(process.cwd(), result.file)} → ${kb} KiB`);
  }
})().catch((err) => {
  console.error("PurgeCSS failed:", err);
  process.exit(1);
});