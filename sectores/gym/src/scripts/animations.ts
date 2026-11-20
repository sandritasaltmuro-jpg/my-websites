/**
 * animations.ts — Entradas de textos, bloques e imágenes con GSAP.
 * --------------------------------------------------------------------
 * Inspiradas en lusion.co: titulares que suben línea a línea desde una máscara,
 * curvas suaves tipo "expo" y pequeños retrasos escalonados.
 *
 * Uso en el HTML (sin escribir JavaScript en cada componente):
 *   data-reveal="lines"   → texto que entra línea a línea (titulares)
 *   data-reveal="up"      → bloque que sube y aparece (párrafos, botones, tarjetas)
 *   data-reveal="image"   → imagen que se destapa de abajo arriba con un ligero zoom
 *   data-delay="0.2"      → retraso opcional en segundos
 *
 * - Lo que está a la vista al cargar se anima cuando termina la pantalla de carga
 *   (evento "brava:ready"); lo demás, al llegar con el scroll (una sola vez).
 * - Con "reducir movimiento" no hay animaciones: todo se muestra tal cual.
 * - Si GSAP fallara, el contenido se muestra igualmente (nunca queda oculto).
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

// Curvas y tiempos de la marca (un solo sitio para ajustarlos)
const EASE_OUT = 'expo.out';
const EASE_IN_OUT = 'expo.inOut';
const DURATION = 1.2;
const STAGGER = 0.08;

const showAll = () => document.documentElement.classList.add('reveal-done');

function animate(el: HTMLElement) {
  const type = el.dataset.reveal;
  const delay = Number(el.dataset.delay ?? 0);

  if (type === 'lines') {
    const split = SplitText.create(el, { type: 'lines', mask: 'lines', linesClass: 'reveal-line' });
    gsap.set(el, { autoAlpha: 1 });
    return gsap.from(split.lines, {
      yPercent: 110,
      duration: DURATION,
      ease: EASE_OUT,
      stagger: STAGGER,
      delay,
      onComplete: () => split.revert(), // deja el texto original (mejor para accesibilidad)
    });
  }

  if (type === 'image') {
    const inner = el.querySelector('img, video, canvas');
    gsap.set(el, { autoAlpha: 1 });
    const tl = gsap.timeline({ delay });
    tl.from(el, { clipPath: 'inset(100% 0% 0% 0%)', duration: DURATION * 1.2, ease: EASE_IN_OUT });
    if (inner) tl.from(inner, { scale: 1.18, duration: DURATION * 1.6, ease: EASE_OUT }, 0);
    return tl;
  }

  // "up" (por defecto)
  return gsap.fromTo(
    el,
    { autoAlpha: 0, y: 40 },
    { autoAlpha: 1, y: 0, duration: DURATION, ease: EASE_OUT, delay }
  );
}

export function initAnimations() {
  const items = [...document.querySelectorAll<HTMLElement>('[data-reveal]')];
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!items.length || reduce) return showAll();

  const start = () => {
    const vh = window.innerHeight;
    items.forEach((el, i) => {
      const inView = el.getBoundingClientRect().top < vh * 0.9;
      if (inView) {
        // Lo visible al cargar: en cascada, como una entrada de escena
        if (!el.dataset.delay) el.dataset.delay = String(i * 0.06);
        animate(el);
      } else {
        ScrollTrigger.create({ trigger: el, start: 'top 85%', once: true, onEnter: () => animate(el) });
      }
    });
  };

  // Esperar a que termine la pantalla de carga (o empezar ya si no la hay)
  if ((window as any).__bravaReady) start();
  else window.addEventListener('brava:ready', start, { once: true });

  // Seguridad: si algo falla, a los 4 s se muestra todo
  setTimeout(() => {
    items.forEach((el) => {
      if (getComputedStyle(el).visibility === 'hidden') gsap.set(el, { autoAlpha: 1 });
    });
  }, 4000);
}
