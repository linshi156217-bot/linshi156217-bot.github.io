import assert from "node:assert/strict";
import { pathToFileURL } from "node:url";
import path from "node:path";

const workerPath = path.join(process.cwd(), "dist", "server", "index.js");
const workerModule = await import(`${pathToFileURL(workerPath).href}?validate=1`);
const worker = workerModule.default;

assert.equal(typeof worker?.fetch, "function");

const homeResponse = await worker.fetch(new Request("https://example.test/"));
assert.equal(homeResponse.status, 200);
assert.match(homeResponse.headers.get("content-type") ?? "", /text\/html/);
assert.match(await homeResponse.text(), /Salt &amp; Hawthorn/);

const imageResponse = await worker.fetch(
  new Request("https://example.test/assets/hero-exterior.webp"),
);
assert.equal(imageResponse.status, 200);
assert.equal(imageResponse.headers.get("content-type"), "image/webp");
assert.ok((await imageResponse.arrayBuffer()).byteLength > 100_000);

const missingResponse = await worker.fetch(
  new Request("https://example.test/missing-page"),
);
assert.equal(missingResponse.status, 404);

console.log("Validated worker routes: home, image asset and 404");
