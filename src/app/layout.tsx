// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "ALUCENTER S.R.L | Perfiles de aluminio y accesorios",
  description: "Distribuidora de perfiles de aluminio y accesorios...",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        <main className="mx-auto min-h-[70vh] max-w-6xl px-4 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
