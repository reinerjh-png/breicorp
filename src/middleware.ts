import { NextRequest, NextResponse } from "next/server";
import { isCanonicalProductionHost } from "@/config/company";

const NOINDEX_VALUE = "noindex, nofollow, noarchive";

/**
 * La protección de staging depende del host solicitado, no del build.
 * Así un deployment puede indexar solo el dominio canónico y mantener
 * bloqueados los aliases de Vercel, previews y entornos locales.
 */
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const host = request.headers.get("host") ?? request.headers.get("x-forwarded-host");

  if (!isCanonicalProductionHost(host)) {
    response.headers.set("X-Robots-Tag", NOINDEX_VALUE);
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
