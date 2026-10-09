# Verificación preproducción

## Estado legal

`LEGAL_REVIEW_REQUIRED=true`

El Libro de Reclamaciones no debe publicarse como legalmente conforme hasta que un asesor revise texto, campos, conservación, procedimiento, plazos, copia y privacidad. El identificador actual acredita recepción por correo; no representa trazabilidad interna ni almacenamiento persistente.

## Correo

Variables obligatorias: `RESEND_API_KEY`, `EMAIL_FROM` y `EMAIL_TO=breicorp@gmail.com`. `EMAIL_FROM` debe pertenecer a un dominio verificado en Resend. Antes de producción deben comprobarse SPF, DKIM, remitente autorizado, entrega a BREICORP, copia al consumidor y comportamiento ante rebotes. Nunca registrar claves o cabeceras de autorización.

## Analytics y privacidad

GA4 solo carga cuando `SITE_ENV` es `staging` o `production` y existe `NEXT_PUBLIC_GA_ID`. Los eventos no incluyen PII. Antes de activarlo públicamente debe definirse, con asesoría aplicable al mercado objetivo, si se requiere CMP/consentimiento y actualizar la política de privacidad. Este sprint no incorpora un banner genérico ni afirma cumplimiento.

Search Console queda preparada mediante `NEXT_PUBLIC_GSC_VERIFICATION`. No enviar el sitemap hasta que el dominio oficial apunte al nuevo sitio.

## Rate limiting

La protección actual es ligera y reside en memoria del proceso. No se comparte entre instancias serverless, se pierde en reinicios y no constituye protección fuerte o persistente. No se incorpora Redis ni base de datos en esta fase.

## Headers

Se envían `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy` y `Permissions-Policy`. En `SITE_ENV=production` también se habilitan HSTS y una CSP compatible con Next.js y GA4. Staging conserva `X-Robots-Tag: noindex, nofollow, noarchive`.
