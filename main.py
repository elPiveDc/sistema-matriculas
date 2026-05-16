from fastapi import FastAPI

grupos = []


class Curso(BaseModel):
    nombre: str


class Profesor(BaseModel):
    nombre: str


class Grupo(BaseModel):
    nombre: str
    curso: str
    profesor: str


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
    cursos.append(curso.dict())
    return {"mensaje": "Curso agregado"}


# PROFESORES
@app.get("/profesores")
def listar_profesores():
    return profesores


@app.post("/profesores")
def crear_profesor(profesor: Profesor):
    profesores.append(profesor.dict())
    return {"mensaje": "Profesor agregado"}


# GRUPOS
@app.get("/grupos")
def listar_grupos():
    return grupos


@app.post("/grupos")
def crear_grupo(grupo: Grupo):
    grupos.append(grupo.dict())
    return {"mensaje": "Grupo agregado"}
