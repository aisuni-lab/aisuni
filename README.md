# AISUNI ✷ — Portafolio y Archivo Digital (Edición Revisada Jekyll + Auto-Descubrimiento `.md`)

Sitio web editorial y archivo digital interactivo para **AISUNI**, diseñado con sincronización automática multicapa para **GitHub Pages (Jekyll)** y servidores locales.

---

## ¿Qué se corrigió y mejoró en esta versión?

1. **Corrección del error YAML en `_proyectos/06-teselaciones-cuasicristalinas.md`**:
   - La versión anterior tenía secuencias LaTeX (`\quad`, `\in`) dentro de cadenas con comillas dobles en el Front Matter YAML, lo que provocaba un error `Psych::SyntaxError` en Jekyll y abortaba silenciosamente la actualización en GitHub Pages.
   - Ahora los 14 archivos `.md` tienen un Front Matter YAML limpio y validado al 100%, manteniendo el texto largo y las fórmulas matemáticas exclusivamente en el cuerpo Markdown (`## Concepto` y `## Proceso`).
2. **Restauración de Plantillas Liquid Nativas en `index.html` y `data.json`**:
   - Tanto `index.html` (mediante `<script id="jekyll-collections-data" type="application/json">`) como `data.json` llevan cabecera `---\nlayout: null\n---` y bucles Liquid dinámicos (`site.proyectos` y `site.archivo`).
   - Eliminado `sort_by: num` de `_config.yml` para que Jekyll jamás falle si agregas un nuevo archivo `.md` sin especificar el campo `num`.
3. **Auto-Descubrimiento de Nuevos Archivos `.md` al Hacer Commit en GitHub**:
   - Cuando agregues cualquier nuevo archivo `.md` en `_proyectos/` (o `proyectos/`) o en `_archivo/` (o `archivo/`) y hagas commit en GitHub:
     - **Jekyll** lo compila e inyecta automáticamente en la página.
     - **Lector `.md` en vivo + GitHub API**: El navegador también detecta nuevos archivos `.md` directamente en las carpetas y mediante la API del repositorio, asignándoles número correlativo automático (`09`, `10`... o `ARC-07`, `ARC-08`...) y portada vectorial generativa si no especificaste imagen.
     - **GitHub Action incluido** (`.github/workflows/jekyll-auto-sync.yml`): Sincroniza también el respaldo de `index.html` automáticamente en cada push.

---

## Cómo Agregar un Nuevo Proyecto o Pieza de Archivo (`.md`)

1. Crea un archivo `.md` nuevo dentro de `_proyectos/` (ej. `_proyectos/09-mi-nueva-obra.md`) o dentro de `_archivo/` (ej. `_archivo/arc-07-experimento.md`).
2. Puedes usar el formato completo o un formato mínimo:

### Formato Completo Recomendado:
```markdown
---
id: "mi-nueva-obra"
num: "09"
title: "Título de Mi Nueva Obra"
category: "Algoritmos"
categoryTag: "Algoritmos & Simulación"
year: "2026"
client: "Cliente o Laboratorio"
image: "assets/obra-01-flujos-portada.jpg"
gallery:
  - "assets/obra-01-flujos-portada.jpg"
  - "assets/obra-01-flujos-detalle.svg"
tools: "Python, GLSL, TouchDesigner"
status: "Comisionado · Publicado"
---

## Concepto
Escribe aquí los párrafos de concepto y enfoque de la obra...

## Proceso
Escribe aquí el proceso técnico, metodología o fórmulas entre backticks...
```

### Formato Mínimo (Auto-numerado y con portada generativa automática):
```markdown
---
title: "Título Rápido de Prueba"
category: "Sistemas"
---

## Concepto
Descripción conceptual de la pieza...
```

3. Haz commit y push a GitHub (`git add . && git commit -m "Añadir nueva obra" && git push`). ¡El sitio web se actualizará automáticamente!
