import Link from "next/link";
import { serviceCategories } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ArrowUpRightIcon } from "@/components/ui/icons";

export function SolutionsShowcase() {
  return (
    <section id="solucoes-home" className="py-24 sm:py-32">
      <Container>
        <SectionHeader
          eyebrow="Soluções"
          title="Seis frentes técnicas, uma única responsabilidade."
          description="Cada categoria resolve uma camada diferente do evento — juntas, garantem que estrutura, som, luz e energia funcionem como um único sistema."
        />

        <div className="mt-16 flex flex-col">
          {serviceCategories.map((service, index) => (
            <Reveal key={service.slug} delay={index * 60}>
              <Link
                href={`/solucoes/${service.slug}`}
                data-analytics-event="service_view"
                className={`group grid items-center gap-8 border-t border-border/20 py-10 last:border-b md:grid-cols-2 md:gap-16 md:py-14 ${
                  index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <ImagePlaceholder
                  label={`Foto — ${service.name}`}
                  ratio="landscape"
                  className="transition-transform duration-700 ease-premium group-hover:scale-[1.02]"
                />
                <div>
                  <span className="text-label uppercase tracking-[0.15em] text-primary">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 font-display text-h3 text-text">{service.name}</h3>
                  <p className="mt-3 max-w-md text-body text-muted">{service.shortDescription}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-small font-medium text-text link-underline group-hover:text-primary">
                    Conhecer solução
                    <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
