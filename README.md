# AISUNI — Archivo Activo | Sistemas Generativos & Artes Visuales

Arquitectura modular para portafolio y archivo digital basada en **Markdown + GitHub Pages**, inspirada en el diseño tipográfico y editorial de alta gama de **nebulosapicante.com**.

El contenido está **100% desacoplado del código HTML**: para crear, editar o eliminar proyectos y piezas del archivo, **nunca necesitas tocar `index.html`**. Solo editas archivos Markdown simples y subes tus fotos a `assets/`.

---

## 🚀 Cómo Actualizar el Sitio en 2 Minutos

### 1. Para agregar un nuevo Proyecto Destacado:
1. Ve a la carpeta `assets/`, haz clic en **Add file > Upload files** y arrastra tu fotografía (ej. `09-nuevo-trabajo.jpg`).
2. Ve a la carpeta `_proyectos/`, haz clic en **Add file > Create new file** y nómbralo `09-nuevo-trabajo.md`.
3. Pega esta plantilla y completa los datos:

```markdown
---
id: "nuevo-trabajo"
num: "09"
title: "Título de la Obra"
category: "Algoritmos"
categoryTag: "Algoritmos & Simulación"
year: "2026"
client: "Nombre del Cliente o Convocatoria"
image: "assets/09-nuevo-trabajo.jpg"
tools: "Python, GLSL, Processing"
---

## Concepto
Escribe aquí la explicación conceptual de tu obra...

## Proceso
Escribe aquí la metodología, herramientas o algoritmos utilizados...
```

4. Haz clic en **Commit changes**. En menos de 60 segundos tu web en GitHub Pages se actualizará automáticamente con la nueva obra, su ficha completa, sus filtros y su vista previa flotante.

---

### 2. Para agregar una pieza al Archivo:
1. Sube tu foto a `assets/`.
2. Crea un archivo en `_archivo/` (ej. `13-nueva-exploracion.md`) con este formato:

```markdown
---
id: "arch-13"
num: "A-13"
title: "Nombre de la Exploración"
category: "Patrones"
categoryTag: "Patrones Generativos"
year: "2026"
client: "Estudio Autónomo"
image: "assets/13-foto.jpg"
tools: "Processing, Axidraw"
status: "Investigación activa"
---

## Concepto
Descripción de la exploración...

## Proceso
Detalles del proceso técnico...
```

---

### 3. Las 8 Categorías de Filtro Oficiales
Puedes asignar cualquiera de estas categorías en el campo `category`:
* `Sistemas`
* `Algoritmos`
* `Tipografía`
* `Simulación`
* `Collage`
* `Patrones`
* `Procesos`
* `Interfaces`

---

## 📁 Estructura del Repositorio

```
├── _config.yml         # Configuración nativa de GitHub Pages (Jekyll)
├── index.html          # Interfaz editorial minimalista y sistema reactivo
├── style.css           # Estilos complementarios y transiciones de cursor
├── data.json           # Índice de datos compilado para carga ultrarrápida
├── README.md           # Esta guía de uso
├── _proyectos/         # Un archivo Markdown (.md) por cada proyecto principal
│   ├── 01-give-it-a-shape.md
│   ├── 02-2640-tangerine-segments.md
│   └── ...
├── _archivo/           # Un archivo Markdown (.md) por cada pieza de archivo
│   ├── 01-encrypted-words.md
│   ├── 02-metalinguistic-graphic.md
│   └── ...
└── assets/             # Fotografías e imágenes en alta resolución
    ├── 01-give-it-a-shape.jpg
    └── ...
```

---

## 🌐 Despliegue en GitHub Pages

1. Crea tu repositorio en GitHub y sube todos los archivos descomprimidos.
2. Ve a **Settings > Pages**.
3. En **Source**, selecciona `Deploy from a branch`, rama `main` y carpeta `/ (root)`.
4. Haz clic en **Save**. ¡Listo!
