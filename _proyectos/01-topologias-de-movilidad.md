---
num: "01"
title: "YYYY VIDA — Topologías de Movilidad Urbana"
category: "Algoritmos"
categoryTag: "Algoritmos & Visualización de Datos"
year: "2026"
client: "MIT Media Lab · Senseable Mobility"
image: "assets/obra-01-flujos-portada.jpg"
gallery:
  - "assets/obra-01-flujos-portada.jpg"
  - "assets/obra-01-flujos-detalle.svg"
  - "assets/obra-01-flujos-proceso.svg"
tools: "Python, GLSL Shaders, Processing, D3.js"
status: "Comisionado · Publicado"
---

## Concepto
Investigación visual sobre la percepción de seguridad peatonal y los flujos de micro-movilidad en entornos metropolitanos densos. A partir de 2,640 segmentos vectoriales georreferenciados, la obra traduce variables intangibles —como iluminación nocturna, fricción modal y densidad de tránsito— en una cartografía generativa de alta precisión.

En lugar de representar la ciudad como una retícula estática de asfalto, el sistema modela el tejido urbano como un organismo termodinámico donde cada trayecto ciudadano deforma el campo de fuerzas local, revelando corredores de cohesión comunitaria y zonas de sombra infraestructural.

## Proceso
El motor de simulación procesa matrices de origen-destino mediante un campo vectorial libre de divergencia (*Curl Noise 3D*) acoplado a integradores numéricos de cuarto orden (Runge-Kutta RK4):

`v(x, y, t) = ∇ × ψ(x, y, t) + α · F_datamap(x, y)`
`x_{k+1} = x_k + (Δt / 6) · (k_1 + 2k_2 + 2k_3 + k_4)`

Cada partícula hereda la velocidad media del tramo viario y modula su espesor caligráfico y temperatura cromática (`#FF5500` para arterias de alta fricción; `#F8F9FA` para flujos laminares) directamente en un fragment shader GLSL a 60 fotogramas por segundo.
