# CLAUDE.md · My websites

Guía para Claude Code en este repositorio. Léela entera antes de tocar nada.
Se mantiene sincronizada con los documentos del proyecto "Mi negocio webs" de claude.ai (última sincronización: 20 nov 2026).

## Quién y para qué
- **Sandra**, diseñadora web freelance en Madrid. Vende webs a pequeños negocios (one-page, corporativa de hasta 5 páginas, landings para Google Ads y mantenimiento mensual).
- Claude escribe el código; ella diseña, revisa, hace cambios pequeños y publica.
- **Responde siempre en español**, claro y directo. Si algo tiene un problema de diseño, usabilidad o negocio, **dilo**. Antes de un trabajo grande, **pregunta** lo que necesites.
- Textos para clientes finales: cercanos y profesionales, sin tecnicismos. Botones con verbo ("Reserva tu clase gratis"), nunca "Enviar" u "OK".

## Estructura del repositorio
```
base/              Infraestructura común e INVISIBLE (sin diseño): site.ts, SEO, JSON-LD,
                   accesibilidad, páginas legales, 404, robots y sitemap.
sectores/
  gym/             Kit gym (Astro). Concepto actual: BRAVA CLUB. ← se trabaja aquí ahora
  belleza/         Kit belleza (pendiente)
  cafeteria/       Kit cafetería (pendiente)
portfolio/         Web de Sandra (pendiente)
docs/              Documentos de referencia (concepto Brava, bases SEO)
```
- Cada carpeta de `sectores/` es un proyecto de Astro independiente (`npm install`, `npm run dev` dentro de la carpeta).
- **No hay componentes visuales genéricos.** Cada sector diseña los suyos. Los kits nacen copiando `base/`; las mejoras de infraestructura se hacen en `base/` y se copian a los kits.
- Webs de clientes reales: en repositorios aparte (uno por cliente), copiando el kit de su sector.

## Stack y convenciones
- **Astro 5**, HTML estático. Sin frameworks de UI salvo que haga falta una isla concreta.
- **Datos del negocio en un solo archivo**: `src/config/site.ts` (nombre, URL, noindex, tipo schema.org, contacto, WhatsApp, dirección, horario, redes, menú). Footer, contacto, JSON-LD, robots y sitemap salen de ahí. Nunca escribir el teléfono o la dirección a mano en un componente.
- **Contacto por WhatsApp** (acción principal) + teléfono y email en texto. Sin formularios por ahora.
- **Temas** en `src/themes/*.css`: solo variables (colores con sus roles, fuentes, radios, degradados, efecto película). Tokens comunes (espaciado, escala tipográfica, anchos, movimiento) en `src/styles/tokens.css`.
- **Fuentes autoalojadas** con `@fontsource` (importadas en `BaseLayout.astro`).
- **Imágenes** siempre con `<Image>` de `astro:assets`, desde `src/assets/`, con `alt` descriptivo (o `alt=""` si son decorativas). Hero: `loading="eager"` + `fetchpriority="high"` + atributo `data-preload` (lo espera la pantalla de carga).
- Código **limpio y comentado en español**, pensado para que lo mantenga otra persona: cada componente empieza con un comentario de qué es y cómo se usa.

## Animaciones
- **GSAP** (`gsap`, con `SplitText` y `ScrollTrigger`) en `sectores/gym/src/scripts/animations.ts`. Se usa con atributos, sin JS en cada componente:
  - `data-reveal="lines"` → texto que sube línea a línea desde una máscara (titulares)
  - `data-reveal="up"` → bloque que sube y aparece (párrafos, botones, tarjetas)
  - `data-reveal="image"` → imagen que se destapa de abajo arriba con zoom suave
  - `data-delay="0.2"` → retraso opcional
- Estilo inspirado en lusion.co: curvas `expo.out` / `expo.inOut`, duración ~1,2 s, escalonado 0,08 s.
- **Pantalla de carga** (`Preloader.astro` + `scripts/preloader.ts`): rojo intenso, contador tipo odómetro abajo a la izquierda. Mide la carga real (imágenes `data-preload` + fuentes), 1,1–2 s, solo primera visita (sessionStorage `brava-loaded`), se salta con "reducir movimiento" y sin JS no aparece. Al terminar dispara el evento `brava:ready`.
- **Pie con la marca en puntos** (`DotWordmark.astro` + `scripts/dot-wordmark.ts`): canvas propio, sin librerías (inspirado en op.al).
- Siempre: respetar `prefers-reduced-motion`; el contenido nunca puede quedar oculto si falla el JS; animar solo `transform`/`opacity`/`clip-path`.
- No usar Three.js ni 3D.

