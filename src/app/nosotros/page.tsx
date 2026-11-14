// src/app/nosotros/page.tsx
import { SITE, getWhatsAppLink } from "../../lib/site";

export const metadata = {
  title: `Nosotros | ${SITE.name}`,
  description: `Conoce la historia, misión y valores de ${SITE.name}, importadora y distribuidora de perfiles de aluminio con 13 años de trayectoria en ${SITE.city}, Bolivia.`,
};

const stats = [
  { value: "2011", label: "Año de fundación" },
  { value: "13+", label: "Años de experiencia" },
  { value: "7", label: "Líneas de producto" },
  { value: "Stock", label: "Permanente en Cbba." },
];

const valores = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Enfoque B2B",
    desc: "Atención especializada para talleres, instaladores y proyectos de construcción. Conocemos tus necesidades y tiempos.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Calidad Verificada",
    desc: "Importamos perfiles con espesor real certificado. Nada de 0.8 mm disfrazados de 1.2 mm. Lo que ves es lo que entregas.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Crecimiento Sostenido",
    desc: "13 años de trayectoria en Cochabamba con visión de expansión. Catálogo en crecimiento y reservas a futuro para tu negocio.",
  },
];

const timeline = [
  { year: "2011", event: "Fundación de ALUCENTER S.R.L. en Cochabamba" },
  { year: "2015", event: "Expansión del catálogo con líneas importadas de alta calidad" },
  { year: "2019", event: "Incorporación de accesorios y herrajes compatibles en stock permanente" },
  { year: "2022", event: "Certificación de espesor real: Línea 25 en 1.2 mm y 1.0 mm" },
  { year: "2026", event: "Plataforma digital y visión de expansión a nivel nacional" },
];

export default function NosotrosPage() {
  return (
    <div>
      {/* ── Page Header oscuro ─────────────────────────────── */}
      <section className="bg-slate-900 py-14 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-orange-400">
            Nuestra Trayectoria — {SITE.city}, Bolivia
          </p>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Nosotros
          </h1>
          <p className="mt-3 max-w-2xl text-slate-300">
            Somos {SITE.name}, importadora y distribuidora de perfiles de aluminio
            y accesorios con 13 años de presencia en Cochabamba, Bolivia.
          </p>
        </div>
      </section>

      {/* ── Stats rápidos ──────────────────────────────────── */}
      <section className="bg-slate-800 py-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-black text-orange-400">{s.value}</p>
                <p className="mt-1 text-sm font-medium text-slate-300">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Historia — Timeline ────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-orange-500">
              Nuestra historia
            </p>
            <h2 className="text-2xl font-bold text-slate-900">
              Más de una década distribuyendo calidad
            </h2>
          </div>

          <div className="relative ml-4 border-l-2 border-slate-200 pl-8 md:ml-0 md:pl-0">
            <div className="space-y-10 md:space-y-0">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex flex-col gap-2 md:flex-row md:gap-10 ${i !== timeline.length - 1 ? "md:mb-10" : ""}`}
                >
                  {/* Punto del timeline */}
                  <div className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full border-2 border-orange-500 bg-white md:relative md:left-0 md:mt-0.5 md:shrink-0">
                    <div className="h-2 w-2 rounded-full bg-orange-500" />
                  </div>

                  <div className="md:flex md:gap-6">
                    <span className="shrink-0 text-sm font-black text-orange-500 md:w-12">
                      {item.year}
                    </span>
                    <p className="text-sm text-slate-600">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Valores ────────────────────────────────────────── */}
      <section className="bg-slate-100 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-orange-500">
              Lo que nos define
            </p>
            <h2 className="text-2xl font-bold text-slate-900">Nuestros valores</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {valores.map((v) => (
              <div
                key={v.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                  {v.icon}
                </div>
                <h3 className="mb-2 font-bold text-slate-900">{v.title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="mb-3 text-2xl font-bold text-white">
            ¿Quieres trabajar con nosotros?
          </h2>
          <p className="mb-6 text-slate-400">
            Hablemos de tu proyecto o necesidades de aprovisionamiento.
          </p>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
