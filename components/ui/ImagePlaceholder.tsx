import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  label: string;
  ratio?: "square" | "portrait" | "landscape" | "wide" | "full";
  className?: string;
}

const ratios: Record<NonNullable<ImagePlaceholderProps["ratio"]>, string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
  full: "h-full",
};

/**
 * Placeholder editorial usado onde ainda não há fotografia/vídeo real do evento.
 * Nunca usar fotos de banco de imagens genéricas — este componente sinaliza
 * claramente (visual e semanticamente) que o espaço aguarda material real,
 * conforme a regra #34/#35 do briefing ("prova, não promessa").
 */
export function ImagePlaceholder({ label, ratio = "landscape", className }: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`Espaço reservado para imagem: ${label}`}
      className={cn(
        "relative flex items-end overflow-hidden bg-gradient-to-br from-surface-raised via-surface to-bg",
        ratios[ratio],
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgb(var(--color-text)) 0px, rgb(var(--color-text)) 1px, transparent 1px, transparent 14px)",
        }}
      />
      <span className="relative z-10 m-4 inline-flex items-center gap-2 border border-border/40 bg-bg/50 px-3 py-1.5 text-label uppercase tracking-[0.12em] text-muted backdrop-blur-sm">
        TODO · {label}
      </span>
    </div>
  );
}
