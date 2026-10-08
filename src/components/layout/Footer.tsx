import Link from "next/link";
import { company, getWhatsAppUrl } from "@/config/company";
import {
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  Clock,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Col 1: Identity & Legal Data */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-sm group-hover:scale-105 transition-transform duration-200 shrink-0">
                <Image
                  src="/logo-breicorp.webp"
                  alt="BREICORP"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-tight group-hover:text-orange-400 transition-colors">
                  BREICORP
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {company.legalName}
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Plataforma empresarial en la nube para automatizar ventas, inventario,
              facturación electrónica SUNAT y logística en empresas peruanas en crecimiento.
            </p>

            {/* Legal Identification */}
            <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800 space-y-1.5 text-xs text-slate-300 max-w-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Razón Social:</span>
                <span className="font-semibold text-white">{company.legalName}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">RUC:</span>
                <span className="font-semibold text-white">{company.ruc}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Partida Registral:</span>
                <span className="text-slate-300">{company.partidaElectronica}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Trayectoria:</span>
                <span className="text-emerald-400 font-semibold">Desde {company.foundationYear} en Perú</span>
              </div>
            </div>

            {/* Trust badge */}
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Conforme a normativa SUNAT para comprobantes de pago electrónicos.</span>
            </div>
          </div>

          {/* Col 2: Soluciones & Producto */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Plataforma
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/producto"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Módulos ERP</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/facturacion-electronica"
                  className="hover:text-white transition-colors"
                >
                  Facturación Electrónica SUNAT
                </Link>
              </li>
              <li>
                <Link
                  href="/software-ventas-inventario"
                  className="hover:text-white transition-colors"
                >
                  Ventas y Kardex en tiempo real
                </Link>
              </li>
              <li>
                <Link
                  href="/guias-remision-electronicas"
                  className="hover:text-white transition-colors"
                >
                  Guías de Remisión Electrónica
                </Link>
              </li>
              <li>
                <Link
                  href="/automatizacion-procesos-empresariales"
                  className="hover:text-white transition-colors"
                >
                  Automatización de procesos
                </Link>
              </li>
              <li>
                <Link
                  href="/precios"
                  className="hover:text-white transition-colors text-orange-400 font-semibold"
                >
                  Planes y Tarifas
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Segmentos & Casos */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Sectores
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/software-mypes" className="hover:text-white transition-colors">
                  Micro y Pequeñas Empresas
                </Link>
              </li>
              <li>
                <Link
                  href="/software-comercializadoras"
                  className="hover:text-white transition-colors"
                >
                  Comercializadoras y Retail
                </Link>
              </li>
              <li>
                <Link
                  href="/software-distribuidoras"
                  className="hover:text-white transition-colors"
                >
                  Distribuidoras y Almacenes
                </Link>
              </li>
              <li>
                <Link
                  href="/software-empresas-peru"
                  className="hover:text-white transition-colors"
                >
                  Empresas en Perú
                </Link>
              </li>
              <li>
                <Link href="/casos-exito" className="hover:text-white transition-colors">
                  Casos de éxito reales
                </Link>
              </li>
              <li>
                <Link href="/seguridad" className="hover:text-white transition-colors">
                  Seguridad y Respaldos
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacto Oficial & Canales */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Atención y Soporte
            </h3>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>{company.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`tel:${company.phone.replace(/\s+/g, "")}`}
                  className="hover:text-white transition-colors font-medium"
                >
                  {company.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <a
                  href={`mailto:${company.contactEmail}`}
                  className="hover:text-white transition-colors"
                >
                  {company.contactEmail}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span className="text-slate-400">{company.businessHours}</span>
              </div>

              {/* Direct WhatsApp CTA */}
              <div className="pt-2">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors shadow-sm"
                >
                  <span>Chatear por WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-4 flex-wrap">
            <span>© {currentYear} {company.legalName}. Todos los derechos reservados.</span>
            <span>•</span>
            <span>Hecho para la competitividad empresarial en Perú.</span>
          </div>

          <div className="flex items-center gap-6 flex-wrap">
            <Link
              href={company.legalLinks.privacyPolicy}
              className="hover:text-slate-200 transition-colors"
            >
              Política de Privacidad
            </Link>
            <Link
              href={company.legalLinks.termsOfService}
              className="hover:text-slate-200 transition-colors"
            >
              Términos de Servicio
            </Link>
            <Link
              href={company.legalLinks.libroReclamaciones}
              className="inline-flex items-center gap-1.5 text-amber-300 hover:text-amber-200 font-medium transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Libro de Reclamaciones</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
