# AISUNI ✷ — Portafolio y Archivo Digital

Sitio web editorial y archivo digital interactivo para **AISUNI**, estudio de investigación en artes visuales y sistemas generativos. Diseñado con arquitectura de contenido desacoplada en archivos Markdown para despliegue directo en **GitHub Pages** (con Jekyll nativo) y soporte de actualización local sin dependencias.

---

## 1. Estructura del Repositorio

```text
aisuni-github-pages/
├── _config.yml          # Configuración de Jekyll con timezone America/New_York
├── index.html           # Interfaz editorial con reloj de NY y modal de alta resolución
├── data.json            # Endpoint JSON de proyectos y archivo activo
├── sync_markdown.py     # Script de sincronización automática tras editar cualquier .md
├── build_site.py        # Alias del script de sincronización local
├── _proyectos/          # 8 Obras comisionadas principales (.md)
│   ├── 01-topologias-de-movilidad.md
│   ├── 02-arquitectura-conectividad-giga.md
│   └── ...
├── _archivo/            # 6 Piezas de investigación activa (.md)
│   ├── arc-01-palabras-cifradas.md
│   ├── arc-02-framora-system.md
│   └── ...
└── assets/              # Fotografías e imágenes vectoriales (.jpg, .svg)
```

---

## 2. Cómo Actualizar o Añadir Obras (.md)

Cada proyecto y pieza de archivo se gestiona de forma 100% independiente en su archivo `.md`.

### Opción A — Despliegue en GitHub Pages:
1. Edita o añade cualquier archivo `.md` en `_proyectos/` o `_archivo/`.
2. Sube tus cambios a GitHub (`git commit` y `git push`).
3. GitHub Pages sirve el contenido actualizado. Al recargar el sitio web, las modificaciones aparecerán al instante.

### Opción B — Trabajo Local (Sin Jekyll):
Si estás editando los archivos `.md` en tu computadora localmente:
1. Modifica o crea los archivos `.md`.
2. Ejecuta en la terminal:
   ```bash
   python3 sync_markdown.py
   ```
3. El script leerá todos los archivos `.md`, regenerará `data.json` y actualizará `index.html` inmediatamente.

---

## 3. Formato Estándar de Archivo Markdown (.md)

```markdown
---
id: "identificador-obra"
num: "09"
title: "Título de la Obra"
category: "Algoritmos"
categoryTag: "Algoritmos & Simulación"
year: "2026"
client: "Cliente o Ámbito"
image: "assets/foto-portada.jpg"
gallery:
  - "assets/foto-portada.jpg"
  - "assets/foto-detalle.svg"
  - "assets/foto-proceso.svg"
tools: "Python, GLSL Shaders, WebGL"
status: "Comisionado · Publicado"
concepto: "Texto descriptivo del concepto y contexto..."
proceso: "Metodología, fórmulas y algoritmos utilizados..."
---

## Concepto
Texto descriptivo del concepto...

## Proceso
Metodología y algoritmos...
```

### Disciplinas oficiales:
- `Sistemas`
- `Algoritmos`
- `Tipografía`
- `Simulación`
- `Collage`
- `Patrones`
- `Procesos`
- `Interfaces`
