import type { Metadata } from "next";
import { equipmentList } from "@/data/equipment";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EquipmentCatalog } from "@/components/sections/EquipmentCatalog";

export const metadata: Metadata = {
  title: "Equipamentos",
  description: "Catálogo técnico de equipamentos de iluminação, efeitos, áudio, estrutura e energia para eventos.",
  alternates: { canonical: "/equipamentos" },
};

export default function EquipamentosPage() {
  return (
    <div className="pt-32 pb-24 sm:pt-40 sm:pb-32">
      <Container>
        <SectionHeader
          level="h1"
          eyebrow="Catálogo técnico"
          title="Equipamentos"
          description="Especificações e uso recomendado de cada equipamento. Para uma solução completa para o seu evento, veja nossas soluções."
          className="mb-16"
        />
        <EquipmentCatalog items={equipmentList} />
      </Container>
    </div>
  );
}
