"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global { interface Window { gtag?: (...args: unknown[]) => void; } }

export function trackEvent(name: "demo_cta_click" | "demo_form_start" | "demo_form_submit" | "demo_open" | "whatsapp_click" | "pricing_view" | "contact_click") {
  window.gtag?.("event", name);
}

const eventNames = new Set([
  "demo_cta_click", "demo_form_start", "demo_form_submit", "demo_open",
  "whatsapp_click", "pricing_view", "contact_click",
]);

export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const pathname = usePathname();

  useEffect(() => {
    const handler = (event: Event) => {
      const detail = (event as CustomEvent<{ name?: Parameters<typeof trackEvent>[0] }>).detail;
      if (detail?.name) trackEvent(detail.name);
    };
    const clickHandler = (event: MouseEvent) => {
      const target = event.target instanceof Element
        ? event.target.closest<HTMLElement>("[data-analytics-event]")
        : null;
      const name = target?.dataset.analyticsEvent;
      if (name && eventNames.has(name)) trackEvent(name as Parameters<typeof trackEvent>[0]);
    };
    window.addEventListener("breicorp:analytics", handler);
    document.addEventListener("click", clickHandler);
    return () => {
      window.removeEventListener("breicorp:analytics", handler);
      document.removeEventListener("click", clickHandler);
    };
  }, []);

  useEffect(() => {
    if (pathname === "/precios") trackEvent("pricing_view");
  }, [pathname]);

  if (!gaId) return null;
  return <><Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" /><Script id="ga4" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)};window.gtag=gtag;gtag('js',new Date());gtag('config','${gaId}', {send_page_view:true});`}</Script></>;
}
