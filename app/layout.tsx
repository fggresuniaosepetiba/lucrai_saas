import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lucraí — Seu CFO Digital Inteligente",
  description:
    "Transforme dados financeiros em decisões lucrativas com IA. Tenha a inteligência estratégica de um CFO profissional sem o custo de R$ 25 mil a R$ 50 mil por mês.",
  openGraph: {
    title: "Lucraí — Seu CFO Digital Inteligente",
    description:
      "Transforme dados financeiros em decisões lucrativas com IA.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geist.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
