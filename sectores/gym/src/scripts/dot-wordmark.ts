/**
 * dot-wordmark.ts — Palabra gigante hecha de puntos que se iluminan.
 * --------------------------------------------------------------------
 * Cómo funciona:
 *  1. Escribe la palabra en un canvas oculto y la recorre en cuadrícula.
 *  2. Donde hay letra, guarda un punto.
 *  3. En cada fotograma dibuja los puntos: los cercanos al cursor
 *     (o a dos "focos" que se mueven solos) brillan más y crecen.
 *
 * Rendimiento y accesibilidad:
 *  - Solo se anima cuando está a la vista (IntersectionObserver).
 *  - Con "reducir movimiento" se dibuja una vez, quieto.
 *  - En pantallas táctiles no hay cursor: los focos se mueven solos.
 *  - El canvas es decorativo (aria-hidden); el nombre está en texto en el pie.
 *
 * Sin librerías: Canvas 2D y requestAnimationFrame.
 */

interface Options {
  word: string;
  font: string;        // familia, p. ej. "Anton"
  dot: string;         // color base de los puntos (rgb "251,237,218")
  glow: string;        // color de brillo (rgb "211,128,46")
  step: number;        // separación entre puntos en px CSS
}

interface Point { x: number; y: number }

export function initDotWordmark(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const opts: Options = {
    word: canvas.dataset.word ?? 'BRAVA',
    font: canvas.dataset.font ?? 'Anton',
    dot: canvas.dataset.dot ?? '251,237,218',
    glow: canvas.dataset.glow ?? '211,128,46',
    step: Number(canvas.dataset.step ?? 7),
  };

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let points: Point[] = [];
  let width = 0;
  let height = 0;
  let dpr = 1;
  let running = false;
  let rafId = 0;
  // Cursor en coordenadas del canvas (null = fuera)
  let pointer: { x: number; y: number } | null = null;

  /** Calcula los puntos de la palabra para el tamaño actual */
  function build() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.clientWidth;
    // Altura proporcional: la palabra ocupa todo el ancho
    const probe = document.createElement('canvas').getContext('2d')!;
    probe.font = `100px "${opts.font}", Impact, sans-serif`;
    const m100 = probe.measureText(opts.word);
    const fontSize = (width / (m100.width || 1)) * 100 * 0.98;
    // Alto real de las letras (sin espacio vacío arriba ni abajo)
    const scale = fontSize / 100;
    const ascent = (m100.actualBoundingBoxAscent || 72) * scale;
    const descent = (m100.actualBoundingBoxDescent || 0) * scale;
    const pad = Math.max(4, Math.min(opts.step, width / 150));
    height = Math.round(ascent + descent + pad * 2);

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.height = `${height}px`;

    // Escribe la palabra en un canvas oculto para leer sus píxeles
    const off = document.createElement('canvas');
    off.width = Math.round(width);
    off.height = Math.round(height);
    const octx = off.getContext('2d')!;
    octx.fillStyle = '#000';
    octx.textBaseline = 'alphabetic';
    octx.font = `${fontSize}px "${opts.font}", Impact, sans-serif`;
    octx.fillText(opts.word, (width - octx.measureText(opts.word).width) / 2, pad + ascent);
    const data = octx.getImageData(0, 0, off.width, off.height).data;

    points = [];
    // En pantallas estrechas, puntos más juntos para que la palabra se lea
    const step = Math.max(4, Math.min(opts.step, width / 150));
    for (let y = step / 2; y < off.height; y += step) {
      for (let x = step / 2; x < off.width; x += step) {
        const alpha = data[(Math.floor(y) * off.width + Math.floor(x)) * 4 + 3];
        if (alpha > 128) points.push({ x, y });
      }
    }
  }

  /** Dibuja un fotograma; t en milisegundos */
  function draw(t: number) {
    ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx!.clearRect(0, 0, width, height);

    // Focos de luz: el cursor y dos que se mueven solos (lento, como luz de estudio)
    const s = t / 1000;
    const lights = [
      { x: width * (0.5 + 0.38 * Math.sin(s * 0.35)), y: height * (0.5 + 0.35 * Math.cos(s * 0.5)), r: width * 0.14, k: 0.75 },
      { x: width * (0.5 + 0.42 * Math.cos(s * 0.23 + 2)), y: height * (0.5 + 0.4 * Math.sin(s * 0.31)), r: width * 0.1, k: 0.55 },
    ];
    if (pointer) lights.push({ x: pointer.x, y: pointer.y, r: width * 0.12, k: 1 });

    const base = Math.max(4, Math.min(opts.step, width / 150)) * 0.22;
    for (const p of points) {
      let glow = 0;
      for (const l of lights) {
        const dx = p.x - l.x;
        const dy = p.y - l.y;
        const d2 = dx * dx + dy * dy;
        const r2 = l.r * l.r;
        if (d2 < r2) glow = Math.max(glow, (1 - d2 / r2) * l.k);
      }
      // Punto base apagado + brillo crema/ámbar donde hay luz
      const radius = base * (1 + glow * 0.9);
      const color = glow > 0.55 ? opts.glow : opts.dot;
      const alpha = 0.22 + glow * 0.78;
      ctx!.fillStyle = `rgba(${color},${alpha.toFixed(3)})`;
      ctx!.beginPath();
      ctx!.arc(p.x, p.y, radius, 0, Math.PI * 2);
      ctx!.fill();
    }
  }

  function loop(t: number) {
    draw(t);
    if (running) rafId = requestAnimationFrame(loop);
  }
  function start() {
    if (reduceMotion || running) return;
    running = true;
    rafId = requestAnimationFrame(loop);
  }
  function stop() {
    running = false;
    cancelAnimationFrame(rafId);
  }

  // Cursor (solo ratón; en táctil los focos van solos)
  canvas.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    const rect = canvas.getBoundingClientRect();
    pointer = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  });
  canvas.addEventListener('pointerleave', () => (pointer = null));

  // Animar solo cuando se ve
  const io = new IntersectionObserver((entries) => {
    entries[0].isIntersecting ? start() : stop();
  });

  // Recalcular al cambiar el tamaño
  let resizeTimer = 0;
  const ro = new ResizeObserver(() => {
    clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      build();
      draw(performance.now());
    }, 150);
  });

  // Esperar a la fuente para medir bien la palabra
  const ready = document.fonts?.load ? document.fonts.load(`100px "${opts.font}"`) : Promise.resolve();
  ready.finally(() => {
    build();
    draw(2000); // primer fotograma (y el único si hay "reducir movimiento")
    io.observe(canvas);
    ro.observe(canvas);
  });
}
