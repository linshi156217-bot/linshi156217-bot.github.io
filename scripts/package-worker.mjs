import { mkdir, readdir, readFile, rm, cp, writeFile } from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const exportRoot = path.join(projectRoot, "out");
const distRoot = path.join(projectRoot, "dist");
const serverRoot = path.join(distRoot, "server");
const clientRoot = path.join(distRoot, "client");
const configRoot = path.join(distRoot, ".openai");

const contentTypes = {
  ".avif": "image/avif",
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(directory, entry.name);
      return entry.isDirectory() ? listFiles(fullPath) : [fullPath];
    }),
  );
  return nested.flat();
}

await rm(distRoot, { recursive: true, force: true });
await mkdir(serverRoot, { recursive: true });
await mkdir(configRoot, { recursive: true });
await cp(exportRoot, clientRoot, { recursive: true });
await cp(
  path.join(projectRoot, ".openai", "hosting.json"),
  path.join(configRoot, "hosting.json"),
);

const assetEntries = [];
for (const filePath of await listFiles(exportRoot)) {
  const relativePath = path.relative(exportRoot, filePath).split(path.sep).join("/");
  const urlPath = `/${relativePath}`;
  const extension = path.extname(filePath).toLowerCase();
  if (urlPath.startsWith("/assets/") && extension === ".png") {
    continue;
  }
  const contentType = contentTypes[extension] ?? "application/octet-stream";
  const body = (await readFile(filePath)).toString("base64");
  assetEntries.push([urlPath, { contentType, body }]);
}

assetEntries.sort(([left], [right]) => left.localeCompare(right));

const workerSource = `const ASSETS = ${JSON.stringify(Object.fromEntries(assetEntries))};
const CACHE = new Map();

function decodeAsset(pathname, asset) {
  if (CACHE.has(pathname)) return CACHE.get(pathname);
  const binary = atob(asset.body);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  CACHE.set(pathname, bytes);
  return bytes;
}

function resolvePath(pathname) {
  if (pathname === "/") return "/index.html";
  if (ASSETS[pathname]) return pathname;
  if (pathname.endsWith("/") && ASSETS[pathname + "index.html"]) {
    return pathname + "index.html";
  }
  return pathname;
}

export default {
  async fetch(request) {
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method not allowed", {
        status: 405,
        headers: { Allow: "GET, HEAD" },
      });
    }

    const url = new URL(request.url);
    let pathname;
    try {
      pathname = decodeURIComponent(url.pathname);
    } catch {
      return new Response("Bad request", { status: 400 });
    }

    const resolvedPath = resolvePath(pathname);
    const asset = ASSETS[resolvedPath];
    const fallback = ASSETS["/404.html"];
    const selected = asset ?? fallback;

    if (!selected) {
      return new Response("Not found", { status: 404 });
    }

    const immutable =
      resolvedPath.startsWith("/_next/static/") ||
      resolvedPath.startsWith("/assets/");
    const headers = new Headers({
      "Content-Type": selected.contentType,
      "Cache-Control": immutable
        ? "public, max-age=31536000, immutable"
        : "public, max-age=0, must-revalidate",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    });

    return new Response(
      request.method === "HEAD" ? null : decodeAsset(resolvedPath, selected),
      { status: asset ? 200 : 404, headers },
    );
  },
};
`;

await writeFile(path.join(serverRoot, "index.js"), workerSource, "utf8");

const totalBytes = assetEntries.reduce(
  (total, [, asset]) => total + Math.floor((asset.body.length * 3) / 4),
  0,
);
console.log(
  `Packaged ${assetEntries.length} assets (${Math.round(totalBytes / 1024)} KB) into dist/server/index.js`,
);
