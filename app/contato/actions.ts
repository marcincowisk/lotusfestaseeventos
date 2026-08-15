"use server";

import { contactFormSchema } from "@/lib/validation";
import type { ContactFormState, InterestService } from "@/types";
import { siteConfig } from "@/data/site";

/**
 * Server Action do formulário de orçamento.
 * - Validação completa acontece aqui (server-side), nunca confiando só no client.
 * - A chave de envio de e-mail (RESEND_API_KEY) nunca é exposta ao client — só
 *   existe neste módulo "use server".
 * - Sem RESEND_API_KEY/CONTACT_RECEIVER_EMAIL configurados, retornamos um erro
 *   honesto orientando o WhatsApp como alternativa, em vez de fingir sucesso.
 */
export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    name: formData.get("name")?.toString() ?? "",
    whatsapp: formData.get("whatsapp")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
    eventType: formData.get("eventType")?.toString() ?? "",
    eventDate: formData.get("eventDate")?.toString() ?? "",
    city: formData.get("city")?.toString() ?? "",
    venue: formData.get("venue")?.toString() ?? "",
    guestCount: formData.get("guestCount")?.toString() ?? "",
    services: formData.getAll("services").map(String),
    message: formData.get("message")?.toString() ?? "",
    website: formData.get("website")?.toString() ?? "", // honeypot
  };

  const parsed = contactFormSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: ContactFormState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !(key in fieldErrors)) {
        (fieldErrors as Record<string, string>)[key] = issue.message;
      }
    }
    return {
      status: "error",
      message: "Verifique os campos destacados e tente novamente.",
      fieldErrors,
    };
  }

  // Honeypot preenchido → descarta silenciosamente como sucesso (não dá feedback útil a bots).
  if (parsed.data.website) {
    return { status: "success", message: "Recebemos sua solicitação." };
  }

  const receiver = process.env.CONTACT_RECEIVER_EMAIL;
  const apiKey = process.env.RESEND_API_KEY;

  if (!receiver || !apiKey) {
    console.warn(
      "[contato] RESEND_API_KEY ou CONTACT_RECEIVER_EMAIL não configurados — TODO: configurar envio de e-mail em .env.local."
    );
    return {
      status: "error",
      message:
        "O envio automático por e-mail ainda não está configurado. Fale com a gente agora pelo WhatsApp — sua mensagem não será perdida.",
    };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `${siteConfig.name} <site@${new URL(siteConfig.url).hostname}>`,
        to: [receiver],
        reply_to: parsed.data.email,
        subject: `Novo pedido de orçamento — ${parsed.data.name}`,
        text: formatLeadEmail(parsed.data),
      }),
    });

    if (!response.ok) {
      throw new Error(`Resend respondeu ${response.status}`);
    }

    return {
      status: "success",
      message: "Recebemos sua solicitação! Nossa equipe entrará em contato em breve.",
    };
  } catch (error) {
    console.error("[contato] Falha ao enviar e-mail:", error);
    return {
      status: "error",
      message: "Não conseguimos enviar agora. Tente novamente ou fale pelo WhatsApp.",
    };
  }
}

function formatLeadEmail(data: {
  name: string;
  whatsapp: string;
  email: string;
  eventType: string;
  eventDate?: string;
  city: string;
  venue?: string;
  guestCount?: string;
  services: string[];
  message?: string;
}) {
  const services = data.services as InterestService[];
  return [
    `Nome: ${data.name}`,
    `WhatsApp: ${data.whatsapp}`,
    `E-mail: ${data.email}`,
    `Tipo de evento: ${data.eventType}`,
    data.eventDate ? `Data prevista: ${data.eventDate}` : null,
    `Cidade: ${data.city}`,
    data.venue ? `Local do evento: ${data.venue}` : null,
    data.guestCount ? `Convidados (aprox.): ${data.guestCount}` : null,
    `Serviços de interesse: ${services.join(", ")}`,
    data.message ? `Mensagem: ${data.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}
