import Link from "next/link";
import type { EventCase } from "@/types";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ButtonLink } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";

interface EventsGridProps {
  events: EventCase[];
  showHeader?: boolean;
  limit?: number;
}

/**
 * Grid editorial assimétrico (não um grid de cards idênticos). Quando ainda
 * não há eventos reais cadastrados (ver data/events.ts), mostra um estado
 * vazio elegante em vez de inventar cases — mantendo a seção com presença
 * visual, sem alegar projetos que não existem.
 */
export function EventsGrid({ events, showHeader = true, limit }: EventsGridProps) {
  const items = limit ? events.slice(0, limit) : events;

  return (
    <section id="eventos-home" className="py-24 sm:py-32">
      <Container>
        {showHeader ? (
          <SectionHeader
            eyebrow="Eventos"
            title="Eventos que ganharam vida."
            description="Cada projeto reúne estrutura, som, iluminação e energia planejados para um espaço e um momento únicos."
            className="mb-16"
          />
        ) : (
          // Mantém a hierarquia de headings (h1 da página → h2 → h3 dos cards)
          // mesmo quando o título visível já foi renderizado fora deste componente.
          <h2 className="sr-only">Lista de eventos</h2>
        )}

        {items.length === 0 ? (
          <EmptyPortfolioState />
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {items.map((event, index) => {
              const large = index % 5 === 0;
              return (
                <Reveal
                  key={event.slug}
                  delay={index * 60}
                  className={large ? "sm:col-span-2 lg:col-span-4" : "lg:col-span-2"}
                >
                  <Link href={`/eventos/${event.slug}`} data-analytics-event="portfolio_view" className="group block">
                    <ImagePlaceholder
                      label={event.title}
                      ratio={large ? "wide" : "portrait"}
                      className="transition-transform duration-700 ease-premium group-hover:scale-[1.015]"
                    />
                    <div className="mt-4">
                      <div className="flex items-center gap-3">
                        <Tag>{event.category}</Tag>
                        <span className="text-small text-muted">{event.location}</span>
                      </div>
                      <h3 className="mt-2 font-display text-h3 text-text">{event.title}</h3>
                      <p className="mt-1 text-small text-muted">{event.services.join(" · ")}</p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        )}
      </Container>
    </section>
  );
}

function EmptyPortfolioState() {
  return (
    <Reveal className="border border-border/20 bg-surface px-6 py-20 text-center sm:px-16">
      <p className="font-display text-h3 text-balance text-text">
        Os primeiros eventos documentados nesta nova página estão a caminho.
      </p>
      <p className="mx-auto mt-4 max-w-xl text-body text-muted">
        Cada projeto publicado aqui é um evento real, com local, serviços prestados e fotografia própria — sem
        estoque genérico. Se você é da equipe Lótus, envie os materiais para popular esta seção.
      </p>
      <div className="mt-8 flex justify-center">
        <ButtonLink href="/contato" variant="outline">
          Solicitar orçamento
        </ButtonLink>
      </div>
    </Reveal>
  );
}
