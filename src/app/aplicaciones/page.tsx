const apps = [
  { title: "Ventanas", desc: "Sistemas corredizos, batientes y proyectantes." },
  { title: "Puertas", desc: "Soluciones residenciales y comerciales." },
  { title: "Fachadas", desc: "Perfiles y accesorios para cerramientos modernos." },
  { title: "Box de baño", desc: "Perfiles y herrajes para mamparas." },
  { title: "Templados", desc: "Componentes para vidrio templado y barandas." },
];

export default function AplicacionesPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Aplicaciones</h1>
        <p className="mt-2 text-muted-foreground">
          Soluciones y sistemas para distintos tipos de obra y fabricación.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {apps.map((a) => (
          <div key={a.title} className="rounded-2xl border bg-white p-6">
            <p className="text-sm font-semibold">{a.title}</p>
            <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
