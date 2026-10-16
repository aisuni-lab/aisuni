---
num: "04"
title: "Botánica Sintética — Collage Algorítmico y Fotogrametría"
category: "Collage"
categoryTag: "Collage Computacional & Fotogrametría"
year: "2025"
client: "Investigación Interna · Barcelona"
image: "assets/obra-04-herbario-portada.jpg"
gallery:
  - "assets/obra-04-herbario-portada.jpg"
  - "assets/obra-04-herbario-detalle.svg"
  - "assets/obra-04-herbario-proceso.svg"
tools: "OpenCV, Python, TouchDesigner, Escáner LiDAR"
status: "Serie Numerada · Archivo"
---

## Concepto
Diálogo visual entre la fragilidad orgánica de especímenes botánicos recolectados en la cuenca mediterránea y la rigidez analítica de la visión artificial. La serie ensambla fragmentos de helechos, raíces y hojas de eucalipto prensadas a mano con mallas topográficas y nubes de puntos generadas mediante escaneo láser.

El collage deja de ser un ejercicio puramente manual de recorte para convertirse en una negociación algorítmica entre la textura biológica imperfecta y la geometría euclidiana que intenta clasificarla.

## Proceso
Cada espécimen físico se digitaliza a 2400 ppp junto con su mapa de profundidad LiDAR. Un script en Python con OpenCV detecta los nervios foliares mediante el operador laplaciano de Gauss y construye una triangulación de Delaunay restringida:

`T = Delaunay(V_contours ∪ V_stochastic)`
`E_contour(z) = ∫ |∇I(x,y)|² dx dy`

Sobre las regiones de mayor gradiente orgánico se proyectan isolíneas vectoriales en color terracota (`#FF5500`), fusionando grabado naturalista clásico y telemetría espacial.
