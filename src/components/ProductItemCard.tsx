"use client";
// src/components/ProductItemCard.tsx
import { useMemo, useState } from "react";
import { COLORS, type ColorKey } from "../lib/catalog";
import { getWhatsAppLink, SITE } from "../lib/site";

type Props = {
  lineTitle: string;
  itemName: string;
  colors: ColorKey[];
};

export default function ProductItemCard({ lineTitle, itemName, colors }: Props) {
  const [selected, setSelected] = useState<ColorKey>(colors[0]);

  const waHref = useMemo(() => {
    const msg = `Hola, quiero cotizar ${lineTitle} — ${itemName}. Color: ${COLORS[selected]}. Estoy en ${SITE.city}.`;
    return `${getWhatsAppLink()}&text=${encodeURIComponent(msg)}`;
  }, [lineTitle, itemName, selected]);

  return (
    <div className="group flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      {/* Cabecera con acento de color */}
      <div className="h-1.5 w-full rounded-t-2xl bg-orange-500" />

      <div className="flex flex-1 flex-col p-5">
        <p className="font-semibold text-slate-900">{itemName}</p>
        <p className="mt-0.5 text-xs text-slate-400">{lineTitle}</p>

        {/* Selector de colores */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {colors.map((ck) => {
            const active = ck === selected;
            return (
              <button
                key={ck}
                type="button"
                onClick={() => setSelected(ck)}
                className={[
                  "rounded-full border px-3 py-1 text-xs font-medium transition",
                  active
                    ? "border-orange-500 bg-orange-50 text-orange-700"
                    : "border-slate-200 bg-white text-slate-500 hover:border-orange-400 hover:text-orange-600",
                ].join(" ")}
              >
                {COLORS[ck]}
              </button>
            );
          })}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* CTA */}
        <a
          className="mt-5 flex w-full items-center justify-center gap-1.5 rounded-xl bg-orange-500 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-orange-600 active:scale-95"
          href={waHref}
          target="_blank"
          rel="noreferrer"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.526 5.845L.057 23.25a.75.75 0 00.918.919l5.4-1.47A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.953-1.354l-.355-.21-3.684 1.002.979-3.682-.23-.368A9.715 9.715 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
          </svg>
          Consultar este ítem
        </a>
      </div>
    </div>
  );
}
