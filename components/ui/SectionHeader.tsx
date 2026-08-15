import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  /** Nível semântico do heading. Use "h1" quando este for o título principal da página (só um h1 por página). */
  level?: "h1" | "h2";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  level = "h2",
}: SectionHeaderProps) {
  const Heading = level;

  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <span className="mb-4 block text-label uppercase tracking-[0.2em] text-primary">{eyebrow}</span>
      ) : null}
      <Heading className={cn("text-balance text-text", level === "h1" ? "text-h1" : "text-h2")}>{title}</Heading>
      {description ? <p className="mt-5 text-body-lg text-muted">{description}</p> : null}
    </div>
  );
}
