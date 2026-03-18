import { ReactNode } from "react";

export function Heading({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-3xl md:text-4xl font-bold text-text">{children}</h1>
  );
}
