import { seoRedirects } from "../src/config/seoRedirects.ts";

const baseUrl = process.env.SEO_QA_BASE_URL ?? "http://127.0.0.1:3100";
const requestHost = process.env.SEO_QA_HOST ?? "breicorp.com.pe";

let failures = 0;
const results = [];

for (const { source, destination } of seoRedirects) {
  const firstResponse = await fetch(new URL(source, baseUrl), {
    redirect: "manual",
    headers: { host: requestHost },
  });
  const location = firstResponse.headers.get("location");
  const locationPath = location ? new URL(location, baseUrl).pathname : null;
  const finalResponse = locationPath
    ? await fetch(new URL(locationPath, baseUrl), {
        redirect: "manual",
        headers: { host: requestHost },
      })
    : null;
  const passed =
    firstResponse.status === 308 &&
    location === destination &&
    finalResponse?.status === 200;

  if (!passed) failures += 1;
  results.push({
    source,
    status: firstResponse.status,
    location,
    finalStatus: finalResponse?.status ?? "—",
    chainLength: location ? 1 : 0,
    result: passed ? "OK" : "FAIL",
  });
}

console.table(results);

if (failures > 0) {
  throw new Error(`${failures} redirecciones no cumplieron la matriz esperada.`);
}
