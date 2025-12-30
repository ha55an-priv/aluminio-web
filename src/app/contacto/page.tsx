// src/app/contacto/page.tsx
// Página de contacto: CTA principal WhatsApp + formulario placeholder (lo conectamos luego)

import { getWhatsAppLink } from "../../lib/site";

export default function ContactoPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Contacto</h1>
        <p className="mt-2 text-muted-foreground">
          Escríbenos por WhatsApp para cotizaciones y disponibilidad. También puedes dejarnos un mensaje.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border bg-white p-6">
          <p className="text-sm font-semibold">WhatsApp</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Respuesta rápida para cotizaciones. Envíanos tipo de sistema y medidas aproximadas.
          </p>

          <a
            className="mt-4 inline-flex w-full justify-center rounded-xl bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-90"
            href={getWhatsAppLink(
              "Hola, vengo de la web de ALUCENTER. Quiero una cotización (perfiles/accesorios)."
            )}
            target="_blank"
            rel="noreferrer"
          >
            Abrir WhatsApp
          </a>
        </div>

        <div className="rounded-2xl border bg-white p-6">
          <p className="text-sm font-semibold">Mensaje</p>

          {/* Form placeholder: todavía no envía nada; luego lo conectamos a email/DB */}
          <form className="mt-4 space-y-3">
            <input
              className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2"
              placeholder="Nombre"
            />
            <input
              className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2"
              placeholder="Teléfono"
            />
            <textarea
              className="min-h-[120px] w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2"
              placeholder="¿Qué necesitas cotizar?"
            />
            <button
              type="button"
              className="w-full rounded-xl bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-90"
            >
              Enviar (pendiente)
            </button>

            <p className="text-xs text-muted-foreground">
              Este formulario lo conectaremos después a email/DB. Por ahora, la vía principal es WhatsApp.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
