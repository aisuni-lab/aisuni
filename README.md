# AISUNI ✷ — Portafolio y Archivo Activo (Arquitectura Escalable `.md`)

Sitio web editorial suizo e índice interactivo para **AISUNI**, diseñado para escalar a decenas o cientos de proyectos y piezas de archivo mediante archivos `.md` independientes.

---

## ¿Qué se corrigió y mejoró en esta versión v3.0?

1. **Eliminación definitiva de `--- layout: null ---` en `index.html`**:
   - `index.html` comienza en la línea 1 directamente con `<!DOCTYPE html>` (100% HTML5 puro), por lo que jamás mostrará `--- layout: null ---` en la parte superior de la página, sin importar si usas GitHub Pages con o sin Jekyll, Live Server o cualquier hosting estático.
2. **Solución al problema de archivos `.md` nuevos que aparecían solo a veces**:
   - **Fin de colisiones de ID al duplicar archivos**: Antes, cuando copiabas un archivo `.md` existente para crear uno nuevo y quedaba el mismo `id: "..."` dentro del archivo, las descargas en paralelo sobreescribían un proyecto con otro aleatoriamente. Ahora hemos eliminado el campo `id` de las plantillas y el sistema identifica cada obra estrictamente por el **nombre de su archivo** (`09-nueva-obra.md`).
   - **Auto-numeración inteligente desde el nombre del archivo**: Si nombras tu archivo `09-mi-obra.md` o `15-experimento.md` (o `arc-07-pieza.md`), el sistema toma automáticamente el número `09`, `15` o `ARC-07` del nombre del archivo, incluso si olvidaste cambiar `num:` dentro del YAML.
   - **Árbol Git en 1 sola petición + Caché por SHA y ETag + `manifest.json`**: Antes se hacían 8 peticiones sin caché a `api.github.com` en cada recarga, agotando el límite de 60 peticiones/hora de GitHub en 7 recargas. Ahora usa una única consulta con validación `ETag` (que no consume cuota en GitHub), guarda en caché cada archivo `.md` por su hash `SHA` de Git y descarga instantáneamente solo los archivos nuevos o modificados.
3. **Escalabilidad para muchos proyectos en el futuro**:
   - Se incorporó un **buscador en tiempo real** (`Buscar obra, año, cliente...`) en la cinta de filtros y un botón de **resincronización instantánea (`↻`)** en la insignia `Archivo Activo` del encabezado.
   - Incluye el flujo automático `.github/workflows/auto-sync-md.yml` y el script `actualizar_sitio.py` que mantienen `manifest.json` sincronizado al hacer push en GitHub.

---

## Cómo Agregar o Actualizar Proyectos y Archivos `.md`

Solo crea o edita un archivo `.md` dentro de `_proyectos/` o `_archivo/`. Puedes duplicar cualquier archivo `.md` existente y cambiar su nombre (por ejemplo `_proyectos/09-mi-nuevo-proyecto.md`):

```markdown
---
num: "09"
title: "Nombre de Mi Nuevo Proyecto"
category: "Algoritmos"
categoryTag: "Algoritmos & Visualización"
year: "2026"
client: "Cliente o Estudio"
image: "assets/obra-01-flujos-portada.jpg"
gallery:
  - "assets/obra-01-flujos-portada.jpg"
  - "assets/obra-01-flujos-detalle.svg"
tools: "Python, GLSL, Processing"
status: "Comisionado · Publicado"
---

## Concepto
Escribe aquí los párrafos de concepto y enfoque de la obra...

## Proceso
Escribe aquí el proceso técnico, metodología o fórmulas entre backticks...
```

*(Nota: Incluso si creas un archivo `.md` rápido sin bloque `---`, o solo con `title` y texto libre, el motor lo detectará, le asignará número correlativo automático y generará su portada vectorial suiza).*
