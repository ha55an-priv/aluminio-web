// src/lib/catalog.ts

export type ColorKey = "champan" | "negro" | "blanco" | "madera" | "Transparente" | "mate";



export const COLORS: Record<ColorKey, string> = {
  champan: "Champán / Natural",
  negro: "Negro",
  blanco: "Blanco",
  madera: "Madera",
  Transparente: "Transparente",
  mate: "Mate",
};

export type CatalogItem = {
  id: string;             // Ej: "l25-01"
  name: string;           // Ej: "Riel superior L25"
  colors: ColorKey[];     // Ej: ["champan", "negro", "blanco"]
};

export type CatalogLine = {
  slug: string;           // Ej: "linea-25"
  title: string;          // Ej: "Línea 25"
  subtitle?: string;      // Ej: "Carpintería / corrediza"
  description?: string;   // Ej: "Sistema reforzado de alta demanda..."
  items: CatalogItem[];
};

export const catalog: CatalogLine[] = [
  {
    slug: "linea-20",
    title: "Línea 20",
    subtitle: "Carpintería de Aluminio",
    description: "Sistema corredizo estándar para soluciones residenciales prácticas.",
    items: [
      
      { id: "l20-04", name: "Pierna L20", colors: ["champan"] },
      
    ],
  },
  {
    slug: "linea-25",
    title: "Línea 25",
    subtitle: "Carpintería de Aluminio",
    description: "Sistema reforzado de alta demanda, ideal para ventanas de dimensiones mayores.",
    items: [
      { id: "l25-01", name: "Riel Superior L25", colors: ["champan", "negro", "blanco", "madera"] },
      { id: "l25-02", name: "Riel Inferior L25", colors: ["champan", "negro", "blanco", "madera"] },
      { id: "l25-03", name: "Jamba L25", colors: ["champan", "negro", "blanco", "madera"] },
      { id: "l25-04", name: "Pierna L25", colors: ["champan", "negro", "blanco", "madera"] },
      { id: "l25-05", name: "Enganche L25", colors: ["champan", "negro", "blanco", "madera"] },
      { id: "l25-06", name: "Zocalo L25", colors: ["champan", "negro", "blanco", "madera"] },
      { id: "l25-07", name: "Cabezal L25", colors: ["champan", "negro", "blanco", "madera"] },
      { id: "l25-08", name: "Juego L25", colors: ["champan", "negro", "blanco", "madera"] },
    ],
  },
  {
    slug: "tubos",
    title: "Tubos",
    subtitle: "Perfiles Estructurales",
    description: "Perfiles tubulares cuadrados y rectangulares para construcción y herrería fina.",
    items: [
      { id: "tub-01", name: "Tubo 60*30", colors: ["champan", "negro", "blanco", "madera"] },
      { id: "tub-02", name: "Tubo 50*25", colors: ["champan", "negro", "blanco", "madera"] },
      { id: "tub-03", name: "Tubo 40*80", colors: ["champan", "negro", "blanco", "madera"] },
      { id: "tub-04", name: "Tubo 40*40", colors: ["champan", "negro", "blanco"] },
      { id: "tub-05", name: "Tubo 30*30", colors: ["champan", "negro", "blanco"] },
      { id: "tub-06", name: "Tubo 25*25", colors: ["champan"] },

    ],
  },
  {
    slug: "templado",
    title: "Templado",
    subtitle: "Sistemas para Vidrio",
    description: "Perfiles especializados para la instalación de vidrios templados y fijos.",
    items: [
      { id: "temp-01", name: "Cabezal", colors: ["champan", "negro", "blanco"] },
      { id: "temp-02", name: "Tapa Cabezal", colors: ["champan", "negro", "blanco"] },
      { id: "temp-03", name: "Trillo", colors: ["champan", "negro", "blanco"] },
      { id: "temp-04", name: "Vedapre U", colors: ["champan", "negro", "blanco", "madera"] },
      { id: "temp-05", name: "Vedapre H", colors: ["champan", "negro", "blanco", "madera"] },
      { id: "temp-06", name: "Juego Templado", colors: ["champan", "negro", "blanco"] },
    ],
  },
  {
    slug: "box-de-ducha",
    title: "Box de Ducha",
    subtitle: "Sistemas para Baños",
    description: "Perfiles livianos y estéticos diseñados específicamente para áreas húmedas.",
    items: [
      { id: "box-01", name: "Hoja de Box", colors: ["champan"] },
      { id: "box-02", name: "Division de Box", colors: ["champan"] },
      { id: "box-03", name: "Jamba de Box", colors: ["champan"] },
      { id: "box-04", name: "Riel Superior de Box", colors: ["champan"] },
    ],
  },
  // Agrega estas líneas al final de tu array catalog en src/lib/catalog.ts
{
  slug: "accesorios",
  title: "Accesorios",
  subtitle: "Componentes Técnicos",
  description: "Ruedas, brazos y sistemas de cierre para todas las líneas.",
  items: [
    { id: "ACC-R20", name: "Ruedas Linea 20", colors: ["champan"] },
    { id: "ACC-R25", name: "Ruedas Linea 25", colors: ["champan"] },
    { id: "ACC-R4000", name: "Ruedas Linea 4000", colors: ["champan"] },
    { id: "ACC-RtempS", name: "Ruedas de templado Simple", colors: ["champan"] },
    { id: "ACC-RtempD", name: "Ruedas de templado Doble", colors: ["champan"] },
    { id: "ACC-RBOx", name: "Ruedas de box", colors: ["champan"] },
    { id: "ACC-B30", name: "Brazo Proyectante de 30", colors: ["champan"] },
    { id: "ACC-B40", name: "Brazo Proyectante de 40", colors: ["champan"] },
    { id: "ACC-B65", name: "Brazo Proyectante de 65", colors: ["champan"] },
    { id: "ACC-B40M", name: "Brazo Proyectante de 40 Metalico", colors: ["champan"] },
    { id: "ACC-B60M", name: "Brazo Proyectante de 60 Metalico ", colors: ["champan"] },
    { id: "ACC-SIL", name: "Siliconas", colors: ["champan", "negro", "blanco", "Transparente", "mate"] },
    { id: "ACC-FEL20", name: "Felpa L20", colors: ["negro"] },
    { id: "ACC-FEL25", name: "Felpa L25", colors: ["negro"] },
    { id: "ACC-BUR20", name: "Burlete L20", colors: ["negro"] },
    { id: "ACC-BUR25", name: "Burlete L25", colors: ["negro"] },
  ],
  },
  {
    slug: "chapas-cerraduras",
    title: "Chapas y Cerraduras",
    subtitle: "Seguridad",
    description: "Sistemas de seguridad especializados para perfiles de aluminio.",
    items: [
      { id: "CH-L35", name: "Chapas L35", colors: ["champan"] },
      { id: "CH-PICO", name: "Chapas Pico Loro", colors: ["champan", "blanco", "negro"] },
      { id: "CH-COR", name: "Chapa Corredera", colors: ["champan", "negro"] },
    ],
  }
  
];
export const CATALOG: CatalogLine[] = catalog;