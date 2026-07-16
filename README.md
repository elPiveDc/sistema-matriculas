# Demostración de Despliegue con GitHub Pages

Este proyecto incluye una demostración práctica de cómo realizar un despliegue web utilizando **GitHub Pages** a través de una rama específica independiente.

## Rama de Despliegue

Para fines de demostración, se ha creado una rama exclusiva para el despliegue automático. Esta rama está optimizada y **solo contiene los archivos básicos** necesarios para la producción:

- `index.html` (Estructura principal)
- `styles.css` (Estilos del sitio)
- `script.js` (Lógica y funcionalidad)

_Nota: Esta separación permite mostrar un entorno de producción limpio, ligero y de carga rápida sin archivos de configuración innecesarios._

## Flujo de Trabajo en Desarrollo

El desarrollo real y la construcción del código no se realizan en la rama de despliegue. Para ello, el proyecto sigue un flujo de trabajo estándar en las siguientes ramas:

- **`main` (Rama Principal):** Contiene el código estable, probado y listo para ser enviado a producción.
- **`developer` (Rama de Desarrollo):** Es la rama activa donde se integran las nuevas funciones, se realizan las pruebas y se trabaja en el día a día.
