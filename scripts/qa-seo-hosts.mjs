import assert from "node:assert/strict";
import http from "node:http";
import https from "node:https";
import { seoRedirects } from "../src/config/seoRedirects.ts";

const baseUrl = process.env.SEO_QA_BASE_URL ?? "http://127.0.0.1:3100";
const canonicalHost = "breicorp.com.pe";
const stagingHost = "breicorp-ivory.vercel.app";
const serverUrl = new URL(baseUrl);
const transport = serverUrl.protocol === "https:" ? https : http;

async function request(path, host) {
  return new Promise((resolve, reject) => {
    const req = transport.request({
      hostname: serverUrl.hostname,
      port: serverUrl.port,
      path,
      method: "GET",
      headers: { Host: host },
    }, (response) => {
      const chunks = [];
      response.on("data", (chunk) => chunks.push(chunk));
      response.on("end", () => resolve({
        status: response.statusCode,
        headers: response.headers,
        text: Buffer.concat(chunks).toString("utf8"),
      }));
    });
    req.on("error", reject);
    req.end();
  });
}

const productionHome = await request("/", canonicalHost);
const productionHtml = productionHome.text;
assert.equal(productionHome.status, 200);
assert.equal(productionHome.headers["x-robots-tag"], undefined);
assert.match(productionHtml, /<meta name="robots" content="index, follow"\s*\/>/);
assert.match(productionHtml, /<link rel="canonical" href="https:\/\/breicorp\.com\.pe"\s*\/>/);
assert.match(productionHtml, /id="preguntas-frecuentes"/);

const stagingHome = await request("/", stagingHost);
assert.equal(stagingHome.status, 200);
assert.equal(stagingHome.headers["x-robots-tag"], "noindex, nofollow, noarchive");

const productionRobots = (await request("/robots.txt", canonicalHost)).text;
assert.match(productionRobots, /Allow: \//);
assert.match(productionRobots, /Sitemap: https:\/\/breicorp\.com\.pe\/sitemap\.xml/);
assert.doesNotMatch(productionRobots, /Disallow: \/\s*$/m);

const stagingRobots = (await request("/robots.txt", stagingHost)).text;
assert.match(stagingRobots, /Disallow: \/\s*$/m);

for (const path of ["/", "/empresa", "/contacto", "/seguridad"]) {
  const response = await request(path, canonicalHost);
  assert.equal(response.status, 200, `${path} is a current historical URL and must return 200`);
}

for (const [path, canonical] of [
  ["/producto", "https://breicorp.com.pe/producto"],
  ["/precios", "https://breicorp.com.pe/precios"],
  ["/software-empresarial", "https://breicorp.com.pe/software-empresarial"],
]) {
  const response = await request(path, canonicalHost);
  const html = response.text;
  assert.equal(response.status, 200, `${path} must return 200`);
  assert.match(html, new RegExp(`<link rel="canonical" href="${canonical}"\\s*/>`));
}

const sitemapResponse = await request("/sitemap.xml", canonicalHost);
const sitemap = sitemapResponse.text;
assert.equal(sitemapResponse.status, 200);
const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
assert.equal(sitemapUrls.length, 19);

for (const url of sitemapUrls) {
  const parsed = new URL(url);
  assert.equal(parsed.host, canonicalHost);
  assert.equal(
    seoRedirects.some(({ source }) => source === parsed.pathname),
    false,
    `${url} must not include a historical redirect`,
  );
  const response = await request(parsed.pathname, canonicalHost);
  assert.equal(response.status, 200, `${url} must return 200 without redirect`);
}

const unknownResponse = await request("/esta-pagina-no-existe", canonicalHost);
const unknownHtml = unknownResponse.text;
assert.equal(unknownResponse.status, 404);
assert.match(unknownHtml, /Página no encontrada/);
assert.match(unknownHtml, /<meta name="robots" content="noindex/);
assert.doesNotMatch(unknownHtml, /<link rel="canonical"/);

console.table([
  { check: "Producción indexable", result: "OK" },
  { check: "Staging noindex", result: "OK" },
  { check: "robots.txt por host", result: "OK" },
  { check: "Canonicals propios", result: "OK" },
  { check: `Sitemap (${sitemapUrls.length} URLs 200)`, result: "OK" },
  { check: "4 URLs históricas actuales 200", result: "OK" },
  { check: "404 real personalizado", result: "OK" },
]);
