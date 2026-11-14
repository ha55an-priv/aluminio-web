// src/components/Footer.tsx
import Link from "next/link";
import { SITE, getWhatsAppLink } from "../lib/site";

const navLinks = [
  { href: "/productos", label: "Catálogo de Productos" },
  { href: "/aplicaciones", label: "Aplicaciones" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* ── Cuerpo del footer ──────────────────────────────── */}
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">

        {/* Col 1 — Marca con logo real */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            {/* Logo SVG de ALUCENTER en contexto oscuro — alta legibilidad */}
            <img
              src="/logo-alucenter-white.svg"
              alt="ALUCENTER S.R.L."
              width={160}
              height={40}
              className="h-10 w-auto"
            />
          </div>

          <p className="text-sm leading-relaxed text-slate-400">
            Importadora y distribuidora de perfiles de aluminio de espesor real
            y accesorios para ventanas, puertas, fachadas y box de baño.
          </p>

          <div className="flex items-center gap-2 text-sm text-slate-400">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Cochabamba, Bolivia</span>
          </div>
        </div>

        {/* Col 2 — Navegación */}
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
            Secciones
          </p>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-400 transition hover:text-orange-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Contacto */}
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            Contacto directo
          </p>

          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-2">
              <svg className="mt-0.5 shrink-0 text-orange-400" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.08 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              <span>+591 77994086 (WhatsApp Business)</span>
            </li>
            <li className="flex items-start gap-2">
              <svg className="mt-0.5 shrink-0 text-orange-400" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>Lun–Vie 8:00–18:30 · Sáb 8:00–14:00</span>
            </li>
          </ul>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#1ebe5d] active:scale-95"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.526 5.845L.057 23.25a.75.75 0 00.918.919l5.4-1.47A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.953-1.354l-.355-.21-3.684 1.002.979-3.682-.23-.368A9.715 9.715 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
            </svg>
            Escribir por WhatsApp
          </a>
        </div>
      </div>

      {/* ── Copyright ──────────────────────────────────────── */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-slate-600 sm:flex-row">
          <span>© {year} {SITE.name}. Todos los derechos reservados.</span>
          <span>Cochabamba, Bolivia · Importación y Distribución</span>
        </div>
      </div>
    </footer>
  );
}
