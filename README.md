# Sistema de Gestión de Matrículas Académicas

## 1. Introducción

### 1.1 Objetivo del Proyecto

El propósito de este proyecto es desarrollar un sistema web simplificado para la gestión de matrículas estudiantiles. La solución busca automatizar el registro y visualización de alumnos matriculados, reemplazando procesos manuales propensos a errores.

El uso de **Git** como sistema de control de versiones permite que los 6 integrantes del equipo trabajen de forma colaborativa, manteniendo un historial de cambios seguro, facilitando la integración entre frontend y backend, y evitando conflictos de código.

---

### 1.2 Tecnologías Utilizadas

* **Control de Versiones:** Git & GitHub
* **Editor de Código:** Visual Studio Code
* **Backend:** Python 3.x + FastAPI
* **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
* **Contenedores:** Docker & Docker Compose
* **Gestión de Dependencias:** pip

---

## 2. Descripción del Proyecto

### 2.1 Resumen

Se trata de una **aplicación web ligera** que permite registrar alumnos (Nombre, DNI, Carrera) y almacenarlos mediante una API REST.

El frontend es servido directamente por el backend utilizando FastAPI, lo que simplifica la arquitectura inicial y facilita el despliegue.

---

### 2.2 Requerimientos

#### Funcionales

* Registrar nuevos alumnos
* Listar alumnos matriculados en tiempo real
* Servir el frontend desde el backend

#### No funcionales

* Interfaz intuitiva y responsive
* Tiempo de respuesta menor a 200 ms
* Código limpio, documentado y versionado

---

### 2.3 Flujo de Trabajo Colaborativo

Se utiliza la estrategia **Feature Branching**:

* `main` → versión estable (producción)
* `desarrollo` → integración de funcionalidades
* `tarea-*` → desarrollo de features individuales

**Regla importante:** Nadie debe subir código directamente a `main`.

---

## 3. Configuración del Proyecto

Primero se realiza la creación de la estructura inicial del proyecto de manera local:

```bash
C:\Users\USUARIO>cd Documents

C:\Users\USUARIO\Documents>mkdir sistema-matriculas

C:\Users\USUARIO\Documents>cd sistema-matriculas

C:\Users\USUARIO\Documents\sistema-matriculas>git init
Initialized empty Git repository in C:/Users/USUARIO/Documents/sistema-matriculas/.git/

C:\Users\USUARIO\Documents\sistema-matriculas>mkdir static

C:\Users\USUARIO\Documents\sistema-matriculas>type nul > main.py

C:\Users\USUARIO\Documents\sistema-matriculas>type nul > requirements.txt

C:\Users\USUARIO\Documents\sistema-matriculas>type nul > .gitignore

C:\Users\USUARIO\Documents\sistema-matriculas>git add .
```

Se realiza el primer commit:

```bash
C:\Users\USUARIO\Documents\sistema-matriculas>git commit -m "chore: estructura inicial del proyecto"
```

A continuación, se prepara la estructura de ramas:

```bash
C:\Users\USUARIO\Documents\sistema-matriculas>git branch desarrollo
C:\Users\USUARIO\Documents\sistema-matriculas>git checkout desarrollo
```

Luego se regresa a la rama principal para renombrarla:

```bash
C:\Users\USUARIO\Documents\sistema-matriculas>git checkout master
C:\Users\USUARIO\Documents\sistema-matriculas>git branch -m master main
```

Se conecta el repositorio local con GitHub y se publica la rama principal:

```bash
C:\Users\USUARIO\Documents\sistema-matriculas>git remote add origin https://github.com/elPiveDc/sistema-matriculas.git
C:\Users\USUARIO\Documents\sistema-matriculas>git push -u origin main
```

Finalmente, se publica la rama de desarrollo:

```bash
C:\Users\USUARIO\Documents\sistema-matriculas>git checkout desarrollo
C:\Users\USUARIO\Documents\sistema-matriculas>git push -u origin desarrollo
```

---

### 3.1 Configuración Inicial

> ⚠️ Esta sección aplica para nuevos colaboradores que clonan el proyecto ya creado.

