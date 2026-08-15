import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Contato",
  description: `Solicite um orçamento para o seu evento no ${siteConfig.location.region}.`,
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  const whatsappHref = buildWhatsAppLink();

  return (
    <div className="pt-32 pb-24 sm:pt-40 sm:pb-32">
      <Container className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
        <Reveal>
          <span className="text-label uppercase tracking-[0.2em] text-primary">Contato</span>
          <h1 className="mt-4 text-h1 text-balance text-text">Vamos começar a planejar seu evento?</h1>
          <p className="mt-6 max-w-md text-body-lg text-muted">
            Preencha o formulário com os detalhes do seu evento e retornamos com uma proposta técnica sob medida.
            Prefere conversar direto? Fale com a gente pelo WhatsApp.
          </p>

          {whatsappHref ? (
            <ButtonLink href={whatsappHref} external variant="outline" className="mt-8" data-analytics-event="whatsapp_click">
              <WhatsAppIcon className="h-4 w-4" />
              Falar no WhatsApp
            </ButtonLink>
          ) : null}

          <dl className="mt-12 space-y-4 border-t border-border/20 pt-8 text-small text-muted">
            <div>
              <dt className="text-text/90">Região atendida</dt>
              <dd>
                {siteConfig.location.city}, {siteConfig.location.stateCode} — {siteConfig.location.serviceArea.join(" · ")}
              </dd>
            </div>
            <div>
              <dt className="text-text/90">Instagram</dt>
              <dd>
                <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="link-underline hover:text-primary" data-analytics-event="instagram_click">
                  @lotusfestaseeventos
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>
        <Reveal delay={100}>
          <ContactForm />
        </Reveal>
      </Container>
    </div>
  );
}
