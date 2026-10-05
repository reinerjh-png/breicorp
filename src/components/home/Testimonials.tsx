import { Star, Quote, Building2, MapPin } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Víctor R.",
      role: "Gerente General",
      company: "Comercial e Inversiones Santa Rosa",
      city: "Tingo María, Huánuco",
      sector: "Ferretería & Acabados",
      quote:
        "Antes pasábamos hasta 20 minutos esperando que la web de SUNAT no se colgara para emitir una factura. Con BREICORP emitimos boletas y facturas en menos de 5 segundos y los clientes salen contentos.",
      metrics: "90% menos tiempo en caja",
    },
    {
      name: "María Elena C.",
      role: "Jefa de Administración",
      company: "Distribuidora del Oriente E.I.R.L.",
      city: "Huánuco",
      sector: "Distribuidora Mayorista",
      quote:
        "El módulo de Guías de Remisión Electrónica con código QR nos salvó. Despachamos camiones a diario y nuestros choferes ya no tienen problemas con los controles de SUNAT en ruta.",
      metrics: "100% guías en regla",
    },
    {
      name: "Jorge L.",
      role: "Propietario",
      company: "Boticas & Salud San Martín",
      city: "San Martín / Selva Central",
      sector: "Farmacias y Salud",
      quote:
        "Tener el control de lotes, fechas de vencimiento y saber exactamente cuánto dinero hay en cada caja al cierre del día nos dio una tranquilidad que ninguna hoja de Excel nos daba.",
      metrics: "Cero descuadres de caja",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <span>Resultados Comprobados</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Empresas peruanas que ya transformaron su operación diaria
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Conoce cómo gerentes y dueños de negocio dejaron atrás el caos administrativo
            y escalaron sus ventas con BREICORP.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    {t.metrics}
                  </span>
                </div>

                <p className="text-sm text-slate-700 italic leading-relaxed pt-2">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 space-y-1">
                <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                <div className="text-xs text-slate-600 font-medium">{t.role}</div>
                <div className="text-xs text-blue-600 font-semibold">{t.company}</div>
                <div className="flex items-center gap-1 text-[11px] text-slate-400 pt-1">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  <span>{t.city} • {t.sector}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
