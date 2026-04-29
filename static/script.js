const form = document.getElementById("formAlumno");
const lista = document.getElementById("listaAlumnos");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const dni = document.getElementById("dni").value;
  const carrera = document.getElementById("carrera").value;

  const item = document.createElement("li");
  item.textContent = `${nombre} - ${dni} - ${carrera}`;

  lista.appendChild(item);

  form.reset();
});