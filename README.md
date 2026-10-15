# Nebulosa Picante — Minimalist Responsive Portfolio

Sitio web responsivo de alta gama para portafolio de diseño y dirección de arte, inspirado en la estructura y despliegue visual de **[nebulosapicante.com](https://nebulosapicante.com/)**.

Diseñado para publicarse en **GitHub Pages** de manera instantánea y gratuita, con actualización sencilla de proyectos y fotografías sin necesidad de compilar o instalar dependencias de Node.js.

---

## ✷ Características Principales

1. **Estructura Desktop (Escritorio)**:
   - **Lista Typographical / Índice con Vista Previa Flotante**: Al pasar el ratón (*hover*) sobre cualquier fila de proyecto, una tarjeta visual con la fotografía de alta resolución sigue suavemente el cursor (*mouse follower*), revelando la obra instantáneamente.
   - **Selector de Modo de Vista**: Alterna con 1 clic entre modo lista editorial y modo cuadrícula visual (*Grid Gallery*).
   - **Filtros por Disciplina y Buscador en Vivo**: Filtra al instante por *Data Viz*, *Pictogramas*, *Tipografía*, *Ilustración*, *Producto* o búsqueda por texto.
   - **Modal de Detalle Completo (*Slide-Over / Lightbox*)**: Muestra la fotografía a gran escala, metadatos estructurados (Cliente, Año, Disciplina, Herramientas), y pestañas narrativas editoriales (*Concepto* vs *Proceso*). Incluye navegación por teclado (`←`, `→`, `Esc`).

2. **Estructura Móvil (Responsive Touch)**:
   - Diseño colapsable de una sola columna optimizado para pantallas táctiles (sin desbordamientos horizontales).
   - Al tocar cualquier proyecto, se expande la información contextual con enlace directo al modal de pantalla completa táctil.
   - Tipografía adaptada con objetivos táctiles cómodos (mínimo 44px) y navegación rápida fija.

3. **Diseño Visual Editorial**:
   - Selector de modo Oscuro / Claro (*Dark Mode* / *Light Mode*) con memoria en `localStorage`.
   - Reloj digital en vivo sincronizado con el huso horario del estudio (Barcelona).
   - Secciones completas: **Proyectos**, **Archivo de exploraciones (12 ítems)**, **Información / Biografía**, y **Contacto directo con copia de email en 1 clic**.

---

## 🚀 Cómo Publicar en GitHub Pages (en 2 minutos)

No necesitas instalar Node.js, Webpack ni dependencias. Todo funciona con estándares web puros.

### Paso 1: Crear el repositorio en GitHub
1. Inicia sesión en [GitHub](https://github.com/) y haz clic en **New repository** (o visita [github.com/new](https://github.com/new)).
2. Asigna un nombre al repositorio, por ejemplo: `portfolio` (o `<tu-usuario>.github.io` si quieres que sea tu web principal).
3. Asegúrate de marcarlo como **Public** y haz clic en **Create repository**.

### Paso 2: Subir los archivos
Sube todos los archivos de esta carpeta al repositorio:
- `index.html`
- Carpeta `assets/` (con todas las imágenes)
- `README.md`

*(Puedes arrastrarlos directamente desde la web de GitHub en "Upload files" o usar `git clone` / `git push` desde tu terminal).*

### Paso 3: Activar GitHub Pages
1. En tu repositorio de GitHub, haz clic en la pestaña **Settings** (Configuración).
2. En el menú lateral izquierdo, haz clic en **Pages**.
3. En la sección **Build and deployment**:
   - **Source**: Selecciona `Deploy from a branch`.
   - **Branch**: Selecciona `main` (o `master`) y la carpeta `/ (root)`.
   - Haz clic en **Save**.
4. Espera 1 minuto y recarga la página: verás un banner verde con tu enlace publicado:
   `https://<tu-usuario>.github.io/portfolio/`

---

## ✏️ Cómo Actualizar Proyectos y Fotografías Fácilmente

Para añadir un nuevo proyecto o cambiar los existentes, no tienes que tocar código complejo:

1. **Sube tu nueva fotografía** a la carpeta `assets/` (por ejemplo: `assets/mi-proyecto.jpg`).
2. Abre el archivo `index.html` (puedes editarlo directamente en GitHub presionando la tecla `.` o el icono del lápiz ✏️).
3. Busca la sección `const PROJECTS = [...]` (alrededor de la línea 320) y agrega o modifica el bloque:

```javascript
{
  id: "mi-nuevo-trabajo",
  num: "07",
  title: "Nombre del Proyecto",
  category: "Data viz",
  categoryTag: "Visualización de Datos",
  year: "2026",
  client: "Nombre del Cliente",
  image: "assets/mi-proyecto.jpg",
  tools: "Illustrator, Processing",
  concept: "Escribe aquí la explicación conceptual de tu obra...",
  process: "Explica aquí tu metodología, materiales o bocetos...",
  featured: true
}
```

4. Haz clic en **Commit changes**. En cuestión de segundos, tu web en GitHub Pages se actualizará automáticamente con el nuevo proyecto, su vista previa flotante y su modal interactivo.

---

## 📁 Estructura de Archivos

```
├── index.html         # Archivo web principal (HTML5 + Tailwind CSS + JS)
├── README.md          # Esta guía de uso y despliegue
└── assets/            # Directorio de fotografías e ilustraciones
    ├── 01-give-it-a-shape.jpg
    ├── 02-2640-tangerine.jpg
    ├── 03-painting-with-sound.jpg
    ├── 04-oldest-tree.jpg
    ├── 05-elso-typeface.jpg
    └── 06-mundano-oracle.jpg
```
