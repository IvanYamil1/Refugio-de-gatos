import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Patitas Felices | Refugio de Gatos",
  description: "Refugio dedicado al rescate, rehabilitación y adopción responsable de gatos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${cormorant.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
