"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global { interface Window { gtag?: (...args: unknown[]) => void; } }

export function trackEvent(name: "demo_cta_click" | "demo_form_start" | "demo_form_submit" | "demo_open" | "whatsapp_click" | "pricing_view" | "contact_click") {
  window.gtag?.("event", name);
}

export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  useEffect(() => {
    const handler = (event: Event) => {
      const detail = (event as CustomEvent<{ name?: Parameters<typeof trackEvent>[0] }>).detail;
      if (detail?.name) trackEvent(detail.name);
    };
    window.addEventListener("breicorp:analytics", handler);
    return () => window.removeEventListener("breicorp:analytics", handler);
  }, []);
  if (!gaId) return null;
  return <><Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" /><Script id="ga4" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)};window.gtag=gtag;gtag('js',new Date());gtag('config','${gaId}', {send_page_view:true});`}</Script></>;
}
