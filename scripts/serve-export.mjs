import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import path from "node:path";

const root = path.resolve("out");
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".svg": "image/svg+xml", ".webp": "image/webp", ".png": "image/png", ".jpg": "image/jpeg", ".avif": "image/avif", ".woff2": "font/woff2" };

createServer((request, response) => {
  const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
  let file = path.join(root, pathname);
  if (existsSync(file) && statSync(file).isDirectory()) file = path.join(file, "index.html");
  if (!existsSync(file)) file = path.join(root, "404.html");
  response.writeHead(existsSync(file) ? 200 : 404, { "Content-Type": types[path.extname(file)] || "application/octet-stream" });
  createReadStream(file).pipe(response);
}).listen(3000, "127.0.0.1", () => console.log("Static export: http://127.0.0.1:3000"));
