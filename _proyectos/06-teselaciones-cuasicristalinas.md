---
id: "teselaciones-cuasicristalinas"
num: "06"
title: "Give It a Shape — Patrones Aperiódicos y Geometría Cuasicristalina"
category: "Patrones"
categoryTag: "Patrones Matemáticos & Plotter"
year: "2025"
client: "Exposición Arteria & Colección Privada"
image: "assets/obra-06-patrones-portada.svg"
gallery:
  - "assets/obra-06-patrones-portada.svg"
  - "assets/obra-06-patrones-detalle.svg"
  - "assets/obra-06-patrones-proceso.svg"
tools: "Python, Shapely, vpype, Plotter AxiDraw V3"
status: "Obra Física & Digital"
---

## Concepto
Inspirada en la belleza silenciosa de las ecuaciones matemáticas y las teselaciones de Roger Penrose, esta investigación traduce sistemas algebraicos de simetría prohibida (órdenes rotacionales 5, 8 y 12) en grabados vectoriales de orden hipnótico.

Cada composición explora la paradoja del orden sin repetición periódica: el ojo humano percibe una estructura rigurosa y familiar, pero al recorrer el plano descubre que ninguna sub-región se repite jamás de manera idéntica.

## Proceso
Se implementó el método de multigrid dual de Nicolaas Govert de Bruijn en Python, proyectando retículas hiperdimensionales de 5 dimensiones sobre un subespacio euclidiano bidimensional:

`x_∥ = ∑_{j=0}^{4} k_j · (cos(2πj/5), sin(2πj/5))`

Las trayectorias resultantes se optimizan topológicamente mediante el algoritmo de relajación de Lloyd y `vpype` para minimizar los levantamientos de pluma antes de su trazado físico con tinta pigmentada sobre papel de algodón de 300 g/m².
