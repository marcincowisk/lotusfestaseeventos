import { z } from "zod";

const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome completo."),
  whatsapp: z.string().trim().regex(phoneRegex, "Informe um WhatsApp válido, com DDD."),
  email: z.string().trim().email("Informe um e-mail válido."),
  eventType: z.string().trim().min(1, "Selecione o tipo de evento."),
  eventDate: z.string().trim().optional().or(z.literal("")),
  city: z.string().trim().min(2, "Informe a cidade do evento."),
  venue: z.string().trim().optional().or(z.literal("")),
  guestCount: z.string().trim().optional().or(z.literal("")),
  services: z.array(z.string()).min(1, "Selecione ao menos um serviço de interesse."),
  message: z.string().trim().max(1000, "Mensagem muito longa.").optional().or(z.literal("")),
  // Honeypot: campo invisível para humanos, preenchido apenas por bots simples.
  website: z.string().max(0, "Falha na validação.").optional().or(z.literal("")),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
