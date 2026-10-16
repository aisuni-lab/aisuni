---
id: "elso-tipografia-variable"
num: "05"
title: "Elso — Tipografía Cinética y Sistema de Identidad Variable"
category: "Tipografía"
categoryTag: "Tipografía Experimental & Sistemas"
year: "2025"
client: "Fundición Experimental · AISUNI Type"
image: "assets/obra-05-tipografia-portada.svg"
gallery:
  - "assets/obra-05-tipografia-portada.svg"
  - "assets/obra-05-tipografia-detalle.svg"
  - "assets/obra-05-tipografia-proceso.svg"
tools: "Glyphs 3, Python, FontTools, WebGL"
status: "Lanzamiento v2.4"
---

## Concepto
Desarrollo de una familia tipográfica experimental de proporción neogrotesca suiza cuyos glifos responden en tiempo real a estímulos acústicos, velocidad de lectura y coordenadas del cursor. Concebida como una crítica a la letra impresa inmutable, *Elso* trata cada carácter como un sistema mecánico articulado por tensores elásticos.

Su arquitectura combina la sobriedad funcional de las sin serifas helvéticas de posguerra con modulaciones geométricas extremas que permiten transitar desde un texto editorial ultra-legible hasta una escultura abstracta de curvas Bézier.

## Proceso
La fuente se compiló como un archivo OpenType Variable Font con tres ejes paramétricos personalizados: Peso (`wght: 100–900`), Tensión Angular (`TNSN: 0–100`) y Frecuencia de Resonancia (`FREQ: 0–1000`):

`B(t) = (1-t)³P_0 + 3(1-t)²t P_1(ω) + 3(1-t)t² P_2(ω) + t³P_3`

Los puntos de control fuera de curva (`P_1`, `P_2`) se desplazan armónicamente según la transformada rápida de Fourier (FFT) de la señal de entrada, manteniendo invariantes las métricas verticales y el interletraje óptico.
