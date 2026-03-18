// src/components/ui/badge.tsx

import { ReactNode } from "react";

type Variant = "default" | "secondary" | "accent";

interface BadgeProps {
  children: ReactNode;
  variant?: Variant;
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  const base =
    "inline-flex items-center rounded-lg px-3 py-1 text-xs font-medium";

  const variants = {
    default: "bg-[var(--color-primary)] text-[var(--color-primary-foreground)]",

    secondary:
      "bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)]",

    accent: "bg-[var(--color-accent)] text-[var(--color-text-foreground)]",
  };

  return <span className={`${base} ${variants[variant]}`}>{children}</span>;
}
