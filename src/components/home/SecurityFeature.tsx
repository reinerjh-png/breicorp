import {
  ShieldCheck,
  Lock,
  DatabaseBackup,
  UserCheck,
  Server,
  FileCheck,
} from "lucide-react";
import Link from "next/link";

export function SecurityFeature() {
  const securityPillars = [
    {
      icon: ShieldCheck,
      title: "Homologación SUNAT Vigente",
      description:
        "Emisión de comprobantes electrónicos bajo los estándares UBL 2.1 más recientes exigidos por SUNAT a través de operadores OSE/PSE autorizados.",
    },
    {
      icon: DatabaseBackup,
      title: "Copias de Respaldo Continuas",
      description:
        "Tus datos comerciales, catálogos e historial de ventas se respaldan de manera automática en centros de datos con redundancia geográfica.",
    },
    {
      icon: Lock,
      title: "Cifrado de Extremo a Extremo",
      description:
        "Todas las comunicaciones entre tu punto de venta, tu navegador y nuestros servidores viajan protegidas con cifrado TLS 1.3 de grado bancario.",
    },
    {
      icon: UserCheck,
      title: "Permisos Granulares por Rol",
      description:
        "Define qué puede ver y hacer cada colaborador: bloquea la visualización de costos a cajeros o restringe anulaciones solo al administrador.",
    },
    {
      icon: Server,
      title: "99.9% Disponibilidad Cloud",
      description:
        "Arquitectura en la nube diseñada para operar en horas pico sin interrupciones, permitiéndote atender tus cajas con total fluidez.",
    },
    {
      icon: FileCheck,
      title: "Custodia Digital de Comprobantes",
      description:
        "Almacenamiento permanente de tus archivos XML y CDR de aceptación durante el plazo legal de fiscalización establecido por ley.",
    },
  ];

  return (
    <section className="py-20 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950 border border-blue-700/60 text-blue-300 text-xs font-bold uppercase tracking-wider">
            <Lock className="w-3.5 h-3.5" />
            <span>Seguridad y Continuidad Operativa</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            La información financiera y comercial de tu empresa, siempre protegida
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            En un negocio no hay margen para perder datos de ventas ni arriesgarse a contingencias con SUNAT.
            Respaldamos tu operación con infraestructura tecnológica sólida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-colors space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-blue-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">{pillar.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/seguridad"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 underline underline-offset-4"
          >
            <span>Conocer más sobre nuestras medidas de seguridad y respaldos</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
