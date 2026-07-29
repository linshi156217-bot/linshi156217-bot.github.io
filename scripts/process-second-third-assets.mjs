import fs from "node:fs/promises";
import path from "node:path";
import sharp from "file:///C:/Users/Administrator/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp/lib/index.js";

const projectRoot = process.cwd();
const generatedRoot =
  "D:/CodexData/CodexHome/generated_images/019f9bad-d660-7ea0-be1c-154d3e793fb3";

const sites = [
  {
    slug: "sotto-sotto",
    assets: [
      {
        source: "exec-9b148534-9fa9-43bf-8f25-78635175df05.png",
        filename: "hero.webp",
        width: 2000,
        height: 1500,
        position: "center",
      },
      {
        source: "exec-46007fab-6c13-494a-b250-6a1c5eff313a.png",
        filename: "linguine.webp",
        width: 1500,
        height: 1500,
        position: "center",
      },
      {
        source: "exec-990ae72e-2c1b-49e6-92bc-6f3f04f58b88.png",
        filename: "tiramisu.webp",
        width: 1500,
        height: 1900,
        position: "center",
      },
    ],
  },
  {
    slug: "ship-inn-sewerby",
    assets: [
      {
        source: "exec-434a8dec-9487-47ea-a1fc-dde50f5a6c68.png",
        filename: "hero.webp",
        width: 2000,
        height: 1500,
        position: "center",
      },
      {
        source: "exec-85b95968-2c1c-4870-80b7-0590a4c23289.png",
        filename: "seabass.webp",
        width: 1500,
        height: 1500,
        position: "center",
      },
      {
        source: "exec-ee6483c9-ee26-4e94-b37d-070c40f2299c.png",
        filename: "garden.webp",
        width: 1500,
        height: 1900,
        position: "center",
      },
    ],
  },
];

const processed = [];

for (const site of sites) {
  const outputDir = path.join(projectRoot, "public", "assets", site.slug);
  await fs.mkdir(outputDir, { recursive: true });

  for (const asset of site.assets) {
    const source = path.join(generatedRoot, asset.source);
    const output = path.join(outputDir, asset.filename);
    await sharp(source)
      .resize({
        width: asset.width,
        height: asset.height,
        fit: "cover",
        position: asset.position,
        withoutEnlargement: true,
      })
      .webp({ quality: 84, effort: 5 })
      .toFile(output);
    const metadata = await sharp(output).metadata();
    const stats = await fs.stat(output);
    processed.push({
      file: path.relative(projectRoot, output),
      width: metadata.width,
      height: metadata.height,
      bytes: stats.size,
    });
  }

  const heroSource = path.join(generatedRoot, site.assets[0].source);
  const ogOutput = path.join(outputDir, "og.webp");
  await sharp(heroSource)
    .resize({
      width: 1200,
      height: 630,
      fit: "cover",
      position: site.assets[0].position,
    })
    .webp({ quality: 84, effort: 5 })
    .toFile(ogOutput);
  const ogStats = await fs.stat(ogOutput);
  processed.push({
    file: path.relative(projectRoot, ogOutput),
    width: 1200,
    height: 630,
    bytes: ogStats.size,
  });
}

const previewDir = path.join(
  projectRoot,
  "output",
  "imagegen",
  "second-third-samples",
);
await fs.mkdir(previewDir, { recursive: true });

const previewItems = [
  ["sotto-sotto", "hero.webp"],
  ["sotto-sotto", "linguine.webp"],
  ["sotto-sotto", "tiramisu.webp"],
  ["ship-inn-sewerby", "hero.webp"],
  ["ship-inn-sewerby", "seabass.webp"],
  ["ship-inn-sewerby", "garden.webp"],
];

const tiles = await Promise.all(
  previewItems.map(([slug, filename]) =>
    sharp(path.join(projectRoot, "public", "assets", slug, filename))
      .resize(520, 390, { fit: "cover" })
      .png()
      .toBuffer(),
  ),
);

await sharp({
  create: {
    width: 1560,
    height: 780,
    channels: 3,
    background: "#e8e2d7",
  },
})
  .composite(
    tiles.map((input, index) => ({
      input,
      left: (index % 3) * 520,
      top: Math.floor(index / 3) * 390,
    })),
  )
  .png()
  .toFile(path.join(previewDir, "asset-contact-sheet.png"));

console.log(
  JSON.stringify(
    {
      processed,
      contactSheet: path.join(previewDir, "asset-contact-sheet.png"),
    },
    null,
    2,
  ),
);
