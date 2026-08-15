import type { Metadata } from "next";
import Link from "next/link";
import { serviceCategories } from "@/data/services";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ArrowUpRightIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Soluções para eventos",
  description:
    "Estruturas, som, iluminação, energia e experiências para casamentos e eventos no Litoral Norte de São Paulo.",
  alternates: { canonical: "/solucoes" },
};

export default function SolucoesPage() {
  return (
    <div className="pt-32 sm:pt-40">
      <Container>
        <SectionHeader
          level="h1"
          eyebrow="Soluções"
          title="Uma infraestrutura técnica completa para o seu evento."
          description={`Estrutura, som, iluminação e energia trabalhando como um único sistema — para eventos em todo o ${siteConfig.location.region}.`}
        />
      </Container>

      <div className="mt-16 flex flex-col">
        <Container className="grid gap-6 pb-24 sm:grid-cols-2">
          {serviceCategories.map((service, index) => (
            <Reveal key={service.slug} delay={index * 60}>
              <Link href={`/solucoes/${service.slug}`} data-analytics-event="service_view" className="group block">
                <ImagePlaceholder label={`Foto — ${service.name}`} ratio="landscape" />
                <div className="mt-4">
                  <h2 className="font-display text-h3 text-text">{service.name}</h2>
                  <p className="mt-2 text-body text-muted">{service.shortDescription}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-small font-medium text-text link-underline group-hover:text-primary">
                    Conhecer solução
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </Container>
      </div>
    </div>
  );
}
