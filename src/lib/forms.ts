import "server-only";

type FieldRule = { label: string; min?: number; max: number; required?: boolean };

export type DemoRequest = {
  name: string; phone: string; companyName: string; ruc: string; email: string;
  sector: string; message: string; website?: string;
};

export type ComplaintRequest = {
  nombre: string; apellido: string; tipoDoc: string; numDoc: string; telefono: string;
  email: string; direccion: string; tipoReclamo: string; descripcionBien: string;
  detalle: string; pedidoConcreto: string; aceptaTerminos: boolean; website?: string;
};

const strip = (value: unknown, max: number) =>
  typeof value === "string" ? value.replace(/[<>]/g, "").replace(/\s+/g, " ").trim().slice(0, max) : "";

function required(value: string, rule: FieldRule, errors: string[]) {
  if ((rule.required ?? true) && value.length < (rule.min ?? 1)) errors.push(`${rule.label} es obligatorio.`);
  if (value.length > rule.max) errors.push(`${rule.label} excede la longitud permitida.`);
}

export function parseDemo(input: unknown): { data?: DemoRequest; errors?: string[] } {
  const body = (input && typeof input === "object" ? input : {}) as Record<string, unknown>;
  const data: DemoRequest = {
    name: strip(body.name, 100), phone: strip(body.phone, 25), companyName: strip(body.companyName, 120),
    ruc: strip(body.ruc, 11), email: strip(body.email, 120).toLowerCase(), sector: strip(body.sector, 80),
    message: strip(body.message, 1000), website: strip(body.website, 200),
  };
  const errors: string[] = [];
  required(data.name, { label: "Nombre y apellidos", max: 100 }, errors);
  required(data.phone, { label: "Celular", max: 25 }, errors);
  required(data.email, { label: "Correo", max: 120 }, errors);
  required(data.sector, { label: "Giro", max: 80 }, errors);
  required(data.message, { label: "Proceso a mejorar", max: 1000 }, errors);
  if (data.ruc && !/^\d{11}$/.test(data.ruc)) errors.push("El RUC debe tener 11 dígitos.");
  if (data.phone.replace(/\D/g, "").length < 9) errors.push("Ingresa un celular válido.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.push("Ingresa un correo válido.");
  return errors.length ? { errors } : { data };
}

export function parseComplaint(input: unknown): { data?: ComplaintRequest; errors?: string[] } {
  const body = (input && typeof input === "object" ? input : {}) as Record<string, unknown>;
  const data: ComplaintRequest = {
    nombre: strip(body.nombre, 80), apellido: strip(body.apellido, 80), tipoDoc: strip(body.tipoDoc, 30),
    numDoc: strip(body.numDoc, 30), telefono: strip(body.telefono, 25), email: strip(body.email, 120),
    direccion: strip(body.direccion, 180), tipoReclamo: strip(body.tipoReclamo, 20),
    descripcionBien: strip(body.descripcionBien, 400), detalle: strip(body.detalle, 3000),
    pedidoConcreto: strip(body.pedidoConcreto, 1500), aceptaTerminos: body.aceptaTerminos === true,
    website: strip(body.website, 200),
  };
  const errors: string[] = [];
  for (const [key, label, max] of [["nombre", "Nombres", 80], ["apellido", "Apellidos", 80], ["tipoDoc", "Tipo de documento", 30], ["numDoc", "Número de documento", 30], ["telefono", "Teléfono", 25], ["email", "Correo", 120], ["direccion", "Domicilio", 180], ["detalle", "Detalle", 3000], ["pedidoConcreto", "Pedido concreto", 1500]] as const) required(data[key], { label, max }, errors);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.push("Ingresa un correo válido.");
  if (!data.aceptaTerminos) errors.push("Debes declarar la veracidad de la información.");
  return errors.length ? { errors } : { data };
}

const attempts = new Map<string, number[]>();
export function isRateLimited(ip: string, limit = 5, windowMs = 10 * 60 * 1000) {
  const now = Date.now();
  const values = (attempts.get(ip) ?? []).filter((time) => now - time < windowMs);
  values.push(now);
  attempts.set(ip, values);
  return values.length > limit;
}

export function clientIp(headers: Headers) {
  return headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
}
