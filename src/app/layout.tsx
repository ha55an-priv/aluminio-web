// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ALUCENTER S.R.L. | Perfiles de Aluminio y Accesorios — Cochabamba, Bolivia",
  description:
    "Importadora y distribuidora de perfiles de aluminio de espesor real (1.2 mm y 1.0 mm), herrajes y accesorios para ventanas, puertas, fachadas y box de baño. 13 años de trayectoria en Cochabamba, Bolivia.",
  keywords:
    "perfiles aluminio, cochabamba, bolivia, ventanas aluminio, herrajes, box ducha, templado, distribuidora aluminio",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-slate-900">
        <Header />
        {/* pt-24 compensa el header sticky de ~72 px */}
        <main className="min-h-[70vh] pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
