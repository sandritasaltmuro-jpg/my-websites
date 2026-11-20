/**
 * equipo.ts — Equipo de Brava Club (FICTICIO: proyecto conceptual).
 * Textos: docs/brava-concepto.md (sección 8). Con un cliente real: nombres,
 * titulaciones y fotos reales, con permiso de cada persona.
 */

export interface Persona {
  name: string;
  role: string;
  bio: string;
}

export const equipo: Persona[] = [
  { name: 'Lucía', role: 'Hyrox y HIIT', bio: 'Exatleta de atletismo; te hará correr más de lo que creías.' },
  { name: 'Marta', role: 'Barre y Hot Barre', bio: 'Bailarina clásica durante 12 años. Postura, control y piernas de acero.' },
  { name: 'Nerea', role: 'Pole dance', bio: 'Campeona regional de pole sport. Paciente con las nuevas, exigente con las de siempre.' },
  { name: 'Carla', role: 'Fuerza y Hyrox', bio: 'Entrenadora personal; especialista en técnica de levantamiento.' },
  { name: 'Alba', role: 'Hot Pilates y Hot Stretch', bio: 'Instructora de pilates y movilidad.' },
  { name: 'Inés', role: 'Fisioterapeuta deportiva', bio: 'Especialista en lesiones de corredoras y bailarinas.' },
];
