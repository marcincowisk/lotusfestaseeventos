import type { ServiceCategory } from "@/types";

/**
 * As 6 grandes categorias de solução. Textos adaptados do posicionamento de marca
 * (estrutura + tecnologia + experiência) a partir do catálogo técnico real da Lótus
 * — incluindo especificações e artistas atendidos confirmados no site/material atual.
 */
export const serviceCategories: ServiceCategory[] = [
  {
    slug: "estruturas",
    name: "Estruturas",
    shortDescription: "Coberturas, Box Truss, pisos, palcos e pista de dança iluminada.",
    description:
      "A base física de qualquer evento. Projetamos coberturas, estruturas Box Truss, pisos, palcos e pista de dança dimensionados para o espaço, o clima e o número de convidados — para que a estrutura sustente o evento sem nunca ser notada.",
    outcomes: ["Segurança estrutural", "Cobertura contra sol e chuva", "Palcos dimensionados ao evento"],
    includes: ["Cobertura e tendas", "Estruturas Box Truss", "Pisos", "Palcos", "Pista de dança iluminada em LED"],
  },
  {
    slug: "som",
    name: "Som",
    shortDescription: "Sistemas profissionais para cerimônias, DJs, bandas e shows ao vivo.",
    description:
      "Da voz do celebrante ao grave da pista de dança. Dimensionamos sistemas de sonorização para cada momento do evento — cerimônia, jantar, banda ao vivo, DJ — com microfonia sem fio e sistema in-ear para músicos, garantindo clareza e cobertura uniforme do início ao fim.",
    outcomes: ["Clareza na cerimônia", "Cobertura uniforme do espaço", "Qualidade para banda e DJ"],
    includes: ["Sonorização de cerimônia", "Sistemas para DJ e banda", "Microfonia sem fio", "Sistema in-ear para músicos"],
    // Lista real de artistas/bandas já atendidos, conforme divulgado publicamente pela Lótus.
    pastClients: [
      "Maneva",
      "Nando Reis",
      "Marcelo Falcão",
      "Planta e Raiz",
      "Bruninho e David",
      "Turma do Pagode",
      "Di Propósito",
      "Amado Batista",
      "Latino",
      "Henrique e Diego",
    ],
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
    shortDescription: "Geradores trifásicos de 65kVA a 160kVA para garantir segurança e continuidade.",
    description:
      "Nenhum evento pode parar por falta de energia. Trabalhamos com geradores trifásicos HIMOINSA de 65kVA a 160kVA, com correção de fase para o funcionamento de motores e ar-condicionado, em dois modos: Stand By (backup para eventual falta de energia) e Full Time (10h ou 12h de energia limpa e contínua).",
    outcomes: ["Fornecimento contínuo", "Segurança elétrica", "Dimensionamento por carga real"],
    includes: [
      "Geradores trifásicos (65kVA–160kVA)",
      "Modo Stand By",
      "Modo Full Time (10h ou 12h)",
      "Distribuição de energia",
    ],
  },
  {
    slug: "audiovisual",
    name: "Audiovisual",
    shortDescription: "Painel de LED indoor/outdoor e projeção audiovisual em alta definição.",
    description:
      "Conteúdo e imagem como parte da experiência. Painéis de LED P3 4K (indoor/outdoor, tamanho personalizado, com VJ para animar e projetar vídeos) e projetores Epson Laser com telão de até 200 polegadas — transformando qualquer ambiente em um cinema.",
    outcomes: ["Imagem de alta definição em qualquer luz", "Conteúdo ao vivo com VJ", "Telão de até 200 polegadas"],
    includes: ["Painel de LED P3 4K", "VJ para animação e vídeo", "Projetores Epson Laser", "Telão até 200\""],
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
