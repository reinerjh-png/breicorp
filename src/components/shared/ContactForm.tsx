"use client";

import { useState } from "react";
import { company, getWhatsAppUrl } from "@/config/company";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Building,
  User,
  Phone,
  Mail,
  FileText,
  Briefcase,
  MessageCircle,
} from "lucide-react";

export function ContactForm({ planPreselected }: { planPreselected?: string }) {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    ruc: "",
    phone: "",
    email: "",
    sector: "comercio",
    plan: planPreselected || "negocio",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Basic Peruvian RUC validation if entered
    if (formData.ruc && formData.ruc.trim().length !== 11) {
      setError("El RUC debe tener exactamente 11 dígitos numéricos.");
      setLoading(false);
      return;
    }

    // Basic Phone validation
    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (cleanPhone.length < 9) {
      setError("Por favor ingresa un número de teléfono o celular válido de 9 dígitos.");
      setLoading(false);
      return;
    }

    try {
      // Simulate API submission (or webhook endpoint)
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSubmitted(true);
    } catch {
      setError("Hubo un error al procesar tu solicitud. Por favor contáctanos por WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl text-center space-y-5 animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <h3 className="text-2xl font-black text-slate-900 tracking-tight">
          ¡Solicitud recibida con éxito!
        </h3>

        <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
          Gracias <strong className="text-slate-900">{formData.name}</strong>. Un especialista comercial
          de BREICORP revisará la información de{" "}
          <strong className="text-slate-900">{formData.companyName || "tu empresa"}</strong> y te
          contactará en menos de 2 horas hábiles al {formData.phone}.
        </p>

        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={getWhatsAppUrl(`Hola, acabo de enviar mi formulario desde la web para ${formData.companyName || formData.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Acelerar atención por WhatsApp</span>
          </a>

          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                companyName: "",
                ruc: "",
                phone: "",
                email: "",
                sector: "comercio",
                plan: "negocio",
                message: "",
              });
            }}
            className="text-xs text-slate-500 hover:text-slate-800 underline py-2"
          >
            Enviar otra consulta
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          Solicita tu demostración guiada
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Completa los datos de tu empresa y coordinamos una sesión virtual personalizada.
        </p>
      </div>

      {error && (
        <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Row 1: Name and Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Nombre y Apellidos *
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ej. Carlos Mendoza"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white text-slate-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Celular / WhatsApp *
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Ej. 987 654 321"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white text-slate-900"
              />
            </div>
          </div>
        </div>

        {/* Row 2: Company Name and RUC */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Nombre Comercial de tu Empresa
            </label>
            <div className="relative">
              <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                placeholder="Ej. Distribuidora Santa Rosa"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white text-slate-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              RUC (11 dígitos)
            </label>
            <div className="relative">
              <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                maxLength={11}
                value={formData.ruc}
                onChange={(e) => setFormData({ ...formData, ruc: e.target.value })}
                placeholder="Ej. 20601234567"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white text-slate-900"
              />
            </div>
          </div>
        </div>

        {/* Row 3: Email and Sector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Correo Electrónico *
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="carlos@tuempresa.pe"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white text-slate-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Giro del Negocio
            </label>
            <div className="relative">
              <Briefcase className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <select
                value={formData.sector}
                onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white text-slate-900"
              >
                <option value="comercio">Comercializadora / Retail / Tienda</option>
                <option value="distribuidora">Distribuidora Mayorista / Almacén</option>
                <option value="ferreteria">Ferretería y Construcción</option>
                <option value="farmacia">Farmacia / Botica</option>
                <option value="servicios">Empresa de Servicios / Taller</option>
                <option value="otro">Otro sector</option>
              </select>
            </div>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            ¿Qué procesos te gustaría automatizar o resolver primero?
          </label>
          <textarea
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Ej. Busco controlar mi stock en 2 tiendas, emitir guías de remisión y reemplazar la web de SUNAT."
            className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white text-slate-900"
          ></textarea>
        </div>

        {/* Submit button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:via-orange-700 hover:to-amber-700 active:from-orange-700 disabled:opacity-50 text-white font-bold text-sm shadow-lg shadow-orange-500/20 transition-all duration-200"
          >
            {loading ? (
              <span>Procesando solicitud...</span>
            ) : (
              <>
                <span>Solicitar demostración sin compromiso</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

        <p className="text-[11px] text-slate-400 text-center pt-2">
          Tus datos están protegidos conforme a la Ley N.° 29733 (Ley de Protección de Datos Personales en Perú).
        </p>
      </form>
    </div>
  );
}
