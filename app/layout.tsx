import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Edit Max — Edição de vídeos em massa.",
  description:
    "Edite vídeos em massa com o EditMax. Personalize, automatize e prepare centenas de vídeos para publicar em diferentes plataformas, tudo em poucos cliques.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("font-sans scroll-smooth", fontSans.variable)}
    >
      <body
        className={`${fontSans.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
