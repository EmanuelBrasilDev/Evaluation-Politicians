import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Panorama Eleitoral | História das Eleições Presidenciais",
  description:
    "Informações históricas e educativas sobre eleições presidenciais, sistema eleitoral brasileiro e resultados oficiais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
