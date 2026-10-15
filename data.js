// =========================================================================
// NEBULOSA PICANTE - ARCHIVO DE DATOS FÁCILMENTE EDITABLE PARA GITHUB
// =========================================================================
const PROJECTS = [
  {
    id: "give-it-a-shape",
    num: "01",
    title: "Give it a shape",
    category: "Pictograms",
    categoryTag: "Pictograms & Glyphs",
    year: "2026",
    client: "Exhibición Art Number 23 (Barcelona)",
    image: "assets/01-give-it-a-shape.jpg",
    tools: "Rhinoceros, Illustrator, Processing",
    concept: "Serie gráfica inspirada en frases cotidianas y representaciones de ecuaciones matemáticas. Traduce conceptos tangibles y abstractos en un sistema visual de glifos geométricos de alto contraste.",
    process: "El proceso inicia con una frase fundacional y un mapa mental que conecta términos concretos con conceptos abstractos. Se sintetiza en Rhinoceros e Illustrator, proyectando sombras intrincadas.",
    featured: true
  },
  {
    id: "2640-segments",
    num: "02",
    title: "2640 Tangerine segments",
    category: "Data viz",
    categoryTag: "Visualización de Datos",
    year: "2026",
    client: "Information Aesthetics Lab",
    image: "assets/02-2640-tangerine.jpg",
    tools: "D3.js, Processing, Illustrator",
    concept: "Visualización de datos radial que descompone 2.640 segmentos cítricos analizando la simetría botánica, densidad de datos y ritmos geométricos.",
    process: "Algoritmos de distribución concéntrica y segmentación polar que representan densidades de pulpa y distribución espacial.",
    featured: true
  },
  {
    id: "painting-with-sound",
    num: "03",
    title: "Painting with sound",
    category: "Sound viz",
    categoryTag: "Visualización Acústica",
    year: "2025 - 2026",
    client: "Sottotraccia Festival / Sofiane Pamart",
    image: "assets/03-painting-with-sound.jpg",
    tools: "Processing, GLSL Shaders, After Effects",
    concept: "Investigación visual donde las frecuencias acústicas de piano neoclásico se traducen en ondulaciones vectoriales espectrales sobre fondo negro mate.",
    process: "Análisis FFT de armónicos en tiempo real con modelado de ondas continuas.",
    featured: true
  },
  {
    id: "the-oldest-tree",
    num: "04",
    title: "The oldest tree in the world",
    category: "Illustration",
    categoryTag: "Ilustración Editorial",
    year: "2025",
    client: "Publicación Cosmos & Botanics",
    image: "assets/04-oldest-tree.jpg",
    tools: "Dibujo vectorial, Grafito digital, InDesign",
    concept: "Estudio dendrocronológico convertido en lenguaje gráfico arquitectónico. Anillos concéntricos convertidos en cartografía microscópica.",
    process: "Composición basada en cortes transversales botánicos combinados con cuadrículas ortogonales rigurosas.",
    featured: true
  },
  {
    id: "elso-typeface",
    num: "05",
    title: "Elso typeface & brand",
    category: "Typeface",
    categoryTag: "Tipografía Experimental",
    year: "2025",
    client: "Flexible Visual Systems Workshop",
    image: "assets/05-elso-typeface.jpg",
    tools: "Glyphs, Illustrator, Rhinoceros",
    concept: "Sistema tipográfico modular e identidad experimental basada en cuadrículas isométricas y cortes diagonales estructurales.",
    process: "Matriz de 16x16 módulos para establecer ligaduras, diagonales y variantes estilísticas.",
    featured: true
  },
  {
    id: "mundano-oracle",
    num: "06",
    title: "Mundano oracle & sigils",
    category: "Product",
    categoryTag: "Producto & Sigilos",
    year: "2024 - 2025",
    client: "Ediciones Mundano",
    image: "assets/06-mundano-oracle.jpg",
    tools: "Grabado vectorial, Hot stamping, Illustrator",
    concept: "Diseño de baraja de oráculo de 48 cartas basada en geometría cósmica, líneas de constelaciones y simbología mística minimalista.",
    process: "Catalogación de 48 arquetipos universales mediante un lenguaje de geometría sagrada despojada de ornamentos superfluos.",
    featured: true
  }
];

const ARCHIVE = [
  { num: "01", title: "Encrypted words", tag: "Sigils & Tattoos", year: "2026", client: "Encargos personales" },
  { num: "02", title: "Metalinguistic graphic", tag: "Generative Art", year: "2026", client: "Exploración autónoma" },
  { num: "03", title: "Framora visual system", tag: "Illustration System", year: "2025", client: "Flexible Visual Systems" },
  { num: "04", title: "Entrelazo patterns", tag: "Abstract Illustration", year: "2025", client: "Estudio textil" },
  { num: "05", title: "Basidra editorial", tag: "Editorial Design", year: "2025", client: "Revista cultural" },
  { num: "06", title: "Hoodie apparel graphic", tag: "Merchandising", year: "2025", client: "Streetwear Barcelona" },
  { num: "07", title: "Cryptocurrency infographics", tag: "Data Viz", year: "2024", client: "Fintech Platform" },
  { num: "08", title: "Bancolombia internal workflow", tag: "System Design", year: "2024", client: "Bancolombia" },
  { num: "09", title: "Huellitas educational notebooks", tag: "Editorial Illustration", year: "2024", client: "Editorial Scribe" },
  { num: "10", title: "UNICEF Giga annual report", tag: "Editorial Design", year: "2024", client: "UNICEF Giga" },
  { num: "11", title: "Connectivity Cast podcast identity", tag: "Brand Identity", year: "2024", client: "UNICEF Digital" },
  { num: "12", title: "MIT Safety perception map", tag: "Animated Infographic", year: "2023", client: "MIT Media Lab" }
];
