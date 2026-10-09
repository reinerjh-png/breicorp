import { NextResponse } from "next/server";
import { clientIp, isRateLimited, parseDemo } from "@/lib/forms";
import { sendToBreicorp } from "@/lib/email";

export async function POST(request: Request) {
  if (isRateLimited(clientIp(request.headers))) return NextResponse.json({ error: "Demasiados intentos. Inténtalo más tarde." }, { status: 429 });
  const parsed = parseDemo(await request.json().catch(() => null));
  if (parsed.errors) return NextResponse.json({ error: parsed.errors[0] }, { status: 400 });
  if (parsed.data!.website) return NextResponse.json({ ok: true });
  const d = parsed.data!;
  try {
    await sendToBreicorp("Nueva solicitud de demostración — BREICORP", ["Solicitud de demostración", "", `Nombre: ${d.name}`, `Celular / WhatsApp: ${d.phone}`, `Empresa: ${d.companyName}`, `RUC: ${d.ruc}`, `Correo: ${d.email}`, `Giro: ${d.sector}`, `Proceso a mejorar: ${d.message}`].join("\n"), d.email);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Demo email error", error);
    return NextResponse.json({ error: "No pudimos enviar tu solicitud. Prueba WhatsApp o inténtalo más tarde." }, { status: 503 });
  }
}
