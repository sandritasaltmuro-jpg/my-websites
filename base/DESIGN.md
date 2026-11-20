# DESIGN.md · Base común

Infraestructura común de todas las webs. Cada kit de sector nace copiando esta carpeta.
**Base común** = estructura, espaciado, componentes, accesibilidad y SEO (igual en todas).
**Tema** = personalidad: colores, fuentes y radios (cambia por sector y por cliente).

---

## 1. Cómo se monta una web nueva

1. **Kit de sector nuevo:** copiar `base/` a `sectores/<sector>/` y diseñar allí sus componentes y temas.
2. **Cliente nuevo:** copiar el kit de su sector a un repositorio propio.
3. Rellenar `src/config/site.ts` (datos del negocio, dominio, horario, WhatsApp, tipo de negocio para Google).
4. Ajustar o crear su tema y adaptar textos e imágenes.
5. Pasar el checklist de `claude/seo-bases.md` antes de publicar.

---

## 2. Tokens (src/styles/tokens.css)

| Grupo | Tokens | Notas |
|---|---|---|
| Espaciado | `--space-1` … `--space-9` (4px → 96px) | Siempre múltiplos de 4. `--section-space` para separar secciones |
| Tipografía | `--text-xs` … `--text-4xl` | Fluida (`clamp`). Cuerpo nunca menos de 16px |
| Interlineado | `--leading-tight / snug / normal` | Titulares 1.1, cuerpo 1.6 |
| Pesos | `--weight-regular / medium / bold` | Máximo 3 pesos por web |
| Anchos | `--container` (72rem), `--container-narrow`, `--measure` (65ch) | Párrafos nunca más anchos de 65 caracteres |
| Forma | `--radius` (lo fija el tema), `--radius-sm`, `--radius-pill` | |
| Sombras | `--shadow-sm`, `--shadow-md` | Solo para elevar (menú móvil, botón flotante) |
| Táctil | `--tap` (44px) | Altura mínima de botones y enlaces importantes |
| Movimiento | `--duration-fast/base/slow`, `--ease` | Se anulan con "reducir movimiento" |

## 3. Roles de color (los define cada tema)

| Variable | Uso |
|---|---|
| `--color-bg` | Fondo general |
| `--color-surface` | Tarjetas |
| `--color-surface-alt` | Secciones alternas |
| `--color-border` | Líneas y bordes |
| `--color-text` | Texto principal |
| `--color-muted` | Texto secundario |
| `--color-link` | Enlaces |
| `--color-primary` / `--color-on-primary` | Botón principal y su texto |
| `--color-accent` / `--color-on-accent` | Detalles (etiquetas, iconos) |
| `--color-focus` | Contorno de foco (teclado) |

Tipografía del tema: `--font-display` (titular del hero), `--font-heading`, `--font-body`, `--font-mono`.

**Regla de contraste:** todo texto ≥ 4.5:1 sobre su fondo (titulares grandes ≥ 3:1). Se comprueba y se anota en el propio archivo del tema.

**Verde de WhatsApp** (fijo en todos los temas): `#0e7a41` con texto blanco (5.4:1). Hover `#0b6636`.

---

## 4. Qué hay en la base (infraestructura, sin diseño)

| Pieza | Qué hace | Datos |
|---|---|---|
| `config/site.ts` | Datos del negocio: un solo sitio para NAP, horario, WhatsApp, redes, tipo de negocio | — |
| `utils/contact.ts` | Enlaces de WhatsApp, teléfono, email y mapa | `site` |
| `SEO` | Title, description, canonical, Open Graph, noindex | props / `site` |
| `LocalBusinessSchema` | Datos estructurados del negocio (JSON-LD) | `site` |
| `Icon` | Iconos SVG en línea, decorativos | `name` |
| `BaseLayout` | `<head>`, saltar al contenido, `<main>`; slots `header`, `footer` y `head` | props |
| `LegalLayout` | Textos legales | props |
| Páginas | `404`, `aviso-legal`, `privacidad`, `robots.txt` automático | `site` |
| Estilos | `tokens.css` (escalas) y `base.css` (reset, accesibilidad) | — |

**Los componentes visuales no están aquí:** cada kit de sector (`sectores/gym`…) diseña los suyos
(hero, tarifas, horario de clases, carta…) para lo que necesita ese tipo de negocio.

## 5. Reglas de contenido

- Botones con verbo: "Escríbenos por WhatsApp", "Ver servicios", "Pide cita". Nunca "Enviar" u "OK".
- Un H1 por página; H2 por sección; H3 dentro. El tamaño visual se cambia con CSS, no con la etiqueta.
- Datos concretos mejor que adjetivos (precios orientativos, duración, zona).
- Imágenes siempre con `<Image>` de Astro y `alt` descriptivo (`alt=""` si es decorativa).
- Textos para clientes: cercanos y profesionales, sin tecnicismos.

## 6. Accesibilidad incluida

Enlace "Saltar al contenido", foco visible, menú móvil con `aria-expanded`, objetivos táctiles de 44px,
enlaces externos avisados para lectores de pantalla, `prefers-reduced-motion` respetado, HTML semántico
(`header`, `nav`, `main`, `section` con H2, `footer`, `address`, `dl` para horarios).

## 7. Pendiente / siguientes pasos

- Fuentes propias por tema: alojarlas en la web (paquetes `@fontsource`), máximo 2 familias.
- Formulario de contacto (Web3Forms o similar) cuando un cliente lo pida.
