"use client";

import { useState } from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import { company, getWhatsAppUrl } from "@/config/company";
import { AlertCircle, MessageCircle } from "lucide-react";

export default function LibroReclamacionesPage() {
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
  });

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
                <p className="font-bold">El registro web todavía no está habilitado.</p>
                <p className="text-xs leading-relaxed text-amber-900">
                  Este formulario se conserva como vista previa y no envía ni almacena información. Para recibir orientación por el canal confirmado de BREICORP, comunícate por WhatsApp.
                </p>
                <a
                  href={getWhatsAppUrl("Hola, necesito orientación para presentar un reclamo o una queja ante BREICORP.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-emerald-700"
                >
                  <MessageCircle className="h-4 w-4" />
                  Solicitar orientación por WhatsApp
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={(event) => event.preventDefault()} className="space-y-6 text-xs sm:text-sm">
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-900 border-b pb-2">
                1. Identificación del Consumidor Reclamante
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold mb-1">Nombres *</label>
                  <input
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Apellidos *</label>
                  <input
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
                  <label className="block font-semibold mb-1">Tipo de Documento *</label>
                  <select
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
                  <label className="block font-semibold mb-1">Número de Documento *</label>
                  <input
                    type="text"
                    required
                    value={formData.numDoc}
                    onChange={(e) => setFormData({ ...formData, numDoc: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Teléfono / Celular *</label>
                  <input
                    type="tel"
                    required
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1">Correo Electrónico *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Domicilio *</label>
                <input
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
                <label className="flex items-center gap-2 cursor-pointer">
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
                <label className="flex items-center gap-2 cursor-pointer">
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
                <label className="block font-semibold mb-1">Descripción del Servicio Contratado</label>
                <input
                  type="text"
                  placeholder="Ej. Plan Negocio de facturación electrónica"
                  value={formData.descripcionBien}
                  onChange={(e) => setFormData({ ...formData, descripcionBien: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Detalle del Reclamo o Queja *</label>
                <textarea
                  rows={4}
                  required
                  value={formData.detalle}
                  onChange={(e) => setFormData({ ...formData, detalle: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg"
                ></textarea>
              </div>

              <div>
                <label className="block font-semibold mb-1">Pedido Concreto del Consumidor *</label>
                <textarea
                  rows={2}
                  required
                  value={formData.pedidoConcreto}
                  onChange={(e) => setFormData({ ...formData, pedidoConcreto: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg"
                ></textarea>
              </div>
            </div>

            <div className="pt-2">
              <label className="flex items-start gap-2 cursor-pointer text-xs text-slate-600">
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

            <button
              type="submit"
              disabled
              aria-disabled="true"
              className="w-full cursor-not-allowed py-3.5 px-6 bg-slate-300 text-slate-600 font-bold rounded-xl flex items-center justify-center gap-2"
            >
              <span>Envío web en proceso de habilitación</span>
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
