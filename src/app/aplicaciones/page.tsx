// src/app/aplicaciones/page.tsx
import { SITE, getWhatsAppLink } from "../../lib/site";

export const metadata = {
  title: `Aplicaciones | ${SITE.name}`,
  description: `Soluciones y sistemas de aluminio para distintos tipos de obra: ventanas, puertas, fachadas, box de baño, templados y más. ${SITE.name}, ${SITE.city}.`,
};

const apps = [
  {
    slug: "ventanas",
    title: "Ventanas",
    sub: "CARPINTERÍA RESIDENCIAL Y COMERCIAL",
    desc: "Sistemas corredizos, batientes y proyectantes en Línea 20 y Línea 25. Diseño robusto con espesor real para durabilidad a largo plazo.",
    details: ["Línea 20 y Línea 25", "Corredizas y batientes", "Colores: champán, negro, blanco, madera"],
    color: "bg-slate-800",
  },
  {
    slug: "puertas",
    title: "Puertas",
    sub: "SOLUCIONES DE ACCESO",
    desc: "Puertas de aluminio para accesos residenciales y comerciales. Acabados en múltiples colores con herrajes de alta resistencia.",
    details: ["Perfil Línea 25 reforzado", "Herrajes y bisagras incluidos", "Llave de seguridad opcional"],
    color: "bg-slate-700",
  },
  {
    slug: "fachadas",
    title: "Fachadas",
    sub: "CERRAMIENTOS ARQUITECTÓNICOS",
    desc: "Perfiles y accesorios para cerramientos modernos en proyectos residenciales y comerciales. Estética y funcionalidad.",
    details: ["Perfil estructural Línea 25", "Sellado y burletes incluidos", "Proyectos a medida"],
    color: "bg-orange-700",
  },
  {
    slug: "box-bano",
    title: "Box de Baño",
    sub: "MAMPARAS Y ÁREAS HÚMEDAS",
    desc: "Perfiles livianos y herrajes estéticos diseñados para áreas húmedas. Resistencia al vapor y corrosión.",
    details: ["Hoja, división y jamba de box", "Riel superior especializado", "Ruedas y guías incluidas"],
    color: "bg-slate-600",
  },
  {
    slug: "templados",
    title: "Templados",
    sub: "VIDRIO FIJO Y BARANDAS",
    desc: "Componentes especializados para instalación de vidrios templados, barandas y divisiones fijas en interiores y exteriores.",
    details: ["Cabezal, trillo y vedapre", "Compatible con vidrio 8–12 mm", "Acabados en 3 colores"],
    color: "bg-slate-900",
  },
  {
    slug: "estructuras",
    title: "Estructuras",
    sub: "PERFILES TUBULARES",
    desc: "Tubos cuadrados y rectangulares para construcción liviana, herrería fina y estructuras decorativas y funcionales.",
    details: ["Tubos 25×25 a 60×30 mm", "Champán, negro y blanco", "Corte a medida disponible"],
    color: "bg-slate-800",
  },
];

function AppIllustration({ color }: { color: string }) {
  return (
    <div className={`${color} relative flex h-40 items-center justify-center overflow-hidden`}>
      {/* Grid pattern */}
      <div className="absolute inset-0">
        {[...Array(7)].map((_, i) => (
          <div key={`v${i}`} className="absolute inset-y-0 w-px bg-white/10" style={{ left: `${(i + 1) * 12.5}%` }} />
        ))}
        {[...Array(3)].map((_, i) => (
          <div key={`h${i}`} className="absolute inset-x-0 h-px bg-white/10" style={{ top: `${(i + 1) * 25}%` }} />
        ))}
      </div>
      {/* Frame icon */}
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5" aria-hidden="true">
        <rect x="6" y="6" width="40" height="40" rx="3" />
        <line x1="6" y1="18" x2="46" y2="18" />
        <line x1="6" y1="34" x2="46" y2="34" />
        <line x1="18" y1="6" x2="18" y2="46" />
        <line x1="34" y1="6" x2="34" y2="46" />
      </svg>
    </div>
  );
}

export default function AplicacionesPage() {
  return (
    <div>
      {/* ── Page Header oscuro ─────────────────────────────── */}
      <section className="bg-slate-900 py-14 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-orange-400">
            Soluciones en Obra — {SITE.city}
          </p>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Aplicaciones
          </h1>
          <p className="mt-3 max-w-2xl text-slate-300">
            Sistemas de aluminio para cada tipo de obra y fabricación.
            Encuentra el perfil y los accesorios exactos para tu proyecto.
          </p>
        </div>
      </section>

      {/* ── Grilla de aplicaciones ─────────────────────────── */}
      <section className="bg-slate-100 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {apps.map((app) => {
              const waText = encodeURIComponent(
                `Hola, necesito información sobre ${app.title} de aluminio. Estoy en ${SITE.city}.`
              );
              const waLink = `${getWhatsAppLink()}&text=${waText}`;

              return (
                <div
                  key={app.slug}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  {/* Cabecera visual */}
                  <div className="relative">
                    <AppIllustration color={app.color} />
                    <span className="absolute left-3 top-3 rounded-full bg-black/30 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                      {app.sub}
                    </span>
                  </div>

                  {/* Contenido */}
                  <div className="p-5">
                    <h2 className="font-bold text-slate-900">{app.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">{app.desc}</p>

                    {/* Checklist de detalles */}
                    <ul className="mt-4 space-y-1.5">
                      {app.details.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-xs text-slate-600">
                          <svg className="h-3.5 w-3.5 shrink-0 text-orange-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {d}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={waLink}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-orange-600"
                    >
                      Consultar disponibilidad
                    </a>
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
            ¿Tienes un proyecto específico?
          </h2>
          <p className="mb-6 text-slate-400">
            Nuestro equipo te asesora en la selección del sistema correcto para
            tu obra o taller en {SITE.city}.
          </p>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600"
          >
            Asesoramiento por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
