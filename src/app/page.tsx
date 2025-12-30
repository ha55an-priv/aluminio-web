// src/app/page.tsx
import { SITE, getWhatsAppLink } from "../lib/site";

const categories = [
  { title: "Perfiles de aluminio", desc: "Líneas para ventanas, puertas y estructuras." },
  { title: "Accesorios", desc: "Herrajes, empaques, felpas, escuadras y más." },
  { title: "Fachadas", desc: "Soluciones para proyectos residenciales y comerciales." },
  { title: "Box de baño", desc: "Accesorios y perfiles para mamparas." },
  { title: "Templados", desc: "Componentes para sistemas de vidrio templado." },
  { title: "Asesoría", desc: "Te ayudamos a elegir el sistema correcto." },
];

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="grid items-center gap-10 md:grid-cols-2">
        <div className="space-y-5">
          <p className="text-sm font-medium text-muted-foreground">
            Distribuidora en {SITE.city} 
          </p>

          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Perfiles de aluminio y accesorios para soluciones arquitectónicas modernas
          </h1>

          <p className="text-base text-muted-foreground md:text-lg">
            Ventanas, puertas, fachadas, box de baño y sistemas para vidrio templado.
            Stock, asesoría y atención rápida para talleres y proyectos.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              className="rounded-xl bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90"
              href={getWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
            >
              Cotizar por WhatsApp
            </a>

            <a
              className="rounded-xl border px-5 py-3 text-sm font-medium transition hover:bg-muted"
              href="/productos"
            >
              Ver productos
            </a>
          </div>

          <div className="flex flex-wrap gap-6 pt-4 text-sm text-muted-foreground">
            <div>
              <p className="font-medium text-foreground">Enfoque B2B</p>
              <p>Talleres y proyectos</p>
            </div>
            <div>
              <p className="font-medium text-foreground">Atención rápida</p>
              <p>Consultas por WhatsApp</p>
            </div>
            <div>
              <p className="font-medium text-foreground">Escalable</p>
              <p>Reservas a futuro</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border bg-muted/30 p-8">
          <div className="rounded-2xl border bg-white p-6">
            <p className="text-sm font-semibold">Cotización rápida</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Envíanos medidas, tipo de sistema y ubicación. Te respondemos con opciones y disponibilidad.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• Tipo: ventana / puerta / fachada / box baño / templado</li>
              <li>• Medidas aproximadas</li>
              <li>• Color o acabado (si aplica)</li>
              <li>• Zona ({SITE.city} / otra)</li>
            </ul>

            <a
              className="mt-6 inline-flex w-full justify-center rounded-xl bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-90"
              href={getWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
            >
              Enviar solicitud
            </a>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Líneas y aplicaciones</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Soluciones para fabricación y obra, con un catálogo que crecerá con tu necesidad.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <div key={c.title} className="rounded-2xl border bg-white p-6">
              <p className="text-sm font-semibold">{c.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border bg-muted/30 p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-semibold">¿Listo para cotizar?</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Te respondemos con opciones, disponibilidad y tiempos.
            </p>
          </div>

          <a
            className="inline-flex justify-center rounded-xl bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90"
            href={getWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
          >
            Cotizar ahora
          </a>
        </div>
      </section>
    </div>
  );
}
