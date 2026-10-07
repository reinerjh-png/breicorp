"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNav } from "@/config/navigation";
import { company } from "@/config/company";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  PhoneCall,
  ExternalLink,
} from "lucide-react";

import Image from "next/image";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>

      {/* Top micro-bar for credibility & direct contact */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 hidden md:block border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-orange-400" />
              <span>Software para facturación electrónica y procesos SUNAT</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">RUC: {company.ruc} ({company.legalName})</span>
          </div>
          <div className="flex items-center gap-5 text-slate-300">
            <a
              href={`tel:${company.phone.replace(/\s+/g, "")}`}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <PhoneCall className="w-3 h-3 text-emerald-400" />
              <span>Central: {company.phone}</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">{company.businessHours}</span>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80"
            : "bg-white border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Official Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg p-1"
              aria-label="BREICORP - Ir al inicio"
            >
              <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-sm group-hover:scale-105 transition-transform duration-200 shrink-0">
                <Image
                  src="/logo-breicorp.webp"
                  alt="BREICORP - Software Empresarial"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-black tracking-tight text-slate-900 group-hover:text-orange-600 transition-colors">
                    BREICORP
                  </span>
                  <span className="bg-orange-50 text-orange-700 text-[10px] font-bold px-1.5 py-0.5 rounded border border-orange-200">
                    SaaS Cloud
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium tracking-tight -mt-0.5">
                  Software Empresarial & SUNAT
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
              {mainNav.map((item) => {
                const hasChildren = Boolean(item.children && item.children.length > 0);
                const isActive = pathname === item.href || (hasChildren && item.children?.some(c => pathname === c.href));

                if (!hasChildren) {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                        isActive
                          ? "text-blue-600 bg-blue-50/70"
                          : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                }

                return (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      type="button"
                      className={`flex items-center gap-1 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                        isActive
                          ? "text-blue-600 bg-blue-50/70"
                          : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                      }`}
                      aria-expanded={activeDropdown === item.label}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 text-slate-400 group-hover:text-blue-600 ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Mega Dropdown */}
                    <div
                      className={`absolute left-0 top-full pt-2 w-80 transition-all duration-200 origin-top-left ${
                        activeDropdown === item.label
                          ? "opacity-100 scale-100 pointer-events-auto visible"
                          : "opacity-0 scale-95 pointer-events-none invisible"
                      }`}
                    >
                      <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-3 overflow-hidden">
                        <div className="space-y-1">
                          {item.children?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block p-2.5 rounded-xl transition-all duration-150 hover:bg-slate-50 group/item ${
                                pathname === child.href ? "bg-blue-50/60" : ""
                              }`}
                            >
                              <div className="text-sm font-bold text-slate-800 group-hover/item:text-blue-600 flex items-center justify-between">
                                <span>{child.label}</span>
                                <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-blue-600" />
                              </div>
                              {child.description && (
                                <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                                  {child.description}
                                </p>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </nav>

            {/* Desktop Action CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/demo"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-slate-400" />
                <span>Ver demo</span>
              </Link>

              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 active:from-orange-700 active:to-orange-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Solicitar demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                href="/contacto"
                className="inline-flex items-center px-3 py-1.5 text-xs font-bold text-white bg-orange-600 hover:bg-orange-700 rounded-lg shadow-sm"
              >
                Demo
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
                aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white max-h-[85vh] overflow-y-auto px-4 pt-3 pb-8 shadow-xl">
            <div className="space-y-3">
              {mainNav.map((item) => (
                <div key={item.label} className="border-b border-slate-100 pb-2">
                  <div className="font-bold text-slate-900 py-1 text-base">{item.label}</div>
                  {item.children ? (
                    <div className="pl-3 mt-1 space-y-2 border-l-2 border-blue-100">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-1 text-sm text-slate-600 hover:text-blue-600"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="font-medium text-slate-800">{child.label}</div>
                          {child.description && (
                            <div className="text-xs text-slate-400">{child.description}</div>
                          )}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-1 text-sm font-medium text-slate-700 hover:text-blue-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Ver {item.label}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-4 space-y-2.5">
                <Link
                  href="/demo"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-300 text-slate-800 font-bold text-sm hover:bg-slate-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Ver demo</span>
                </Link>

                <Link
                  href="/contacto"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 text-white font-bold text-sm shadow-md hover:bg-blue-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Solicitar demo personalizada</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="pt-3 text-center text-xs text-slate-500">
                  <p>Central de atención: {company.phone}</p>
                  <p className="mt-0.5">RUC: {company.ruc} — Tingo María, Perú</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
