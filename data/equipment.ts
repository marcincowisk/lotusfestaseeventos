import type { Equipment } from "@/types";

/**
 * Lista de equipamentos confirmada a partir do site/material atual da Lótus:
 * os 16 itens originais de iluminação/efeitos + 6 itens (gerador, áudio,
 * estrutura, audiovisual) identificados numa segunda rodada de conteúdo real.
 * Descrições e "uso recomendado" são explicações técnicas genéricas de cada
 * equipamento (não são alegações específicas sobre a empresa) — devem ser
 * revisadas pelo time técnico da Lótus antes de publicar.
 */
export const equipmentList: Equipment[] = [
  {
    slug: "varal-de-lampadas",
    name: "Varal de Lâmpadas",
    category: "iluminacao",
    description: "Fios com lâmpadas decorativas suspensas, usados para criar ambientação quente e aconchegante.",
    recommendedUse: "Pistas de dança, áreas externas e decoração de teto em festas e casamentos.",
  },
  {
    slug: "globo-espelhado",
    name: "Globo Espelhado",
    category: "efeitos",
    description: "Esfera espelhada giratória que projeta reflexos de luz pelo ambiente.",
    recommendedUse: "Pista de dança e momentos de destaque, como a primeira dança.",
  },
  {
    slug: "maquina-de-bolhas",
    name: "Máquina de Bolhas",
    category: "efeitos",
    description: "Gera bolhas de sabão em fluxo contínuo para efeitos visuais lúdicos.",
    recommendedUse: "Entrada dos noivos, festas infantis e momentos de celebração.",
  },
  {
    slug: "haze-neblina",
    name: "Haze / Neblina",
    category: "efeitos",
    description: "Neblina fina e uniforme que realça os feixes de luz no ar.",
    recommendedUse: "Shows, pistas de dança e cenas com iluminação cênica marcante.",
  },
  {
    slug: "fog-fumaca",
    name: "Fog / Fumaça",
    category: "efeitos",
    description: "Fumaça densa de curta duração para efeitos de impacto pontual.",
    recommendedUse: "Entradas triunfais, primeira dança e clímax de shows.",
  },
  {
    slug: "nevoa-gelo-seco",
    name: "Névoa / Gelo Seco",
    category: "efeitos",
    description: "Névoa baixa e densa junto ao chão, criada com gelo seco.",
    recommendedUse: "Efeito cinematográfico para a pista de dança e primeira dança dos noivos.",
  },
  {
    slug: "refletor-parled",
    name: "Refletor ParLed",
    category: "iluminacao",
    description: "Refletor de LED multicolor usado para banhos de luz e composição de cor no ambiente.",
    recommendedUse: "Iluminação de fachadas, tendas e cenografia geral do evento.",
  },
  {
    slug: "refletor-cob",
    name: "Refletor COB",
    category: "iluminacao",
    description: "Refletor de LED de alta potência e luz uniforme, sem efeito pixelado.",
    recommendedUse: "Iluminação de destaque e washes uniformes em grandes áreas.",
  },
  {
    slug: "refletor-brute",
    name: "Refletor Brute",
    category: "iluminacao",
    description: "Refletor de alta intensidade usado para grandes vazões de luz direcional.",
    recommendedUse: "Efeitos de contraluz e grandes estruturas de shows e palcos.",
  },
  {
    slug: "refletor-set-led",
    name: "Refletor Set LED",
    category: "iluminacao",
    description: "Painel de LED para iluminação de cena com controle de intensidade e cor.",
    recommendedUse: "Composição de luz em palco e áreas de cerimônia.",
  },
  {
    slug: "refletor-par-38",
    name: "Refletor Par 38",
    category: "iluminacao",
    description: "Refletor compacto de uso versátil para pontos de luz direcionada.",
    recommendedUse: "Iluminação decorativa de ambientes e detalhes de decoração.",
  },
  {
    slug: "pin-beam",
    name: "Refletores Pin Beam",
    category: "iluminacao",
    description: "Feixe de luz fino e intenso, muito usado em efeitos aéreos.",
    recommendedUse: "Efeitos cênicos em shows, bandas e pistas de dança.",
  },
  {
    slug: "move-beam",
    name: "Move Beam",
    category: "iluminacao",
    description: "Cabeça móvel motorizada com feixe de luz de longo alcance.",
    recommendedUse: "Efeitos dinâmicos sincronizados com a música em shows e festas.",
  },
  {
    slug: "b-eye-beam-wash",
    name: "B-Eye / Beam Wash",
    category: "iluminacao",
    description: "Cabeça móvel híbrida que combina feixe (beam) e banho de luz (wash).",
    recommendedUse: "Composições de luz versáteis para pista de dança e palco.",
  },
  {
    slug: "strobo-led",
    name: "Strobo LED",
    category: "iluminacao",
    description: "Luz de flashes intensos e rápidos.",
    recommendedUse: "Momentos de pico em shows e pista de dança.",
  },
  {
    slug: "canhao-seguidor",
    name: "Canhão Seguidor",
    category: "iluminacao",
    description: "Refletor direcionado manualmente para acompanhar uma pessoa ou ponto do palco.",
    recommendedUse: "Entrada dos noivos, discursos e momentos de destaque no palco.",
  },
  {
    slug: "gerador-himoinsa-trifasico",
    name: "Gerador Trifásico HIMOINSA (65kVA–160kVA)",
    category: "energia",
    description:
      "Gerador trifásico com correção de fase, disponível de 65kVA a 160kVA de potência. Modo Stand By (backup) ou Full Time (10h ou 12h de energia contínua).",
    recommendedUse: "Eventos com motores, ar-condicionado ou carga elétrica alta que exigem energia ininterrupta.",
  },
  {
    slug: "microfone-sem-fio",
    name: "Microfone sem fio",
    category: "audio",
    description: "Sistema de microfonia wireless para celebrante, discursos e apresentações.",
    recommendedUse: "Cerimônias de casamento, discursos e momentos de fala ao vivo.",
  },
  {
    slug: "sistema-in-ear",
    name: "Sistema In-Ear",
    category: "audio",
    description: "Monitor de retorno individual sem fio para músicos no palco.",
    recommendedUse: "Bandas e shows ao vivo que precisam de monitoramento de palco sem uso de caixas de retorno.",
  },
  {
    slug: "pista-de-danca-led",
    name: "Pista de Dança iluminada (LED)",
    category: "estrutura",
    description: "Piso de vidro temperado de alta resistência com placas iluminadas em LED.",
    recommendedUse: "Pista de dança como ponto focal visual da festa.",
  },
  {
    slug: "painel-de-led",
    name: "Painel de LED P3 4K",
    category: "audiovisual",
    description: "Painel de LED indoor/outdoor, resolução P3 4K, tamanho personalizado, com VJ para animação e projeção de vídeos.",
    recommendedUse: "Telão de palco, identidade visual do evento e conteúdo ao vivo em shows e casamentos.",
  },
  {
    slug: "projetor-epson-laser",
    name: "Projetor Epson Laser",
    category: "audiovisual",
    description: "Projeção audiovisual em alta resolução e luminosidade, com telão de até 200 polegadas.",
    recommendedUse: "Transformar qualquer ambiente em um cinema — vídeos, homenagens e conteúdo institucional.",
  },
];

export const equipmentCategoryLabels: Record<Equipment["category"], string> = {
  iluminacao: "Iluminação",
  efeitos: "Efeitos",
  audio: "Áudio",
  estrutura: "Estrutura",
  energia: "Energia",
  audiovisual: "Audiovisual",
  palco: "Palco",
};
