/**
 * clases.ts — Clases de Brava Club (un solo sitio para sus datos).
 * Las usan el mini carrusel del Hero y, más adelante, la sección Clases.
 * Textos: docs/brava-concepto.md (sección 3 y 3b).
 * photo = número de la foto en src/assets/brava/ (ver FilmImage.astro).
 */

export interface Clase {
  name: string;
  /** Línea corta en mono: duración y nivel */
  meta: string;
  photo: string;
  /** Texto alternativo de la foto */
  alt: string;
  /** true = se imparte en la sala hot (35–38 °C) */
  hot?: boolean;
}

export const clases: Clase[] = [
  { name: 'Hyrox', meta: '60 min · Intermedio', photo: '02', alt: 'Piernas de mujer empujando un trineo de entrenamiento' },
  { name: 'HIIT', meta: '45 min · Todos los niveles', photo: '03', alt: 'Espalda sudada de una mujer sujetando una kettlebell' },
  { name: 'Barre', meta: '50 min · Todos los niveles', photo: '04', alt: 'Pies en relevé junto a la barra de ballet' },
  { name: 'Pole dance', meta: '60 min · Por niveles', photo: '05', alt: 'Piernas con tacones apoyadas en la barra de pole' },
  { name: 'Hot Barre', meta: '50 min · Sala a 35–38 °C', photo: '23', alt: 'Sala hot iluminada con paneles de infrarrojos', hot: true },
];
