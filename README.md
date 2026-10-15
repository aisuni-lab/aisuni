# AISUNI — Archivo Activo | Sistemas Generativos & Artes Visuales

Sitio web responsivo y archivo digital interactivo para el laboratorio de investigación en artes visuales y sistemas generativos **AISUNI**.

Diseñado con una arquitectura editorial minimalista, tipografía de alta precisión y experiencia interactiva lista para publicarse en **GitHub Pages** de manera instantánea.

---

## ✷ Características Principales

1. **Estructura Desktop (Escritorio)**:
   - **Índice Typographical con Vista Previa Flotante**: Al pasar el ratón (*hover*) sobre cualquier fila de proyecto o del archivo activo, una tarjeta visual con la obra y metadatos sigue fluidamente el cursor (*mouse follower*).
   - **Archivo Activo Conectado**: Las 12 piezas de investigación del archivo están completamente conectadas a la base de datos interactiva, permitiendo inspeccionar fichas completas, metodología y procesos algorítmicos.
   - **Selector de Modo de Vista**: Alterna con 1 clic entre modo lista editorial y cuadrícula visual (*Grid Gallery*), sincronizado tanto para proyectos como para el archivo.
   - **Filtros por Taxonomía Algorítmica**: Filtros inmediatos por las 8 categorías del estudio:
     - *Sistemas*
     - *Algoritmos*
     - *Tipografía*
     - *Simulación*
     - *Collage*
     - *Patrones*
     - *Procesos*
     - *Interfaces*
   - **Modal de Detalle Completo (*Slide-Over / Lightbox*)**: Muestra visualizaciones de alta fidelidad, metadatos estructurados (Cliente/Ámbito, Año, Categoría, Herramientas) y pestañas narrativas editoriales (*Concepto & Enfoque* vs *Proceso & Algoritmo*). Soporta navegación por teclado (`←`, `→`, `Esc`).

2. **Estructura Móvil (Responsive Touch)**:
   - Diseño adaptable de una sola columna optimizado para pantallas táctiles (sin desbordamientos horizontales).
   - Al tocar cualquier proyecto o pieza de archivo, se despliega la información contextual con enlace directo a la ficha completa.
   - Navegación táctil fluida con tiempos de respuesta instantáneos.

3. **Diseño Visual Editorial**:
   - Selector de modo Oscuro / Claro (*Dark Mode* / *Light Mode*) con persistencia en `localStorage`.
   - Reloj digital en vivo sincronizado con el huso horario de Barcelona.
   - Secciones completas: **Proyectos**, **Archivo Activo**, **Información / Manifiesto**, y **Contacto directo con botón de copia de email en 1 clic**.

---

## 🚀 Despliegue en GitHub Pages (en 2 minutos)

No se requiere instalar Node.js ni compilar dependencias. Todo funciona con estándares web puros.

### Paso 1: Crear el repositorio en GitHub
1. Inicia sesión en [GitHub](https://github.com/) y crea un nuevo repositorio público (ej. `aisuni` o `<tu-usuario>.github.io`).

### Paso 2: Subir los archivos
Sube todos los archivos de esta carpeta al repositorio:
- `index.html`
- `style.css`
- `data.js`
- Carpeta `assets/` (con todas las imágenes en alta resolución)
- `README.md`

### Paso 3: Activar GitHub Pages
1. En tu repositorio, entra a **Settings > Pages**.
2. En *Build and deployment*, selecciona `Deploy from a branch`, rama `main` (o `master`) y carpeta `/ (root)`.
3. Haz clic en **Save**. En un minuto tu sitio estará online.

---

## 📁 Estructura de Archivos

```
├── index.html         # Archivo web principal (HTML5 + Tailwind CSS + JS interactivo)
├── style.css          # Estilos complementarios y transiciones de cursor
├── data.js            # Base de datos modular de proyectos y archivo
├── README.md          # Documentación del proyecto y despliegue
└── assets/            # Directorio de fotografías, tramas y simulaciones visuales
    ├── 01-give-it-a-shape.jpg
    ├── 02-2640-tangerine.jpg
    ├── 03-painting-with-sound.jpg
    ├── 04-oldest-tree.jpg
    ├── 05-elso-typeface.jpg
    ├── 06-mundano-oracle.jpg
    ├── 07-interfaces-hud.jpg
    ├── 08-simulation-fluid.jpg
    ├── 09-typographic-matrix.jpg
    └── 10-parametric-lattice.jpg
```
