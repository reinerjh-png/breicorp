# BREICORP

**Software empresarial, automatización y soluciones digitales para empresas.**

[![Next.js 15](https://img.shields.io/badge/Next.js-15-000000?logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19-20232A?logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com/)
[![Estado](https://img.shields.io/badge/Estado-Staging-F59E0B)](https://breicorp-ivory.vercel.app/)

BREICORP E.I.R.L. es una empresa tecnológica peruana orientada al desarrollo de software empresarial, automatización y soluciones digitales. La plataforma busca centralizar información, conectar procesos y reducir tareas repetitivas para que las empresas operen con mayor claridad.

Este repositorio contiene el sitio corporativo y sus integraciones web actuales. La solución utiliza una arquitectura sin base de datos: las solicitudes se validan en el servidor y, cuando Resend está configurado, se entregan por correo electrónico.

> [!IMPORTANT]
> El proyecto se encuentra en **staging**. La publicación definitiva en `breicorp.com.pe`, la entrega real de correos y la revisión legal del Libro de Reclamaciones continúan pendientes.

## Contenido

- [Sobre BREICORP](#sobre-breicorp)
- [Plataforma](#plataforma)
- [Funcionalidades](#funcionalidades)
- [Demo](#demo)
- [Arquitectura](#arquitectura)
- [Stack tecnológico](#stack-tecnológico)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Variables de entorno](#variables-de-entorno)
- [Desarrollo y QA](#desarrollo-y-qa)
- [Formularios](#formularios)
- [SEO](#seo)
- [Accesibilidad](#accesibilidad)
- [Seguridad](#seguridad)
- [Rendimiento](#rendimiento)
- [Despliegue](#despliegue)
- [Estado del proyecto](#estado-del-proyecto)
- [Roadmap](#roadmap)
- [Contribución y propiedad](#contribución-y-propiedad)
- [Contacto](#contacto)

## Sobre BREICORP

BREICORP desarrolla soluciones para digitalizar, simplificar y relacionar operaciones empresariales. Su enfoque prioriza la eficiencia operativa, la centralización de datos y la capacidad de adaptar el software al crecimiento de cada organización.

Principios de trabajo:

- Registrar la información una sola vez.
- Primero simplificar el proceso; después automatizar.
- El software debe poder crecer con la empresa.

| Información corporativa | Detalle |
| --- | --- |
| Razón social | BREICORP E.I.R.L. |
| RUC | 20615859312 |
| Partida | N.° 11084023 |
| Inicio de operaciones | 2017 |
| Dirección | Av. Tito Jaime 642, Tingo María — Huánuco, Perú |
| Teléfono / WhatsApp | [+51 948 261 382](https://wa.me/51948261382) |
| Correo | [breicorp@gmail.com](mailto:breicorp@gmail.com) |

## Plataforma

La propuesta funcional de BREICORP reúne procesos habituales de gestión empresarial en una experiencia SaaS accesible desde la web y adaptable a equipos móviles.

| Área | Alcance |
| --- | --- |
| Ventas | Registro y seguimiento de operaciones comerciales. |
| Facturación electrónica | Flujos vinculados con CPE, XML y CDR en el contexto de SUNAT. |
| Inventario y stock | Entradas, salidas, existencias y movimientos por ubicación. |
| Kardex | Historial ordenado de movimientos y saldos de productos. |
| Caja | Control de movimientos asociados a la operación. |
| Reportes | Consulta de información para seguimiento y toma de decisiones. |
| Guías de remisión | Gestión de información para guías de remisión electrónicas. |
| Usuarios | Accesos y responsabilidades según la configuración aplicable. |
| Multi-local y multi-almacén | Separación de existencias y operaciones cuando corresponde al alcance configurado. |

BREICORP no se presenta como OSE o PSE y este repositorio no declara homologaciones ni certificaciones propias no documentadas.

## Funcionalidades

- Sitio corporativo responsive con páginas de producto, sectores y recursos comerciales.
- Información sobre ventas, facturación electrónica, inventario, Kardex, caja y reportes.
- Contenido contextual para empresas peruanas y procesos relacionados con SUNAT.
- Formulario para solicitar una demostración por correo o WhatsApp.
- Acceso explícito al entorno público de demostración, sin inicio de sesión automático.
- Libro de Reclamaciones basado en recepción por correo, sin almacenamiento persistente.
- Metadata por ruta, datos estructurados y enlaces internos para descubrimiento de contenido.
- Instrumentación preparada para GA4 y verificación de Search Console.

## Demo

**[Acceder al demo](https://demo.breicorp.pe)**

| Dato | Valor |
| --- | --- |
| URL | <https://demo.breicorp.pe> |
| Email | `demo@breicorp.pe` |
| Contraseña pública | `123456` |

> Entorno de demostración con datos de prueba. Este entorno contiene exclusivamente datos de demostración.

Las credenciales son públicas y se muestran únicamente para acceder al demo. No deben reutilizarse en otros servicios.

## Arquitectura

```mermaid
flowchart LR
    U[Usuario] --> N[Next.js 15 · App Router]
    N --> P[Páginas públicas]
    N --> R[Route Handlers]
    R --> V[Validación y protección anti-spam]
    V --> E[Resend API]
    E --> B[Correo de BREICORP]
    E --> C[Copia al usuario · Libro]
    N --> D[/demo]
    D --> S[demo.breicorp.pe]
```

La arquitectura actual no incorpora base de datos, CRM ni almacenamiento persistente de leads o reclamos. El identificador del Libro acredita la recepción por correo; no representa un sistema interno de trazabilidad.

## Stack tecnológico

| Tecnología | Uso actual |
| --- | --- |
| Next.js 15 | Framework web con App Router y Route Handlers. |
| React 19 | Componentes e interacciones de interfaz. |
| TypeScript | Tipado estricto del proyecto. |
| Tailwind CSS 4 | Estilos, responsive design y sistema visual. |
| `next/font` | Carga y optimización de tipografías. |
| Vercel | Entorno de despliegue del staging. |
| Resend | Entrega de correos mediante API y `fetch` nativo. |
| JSON-LD | Datos estructurados para páginas, FAQ y breadcrumbs. |
| GA4 | Integración preparada y condicionada por variables de entorno. |
| Search Console | Verificación preparada mediante metadata. |
| ESLint | Análisis estático del código. |

## Estructura del proyecto

```text
breicorp/
├── docs/                 # Notas operativas y verificación preproducción
├── public/               # Recursos públicos de marca
├── scripts/              # Utilidades internas de auditoría responsive
├── src/
│   ├── app/              # Rutas, layouts, metadata y Route Handlers
│   ├── components/       # UI, navegación, formularios, analytics y SEO
│   ├── config/           # Empresa, navegación, planes y casos
│   └── lib/              # Validación, correo y utilidades compartidas
├── .env.example          # Plantilla de variables sin secretos
├── next.config.ts        # Imágenes, redirecciones y headers
└── package.json          # Scripts y dependencias del proyecto
```

## Instalación

```bash
git clone https://github.com/reinerjh-png/breicorp.git
cd breicorp
npm install
```

Copia `.env.example` como `.env.local` y completa únicamente las variables necesarias para tu entorno. Nunca subas `.env.local` ni secretos al repositorio.

Para iniciar el entorno local:

```bash
npm run dev
```

Abre <http://localhost:3000> en el navegador.

## Variables de entorno

```dotenv
# Correo
RESEND_API_KEY=your_key_here
EMAIL_FROM=BREICORP <noreply@your_verified_domain.example>
EMAIL_TO=breicorp@gmail.com

# Entorno: mantener staging hasta autorizar producción
SITE_ENV=staging

# Integraciones opcionales
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_GSC_VERIFICATION=
```

| Variable | Propósito |
| --- | --- |
| `RESEND_API_KEY` | Autoriza la entrega de correos mediante Resend. |
| `EMAIL_FROM` | Remitente perteneciente a un dominio verificado en Resend. |
| `EMAIL_TO` | Destinatario general y de solicitudes; actualmente `breicorp@gmail.com`. |
| `SITE_ENV` | Controla indexación y headers exclusivos de producción. |
| `NEXT_PUBLIC_GA_ID` | Identificador opcional de Google Analytics 4. |
| `NEXT_PUBLIC_GSC_VERIFICATION` | Código opcional de verificación de Search Console. |

> [!CAUTION]
> No incluyas claves reales, tokens ni credenciales privadas en commits, logs o capturas.

## Desarrollo y QA

| Comando | Acción |
| --- | --- |
| `npm run dev` | Inicia Next.js en modo desarrollo. |
| `npm run typecheck` | Valida tipos sin emitir archivos. |
| `npm run lint` | Ejecuta ESLint sobre el repositorio. |
| `npm run build` | Genera y valida el build optimizado. |
| `npm run start` | Sirve localmente el build generado. |

Flujo mínimo antes de versionar cambios:

```bash
npm run typecheck
npm run lint
npm run build
git diff --check
git status
```

## Formularios

### Solicitud de demo

```text
Formulario → Route Handler → validación → Resend → breicorp@gmail.com
```

El servidor aplica límites de longitud, normalización, validación, honeypot y rate limiting ligero. Si las credenciales de correo faltan o la entrega falla, el endpoint responde con error; no simula un envío exitoso.

### Libro de Reclamaciones

```text
Formulario → Route Handler → identificador de recepción
           → correo interno → copia al correo del usuario
```

El identificador se genera en el servidor y corresponde a la recepción por correo. No existe base de datos ni persistencia interna del reclamo. La solución debe ser revisada legalmente antes de producción.

## SEO

El proyecto incluye:

- metadata específica por ruta;
- canonical individual hacia `https://breicorp.com.pe`;
- Open Graph y Twitter metadata;
- JSON-LD;
- `BreadcrumbList`;
- `FAQPage` donde corresponde;
- `sitemap.xml` y `robots.txt` dinámicos;
- enlaces internos y clústeres de contenido.

El staging está configurado con `noindex`, `nofollow` y `noarchive`, además de `Disallow: /` en `robots.txt`. El dominio futuro es <https://breicorp.com.pe>; su activación no forma parte del estado actual.

## Accesibilidad

La interfaz fue diseñada siguiendo criterios WCAG 2.2 AA, sin declarar una certificación oficial. Incluye:

- navegación por teclado y foco visible;
- labels asociados a los campos de formulario;
- nombres accesibles y atributos ARIA donde aportan contexto;
- soporte para preferencias de movimiento reducido;
- contrastes orientados a nivel AA;
- layouts responsive para móvil y escritorio;
- mensajes de validación y estados de envío perceptibles.

## Seguridad

Controles implementados actualmente:

- CSP y HSTS cuando `SITE_ENV=production`;
- `X-Content-Type-Options: nosniff`;
- `X-Frame-Options: DENY`;
- Referrer Policy y Permissions Policy;
- validación y sanitización básica en el servidor;
- honeypot anti-spam;
- límites de longitud por campo;
- rate limiting ligero;
- secretos gestionados mediante variables de entorno.

El rate limiting reside en memoria del proceso: no es global entre instancias serverless y se reinicia junto con cada instancia. Antes de producción deben verificarse también el dominio remitente, SPF, DKIM, entrega, rebotes y políticas de privacidad aplicables.

## Rendimiento

Mediciones de laboratorio realizadas durante la etapa de staging:

| Perfil | Performance | Accessibility | Best Practices | CLS |
| --- | ---: | ---: | ---: | ---: |
| Desktop | 100 | 100 | 100 | 0 |
| Mobile | ~82–87 | 100 | — | 0 |

Resultados de laboratorio; las métricas reales pueden variar según red, dispositivo, contenido y entorno. Estas cifras no constituyen un SLA.

## Despliegue

- **Staging:** <https://breicorp-ivory.vercel.app/>
- **Demo SaaS:** <https://demo.breicorp.pe>
- **Dominio futuro:** <https://breicorp.com.pe>

En staging se debe mantener:

```dotenv
SITE_ENV=staging
```

No se debe cambiar a `production`, configurar DNS ni habilitar indexación hasta completar las verificaciones técnicas, legales y operativas.

## Estado del proyecto

| Componente | Estado |
| --- | --- |
| Staging | Activo |
| Producción | Pendiente |
| Resend | Pendiente de credenciales y prueba real de entrega |
| GA4 | Preparado; pendiente de activación/configuración |
| Search Console | Preparado; pendiente de activación en el dominio final |
| Libro de Reclamaciones | Pendiente de revisión legal |
| Dominio `breicorp.com.pe` | Pendiente de migración final |

El proyecto todavía no se declara *production ready*.

## Roadmap

- Completar pruebas reales de entrega de correo con Resend.
- Realizar la revisión legal del Libro de Reclamaciones y privacidad.
- Activar GA4 con la configuración y consentimiento que correspondan.
- Verificar el dominio en Search Console.
- Desplegar y validar `breicorp.com.pe` cuando exista autorización.
- Incorporar monitorización operativa.
- Continuar la optimización basada en métricas reales.
- Evaluar una futura expansión internacional.

## Contribución y propiedad

Este repositorio es mantenido internamente por BREICORP. No se aceptan contribuciones públicas salvo autorización expresa de la empresa.

No existe una licencia open source asociada al repositorio.

© BREICORP E.I.R.L. Todos los derechos reservados.

## Contacto

**BREICORP E.I.R.L.**

Tingo María, Huánuco, Perú

- Email: [breicorp@gmail.com](mailto:breicorp@gmail.com)
- WhatsApp: [+51 948 261 382](https://wa.me/51948261382)
- Web futura: [breicorp.com.pe](https://breicorp.com.pe)
- Demo: [demo.breicorp.pe](https://demo.breicorp.pe)

---

Construido para comunicar con claridad la propuesta tecnológica de BREICORP y acompañar su evolución hacia producción.
