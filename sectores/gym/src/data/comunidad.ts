/**
 * comunidad.ts — Publicaciones de "You + Brava" (fotos de clientas en redes).
 * Textos: docs/brava-concepto.md (sección 9). Los @usuarios son FICTICIOS.
 * Nada de feed automático de Instagram: se añaden a mano aquí.
 * Con clientes reales: solo publicaciones con permiso de cada autora, y `url`
 * con el enlace a la publicación original.
 */

export interface Post {
  photo: string;
  user: string;
  alt: string;
  /** Enlace a la publicación (vacío en el concepto) */
  url?: string;
}

export const posts: Post[] = [
  { photo: '13', user: '@lauramoves', alt: 'Selfie en el espejo del vestuario después de entrenar' },
  { photo: '14', user: '@nuria.sweats', alt: 'Selfie sonriente y sudada después de una clase' },
  { photo: '15', user: '@selfcare.claudia', alt: 'Mujer relajada con toalla dentro de la sauna' },
  { photo: '16', user: '@martinapole', alt: 'Mujer haciendo una figura invertida en la barra de pole' },
  { photo: '17', user: '@hyrox.girls.mad', alt: 'Tres amigas riendo después de un entrenamiento de Hyrox' },
  { photo: '18', user: '@heelsandweights', alt: 'Pies con tacones transparentes entre dos mancuernas cromadas' },
  { photo: '19', user: '@barre.with.ana', alt: 'Clase de barre vista desde atrás, todas a la vez en la barra' },
  { photo: '20', user: '@postgym.ritual', alt: 'Mano con un matcha helado delante de una taquilla abierta' },
  { photo: '21', user: '@irene.brava', alt: 'Selfie en el espejo con gafas de sol y una mancuerna cromada' },
];

export const hashtag = '#EntrenaBrava';
export const cuenta = '@bravaclub';
