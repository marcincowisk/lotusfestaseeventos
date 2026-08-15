import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ButtonLink } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Casamentos",
  description: `Estrutura, som, iluminação e energia para casamentos no ${siteConfig.location.region}, incluindo casamentos na praia.`,
  alternates: { canonical: "/casamentos" },
};

const COVERAGE = [
  { title: "Cerimônia", description: "Sonorização clara para votos, celebrante e música de entrada." },
  { title: "Pista", description: "Piso e estrutura dimensionados para dança e circulação com segurança." },
  { title: "Iluminação", description: "Da luz do jantar à iluminação cênica da festa." },
  { title: "Som", description: "Sistema completo para banda, DJ e todos os momentos da noite." },
  { title: "Energia", description: "Geradores que garantem que a festa não pare." },
  { title: "Estruturas", description: "Coberturas e Box Truss para qualquer condição de clima." },
  { title: "Efeitos especiais", description: "Fumaça, gelo seco e recursos para os momentos mais marcantes." },
];

export default function CasamentosPage() {
  return (
    <div>
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-bg pt-32">
        <div className="absolute inset-0">
          <ImagePlaceholder label="Casamento na praia — Litoral Norte SP" ratio="full" className="h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-bg/10" />
        </div>
        <Container className="relative z-10 pb-20">
          <span className="text-label uppercase tracking-[0.2em] text-primary">Casamentos</span>
          <h1 className="mt-4 max-w-3xl text-h1 text-balance text-text">
            Seu casamento merece uma estrutura à altura desse momento.
          </h1>
          <p className="mt-6 max-w-xl text-body-lg text-text/80">
            Cuidamos de toda a infraestrutura técnica para que vocês aproveitem o dia com tranquilidade — do
            planejamento ao último convidado na pista.
          </p>
          <div className="mt-10">
            <ButtonLink href="#planejar">Planejar meu casamento</ButtonLink>
          </div>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {COVERAGE.map((item, index) => (
              <Reveal key={item.title} delay={index * 60} className="border-t border-border/30 pt-6">
                <h2 className="text-h3 text-text">{item.title}</h2>
                <p className="mt-2 text-body text-muted">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="planejar" className="scroll-mt-28 border-t border-border/20 bg-surface py-24 sm:py-32">
        <Container className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
          <Reveal>
            <h2 className="text-h2 text-balance text-text">Planejar meu casamento</h2>
            <p className="mt-5 max-w-md text-body-lg text-muted">
              Conte a data, o local e a visão de vocês — retornamos com uma proposta técnica completa.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
