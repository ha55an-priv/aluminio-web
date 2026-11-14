"use client";
// src/components/ContactForm.tsx
// Formulario que construye un mensaje de WhatsApp con los datos del usuario.
// No requiere backend: al enviar, abre wa.me con el mensaje prellenado.
import { useState, type FormEvent } from "react";
import { getWhatsAppLink } from "../lib/site";

export default function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!nombre.trim() && !mensaje.trim()) return;

    const text = [
      `Hola, les escribo desde la web de ALUCENTER.`,
      nombre ? `Mi nombre es ${nombre.trim()}.` : "",
      telefono ? `Mi teléfono es ${telefono.trim()}.` : "",
      mensaje ? `Consulta: ${mensaje.trim()}` : "",
    ]
      .filter(Boolean)
      .join(" ");

    const url = `${getWhatsAppLink()}&text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noreferrer");
  }

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 transition focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-200";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="cf-nombre" className="mb-1.5 block text-xs font-semibold text-slate-700">
          Nombre
        </label>
        <input
          id="cf-nombre"
          type="text"
          className={inputClass}
          placeholder="Tu nombre o empresa"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="cf-telefono" className="mb-1.5 block text-xs font-semibold text-slate-700">
          Teléfono (opcional)
        </label>
        <input
          id="cf-telefono"
          type="tel"
          className={inputClass}
          placeholder="Ej. 70000000"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="cf-mensaje" className="mb-1.5 block text-xs font-semibold text-slate-700">
          ¿Qué necesitas cotizar?
        </label>
        <textarea
          id="cf-mensaje"
          className={`${inputClass} min-h-[120px] resize-none`}
          placeholder="Ej: Necesito Línea 25 en champán, 10 unidades, para ventanas de 1.20 × 1.00 m en Cochabamba."
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-orange-600 active:scale-95"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.526 5.845L.057 23.25a.75.75 0 00.918.919l5.4-1.47A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.953-1.354l-.355-.21-3.684 1.002.979-3.682-.23-.368A9.715 9.715 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
        </svg>
        Enviar consulta por WhatsApp
      </button>

      <p className="text-center text-xs text-slate-400">
        Al enviar, se abrirá WhatsApp con tu mensaje prellenado. Sin formularios de email ni datos almacenados.
      </p>
    </form>
  );
}
