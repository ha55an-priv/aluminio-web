export const SITE = {
  name: "ALUCENTER S.R.L",
  tagline: "Perfiles de aluminio y accesorios",
  city: "Cochabamba",
  whatsapp: {
    // Número en formato internacional SIN el "+" (ej: Bolivia = 591)
    number: "59177994086", 
    // Mensaje por defecto para consultas
    defaultText:
      "Hola, vengo de la web de ALUCENTER. Quiero una cotización de perfiles/accesorios.",
  },
};

// Helper: arma el link de WhatsApp con mensaje prellenado
export function getWhatsAppLink(text?: string) {
  const msg = encodeURIComponent(text ?? SITE.whatsapp.defaultText);
  return `https://wa.me/${SITE.whatsapp.number}?text=${msg}`;
}