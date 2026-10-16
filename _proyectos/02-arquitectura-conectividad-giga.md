---
id: "arquitectura-conectividad-giga"
num: "02"
title: "Giga Atlas — Sistema Editorial y Retícula de Conectividad"
category: "Sistemas"
categoryTag: "Sistemas Visuales & Diseño Editorial"
year: "2026"
client: "UNICEF Office of Innovation & ITU"
image: "assets/obra-02-sistemas-portada.jpg"
gallery:
  - "assets/obra-02-sistemas-portada.jpg"
  - "assets/obra-02-sistemas-detalle.svg"
  - "assets/obra-02-sistemas-proceso.svg"
tools: "Python, DrawBot, OpenType, SVG Paramétrico"
status: "Sistema en Producción"
concepto: "Diseño de un lenguaje gráfico modular y sistema editorial automatizado para la iniciativa global Giga (UNICEF + Unión Internacional de Telecomunicaciones), orientada a mapear la conectividad escolar en tiempo real en más de 140 países.

Inspirado en la Escuela de Basilea y el diseño editorial suizo de Karl Gerstner, el sistema transforma indicadores estadísticos complejos —latencia satelital, cobertura de fibra óptica y topografía rural— en una familia de pictogramas geométricos y composiciones modulares que comunican antes de ser leídas."
proceso: "Se programó una gramática de formas (*Shape Grammar*) en Python y DrawBot que subdivide una retícula canónica de 12×8 módulos según los cuartiles de conectividad de cada región:

`Grid(m, n) → Subdivide(Q_latency, Q_bandwidth, θ_terrain)`
`Ratio_canónico = 1 : √2 (ISO 216) · Unidad base = 6pt`

El script compila automáticamente cientos de gráficos vectoriales listos para imprenta offset y visualización web interactiva, garantizando coherencia tipográfica absoluta entre los informes anuales y el pódcast *Connectivity Cast*."
---

## Concepto
Diseño de un lenguaje gráfico modular y sistema editorial automatizado para la iniciativa global Giga (UNICEF + Unión Internacional de Telecomunicaciones), orientada a mapear la conectividad escolar en tiempo real en más de 140 países.

Inspirado en la Escuela de Basilea y el diseño editorial suizo de Karl Gerstner, el sistema transforma indicadores estadísticos complejos —latencia satelital, cobertura de fibra óptica y topografía rural— en una familia de pictogramas geométricos y composiciones modulares que comunican antes de ser leídas.

## Proceso
Se programó una gramática de formas (*Shape Grammar*) en Python y DrawBot que subdivide una retícula canónica de 12×8 módulos según los cuartiles de conectividad de cada región:

`Grid(m, n) → Subdivide(Q_latency, Q_bandwidth, θ_terrain)`
`Ratio_canónico = 1 : √2 (ISO 216) · Unidad base = 6pt`

El script compila automáticamente cientos de gráficos vectoriales listos para imprenta offset y visualización web interactiva, garantizando coherencia tipográfica absoluta entre los informes anuales y el pódcast *Connectivity Cast*.
