import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";

/**
 * Bloco de autoridade logo após o Hero. Nenhum número é exibido a menos que
 * seja real e confirmado — por isso o "indicador" aqui é o tempo de mercado
 * (2011, dado confirmado), não uma estatística inventada.
 */
export function AuthorityStrip() {
  const years = new Date().getFullYear() - siteConfig.legalFoundingYear;

  return (
    <section className="border-y border-border/20 bg-surface py-20 sm:py-28">
      <Container>
        <Reveal className="grid gap-10 md:grid-cols-[auto_1fr] md:items-end md:gap-16">
          <span className="font-display text-h1 leading-none text-primary">{years}+</span>
          <div>
            <h2 className="text-h2 text-balance text-text">
              Desde {siteConfig.legalFoundingYear}, transformando espaços em grandes experiências.
            </h2>
            <p className="mt-5 max-w-2xl text-body-lg text-muted">
              Atuamos no {siteConfig.location.region} com um único compromisso: entregar a infraestrutura técnica
              que sustenta o evento — para que ele simplesmente aconteça, sem imprevistos.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
