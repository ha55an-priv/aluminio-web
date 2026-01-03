"use client";

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
    <div className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <span className="mb-3 block h-0.5 w-8 rounded-full bg-muted transition group-hover:bg-[var(--brand)]" />

      <p className="text-sm font-semibold">{itemName}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {colors.map((ck) => {
          const active = ck === selected;
          return (
            <button
              key={ck}
              type="button"
              onClick={() => setSelected(ck)}
              className={[
                "rounded-full border px-3 py-1 text-xs transition",
                active
                  ? "border-[var(--brand)] bg-[var(--brand-soft)] text-foreground"
                  : "border-black/10 bg-white text-muted-foreground hover:border-[var(--brand)] hover:bg-[var(--brand-soft)]",
              ].join(" ")}
            >
              {COLORS[ck]}
            </button>
          );
        })}
      </div>

      <a
        className="mt-5 inline-flex w-full justify-center rounded-xl bg-[var(--brand)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--brand-dark)]"
        href={waHref}
        target="_blank"
        rel="noreferrer"
      >
        Consultar este ítem
      </a>
    </div>
  );
}
