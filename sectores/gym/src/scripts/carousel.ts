/**
 * carousel.ts — Carruseles de Brava (Hero y El estudio).
 * ------------------------------------------------------
 * Flechas, puntos y contador sobre un scroll horizontal NATIVO:
 * sin JavaScript se puede deslizar igual (dedo, trackpad o teclado).
 * No avanza solo: lo mueve quien lo usa.
 *
 * Marcado (atributos):
 *   [data-carousel]            contenedor
 *   [data-carousel-track]      lista con scroll horizontal (cada hijo es una diapositiva)
 *   [data-carousel-prev/next]  botones de flecha
 *   [data-carousel-dots]       contenedor de botones-punto (uno por diapositiva)
 *   [data-carousel-count]      texto "01 / 04" (opcional)
 *
 * Las diapositivas pueden ser más estrechas que la pista (se ve un trozo de la siguiente).
 */

const pad = (n: number) => String(n).padStart(2, '0');

export function initCarousels() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll<HTMLElement>('[data-carousel]').forEach((root) => {
    if (root.dataset.carouselReady) return; // por si se llama dos veces
    root.dataset.carouselReady = 'true';

    const track = root.querySelector<HTMLElement>('[data-carousel-track]');
    const slides = [...(track?.children ?? [])] as HTMLElement[];
    const dots = [...root.querySelectorAll<HTMLButtonElement>('[data-carousel-dots] button')];
    const prev = root.querySelector<HTMLButtonElement>('[data-carousel-prev]');
    const next = root.querySelector<HTMLButtonElement>('[data-carousel-next]');
    const count = root.querySelector<HTMLElement>('[data-carousel-count]');
    if (!track || slides.length < 2) return;

    let current = 0;

    // Posición de cada diapositiva dentro de la pista
    const leftOf = (el: HTMLElement) => el.offsetLeft - slides[0].offsetLeft;

    function goTo(index: number) {
      const i = (index + slides.length) % slides.length; // da la vuelta al llegar al final
      track!.scrollTo({ left: leftOf(slides[i]), behavior: reduce ? 'auto' : 'smooth' });
    }

    // Diapositiva activa = la más cercana al borde izquierdo (también al deslizar a mano)
    function update() {
      const x = track!.scrollLeft;
      // Al llegar al final del scroll, la activa es la última
      const atEnd = x + track!.clientWidth >= track!.scrollWidth - 2;
      let i = atEnd ? slides.length - 1 : 0;
      if (!atEnd) {
        let best = Infinity;
        slides.forEach((s, j) => {
          const d = Math.abs(leftOf(s) - x);
          if (d < best) { best = d; i = j; }
        });
      }
      if (i === current) return;
      current = i;
      dots.forEach((d, j) => (j === i ? d.setAttribute('aria-current', 'true') : d.removeAttribute('aria-current')));
      if (count) count.textContent = `${pad(i + 1)} / ${pad(slides.length)}`;
    }

    prev?.addEventListener('click', () => goTo(current - 1));
    next?.addEventListener('click', () => goTo(current + 1));
    dots.forEach((d, j) => d.addEventListener('click', () => goTo(j)));
    track.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
  });
}
