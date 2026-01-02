// src/components/Header.tsx
// Header = barra superior fija con marca, navegación y botón de WhatsApp.
"use client";
import { useState } from "react";

import Link from "next/link";
import { SITE, getWhatsAppLink } from "../lib/site";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/productos", label: "Productos" },
  { href: "/aplicaciones", label: "Aplicaciones" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];


export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

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

        <button
          className="md:hidden rounded-lg border border-black/10 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          <span className="block h-0.5 w-5 bg-foreground mb-1"></span>
          <span className="block h-0.5 w-5 bg-foreground mb-1"></span>
          <span className="block h-0.5 w-5 bg-foreground"></span>
        </button>

        <a
          className="hidden md:inline-flex rounded-xl bg-[var(--brand)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--brand-dark)]"
          href={getWhatsAppLink()}
          target="_blank"
          rel="noreferrer"
        >
          Cotizar por WhatsApp
        </a>
      </div>
      {isOpen && (
  <div className="md:hidden border-t border-black/5 bg-white/90 backdrop-blur">
    <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
      {navItems.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className={[
              "rounded-xl px-3 py-2 text-sm font-medium transition",
              active
                ? "bg-[var(--brand-soft)] text-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            ].join(" ")}
          >
            {item.label}
          </Link>
        );
      })}

      <a
        className="mt-2 inline-flex justify-center rounded-xl bg-[var(--brand)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--brand-dark)]"
        href={getWhatsAppLink()}
        target="_blank"
        rel="noreferrer"
        onClick={() => setIsOpen(false)}
      >
        Cotizar por WhatsApp
      </a>
    </nav>
  </div>
)}

    </header>
    
  );
}
