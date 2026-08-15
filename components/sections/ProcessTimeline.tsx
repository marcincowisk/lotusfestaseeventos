import { processSteps } from "@/data/process";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function ProcessTimeline() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeader eyebrow="Processo" title="Como funciona contratar a Lótus." className="mb-16" />

        <ol className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((item, index) => (
            <Reveal as="li" key={item.step} delay={index * 70} className="border-t border-border/30 pt-6">
              <span className="font-display text-h3 text-primary">{item.step}</span>
              <h3 className="mt-3 text-h3 text-text">{item.title}</h3>
              <p className="mt-2 text-body text-muted">{item.description}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
