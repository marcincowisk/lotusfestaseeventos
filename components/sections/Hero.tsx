import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { VideoBackground } from "@/components/sections/VideoBackground";

/**
 * Hero fullscreen. Estrutura pronta para receber o vídeo cinematográfico real
 * (montagem → iluminação → evento → resultado) via HERO_VIDEO_SRC — até lá,
 * usa um fundo editorial estático (gradiente + textura) em vez de banco de imagens.
 */
const HERO_VIDEO_SRC: string | undefined = undefined; // TODO: inserir vídeo real (ex: "/videos/hero.mp4")

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-bg">
      <div className="absolute inset-0">
        <VideoBackground
          src={HERO_VIDEO_SRC}
          className="h-full w-full object-cover"
        />
        {!HERO_VIDEO_SRC ? (
          <div className="h-full w-full bg-[radial-gradient(ellipse_at_top,_rgb(var(--color-surface-raised))_0%,_rgb(var(--color-bg))_65%)]">
            <div
              className="h-full w-full opacity-[0.12]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(115deg, rgb(var(--color-primary)) 0px, transparent 1px, transparent 3px, rgb(var(--color-primary)) 4px)",
                backgroundSize: "3px 100%",
              }}
            />
          </div>
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-bg/10" />
      </div>

      <Container className="relative z-10 pb-24 pt-40 sm:pb-32">
        <p className="mb-6 text-label uppercase tracking-[0.25em] text-primary">
          Desde 2011 · Litoral Norte de São Paulo
        </p>
        <h1 className="max-w-4xl text-display font-display text-balance text-text">
          Estrutura para momentos inesquecíveis.
        </h1>
        <p className="mt-6 max-w-xl text-body-lg text-text/80">
          Som, iluminação, estruturas e tecnologia para transformar eventos em experiências.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <ButtonLink href="/contato">Solicitar orçamento</ButtonLink>
          <ButtonLink href="/solucoes" variant="outline">
            Conhecer nossas soluções
          </ButtonLink>
        </div>
      </Container>

      <ScrollIndicator />
    </section>
  );
}
