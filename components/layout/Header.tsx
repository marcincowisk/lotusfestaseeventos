"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { MenuIcon } from "@/components/ui/icons";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Pular para o conteúdo
      </a>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-premium",
          scrolled ? "bg-bg/85 backdrop-blur-md border-b border-border/30 py-3" : "bg-transparent py-6"
        )}
      >
        <Container className="flex items-center justify-between">
          <Link href="/" className="font-display text-xl tracking-tight text-text">
            Lótus
            <span className="ml-2 hidden text-label font-sans uppercase tracking-[0.2em] text-muted sm:inline">
              Festas &amp; Eventos
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="link-underline text-small font-medium text-text/90 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <ButtonLink href="/contato" className="hidden md:inline-flex">
              Solicitar orçamento
            </ButtonLink>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Abrir menu"
              className="flex h-11 w-11 items-center justify-center text-text md:hidden"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </Container>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
