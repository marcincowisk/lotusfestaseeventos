export interface BeforeAfterItem {
  id: string;
  label: string;
  beforeImage: string;
  afterImage: string;
}

/**
 * Seção Antes/Depois só deve existir quando houver material real (fotos do
 * espaço vazio + fotos do evento montado). Vazio por padrão — o componente
 * (components/sections/BeforeAfter.tsx) não renderiza nada até haver itens aqui.
 */
export const beforeAfterItems: BeforeAfterItem[] = [];
