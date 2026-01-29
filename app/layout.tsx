import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ProvidersWrapper } from "./providers-wrapper";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio do Lauro",
  description: "Portfolio Interativo, Moderno & Minimalista",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <ProvidersWrapper>
          {children}
        </ProvidersWrapper>
      </body>
    </html>
  );
}
