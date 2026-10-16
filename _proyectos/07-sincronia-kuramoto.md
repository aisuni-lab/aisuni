---
num: "07"
title: "Manifiesto de Fase — Procesos de Sincronización Autónoma"
category: "Procesos"
categoryTag: "Procesos Sistémicos & Autómatas"
year: "2026"
client: "Mozilla Fest 2026 · Ponencia & Demo"
image: "assets/obra-07-procesos-portada.svg"
gallery:
  - "assets/obra-07-procesos-portada.svg"
  - "assets/obra-07-procesos-detalle.svg"
  - "assets/obra-07-procesos-proceso.svg"
tools: "Rust, WebAssembly, Canvas 2D, OSC"
status: "Investigación Activa"
---

## Concepto
¿Cómo emerge el orden colectivo a partir del caos individual sin la intervención de un nodo central? Esta pieza procesual documenta 72 horas de ejecución ininterrumpida de una red de 4,096 osciladores autónomos acoplados, análogos al parpadeo simultáneo de las luciérnagas o la activación neuronal en el córtex visual.

El resultado es una partitura gráfica evolutiva donde el tiempo deja una huella estratigráfica, mostrando el instante exacto de transición de fase entre la entropía térmica y la resonancia absoluta.

## Proceso
El motor matemático, escrito en Rust y compilado a WebAssembly, integra el modelo no lineal de Kuramoto con acoplamiento topológico de mundo pequeño (Watts-Strogatz):

`dθ_i / dt = ω_i + (K / N) ∑_{j=1}^{N} sin(θ_j - θ_i)`
`r · e^{iψ} = (1 / N) ∑_{j=1}^{N} e^{iθ_j}`

El parámetro de orden macroscópico `r(t) ∈ [0, 1]` modula el grosor de los anillos orbitales concéntricos y emite paquetes de control Open Sound Control (OSC) hacia sintetizadores analógicos modulares.
