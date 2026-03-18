// src/components/ui/card.tsx

import { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_20px_40px_rgba(23,150,0,0.3)] hover:border-[var(--color-accent)] transition-all duration-300 hover:scale-[1.02]">
      {children}
    </div>
  );
}

export function CardImage({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className="w-full h-48 object-cover" />;
}

export function CardContent({ children }: { children: ReactNode }) {
  return <div className="p-4 space-y-3">{children}</div>;
}

export function CardTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-lg font-semibold text-[var(--color-text)]">
      {children}
    </h2>
  );
}

export function CardDescription({ children }: { children: ReactNode }) {
  return <p className="text-sm text-[var(--color-muted)]">{children}</p>;
}
