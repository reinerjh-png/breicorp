"use client";

import { useState } from "react";
import { PageHeader } from "@/components/shared/PageHeader";
import { company } from "@/config/company";
import { BookOpen, CheckCircle2, AlertCircle, Send } from "lucide-react";

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

  const [submitted, setSubmitted] = useState(false);
  const [correlativo, setCorrelativo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const corr = `LR-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setCorrelativo(corr);
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        badge="Normativa INDECOPI"
        title="Libro de Reclamaciones Virtual"
        description={`Conforme a lo establecido en el Código de Protección y Defensa del Consumidor (Ley N.° 29571) de la República del Perú.`}
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

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-2xl font-black text-slate-900">
                Reclamación Registrada con Éxito
              </h3>
              <p className="text-sm text-slate-700">
                Tu código de registro es: <strong className="text-emerald-700 text-base">{correlativo}</strong>.
              </p>
              <p className="text-xs text-slate-600 max-w-lg mx-auto leading-relaxed">
                De conformidad con la normativa legal vigente, te enviaremos una copia íntegra de esta hoja de reclamación a tu correo electrónico ({formData.email}) y atenderemos tu solicitud en un plazo máximo de quince (15) días hábiles.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-xs sm:text-sm">
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
                      className="text-blue-600"
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
                      className="text-blue-600"
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
                className="w-full py-3.5 px-6 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Hoja de Reclamación Virtual</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
