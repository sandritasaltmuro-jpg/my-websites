// Configuración de Astro.
// Documentación: https://docs.astro.build/es/reference/configuration-reference/
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // IMPORTANTE: cambia esto por el dominio real de cada cliente.
  // Sin él, las URL canónicas y el sitemap salen mal.
  site: 'https://www.ejemplo.com',

  // Genera /sitemap-index.xml al publicar (npm run build).
  integrations: [sitemap()],
});
