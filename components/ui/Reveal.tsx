"use client";

import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";
import type { ElementType, HTMLAttributes } from "react";

interface RevealProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  delay?: number;
}

/** Wrapper genérico de scroll-reveal (fade + translateY), respeitando prefers-reduced-motion via CSS. */
export function Reveal({ as: Tag = "div", className, style, delay = 0, children, ...props }: RevealProps) {
  const ref = useReveal<HTMLElement>();

  return (
    <Tag
      ref={ref}
      className={cn("reveal", className)}
      style={{ transitionDelay: delay ? `${delay}ms` : undefined, ...style }}
      {...props}
    >
      {children}
    </Tag>
  );
}
