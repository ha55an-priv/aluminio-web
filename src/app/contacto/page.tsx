// src/app/contacto/page.tsx
import { SITE, getWhatsAppLink } from "../../lib/site";
import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: `Contacto | ${SITE.name}`,
  description: `Contáctanos por WhatsApp o formulario. Atención directa para cotizaciones de perfiles de aluminio y accesorios en ${SITE.city}, Bolivia.`,
};

const infoItems = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.08 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    label: "WhatsApp Business",
    value: "+591 77994086",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Horario de atención",
    value: "Lun–Vie 8:00–18:00 · Sáb 8:00–13:00",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Ubicación",
    value: "Cochabamba, Bolivia",
  },
];

export default function ContactoPage() {
  const waLink = getWhatsAppLink(
    "Hola, vengo de la web de ALUCENTER. Quiero una cotización de perfiles/accesorios."
  );

  return (
    <div>
      {/* ── Page Header oscuro ─────────────────────────────── */}
      <section className="bg-slate-900 py-14 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-orange-400">
            Atención Directa — {SITE.city}
          </p>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Contacto
          </h1>
          <p className="mt-3 max-w-2xl text-slate-300">
            Escríbenos por WhatsApp para cotizaciones y consultas sobre disponibilidad.
            También puedes dejarnos tu mensaje y te contactamos a la brevedad.
          </p>
        </div>
      </section>

      {/* ── Contenido principal ────────────────────────────── */}
      <section className="bg-slate-100 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 md:grid-cols-2">

            {/* Card WhatsApp — CTA principal */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.526 5.845L.057 23.25a.75.75 0 00.918.919l5.4-1.47A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.953-1.354l-.355-.21-3.684 1.002.979-3.682-.23-.368A9.715 9.715 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-slate-900">WhatsApp Business</p>
                  <p className="text-xs text-slate-500">Canal principal de atención</p>
                </div>
              </div>

              {/* Info de contacto */}
              <ul className="mb-6 space-y-4">
                {infoItems.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0 text-orange-500">{item.icon}</div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500">{item.label}</p>
                      <p className="text-sm text-slate-800">{item.value}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#1ebe5d] active:scale-95"
              >
                Abrir WhatsApp ahora
              </a>

              <p className="mt-3 text-center text-xs text-slate-400">
                Respuesta típica en menos de 2 horas en horario comercial
              </p>
            </div>

            {/* Card formulario */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-5">
                <p className="font-bold text-slate-900">Enviar consulta</p>
                <p className="mt-1 text-xs text-slate-500">
                  Completa el formulario y te responderemos vía WhatsApp.
                </p>
              </div>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* ── Bloque de confianza ────────────────────────────── */}
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 text-center md:grid-cols-3">
            {[
              { val: "13+", label: "Años en el mercado" },
              { val: "2h", label: "Tiempo de respuesta típico" },
              { val: "Stock", label: "Permanente en Cbba." },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-slate-800 bg-slate-800/50 p-6">
                <p className="text-3xl font-black text-orange-400">{s.val}</p>
                <p className="mt-1 text-sm text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
