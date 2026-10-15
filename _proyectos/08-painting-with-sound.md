---
id: "painting-with-sound"
num: "08"
title: "Painting with Sound — Interfaz Espectral y Sinestesia Acústica"
category: "Interfaces"
categoryTag: "Interfaces Sonoras & Visualización"
year: "2026"
client: "Sofiane Pamart · Destilo & Vibe Fridays (UNICEF)"
image: "assets/obra-08-interfaces-portada.svg"
gallery:
  - "assets/obra-08-interfaces-portada.svg"
  - "assets/obra-08-interfaces-detalle.svg"
  - "assets/obra-08-interfaces-proceso.svg"
tools: "Web Audio API, GLSL, TouchDesigner, MIDI/OSC"
status: "Exhibición Internacional"
---

## Concepto
Interfaz performativa e instrumento de visualización acústica diseñado para traducir composiciones de piano neoclásico y síntesis modular en arquitecturas lumínicas de precisión suiza. Presentada en *Vibe Fridays at UNICEF*, *Destilo 4th Edition* y *Sottotraccia Festival*, la obra convierte el espectro armónico en una escultura radial viva.

Cada nota musical no se limita a activar un color, sino que construye una geometría persistente donde el timbre, el ataque percusivo y la reverberación del pedal quedan cincelados en el espacio digital.

## Proceso
La señal de audio entrante se descompone mediante una banco de filtros de transformada de Fourier de tiempo corto (STFT) con ventana de Blackman-Harris de 2048 muestras y solapamiento del 75%:

`X(m, ω) = ∑_{n=-∞}^{∞} x[n] · w[n - mR] · e^{-jωn}`
`Centroid_f = (∑ f_k · |X(k)|) / (∑ |X(k)|)`

El centroide espectral gobierna el radio de curvatura y la dispersión angular de la interfaz, mientras los transitorios de fase generan anillos concéntricos de alta definición listos para proyección láser y grabado editorial.
