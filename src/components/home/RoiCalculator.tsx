"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Calculator,
  Clock,
  Coins,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export function RoiCalculator() {
  const [salesPerDay, setSalesPerDay] = useState(40);
  const [employees, setEmployees] = useState(2);
  const [currentMethod, setCurrentMethod] = useState<"sunat_web" | "manual" | "old_software">("sunat_web");

  // Calculations based on typical business hours and clerical time
  // SUNAT web portal takes ~3 mins per voucher with delays and typing
  // BREICORP takes ~20 seconds
  const minutesSavedPerDoc = currentMethod === "sunat_web" ? 2.5 : currentMethod === "manual" ? 4 : 1.5;
  const monthlyDocs = salesPerDay * 26; // 26 working days
  const hoursSavedMonthly = Math.round((monthlyDocs * minutesSavedPerDoc) / 60);

  // Illustrative valuation only. It is not a promise of savings.
  const averageHourlyCost = 10;
  const laborSavings = hoursSavedMonthly * averageHourlyCost;
  const totalEstimatedMonthlySavings = laborSavings;

  return (
    <section className="defer-render py-20 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 border border-orange-700/60 text-orange-300 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Calculadora de Impacto Operativo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Estima el impacto operativo de reducir tareas manuales
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Ajusta los supuestos para obtener una referencia ilustrativa. El resultado no constituye una promesa de ahorro para tu operación.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-950 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl">
          {/* Controls column */}
          <div className="lg:col-span-6 space-y-6">
            {/* Control 1: Current method */}
            <div>
              <span id="current-method-label" className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                ¿Cómo emites comprobantes o llevas tu stock hoy?
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2" role="group" aria-labelledby="current-method-label">
                <button
                  type="button"
                  onClick={() => setCurrentMethod("sunat_web")}
                  aria-pressed={currentMethod === "sunat_web"}
                  className={`min-h-11 p-3 rounded-xl text-xs font-bold border transition-colors text-center ${
                    currentMethod === "sunat_web"
                      ? "bg-orange-700 border-orange-600 text-white shadow-sm"
                      : "bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800"
                  }`}
                >
                  Portal Web SUNAT
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentMethod("manual")}
                  aria-pressed={currentMethod === "manual"}
                  className={`min-h-11 p-3 rounded-xl text-xs font-bold border transition-colors text-center ${
                    currentMethod === "manual"
                      ? "bg-orange-700 border-orange-600 text-white shadow-sm"
                      : "bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800"
                  }`}
                >
                  Cuaderno / Excel
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentMethod("old_software")}
                  aria-pressed={currentMethod === "old_software"}
                  className={`min-h-11 p-3 rounded-xl text-xs font-bold border transition-colors text-center ${
                    currentMethod === "old_software"
                      ? "bg-orange-700 border-orange-600 text-white shadow-sm"
                      : "bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800"
                  }`}
                >
                  Software antiguo
                </button>
              </div>
            </div>

            {/* Control 2: Daily sales slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor="sales-per-day" className="font-bold text-slate-200">Ventas / comprobantes emitidos por día:</label>
                <span className="text-xl font-black text-orange-400 bg-slate-950/60 px-3 py-0.5 rounded-lg border border-slate-700/60">
                  {salesPerDay} tickets/día
                </span>
              </div>
              <input
                id="sales-per-day"
                type="range"
                min="10"
                max="250"
                step="5"
                value={salesPerDay}
                onChange={(e) => setSalesPerDay(Number(e.target.value))}
                aria-valuetext={`${salesPerDay} comprobantes por día`}
                className="w-full h-11 bg-transparent cursor-pointer accent-orange-500"
              />
              <div className="flex justify-between text-[11px] text-slate-300">
                <span>10 ventas/día</span>
                <span>~{monthlyDocs} al mes</span>
                <span>250+ ventas/día</span>
              </div>
            </div>

            {/* Control 3: Employees */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor="employees-count" className="font-bold text-slate-200">Personas involucradas en ventas o caja:</label>
                <span className="text-xl font-black text-emerald-400 bg-emerald-950/60 px-3 py-0.5 rounded-lg border border-emerald-800/60">
                  {employees} {employees === 1 ? "usuario" : "usuarios"}
                </span>
              </div>
              <input
                id="employees-count"
                type="range"
                min="1"
                max="10"
                step="1"
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                aria-valuetext={`${employees} ${employees === 1 ? "persona" : "personas"}`}
                className="w-full h-11 bg-transparent cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[11px] text-slate-300">
                <span>1 usuario</span>
                <span>5 usuarios</span>
                <span>10 usuarios</span>
              </div>
            </div>
          </div>

          {/* Results column */}
          <div aria-live="polite" className="lg:col-span-6 bg-slate-900/90 rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
            <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Ahorro operativo mensual proyectado:
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 text-slate-300 text-xs mb-1">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>Tiempo recuperado</span>
                </div>
                <div className="text-3xl font-black text-cyan-300">
                  ~{hoursSavedMonthly} hrs
                </div>
                <div className="text-[11px] text-slate-300 mt-1">
                  Equivale a {Math.round((hoursSavedMonthly / 8) * 10) / 10} días laborales al mes
                </div>
              </div>

              <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 text-slate-300 text-xs mb-1">
                  <Coins className="w-4 h-4 text-emerald-400" />
                  <span>Valor referencial del tiempo</span>
                </div>
                <div className="text-3xl font-black text-emerald-400">
                  S/ {totalEstimatedMonthlySavings}
                </div>
                <div className="text-[11px] text-slate-300 mt-1">
                  Calculado con una hora referencial de S/ {averageHourlyCost}
                </div>
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Elimina las filas y esperas molestas de clientes en caja</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Reduce pasos de digitación bajo los supuestos seleccionados</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Compara el ahorro estimado con planes desde S/ 50 al mes</span>
              </div>
            </div>

            <p className="text-[11px] leading-5 text-slate-300">Estimación ilustrativa basada en 26 días laborables y tiempos configurados para cada método. Los resultados reales dependen del proceso, volumen, adopción y configuración de cada empresa.</p>

            <div className="pt-2">
              <Link
                href="/contacto"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-orange-700 hover:bg-orange-800 text-white font-bold text-sm shadow-md transition-colors"
              >
                <span>Comenzar a ahorrar con BREICORP</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
