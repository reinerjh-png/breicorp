"use client";

import { useEffect, useRef, useState } from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import { company, getWhatsAppUrl } from "@/config/company";
import { AlertCircle, MessageCircle } from "lucide-react";

export default function LibroReclamacionesPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [receiptId, setReceiptId] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    tipoDoc: "DNI",
    numDoc: "",
    telefono: "",
    email: "",
    direccion: "",
    tipoReclamo: "reclamo", // reclamo o queja
    montoReclamado: "",
    descripcionBien: "",
    detalle: "",
    pedidoConcreto: "",
    aceptaTerminos: false,
    website: "",
  });

  const submit = async (event: React.FormEvent) => {
    event.preventDefault(); setStatus("loading"); setError("");
    try {
      const response = await fetch("/api/libro-reclamaciones", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formData) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "No pudimos enviar el reclamo.");
      setReceiptId(result.id); setStatus("success");
    } catch (cause) { setError(cause instanceof Error ? cause.message : "No pudimos enviar el reclamo."); setStatus("error"); requestAnimationFrame(() => formRef.current?.focus()); }
  };
  useEffect(() => { if (status === "success") successRef.current?.focus(); }, [status]);

  return (
    <>
      <PageHeader
        badge="Normativa INDECOPI"
        title="Libro de Reclamaciones Virtual"
        description="Conforme a lo establecido en el Código de Protección y Defensa del Consumidor (Ley N.° 29571) de la República del Perú."
        breadcrumbs={[{ label: "Libro de Reclamaciones" }]}
      />

      <section className="py-16 bg-white text-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-8 text-xs text-slate-600 space-y-2">
            <div className="font-bold text-slate-900 text-sm">Información del Proveedor:</div>
            <div><strong>Razón Social:</strong> {company.legalName}</div>
            <div><strong>RUC:</strong> {company.ruc} | <strong>Partida:</strong> {company.partidaElectronica}</div>
            <div><strong>Domicilio:</strong> {company.address}</div>
            <p className="pt-2 text-[11px] text-slate-500">
              * <strong>Reclamo:</strong> Disconformidad relacionada a los bienes o servicios brindados.<br />
              * <strong>Queja:</strong> Disconformidad no relacionada a los bienes o servicios, sino al malestar o descontento respecto a la atención al público.
            </p>
          </div>

          <div className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-950">
            <div className="flex items-start gap-3">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
              <div className="space-y-2">
                <p className="font-bold">Recepción por correo, sin almacenamiento web.</p>
                <p className="text-xs leading-relaxed text-amber-900">
                  Al enviar, recibirás una copia y un identificador que acredita la recepción por correo. Esta solución debe ser revisada legalmente antes de su uso en producción.
                </p>
                <a
                  href={getWhatsAppUrl("Hola, necesito orientación para presentar un reclamo o una queja ante BREICORP.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-emerald-700"
                >
                  <MessageCircle className="h-4 w-4" />
                  Solicitar orientación por WhatsApp
                </a>
              </div>
            </div>
          </div>

          {status === "success" ? <div ref={successRef} tabIndex={-1} role="status" aria-live="polite" className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-sm text-emerald-950 space-y-2"><p className="font-bold">Tu reclamo o queja fue recibido por correo.</p><p>Identificador de recepción: <strong>{receiptId}</strong></p><p className="text-xs">También enviamos una copia al correo que registraste. Este identificador corresponde a la recepción por correo y no a un sistema interno de trazabilidad.</p></div> : <form ref={formRef} tabIndex={-1} aria-busy={status === "loading"} onSubmit={submit} className="space-y-6 text-xs sm:text-sm">
            {error && <div role="alert" aria-live="assertive" className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-rose-800">{error}</div>}
            <input tabIndex={-1} autoComplete="off" aria-hidden="true" value={formData.website} onChange={(e) => setFormData({ ...formData, website: e.target.value })} className="absolute h-px w-px overflow-hidden opacity-0" />
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-900 border-b pb-2">
                1. Identificación del Consumidor Reclamante
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="reclamo-nombre" className="block font-semibold mb-1">Nombres *</label>
                  <input
                    id="reclamo-nombre"
                    name="nombre"
                    autoComplete="given-name"
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg"
                  />
                </div>
                <div>
                  <label htmlFor="reclamo-apellido" className="block font-semibold mb-1">Apellidos *</label>
                  <input
                    id="reclamo-apellido"
                    name="apellido"
                    autoComplete="family-name"
                    type="text"
                    required
                    value={formData.apellido}
                    onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="reclamo-tipo-doc" className="block font-semibold mb-1">Tipo de Documento *</label>
                  <select
                    id="reclamo-tipo-doc"
                    name="tipoDoc"
                    value={formData.tipoDoc}
                    onChange={(e) => setFormData({ ...formData, tipoDoc: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg"
                  >
                    <option value="DNI">DNI</option>
                    <option value="RUC">RUC</option>
                    <option value="CE">Carné de Extranjería</option>
                    <option value="Pasaporte">Pasaporte</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="reclamo-num-doc" className="block font-semibold mb-1">Número de Documento *</label>
                  <input
                    id="reclamo-num-doc"
                    name="numDoc"
                    inputMode="numeric"
                    maxLength={30}
                    type="text"
                    required
                    value={formData.numDoc}
                    onChange={(e) => setFormData({ ...formData, numDoc: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg"
                  />
                </div>
                <div>
                  <label htmlFor="reclamo-telefono" className="block font-semibold mb-1">Teléfono / Celular *</label>
                  <input
                    id="reclamo-telefono"
                    name="telefono"
                    autoComplete="tel"
                    inputMode="tel"
                    maxLength={25}
                    type="tel"
                    required
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="reclamo-email" className="block font-semibold mb-1">Correo Electrónico *</label>
                <input
                  id="reclamo-email"
                  name="email"
                  autoComplete="email"
                  inputMode="email"
                  maxLength={120}
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg"
                />
              </div>

              <div>
                <label htmlFor="reclamo-direccion" className="block font-semibold mb-1">Domicilio *</label>
                <input
                  id="reclamo-direccion"
                  name="direccion"
                  autoComplete="street-address"
                  maxLength={180}
                  type="text"
                  required
                  value={formData.direccion}
                  onChange={(e) => setFormData({ ...formData, direccion: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg"
                />
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="text-base font-bold text-slate-900 border-b pb-2">
                2. Detalle de la Reclamación
              </h3>

              <div className="flex gap-6">
                <label className="flex min-h-11 items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="tipo"
                    value="reclamo"
                    checked={formData.tipoReclamo === "reclamo"}
                    onChange={() => setFormData({ ...formData, tipoReclamo: "reclamo" })}
                    className="text-orange-600"
                  />
                  <span className="font-bold">Reclamo</span>
                </label>
                <label className="flex min-h-11 items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="tipo"
                    value="queja"
                    checked={formData.tipoReclamo === "queja"}
                    onChange={() => setFormData({ ...formData, tipoReclamo: "queja" })}
                    className="text-orange-600"
                  />
                  <span className="font-bold">Queja</span>
                </label>
              </div>

              <div>
                <label htmlFor="reclamo-servicio" className="block font-semibold mb-1">Descripción del Servicio Contratado</label>
                <input
                  id="reclamo-servicio"
                  name="descripcionBien"
                  maxLength={400}
                  type="text"
                  placeholder="Ej. Plan Negocio de facturación electrónica"
                  value={formData.descripcionBien}
                  onChange={(e) => setFormData({ ...formData, descripcionBien: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg"
                />
              </div>

              <div>
                <label htmlFor="reclamo-monto" className="block font-semibold mb-1">Monto reclamado en soles (opcional)</label>
                <input
                  id="reclamo-monto"
                  name="montoReclamado"
                  inputMode="decimal"
                  maxLength={30}
                  type="text"
                  placeholder="Ej. 150.00"
                  value={formData.montoReclamado}
                  onChange={(e) => setFormData({ ...formData, montoReclamado: e.target.value.replace(/[^\d.,]/g, "") })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg"
                />
              </div>

              <div>
                <label htmlFor="reclamo-detalle" className="block font-semibold mb-1">Detalle del Reclamo o Queja *</label>
                <textarea
                  id="reclamo-detalle"
                  name="detalle"
                  maxLength={3000}
                  rows={4}
                  required
                  value={formData.detalle}
                  onChange={(e) => setFormData({ ...formData, detalle: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg"
                ></textarea>
              </div>

              <div>
                <label htmlFor="reclamo-pedido" className="block font-semibold mb-1">Pedido Concreto del Consumidor *</label>
                <textarea
                  id="reclamo-pedido"
                  name="pedidoConcreto"
                  maxLength={1500}
                  rows={2}
                  required
                  value={formData.pedidoConcreto}
                  onChange={(e) => setFormData({ ...formData, pedidoConcreto: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg"
                ></textarea>
              </div>
            </div>

            <div className="pt-2">
              <label className="flex min-h-11 items-start gap-2 cursor-pointer text-xs text-slate-600">
                <input
                  type="checkbox"
                  required
                  checked={formData.aceptaTerminos}
                  onChange={(e) => setFormData({ ...formData, aceptaTerminos: e.target.checked })}
                  className="mt-0.5"
                />
                <span>
                  Declaro ser el titular del servicio y que la información consignada en esta hoja de reclamación es verídica de conformidad con las leyes peruanas.
                </span>
              </label>
            </div>

            <button type="submit" disabled={status === "loading"} className="min-h-11 w-full py-3.5 px-6 bg-orange-600 hover:bg-orange-700 disabled:cursor-wait disabled:opacity-60 text-white font-bold rounded-xl flex items-center justify-center gap-2">
              <span>{status === "loading" ? "Enviando…" : "Enviar reclamo o queja por correo"}</span>
            </button>
          </form>}
        </div>
      </section>
    </>
  );
}
