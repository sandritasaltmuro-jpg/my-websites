/**
 * clases.ts — Clases de Brava Club (un solo sitio para sus datos).
 * Las usan el mini carrusel del Hero y la sección Clases (con su bloque Hot).
 * Textos: docs/brava-concepto.md (secciones 3 y 3b).
 * photo = número de la foto en src/assets/brava/ (ver FilmImage.astro).
 */

export interface Clase {
  name: string;
  description: string;
  /** Duración en minutos */
  minutes: number;
  /** Intensidad de 1 a 3 (se pinta con puntos ●●○) */
  intensity: 1 | 2 | 3;
  /** Nivel. Las clases hot no lo indican */
  level?: string;
  /** Número de la foto; las hot comparten la de la sala (23) */
  photo: string;
  /** Texto alternativo de la foto */
  alt: string;
}

/** Clases principales (sección Clases) */
export const clases: Clase[] = [
  {
    name: 'Hyrox',
    description: 'Carrera y estaciones funcionales: trineo, remo, wall balls, zancadas. Entrena como en la competición, en equipo.',
    minutes: 60,
    intensity: 3,
    level: 'Intermedio',
    photo: '02',
    alt: 'Piernas de mujer empujando un trineo de entrenamiento',
  },
  {
    name: 'HIIT',
    description: 'Intervalos de alta intensidad con kettlebells, cuerda y peso corporal. Corto, intenso y adictivo.',
    minutes: 45,
    intensity: 3,
    level: 'Todos los niveles',
    photo: '03',
    alt: 'Espalda sudada de una mujer sujetando una kettlebell',
  },
  {
    name: 'Barre',
    description: 'Técnica de ballet, pilates y fuerza en la barra. Movimientos pequeños, músculos que arden.',
    minutes: 50,
    intensity: 2,
    level: 'Todos los niveles',
    photo: '04',
    alt: 'Pies en relevé junto a la barra de ballet',
  },
  {
    name: 'Pole dance',
    description: 'Fuerza, flexibilidad y actitud en la barra vertical. De tus primeras vueltas a tus primeras figuras invertidas.',
    minutes: 60,
    intensity: 2,
    level: 'Inicio, medio y avanzado',
    photo: '05',
    alt: 'Piernas con tacones apoyadas en la barra de pole',
  },
];

/** Clases en la sala hot, a 35–38 °C (bloque Hot) */
export const clasesHot: Clase[] = [
  {
    name: 'Hot Barre',
    description: 'Barre en la sala de infrarrojos: fuerza, control y calor que se nota desde el primer plié.',
    minutes: 50,
    intensity: 2,
    photo: '23',
    alt: 'Sala hot iluminada con paneles de infrarrojos',
  },
  {
    name: 'Hot Pilates',
    description: 'Pilates de suelo con calor: core, postura y una flexibilidad que no sabías que tenías.',
    minutes: 50,
    intensity: 2,
    photo: '23',
    alt: 'Sala hot iluminada con paneles de infrarrojos',
  },
  {
    name: 'Hot Stretch',
    description: 'Estiramientos profundos y respiración con calor suave. Ideal después de Hyrox o HIIT.',
    minutes: 40,
    intensity: 1,
    photo: '23',
    alt: 'Sala hot iluminada con paneles de infrarrojos',
  },
];

/** Puntos de intensidad para mostrar (●●○) */
export const intensityDots = (n: number) => '●'.repeat(n) + '○'.repeat(3 - n);

/** Intensidad en palabras, para lectores de pantalla */
export const intensityLabel = (n: number) => ['', 'suave', 'media', 'alta'][n];
