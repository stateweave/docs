import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(process.argv[2] ?? "/export");
const servePath = path.join(root, "serve.js");
let serve = await readFile(servePath, "utf8");

const redirects = {
  "/": "/introduction",
  "/concepts/messages-vs-stateweave": "/concepts/why-stateweave",
  "/concepts/agent-loop": "/concepts/the-turn",
  "/concepts/agent-state": "/concepts/nodes",
  "/concepts/how-it-works": "/concepts/the-turn",
  "/concepts/traces": "/guides/persist-and-stream",
  "/guides/connect-an-llm": "/guides/models",
  "/guides/add-tools": "/guides/tools",
  "/guides/models-and-tools": "/guides/tools",
  "/guides/interactive-cli": "/examples/complete-agent",
  "/guides/visualize-graph": "/guides/persist-and-stream",
  "/guides/deploy-docs": "/introduction",
  "/examples/coding-agent": "/examples/complete-agent",
  "/reference/model": "/reference/types",
  "/reference/tool": "/reference/types",
  "/python/tbd": "/introduction"
};

const dirMarker = "const DIR = __dirname;";
const serverMarker = "  .createServer((req, res) => {\n    let urlPath;";
const requestMarker = "    const file = resolveFile(urlPath);";
if (!serve.includes(dirMarker) || !serve.includes(serverMarker) || !serve.includes(requestMarker)) {
  throw new Error("Mintlify serve.js shape changed; refusing an unverified patch.");
}

serve = serve
  .replace(dirMarker, `${dirMarker}\nconst REDIRECTS = new Map(Object.entries(${JSON.stringify(redirects, null, 2)}));`)
  .replace(serverMarker, `  .createServer((req, res) => {\n    res.setHeader('X-Content-Type-Options', 'nosniff');\n    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');\n    res.setHeader('X-Frame-Options', 'SAMEORIGIN');\n    res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');\n    let urlPath;`)
  .replace(requestMarker, `    if (urlPath === '/_mintlify/api/user') {\n      res.writeHead(200, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });\n      res.end('{"user":null}');\n      return;\n    }\n\n    const redirect = REDIRECTS.get(urlPath.replace(/\\/$/, '') || '/');\n    if (redirect) {\n      res.writeHead(308, { Location: redirect, 'Cache-Control': 'public, max-age=3600' });\n      res.end();\n      return;\n    }\n\n${requestMarker}`)
  .replace("    openInBrowser(url);\n", "");

await writeFile(servePath, serve);

const chunksDir = path.join(root, "_next", "static", "chunks");
// Mintlify ships a live-reload Socket.io client in its exported client chunks.
// It would try to reconnect to an absent dev server when served statically. The
// minified connect expression changed variable names across builds (older:
// `(n=a())`, newer: `(n=s())`), so we match the stable anchor
//   console.warn("Connected to Socket.io"),(n=VAR())
// and replace the socket object with a no-op that can never connect, reload,
// or reconnect.
const socketReplacement = '(n={on:()=>n,disconnect:()=>{}})';
const socketAnchor = /console\.warn\("Connected to Socket\.io"\),\(n=[a-z]\(\)\)/;
let socketPatches = 0;
for (const entry of await readdir(chunksDir)) {
  if (!entry.endsWith(".js")) continue;
  const filePath = path.join(chunksDir, entry);
  const source = await readFile(filePath, "utf8");
  if (!source.includes('"Connected to Socket.io"')) continue;
  let next = source;
  const before = next;
  next = next.replace(socketAnchor, socketReplacement);
  if (next !== before) socketPatches += 1;
  await writeFile(filePath, next);
}

if (socketPatches !== 1) {
  throw new Error(`Expected one Mintlify live-reload client patch, found ${socketPatches}.`);
}

console.log(`Patched Mintlify static export at ${root}`);
