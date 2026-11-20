/**
 * preloader.ts — Pantalla de carga con contador tipo odómetro.
 * ------------------------------------------------------------
 * - Mide carga REAL: imágenes marcadas con data-preload (el hero) y las fuentes.
 * - Dura como mínimo MIN_MS (para que se vea el efecto) y como máximo MAX_MS
 *   (nunca bloquea la web aunque algo tarde).
 * - Solo en la primera visita de la sesión; se salta con "reducir movimiento".
 *   (La decisión se toma antes, en un script en el <head>: ver Preloader.astro.)
 * - Al terminar se desliza hacia arriba y avisa al resto con el evento "brava:ready".
 * Sin librerías: transiciones CSS.
 */

const MIN_MS = 1100;
const MAX_MS = 2000;

/** Avisa de que la página está lista para animar sus entradas */
export function announceReady() {
  document.documentElement.classList.remove('is-loading');
  window.dispatchEvent(new Event('brava:ready'));
  (window as any).__bravaReady = true;
}

/** Pone un número (0–100) en las columnas de dígitos del odómetro */
function setCounter(root: HTMLElement, value: number) {
  const text = String(Math.round(value)).padStart(3, '0');
  root.querySelectorAll<HTMLElement>('[data-digit]').forEach((col, i) => {
    const d = Number(text[i]);
    col.style.transform = `translateY(${-d * 10}%)`;
  });
  root.querySelector<HTMLElement>('[data-bar]')?.style.setProperty('--progress', String(value / 100));
}

export function initPreloader() {
  const root = document.querySelector<HTMLElement>('[data-preloader]');
  const html = document.documentElement;

  // Si el <head> decidió no mostrarla (visita repetida, reducir movimiento), la página ya está lista
  if (!root || !html.classList.contains('is-loading')) {
    root?.remove();
    announceReady();
    return;
  }

  // Qué hay que esperar: imágenes del hero + fuentes
  const images = [...document.querySelectorAll<HTMLImageElement>('img[data-preload]')];
  const tasks: Promise<unknown>[] = images.map((img) =>
    img.complete ? Promise.resolve() : new Promise((r) => { img.addEventListener('load', r, { once: true }); img.addEventListener('error', r, { once: true }); })
  );
  if (document.fonts?.ready) tasks.push(document.fonts.ready);
  const total = Math.max(tasks.length, 1);
  let done = 0;
  tasks.forEach((t) => t.finally(() => done++));

  const start = performance.now();
  let shown = 0;

  function tick(now: number) {
    const elapsed = now - start;
    // Progreso real, pero sin pasar del ritmo mínimo (para que dé tiempo a verlo rodar)
    const real = done / total;
    const timeCap = Math.min(elapsed / MIN_MS, 1);
    const forced = elapsed > MAX_MS ? 1 : 0;
    const target = Math.max(Math.min(real, timeCap), forced) * 100;
    shown += (target - shown) * 0.12;
    if (target === 100 && shown > 99.5) shown = 100;
    setCounter(root!, shown);

    if (shown >= 100) {
      finish();
    } else {
      requestAnimationFrame(tick);
    }
  }

  function finish() {
    try { sessionStorage.setItem('brava-loaded', '1'); } catch {}
    root!.classList.add('is-leaving');
    // Las entradas empiezan mientras la cortina sube (como en Lusion)
    setTimeout(announceReady, 250);
    root!.addEventListener('transitionend', () => root!.remove(), { once: true });
    setTimeout(() => root!.remove(), 1600); // por si no llega el evento
  }

  requestAnimationFrame(tick);
}
