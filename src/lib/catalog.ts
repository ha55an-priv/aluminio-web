// src/lib/catalog.ts

export type ColorKey = "champan" | "negro" | "blanco" | "madera";

export const COLORS: Record<ColorKey, string> = {
  champan: "Champán / Natural",
  negro: "Negro",
  blanco: "Blanco",
  madera: "Madera",
};

export type CatalogItem = {
  name: string;           // Ej: "Riel superior L25"
  colors: ColorKey[];     // Ej: ["champan", "negro", "blanco"]
};

export type CatalogLine = {
  slug: string;           // Ej: "linea-25"
  title: string;          // Ej: "Línea 25"
  subtitle?: string;      // Ej: "Carpintería / corrediza"
  items: CatalogItem[];
};

export const CATALOG: CatalogLine[] = [
  {
    slug: "linea-20",
    title: "Línea 20",
    subtitle: "Carpintería",
    items: [
      { name: "Riel superior L20", colors: ["champan", "negro", "blanco", "madera"] },
      { name: "Riel inferior L20", colors: ["champan", "negro", "blanco", "madera"] },
      { name: "Jamba", colors: ["champan", "negro", "blanco", "madera"] },
    ],
  },
  {
    slug: "linea-25",
    title: "Línea 25",
    subtitle: "Carpintería",
    items: [
      { name: "Riel superior L25", colors: ["champan", "negro", "blanco", "madera"] },
      { name: "Jamba L25", colors: ["champan", "negro", "blanco", "madera"] },
      { name: "Jamba", colors: ["champan", "negro", "blanco", "madera"] },
    ],
  },
];
