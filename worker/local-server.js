import { createServer } from "node:http";
import { readFileSync } from "node:fs";
import { DatabaseSync } from "node:sqlite";
import worker from "./src/index.js";

const database = new DatabaseSync(":memory:");
database.exec(readFileSync(new URL("./migrations/0001_initial.sql", import.meta.url), "utf8"));

const DB = {
  prepare(sql) {
    const statement = database.prepare(sql);
    return {
      bind(...values) {
        return {
          async run() { return statement.run(...values); },
          async first() { return statement.get(...values) || null; },
          async all() { return { results: statement.all(...values) }; },
        };
      },
      async all() { return { results: statement.all() }; },
    };
  },
};

const env = {
  DB,
  ADMIN_TOKEN: "local-review-token",
  RATE_LIMIT_SALT: "local-rate-limit-salt",
  EMAIL_MODE: "mock",
  ALLOWED_ORIGINS: "http://localhost:3000,http://127.0.0.1:3000",
};

createServer(async (request, response) => {
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  const url = `http://127.0.0.1:8787${request.url}`;
  const webRequest = new Request(url, {
    method: request.method,
    headers: request.headers,
    body: ["GET", "HEAD"].includes(request.method) ? undefined : Buffer.concat(chunks),
  });
  const pending = [];
  const webResponse = await worker.fetch(webRequest, env, { waitUntil(promise) { pending.push(promise); } });
  response.writeHead(webResponse.status, Object.fromEntries(webResponse.headers.entries()));
  response.end(Buffer.from(await webResponse.arrayBuffer()));
  await Promise.allSettled(pending);
}).listen(8787, "127.0.0.1", () => console.log("Local enquiry Worker: http://127.0.0.1:8787"));
