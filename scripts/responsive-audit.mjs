import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const port = process.argv[2] ?? "9224";
const phase = process.argv[3] ?? "before";
const root = path.resolve(`.screenshots/sprint3-${phase}`);
const widths = [360, 390, 430, 768, 1024, 1280, 1440, 1920];
const routes = ["/", "/software-empresarial", "/facturacion-electronica", "/software-ventas-inventario", "/software-distribuidoras", "/precios", "/contacto", "/demo", "/libro-reclamaciones"];
const slugs = { "/": "home", "/software-empresarial": "software-empresarial", "/facturacion-electronica": "facturacion", "/software-ventas-inventario": "inventario", "/software-distribuidoras": "distribuidoras", "/precios": "precios", "/contacto": "contacto", "/demo": "demo", "/libro-reclamaciones": "libro" };

await fs.mkdir(root, { recursive: true });
const targets = await fetch(`http://127.0.0.1:${port}/json/list`).then((response) => response.json());
const target = targets.find((item) => item.type === "page");
if (!target) throw new Error("No Chrome page target found");

const socket = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve, reject) => { socket.addEventListener("open", resolve, { once: true }); socket.addEventListener("error", reject, { once: true }); });
let id = 0;
const pending = new Map();
socket.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);
  if (!message.id) return;
  const promise = pending.get(message.id);
  if (!promise) return;
  pending.delete(message.id);
  if (message.error) promise.reject(new Error(message.error.message));
  else promise.resolve(message.result);
});
const send = (method, params = {}) => new Promise((resolve, reject) => {
  const commandId = ++id;
  pending.set(commandId, { resolve, reject });
  socket.send(JSON.stringify({ id: commandId, method, params }));
});
const sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

await send("Page.enable");
await send("Runtime.enable");
const report = [];

for (const route of routes) {
  const captures = [];
  for (const width of widths) {
    await send("Emulation.setDeviceMetricsOverride", { width, height: 900, deviceScaleFactor: 1, mobile: width < 768 });
    await send("Page.navigate", { url: `http://localhost:3000${route}` });
    await sleep(850);
    const evaluated = await send("Runtime.evaluate", {
      returnByValue: true,
      expression: `(() => {
        const visible = (el) => { const s=getComputedStyle(el), r=el.getBoundingClientRect(); return s.display!=='none' && s.visibility!=='hidden' && r.width>1 && r.height>1; };
        const overflowElements=[...document.querySelectorAll('body *')].filter(visible).filter(el=>{const r=el.getBoundingClientRect();return r.right>innerWidth+1||r.left<-1;}).slice(0,12).map(el=>({tag:el.tagName,cls:String(el.className).slice(0,90),left:Math.round(el.getBoundingClientRect().left),right:Math.round(el.getBoundingClientRect().right)}));
        return { path:location.pathname, width:innerWidth, scrollWidth:document.documentElement.scrollWidth, overflow:document.documentElement.scrollWidth-innerWidth, overflowElements, h1:document.querySelectorAll('h1').length, font:getComputedStyle(document.body).fontFamily, primary:[...document.querySelectorAll('a,button')].filter(visible).filter(el=>/Solicitar demo|Solicitar demostración/.test(el.textContent||'')).slice(0,5).map(el=>({text:el.textContent.trim(),top:Math.round(el.getBoundingClientRect().top),height:Math.round(el.getBoundingClientRect().height)})) };
      })()`
    });
    const metrics = evaluated.result.value;
    report.push({ route, ...metrics });
    const capture = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
    const file = path.join(root, `${slugs[route]}-${width}.png`);
    await fs.writeFile(file, Buffer.from(capture.data, "base64"));
    const resized = await sharp(file).resize({ width: 230 }).png().toBuffer();
    captures.push({ width, buffer: resized, height: (await sharp(resized).metadata()).height });
  }
  const labelHeight = 34;
  const cellWidth = 230;
  const maxHeight = Math.max(...captures.map((item) => item.height));
  const composites = [];
  for (let index = 0; index < captures.length; index++) {
    const item = captures[index];
    composites.push({ input: item.buffer, left: index * cellWidth, top: labelHeight });
    const label = Buffer.from(`<svg width="${cellWidth}" height="${labelHeight}" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#0f172a"/><text x="12" y="23" fill="white" font-family="Arial" font-size="15" font-weight="700">${item.width}px</text></svg>`);
    composites.push({ input: label, left: index * cellWidth, top: 0 });
  }
  await sharp({ create: { width: cellWidth * captures.length, height: labelHeight + maxHeight, channels: 4, background: "#e2e8f0" } }).composite(composites).png().toFile(path.join(root, `${slugs[route]}-montage.png`));
}

await fs.writeFile(path.join(root, "audit.json"), JSON.stringify(report, null, 2));
socket.close();
const failures = report.filter((item) => item.overflow > 0);
process.stdout.write(JSON.stringify({ screenshots: report.length, overflowFailures: failures }, null, 2));
