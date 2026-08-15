import Link from "next/link";
import { NAV_LINKS, siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";

/**
 * Footer minimalista. Só exibe dados de contato confirmados; onde não houver
 * (telefone/e-mail), o item simplesmente não é renderizado — nunca inventamos
 * um placeholder visível para o usuário final.
 */
export function Footer() {
  const year = new Date().getFullYear();
  const { phone, email, whatsappNumber } = siteConfig.contact;

  return (
    <footer className="border-t border-border/20 bg-surface">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr_1fr] md:py-24">
        <div>
          <span className="font-display text-2xl text-text">Lótus</span>
          <p className="mt-4 max-w-xs text-small text-muted">
            Estruturas, som, iluminação e energia para casamentos e eventos no {siteConfig.location.region}, desde{" "}
            {siteConfig.legalFoundingYear}.
          </p>
        </div>

        <div>
          <h3 className="text-label uppercase tracking-[0.15em] text-muted">Navegação</h3>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="link-underline text-small text-text/90 hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-label uppercase tracking-[0.15em] text-muted">Contato</h3>
          <ul className="mt-5 space-y-3 text-small text-text/90">
            {phone ? (
              <li>
                <a href={`tel:${phone}`} className="link-underline hover:text-primary" data-analytics-event="phone_click">
                  {phone}
                </a>
              </li>
            ) : null}
            {email ? (
              <li>
                <a href={`mailto:${email}`} className="link-underline hover:text-primary">
                  {email}
                </a>
              </li>
            ) : null}
            {whatsappNumber ? (
              <li>
                <a
                  href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline hover:text-primary"
                  data-analytics-event="whatsapp_click"
                >
                  WhatsApp
                </a>
              </li>
            ) : null}
            <li>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline hover:text-primary"
                data-analytics-event="instagram_click"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-label uppercase tracking-[0.15em] text-muted">Região atendida</h3>
          <p className="mt-5 text-small text-text/90">
            {siteConfig.location.city}, {siteConfig.location.stateCode} — {siteConfig.location.region}
          </p>
          <p className="mt-2 text-small text-muted">{siteConfig.location.serviceArea.join(" · ")}</p>
        </div>
      </Container>

      <div className="border-t border-border/20">
        <Container className="flex flex-col gap-3 py-6 text-small text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="/politica-de-privacidade" className="link-underline hover:text-primary">
              Política de Privacidade
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
