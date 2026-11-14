// src/app/productos/[slug]/page.tsx
import Link from "next/link";
import { CATALOG } from "../../../lib/catalog";
import { SITE, getWhatsAppLink } from "../../../lib/site";
import ProductItemCard from "../../../components/ProductItemCard";

function buildWhatsAppMessage(lineTitle: string) {
  // Mensaje simple y B2B (sin precios)
  return `Hola, quiero cotizar ${lineTitle}. Estoy en ${SITE.city}. ¿Qué disponibilidad y opciones tienen?`;
}

export default async function ProductLinePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const incomingSlug = decodeURIComponent(slug).trim().toLowerCase();

  const line = CATALOG.find(
    (l) => l.slug.trim().toLowerCase() === incomingSlug
  );

  if (!line) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">Línea no encontrada</h1>
        <p className="text-sm text-muted-foreground">
          Revisa el catálogo o vuelve a la lista de productos.
        </p>

        <Link
          className="inline-flex rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-medium transition hover:border-[var(--brand)] hover:bg-[var(--brand-soft)]"
          href="/productos"
        >
          Volver a productos
        </Link>
      </div>
    );
  }

  const waText = encodeURIComponent(buildWhatsAppMessage(line.title));
  const waLink = `${getWhatsAppLink()}&text=${waText}`;

  return (
    <div className="space-y-10">
      {/* Breadcrumb */}
      <div className="text-sm text-muted-foreground">
        <Link className="hover:text-foreground" href="/productos">
          Productos
        </Link>{" "}
        <span className="mx-2">/</span>
        <span className="text-foreground">{line.title}</span>
      </div>

      {/* Encabezado */}
      <section className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Línea / sistema — {SITE.city}
        </p>

        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {line.title}
        </h1>

        {line.subtitle ? (
          <p className="text-sm text-muted-foreground md:text-base">
            {line.subtitle}
          </p>
        ) : null}

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            className="inline-flex items-center justify-center rounded-xl bg-[var(--brand)] px-5 py-3 text-sm font-medium text-white transition hover:bg-[var(--brand-dark)]"
            href={waLink}
            target="_blank"
            rel="noreferrer"
          >
            Cotizar {line.title} por WhatsApp
          </a>

          <Link
            className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-medium text-foreground transition hover:border-[var(--brand)] hover:bg-[var(--brand-soft)]"
            href="/productos"
          >
            Volver al catálogo
          </Link>
        </div>

        <p className="max-w-2xl text-sm text-muted-foreground">
          Precios no publicados porque varían por color, stock y requerimiento.
          Envíanos el ítem y el color y te respondemos con opciones y disponibilidad.
        </p>
      </section>

      {/* Lista de ítems */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">
          Ítems disponibles
        </h2>

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
      </section>
    </div>
  );
}
