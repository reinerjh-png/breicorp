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

  // Financial estimate (Average clerical hourly cost ~S/ 8-12 + paper/toner reduction + avoiding inventory shrink)
  const averageHourlyCost = 10;
  const laborSavings = hoursSavedMonthly * averageHourlyCost;
  const paperAndErrors = Math.round(monthlyDocs * 0.15 + (employees * 120));
  const totalEstimatedMonthlySavings = laborSavings + paperAndErrors;

  return (
    <section className="py-20 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 border border-blue-700/60 text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Calculadora de Impacto Operativo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Calcula cuánto tiempo y dinero ahorras cada mes
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Descubre cuántas horas hombre recupera tu equipo al reemplazar procesos manuales
            o el portal web de SUNAT con un flujo de emisión más ágil en BREICORP.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-950 rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl">
          {/* Controls column */}
          <div className="lg:col-span-6 space-y-6">
            {/* Control 1: Current method */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                ¿Cómo emites comprobantes o llevas tu stock hoy?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setCurrentMethod("sunat_web")}
                  className={`p-3 rounded-xl text-xs font-bold border transition-all text-center ${
                    currentMethod === "sunat_web"
                      ? "bg-blue-600 border-blue-500 text-white shadow-sm"
                      : "bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800"
                  }`}
                >
                  Portal Web SUNAT
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentMethod("manual")}
                  className={`p-3 rounded-xl text-xs font-bold border transition-all text-center ${
                    currentMethod === "manual"
                      ? "bg-blue-600 border-blue-500 text-white shadow-sm"
                      : "bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800"
                  }`}
                >
                  Cuaderno / Excel
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentMethod("old_software")}
                  className={`p-3 rounded-xl text-xs font-bold border transition-all text-center ${
                    currentMethod === "old_software"
                      ? "bg-blue-600 border-blue-500 text-white shadow-sm"
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
                <span className="font-bold text-slate-200">Ventas / comprobantes emitidos por día:</span>
                <span className="text-xl font-black text-blue-400 bg-blue-950/60 px-3 py-0.5 rounded-lg border border-blue-800/60">
                  {salesPerDay} tickets/día
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="250"
                step="5"
                value={salesPerDay}
                onChange={(e) => setSalesPerDay(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500">
                <span>10 ventas/día</span>
                <span>~{monthlyDocs} al mes</span>
                <span>250+ ventas/día</span>
              </div>
            </div>

            {/* Control 3: Employees */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="font-bold text-slate-200">Personas involucradas en ventas o caja:</span>
                <span className="text-xl font-black text-emerald-400 bg-emerald-950/60 px-3 py-0.5 rounded-lg border border-emerald-800/60">
                  {employees} {employees === 1 ? "usuario" : "usuarios"}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500">
                <span>1 usuario</span>
                <span>5 usuarios</span>
                <span>10 usuarios</span>
              </div>
            </div>
          </div>

          {/* Results column */}
          <div className="lg:col-span-6 bg-slate-900/90 rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Ahorro operativo mensual proyectado:
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>Tiempo recuperado</span>
                </div>
                <div className="text-3xl font-black text-cyan-300">
                  ~{hoursSavedMonthly} hrs
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Equivale a {Math.round((hoursSavedMonthly / 8) * 10) / 10} días laborales al mes
                </div>
              </div>

              <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                  <Coins className="w-4 h-4 text-emerald-400" />
                  <span>Ahorro estimado</span>
                </div>
                <div className="text-3xl font-black text-emerald-400">
                  S/ {totalEstimatedMonthlySavings}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  En horas laborales, papel y reducción de mermas
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
                <span>Evita multas por comprobantes emitidos fuera de plazo</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Compara el ahorro estimado con planes desde S/ 50 al mes</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contacto"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md transition-colors"
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
