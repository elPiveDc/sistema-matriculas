async function crearCurso() {
  const nombre = document.getElementById("curso").value;

  await fetch("/cursos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre }),
  });

  alert("Curso agregado");
  document.getElementById("curso").value = "";
}

async function crearProfesor() {
  const nombre = document.getElementById("profesor").value;

  await fetch("/profesores", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre }),
  });

  alert("Profesor agregado");
  document.getElementById("profesor").value = "";
}

async function crearGrupo() {
  const nombre = document.getElementById("grupo").value;
  const curso = document.getElementById("grupoCurso").value;
  const profesor = document.getElementById("grupoProfesor").value;

  await fetch("/grupos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre,
      curso,
      profesor,
    }),
  });

  alert("Grupo agregado");
  document.getElementById("grupo").value = "";
  document.getElementById("grupoCurso").value = "";
  document.getElementById("grupoProfesor").value = "";
}

async function registrarAlumno() {
  const nombre = document.getElementById("nombre").value;
  const dni = document.getElementById("dni").value;
  const carrera = document.getElementById("carrera").value;

  if (!nombre || !dni || !carrera) {
    alert("Por favor, complete todos los campos del alumno.");
    return;
  }

  await fetch("/alumnos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre,
      dni,
      carrera,
    }),
  });

  const lista = document.getElementById("listaAlumnos");
  const item = document.createElement("li");
  item.textContent = `${nombre} - ${dni} - ${carrera}`;
  lista.appendChild(item);

  // Limpiar los campos del formulario
  document.getElementById("nombre").value = "";
  document.getElementById("dni").value = "";
  document.getElementById("carrera").value = "";

  alert("Alumno registrado");
}
