"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { AlertCircle, Building, User, Phone, Mail, FileText, Briefcase, Send, type LucideIcon } from "lucide-react";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";
import { company, getWhatsAppUrl } from "@/config/company";

type Status = "idle" | "loading" | "success" | "error";
type FormData = typeof initialForm;
type FieldName = keyof FormData;
const initialForm = { name: "", companyName: "", ruc: "", phone: "", email: "", sector: "comercio", message: "", website: "" };

function InputField({ id, label, icon: Icon, error, optional, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { id: FieldName; label: string; icon: LucideIcon; error?: string; optional?: boolean }) {
  const errorId = `${id}-error`;
  return <div><label htmlFor={id} className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700">{label}{optional && <span className="ml-1 font-medium normal-case text-slate-500">(opcional)</span>}</label><div className="relative"><Icon aria-hidden="true" className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400"/><input id={id} name={id} aria-invalid={Boolean(error)} aria-describedby={error ? errorId : undefined} className={`min-h-11 w-full rounded-xl border bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:bg-white focus:ring-2 focus:ring-orange-500 ${error ? "border-rose-400" : "border-slate-300"}`} {...props}/></div>{error && <p id={errorId} className="mt-1.5 text-xs font-medium text-rose-700">{error}</p>}</div>;
}

export function ContactForm() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<FieldName | "form", string>>>({});
  const formRef = useRef<HTMLFormElement>(null);
  const started = useRef(false);
  const update = (field: FieldName, value: string) => { setFormData((current) => ({ ...current, [field]: value })); setErrors((current) => ({ ...current, [field]: undefined, form: undefined })); };
  const markStarted = () => { if (started.current) return; started.current = true; window.dispatchEvent(new CustomEvent("breicorp:analytics", { detail: { name: "demo_form_start" } })); };
  const validate = () => {
    const next: Partial<Record<FieldName, string>> = {};
    if (!formData.name.trim()) next.name = "Ingresa tu nombre y apellidos.";
    if (formData.phone.replace(/\D/g, "").length < 9) next.phone = "Ingresa un celular válido de al menos 9 dígitos.";
    if (formData.ruc && !/^\d{11}$/.test(formData.ruc)) next.ruc = "El RUC debe tener exactamente 11 dígitos.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) next.email = "Ingresa un correo electrónico válido.";
    if (!formData.message.trim()) next.message = "Cuéntanos qué proceso deseas mejorar.";
    return next;
  };
  const focusFirstError = (next: Partial<Record<FieldName, string>>) => {
    const first = Object.keys(next)[0];
    if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
  };
  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    const clientErrors = validate();
    if (Object.keys(clientErrors).length) { setErrors(clientErrors); setStatus("error"); focusFirstError(clientErrors); return; }
    setStatus("loading"); setErrors({});
    try {
      const response = await fetch("/api/demo", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "No pudimos enviar la solicitud.");
      setStatus("success"); setFormData(initialForm);
      window.dispatchEvent(new CustomEvent("breicorp:analytics", { detail: { name: "demo_form_submit" } }));
    } catch (cause) { setErrors({ form: cause instanceof Error ? cause.message : "No pudimos enviar la solicitud." }); setStatus("error"); formRef.current?.focus(); }
  };
  const whatsapp = () => {
    const sectors: Record<string, string> = { comercio: "Comercializadora / Retail / Tienda", distribuidora: "Distribuidora Mayorista / Almacén", ferreteria: "Ferretería y Construcción", farmacia: "Farmacia / Botica", servicios: "Empresa de Servicios / Taller", otro: "Otro sector" };
    const fields = [["Nombre", formData.name], ["Celular / WhatsApp", formData.phone], ["Empresa", formData.companyName], ["RUC", formData.ruc], ["Correo", formData.email], ["Giro", sectors[formData.sector]], ["Proceso a mejorar", formData.message]].filter(([, value]) => value?.trim());
    window.dispatchEvent(new CustomEvent("breicorp:analytics", { detail: { name: "whatsapp_click" } }));
    window.open(getWhatsAppUrl(["Hola, quiero solicitar una demostración guiada de BREICORP.", "", ...fields.map(([label, value]) => `${label}: ${value}`)].join("\n")), "_blank", "noopener,noreferrer");
  };

  if (status === "success") return <div role="status" aria-live="polite" tabIndex={-1} className="space-y-4 rounded-3xl border border-emerald-200 bg-white p-8 text-center shadow-xl sm:p-10"><div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"><Send className="h-5 w-5" /></div><h3 className="text-xl font-black text-slate-900">Gracias. Hemos recibido tu solicitud de demostración.</h3><p className="text-sm text-slate-600">Nos comunicaremos contigo por los canales indicados.</p><button type="button" onClick={() => setStatus("idle")} className="min-h-11 text-sm font-bold text-orange-700 hover:underline">Enviar otra solicitud</button></div>;

  return <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10"><div className="mb-6"><h2 className="text-xl font-black tracking-tight text-slate-900 sm:text-2xl">Solicita tu demostración guiada</h2><p className="mt-1 text-sm text-slate-600">Completa los datos principales y coordinamos una sesión virtual.</p></div>
    <form ref={formRef} onSubmit={submit} onFocus={markStarted} className="space-y-4" noValidate tabIndex={-1} aria-describedby={errors.form ? "demo-form-error" : undefined}>
      <div aria-live="assertive">{errors.form && <div id="demo-form-error" className="mb-6 flex items-center gap-2 rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800"><AlertCircle className="h-4 w-4 shrink-0"/><span>{errors.form}</span></div>}</div>
      <input tabIndex={-1} autoComplete="off" aria-hidden="true" value={formData.website} onChange={(e) => update("website", e.target.value)} className="absolute h-px w-px overflow-hidden opacity-0" name="website" />
      <div className="grid gap-4 sm:grid-cols-2"><InputField id="name" label="Nombre y apellidos" placeholder="Ej. Juan Pérez" icon={User} required maxLength={100} autoComplete="name" value={formData.name} onChange={(e)=>update("name",e.target.value)} error={errors.name}/><InputField id="phone" label="Celular / WhatsApp" placeholder="Ej. 948 261 382" icon={Phone} required type="tel" inputMode="tel" maxLength={25} autoComplete="tel" value={formData.phone} onChange={(e)=>update("phone",e.target.value)} error={errors.phone}/></div>
      <div className="grid gap-4 sm:grid-cols-2"><InputField id="companyName" label="Empresa" placeholder="Ej. Comercial ABC S.A.C." optional icon={Building} maxLength={120} autoComplete="organization" value={formData.companyName} onChange={(e)=>update("companyName",e.target.value)} error={errors.companyName}/><InputField id="ruc" label="RUC" placeholder="Ej. 20615859312" optional icon={FileText} inputMode="numeric" maxLength={11} value={formData.ruc} onChange={(e)=>update("ruc",e.target.value.replace(/\D/g,""))} error={errors.ruc}/></div>
      <div className="grid gap-4 sm:grid-cols-2"><InputField id="email" label="Correo electrónico" placeholder="Ej. contacto@miempresa.pe" icon={Mail} required type="email" inputMode="email" maxLength={120} autoComplete="email" value={formData.email} onChange={(e)=>update("email",e.target.value)} error={errors.email}/><div><label htmlFor="sector" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700">Giro del negocio</label><div className="relative"><Briefcase className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400"/><select id="sector" name="sector" value={formData.sector} onChange={(e)=>update("sector",e.target.value)} className="min-h-11 w-full rounded-xl border border-slate-300 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-orange-500"><option value="comercio">Comercializadora / Retail / Tienda</option><option value="distribuidora">Distribuidora Mayorista / Almacén</option><option value="ferreteria">Ferretería y Construcción</option><option value="farmacia">Farmacia / Botica</option><option value="servicios">Empresa de Servicios / Taller</option><option value="otro">Otro sector</option></select></div></div></div>
      <div><label htmlFor="message" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-700">Proceso que deseas mejorar</label><textarea id="message" name="message" placeholder="Ej. Facturación electrónica inmediata, control de inventario multialmacén y reportes de ventas..." required maxLength={1000} rows={4} value={formData.message} onChange={(e)=>update("message",e.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} className={`w-full rounded-xl border bg-slate-50 p-3 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-orange-500 ${errors.message ? "border-rose-400" : "border-slate-300"}`}/>{errors.message&&<p id="message-error" className="mt-1.5 text-xs font-medium text-rose-700">{errors.message}</p>}</div>
      <button type="submit" disabled={status==="loading"} aria-busy={status==="loading"} className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-orange-700 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-colors hover:bg-orange-800 disabled:cursor-wait disabled:opacity-60"><Send className="h-4 w-4"/><span>{status==="loading"?"Enviando solicitud…":"Solicitar demostración"}</span></button>
      <button type="button" onClick={whatsapp} className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-emerald-600 px-6 py-3 text-sm font-bold text-emerald-700 transition-colors hover:bg-emerald-50"><WhatsAppIcon className="h-4 w-4 fill-current text-emerald-600"/><span>Solicitar demo por WhatsApp</span></button>
      <p className="pt-2 text-center text-[11px] leading-5 text-slate-500">Al enviar, autorizas el contacto de BREICORP. Consulta nuestra <Link href={company.legalLinks.privacyPolicy} className="font-semibold text-orange-700 hover:underline">Política de Privacidad</Link>.</p>
    </form></div>;
}
