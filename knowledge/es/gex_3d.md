---
layout: default
title: GEX 3D Surface
lang: es
permalink: /knowledge/es/gex_3d
---

# Superficie 3D Exposición Gamma Neta

## 1. Introducción

La **superficie 3D de Exposición Neta de Gamma (GEX)** muestra cómo varía la exposición de los dealers según el **precio de ejercicio, el tiempo hasta el vencimiento y la volatilidad implícita**.  
Más que un valor puntual, es una representación espacial del **impacto de las coberturas** sobre la dinámica del mercado.

![Figura 1: Vista general de la Superficie 3D GEX](/assets/images/gex_3d_1.png)

## 2. Aplicación

La GEX se calcula sumando las exposiciones gamma de calls y puts, ponderadas por el interés abierto y el tamaño del contrato para cada strike y vencimiento.

Ejes 3D:
- **Eje X:** Precio de Ejercicio  
- **Eje Y:** Tiempo 
- **Eje Z:** Exposición Neta de Gamma  

Interpretación:
- **Zonas de GEX Positiva:** Los dealers están largos gamma → absorben movimientos, reducen volatilidad.  
- **Zonas de GEX Negativa:** Los dealers están cortos gamma → amplifican los movimientos del mercado.  

El gradiente de la superficie permite anticipar **zonas de transición** y **picos de riesgo**.

![Figura 2: Visualización de Regímenes Gamma](/assets/images/gex_3d_2.png)

## 3. Puntos Clave

- La superficie 3D GEX actúa como un **mapa tridimensional de volatilidad implícita y exposición**.  
- Zonas de gamma negativa tienden a coincidir con **caídas violentas o movimientos extremos**.  
- Su seguimiento por vencimientos ayuda a prever **momentos de liberación o absorción de liquidez**.  
- Un gradiente pronunciado cerca del spot indica **alta sensibilidad a coberturas gamma**.

[← Ir a Indice](./index.md)