## SEO y accesibilidad (obligatorio en cada página)
- Un solo H1 (con la palabra clave principal), H2 por sección, H3 dentro. El tamaño visual va por CSS, no por etiqueta.
- Title y description únicos (ver `docs/seo-bases.md`). JSON-LD LocalBusiness con el subtipo del sector; FAQPage solo si las preguntas son visibles.
- Contraste AA comprobado (texto normal ≥ 4,5:1; titulares grandes ≥ 3:1). Foco visible, objetivos táctiles de 44 px, HTML semántico, enlaces externos avisados para lectores de pantalla.
- Mapas de Google solo bajo demanda (botón "Ver mapa") por velocidad y RGPD.
- Conceptos de portfolio: `noindex: true` en `site.ts` y etiqueta visible "Proyecto conceptual · no es un negocio real".
- Antes de dar algo por terminado: revisar móvil (375 px) y escritorio, y pasar el checklist de `docs/seo-bases.md`.

## Concepto actual: BRAVA CLUB (kit gym)
Contenido completo, textos, precios, imágenes y reglas: **`docs/brava-concepto.md`**. Resumen de lo esencial:
- Gimnasio boutique **solo para mujeres** en Malasaña (Madrid). Clases: Hyrox, HIIT, Barre, Pole dance + **Hot** (Hot Barre, Hot Pilates, Hot Stretch, sala a 35–38 °C). Wellness: fisio, spa y sauna. Comunidad: You + Brava.
- **Paleta (medida de las referencias)**: ladrillo `#D24C30`, rojo Brava `#B8391F`, rojo intenso `#961D13`, borgoña `#5E251B`, ámbar `#D3802E`, terracota `#97553E`, azul acero `#5E6C73` (muy poco), negro cálido `#1C0F0C`, crema `#FBEDDA`.
- **SIN FONDOS NEGROS**: fondo general rojo intenso (degradados hacia rojo Brava y naranja), destacados rojo Brava/ladrillo, texto crema. Negro solo como texto sobre ámbar. Texto crema apagado (`--color-muted`) nunca sobre rojo Brava.
- Tipografía: titulares con `--font-title` (Inter Tight, provisional), **Archivo** (cuerpo), **Space Mono** (etiquetas, cabecera y microtextos). Anton solo en restos (carrusel del Hero, pie). Esquinas rectas.
- Estética: editorial de moda deportiva con **efecto película analógica** (grano, halo rojo, negros cálidos). Filtro `--film-filter` y grano `--film-grain` sobre todas las fotos. Degradados `--gradient-light`, `--gradient-heat`, `--gradient-photo(-bottom)`.
- Rejilla de líneas finas, etiquetas en mono, titulares enormes y fotos a sangre (referencias de la sección 2 del FigJam).
- **Orden de la página**: Pantalla de carga → Hero → Manifiesto → Clases (+ bloque Hot) → El estudio → Wellness → Horario → Tarifas → Equipo → You + Brava → **Preguntas frecuentes + Pie en un único bloque rojo intenso**.

### Estado del kit gym (20 nov 2026)
- Hecho: tema `brava.css`, `site.ts` con datos ficticios, `Preloader`, animaciones GSAP, `Footer` + `DotWordmark`, `Header` transparente (todo en mono, sin botón), `Hero`, `Manifesto`, `Clases` (+ bloque Hot), `Estudio` y `Wellness`. Fotos con `FilmImage`; datos en `src/data/` (clases, wellness); carruseles con `src/scripts/carousel.ts`.
- Fondos (decisión 20 nov): rojos intensos y naranjas, no borgoña. `--gradient-section` (seguro para texto crema) y `--gradient-glow` / degradados radiales con el naranja SIEMPRE detrás de fotos o titulares grandes, nunca bajo texto pequeño.
- Titulares H1/H2: variable `--font-title` (ahora Inter Tight, estilo suizo; provisional). Anton queda solo en el carrusel del Hero y el pie.
- Pendiente, en este orden: Horario → Tarifas → Equipo → You + Brava → FAQ unido al pie (rehacer `Footer` para que incluya FAQ por categorías y llamada final) → nueva cabecera (`Header`) y botón flotante de WhatsApp con la estética Brava → revisión final.
- Imágenes: van en `sectores/gym/src/assets/brava/` con nombre numerado y descriptivo (lista y números en `docs/brava-concepto.md`, Parte 3). Ej.: `01-hero-sentadilla.png`, `05-clase-pole.png`, `13-ugc-espejo.png`, `22-estudio-fuerza.png`.

## Publicación
- GitHub: `sandritasaltmuro-jpg/my-websites`. Vercel: un proyecto por carpeta (Root Directory = la carpeta).
  - `base/` → https://base-webs.vercel.app
  - `sectores/gym/` → https://kit-gym.vercel.app
- Cambios grandes: rama nueva → vista previa de Vercel → revisar → `main`. Cada push a `main` publica.
- Commits en español, describiendo el porqué.

## Marcas y derechos
- De las referencias (Rush_lab, Tempo Studios, Rhode, Quantum Body, Fire Pilates, Lusion, Opal…) se toma estructura, ritmo y técnica; nunca textos, fotos, logotipos ni código.
- Fotos: solo propias, generadas por nosotros o con licencia. Con clientes reales, las publicaciones de redes (You + Brava) solo con permiso de cada autora.
