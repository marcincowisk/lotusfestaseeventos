"use client";

import Link from "next/link";
import { useEffect } from "react";
import { NAV_LINKS } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/Button";
import { CloseIcon, WhatsAppIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const whatsappHref = buildWhatsAppLink();

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navegação"
      className={cn(
        "fixed inset-0 z-50 flex flex-col bg-bg transition-opacity duration-300 ease-premium md:hidden",
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      )}
    >
      <div className="flex items-center justify-between px-5 py-5">
        <span className="font-display text-lg text-text">Lótus</span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar menu"
          className="flex h-11 w-11 items-center justify-center text-text"
        >
          <CloseIcon className="h-6 w-6" />
        </button>
      </div>

      <nav className="flex flex-1 flex-col justify-center gap-1 px-6" aria-label="Navegação principal">
        {NAV_LINKS.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className={cn(
              "border-b border-border/20 py-4 font-display text-h3 text-text transition-colors duration-300 hover:text-primary",
              open && "animate-fade-up"
            )}
            style={{ animationDelay: open ? `${index * 60 + 100}ms` : undefined, animationFillMode: "backwards" }}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex flex-col gap-3 px-6 pb-10 pt-4">
        <ButtonLink href="/contato" onClick={onClose} className="w-full">
          Solicitar orçamento
        </ButtonLink>
        {whatsappHref ? (
          <ButtonLink
            href={whatsappHref}
            external
            variant="outline"
            className="w-full"
            data-analytics-event="whatsapp_click"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </ButtonLink>
        ) : null}
      </div>
    </div>
  );
}
