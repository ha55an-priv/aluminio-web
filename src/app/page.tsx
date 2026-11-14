// src/app/page.tsx
import Link from "next/link";
import { SITE, getWhatsAppLink } from "../lib/site";

/* ── Iconos SVG inline ─────────────────────────────────────────────────────── */
function IconRuler() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21.4 11.6l-9-9a2 2 0 00-2.8 0l-7 7a2 2 0 000 2.8l9 9a2 2 0 002.8 0l7-7a2 2 0 000-2.8z" />
      <path d="M7.5 7.5l1.5 1.5M11 11l1.5 1.5M14.5 14.5l1.5 1.5" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function IconBox() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

/* ── Tipos de sistema para la tarjeta de cotización ─────────────────────────── */
const checklistItems = [
  "Línea 20 — Estándar residencial",
  "Línea 25 — Alta demanda (1.2 mm / 1.0 mm)",
  "Templado — Vidrio fijo y barandas",
  "Box de ducha — Áreas húmedas",
  "Tubos estructurales",
  "Accesorios y herrajes compatibles",
];

/* ── Diferenciales competitivos ─────────────────────────────────────────────── */
const diferenciales = [
  {
    icon: <IconRuler />,
    badge: "CALIDAD TÉCNICA",
    title: "Espesor Real Garantizado",
    desc: "Línea 25 en 1.2 mm y 1.0 mm verificado. Sin engaños de perfiles ultra-delgados de 0.8 mm que se deforman con el tiempo.",
  },
  {
    icon: <IconShield />,
    badge: "SELLO ALUCENTER",
    title: "Garantía de Respaldo",
    desc: "Stickers de calidad certificada para que prestigies tus entregas. 13 años de trayectoria en Cochabamba respaldan cada perfil.",
  },
  {
    icon: <IconBox />,
    badge: "STOCK PERMANENTE",
    title: "Todo en un Solo Lugar",
    desc: "Perfiles, herrajes, ruedas, felpas, burletes y accesorios compatibles. Asesoría técnica y entrega rápida para talleres y constructoras.",
  },
];

/* ── Líneas del catálogo para la sección de enlace ─────────────────────────── */
const catalogLinks = [
  { slug: "linea-25", label: "Línea 25", sub: "Alta demanda · 1.2 mm y 1.0 mm", color: "bg-orange-500" },
  { slug: "linea-20", label: "Línea 20", sub: "Residencial estándar", color: "bg-slate-700" },
  { slug: "templado", label: "Templado", sub: "Vidrio fijo y barandas", color: "bg-slate-800" },
  { slug: "box-de-ducha", label: "Box de Ducha", sub: "Mamparas y áreas húmedas", color: "bg-slate-700" },
  { slug: "tubos", label: "Tubos", sub: "Perfiles estructurales", color: "bg-slate-900" },
  { slug: "accesorios", label: "Accesorios", sub: "Herrajes y componentes", color: "bg-orange-700" },
];

