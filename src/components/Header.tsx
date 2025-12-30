// src/components/Header.tsx
// Header = barra superior fija con marca, navegación y botón de WhatsApp.

import Link from "next/link";
import { SITE, getWhatsAppLink } from "../lib/site";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/productos", label: "Productos" },
  { href: "/aplicaciones", label: "Aplicaciones" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Marca / Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* Placeholder del logo (luego lo reemplazamos por imagen real) */}
          <div className="h-9 w-9 rounded-xl border bg-white" />
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-tight">{SITE.name}</p>
            <p className="text-xs text-muted-foreground">{SITE.tagline}</p>
          </div>
        </Link>

        {/* Navegación (oculta en mobile por ahora) */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA principal */}
        <a
          className="rounded-xl bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-90"
          href={getWhatsAppLink()}
          target="_blank"
          rel="noreferrer"
        >
          Cotizar por WhatsApp
        </a>
      </div>
    </header>
  );
}
