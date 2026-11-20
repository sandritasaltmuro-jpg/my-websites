/**
 * contact.ts — Ayudas para enlaces de contacto, a partir de site.ts
 */
import { site } from '../config/site';

/** Enlace de WhatsApp con mensaje opcional (si no se pasa, usa el de site.ts) */
export function whatsappUrl(message: string = site.contact.whatsappMessage): string {
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Enlace tel: sin espacios */
export function phoneUrl(): string {
  return `tel:${site.contact.phone.replace(/\s+/g, '')}`;
}

/** Enlace mailto: */
export function emailUrl(): string {
  return `mailto:${site.contact.email}`;
}

/** Dirección completa en una línea */
export function fullAddress(): string {
  const a = site.address;
  return `${a.street}, ${a.postalCode} ${a.city}`;
}

/** URL del mapa incrustado de Google (no necesita clave) */
export function mapEmbedUrl(): string {
  return `https://maps.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&z=16&output=embed`;
}

/** Enlace para abrir la dirección en Google Maps */
export function mapLinkUrl(): string {
  return site.social.googleMaps || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}`;
}
