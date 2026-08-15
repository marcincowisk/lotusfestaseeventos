export type ServiceCategorySlug =
  | "estruturas"
  | "som"
  | "iluminacao"
  | "energia"
  | "efeitos";

export interface ServiceCategory {
  slug: ServiceCategorySlug;
  name: string;
  shortDescription: string;
  description: string;
  outcomes: string[];
  includes: string[];
  /** Caminho de imagem real (quando existir). Ausente = placeholder editorial é usado. */
  coverImage?: string;
}

export type EquipmentCategory =
  | "iluminacao"
  | "efeitos"
  | "audio"
  | "estrutura"
  | "energia"
  | "palco";

export interface Equipment {
  slug: string;
  name: string;
  category: EquipmentCategory;
  description: string;
  recommendedUse: string;
  image?: string;
}

export type EventCategory = "Casamento" | "Festa" | "Corporativo" | "Aniversário" | "Outro";

export interface EventCase {
  slug: string;
  title: string;
  location: string;
  category: EventCategory;
  date?: string;
  services: string[];
  description: string;
  coverImage?: string;
  gallery?: string[];
  video?: string;
  featured?: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export type InterestService =
  | "Estruturas"
  | "Som"
  | "Iluminação"
  | "Energia"
  | "Experiências / Efeitos especiais"
  | "Não sei ainda";

export interface ContactFormValues {
  name: string;
  whatsapp: string;
  email: string;
  eventType: string;
  eventDate?: string;
  city: string;
  venue?: string;
  guestCount?: string;
  services: InterestService[];
  message?: string;
}

export interface ContactFormState {
  status: "idle" | "loading" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<keyof ContactFormValues, string>>;
}
