import type { ServiceCategory } from "@/types";

/**
 * As 5 grandes categorias de solução. Textos adaptados do briefing de posicionamento
 * da marca (estrutura + tecnologia + experiência), não do catálogo técnico bruto.
 */
export const serviceCategories: ServiceCategory[] = [
  {
    slug: "estruturas",
    name: "Estruturas",
    shortDescription: "Coberturas, Box Truss, pisos, palcos e soluções estruturais.",
    description:
      "A base física de qualquer evento. Projetamos coberturas, estruturas Box Truss, pisos e palcos dimensionados para o espaço, o clima e o número de convidados — para que a estrutura sustente o evento sem nunca ser notada.",
    outcomes: ["Segurança estrutural", "Cobertura contra sol e chuva", "Palcos dimensionados ao evento"],
    includes: ["Cobertura e tendas", "Estruturas Box Truss", "Pisos", "Palcos"],
  },
  {
    slug: "som",
    name: "Som",
    shortDescription: "Sistemas profissionais para cerimônias, DJs, bandas e grandes ambientes.",
    description:
      "Da voz do celebrante ao grave da pista de dança. Dimensionamos sistemas de sonorização para cada momento do evento — cerimônia, jantar, banda ao vivo, DJ — garantindo clareza e cobertura uniforme do início ao fim.",
    outcomes: ["Clareza na cerimônia", "Cobertura uniforme do espaço", "Qualidade para banda e DJ"],
    includes: ["Sonorização de cerimônia", "Sistemas para DJ e banda", "Microfonia"],
  },
  {
    slug: "iluminacao",
    name: "Iluminação",
    shortDescription: "Iluminação técnica, decorativa e cênica para criar diferentes atmosferas.",
    description:
      "A luz define a atmosfera de cada momento do evento — do jantar à pista. Combinamos iluminação técnica, decorativa e cênica para transformar o mesmo espaço em cenários distintos ao longo da noite.",
    outcomes: ["Atmosfera para cada momento", "Iluminação cênica para banda/DJ", "Luz decorativa"],
    includes: ["Luz cênica", "Iluminação para DJs e bandas", "Iluminação decorativa"],
  },
  {
    slug: "energia",
    name: "Energia",
    shortDescription: "Geradores e infraestrutura elétrica para garantir segurança e continuidade.",
    description:
      "Nenhum evento pode parar por falta de energia. Fornecemos geradores e infraestrutura elétrica dimensionada para toda a carga do evento, com redundância pensada para os pontos mais críticos.",
    outcomes: ["Fornecimento contínuo", "Segurança elétrica", "Dimensionamento por carga real"],
    includes: ["Geradores", "Infraestrutura elétrica", "Distribuição de energia"],
  },
  {
    slug: "efeitos",
    name: "Experiências",
    shortDescription: "Efeitos especiais, fumaça, gelo seco, iluminação dinâmica e recursos para momentos especiais.",
    description:
      "Os detalhes que transformam um bom evento em um momento memorável. Efeitos de fumaça, gelo seco, bolhas e iluminação dinâmica usados com critério, no momento certo da noite.",
    outcomes: ["Impacto visual nos momentos-chave", "Atmosfera cinematográfica", "Uso técnico e seguro"],
    includes: ["Fumaça e neblina (haze/fog)", "Gelo seco", "Máquina de bolhas", "Efeitos de luz dinâmicos"],
  },
];

export function getServiceBySlug(slug: string) {
  return serviceCategories.find((service) => service.slug === slug);
}
