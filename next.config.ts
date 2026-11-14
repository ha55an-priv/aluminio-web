import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Excluir carpeta de respaldo del TypeScript checker
  typescript: {
    ignoreBuildErrors: false,
  },
  // Excluir directorios de respaldo del transpilado
  pageExtensions: ["tsx", "ts", "jsx", "js"],
};

export default nextConfig;
