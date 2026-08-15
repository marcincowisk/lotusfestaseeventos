import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ButtonLink } from "@/components/ui/Button";

const COVERAGE = ["Cerimônia", "Pista", "Iluminação", "Som", "Energia", "Estruturas", "Efeitos especiais"];

export function WeddingsSection() {
  return (
    <section className="border-t border-border/20 bg-surface py-24 sm:py-32">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <ImagePlaceholder label="Casamento na praia — Litoral Norte SP" ratio="portrait" />
        </Reveal>
        <Reveal delay={100}>
          <span className="text-label uppercase tracking-[0.2em] text-primary">Casamentos</span>
          <h2 className="mt-4 text-h2 text-balance text-text">
            Seu casamento merece uma estrutura à altura desse momento.
          </h2>
          <p className="mt-5 text-body-lg text-muted">
            Cuidamos de toda a infraestrutura técnica — da cerimônia à pista de dança — para que vocês possam
            aproveitar o dia com tranquilidade, sem se preocupar com o que sustenta a festa.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {COVERAGE.map((item) => (
              <li
                key={item}
                className="border border-border/40 px-4 py-2 text-small text-text/90"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <ButtonLink href="/casamentos">Planejar meu casamento</ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
