from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel

app = FastAPI(title="Sistema Académico")

cursos = []
profesores = []
grupos = []
alumnos = []


# MODELOS


class Curso(BaseModel):
    nombre: str


class Profesor(BaseModel):
    nombre: str


class Grupo(BaseModel):
    nombre: str
    curso: str
    profesor: str


class Alumno(BaseModel):
    nombre: str
    dni: str
    carrera: str


# FRONTEND

app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get("/")
def home():
    return FileResponse("static/index.html")


# CURSOS


@app.get("/cursos")
def listar_cursos():
    return cursos


@app.post("/cursos")
def crear_curso(curso: Curso):
    cursos.append(curso.model_dump())
    return {"mensaje": "Curso agregado"}


# PROFESORES


@app.get("/profesores")
def listar_profesores():
    return profesores


@app.post("/profesores")
def crear_profesor(profesor: Profesor):
    profesores.append(profesor.model_dump())
    return {"mensaje": "Profesor agregado"}


# GRUPOS


@app.get("/grupos")
def listar_grupos():
    return grupos


@app.post("/grupos")
def crear_grupo(grupo: Grupo):
    grupos.append(grupo.model_dump())
    return {"mensaje": "Grupo agregado"}


# ALUMNOS


@app.get("/alumnos")
def listar_alumnos():
    return alumnos


@app.post("/alumnos")
def crear_alumno(alumno: Alumno):
    alumnos.append(alumno.model_dump())
    return {"mensaje": "Alumno registrado"}
