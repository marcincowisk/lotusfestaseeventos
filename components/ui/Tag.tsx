import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Tag({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center border border-border/50 px-3 py-1 text-label uppercase tracking-[0.12em] text-muted",
        className
      )}
      {...props}
    />
  );
}
