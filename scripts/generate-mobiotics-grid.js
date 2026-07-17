const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const input = path.join(__dirname, "../src/Assets/Images/Portfolio/Web/Mobiotics - Homepage.webp");
const output = path.join(__dirname, "../src/Assets/Images/project-grid-images/Mobiotics-Homepage-grid.webp");

async function generate() {
  const before = fs.statSync(input).size;
  const beforeMeta = await sharp(input).metadata();
  
  await sharp(input)
    .resize({ width: 480, withoutEnlargement: true })
    .webp({ quality: 78, effort: 6 })
    .toFile(output);
  
  const after = fs.statSync(output).size;
  const afterMeta = await sharp(output).metadata();
  
  console.log(`Mobiotics - Homepage:`);
  console.log(`  ${beforeMeta.width}x${beforeMeta.height} → ${afterMeta.width}x${afterMeta.height}`);
  console.log(`  ${(before / 1024).toFixed(1)}KB → ${(after / 1024).toFixed(1)}KB (${(((before - after) / before) * 100).toFixed(1)}% reduction)`);
}

generate().catch(err => console.error(err));
