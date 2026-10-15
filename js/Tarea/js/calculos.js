// ===== Cálculos de estudiantes =====

// Calcular el promedio usando rest
export const promedio = (...notas) =>
  notas.reduce((suma, nota) => suma + nota, 0) / notas.length;

// Determinar si el estudiante aprobó
export const estado = (nota, minima = 13) =>
  nota >= minima ? "Aprobado" : "Desaprobado";

// Generar el reporte de cada estudiante
const reporte = ({ nombre, notas }) => {
  const prom = promedio(...notas);
  return `${nombre}: ${prom.toFixed(1)} - ${estado(prom)}`;
};

// Exportación por defecto
export default reporte;
