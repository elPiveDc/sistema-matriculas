const db = {
  cursos: [],
  profesores: [],
  grupos: [],
  alumnos: [],
};

// Funciones para interactuar con los Cursos
async function crearCurso() {
  const nombre = document.getElementById("curso").value;
  if (!nombre) return alert("Por favor, ingrese el nombre del curso.");

  // Simula el POST @app.post("/cursos")
  db.cursos.push({ nombre });

  alert("Curso agregado");
  document.getElementById("curso").value = "";
}

// Funciones para interactuar con los Profesores
async function crearProfesor() {
  const nombre = document.getElementById("profesor").value;
  if (!nombre) return alert("Por favor, ingrese el nombre del profesor.");

  // Simula el POST @app.post("/profesores")
  db.profesores.push({ nombre });

  alert("Profesor agregado");
  document.getElementById("profesor").value = "";
}

// Funciones para interactuar con los Grupos
async function crearGrupo() {
  const nombre = document.getElementById("grupo").value;
  const curso = document.getElementById("grupoCurso").value;
  const profesor = document.getElementById("grupoProfesor").value;

  if (!nombre || !curso || !profesor) {
    return alert("Por favor, complete todos los campos del grupo.");
  }

  // Simula el POST @app.post("/grupos")
  db.grupos.push({ nombre, curso, profesor });

  alert("Grupo agregado");
  document.getElementById("grupo").value = "";
  document.getElementById("grupoCurso").value = "";
  document.getElementById("grupoProfesor").value = "";
}

// Funciones para interactuar con los Alumnos
async function registrarAlumno() {
  const nombre = document.getElementById("nombre").value;
  const dni = document.getElementById("dni").value;
  const carrera = document.getElementById("carrera").value;

  if (!nombre || !dni || !carrera) {
    alert("Por favor, complete todos los campos del alumno.");
    return;
  }

  // Simula el POST @app.post("/alumnos")
  db.alumnos.push({ nombre, dni, carrera });

  // Actualiza la interfaz visual
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

// Funciones auxiliares por si necesitas listar los datos en el frontend
// Reemplazan los métodos GET de FastAPI
function obtenerCursos() {
  return db.cursos;
}
function obtenerProfesores() {
  return db.profesores;
}
function obtenerGrupos() {
  return db.grupos;
}
function obtenerAlumnos() {
  return db.alumnos;
}
