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
  name: 'Brava Club',

  /** Frase corta que describe el negocio (se usa como descripción por defecto) */
  description:
    'Hyrox, HIIT, barre, pole dance, fisio y sauna en Malasaña. Un gimnasio solo para mujeres para entrenar fuerte y recuperarte. Primera clase gratis.',

  /** Dominio final, sin barra al final. Debe coincidir con `site` en astro.config.mjs */
  url: 'https://kit-gym.vercel.app',

  /** true = Google no indexa la web (conceptos de portfolio, webs en pruebas) */
  noindex: true, // concepto de portfolio: no debe competir con gimnasios reales

  /**
   * Tipo de negocio para Google (schema.org). Ejemplos:
   * HairSalon, BeautySalon, NailSalon, DaySpa, CafeOrCoffeeShop, Restaurant, ExerciseGym
   */
  schemaType: 'ExerciseGym',

  /** Rango de precios orientativo: €, €€, €€€ */
  priceRange: '€€',

  contact: {
    /** Teléfono tal como se muestra */
    phone: '+34 600 000 000',
    /** WhatsApp: solo números, con prefijo de país, sin + ni espacios */
    whatsapp: '34600000000',
    /** Mensaje que aparece escrito al abrir WhatsApp */
    whatsappMessage: 'Hola, quiero reservar mi clase de prueba gratis en Brava Club.',
    email: 'hola@bravaclub.example',
  },

  address: {
    street: 'Calle Ficticia 7', // dirección inventada (concepto)
    postalCode: '28004',
    city: 'Madrid',
    region: 'Madrid',
    country: 'ES',
    /** Cómo llegar, en lenguaje natural (bueno para SEO local y GEO) */
    directions: 'En Malasaña, a cinco minutos del metro de Tribunal.',
  },

  /** Coordenadas (clic derecho en Google Maps → copiar coordenadas) */
  geo: { latitude: 40.4250, longitude: -3.7020 },

  /** Búsqueda que se usa para el mapa incrustado */
  mapQuery: 'Malasaña, Madrid',

  /**
   * Horario. days: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.
   * label: cómo se muestra en la web. Días cerrados: no se ponen.
   */
  hours: [
    { label: 'Lunes a viernes', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:00', closes: '22:00' },
    { label: 'Sábados', days: ['Saturday'], opens: '09:00', closes: '14:00' },
  ],
  /** Texto para los días sin horario */
  closedLabel: 'Domingos cerrado',

  /** Redes sociales (deja vacío lo que no tenga) */
  social: {
    instagram: 'https://www.instagram.com/',
    facebook: '',
    tiktok: 'https://www.tiktok.com/', // concepto: perfil genérico
    googleMaps: '',
  },

  /** Imagen para compartir en redes (1200x630), dentro de /public */
  ogImage: '/og-default.jpg',

  /** Menú principal. En una one-page, los enlaces van a las secciones (#servicios…) */
  nav: [
    { label: 'Clases', href: '/#clases' },
    { label: 'Hot', href: '/#hot' },
    { label: 'El estudio', href: '/#estudio' },
    { label: 'Wellness', href: '/#wellness' },
    { label: 'Horario', href: '/#horario' },
    { label: 'Tarifas', href: '/#tarifas' },
    { label: 'You + Brava', href: '/#comunidad' },
    { label: 'Contacto', href: '/#contacto' },
  ],

  /** Datos del titular para el aviso legal (los rellena el cliente) */
  legal: {
    owner: 'Brava Club (proyecto conceptual, no es un negocio real)',
    taxId: '—',
  },
} as const;

export type Site = typeof site;
