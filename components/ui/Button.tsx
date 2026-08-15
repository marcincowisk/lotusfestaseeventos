import Link from "next/link";
import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-small font-medium tracking-wide transition-all duration-300 ease-premium focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none px-7 py-3.5";

const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-accent",
  outline: "border border-border text-text hover:border-primary hover:text-primary",
  ghost: "text-text hover:text-primary",
};

type Variant = keyof typeof variants;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return <button className={cn(base, variants[variant], className)} {...props} />;
}

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  external?: boolean;
}

export function ButtonLink({ href, variant = "primary", className, external, ...props }: ButtonLinkProps) {
  const classes = cn(base, variants[variant], className);

  if (external) {
    return <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props} />;
  }

  return <Link href={href} className={classes} {...props} />;
}
