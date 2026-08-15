import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Sobre a Lótus",
  description: `A história da ${siteConfig.name}, desde ${siteConfig.legalFoundingYear} no ${siteConfig.location.region}.`,
  alternates: { canonical: "/sobre" },
};

const VALUES = ["Excelência", "Inovação", "Honestidade", "Dedicação", "Realização do cliente"];

export default function SobrePage() {
  return (
    <div>
      <section className="pt-32 sm:pt-40">
        <Container>
          <Reveal className="max-w-3xl">
            <span className="text-label uppercase tracking-[0.2em] text-primary">Sobre a Lótus</span>
            <h1 className="mt-4 text-h1 text-balance text-text">
              Desde {siteConfig.legalFoundingYear}, por trás de grandes momentos.
            </h1>
            <p className="mt-6 text-body-lg text-muted">
              A Lótus nasceu em {siteConfig.location.city}, no {siteConfig.location.region}, pelas mãos de{" "}
              {siteConfig.founder}. Começou oferecendo estrutura e equipamentos para festas e, ao longo dos anos,
              se especializou na infraestrutura técnica de casamentos — especialmente os realizados na praia, onde
              cada detalhe de estrutura, som e energia precisa ser pensado com ainda mais cuidado.
            </p>
            <p className="mt-4 text-body-lg text-muted">
              Hoje, a empresa reúne sob um só fornecedor tudo o que sustenta um evento: cobertura, palco, geradores,
              som e iluminação — para que noivos e organizadores lidem com uma única equipe, do planejamento ao
              último convidado.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="mt-20 sm:mt-28">
        <Container className="grid gap-4 sm:grid-cols-3">
          <ImagePlaceholder label="Equipe Lótus" ratio="portrait" />
          <ImagePlaceholder label="Bastidores de montagem" ratio="portrait" />
          <ImagePlaceholder label="Equipamentos em uso" ratio="portrait" />
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h2 className="text-h2 text-text">Atuação no Litoral Norte</h2>
            <p className="mt-5 text-body-lg text-muted">
              Instalada em {siteConfig.location.city}, a Lótus atende eventos em toda a região —{" "}
              {siteConfig.location.serviceArea.join(", ")} — combinando o conhecimento do terreno e do clima local
              com equipamentos de padrão profissional.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-h2 text-text">Compromisso técnico</h2>
            <p className="mt-5 text-body-lg text-muted">
              Cada evento começa com o entendimento do espaço e das necessidades reais do cliente. A estrutura é
              planejada, montada e acompanhada pela nossa equipe — para funcionar em segundo plano, sem imprevistos.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-border/20 bg-surface py-20">
        <Container>
          <h2 className="text-label uppercase tracking-[0.15em] text-muted">Valores</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {VALUES.map((value) => (
              <li key={value} className="border border-border/40 px-4 py-2 text-small text-text/90">
                {value}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-24 text-center sm:py-32">
        <Container>
          <h2 className="mx-auto max-w-xl text-h2 text-balance text-text">
            Pronto para planejar a estrutura do seu evento?
          </h2>
          <div className="mt-8 flex justify-center">
            <ButtonLink href="/contato">Solicitar orçamento</ButtonLink>
          </div>
        </Container>
      </section>
    </div>
  );
}
