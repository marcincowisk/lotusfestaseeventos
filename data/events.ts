import type { EventCase } from "@/types";

/**
 * Portfólio de eventos reais.
 *
 * IMPORTANTE: nenhum case fictício é publicado neste projeto — a regra #35 do
 * briefing proíbe inventar clientes, locais ou serviços. Este array começa
 * vazio de propósito. Assim que a Lótus fornecer eventos reais (nome, local,
 * categoria, serviços prestados e fotos), adicione entradas seguindo o formato:
 *
 * {
 *   slug: "casamento-ilhabela-marina-joao",
 *   title: "Casamento na Praia",
 *   location: "Ilhabela — SP",
 *   category: "Casamento",
 *   date: "2025-09-14",
 *   services: ["Estrutura", "Iluminação", "Sonorização", "Energia"],
 *   description: "Descrição curta e real do evento.",
 *   coverImage: "/images/eventos/casamento-ilhabela-marina-joao/capa.jpg",
 *   gallery: ["/images/eventos/casamento-ilhabela-marina-joao/1.jpg"],
 *   featured: true,
 * }
 *
 * A UI (components/sections/EventsGrid.tsx e app/eventos) já trata o estado
 * vazio com uma seção "em breve" elegante — não é necessário preencher isto
 * para o site funcionar.
 */
export const events: EventCase[] = [];

export function getFeaturedEvents(limit = 6) {
  return events.filter((event) => event.featured).slice(0, limit) || events.slice(0, limit);
}

export function getEventBySlug(slug: string) {
  return events.find((event) => event.slug === slug);
}
