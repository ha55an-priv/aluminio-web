export default function NosotrosPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Nosotros</h1>
        <p className="mt-2 text-muted-foreground">
          Somos ALUCENTER S.R.L, distribuidora de perfiles de aluminio y accesorios en Cochabamba,
          con visión de expansión a Santa Cruz.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border bg-white p-6">
          <p className="text-sm font-semibold">Enfoque</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Atención a talleres, instaladores y proyectos de obra.
          </p>
        </div>
        <div className="rounded-2xl border bg-white p-6">
          <p className="text-sm font-semibold">Calidad</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Productos seleccionados y asesoría para elegir el sistema correcto.
          </p>
        </div>
        <div className="rounded-2xl border bg-white p-6">
          <p className="text-sm font-semibold">Crecimiento</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Base preparada para catálogo avanzado y reservas en el futuro.
          </p>
        </div>
      </div>
    </section>
  );
}
