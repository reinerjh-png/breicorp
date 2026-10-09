import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { clientIp, isRateLimited, parseComplaint } from "@/lib/forms";
import { sendEmail, sendToBreicorp } from "@/lib/email";

export async function POST(request: Request) {
  if (isRateLimited(clientIp(request.headers), 3)) return NextResponse.json({ error: "Demasiados intentos. Inténtalo más tarde." }, { status: 429 });
  const parsed = parseComplaint(await request.json().catch(() => null));
  if (parsed.errors) return NextResponse.json({ error: parsed.errors[0] }, { status: 400 });
  if (parsed.data!.website) return NextResponse.json({ ok: true });
  const d = parsed.data!;
  const receivedAt = new Date().toISOString();
  const id = `REC-${receivedAt.replace(/[-:.TZ]/g, "").slice(0, 14)}-${randomUUID().slice(0, 8).toUpperCase()}`;
  const text = ["Recepción de reclamo / queja por correo", `Identificador: ${id}`, `Fecha/hora servidor (UTC): ${receivedAt}`, "", `Consumidor: ${d.nombre} ${d.apellido}`, `${d.tipoDoc}: ${d.numDoc}`, `Teléfono: ${d.telefono}`, `Correo: ${d.email}`, `Domicilio: ${d.direccion}`, `Tipo: ${d.tipoReclamo}`, `Servicio: ${d.descripcionBien || "No indicado"}`, ...(d.montoReclamado ? [`Monto reclamado: S/ ${d.montoReclamado}`] : []), `Detalle: ${d.detalle}`, `Pedido concreto: ${d.pedidoConcreto}`].join("\n");
  try {
    await sendToBreicorp(`Libro de Reclamaciones — ${id}`, text, d.email);
    await sendEmail({ to: d.email, subject: `Recepción por correo — ${id}`, text: `${text}\n\nEste identificador acredita la recepción por correo. Esta solución debe ser revisada legalmente antes de producción.` });
    return NextResponse.json({ ok: true, id });
  } catch (error) {
    console.error("Complaint email error", error);
    return NextResponse.json({ error: "No pudimos enviar tu reclamo. Inténtalo más tarde o comunícate por WhatsApp." }, { status: 503 });
  }
}
