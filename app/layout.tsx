import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ProvidersWrapper } from "./providers-wrapper";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lauro | Portfolio",
  description: "Portfolio Interativo, Moderno & Minimalista",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 1. Adicionamos 'suppressHydrationWarning' porque o ThemeProvider altera o html
    // 2. Mantemos a classe 'dark' como padrão para evitar flashes brancos
    <html lang="pt-BR" suppressHydrationWarning className="dark">
      <body
        className={`${inter.className} bg-background text-foreground antialiased`}
      >
        <ProvidersWrapper>
          {children}
        </ProvidersWrapper>
      </body>
    </html>
  );
}