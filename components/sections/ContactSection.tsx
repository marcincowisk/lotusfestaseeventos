import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";

export function ContactSection() {
  return (
    <section id="contato-home" className="border-t border-border/20 bg-surface py-24 sm:py-32">
      <Container className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
        <Reveal>
          <span className="text-label uppercase tracking-[0.2em] text-primary">Contato</span>
          <h2 className="mt-4 text-h2 text-balance text-text">Vamos começar a planejar seu evento?</h2>
          <p className="mt-5 max-w-md text-body-lg text-muted">
            Conte os detalhes do seu evento e retornamos com uma proposta técnica sob medida.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <ContactForm />
        </Reveal>
      </Container>
    </section>
  );
}
