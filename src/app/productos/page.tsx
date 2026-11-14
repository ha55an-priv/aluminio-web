// src/app/productos/page.tsx
import Link from "next/link";
import { CATALOG } from "../../lib/catalog";
import { SITE, getWhatsAppLink } from "../../lib/site";

export const metadata = {
  title: `Catálogo de Productos | ${SITE.name}`,
  description: `Catálogo completo de perfiles de aluminio y accesorios de ${SITE.name} en ${SITE.city}. Línea 20, Línea 25 (1.2 mm real), Tubos, Templado, Box de Ducha y más.`,
};

/* Colores/gradientes por slug para las franjas visuales */
const lineColors: Record<string, string> = {
  "linea-20": "bg-slate-700",
  "linea-25": "bg-orange-600",
  "tubos": "bg-slate-800",
  "templado": "bg-slate-700",
  "box-de-ducha": "bg-slate-600",
  "accesorios": "bg-orange-700",
  "chapas-cerraduras": "bg-slate-900",
};

/* Badges de espesor/calidad por slug */
const lineBadges: Record<string, string> = {
  "linea-25": "1.2 mm · 1.0 mm Real",
  "linea-20": "Estándar",
};

function ProfileIllustration() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5" aria-hidden="true">
      <rect x="4" y="14" width="40" height="8" rx="1.5" />
      <rect x="4" y="26" width="40" height="8" rx="1.5" />
      <line x1="12" y1="14" x2="12" y2="34" />
      <line x1="36" y1="14" x2="36" y2="34" />
    </svg>
  );
}

function buildWhatsAppMessage(lineTitle: string) {
  return `Hola, quiero consultar sobre la ${lineTitle}. Estoy en ${SITE.city}. ¿Qué disponibilidad y precios tienen?`;
}

export default function ProductosPage() {
  return (
    <div>
      {/* ── Page Header oscuro ─────────────────────────────── */}
      <section className="bg-slate-900 py-14 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-orange-400">
            Catálogo Técnico — {SITE.city}
          </p>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Nuestros Productos
          </h1>
          <p className="mt-3 max-w-2xl text-slate-300">
            Perfiles de aluminio con espesor real verificado, herrajes y accesorios
            para ventanas, puertas, fachadas, box de baño y vidrio templado.
            Selecciona una línea para ver los ítems y cotizar por WhatsApp.
          </p>
        </div>
      </section>

      {/* ── Grilla de líneas ───────────────────────────────── */}
      <section className="bg-slate-100 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CATALOG.map((line) => {
              const bgColor = lineColors[line.slug] ?? "bg-slate-700";
              const badge = lineBadges[line.slug];
              const waText = encodeURIComponent(buildWhatsAppMessage(line.title));
              const waLink = `${getWhatsAppLink()}&text=${waText}`;

              return (
                <div
                  key={line.slug}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  {/* Cabecera visual de color */}
                  <div className={`${bgColor} relative flex h-36 items-center justify-center overflow-hidden`}>
                    {/* Patrón de líneas decorativas */}
                    <div className="absolute inset-0 opacity-10">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute inset-y-0 w-px bg-white"
                          style={{ left: `${(i + 1) * 11}%` }}
                        />
                      ))}
                    </div>
                    <ProfileIllustration />

                    {/* Badge de categoría */}
                    <span className="absolute left-3 top-3 rounded-full bg-black/30 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                      {line.subtitle ?? "Perfil"}
                    </span>

                    {/* Badge de espesor si existe */}
                    {badge && (
                      <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold text-slate-800 shadow-sm backdrop-blur-sm">
                        {badge}
                      </span>
                    )}
                  </div>

                  {/* Contenido de la tarjeta */}
                  <div className="p-5">
                    <h2 className="font-bold text-slate-900">{line.title}</h2>

                    {line.description && (
                      <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-slate-500">
                        {line.description}
                      </p>
                    )}

                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs text-slate-400">
                        {line.items.length}{" "}
                        {line.items.length === 1 ? "ítem" : "ítems"}
                      </span>
                      <span className="text-xs font-semibold text-orange-500 transition group-hover:text-orange-600">
                        Ver ítems →
                      </span>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <Link
                        href={`/productos/${line.slug}`}
                        className="flex items-center justify-center rounded-lg bg-slate-900 px-3 py-2 text-xs font-semibold text-white transition hover:bg-slate-700"
                      >
                        Ver línea
                      </Link>
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center rounded-lg bg-orange-50 px-3 py-2 text-xs font-semibold text-orange-600 transition hover:bg-orange-100"
                      >
                        Consultar
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA final ──────────────────────────────────────── */}
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="mb-3 text-2xl font-bold text-white">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="mb-6 text-slate-400">
            Contáctanos y te ayudamos a encontrar el perfil o accesorio que necesitas.
          </p>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