#### 3.1.1 Crear Repositorio

* Crear repositorio en GitHub: `sistema-matriculas`
* Agregar:

  * `.gitignore` (Python)
  * Licencia MIT

---

#### 3.1.2 Clonar Repositorio

```bash
git clone https://github.com/elPiveDc/sistema-matriculas.git 
cd sistema-matriculas
```

---

#### 3.1.3 Crear Rama de Desarrollo

```bash
git checkout -b desarrollo
git push origin desarrollo
```

---

## 3.2 Estructura del Proyecto

### 3.2.1 Organización

Se utiliza un enfoque **monorepo**, donde backend y frontend conviven en un mismo proyecto.

---

### 3.2.2 Estructura de Carpetas

```
├── main.py              # API y servidor FastAPI
├── requirements.txt     # Dependencias
├── Dockerfile           # Configación Docker
├── static/              # Frontend
│   ├── index.html
│   ├── style.css
│   └── script.js
└── README.md
```

---

## 3.3 Gestión de Ramas

### Tipos de Ramas

* `main` → Producción
* `desarrollo` → Integración
* `tarea-*` → Nuevas funcionalidades

### Ejemplos

* `tarea-api-post`
* `tarea-frontend-ui`
* `tarea-docker-config`

---

## 4. Control de Versiones

### 4.1 Commits

* Deben ser **atómicos** (un cambio por commit)
* Usar convenciones claras:

```bash
git commit -m "feat: agregar endpoint de registro de alumnos"
git commit -m "fix: corregir validación de DNI"
```

---

### 4.2 Pull Requests

#### Flujo

1. Crear rama desde `desarrollo`
2. Subir cambios
3. Abrir Pull Request hacia `desarrollo`

---

### 4.2.2 Revisión de Código

* Mínimo 1 revisor
* Comentarios en líneas específicas
* Resolver observaciones antes de aprobar

---

### 4.3 Merge de Ramas

#### Desde GitHub

* Usar **"Squash and Merge"** para mantener un historial limpio

---

#### Desde consola

```bash
git checkout desarrollo
git pull origin desarrollo
git merge tarea-api-post
git push origin desarrollo
```

---

### 4.4 Manejo de Conflictos

#### Ejemplo

Cuando dos personas modifican la misma línea:

```
<<<<<<< HEAD
código A
=======
código B
>>>>>>> rama
```

---

#### Resolución

1. Editar manualmente el archivo
2. Guardar cambios
3. Ejecutar:

```bash
git add main.py
git commit -m "fix: resolver conflicto en API"
```

---

### 4.5 Versionado y Releases

#### Versionado Semántico

* `v0.1.0` → Primera versión funcional
* `v1.0.0` → Versión estable

---

#### Releases

Se publican desde GitHub para generar versiones descargables del proyecto.

---

## 5. Guía para Colaboradores

### Flujo de Trabajo

```bash
git clone <repo>
git checkout desarrollo
git checkout -b tarea-tu-nombre
```

Trabajar → Commit → Push → Pull Request

---

## 5.2 Instalación y Ejecución

### Instalar dependencias

```bash
pip install -r requirements.txt
```

---

### Ejecutar servidor

```bash
uvicorn main:app --reload
```

---

### Acceder en navegador

```
http://127.0.0.1:8000
```

---

## 6. Docker (Opcional)

### Construir imagen

```bash
docker build -t sistema-matriculas .
```

---

### Ejecutar contenedor

```bash
docker run -p 8000:8000 sistema-matriculas
```

---

## 7. Conclusiones

### 7.1 Lecciones Aprendidas

* Importancia del trabajo colaborativo
* Uso eficiente de Git como herramienta de coordinación
* Resolución de conflictos como aprendizaje clave

---

### 7.2 Mejoras Futuras

* Implementar CI/CD con GitHub Actions
* Separar frontend y backend (arquitectura escalable)
* Agregar autenticación de usuarios
* Integrar base de datos real (PostgreSQL o MySQL)

---

## Autor(es)

* Davila Castillo, Mateo - U23203172
* Flores Rivera Gian Moises -U222320340
* ...
* ...
* ...
* ...

---
