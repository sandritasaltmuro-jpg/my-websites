/**
 * site.ts — DATOS DEL NEGOCIO (un solo sitio para todo)
 * ---------------------------------------------------------
 * Para cada cliente nuevo, rellena SOLO este archivo.
 * De aquí salen: header, footer, contacto, horario, mapa, botón de WhatsApp
 * y los datos estructurados para Google (LocalBusiness).
 *
 * Así el nombre, la dirección y el teléfono (NAP) son idénticos en toda la web,
 * y deben copiarse igual en el perfil de Google Business.
 */

export const site = {
  /** Nombre comercial tal cual aparece en Google Business */
  name: 'Nombre del Negocio',

  /** Frase corta que describe el negocio (se usa como descripción por defecto) */
  description:
    'Descripción breve del negocio: qué ofrece, dónde está y por qué elegirlo. Entre 140 y 160 caracteres.',

  /** Dominio final, sin barra al final. Debe coincidir con `site` en astro.config.mjs */
  url: 'https://www.ejemplo.com',

  /** true = Google no indexa la web (conceptos de portfolio, webs en pruebas) */
  noindex: false,

  /**
   * Tipo de negocio para Google (schema.org). Ejemplos:
   * HairSalon, BeautySalon, NailSalon, DaySpa, CafeOrCoffeeShop, Restaurant, ExerciseGym
   */
  schemaType: 'LocalBusiness',

  /** Rango de precios orientativo: €, €€, €€€ */
  priceRange: '€€',

  contact: {
    /** Teléfono tal como se muestra */
    phone: '+34 600 000 000',
    /** WhatsApp: solo números, con prefijo de país, sin + ni espacios */
    whatsapp: '34600000000',
    /** Mensaje que aparece escrito al abrir WhatsApp */
    whatsappMessage: 'Hola, os escribo desde la web y me gustaría pedir información.',
    email: 'hola@ejemplo.com',
  },

  address: {
    street: 'Calle Ejemplo 12',
    postalCode: '28010',
    city: 'Madrid',
    region: 'Madrid',
    country: 'ES',
    /** Cómo llegar, en lenguaje natural (bueno para SEO local y GEO) */
    directions: 'A dos minutos del metro de Iglesia (línea 1).',
  },

  /** Coordenadas (clic derecho en Google Maps → copiar coordenadas) */
  geo: { latitude: 40.4328, longitude: -3.7004 },

  /** Búsqueda que se usa para el mapa incrustado */
  mapQuery: 'Calle Ejemplo 12, 28010 Madrid',

  /**
   * Horario. days: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.
   * label: cómo se muestra en la web. Días cerrados: no se ponen.
   */
  hours: [
    { label: 'Lunes a viernes', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '10:00', closes: '20:00' },
    { label: 'Sábados', days: ['Saturday'], opens: '10:00', closes: '14:00' },
  ],
  /** Texto para los días sin horario */
  closedLabel: 'Domingos cerrado',

  /** Redes sociales (deja vacío lo que no tenga) */
  social: {
    instagram: 'https://www.instagram.com/',
    facebook: '',
    tiktok: '',
    googleMaps: '',
  },

  /** Imagen para compartir en redes (1200x630), dentro de /public */
  ogImage: '/og-default.jpg',

  /** Menú principal. En una one-page, los enlaces van a las secciones (#servicios…) */
  nav: [
    { label: 'Servicios', href: '/#servicios' },
    { label: 'Sobre nosotros', href: '/#sobre-nosotros' },
    { label: 'Opiniones', href: '/#opiniones' },
    { label: 'Horario', href: '/#horario' },
    { label: 'Contacto', href: '/#contacto' },
  ],

  /** Datos del titular para el aviso legal (los rellena el cliente) */
  legal: {
    owner: 'Nombre y apellidos o razón social',
    taxId: 'NIF/CIF',
  },
} as const;

export type Site = typeof site;
