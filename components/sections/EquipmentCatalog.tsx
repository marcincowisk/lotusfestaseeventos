"use client";

import { useMemo, useState } from "react";
import type { Equipment, EquipmentCategory } from "@/types";
import { equipmentCategoryLabels } from "@/data/equipment";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { cn } from "@/lib/utils";

interface EquipmentCatalogProps {
  items: Equipment[];
}

export function EquipmentCatalog({ items }: EquipmentCatalogProps) {
  const [active, setActive] = useState<EquipmentCategory | "todos">("todos");

  const categoriesPresent = useMemo(() => {
    const set = new Set(items.map((item) => item.category));
    return Array.from(set);
  }, [items]);

  const filtered = active === "todos" ? items : items.filter((item) => item.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar equipamentos por categoria">
        <FilterButton active={active === "todos"} onClick={() => setActive("todos")}>
          Todos
        </FilterButton>
        {categoriesPresent.map((category) => (
          <FilterButton key={category} active={active === category} onClick={() => setActive(category)}>
            {equipmentCategoryLabels[category]}
          </FilterButton>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <article key={item.slug}>
            <ImagePlaceholder label={item.name} ratio="square" />
            <div className="mt-4">
              <span className="text-label uppercase tracking-[0.12em] text-primary">
                {equipmentCategoryLabels[item.category]}
              </span>
              <h2 className="mt-2 text-h3 text-text">{item.name}</h2>
              <p className="mt-2 text-body text-muted">{item.description}</p>
              <p className="mt-3 text-small text-text/70">
                <span className="text-text/90">Uso recomendado:</span> {item.recommendedUse}
              </p>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-body text-muted">Nenhum equipamento nesta categoria no momento.</p>
      ) : null}
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "border px-4 py-2 text-small transition-colors duration-300",
        active ? "border-primary bg-primary text-primary-foreground" : "border-border/40 text-text/90 hover:border-primary hover:text-primary"
      )}
    >
      {children}
    </button>
  );
}
