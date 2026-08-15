import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getServiceBySlug, serviceCategories } from "@/data/services";
import { siteConfig } from "@/data/site";
import { buildBreadcrumbSchema, buildServiceSchema } from "@/lib/schema";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ButtonLink } from "@/components/ui/Button";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return serviceCategories.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  return {
    title: service.name,
    description: service.description,
    alternates: { canonical: `/solucoes/${service.slug}` },
  };
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const serviceSchema = buildServiceSchema({
    name: service.name,
    description: service.description,
    url: `${siteConfig.url}/solucoes/${service.slug}`,
  });
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Início", url: siteConfig.url },
    { name: "Soluções", url: `${siteConfig.url}/solucoes` },
    { name: service.name, url: `${siteConfig.url}/solucoes/${service.slug}` },
  ]);

  return (
    <div className="pt-32 sm:pt-40">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, breadcrumbSchema]) }}
      />
      <Container>
        <nav aria-label="Breadcrumb" className="mb-8 text-small text-muted">
          <Link href="/solucoes" className="link-underline hover:text-primary">
            Soluções
          </Link>
          <span className="mx-2">/</span>
          <span className="text-text">{service.name}</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h1 className="text-h1 text-balance text-text">{service.name}</h1>
            <p className="mt-6 text-body-lg text-muted">{service.description}</p>

            <h2 className="mt-10 text-label uppercase tracking-[0.15em] text-primary">O que garante</h2>
            <ul className="mt-4 space-y-2">
              {service.outcomes.map((outcome) => (
                <li key={outcome} className="border-l-2 border-primary/50 pl-4 text-body text-text/90">
                  {outcome}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-label uppercase tracking-[0.15em] text-primary">O que inclui</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {service.includes.map((item) => (
                <li key={item} className="border border-border/40 px-3 py-1.5 text-small text-text/90">
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <ButtonLink href="/contato">Solicitar orçamento</ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ImagePlaceholder label={`Foto — ${service.name}`} ratio="portrait" />
          </Reveal>
        </div>
      </Container>

      <Container className="mt-24 border-t border-border/20 py-16 sm:mt-32">
        <h2 className="text-h3 text-text">Outras soluções</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {serviceCategories
            .filter((item) => item.slug !== service.slug)
            .map((item) => (
              <Link
                key={item.slug}
                href={`/solucoes/${item.slug}`}
                className="border border-border/40 px-4 py-2 text-small text-text/90 transition-colors hover:border-primary hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
        </div>
      </Container>
    </div>
  );
}
