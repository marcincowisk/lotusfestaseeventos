import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { events, getEventBySlug } from "@/data/events";
import { siteConfig } from "@/data/site";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Tag } from "@/components/ui/Tag";
import { ButtonLink } from "@/components/ui/Button";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const event = getEventBySlug(params.slug);
  if (!event) return {};
  return {
    title: `${event.title} — ${event.location}`,
    description: event.description,
    alternates: { canonical: `/eventos/${event.slug}` },
  };
}

export default function EventDetailPage({ params }: PageProps) {
  const event = getEventBySlug(params.slug);
  if (!event) notFound();

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Início", url: siteConfig.url },
    { name: "Eventos", url: `${siteConfig.url}/eventos` },
    { name: event.title, url: `${siteConfig.url}/eventos/${event.slug}` },
  ]);

  return (
    <div className="pt-32 sm:pt-40">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Container>
        <nav aria-label="Breadcrumb" className="mb-8 text-small text-muted">
          <Link href="/eventos" className="link-underline hover:text-primary">
            Eventos
          </Link>
          <span className="mx-2">/</span>
          <span className="text-text">{event.title}</span>
        </nav>

        <div className="flex items-center gap-3">
          <Tag>{event.category}</Tag>
          <span className="text-small text-muted">{event.location}</span>
        </div>
        <h1 className="mt-4 text-h1 text-balance text-text">{event.title}</h1>
        <p className="mt-3 text-small text-muted">{event.services.join(" · ")}</p>

        <ImagePlaceholder label={event.title} ratio="wide" className="mt-10" />

        <p className="mt-10 max-w-prose text-body-lg text-muted">{event.description}</p>

        {event.gallery && event.gallery.length > 0 ? (
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {event.gallery.map((_, index) => (
              <ImagePlaceholder key={index} label={`${event.title} — foto ${index + 1}`} ratio="square" />
            ))}
          </div>
        ) : null}

        <div className="mt-16 border-t border-border/20 pt-10">
          <p className="text-body text-muted">Quer uma estrutura como essa no seu evento?</p>
          <div className="mt-5">
            <ButtonLink href="/contato">Solicitar orçamento</ButtonLink>
          </div>
        </div>
      </Container>
    </div>
  );
}
