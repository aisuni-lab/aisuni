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

`P_node(t) = P_base + sin(ω·t + φ) · (TNSN / 100) · N_normal`

En la implementación web, un motor WebGL recalcula los puntos de control a 60 fps mediante transformadas afines directas en la CPU acopladas a audio reactivo.
