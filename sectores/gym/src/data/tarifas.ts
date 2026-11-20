/**
 * tarifas.ts — Planes y precios de Brava Club.
 * Textos: docs/brava-concepto.md (sección 7). Precios del concepto (ficticios).
 */

export interface Plan {
  name: string;
  /** Precio tal como se muestra */
  price: string;
  /** Periodo bajo el precio (vacío si no aplica) */
  period?: string;
  includes: string;
  /** Plan destacado (se pinta con el degradado de luz) */
  featured?: boolean;
}

export const planes: Plan[] = [
  { name: 'Clase de prueba', price: 'Gratis', includes: 'Tu primera clase, la que tú elijas (también hot).' },
  { name: 'Clase suelta', price: '18 €', includes: 'Una clase cualquiera.' },
  { name: 'Bono 8', price: '99 €', period: 'al mes', includes: '8 clases al mes, todas las disciplinas, hot incluidas.' },
  {
    name: 'Ilimitado',
    price: '139 €',
    period: 'al mes',
    includes: 'Todas las clases + spa y sauna sin límite + 10 % en fisio y masajes.',
    featured: true,
  },
];

/** Precios sueltos de Wellness y condiciones */
export const tarifasNotas = [
  'Wellness suelto: fisio 50 € · masaje 55 € · spa 10 €',
  'Sin matrícula · permanencia mínima de 1 mes',
];
