/**
 * wellness.ts — Servicios de Wellness de Brava Club (un solo sitio para sus datos).
 * Textos y precios: docs/brava-concepto.md (sección 5).
 * Con clientes reales, la fisioterapia es un servicio sanitario: textos prudentes.
 */

export interface Servicio {
  name: string;
  description: string;
  /** Línea de datos en mono: duración y precio */
  data: string;
}

export const servicios: Servicio[] = [
  {
    name: 'Fisioterapia deportiva',
    description: 'Prevención y tratamiento de lesiones, descarga muscular y readaptación. Con fisioterapeuta colegiada.',
    data: '45 min · 50 € (socias 40 €)',
  },
  {
    name: 'Zona spa',
    description: 'Baño de vapor, ducha de contraste e inmersión en agua fría.',
    data: 'Incluida en Ilimitado · 10 € resto',
  },
  {
    name: 'Sauna',
    description: 'Sauna de infrarrojos con luz roja: calor suave, músculos relajados, cabeza en calma.',
    data: '20 min · incluida en Ilimitado',
  },
  {
    name: 'Masaje deportivo',
    description: 'Descarga profunda para piernas, espalda y hombros.',
    data: '50 min · 55 € (socias 45 €)',
  },
];
