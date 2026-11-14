"use client";
// src/components/Header.tsx
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE, getWhatsAppLink } from "../lib/site";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/productos", label: "Productos" },
  { href: "/aplicaciones", label: "Aplicaciones" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

/*
 * Logo SVG — recreación fiel del isotipo real de ALUCENTER:
 * "A" estilizada con swoosh curvo, sobre badge naranja con buen contraste.
 * Texto blanco GRUESO (strokeWidth=0.5 + fill) para que no se pierda sobre el naranja.
 */
function AluLogo() {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      {/* Fondo naranja redondeado */}
      <rect width="42" height="42" rx="10" fill="#ea580c" />
      {/* Sombra sutil para el contenido */}
      <g filter="url(#logo-shadow)">
        {/* "A" estilizada — patas */}
        <path
          d="M12 33L21 9L30 33"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Barra horizontal de la A */}
        <path
          d="M15.5 25H26.5"
          stroke="white"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Swoosh curvo — arco decorativo */}
        <path
          d="M7 30C9 24 16 14 22 11C28 8 33 12 28 18C24 22 14 28 7 30Z"
          fill="white"
          opacity="0.25"
        />
        <path
          d="M6 32Q14 26 24 16Q30 11 34 14"
          stroke="white"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity="0.6"
        />
      </g>
      <defs>
        <filter id="logo-shadow" x="-2" y="-2" width="50" height="50">
          <feDropShadow dx="0" dy="1" stdDeviation="1" floodOpacity="0.2" />
        </filter>
      </defs>
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
            : "bg-white/90 backdrop-blur-sm border-b border-slate-100",
        ].join(" ")}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5">
          {/* ── Marca / Logo ───────────────────────────────────── */}
          <Link
            href="/"
            className="flex items-center gap-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
          >
            <AluLogo />
            <div className="leading-tight">
              <p className="text-sm font-black tracking-tight text-slate-900">
                {SITE.name}
              </p>
              <p className="text-[11px] font-semibold text-slate-500 leading-none mt-0.5">
                Aluminios &amp; Accesorios · 13 Años
              </p>
            </div>
          </Link>

          {/* ── Navegación desktop ─────────────────────────────── */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "relative px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                    active
                      ? "text-orange-600 font-bold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50",
                  ].join(" ")}
                >
                  {item.label}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-orange-500" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ── Acciones desktop ───────────────────────────────── */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-slate-700 active:scale-95"
              href={getWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.526 5.845L.057 23.25a.75.75 0 00.918.919l5.4-1.47A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.953-1.354l-.355-.21-3.684 1.002.979-3.682-.23-.368A9.715 9.715 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
              </svg>
              Cotizar
            </a>
          </div>

          {/* ── Hamburguesa mobile ────────────────────────────── */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            <span
              className={[
                "block h-0.5 w-5 bg-slate-700 rounded-full transition-transform duration-200",
                isOpen ? "rotate-45 translate-y-2" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block h-0.5 w-5 bg-slate-700 rounded-full transition-opacity duration-200",
                isOpen ? "opacity-0" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block h-0.5 w-5 bg-slate-700 rounded-full transition-transform duration-200",
                isOpen ? "-rotate-45 -translate-y-2" : "",
              ].join(" ")}
            />
          </button>
        </div>

        {/* ── Menú mobile desplegable ──────────────────────────── */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white">
            <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Móvil">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={[
                      "flex items-center rounded-xl px-4 py-3 text-sm font-medium transition",
                      active
                        ? "bg-orange-50 text-orange-700 font-bold border-l-2 border-orange-500"
                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-900",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="mt-3 pt-3 border-t border-slate-100">
                <a
                  className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white transition hover:bg-slate-700"
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                >
                  Cotizar por WhatsApp
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* ── Botón flotante WhatsApp (mobile) ──────────────────── */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-900/30 transition hover:scale-105 hover:shadow-xl active:scale-95 md:hidden"
        aria-label="Contactar por WhatsApp"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.526 5.845L.057 23.25a.75.75 0 00.918.919l5.4-1.47A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.953-1.354l-.355-.21-3.684 1.002.979-3.682-.23-.368A9.715 9.715 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
        </svg>
      </a>
    </>
  );
}
