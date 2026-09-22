# Taller Integrador Cortes 1 y 2
**Nombre:** Samuel Barrios Romero
**Grupo:**

## Auditoría del Código

| Defecto encontrado | Por qué era un problema | Cómo lo corrigió |
| :--- | :--- | :--- |
| Nombres de archivos con espacios y mayúsculas (`Mi Pagina De Notas.HTML`, `Estilos Del Sitio.CSS`) | Dificulta la compatibilidad y no sigue convenciones. | Se renombraron a `index.html` y `styles.css`. |
| Título de la pestaña poco descriptivo | No aporta información útil al usuario ni a los motores de búsqueda (SEO). | Se cambió a `<title>Calculadora de Promedio de Notas</title>`. |
| Estructura HTML no semántica (uso de `<div class="cont1">`) | Dificulta la accesibilidad para lectores de pantalla y perjudica el SEO. | Se reemplazó por etiquetas semánticas como `<main>` y `<section>`. |
| Identificadores (IDs) muy cortos (`n1`, `r2`) | Hace que el código sea difícil de leer y mantener. | Se cambiaron a IDs descriptivos (`nota1`, `resultado-promedio`). |
| Código JavaScript mezclado en el HTML | Viola el principio de separación de responsabilidades. | Se extrajo el código a un archivo externo `script.js`. |
| Variables globales y cortas en JS (`data1`, `TempValue2`, `x`, `a`) | Contaminan el ámbito global; los nombres obligan a leer todo el código para entenderlo. | Se eliminó `data1`. Se renombraron a `promedio`, `cantidadNotas`, `valorNota1`. |
| Nombre de función poco descriptivo (`calc()`) | No indica claramente qué acción realiza. | Se renombró a `calcularPromedio()`. |
| Código comentado y `console.log` innecesarios | Ensucia el código y aumenta el peso del archivo. | Se eliminaron la función comentada y los `console.log`. |

## Enlace al sitio publicado
https://jolly-peony-362261.netlify.app 
