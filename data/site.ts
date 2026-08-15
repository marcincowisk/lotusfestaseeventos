/**
 * Configuração central do site. Todo dado de contato/institucional não confirmado
 * publicamente fica explicitamente marcado como TODO — nunca é inventado.
 * Preencha via variáveis de ambiente (.env.local) conforme .env.example.
 */
export const siteConfig = {
  name: "Lótus Festas e Eventos",
  shortName: "Lótus",
  legalFoundingYear: 2011,
  founder: "Denys", // confirmado no site atual
  tagline: "Estrutura para momentos inesquecíveis.",
  description:
    "Estruturas, som, iluminação e energia para casamentos e eventos no Litoral Norte de São Paulo, desde 2011.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.lotusfestaseeventos.com.br",

  location: {
    city: "Caraguatatuba",
    region: "Litoral Norte de São Paulo",
    state: "SP",
    stateCode: "SP",
    country: "BR",
    // Cidades de atuação do Litoral Norte — confirme a lista oficial completa com o cliente.
    serviceArea: ["Caraguatatuba", "Ubatuba", "São Sebastião", "Ilhabela"],
  },

  // Único canal social confirmado no site atual.
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/lotusfestaseeventos",
  },

  // TODO: inserir informação oficial — não publicado no site atual.
  // Nota: só variáveis NEXT_PUBLIC_ são lidas aqui de propósito — este módulo é
  // importado por componentes client (ex: WhatsAppButton), então nenhuma env
  // var privada (ex: CONTACT_RECEIVER_EMAIL, RESEND_API_KEY) deve entrar aqui.
  // Essas ficam isoladas em app/contato/actions.ts ("use server").
  contact: {
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
    email: "",
    phone: "",
  },
} as const;

export const NAV_LINKS = [
  { label: "Soluções", href: "/solucoes" },
  { label: "Eventos", href: "/eventos" },
  { label: "Equipamentos", href: "/equipamentos" },
  { label: "Casamentos", href: "/casamentos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
] as const;
