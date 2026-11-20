/**
 * robots.txt generado automáticamente con el dominio de site.ts.
 * Si site.noindex es true (conceptos, webs en pruebas), bloquea a los buscadores.
 */
import type { APIRoute } from 'astro';
import { site } from '../config/site';

export const GET: APIRoute = () => {
  const body = site.noindex
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap-index.xml', site.url)}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
