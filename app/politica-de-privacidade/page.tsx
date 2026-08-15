import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: `Como a ${siteConfig.name} trata os dados pessoais coletados no site, em conformidade com a LGPD.`,
  alternates: { canonical: "/politica-de-privacidade" },
  robots: { index: true, follow: true },
};

export default function PoliticaDePrivacidadePage() {
  return (
    <div className="pt-32 pb-24 sm:pt-40 sm:pb-32">
      <Container className="max-w-prose">
        <h1 className="text-h1 text-text">Política de Privacidade</h1>
        <p className="mt-4 text-small text-muted">
          Última atualização: TODO — inserir data de publicação oficial.
        </p>

        <div className="mt-10 space-y-8 text-body text-muted">
          <section>
            <h2 className="text-h3 text-text">1. Quem somos</h2>
            <p className="mt-3">
              Este site é operado pela {siteConfig.name}, empresa sediada em {siteConfig.location.city},{" "}
              {siteConfig.location.stateCode}, atuando no {siteConfig.location.region} desde{" "}
              {siteConfig.legalFoundingYear}.
            </p>
          </section>

          <section>
            <h2 className="text-h3 text-text">2. Quais dados coletamos</h2>
            <p className="mt-3">
              Ao preencher o formulário de orçamento, coletamos os dados fornecidos voluntariamente: nome, WhatsApp,
              e-mail, tipo de evento, data, cidade, local do evento, número aproximado de convidados, serviços de
              interesse e mensagem. Esses dados são usados exclusivamente para responder à sua solicitação de
              orçamento.
            </p>
          </section>

          <section>
            <h2 className="text-h3 text-text">3. Cookies e analytics</h2>
            <p className="mt-3">
              TODO — esta seção deve ser atualizada assim que ferramentas de analytics (Google Analytics, Google Tag
              Manager, Meta Pixel) forem efetivamente ativadas no site, descrevendo quais cookies são usados e como
              obter o consentimento do visitante antes da coleta, conforme a LGPD.
            </p>
          </section>

          <section>
            <h2 className="text-h3 text-text">4. Compartilhamento de dados</h2>
            <p className="mt-3">
              Os dados enviados pelo formulário de contato não são vendidos ou compartilhados com terceiros para fins
              de marketing. São usados apenas pela equipe da {siteConfig.name} para elaborar e enviar o orçamento
              solicitado.
            </p>
          </section>

          <section>
            <h2 className="text-h3 text-text">5. Seus direitos (LGPD)</h2>
            <p className="mt-3">
              Você pode solicitar a qualquer momento a confirmação, o acesso, a correção ou a exclusão dos seus dados
              pessoais tratados por este site. TODO — inserir canal oficial (e-mail ou WhatsApp) para exercício
              desses direitos assim que definido.
            </p>
          </section>

          <section>
            <h2 className="text-h3 text-text">6. Contato</h2>
            <p className="mt-3">
              Dúvidas sobre esta política podem ser enviadas pelos canais listados na página de{" "}
              <a href="/contato" className="link-underline hover:text-primary">
                Contato
              </a>
              .
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
