# Base webs · plantilla madre

Proyecto de Astro del que salen todas las webs: una **base común** (estructura, espaciado, componentes, SEO y accesibilidad) y **temas por sector** (colores, fuentes y forma).

## Ponerlo en marcha (la primera vez)
Necesitas Node.js 20 o superior. En la terminal, dentro de esta carpeta:

```bash
npm install     # descarga Astro y lo necesario (solo la primera vez)
npm run dev     # arranca la web en http://localhost:4321
```

Cada vez que guardes un archivo, la web se actualiza sola en el navegador.
Para parar: `Ctrl + C` en la terminal.

## Comandos
| Comando | Qué hace |
|---|---|
| `npm run dev` | Ver la web mientras trabajas |
| `npm run build` | Generar la web final en la carpeta `dist/` |
| `npm run preview` | Ver la web final antes de publicarla |

## Estructura
```
src/
  pages/        Un archivo = una página (index.astro = inicio)
  layouts/      Estructura común (BaseLayout: <head>, SEO, tema)
  components/   Piezas reutilizables: header, hero, servicios, opiniones, horario, FAQ, contacto, footer, SEO…
  config/       site.ts: los datos del negocio (un solo sitio para todo)
  utils/        Ayudas para enlaces de WhatsApp, teléfono y mapa
  assets/       Imágenes que optimiza Astro
  styles/       Base común: tokens.css (escalas) y base.css (estilos generales)
  themes/       Un archivo por sector: colores, fuentes y radios
public/         Archivos que se sirven tal cual (favicon, robots.txt, imágenes para compartir)
```

## Al empezar la web de un cliente
1. Copia esta carpeta con el nombre del cliente.
2. Rellena `src/config/site.ts`: nombre, dominio, dirección, teléfono, WhatsApp, horario, redes y tipo de negocio. Todo lo demás (footer, contacto, mapa, datos para Google, robots.txt, sitemap) sale de ahí.
3. Elige o crea su tema en `src/themes/` y actívalo en `BaseLayout.astro`.
4. Cambia los textos e imágenes de `src/pages/index.astro`. Cada página: título y descripción propios.
5. Sustituye `public/og-default.jpg` (imagen al compartir, 1200x630) y `src/assets/hero-placeholder.jpg`.
6. Completa el aviso legal y la privacidad con los datos del cliente.

Guía completa del sistema de diseño: `DESIGN.md`.

## Publicar
Sube la carpeta a GitHub y conéctala con Netlify, Vercel o Cloudflare Pages:
- Comando de build: `npm run build`
- Carpeta de salida: `dist`