export default function HomePage() {
  const waLink = getWhatsAppLink();

  return (
    <div>
      {/* ═══════════════════════════════════════════════════════
          HERO — Fondo oscuro industrial
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">

            {/* Columna izquierda — Propuesta de valor */}
            <div className="space-y-7">
              {/* Badge de trayectoria */}
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-orange-400">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
                13 Años de Trayectoria en Cochabamba · Espesor Real Garantizado
              </div>

              {/* H1 */}
              <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                Perfiles de aluminio de{" "}
                <span className="text-orange-400">espesor real</span> y accesorios
                para obras que perduran
              </h1>

              {/* Subtítulo orientado al dolor */}
              <p className="text-base leading-relaxed text-slate-300 md:text-lg">
                Evita deformaciones y reclamos de posventa. Trabajamos con Línea 25
                en 1.2 mm y 1.0 mm real certificado, stock permanente y herrajes
                compatibles para talleres y constructoras en {SITE.city}.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600 active:scale-95"
                >
                  Cotizar por WhatsApp
                </a>
                <Link
                  href="/productos"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-600 px-6 py-3 text-sm font-semibold text-white transition hover:border-orange-500 hover:text-orange-400"
                >
                  Explorar Catálogo →
                </Link>
              </div>

              {/* Stats rápidos */}
              <div className="flex flex-wrap gap-6 pt-2">
                {[
                  ["13+", "Años de experiencia"],
                  ["7", "Líneas de producto"],
                  ["Stock", "Permanente"],
                ].map(([val, label]) => (
                  <div key={label}>
                    <p className="text-2xl font-bold text-orange-400">{val}</p>
                    <p className="text-xs text-slate-400">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna derecha — Tarjeta Cotización Express */}
            <div className="rounded-2xl border border-slate-700 bg-slate-800/90 p-6 shadow-xl backdrop-blur-sm">
              <div className="mb-5 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                <p className="text-sm font-semibold text-white">
                  Cotización Express — WhatsApp directo
                </p>
              </div>

              <p className="mb-5 text-xs text-slate-400">
                Indica lo que necesitas y te respondemos con disponibilidad y precios:
              </p>

              <ul className="space-y-2.5 text-sm text-slate-300">
                {checklistItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 space-y-3">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
                >
                  Enviar consulta por WhatsApp
                </a>
                <p className="text-center text-xs text-slate-500">
                  Respuesta en horario comercial · Lun–Vie 8:00–18:00
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          DIFERENCIALES — Fondo gris arquitectónico
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-slate-100 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-orange-500">
              Por qué elegir Alucenter
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              La diferencia que ven los mejores talleres
            </h2>
            <p className="mt-3 text-slate-500">
              No todos los perfiles son iguales. Aquí está lo que nos distingue.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {diferenciales.map((d) => (
              <div
                key={d.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                    {d.icon}
                  </div>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    {d.badge}
                  </span>
                </div>
                <h3 className="mb-2 text-base font-bold text-slate-900">{d.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CATÁLOGO — Líneas destacadas
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-orange-500">
                Catálogo técnico
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Líneas y sistemas disponibles
              </h2>
            </div>
            <Link
              href="/productos"
              className="shrink-0 rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-orange-500 hover:text-orange-500"
            >
              Ver catálogo completo →
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {catalogLinks.map((item) => (
              <Link
                key={item.slug}
                href={`/productos/${item.slug}`}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
              >
                {/* Franja visual de color */}
                <div className={`${item.color} relative flex h-28 items-center justify-center overflow-hidden`}>
                  {/* Patrón decorativo de líneas */}
                  <div className="absolute inset-0 opacity-10">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute inset-y-0 w-px bg-white"
                        style={{ left: `${(i + 1) * 16}%` }}
                      />
                    ))}
                  </div>
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="white" strokeWidth="1.5" opacity="0.6" aria-hidden="true">
                    <rect x="4" y="12" width="32" height="6" rx="1" />
                    <rect x="4" y="22" width="32" height="6" rx="1" />
                    <line x1="10" y1="12" x2="10" y2="28" />
                    <line x1="30" y1="12" x2="30" y2="28" />
                  </svg>
                  <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-slate-800 shadow-sm backdrop-blur-sm">
                    Disponible
                  </span>
                </div>

                {/* Contenido */}
                <div className="p-5">
                  <h3 className="font-bold text-slate-900">{item.label}</h3>
                  <p className="mt-1 text-xs text-slate-500">{item.sub}</p>
                  <p className="mt-3 text-xs font-semibold text-orange-500 transition group-hover:text-orange-600">
                    Ver especificaciones →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA FINAL — Banner oscuro de conversión
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-orange-400">
            Atención directa · Sin intermediarios
          </p>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            ¿Listo para cotizar tu proyecto?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-slate-400">
            Enviamos opciones, disponibilidad y tiempos. Para talleres,
            instaladores y constructoras en {SITE.city}.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600 active:scale-95"
            >
              Cotizar ahora por WhatsApp
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-600 px-8 py-4 text-base font-semibold text-white transition hover:border-orange-500 hover:text-orange-400"
            >
              Más formas de contacto
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
