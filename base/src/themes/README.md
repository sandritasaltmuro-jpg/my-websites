# Temas por sector

Cada archivo `.css` de esta carpeta es un tema: colores, fuentes y radios.
La estructura, el espaciado y los componentes son los mismos para todos (están en `src/styles/` y `src/components/`).

## Temas previstos
- `neutro.css`: punto de partida (provisional)
- `belleza.css`: semana 3
- `cafeteria.css`: semana 4
- `gym-mixto.css` y `gym-girls.css`: semana 5

## Cambiar el tema activo
En `src/layouts/BaseLayout.astro`, cambia esta línea:

```js
import '../themes/neutro.css';
```

## Crear un tema nuevo
1. Copia `neutro.css` con el nombre nuevo.
2. Cambia los valores de las variables (no añadas variables nuevas sin añadirlas a todos los temas).
3. Comprueba el contraste del texto (mínimo 4.5:1).
