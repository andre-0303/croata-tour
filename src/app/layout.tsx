import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pontos Turísticos de Croatá",
  description:
    "Descubra os encantos de Croatá: pontos turísticos, cultura e história em um só lugar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="bg-background text-foreground">
      <body className="antialiased">{children}</body>
    </html>
  );
}
