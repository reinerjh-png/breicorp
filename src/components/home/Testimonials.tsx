import { confirmedCaseStudy } from "@/config/caseStudies";
import { CheckCircle, Clock, Layers } from "lucide-react";

export function Testimonials() {
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-20 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl space-y-4 text-center">
          <div className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
            Caso real confirmado
          </div>
          <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Un flujo comercial más ágil y conectado
          </h2>
          <p className="text-base text-slate-600 sm:text-lg">
            La identidad del cliente se mantiene reservada. Compartimos únicamente el contexto y los resultados confirmados de este proyecto.
          </p>
        </div>

        <article className="grid grid-cols-1 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-3">
          <div className="space-y-3 p-7 sm:p-8">
            <Clock className="h-7 w-7 text-orange-600" />
            <h3 className="font-bold text-slate-950">El punto de partida</h3>
            <p className="text-sm leading-relaxed text-slate-600">{confirmedCaseStudy.context}</p>
          </div>

          <div className="space-y-3 border-y border-slate-200 p-7 sm:p-8 lg:border-x lg:border-y-0">
            <Layers className="h-7 w-7 text-blue-600" />
            <h3 className="font-bold text-slate-950">La implementación</h3>
            <ul className="space-y-2">
              {confirmedCaseStudy.implementation.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 p-7 sm:p-8">
            <CheckCircle className="h-7 w-7 text-emerald-600" />
            <h3 className="font-bold text-slate-950">El resultado observado</h3>
            <p className="text-sm leading-relaxed text-slate-600">
              {confirmedCaseStudy.results[0]} También mejoró la visibilidad del stock y se eliminaron las inconsistencias existentes en ese flujo específico.
            </p>
          </div>
        </article>

        <p className="mt-4 text-center text-xs text-slate-500">
          {confirmedCaseStudy.disclaimer}
        </p>
      </div>
    </section>
  );
}
