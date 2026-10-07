"use client";

import { useState } from "react";
import { getWhatsAppUrl } from "@/config/company";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import Image from "next/image";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Floating Card Popup */}
      {isOpen && (
        <div className="mb-3 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-white shadow-inner flex items-center justify-center">
                  <Image
                    src="/logo-breicorp.webp"
                    alt="BREICORP"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-300 border-2 border-emerald-700 rounded-full"></span>
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">Asesoría BREICORP</h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1 mt-0.5">
                  <span className="inline-block w-1.5 h-1.5 bg-emerald-300 rounded-full animate-pulse"></span>
                  Atención comercial por WhatsApp
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Cerrar chat de WhatsApp"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Card Body */}
          <div className="p-4 bg-slate-50 text-slate-700 text-xs space-y-3">
            <div className="bg-white p-3 rounded-2xl rounded-tl-sm shadow-sm border border-slate-100 max-w-[90%]">
              <p className="font-medium text-slate-800">
                ¡Hola! 👋 ¿Necesitas digitalizar tu facturación electrónica o controlar tu inventario?
              </p>
              <p className="text-[11px] text-slate-500 mt-1">
                Cuéntanos el giro de tu empresa y te mostramos cómo funciona en 15 minutos.
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] text-slate-500 justify-center pt-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Demostración guiada sin compromiso</span>
            </div>
          </div>

          {/* Card Footer / Action */}
          <div className="p-3 bg-white border-t border-slate-100">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs rounded-xl shadow transition-all duration-150 transform hover:scale-[1.02]"
            >
              <span>Abrir chat de WhatsApp</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Contactar por WhatsApp"
      >
        <span className="relative flex items-center justify-center">
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-300 border-2 border-white rounded-full"></span>
        </span>
        <span className="font-bold text-sm tracking-tight hidden sm:inline-block pr-1">
          {isOpen ? "Cerrar" : "Consultar por WhatsApp"}
        </span>
      </button>
    </div>
  );
}
