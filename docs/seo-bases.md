# Bases SEO · estándar para todas las webs

Copia de trabajo del documento "seo-bases" del proyecto de claude.ai (20 nov 2026). Aplica a `base/`, kits, conceptos y webs de clientes.

## Checklist on-page (cada página)
- **Title** (50–60 car.): `Palabra clave principal en Zona | Nombre del negocio`. Único por página, palabra clave al principio.
- **Meta description** (140–160 car.): qué ofrece + diferencial + llamada a la acción.
- **Encabezados**: un solo H1 con la palabra clave principal; H2 por sección; H3 dentro de H2. Nunca saltar niveles por estética.
- **Contenido**: palabra clave en las primeras 100 palabras visibles; texto real en el HTML (nunca dentro de imágenes); inicio ~300 palabras útiles; datos concretos mejor que relleno.
- **URLs** (corporativa): cortas, minúsculas, guiones, sin tildes ni ñ; máx. 2 niveles.
- **Imágenes**: `alt` descriptivo (decorativas `alt=""`), nombre de archivo descriptivo, siempre `<Image>` de Astro con dimensiones.
- **Enlaces internos** (corporativa): cada página enlaza a otra relevante y a contacto; texto descriptivo.
- **NAP** (nombre, dirección, teléfono) en texto, idéntico en web, Google Business y directorios; normalmente en el pie.

## SEO local
1. Perfil de Google Business completo y enlazado a la web.
2. NAP idéntico en todas partes.
3. Mapa con carga diferida (bajo demanda).
4. Reseñas reales con permiso (no marcarlas con AggregateRating).
5. JSON-LD LocalBusiness con el subtipo del sector.
6. Mencionar la zona de forma natural ("a cinco minutos del metro de Tribunal").

## Técnico en Astro
- `site` correcto (en estos proyectos sale de `src/config/site.ts`); canonical siempre al dominio final.
- `@astrojs/sitemap` activo; `robots.txt` generado desde `site.ts` (bloquea todo si `noindex`).
- `<html lang="es">`; componente SEO con title, description, canonical, Open Graph (imagen 1200×630, `og:locale es_ES`); favicon; 404 propia.
- HTTPS y una sola versión del dominio (con o sin www). Las URL `*.vercel.app` no se indexan.
- Conceptos de portfolio: `noindex`.

## Velocidad (Core Web Vitals, móvil)
- LCP < 2,5 s: imagen del hero optimizada, `loading="eager"` + `fetchpriority="high"`; resto `lazy`.
- INP < 200 ms: poco JavaScript; islas solo donde haga falta.
- CLS < 0,1: dimensiones en imágenes, `font-display: swap`, precarga de la fuente principal.
- Máximo 2–3 familias tipográficas, autoalojadas.
- PageSpeed Insights móvil 90+ antes de entregar.

## Datos estructurados
- Subtipos: belleza `HairSalon`/`BeautySalon`/`NailSalon`/`DaySpa`; cafetería `CafeOrCoffeeShop`/`Restaurant`; gimnasio `ExerciseGym`.
- `FAQPage` solo si las preguntas son visibles. `BreadcrumbList` en páginas interiores de corporativas.
- Validar con la Prueba de resultados enriquecidos de Google.

## GEO (buscadores con IA)
- Contenido clave en HTML estático; datos del negocio consistentes en todas partes; responder preguntas reales con frases directas; datos concretos (precios orientativos, horarios, qué incluye, zona exacta).

## Medición
- Google Search Console en todas las webs (verificar y enviar sitemap).
- Analítica sin cookies (p. ej. Vercel Web Analytics); GA4 o etiquetas de Ads requieren banner de consentimiento (RGPD).

## Checklist antes de publicar
- [ ] Tabla de palabras clave aprobada
- [ ] Title y description únicos y dentro de longitud
- [ ] Un H1 por página, jerarquía correcta
- [ ] Alt en todas las imágenes, nombres descriptivos
- [ ] NAP en texto e igual que en Google Business
- [ ] LocalBusiness con subtipo correcto, validado
- [ ] `site`, canonical, Open Graph e imagen OG correctos
- [ ] Sitemap y robots.txt accesibles
- [ ] Redirección www / sin www y HTTPS
- [ ] 404 propia
- [ ] PageSpeed móvil 90+
- [ ] Search Console verificado y sitemap enviado
- [ ] Landings de Ads: `noindex` decidido y conversiones probadas
- [ ] Conceptos de portfolio: `noindex` decidido
