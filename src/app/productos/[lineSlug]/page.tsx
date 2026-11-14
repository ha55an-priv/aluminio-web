// src/app/productos/[lineSlug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { CATALOG } from "../../../lib/catalog";
import { SITE, getWhatsAppLink } from "../../../lib/site";
import ProductItemCard from "../../../components/ProductItemCard";

function buildWhatsAppMessage(lineTitle: string) {
  return `Hola, quiero cotizar ${lineTitle}. Estoy en ${SITE.city}. ¿Qué disponibilidad y opciones tienen?`;
}

interface ProductLinePageProps {
  params: Promise<{ lineSlug: string }>;
}

/* Colores de franja por slug */
const lineColors: Record<string, string> = {
  "linea-20": "bg-slate-700",
  "linea-25": "bg-orange-600",
  "tubos": "bg-slate-800",
  "templado": "bg-slate-700",
  "box-de-ducha": "bg-slate-600",
  "accesorios": "bg-orange-700",
  "chapas-cerraduras": "bg-slate-900",
};

const esprsorBadge: Record<string, string> = {
  "linea-25": "Espesor Real: 1.2 mm · 1.0 mm",
  "linea-20": "Perfil Estándar",
};

export default async function ProductLinePage({ params }: ProductLinePageProps) {
  const { lineSlug } = await params;
  const incomingSlug = lineSlug.trim().toLowerCase();

  const line = CATALOG.find(
    (item) => item.slug.trim().toLowerCase() === incomingSlug
  );

  if (!line) {
    notFound();
  }

  const waText = encodeURIComponent(buildWhatsAppMessage(line.title));
  const waLink = `${getWhatsAppLink()}&text=${waText}`;
  const bgColor = lineColors[line.slug] ?? "bg-slate-800";
  const esprsorLabel = esprsorBadge[line.slug];

  return (
    <div>
      {/* ── Page Header oscuro ─────────────────────────────── */}
      <section className={`${bgColor} py-14 text-white`}>
        <div className="mx-auto max-w-6xl px-4">
          {/* Breadcrumb */}
          <nav className="mb-4 flex items-center gap-2 text-xs text-white/60">
            <Link href="/productos" className="transition hover:text-white">
              Productos
            </Link>
            <span>/</span>
            <span className="text-white">{line.title}</span>
          </nav>

          {line.subtitle && (
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-orange-300">
              {line.subtitle} — {SITE.city}
            </p>
          )}

          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            {line.title}
          </h1>

          {esprsorLabel && (
            <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-orange-400/40 bg-orange-400/10 px-3 py-1.5 text-xs font-bold text-orange-300">
              <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {esprsorLabel}
            </span>
          )}

          {line.description && (
            <p className="mt-3 max-w-2xl text-sm text-white/70">
              {line.description}
            </p>
          )}

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600"
            >
              Cotizar {line.title} por WhatsApp
            </a>
            <Link
              href="/productos"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-orange-400 hover:text-orange-300"
            >
              ← Volver al catálogo
            </Link>
          </div>
        </div>
      </section>

      {/* ── Aviso de precios ───────────────────────────────── */}
      <div className="bg-orange-50 border-b border-orange-100">
        <div className="mx-auto max-w-6xl px-4 py-3">
          <p className="text-xs text-orange-700">
            <strong>Precios no publicados</strong> — Varían según color, stock y requerimiento del proyecto.
            Indica el ítem, color y cantidad, y te respondemos con opciones y disponibilidad.
          </p>
        </div>
      </div>

      {/* ── Ítems disponibles ──────────────────────────────── */}
      <section className="bg-slate-100 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-6 text-xl font-bold text-slate-900">
            Ítems disponibles
            <span className="ml-2 text-sm font-normal text-slate-400">
              ({line.items.length} {line.items.length === 1 ? "ítem" : "ítems"})
            </span>
          </h2>

          {line.items.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {line.items.map((item) => (
                <ProductItemCard
                  key={item.id}
                  lineTitle={line.title}
                  itemName={item.name}
                  colors={item.colors}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
              <p className="text-sm text-slate-500">
                Actualmente no hay ítems registrados para esta línea.
                Contáctanos para más información.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── Sección de asesoramiento ───────────────────────── */}
      <section className="bg-slate-900 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="text-white">
              <h2 className="text-xl font-bold">¿Necesitas asesoramiento?</h2>
              <p className="mt-1.5 text-sm text-slate-400">
                En {SITE.name} te ayudamos a elegir el sistema de aluminio correcto
                para tu proyecto.
              </p>
            </div>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600"
            >
              Solicitar cotización
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
