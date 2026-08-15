import { siteConfig } from "@/data/site";

/**
 * Monta um link wa.me com mensagem pré-preenchida.
 * Retorna null quando não há número oficial configurado — o componente que consome
 * esta função deve tratar esse caso (nunca linkar para um número fictício).
 */
export function buildWhatsAppLink(customMessage?: string) {
  const number = siteConfig.contact.whatsappNumber.replace(/\D/g, "");
  if (!number) return null;

  const defaultMessage =
    "Olá! Conheci a Lótus pelo site e gostaria de solicitar um orçamento para meu evento.";
  const message = encodeURIComponent(customMessage?.trim() || defaultMessage);
  return `https://wa.me/${number}?text=${message}`;
}

export function buildWhatsAppMessageFromLead(input: {
  name?: string;
  eventType?: string;
  eventDate?: string;
  city?: string;
}) {
  const parts = [
    "Olá! Conheci a Lótus pelo site e gostaria de solicitar um orçamento para meu evento.",
  ];
  if (input.name) parts.push(`Meu nome é ${input.name}.`);
  if (input.eventType) parts.push(`Tipo de evento: ${input.eventType}.`);
  if (input.eventDate) parts.push(`Data prevista: ${input.eventDate}.`);
  if (input.city) parts.push(`Cidade/local: ${input.city}.`);
  return parts.join(" ");
}
