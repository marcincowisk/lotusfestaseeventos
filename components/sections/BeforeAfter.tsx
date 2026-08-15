import { beforeAfterItems } from "@/data/before-after";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

/** Renderiza null enquanto não houver fotos reais de antes/depois cadastradas. */
export function BeforeAfter() {
  if (beforeAfterItems.length === 0) return null;

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeader
          eyebrow="Transformação"
          title="O espaço, a transformação, o evento."
          className="mb-16"
        />
        <div className="flex flex-col gap-16">
          {beforeAfterItems.map((item) => (
            <Reveal key={item.id} className="grid gap-4 sm:grid-cols-2">
              <ImagePlaceholder label={`Antes — ${item.label}`} ratio="landscape" />
              <ImagePlaceholder label={`Depois — ${item.label}`} ratio="landscape" />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
