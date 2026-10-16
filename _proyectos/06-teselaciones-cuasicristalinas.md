---
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

`x(n) = ∑_{k=0}^{4} e_k · ⌊n · e_k + γ_k⌋`
`θ_k = 2πk / 5, \quad γ_k \in [0, 1)`

Los archivos generados se optimizan topológicamente con la librería *vpype* para minimizar las trayectorias de pluma levantada antes de ser trazados físicamente con plumillas técnicas de 0.2 mm sobre papel japonés Awagami de 90 g/m².
