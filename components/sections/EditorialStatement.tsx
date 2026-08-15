import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function EditorialStatement() {
  return (
    <section className="relative overflow-hidden bg-bg py-24 sm:py-36">
      <div className="absolute inset-0">
        <ImagePlaceholder label="Vídeo/foto fullscreen de evento real" ratio="full" className="h-full" />
        <div className="absolute inset-0 bg-bg/70" />
      </div>
      <Container className="relative z-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-display text-h1 text-balance text-text">
            Não entregamos equipamentos.
            <br />
            Criamos a estrutura para o seu evento acontecer.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
