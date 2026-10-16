# AISUNI ✷ — Portafolio y Archivo Digital Interactivo

Sitio web editorial suizo y archivo digital interactivo para **AISUNI**, estudio de investigación en artes visuales y sistemas generativos. Diseñado con arquitectura de contenido **100% desacoplada en archivos Markdown** para despliegue directo y gratuito en **GitHub Pages** (con Jekyll nativo).

---

## 1. Estructura del Proyecto

```text
aisuni-github-pages/
├── _config.yml          # Configuración de Jekyll y definición de colecciones
├── index.html           # Interfaz editorial continua (con soporte fetch + fallback local)
├── data.json            # Plantilla Liquid compilada automáticamente por GitHub Pages
├── _proyectos/          # Archivos Markdown (.md) de obras principales
│   ├── 01-topologias-de-movilidad.md
│   ├── 02-arquitectura-conectividad-giga.md
│   └── ...
├── _archivo/            # Archivos Markdown (.md) del Archivo Activo de investigación
│   ├── arc-01-palabras-cifradas.md
│   ├── arc-02-framora-system.md
│   └── ...
└── assets/              # Fotografías (.jpg, .png, .webp) y láminas vectoriales (.svg)
```

---

## 2. Cómo Publicar o Actualizar Obras (Sin tocar HTML)

Para añadir un nuevo proyecto o pieza de archivo, **nunca necesitas editar `index.html`**:

1. Sube tus imágenes de portada, detalle y proceso a la carpeta `assets/` (por ejemplo: `assets/nueva-obra-portada.jpg`).
2. Crea un nuevo archivo `.md` dentro de `_proyectos/` (para obras destacadas) o dentro de `_archivo/` (para piezas de investigación).
3. Usa el siguiente formato estándar con Frontmatter YAML y secciones `## Concepto` y `## Proceso`:

```markdown
---
id: "identificador-slug"
num: "09"
title: "Título de la Obra"
category: "Algoritmos"
categoryTag: "Algoritmos & Simulación"
year: "2026"
client: "Cliente o Ámbito"
image: "assets/foto-portada.jpg"
gallery:
  - "assets/foto-portada.jpg"
  - "assets/foto-detalle.jpg"
  - "assets/foto-proceso.jpg"
tools: "Python, GLSL, Processing"
status: "Investigación activa"
---

## Concepto
Texto descriptivo del concepto, contexto institucional y marco teórico de la pieza...

## Proceso
Metodología, fórmulas matemáticas o algoritmos utilizados. Puedes incluir bloques de código en línea con acentos graves (`fórmula`) para que se muestren con formato técnico monospace.
```

### Categorías oficiales soportadas por la Cinta de Filtros:
- `Sistemas`
- `Algoritmos`
- `Tipografía`
- `Simulación`
- `Collage`
- `Patrones`
- `Procesos`
- `Interfaces`

---

## 3. Despliegue en GitHub Pages

1. Crea un repositorio en GitHub (por ejemplo `aisuni.github.io` o `portfolio`).
2. Sube todos los archivos de esta carpeta a la rama `main`.
3. En tu repositorio de GitHub, ve a **Settings → Pages**, selecciona **Deploy from a branch** (`main` / `/(root)`) y guarda.
4. GitHub Pages compilará automáticamente `_proyectos/` y `_archivo/` dentro de `data.json` mediante Jekyll, y `index.html` los renderizará dinámicamente.
