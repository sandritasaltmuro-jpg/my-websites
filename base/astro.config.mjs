// Configuración de Astro.
// Documentación: https://docs.astro.build/es/reference/configuration-reference/
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { site } from './src/config/site';

export default defineConfig({
  // El dominio se toma de src/config/site.ts (un solo sitio para cambiarlo).
  // Sin él, las URL canónicas y el sitemap salen mal.
  site: site.url,

  // Acepta las URL con y sin barra final (/servicios y /servicios/)
  trailingSlash: 'ignore',

  // Genera /sitemap-index.xml al publicar (npm run build)
  integrations: [sitemap()],
});
