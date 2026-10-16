---
id: "morfogenesis-coralina"
num: "03"
title: "Morfogénesis Abisal — Simulación de Crecimiento Diferencial"
category: "Simulación"
categoryTag: "Simulación Biológica & Reacción-Difusión"
year: "2026"
client: "Instalación Comisionada · Sottotraccia"
image: "assets/obra-03-morfogenesis-portada.jpg"
gallery:
  - "assets/obra-03-morfogenesis-portada.jpg"
  - "assets/obra-03-morfogenesis-detalle.svg"
  - "assets/obra-03-morfogenesis-proceso.svg"
tools: "Houdini VEX, C++, CUDA, Redshift"
status: "Exposición Itinerante"
concepto: "Exploración escultórica digital sobre los mecanismos matemáticos que rigen el plegamiento biológico en arrecifes coralinos, líquenes y estructuras corticales. Siguiendo las ecuaciones morfogenéticas propuestas por Alan Turing en 1952, la pieza investiga cómo la competencia entre dos sustancias químicas (activador e inhibidor) engendra geometrías hiperbólicas de máxima superficie con mínimo volumen.

Las cavidades de obsidiana mate revelan luminiscencias internas en bermellón (`#FF5500`) y verde esmeralda (`#10B981`), funcionando como un indicador metabólico de la tensión superficial en la malla tridimensional."
proceso: "El núcleo computacional resuelve el sistema acoplado de ecuaciones diferenciales parciales de Gray-Scott sobre una malla geodésica adaptativa en Houdini VEX acelerada por GPU:

`∂u/∂t = D_u ∇²u - u·v² + F(1 - u)`
`∂v/∂t = D_v ∇²v + u·v² - (F + k)v`

Cuando la curvatura media `H` supera el umbral crítico (`F = 0.0545`, `k = 0.0620`), el algoritmo subdivide dinámicamente las aristas y aplica relajación por repulsión de radio corto, generando pliegues orgánicos libres de auto-intersección."
---

## Concepto
Exploración escultórica digital sobre los mecanismos matemáticos que rigen el plegamiento biológico en arrecifes coralinos, líquenes y estructuras corticales. Siguiendo las ecuaciones morfogenéticas propuestas por Alan Turing en 1952, la pieza investiga cómo la competencia entre dos sustancias químicas (activador e inhibidor) engendra geometrías hiperbólicas de máxima superficie con mínimo volumen.

Las cavidades de obsidiana mate revelan luminiscencias internas en bermellón (`#FF5500`) y verde esmeralda (`#10B981`), funcionando como un indicador metabólico de la tensión superficial en la malla tridimensional.

## Proceso
El núcleo computacional resuelve el sistema acoplado de ecuaciones diferenciales parciales de Gray-Scott sobre una malla geodésica adaptativa en Houdini VEX acelerada por GPU:

`∂u/∂t = D_u ∇²u - u·v² + F(1 - u)`
`∂v/∂t = D_v ∇²v + u·v² - (F + k)v`

Cuando la curvatura media `H` supera el umbral crítico (`F = 0.0545`, `k = 0.0620`), el algoritmo subdivide dinámicamente las aristas y aplica relajación por repulsión de radio corto, generando pliegues orgánicos libres de auto-intersección.
