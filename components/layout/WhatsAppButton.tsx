"use client";

import { buildWhatsAppLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

/**
 * CTA flutuante de WhatsApp. Some discretamente durante o scroll para baixo
 * (não cobre conteúdo) e reaparece ao parar/rolar para cima. Se não houver
 * número oficial configurado (NEXT_PUBLIC_WHATSAPP_NUMBER), não renderiza nada
 * — nunca linkamos para um número fictício.
 */
export function WhatsAppFloatingButton() {
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setVisible(y < 80 || y < lastY);
        setLastY(y);
        ticking = false;
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  const href = buildWhatsAppLink();
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-analytics-event="whatsapp_click"
      aria-label="Conversar no WhatsApp"
      className={cn(
        "fixed bottom-6 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft transition-all duration-500 ease-premium hover:bg-accent sm:bottom-8 sm:right-8",
        visible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
      )}
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
}
