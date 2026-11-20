/**
 * faq.ts — Preguntas frecuentes de Brava Club, por categorías.
 * Textos: docs/brava-concepto.md (sección 10). Se muestran en el pie (Footer.astro)
 * y se marcan para Google como FAQPage (son visibles en la página).
 */

export interface Pregunta {
  q: string;
  a: string;
}

export interface Categoria {
  name: string;
  items: Pregunta[];
}

export const faq: Categoria[] = [
  {
    name: 'El estudio',
    items: [
      { q: '¿Es solo para mujeres?', a: 'Sí, Brava Club es un espacio solo para mujeres.' },
      { q: '¿Hay duchas y taquillas?', a: 'Sí, vestuario con duchas, taquillas y secadores.' },
      { q: '¿Dónde estáis?', a: 'En Malasaña, a cinco minutos del metro de Tribunal.' },
    ],
  },
  {
    name: 'Clases y reservas',
    items: [
      { q: '¿Cómo reservo?', a: 'Escríbenos y te guardamos sitio; máximo 12 por clase.' },
      { q: '¿Necesito experiencia?', a: 'No; todas las clases tienen opciones para empezar y en pole hay grupos por nivel.' },
      { q: '¿Tengo que entrenar con tacones?', a: 'No (risas). Son parte de nuestra estética; en pole son opcionales a partir del nivel medio.' },
    ],
  },
  {
    name: 'Clases hot',
    items: [
      { q: '¿Qué es una clase hot?', a: 'Una clase en nuestra sala a 35–38 °C con paneles de infrarrojos.' },
      { q: '¿Qué llevo?', a: 'Ropa ligera, toalla y agua.' },
      { q: '¿Puedo hacerla si estoy embarazada?', a: 'Consulta antes con tu médico.' },
    ],
  },
  {
    name: 'Wellness',
    items: [
      { q: '¿Puedo usar el spa y la sauna sin ser socia?', a: 'Sí, con entrada suelta de 10 €; en Ilimitado están incluidos.' },
      { q: '¿La fisio es solo para socias?', a: 'No; las socias tienen descuento.' },
    ],
  },
  {
    name: 'You + Brava',
    items: [
      { q: '¿Cómo salgo en la web?', a: 'Etiqueta @bravaclub con #EntrenaBrava; te escribimos para pedirte permiso antes de publicarlo.' },
    ],
  },
];
