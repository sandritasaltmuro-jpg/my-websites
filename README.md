# My websites

Todo el trabajo del negocio de webs en un solo repositorio.

```
base/                 Infraestructura común e invisible (Astro): SEO, datos del negocio (site.ts),
                      datos para Google, accesibilidad, páginas legales, 404, robots y sitemap.
sectores/
  gym/                Kit gym: componentes de gimnasio + temas (Brava Club, gym mixto) + webs de concepto
  belleza/            Kit belleza (próximamente)
  cafeteria/          Kit cafetería (próximamente)
portfolio/            Web propia con los conceptos
docs/                 Documentos de referencia (concepto Brava, bases SEO)
CLAUDE.md             Guía para Claude Code: decisiones, convenciones y estado
```

## Cómo se trabaja
- **Un kit por sector.** Los componentes visuales (hero, tarifas, horario de clases…) se diseñan para ese sector,
  no genéricos. Un kit nace copiando `base/`.
- **Un cliente nuevo de un sector** = copiar el kit de ese sector a un repositorio propio, rellenar `site.ts`,
  crear o ajustar su tema y adaptar textos e imágenes.
- **Mejoras en la base** (SEO, accesibilidad): se hacen en `base/` y se copian a los kits.
- Publicación en Vercel: un proyecto por carpeta (Root Directory = la carpeta).
