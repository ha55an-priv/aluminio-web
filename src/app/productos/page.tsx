// src/app/productos/page.tsx
import Link from "next/link";
import { SITE, getWhatsAppLink } from "../../lib/site";
import { CATALOG, COLORS } from "../../lib/catalog";

export default function ProductosPage() {
  return (
    <div className="space-y-10">
      {/* Encabezado */}
      <section className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Catálogo — {SITE.city}
        </p>

        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Productos y líneas disponibles
        </h1>

        <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
          Catálogo técnico por líneas/sistemas. Sin precios publicados: cotiza por WhatsApp y te confirmamos
          disponibilidad, alternativas y tiempos.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            className="inline-flex items-center justify-center rounded-xl bg-[var(--brand)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--brand-dark)]"
            href={getWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
          >
            Cotizar por WhatsApp
          </a>

          <Link
            className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-medium text-foreground transition hover:border-[var(--brand)] hover:bg-[var(--brand-soft)]"
            href="/contacto"
          >
            Ver cómo cotizar
          </Link>
        </div>
      </section>

      {/* Grid de líneas */}
      <section className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATALOG.map((line) => (
            <Link
              key={line.slug}
              href={`/productos/${line.slug}`}
              className="group block rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:ring-offset-2"
            >
              <span className="mb-3 block h-0.5 w-8 rounded-full bg-muted transition group-hover:bg-[var(--brand)]" />

              <p className="text-sm font-semibold">{line.title}</p>
              {line.subtitle ? (
                <p className="mt-1 text-sm text-muted-foreground">{line.subtitle}</p>
              ) : null}

              <p className="mt-4 text-sm text-muted-foreground">
                {line.items.length} ítems • Colores: {Object.values(COLORS).join(", ")}
              </p>

              <p className="mt-5 text-sm font-medium text-[var(--brand)]">Ver detalles →</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
