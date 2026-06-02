# Sistema de Gestión Académica

## Descripción General

Sistema web desarrollado como proyecto académico para gestionar información básica relacionada con cursos, profesores, grupos y alumnos mediante una API REST construida con FastAPI.

El proyecto tiene como objetivo principal aplicar buenas prácticas de desarrollo colaborativo utilizando herramientas de control de versiones, integración continua, automatización y trabajo en equipo.

---

## Tecnologías Utilizadas

### Backend

* Python 3.x
* FastAPI
* Uvicorn

### Frontend

* HTML5
* CSS3
* JavaScript (Vanilla)

### DevOps y Automatización

* Git
* GitHub
* GitHub Actions
* Docker
* Docker Compose
* Pytest

### Gestión y Comunicación

* Trello
* Slack

---

## Estructura del Proyecto

```text
sistema-matriculas/
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── static/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── tests/
│   └── test_api.py
│
├── main.py
├── requirements.txt
├── run.bat
├── test.bat
├── Dockerfile
├── docker-compose.yml
└── README.md
```

---

## Estrategia de Ramas

El proyecto utiliza una estrategia basada en Feature Branching.

### Ramas Principales

| Rama    | Propósito                               |
| ------- | --------------------------------------- |
| main    | Versión estable y lista para producción |
| develop | Integración de funcionalidades          |
| tarea-* | Desarrollo de nuevas características    |

### Ejemplos

```text
tarea-api-post
tarea-frontend-ui
tarea-docker-config
tarea-ci-pipeline
```

---

## Normas de Trabajo

### Regla 1: No trabajar directamente sobre main

La rama `main` representa la versión estable del proyecto.

No se permiten commits directos sobre esta rama.

---

### Regla 2: Toda funcionalidad debe desarrollarse en una rama propia

Crear una rama a partir de `develop`:

```bash
git checkout develop
git pull origin develop

git checkout -b tarea-nombre-funcionalidad
```

Ejemplo:

```bash
git checkout -b tarea-api-post
```

---

### Regla 3: Commits descriptivos

Utilizar mensajes claros siguiendo una convención estándar.

Ejemplos:

```bash
git commit -m "feat: agregar endpoint de alumnos"
git commit -m "fix: corregir validación de formulario"
git commit -m "docs: actualizar README"
git commit -m "test: agregar pruebas unitarias"
```

---

### Regla 4: Uso obligatorio de Pull Requests

Todo cambio debe integrarse mediante Pull Request.

Proceso:

1. Crear rama.
2. Realizar cambios.
3. Hacer commit.
4. Realizar push.
5. Abrir Pull Request hacia `develop`.
6. Solicitar revisión.
7. Realizar merge.

---

### Regla 5: Revisión de Código

Antes de aprobar un Pull Request se debe verificar:

* Correcto funcionamiento.
* Código legible.
* Ausencia de conflictos.
* Cumplimiento de estándares del proyecto.

---

## Instalación del Proyecto

### Clonar repositorio

```bash
git clone https://github.com/elPiveDc/sistema-matriculas.git

cd sistema-matriculas
```

---

### Crear entorno virtual (opcional)

```bash
python -m venv venv
```

Activar:

Windows:

```bash
venv\Scripts\activate
```

Linux:

```bash
source venv/bin/activate
```

---

### Instalar dependencias

```bash
pip install -r requirements.txt
```

---

## Ejecución Local

### Opción 1: Script automático

```bash
run.bat
```

### Opción 2: Manual

```bash
uvicorn main:app --reload
```

---

## Acceso a la Aplicación

Aplicación web:

```text
http://localhost:8000
```

Documentación Swagger:

```text
http://localhost:8000/docs
```

---

## Pruebas Automatizadas

Ejecutar pruebas:

```bash
test.bat
```

o

```bash
pytest
```

---

## Integración Continua (CI)

El proyecto utiliza GitHub Actions para ejecutar automáticamente:

* Instalación de dependencias.
* Validación del entorno.
* Ejecución de pruebas automatizadas.

Cada push o Pull Request hacia la rama `develop` dispara automáticamente el pipeline de CI.

---

## Docker

### Construir imagen

```bash
docker build -t sistema-matriculas .
```

### Ejecutar contenedor

```bash
docker run -p 8000:8000 sistema-matriculas
```

---

## Gestión del Proyecto

### Trello

Se utiliza para:

* Planificación de tareas.
* Seguimiento del avance.
* Distribución de responsabilidades.

### Slack

Se utiliza para:

* Comunicación diaria.
* Coordinación del equipo.
* Resolución rápida de incidencias.

---

## Equipo de Desarrollo

* Mateo Davila Castillo
* Gian Moises Flores Rivera
* Integrante 3
* Integrante 4
* Integrante 5
* Integrante 6

---

## Licencia

Proyecto desarrollado con fines académicos.
