import type { Metadata } from "next";
import { events } from "@/data/events";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EventsGrid } from "@/components/sections/EventsGrid";

export const metadata: Metadata = {
  title: "Eventos",
  description: `Portfólio de eventos e casamentos realizados pela ${siteConfig.name} no ${siteConfig.location.region}.`,
  alternates: { canonical: "/eventos" },
};

export default function EventosPage() {
  return (
    <div className="pt-32 sm:pt-40">
      <Container>
        <SectionHeader
          level="h1"
          eyebrow="Portfólio"
          title="Eventos que ganharam vida."
          description="Cada projeto reúne estrutura, som, iluminação e energia planejados para um espaço e um momento únicos."
        />
      </Container>
      <EventsGrid events={events} showHeader={false} />
    </div>
  );
}
