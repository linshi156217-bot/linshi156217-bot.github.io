import fs from "node:fs/promises";
import path from "node:path";
import sharp from "file:///C:/Users/Administrator/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp/lib/index.js";

const root = process.cwd();
const generated =
  "D:/CodexData/CodexHome/generated_images/019f9bad-d660-7ea0-be1c-154d3e793fb3";

const sites = [
  {
    slug: "alder-slate",
    heroPosition: "center",
    assets: [
      ["call_gFQcdYFGO305QDj6dubxFhOz.png", "hero.webp", 2200, 1500, "center"],
      ["call_mVWuBk6RmTA3Uaqe63zbK5Zt.png", "slate-roof.webp", 1500, 1125, "center"],
      ["call_qDgb9fH26FfwwDZsH5fjITWw.png", "garden.webp", 1500, 1125, "center"],
      ["call_GtT9XMghSZROXiA5H5ZHjcyE.png", "joinery.webp", 1200, 1500, "center"],
      ["call_0hblTPfrzyNrVCPR1CJtb9nw.png", "kitchen.webp", 1500, 1125, "center"],
      ["call_sPdEl0Ge8VaOlMIwIR0Hscj0.png", "bathroom.webp", 1200, 1500, "center"],
    ],
  },
  {
    slug: "aster-house",
    heroPosition: "center",
    assets: [
      ["call_A8OFgOFpCqYNqJSGLa5Y2Yoc.png", "hero.webp", 2200, 1500, "center"],
      ["call_LHOSFL9OoXlNGQ0FFncLb52h.png", "balayage.webp", 1200, 1500, "center"],
      ["call_KfGBlVXjvCMUqlAChJCb1A1p.png", "copper-bob.webp", 1200, 1500, "center"],
      ["call_4nZ5Glj8eV7JY6kd2b89ttVP.png", "natural-curls.webp", 1200, 1500, "center"],
      ["call_hrYD4uyVCAZuBZVylWbjeN0I.png", "silver-crop.webp", 1200, 1500, "center"],
      ["call_15QgIEs7AkFKbLJG7zYogTar.png", "salon-detail.webp", 1500, 1125, "center"],
    ],
  },
];

const results = [];

for (const site of sites) {
  const destination = path.join(root, "public", "assets", site.slug);
  await fs.mkdir(destination, { recursive: true });

  for (const [source, filename, width, height, position] of site.assets) {
    const input = path.join(generated, source);
    const output = path.join(destination, filename);
    await sharp(input)
      .resize({ width, height, fit: "cover", position, withoutEnlargement: true })
      .webp({ quality: 86, effort: 5 })
      .toFile(output);
    const metadata = await sharp(output).metadata();
    const stats = await fs.stat(output);
    results.push({
      file: path.relative(root, output),
      width: metadata.width,
      height: metadata.height,
      bytes: stats.size,
    });
  }

  const ogOutput = path.join(destination, "og.webp");
  await sharp(path.join(generated, site.assets[0][0]))
    .resize({
      width: 1200,
      height: 630,
      fit: "cover",
      position: site.heroPosition,
    })
    .webp({ quality: 86, effort: 5 })
    .toFile(ogOutput);
  const ogStats = await fs.stat(ogOutput);
  results.push({
    file: path.relative(root, ogOutput),
    width: 1200,
    height: 630,
    bytes: ogStats.size,
  });
}

console.log(JSON.stringify(results, null, 2));
