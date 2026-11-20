/**
 * horario.ts — Horario semanal de clases de Brava Club.
 * Textos: docs/brava-concepto.md (sección 6). El horario de apertura general
 * (lunes a viernes, sábados, domingos cerrado) sale de site.ts.
 * hot: true → clase en la sala a 35–38 °C (se marca en la tabla).
 */

export interface Sesion {
  time: string;
  name: string;
  hot?: boolean;
}

export interface Dia {
  /** Nombre corto para la pestaña (móvil) */
  short: string;
  name: string;
  sessions: Sesion[];
}

export const semana: Dia[] = [
  {
    short: 'Lun', name: 'Lunes', sessions: [
      { time: '7:30', name: 'HIIT' },
      { time: '9:00', name: 'Hot Pilates', hot: true },
      { time: '13:30', name: 'Barre' },
      { time: '19:00', name: 'Hyrox' },
      { time: '20:15', name: 'Pole (inicio)' },
      { time: '21:15', name: 'Hot Stretch', hot: true },
    ],
  },
  {
    short: 'Mar', name: 'Martes', sessions: [
      { time: '7:30', name: 'Barre' },
      { time: '13:30', name: 'Hot Barre', hot: true },
      { time: '18:30', name: 'HIIT' },
      { time: '19:45', name: 'Pole (medio)' },
      { time: '21:00', name: 'Hot Barre', hot: true },
    ],
  },
  {
    short: 'Mié', name: 'Miércoles', sessions: [
      { time: '7:30', name: 'HIIT' },
      { time: '9:00', name: 'Hot Pilates', hot: true },
      { time: '13:30', name: 'Barre' },
      { time: '19:00', name: 'Hyrox' },
      { time: '20:15', name: 'Pole (inicio)' },
      { time: '21:15', name: 'Hot Stretch', hot: true },
    ],
  },
  {
    short: 'Jue', name: 'Jueves', sessions: [
      { time: '7:30', name: 'Barre' },
      { time: '13:30', name: 'Hot Barre', hot: true },
      { time: '18:30', name: 'HIIT' },
      { time: '19:45', name: 'Pole (avanzado)' },
      { time: '21:00', name: 'Hot Pilates', hot: true },
    ],
  },
  {
    short: 'Vie', name: 'Viernes', sessions: [
      { time: '7:30', name: 'Hyrox' },
      { time: '13:30', name: 'HIIT' },
      { time: '18:30', name: 'Hot Barre', hot: true },
      { time: '19:45', name: 'Pole (abierta)' },
    ],
  },
  {
    short: 'Sáb', name: 'Sábado', sessions: [
      { time: '10:00', name: 'Hyrox (simulacro por equipos)' },
      { time: '11:30', name: 'Pole (taller)' },
      { time: '12:30', name: 'Hot Stretch', hot: true },
    ],
  },
];

/** Notas bajo el horario */
export const horarioNotas = ['Spa y sauna: mismo horario', 'Fisio: con cita'];
