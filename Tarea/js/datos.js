// ===== Datos de estudiantes =====

// Nombre del curso
export const curso = "Diseño de Interfaces";

// Estudiantes y sus notas
export const estudiantes = [
  { nombre: "Ana", notas: [16, 18, 15] },
  { nombre: "Luis", notas: [12, 10, 14] },
  { nombre: "Rosa", notas: [19, 17, 20] },
];

// Crear una copia de Ana con otro nombre
export const nuevo = {
  ...estudiantes[0],
  nombre: "Ana María",
};

// Agregar la nueva estudiante al arreglo
export const todos = [...estudiantes, nuevo];
