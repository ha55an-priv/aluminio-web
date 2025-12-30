// src/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="text-sm font-semibold">ALUCENTER S.R.L</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Distribución de perfiles de aluminio y accesorios para ventanas, puertas,
            fachadas, box de baño y templados.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Cochabamba, Bolivia. <span className="text-foreground">Próximamente Santa Cruz.</span>
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold">Secciones</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link className="hover:text-foreground" href="/productos">Productos</Link></li>
            <li><Link className="hover:text-foreground" href="/aplicaciones">Aplicaciones</Link></li>
            <li><Link className="hover:text-foreground" href="/nosotros">Nosotros</Link></li>
            <li><Link className="hover:text-foreground" href="/contacto">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold">Contacto</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>WhatsApp: (pendiente)</li>
            <li>Horario: Lun–Sáb (pendiente)</li>
            <li>Email: (pendiente)</li>
          </ul>
          <p className="mt-6 text-xs text-muted-foreground">
            © {new Date().getFullYear()} ALUCENTER S.R.L. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
