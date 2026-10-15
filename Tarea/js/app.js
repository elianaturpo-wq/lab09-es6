// ===== Tarea: JavaScript ES6+ =====

// Importar los datos de los estudiantes
import { curso, todos } from "./datos.js";

// Importar la función que genera los reportes
import reporte from "./calculos.js";

// Mostrar el nombre del curso
console.log(`Curso: ${curso}`);

// Seleccionar la lista del HTML
const lista = document.querySelector("#reportes");

// Mostrar el reporte de cada estudiante
todos.forEach((estudiante) => {
  const resultado = reporte(estudiante);

  console.log(resultado);
  lista.innerHTML += `<li>${resultado}</li>`;
});
