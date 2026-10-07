"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  TrendingUp,
  Receipt,
  Boxes,
  Check,
  Smartphone,
  Server,
} from "lucide-react";
import { getWhatsAppUrl } from "@/config/company";

import Image from "next/image";

export function Hero() {
  const [activeTab, setActiveTab] = useState<"pos" | "kardex" | "sunat">("pos");

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-12 pb-24 lg:pt-16 lg:pb-32">
      {/* Background glowing gradients & tech grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange-600/30 rounded-full blur-[140px]"></div>
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-blue-600/30 rounded-full blur-[140px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill badge with logo dot */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-orange-500/50 text-orange-300 text-xs font-semibold shadow-inner">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span>Facturación electrónica para empresas peruanas</span>
            </div>

            {/* Main Headline with Corporate Orange Accent */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-white leading-[1.12]">
              El software empresarial que pone orden en tus{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-200">
                ventas, inventario y facturación
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Centraliza tus ventas en mostrador, emisión inmediata de comprobantes electrónicos,
              control de Kardex físico-valorizado y reportes en tiempo real. Creado especialmente
              para la realidad operativa de empresas peruanas.
            </p>

            {/* Micro value checks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-slate-300 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Boletas y Facturas SUNAT</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Control multi-sucursal</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Migración sin perder datos</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/contacto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 hover:from-orange-600 hover:via-orange-700 hover:to-amber-700 active:from-orange-700 text-white font-bold text-base shadow-lg shadow-orange-500/25 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Solicitar demostración guiada</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <a
                href={getWhatsAppUrl("Hola, deseo conocer una demo de BREICORP y saber los precios para mi empresa.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-slate-200 hover:text-white font-semibold text-base transition-colors"
              >
                <span>Consultar por WhatsApp</span>
              </a>
            </div>

            {/* Bottom trust remark */}
            <div className="pt-2 text-xs text-slate-400 flex items-center justify-center lg:justify-start gap-3">
              <span>Planes desde S/ 50 al mes</span>
              <span>•</span>
              <span>Sin contratos forzosos</span>
              <span>•</span>
              <span>Capacitación incluida</span>
            </div>
          </div>

          {/* Right Column: Interactive Platform Preview / Mockup */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer decorative ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-blue-600 to-cyan-500 rounded-3xl blur-md opacity-35"></div>

              {/* Main Mockup Card */}
              <div className="relative rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden">
                {/* Mockup Top Window Header */}
                <div className="bg-slate-950/80 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                    <Image
                      src="/logo-breicorp.webp"
                      alt="Logo BREICORP"
                      width={18}
                      height={18}
                      className="rounded ml-1.5 inline-block shrink-0"
                    />
                    <span className="text-xs text-slate-300 font-mono font-medium">app.breicorp.com</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Vista demostrativa</span>
                  </div>
                </div>

                {/* Tab Switcher inside mockup */}
                <div className="p-3 bg-slate-900/90 border-b border-slate-800 flex gap-2">
                  <button
                    onClick={() => setActiveTab("pos")}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                      activeTab === "pos"
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-sm"
                        : "text-slate-400 hover:text-white hover:bg-slate-800"
                    }`}
                  >
                    <Receipt className="w-3.5 h-3.5" />
                    <span>Punto de Venta</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("kardex")}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                      activeTab === "kardex"
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-sm"
                        : "text-slate-400 hover:text-white hover:bg-slate-800"
                    }`}
                  >
                    <Boxes className="w-3.5 h-3.5" />
                    <span>Kardex & Stock</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("sunat")}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                      activeTab === "sunat"
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-sm"
                        : "text-slate-400 hover:text-white hover:bg-slate-800"
                    }`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Comprobantes</span>
                  </button>
                </div>

                {/* Tab Content 1: POS */}
                {activeTab === "pos" && (
                  <div className="p-5 space-y-4">
                    {/* Metrics strip */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
                        <div className="text-[11px] text-slate-400">Ventas Hoy (Sede Principal)</div>
                        <div className="text-xl font-black text-white mt-0.5">S/ 4,892.50</div>
                        <div className="text-[10px] text-emerald-400 mt-0.5 flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          <span>+18.4% vs. ayer</span>
                        </div>
                      </div>
                      <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
                        <div className="text-[11px] text-slate-400">Comprobantes Emitidos</div>
                        <div className="text-xl font-black text-cyan-300 mt-0.5">64 tickets</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">0 rechazos SUNAT</div>
                      </div>
                    </div>

                    {/* Simulated live POS order */}
                    <div className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800 space-y-2.5">
                      <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-1.5">
                        <span>Último Comprobante</span>
                        <span className="text-emerald-400 font-mono font-medium">B001-0004289</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-200">Cliente: Inversiones Los Andes S.A.C.</span>
                        <span className="bg-blue-900/60 text-blue-300 px-2 py-0.5 rounded text-[10px] font-mono">
                          RUC 20491029381
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-xs text-slate-300">
                        <span>3 items • Pago con Yape / Transferencia</span>
                        <span className="font-bold text-white text-sm">S/ 380.00</span>
                      </div>
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[11px] text-slate-400">Estado SUNAT:</span>
                        <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">
                          <Check className="w-3 h-3" /> CDR RECIBIDO
                        </span>
                      </div>
                    </div>

                    {/* Quick action bar */}
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-slate-800/80 p-2 rounded-lg text-center text-slate-300 font-medium">
                        Cierre de caja X/Z
                      </div>
                      <div className="bg-blue-600/80 text-white p-2 rounded-lg text-center font-bold">
                        Nueva venta rápida [F2]
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab Content 2: Kardex */}
                {activeTab === "kardex" && (
                  <div className="p-5 space-y-3">
                    <div className="text-xs font-semibold text-slate-300 flex items-center justify-between">
                      <span>Stock Multialmacén en Tiempo Real</span>
                      <span className="text-[11px] text-blue-400">3 almacenes activos</span>
                    </div>

                    <div className="space-y-2">
                      <div className="bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60 flex items-center justify-between text-xs">
                        <div>
                          <div className="font-medium text-white">Aceite Industrial Sintético 5W-30</div>
                          <div className="text-[11px] text-slate-400">SKU: IND-530 • Almacén Central</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-emerald-400">142 unid.</div>
                          <div className="text-[10px] text-slate-400">Mín: 30</div>
                        </div>
                      </div>

                      <div className="bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60 flex items-center justify-between text-xs">
                        <div>
                          <div className="font-medium text-white">Filtro de Aire Alto Flujo K-2</div>
                          <div className="text-[11px] text-slate-400">SKU: FLT-002 • Sucursal 2</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-amber-400">8 unid.</div>
                          <div className="text-[10px] text-amber-300">¡Alerta stock bajo!</div>
                        </div>
                      </div>

                      <div className="bg-slate-800/60 p-2.5 rounded-xl border border-slate-700/60 flex items-center justify-between text-xs">
                        <div>
                          <div className="font-medium text-white">Batería Sellada 12V 70Ah</div>
                          <div className="text-[11px] text-slate-400">SKU: BAT-1270 • Despacho</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-white">54 unid.</div>
                          <div className="text-[10px] text-slate-400">Valorizado: S/ 16,200</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-950/40 border border-blue-800/50 p-2.5 rounded-xl text-center text-xs text-blue-300">
                      Kardex valorizado según método Promedio Ponderado / PEPS.
                    </div>
                  </div>
                )}

                {/* Tab Content 3: SUNAT */}
                {activeTab === "sunat" && (
                  <div className="p-5 space-y-3.5 text-xs">
                    <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-white">Conexión SUNAT en Vivo</span>
                        <span className="bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded text-[10px] font-bold">
                          FLUJO DISPONIBLE
                        </span>
                      </div>
                      <p className="text-slate-400 text-[11px]">
                        Generación de XML firmado, consulta de CDR y PDF con código QR para el comprobante.
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex justify-between py-1.5 border-b border-slate-800 text-slate-300">
                        <span>Facturas Electrónicas (01)</span>
                        <span className="text-emerald-400 font-mono">Sincronizado</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-800 text-slate-300">
                        <span>Boletas de Venta (03)</span>
                        <span className="text-emerald-400 font-mono">Sincronizado</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-slate-800 text-slate-300">
                        <span>Guías de Remisión GRE (09/31)</span>
                        <span className="text-emerald-400 font-mono">QR SUNAT Listo</span>
                      </div>
                      <div className="flex justify-between py-1.5 text-slate-300">
                        <span>Notas de Crédito / Débito (07/08)</span>
                        <span className="text-emerald-400 font-mono">Operativo</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Mockup footer ticker */}
                <div className="bg-slate-950 px-4 py-2.5 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Smartphone className="w-3.5 h-3.5 text-blue-400" />
                    <span>App móvil sincronizada</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Server className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Respaldo en la nube cada 60s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
